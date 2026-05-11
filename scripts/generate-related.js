const fs = require('fs');
const path = require('path');

const VOYAGE_URL = 'https://api.voyageai.com/v1/embeddings';
const MODEL = 'voyage-3';
const BATCH_SIZE = 128;
const TOP_N = 3;

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { meta: {}, body: content };

  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key) continue;

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, '');
    }
    meta[key] = value;
  }

  const body = content.slice(match[0].length);
  return { meta, body };
}

function buildEmbedInput(meta, body) {
  const title = meta.title || '';
  let tags = '';
  if (Array.isArray(meta.tags)) {
    tags = meta.tags.join(' ');
  } else if (typeof meta.tags === 'string') {
    tags = meta.tags;
  }
  const cleaned = body.replace(/[#*`\[\]]/g, '').slice(0, 300);
  return `${title} ${tags} ${cleaned}`.replace(/\s+/g, ' ').trim();
}

function cosineSimilarity(a, b) {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function topRelated(target, all, n) {
  return all
    .filter(item => item.file !== target.file)
    .map(item => ({
      file: item.file,
      title: item.title,
      score: cosineSimilarity(target.embedding, item.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map(({ file, title }) => ({ file, title }));
}

async function fetchEmbeddings(inputs, apiKey, fetchFn = fetch) {
  const res = await fetchFn(VOYAGE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: inputs, model: MODEL, input_type: 'document' }),
  });
  if (!res.ok) {
    const text = typeof res.text === 'function' ? await res.text() : '';
    throw new Error(`Voyage API ${res.status}: ${text}`);
  }
  const json = await res.json();
  return json.data
    .slice()
    .sort((a, b) => a.index - b.index)
    .map(d => d.embedding);
}

async function embedInBatches(inputs, apiKey, batchSize = BATCH_SIZE) {
  const out = [];
  for (let i = 0; i < inputs.length; i += batchSize) {
    const batch = inputs.slice(i, i + batchSize);
    let attempt = 0;
    while (true) {
      try {
        const vectors = await fetchEmbeddings(batch, apiKey);
        out.push(...vectors);
        break;
      } catch (err) {
        attempt++;
        if (attempt >= 3) throw err;
        const delay = 500 * Math.pow(2, attempt);
        console.warn(`배치 ${i / batchSize} 재시도 ${attempt} (${delay}ms): ${err.message}`);
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  return out;
}

async function main() {
  require('dotenv').config();
  const apiKey = process.env.VOYAGE_API_KEY;
  if (!apiKey) {
    console.error('VOYAGE_API_KEY 환경변수가 없습니다');
    process.exit(1);
  }

  const postsDir = path.join(__dirname, '..', '_posts');
  const outPath = path.join(__dirname, '..', '_data', 'related.json');

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  console.log(`포스트 ${files.length}개 발견`);

  const items = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { meta, body } = parseFrontmatter(raw);
    if (!meta.title) {
      console.warn(`스킵 (title 없음): ${file}`);
      continue;
    }
    items.push({
      file,
      title: meta.title,
      input: buildEmbedInput(meta, body),
    });
  }

  console.log(`임베딩 대상 ${items.length}개, 배치 호출 시작`);
  const vectors = await embedInBatches(items.map(i => i.input), apiKey);
  items.forEach((item, idx) => { item.embedding = vectors[idx]; });

  const result = {};
  for (const target of items) {
    result[target.file] = topRelated(target, items, TOP_N);
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`저장 완료: ${outPath}`);
}

module.exports = {
  parseFrontmatter,
  buildEmbedInput,
  cosineSimilarity,
  topRelated,
  fetchEmbeddings,
};

if (require.main === module) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

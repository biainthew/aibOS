// scripts/notion-sync.js
require('dotenv').config();
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const crypto = require("crypto");

// Notion 클라이언트 초기화 (API 버전 2025-09-03)
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    notionVersion: "2025-09-03",
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// 날짜 포맷 함수
function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// 코드블록(```)을 {% raw %}...{% endraw %}로 감싸며 리스트 중첩 들여쓰기를 정규화한다.
//
// notion-to-md 는 리스트 항목 안의 코드블록을 일관성 없이 출력한다(여는 펜스만 들여쓰고
// 내용/닫는 펜스는 col 0 등). 펜스가 col 0 이면 마크다운 리스트가 그 지점에서 끊겨
//   - 이어지는 번호 항목이 새 리스트로 재시작(2 → 1)되고
//   - 들여쓴 콜아웃(> ...)이 코드블록으로 오인되며
//   - 여는/닫는 펜스 들여쓰기가 어긋나면 kramdown 이 닫힘을 인식하지 못해 깨진다.
// 또한 notion-to-md 의 4칸 들여쓰기는 리스트 마커 폭(`1. ` = 3칸)과 달라 코드 앞에 공백 1칸이 남는다.
//
// => 각 코드블록을 "직전 리스트 항목의 콘텐츠 오프셋"(예: `1.`→3칸, `- `→2칸)에 정확히 맞춰
//    재들여쓰기한다. 코드 내부의 상대 들여쓰기(탭 등)는 보존하고, 리스트 밖 블록은 col 0 으로 둔다.
function wrapCodeBlocks(text) {
    const lines = text.split("\n");
    const markerRe = /^(\s*)(\d+[.)]|[-*+])(\s+)\S/; // 순서/비순서 리스트 마커
    const fenceClose = /^[ \t]*```[ \t]*$/;
    const out = [];
    let i = 0;

    while (i < lines.length) {
        if (!/^[ \t]*```/.test(lines[i])) {
            out.push(lines[i]);
            i++;
            continue;
        }

        // 닫는 펜스 탐색
        let j = i + 1;
        while (j < lines.length && !fenceClose.test(lines[j])) j++;
        if (j >= lines.length) { // 닫는 펜스가 없으면 손대지 않음(방어)
            out.push(lines[i]);
            i++;
            continue;
        }
        const block = lines.slice(i, j + 1);

        // 직전 리스트 항목의 콘텐츠 오프셋 계산 (없으면 최상위 → 빈 문자열)
        let offset = "";
        for (let k = i - 1; k >= 0; k--) {
            const t = lines[k];
            if (t.trim() === "") continue;            // 빈 줄 건너뜀
            const m = t.match(markerRe);
            if (m) { offset = " ".repeat((m[1] + m[2] + m[3]).length); break; }
            if (/^[ \t]+\S/.test(t)) continue;         // 들여쓴 연속 콘텐츠 → 계속 위로
            break;                                     // col 0 의 비-마커 콘텐츠 → 리스트 밖
        }

        // 내용 줄들의 공통 선행 공백(베이스)을 구해 제거 후 offset 부여 (상대 들여쓰기 보존)
        const content = block.slice(1, -1);
        let base = null;
        for (const l of content) {
            if (l.trim() === "") continue;
            const lead = (l.match(/^[ \t]*/) || [""])[0];
            if (base === null) { base = lead; continue; }
            let c = 0;
            while (c < base.length && c < lead.length && base[c] === lead[c]) c++;
            base = base.slice(0, c);
        }
        base = base || "";

        const openFence = block[0].replace(/^[ \t]*/, "");
        const closeFence = block[block.length - 1].replace(/^[ \t]*/, "");
        const reContent = content.map((l) => {
            if (l.trim() === "") return "";
            const rest = l.startsWith(base) ? l.slice(base.length) : l.replace(/^[ \t]*/, "");
            return offset + rest;
        });

        out.push(`${offset}{% raw %}`, offset + openFence, ...reContent, offset + closeFence, `${offset}{% endraw %}`);
        i = j + 1;
    }

    return out.join("\n");
}

// 파일명 생성 함수
function createFileName(title, date) {
    const formattedDate = formatDate(date);
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s]/g, "")
        .replace(/\s+/g, "-");
    return `${formattedDate}-${slug}.md`;
}

// 이미지 디렉토리 경로
const IMAGES_DIR = path.join(process.cwd(), "public", "images", "posts");

// 이미지 다운로드 함수
function downloadImage(url, filePath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith("https") ? https : http;

        const request = protocol.get(url, (response) => {
            // 리다이렉트 처리
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                downloadImage(response.headers.location, filePath)
                    .then(resolve)
                    .catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`이미지 다운로드 실패: ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);

            fileStream.on("finish", () => {
                fileStream.close();
                resolve(true);
            });

            fileStream.on("error", (err) => {
                fs.unlink(filePath, () => {}); // 실패 시 파일 삭제
                reject(err);
            });
        });

        request.on("error", reject);
        request.setTimeout(30000, () => {
            request.destroy();
            reject(new Error("이미지 다운로드 타임아웃"));
        });
    });
}

// URL에서 확장자 추출
function getExtensionFromUrl(url) {
    const urlWithoutQuery = url.split("?")[0];
    const match = urlWithoutQuery.match(/\.([a-zA-Z0-9]+)$/);
    if (match) {
        const ext = match[1].toLowerCase();
        if (["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"].includes(ext)) {
            return `.${ext}`;
        }
    }
    return ".png"; // 기본값
}

// Notion S3 이미지 URL인지 확인
function isNotionS3Url(url) {
    return url.includes("prod-files-secure.s3") ||
           url.includes("s3.us-west-2.amazonaws.com") ||
           url.includes("notion.so/image");
}

// 마크다운 내 이미지 URL을 로컬 경로로 교체
async function processImages(markdown, pageId) {
    // 이미지 디렉토리 생성
    if (!fs.existsSync(IMAGES_DIR)) {
        fs.mkdirSync(IMAGES_DIR, { recursive: true });
    }

    // 마크다운 이미지 패턴: ![alt](url)
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match;
    const replacements = [];

    while ((match = imageRegex.exec(markdown)) !== null) {
        const [fullMatch, altText, imageUrl] = match;

        // Notion S3 URL인 경우에만 처리
        if (isNotionS3Url(imageUrl)) {
            // 파일명 생성 (URL 해시 기반)
            const urlHash = crypto.createHash("md5").update(imageUrl.split("?")[0]).digest("hex").substring(0, 12);
            const ext = getExtensionFromUrl(imageUrl);
            const fileName = `${pageId.replace(/-/g, "").substring(0, 8)}-${urlHash}${ext}`;
            const localPath = path.join(IMAGES_DIR, fileName);

            // baseurl을 포함한 웹 경로
            const webPath = `/aibOS/public/images/posts/${fileName}`;

            replacements.push({
                original: fullMatch,
                altText,
                imageUrl,
                fileName,
                localPath,
                webPath
            });
        }
    }

    // 이미지 다운로드 및 교체
    let processedMarkdown = markdown;
    for (const item of replacements) {
        try {
            // 이미 다운로드된 파일이 있으면 스킵
            if (!fs.existsSync(item.localPath)) {
                console.log(`  ↓ 이미지 다운로드: ${item.fileName}`);
                await downloadImage(item.imageUrl, item.localPath);
            } else {
                console.log(`  ✓ 이미지 캐시 사용: ${item.fileName}`);
            }

            // URL 교체
            const newImageTag = `![${item.altText}](${item.webPath})`;
            processedMarkdown = processedMarkdown.replace(item.original, newImageTag);
        } catch (error) {
            console.error(`  ✗ 이미지 다운로드 실패: ${error.message}`);
            // 실패 시 원본 URL 유지
        }
    }

    return processedMarkdown;
}

// 제목 속성 찾기
function getTitleFromPage(page) {
    // '이름' 속성에서 제목 가져오기
    if (page.properties['이름']?.title?.[0]?.plain_text) {
        return page.properties['이름'].title[0].plain_text;
    }

    return "Untitled";
}

// Front Matter 생성
function createFrontMatter(page) {
    const title = getTitleFromPage(page);
    const date = page.properties['날짜']?.date?.start || page.created_time;
    const tags = page.properties['태그']?.multi_select?.map(tag => tag.name) || [];
    const category = "general"; // 카테고리 속성이 없으므로 기본값

    return `---
layout: post
title: "${title}"
date: ${formatDate(date)}
categories: [${category}]
tags: [${tags.join(", ")}]
excerpt_separator: ""
---

`;
}

async function getDataSourceId(databaseId) {
    try {
        // 데이터베이스에서 data_source 목록 가져오기
        const database = await notion.databases.retrieve({
            database_id: databaseId,
        });

        // 첫 번째 data source 사용 (대부분의 경우 하나만 존재)
        if (database.data_sources && database.data_sources.length > 0) {
            return database.data_sources[0].id;
        }

        throw new Error("데이터 소스를 찾을 수 없습니다.");
    } catch (error) {
        console.error("데이터 소스 조회 실패:", error);
        throw error;
    }
}

// 모든 페이지를 가져오는 재귀 함수
async function getAllPages(dataSourceId, isFullSync) {
    let pages = [];
    let cursor = undefined;

    // 업데이트 모드일 경우 필터 설정 (최근 24시간 내 수정된 것만)
    const filter = isFullSync ? undefined : {
        timestamp: "last_edited_time",
        last_edited_time: {
            on_or_after: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
        }
    };

    while (true) {
        const body = {
            start_cursor: cursor,
            sorts: [{ timestamp: "last_edited_time", direction: "descending" }]
        };
        if (filter) body.filter = filter; // 필터가 있을 때만 추가

        const response = await notion.request({
            path: `data_sources/${dataSourceId}/query`,
            method: "POST",
            body: body
        });

        pages.push(...response.results);

        // 다음 페이지가 없으면 반복 종료
        if (!response.has_more) break;
        cursor = response.next_cursor;
    }
    return pages;
}

async function syncNotionToGitHub() {
    try {
        // 인자값 확인: --full 이 있으면 전체 삭제 후 동기화
        const isFullSync = process.argv.includes('--full');

        const databaseId = process.env.NOTION_DATABASE_ID;
        console.log("모든 데이터를 불러오는 중...");

        const dataSourceId = await getDataSourceId(databaseId);
        console.log(`데이터 소스 ID: ${dataSourceId}`);

        // 1. 모든 페이지 가져오기
        const allPages = await getAllPages(dataSourceId, isFullSync);
        console.log(`총 ${allPages.length}개의 글을 찾았습니다.`);

        const postsDir = path.join(process.cwd(), "_posts");

        // 2. 전체 동기화 모드일 때만 폴더를 삭제
        if (isFullSync && fs.existsSync(postsDir)) {
            console.log("전체 동기화 모드: 기존 파일을 삭제합니다.");
            fs.rmSync(postsDir, { recursive: true, force: true });
            fs.mkdirSync(postsDir, { recursive: true });
        } else if (!fs.existsSync(postsDir)) {
            fs.mkdirSync(postsDir, { recursive: true });
        }

        // 3. 각 페이지를 마크다운으로 변환
        for (const page of allPages) {
            const title = getTitleFromPage(page);
            const date = page.properties.Date?.date?.start ||
                page.properties.date?.date?.start ||
                page.properties['작성일']?.date?.start ||
                page.created_time;

            console.log(`처리 중: ${title}`);

            // Notion 페이지를 마크다운으로 변환
            const mdblocks = await n2m.pageToMarkdown(page.id);
            const mdString = n2m.toMarkdownString(mdblocks);

            // 본문의 {{ }} 가 Liquid 문법으로 오해받지 않도록 escape 처리
            let bodyContent = "";
            if (mdString && typeof mdString === 'string') {
                bodyContent = mdString;
            } else if (mdString && mdString.parent) {
                bodyContent = mdString.parent;
            }

            // Liquid 문법 오해 방지: 코드블록은 전체를 {% raw %}로 감싸고, 그 외 {{ }}는 개별 처리
            if (bodyContent) {
                // 0. Notion의 "plain text" 언어를 Jekyll 호환 "plaintext"로 변환
                bodyContent = bodyContent.replace(/```plain text/g, '```plaintext');

                // 1. 코드블록(```)을 {% raw %}...{% endraw %}로 감싸며 리스트 중첩 들여쓰기를 정규화
                bodyContent = wrapCodeBlocks(bodyContent);

                // 2. 코드블록 밖의 {{ }}는 개별 처리 (이미 {% raw %} 안에 있는 것은 제외)
                // {% raw %}...{% endraw %} 블록을 임시로 플레이스홀더로 대체
                const rawBlocks = [];
                bodyContent = bodyContent.replace(/\{% raw %\}[\s\S]*?\{% endraw %\}/g, (match) => {
                    rawBlocks.push(match);
                    return `__RAW_BLOCK_${rawBlocks.length - 1}__`;
                });

                // 코드블록 밖의 {{ }}를 처리
                bodyContent = bodyContent
                    .replace(/\{\{/g, "{% raw %}{{{% endraw %}")
                    .replace(/\}\}/g, "{% raw %}}}{% endraw %}");

                // 플레이스홀더를 원래 코드블록으로 복원
                bodyContent = bodyContent.replace(/__RAW_BLOCK_(\d+)__/g, (_, index) => {
                    return rawBlocks[parseInt(index)];
                });

                // 3. 코드 밖의 HTML 태그처럼 보이는 '<' (제네릭 <T>, <String> 등)를 escape
                //    kramdown이 이를 HTML 태그로 해석해 뒤따르는 콘텐츠를 삼켜 레이아웃이 깨지는 것을 방지.
                {
                    // 코드블록({% raw %}...{% endraw %})과 인라인 코드(`...`)는 보호한다.
                    // (그 안에서는 < 가 안전하며, &lt; 로 바꾸면 오히려 글자 그대로 노출됨)
                    const protectedBlocks = [];
                    let escaped = bodyContent.replace(
                        /\{% raw %\}[\s\S]*?\{% endraw %\}|`[^`\n]+`/g,
                        (match) => {
                            protectedBlocks.push(match);
                            return `__PROTECTED_${protectedBlocks.length - 1}__`;
                        }
                    );

                    // 태그 시작 패턴('<' 뒤에 영문/'/'/'!'/'?')만 escape.
                    // blockquote('>')나 비교 연산('a < b')은 건드리지 않는다.
                    escaped = escaped.replace(/<([A-Za-z\/!?])/g, "&lt;$1");

                    bodyContent = escaped.replace(/__PROTECTED_(\d+)__/g, (_, index) => {
                        return protectedBlocks[parseInt(index)];
                    });
                }
            }

            // 이미지 다운로드 및 경로 교체
            bodyContent = await processImages(bodyContent, page.id);

            // Front Matter + 본문 결합
            const frontMatter = createFrontMatter(page);
            const fullContent = frontMatter + "\n" + bodyContent;

            // 파일 저장
            const fileName = createFileName(title, date);
            const filePath = path.join(postsDir, fileName);
            fs.writeFileSync(filePath, fullContent, "utf8");

            console.log(`✓ 저장 완료: ${fileName}`);
        }

        console.log("모든 글 동기화 완료!");

    } catch (error) {
        console.error("에러 발생:", error);
        process.exit(1);
    }
}

syncNotionToGitHub();
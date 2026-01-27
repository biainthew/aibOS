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

            // 예제 코드 블록 내외의 {{ }} 를 감싸기 위해 본문 전체 혹은 {{ }} 가 나타나는 구간을 {% raw %}로 감쌈
            if (bodyContent && bodyContent.includes('{{')) {
                bodyContent = bodyContent
                    .replace(/\{\{/g, "{% raw %}{{{% endraw %}")
                    .replace(/\}\}/g, "{% raw %}}}{% endraw %}");
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
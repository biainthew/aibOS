// scripts/notion-sync.js
require('dotenv').config();
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

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
async function getAllPages(dataSourceId) {
    let pages = [];
    let cursor = undefined;

    while (true) {
        const response = await notion.request({
            path: `data_sources/${dataSourceId}/query`,
            method: "POST",
            body: {
                start_cursor: cursor,
                sorts: [
                    {
                        timestamp: "created_time",
                        direction: "descending"
                    }
                ]
            }
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
        const databaseId = process.env.NOTION_DATABASE_ID;
        console.log("모든 데이터를 불러오는 중...");

        const dataSourceId = await getDataSourceId(databaseId);
        console.log(`데이터 소스 ID: ${dataSourceId}`);

        // 1. 모든 페이지 가져오기
        const allPages = await getAllPages(dataSourceId);
        console.log(`총 ${allPages.length}개의 글을 찾았습니다.`);

        const postsDir = path.join(process.cwd(), "_posts");

        // 2. 폴더 초기화 (필요 시)
        if (fs.existsSync(postsDir)) {
            fs.rmSync(postsDir, { recursive: true, force: true });
        }
        fs.mkdirSync(postsDir, { recursive: true });

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
                bodyContent = "\n{% raw %}\n" + bodyContent + "\n{% endraw %}\n";
            }

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
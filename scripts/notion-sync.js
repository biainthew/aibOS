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
---

`;
}

async function getDataSourceId(databaseId) {
    try {
        // Step 1: 데이터베이스에서 data_source 목록 가져오기
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

async function syncNotionToGitHub() {
    try {
        console.log("Notion 데이터베이스에서 데이터 소스 가져오는 중...");

        const databaseId = process.env.NOTION_DATABASE_ID;

        // Step 1: data_source_id 가져오기
        const dataSourceId = await getDataSourceId(databaseId);
        console.log(`데이터 소스 ID: ${dataSourceId}`);

        // Step 2: 데이터 소스에서 모든 글 가져오기
        // 주의: query는 이제 dataSources.query를 사용
        const response = await notion.request({
            path: `data_sources/${dataSourceId}/query`,
            method: "POST",
            body: {
                // 필터와 정렬 제거 - 모든 페이지 가져오기
            }
        });

        console.log(`${response.results.length}개의 글을 찾았습니다.`);

        // _posts 디렉토리 생성
        const postsDir = path.join(process.cwd(), "_posts");
        if (!fs.existsSync(postsDir)) {
            fs.mkdirSync(postsDir, { recursive: true });
        }

        // 각 페이지를 마크다운으로 변환
        for (const page of response.results) {
            const title = getTitleFromPage(page);
            const date = page.properties.Date?.date?.start ||
                page.properties.date?.date?.start ||
                page.properties['작성일']?.date?.start ||
                page.created_time;

            console.log(`처리 중: ${title}`);

            // Notion 페이지를 마크다운으로 변환
            const mdblocks = await n2m.pageToMarkdown(page.id);
            const mdString = n2m.toMarkdownString(mdblocks);

            // Front Matter + 본문 결합
            const frontMatter = createFrontMatter(page);
            const fullContent = frontMatter + mdString.parent;

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
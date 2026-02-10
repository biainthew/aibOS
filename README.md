# aibOS

Notion 데이터베이스와 연동하여 자동으로 블로그 포스트를 동기화하고 GitHub Pages로 배포하는 Jekyll 기반 정적 블로그입니다.

## 주요 기능

- **Notion 자동 동기화** - Notion 데이터베이스의 글을 Jekyll 마크다운으로 자동 변환
- **검색 및 태그 필터** - 클라이언트 사이드 검색, 단일/다중 태그 필터링, 정렬
- **다크/라이트 모드** - 테마 전환 지원 (localStorage 저장)
- **반응형 디자인** - 모바일, 태블릿, 데스크톱 대응 그리드 레이아웃
- **자동 배포** - GitHub Actions를 통한 매일 자동 동기화 및 배포
- **코드 하이라이팅** - Rouge 기반 구문 강조
- **RSS 피드** - Atom 형식의 피드 제공

## 기술 스택

| 분류 | 기술 |
|------|------|
| 정적 사이트 생성 | Jekyll 3.10, Kramdown, Liquid |
| 스타일링 | SCSS, 반응형 CSS Grid |
| 클라이언트 | Vanilla JavaScript (ES6+) |
| Notion 동기화 | Node.js, @notionhq/client, notion-to-md |
| CI/CD | GitHub Actions |
| 호스팅 | GitHub Pages |

## 프로젝트 구조

```
aibOS/
├── _config.yml              # Jekyll 설정
├── _posts/                  # 블로그 포스트 (Notion에서 자동 생성)
├── _layouts/                # 페이지 레이아웃 (default, page, post)
├── _includes/               # HTML 파셜 (header, search, tags 등)
├── public/
│   ├── css/                 # 스타일시트
│   ├── js/common.js         # 검색, 필터, 페이지네이션 등 인터랙션
│   └── images/              # 이미지 에셋
├── scripts/
│   └── notion-sync.js       # Notion API 동기화 스크립트
├── .github/workflows/
│   └── notion-sync.yml      # 자동 동기화 및 배포 워크플로우
├── index.html               # 메인 페이지
├── atom.xml                 # RSS 피드
├── Gemfile                  # Ruby 의존성
└── package.json             # Node.js 의존성
```

## 시작하기

### 사전 요구사항

- Ruby 3.1+
- Node.js 18+
- Notion API 토큰 및 데이터베이스 ID

### 설치

```bash
# Ruby 의존성 설치
bundle install

# Node.js 의존성 설치
npm install
```

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성합니다.

```env
NOTION_TOKEN=your_notion_api_token
NOTION_DATABASE_ID=your_notion_database_id
```

### Notion 동기화

```bash
# 증분 동기화 (최근 24시간 변경분)
node scripts/notion-sync.js

# 전체 동기화 (모든 포스트 재생성)
node scripts/notion-sync.js --full
```

### 로컬 실행

```bash
bundle exec jekyll serve
```

`http://localhost:4000/aibOS` 에서 사이트를 확인할 수 있습니다.

## 자동 배포

GitHub Actions를 통해 매일 UTC 00:00에 자동으로 Notion 동기화 및 배포가 실행됩니다.

- **평일**: 증분 동기화 (최근 변경분만)
- **일요일**: 전체 동기화 (전체 재빌드)
- **수동 실행**: GitHub Actions에서 `workflow_dispatch`로 수동 트리거 가능

## 라이선스

MIT

## 작성자

**이비아** - [GitHub](https://github.com/biainthew) | [Email](mailto:lba0507@gmail.com)

# aibOS

A Jekyll-based static blog that automatically syncs blog posts from a Notion database and deploys to GitHub Pages.

## Features

- **Notion Auto-Sync** - Automatically converts Notion database entries to Jekyll markdown
- **Search & Tag Filtering** - Client-side search, single/multi-tag filtering, and sorting
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Responsive Design** - Mobile, tablet, and desktop grid layout
- **Automated Deployment** - Daily auto-sync and deploy via GitHub Actions
- **Syntax Highlighting** - Rouge-based code highlighting
- **RSS Feed** - Atom format feed

## Tech Stack

| Category | Technology |
|----------|-----------|
| Static Site Generator | Jekyll 3.10, Kramdown, Liquid |
| Styling | SCSS, Responsive CSS Grid |
| Client-side | Vanilla JavaScript (ES6+) |
| Notion Sync | Node.js, @notionhq/client, notion-to-md |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

## Project Structure

```
aibOS/
├── _config.yml              # Jekyll configuration
├── _posts/                  # Blog posts (auto-generated from Notion)
├── _layouts/                # Page layouts (default, page, post)
├── _includes/               # HTML partials (header, search, tags, etc.)
├── public/
│   ├── css/                 # Stylesheets
│   ├── js/common.js         # Search, filter, pagination interactions
│   └── images/              # Image assets
├── scripts/
│   └── notion-sync.js       # Notion API sync script
├── .github/workflows/
│   └── notion-sync.yml      # Auto-sync and deploy workflow
├── index.html               # Main page
├── atom.xml                 # RSS feed
├── Gemfile                  # Ruby dependencies
└── package.json             # Node.js dependencies
```

## Getting Started

### Prerequisites

- Ruby 3.1+
- Node.js 18+
- Notion API token and database ID

### Installation

```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
NOTION_TOKEN=your_notion_api_token
NOTION_DATABASE_ID=your_notion_database_id
```

### Notion Sync

```bash
# Incremental sync (changes from last 24 hours)
node scripts/notion-sync.js

# Full sync (regenerate all posts)
node scripts/notion-sync.js --full
```

### Local Development

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000/aibOS` to view the site.

## Automated Deployment

GitHub Actions runs automatic Notion sync and deployment daily at UTC 00:00.

- **Weekdays**: Incremental sync (recent changes only)
- **Sundays**: Full sync (complete rebuild)
- **Manual**: Can be triggered manually via `workflow_dispatch` in GitHub Actions

## License

MIT

## Author

**Bia Lee** - [GitHub](https://github.com/biainthew) | [Email](mailto:lba0507@gmail.com)

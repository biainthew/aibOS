---
layout: post
title: "Vue github"
date: 2023-03-13
categories: [general]
tags: [Vue]
excerpt_separator: ""
---



### 1) vue.config.js 파일 생성


{% raw %}
```javascript
module.exports = {
    outputDir: './docs',
    publicPath: '/repository name/'
}
```
{% endraw %}


### 2) npm run build


하면 dist 폴더 대신 docs 폴더가 생성됨


### 3) 평소랑 똑같이 git 에 commit push


### 4) pages 에서 /docs 로 경로 지정하고 save


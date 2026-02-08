---
layout: post
title: "[Git]잘못 올린 파일 지우기(ex. .idea)"
date: 2024-06-04
categories: [general]
tags: [Work]
excerpt_separator: ""
---



### 1. .idea 폴더와 같은 위치에 .gitignore 파일 생성 후 아래 코드 추가


{% raw %}
```javascript
### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr
out/
!**/src/main/**/out/
!**/src/test/**/out/
```
{% endraw %}


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-52d91e54f2aa.png)


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-93e4367a1b2e.png)


### 2. 레포에서도 파일 지우기 + push


{% raw %}
```javascript
git rm --cashed -r .idea/
```
{% endraw %}


⇒ .idea 는 로컬에는 존재하고 레포에는 존재하면 안되므로 —cached 옵션 사용해서 삭제 후 push


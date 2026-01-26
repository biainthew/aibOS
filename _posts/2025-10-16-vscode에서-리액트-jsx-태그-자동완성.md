---
layout: post
title: "vscode에서 리액트 JSX 태그 자동완성"
date: 2023-01-31
categories: [general]
tags: [React]
excerpt_separator: ""
---



[*](https://doishalf.tistory.com/59)[ ](https://doishalf.tistory.com/59)[참고 문서](https://doishalf.tistory.com/59)


🦁 리액트에서 html 에서 쓰던 태그들 자동완성이 안 되는게 불편해서 찾아봄


👇🏻 해결 방법


```json
"emmet.syntaxProfiles": {
        "javascript": "jsx" 
    },
    "emmet.includeLanguages": {
       "javascript": "html"
   }
```


vscode 에서 control shift P 눌러 작업영역 설정에 들어가서 저 코드를 넣어주면 끝


프로젝트마다 계속 넣어줘야 한다


아니면 하단에 언어를 리액트로 바꿔줘도 되는데 그건 파일마다 해야됨


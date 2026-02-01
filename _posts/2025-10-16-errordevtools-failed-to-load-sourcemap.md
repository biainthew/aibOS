---
layout: post
title: "[Error]DevTools failed to load SourceMap"
date: 2023-01-12
categories: [general]
tags: [Work]
excerpt_separator: ""
---



* [참고 문서](https://sayit.tistory.com/entry/DevTools-failed-to-load-SourceMap-404-%EC%86%8C%EC%8A%A4-%EC%9D%BD%EA%B8%B0-%EC%8B%A4%ED%8C%A8-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)


🦁 git 에 올리기 전에 cdn 방식으로 사용했던 라이브러리들을 다운받는 도중에 뜬 에러


👇🏻 오류 코드


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-e84b8a115dfe.png)


👇🏻 해결 방법


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.29.png](/aibOS/public/images/posts/28e0a7f9-e2e147a9fb9b.png)


해당 소스파일( js, css) 파일의 제일 마지막 'sourceMappingURL' 속성의 참조 문구가 문제라고 한다


개발 히스토리를 기억하기 위한 문구라고 하는데 그 문구를 삭제하면 에러가 사라진다



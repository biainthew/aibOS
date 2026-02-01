---
layout: post
title: "[Error]unable to resolve dependency tree"
date: 2023-02-01
categories: [general]
tags: [React]
excerpt_separator: ""
---



[: 참고 문서](https://tesseractjh.tistory.com/234)


🦁 npm install 하려는 와중에 발생한 에러


👇🏻 오류 코드


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-1de79a813104.png)


원인은 2021년 2월 출시된 npm 7버전부터 추가된 **peerDependencies를 자동으로 설치하는 기능** 때문이라고 한다. peerDependencies를 자동으로 설치할 때, 이미 설치되어 있는 의존성(direct dependencies of the root project)과 동일하지만 버전이 다른 peerDependencies가 존재하면 충돌이 일어나서 위와 같은 에러가 나게 된다.


👇🏻 해결 방법


```javascript
npm install --legacy-peer-deps
npm install --force
```


둘 중 하나를 뒤에 붙여주면 된다


위에는 peerDependencies를 자동으로 설치하지 않도록 설정하는 것


밑에는 있는걸 무시하고 강제로 설치하도록 하는 것


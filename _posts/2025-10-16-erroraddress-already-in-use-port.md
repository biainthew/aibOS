---
layout: post
title: "[Error]address already in use :::{port}"
date: 2023-02-10
categories: [general]
tags: [React]
excerpt_separator: ""
---



[: 참고 문서](https://velog.io/@woojin/address-already-in-use-port-%ED%8F%AC%ED%8A%B8-%EC%8B%A4%ED%96%89-%EC%A4%91-%EC%97%90%EB%9F%AC%EA%B0%80-%EC%83%9D%EA%B8%B8-%EB%95%8C)


🦁 build 하려는데 뜸


👇🏻 오류 코드


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-ca7f89306898.png)


포트를 받아와서 실행하다가 뭐가 제대로 종료가 안 되면 나타나는 에러라고 한


👇🏻 해결 방법


```javascript
sudo lsof -i :5000
//이거 치면 나오는 화면에서 PID 밑에 있는 번호를
sudo kill -9 
601

//여기에 넣어주면 됨
```


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-e73e1d30a49f.png)


이렇게 포트 죽이고 끝 !


인 줄 알았는데 안죽고 계속 살아남 ,, 다른 방법을 찾아보겠다 ,,


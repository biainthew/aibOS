---
layout: post
title: "[Error]ReactDOM.render is no longer supported in React 18"
date: 2023-01-17
categories: [general]
tags: [React]
---


[*관련 링크](https://7357.tistory.com/44)


🦁 리액트 시작하려는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SEMWQXC%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDlQfpMVocKi%2Fp5x7MG%2FB3SisHOcQ5QuzzJmBhZRsCB1wIgHPsy3%2F2gnftGstkCkia%2F%2FVOG%2FwuMUsIvuKDlgbi%2BIBsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbCWXcHDODyNDhVjCrcA3s04P8WiqpT1K4t%2F4%2Fq1grTjX%2Fcnc89QHefUXmhnXFTA2pMRcItYNEat3QiONRTQG48%2B%2FuZMDE6JZxgzi%2FDKN6hfMJq9KJTWepS1P38m6y0KwZvYsoTCGiX9JctTpwGihyJ2Azs1U5bx7DXoLOXOvwtZMDGkuP2MypzbE1mbBK9mWjhj7XJ7s44w6EtIPA7b6NmBeoujH7Va2B0FFLDWEt6j4D8Zp9bh9lQBDZlK1%2BztRXDPwup7Utxg0FKifdtNkbHY5OxzVgpOLjxI0DQU1WSy3fQ3qPWKFDbBWmAyigOFwMiHAAps4Y9K4z3kO4MiJT%2FB3ordejJ5Zrx3BQEZ4AEV766cV1WHPz9gcXDxLG1r4sAVy5rigeO8pCL4rEXpCXzRkPOx%2BB7fliJDKoUGsgA%2F2MsS6Vgs%2BVh5XpUPrUgznHxM5nmJ6XlfNrP2zvSk6pMjG%2FhbfBxcNJW4ux31CLksF3WC6vSlw7DEWDv0oRD1kXfgEbLR0%2BxJQl1V4kfOCVV3q9YNiiUziK5eCJ%2FG3ohku1OjLLRMjZKGtUAXM3of%2Fg3A9S8lu63iX%2BczpFp%2FrLpd0wFY%2FVrOotWaBxjLPE8T6qfrEhXHjN%2FOAn1b2Fm5pN3zOHqlGrE%2FDw8MJqYpMoGOqUBybUrZMWaSyIdydUSuf567lvTWWaRCZDQ5c8C6PzZmSCwdUshR%2FyEb%2BflFAwSDFscy97rvGxWteaAia5uJxNgRbcJu5q%2BBVip99PB%2BvMGIyMzRsA89JeXXybXJqMN3hS%2Fl3TB2ErtaE6gTZWhCZfiT5hDam6REC2O0gQ5vw7fNyYkaHuXBrpynGeCiEe%2FN6sWOzcKJzqG3rQExj%2Fk%2Fd4V83uUnyA3&X-Amz-Signature=68031791ed68469f2d17011ceec35badf3ef382ea091091b44f477c288152afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


ReactDOM.render를 리액트 v18부터 사용하지 않기 때문에 나타나는 경고 메세지


👇🏻 해결 방법


```javascript
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();
```


위의 코드를 붙여넣기 하면 에러가 사라짐



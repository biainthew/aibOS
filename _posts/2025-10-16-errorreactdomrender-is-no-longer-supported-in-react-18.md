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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3ZZMWF%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCaP%2Bt%2B2XV0OL9kHGN0QkMEssJnU5Io3DskjEe8WuMHAiB0%2BvawpZ1fV9TwiIqH1BaPGIu9BkhHLe6HjqhqGIN%2F8yqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM14nlN%2BV92FNyi2S0KtwDvs1pOVgxHymRT36MkSsQbEoY7JeXHwCczJGNdkcyfamFCyQYU2IqzD203swOcXDinLC1q9OuLF78RZgd8jc7ra24TdgAQUk0qA%2BSDPkeegIiuxEgi2vkx8zOTIqSCqkzjQHcZBz7SPEhU1zKRN8a07CBzxI3BGBUjWQdjQfp0Quvme6c6okKj%2FrCwlERCNjeXVjTq5UWBp2pwZqrkvBOHBjGnKu5XlmU9g0jPknfsJerTE5BuO7iZKJgg%2Bt1rbIUEGa1AUlLtgCqh5xMargv426tkFjJKvjSgSGyLWQHEx3FYE%2BNz2vaBVptwOW8TAUZjhNaXRdmATXFZjG4O0wKXMvO22hwbl7IWJOixjH%2B9o5tCT28DVZnvgWa7d1RuM0fNa5zfT4kMletniKbmCFj14PUXaGS6u0K3ChxXexPrxqTbOFVld6bHBNVmwLpLKQiQmG6uvd1SHWpkbuuy4ziu092NvcYD4dKBlxwT5PAiEEZQOX892lXeE%2FiXfmXFO%2FkzBLXVB2i%2FnYpvezo12BrN2sc%2BfU4uLXFylhbJ5UPhxNJhBX%2FgUJ4uNU5t%2BogmEcuR0xTmMDHplmhhBZ0nqP71r%2FR5LmZSqtKTu%2BIa0b3JcnQtT6WwwrdtIfUZrEwnvT7ygY6pgGMWuEPTbok4mScYsKhrL6DlRTZ1NL2LdxZD9pRlLZ2%2FhLSkLyAknpBIfgN1rUFF1z18NTWHRWLjCwm%2B1de5rteL7Xvd7njOfBs4ijoCwjxGRtDez0O478MjeCF5bvsDcPE421WMaLKFtkYFC8uV2CEVmyjFX5BBSCHwiCEKoMdBmfI7Bx6rN8%2FVBydZDy3kPcgbDFc3EppjkXif%2B2GqDBXbBtU8etY&X-Amz-Signature=9d1a5d9780fbff6791f2074df512370cea55d4ceb5d8d2e34d472e771aa99e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



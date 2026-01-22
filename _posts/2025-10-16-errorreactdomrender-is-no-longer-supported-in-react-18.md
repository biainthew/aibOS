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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGYZGA3%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID77MUcglddZ5ZC29IZfnL%2F2PLmQEoLHE48KwiCLyD7rAiAxp%2Bg0DBUO946%2BHH4dnPouEcAgfQPrrntIh9C4pXgUwiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1BedDC4aIhadqBoKtwDQwR2YwM3VDaDvav9t6AsQ%2F%2FCJGv9vV2XQCJr8%2BATL%2FqgYFl3yGgd5gNO2wuyPYW2mwDN60z6od2k0jXpbI9mKj6I4%2Fj7xn4X0DVww%2BnTOZCpAFnv97HhVmSmdqEjgCL%2F%2FwVFjMD8afygdc7NjEP%2FSJIKfPKK5NSa21FcGSzs4B4A0yE%2Br%2Bl4ig2%2FXGdgw1gXKx86UzthDTRHFkYCrWySASne8mu7tMT9FhUqa7IJ%2BBsIoEqqQrAr1Y2W1vGL7v2564pzEfZazIG8LpgNgzn6dKhStVo%2BnzMwUYmi2xenhaBUv8nW3shT2K5CyanA3LlzkVK5JT%2BW7CdXijod1%2BNwWs%2BO6mJE%2BQaFFEI%2FSC3lUbx1St1CrEtsAywNJe049JosX3bUm%2BAiw9hrHf6mcf6ZAE2F06bStFn982CorKpnPrsbJjEsfKle4MufiZV%2B2g1VqwJic9L3FJNFZO%2B41FPEK79t3Wwu4uVL2TIIIxaQ8ql3Xi2Ana%2BtfjdSN%2BB9YbH%2FK57iJzn3Y%2B94VEUXPRUgQc7ZLjiVbjuCCzJB1xSeo4pGCpiOLwAytGGqdUkmXSXzjIDR5HC0f1LVRAf4uchhFwiHM2PKjrZn5CUmPD0FmbfSZHlTc%2FY9rnZ%2BUcowntzFywY6pgEK7wTgG7sJ%2BxGTUmT5mOCIzS%2FsbG4BSCo2dikMjWxG8dA3cjJ40B1ZTFoD%2FfQDwvll%2Fsun7CNiNyExLhL1lESbg%2BGvU5m3dCBGV7sXdRPwJzfuHDtR8kmg%2Bn%2BvEKHAM9vfVqEriZ3f%2BkfLG6pxpBP87fVBOfjjH7dWjuFAnxGL66RUKazm2tCQg7QPSYSx8axM4v9ydP4DY8jVe5PpRxQ1B%2BDQFtz9&X-Amz-Signature=e3e8cebeeddd8daacbb9bfc653c14d23fc900d3fa343d69543b4c75865a09b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



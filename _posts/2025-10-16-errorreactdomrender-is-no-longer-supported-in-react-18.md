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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3B2AOH%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwH02RRy7eyqPW2jGLssSGl1ILAfrE%2FAhYB29QUuwpCAiA36SMIyKDvY4yuYgCnHdY0WDIuNiLM4kTcJWSAEIwHjSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM1A7kcl9vJSu3YNFTKtwDOAM3cum2jbLNltoJLRfPADc6T0eKwSsBlcZjLDWbi8Yn9OdLxKWrzEXLB6NHWQ9U9yepFj%2FYoTF2gm2uy2T%2Bci%2F3TvoalcJGl4qZwC9tbPCaM1FkO5Z7roq9WaVh54I4H3%2BP6sWLvu4PWM2Ud6ilg4OPuz3i4XN1eC16IgeRcmPwgnMT8n%2Bhtj1H1zsIsiDDnWE9qSHCUolqVzhedpUg3y8kw0W%2FTYhm%2FL8hkL%2BRJwZOoALSFEC6gqSMCscJ0e%2FtT0yNlJmcZJDndsMuiILtR9VcbusSpAXY62asGAa4DQL1fspaZDxRA8HWo7l5hs0d1cyKlEe9y4WK%2BxzMxuGvdRciYZpAtsz2e2xVUcMHDlapR%2BoPGd9nFU109zuXRlKH6jNeu4Kss3HfmiQo2685iyiCqhQguditZmUKINgDyKwYbohhI6e1WOKHXlkmhWfXdFM28HwapngRHw1cbwThUmUjvwQPtpwXa%2FeW7KjUCeK5JPpLprB4XYLN83MsqIpUXNgMG0Lo0vLxYW8EQeMS%2BL46%2B0ZRnt4akFemTqRZ0Xa6MfmMDQ4T6WAKSqSPX1AkDMVpyjw6CEGeMYb1D1NApuc6MbHIEgjE64kjoH0BNEne83mkcLvBO8RZi9Awvtn2ygY6pgHsO%2B5m4Zg5mKZovH%2BSId7AMIrpcH8db1InqINsWLPzBA%2FrZzdFso3u%2BN3wbdYp5biV6w5g8Dm47K8sf39yd5GfvtOHggRwiaOeXeaztudFBCDfq%2BBQ3Pbk%2BnEQqOyDmcALlBZG0Vp29yklBWhpwdtykZcqC1jyBihs74irm2L63raibXhvgpy1QgD5Yz2m%2BRAs2VxtxRwPsLxM%2BnOkm2ToADjrQ1P5&X-Amz-Signature=e9440f4f401e90df04b0f282013872ff6ea8e5582cbe826393f4fb4208fbc703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



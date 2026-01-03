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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FEDYDU%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHfAgB21CyohLOKL4Vb08ahsliJMCrenIV%2B53hDOEppwAiBMJvzon38yQTFp%2BC9QNHnAhsKMwL9KhNder86YPkt16ir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMuAK3jaPkLxu0NSYSKtwD3CLpTn5hlS%2Byu9rc1pGyz5fRbKO1XpFB%2F1M%2BYrFEVPiqr4EjawZfuNShiaoS0G6PE40%2FXfp4pCx%2BHCiqzMGnnZHHj9NG%2BkpJINhrsdiLR633JIzYp2jWM1UiQ3DiKhMzoXfp2riG73fRNiaMNNlm74EGSrTup%2FvVgobtrqpqddERTpslqOxXB%2F9Tzzi%2F4Y9XZ0R2P1U5GlXNpR8CfM6fIwQaoZRklaPDQPuYAjumvuOUuMCIry90ZkEId0dNQz4Tw2WsahZVbs4q73givXU4OKQbwLbcMohjkBKMh3dc%2F0pVwBXEQDLACz0BsGnQDDUcpWxkhr6YKRzj%2FcHPA1RKBTAzgYOe%2BEAcHvmJgDMhq%2F671W5lXNo%2BqzFcJWpNtfOTDnUO3hcrcn1X1eU3IKVY8sMRaTrRKLRh8eKlXW9NiTvA7RV7uF2lSgIMqt%2FoWBL%2F3HZcnc23R92X42fgHs2%2FYRv8WwdjfjvGvsz%2B5Kg3DTFEFk641YcDPLQBxqoTl7gkb0OTbs6Pysj59rHrSqwMaHwXArE2SCEUYF5qtbRPy1WoBmSDrhBcI%2B%2BJuKg73XOf3%2BAfsYF1hpzaKdq6pM6Rtbfz4BfzM7CYe%2BqRqGR%2BFWMRwZzqmkDh3FIR%2Fv0wqdDgygY6pgGpG6kv3ZbqoQQErc66IdSi5zbe3O72bvfZtykuIMnVDu3uFhU7fatnDm9eAzPUVn1pu%2Br2OVhN%2BSulSWznNa97dcAgmxNIlhw38w3c9lQVx8woi2t0uQLvvtRTSF2IFexoQvYQPYWso31Ql05dFb%2Bn9sG1gW%2Fr5ID8YvDoTbSg9eHr84o%2BChVjrzkdV%2BsS0TMayENlO1fA1%2FWCi%2F5n9pJcacoKmmqz&X-Amz-Signature=58be8c56d1d6331f552e4105de5c6e729e7f096f977c42d927a8ee1d7a363bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



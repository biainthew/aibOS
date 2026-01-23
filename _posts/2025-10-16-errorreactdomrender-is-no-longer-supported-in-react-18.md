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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC5IA4FI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIGozfFem3tMzUQADVV6KyiJ%2FPhQbn8H%2FWa6XD6%2BtA3gdAiBEXzzHC%2FFZv7eVyHFHjE2ccxHkFORZaMzRVXFJYiBi8CqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZJYFI4DYGJieAzkKtwD%2Flu%2Bemx2pXJ2AegUACmnFwg3s7icb8pg1nDF0UqJeQo3iAWy%2BlsVNMt%2Ft3E5TKKrl%2BrfuOqJ9vZT02p1N5TGYVIkgNC680gAlTzop2gArqGcG%2FAygfWjGl9g%2BqKeW75fNZhZuGbhx5eZjHTuS3X%2BWDh6LhOVFGix%2B%2FcRwZ8x36z8ydsbYLqxV73tP8aUfZiHkidICVvDEiY2gQwxMkYaR4y4bIOPzRDswSGXfs6Ab6rIvfswBtApsI7t7jtXTG7ftzVx4XAvafXYBNjjGxc1C%2F9%2FwAcm53HRLREYPoSRo4IGz7xUwTuA39iS38t0cB08rt4FLcLGleZARRHzawyWrzgHGQqUNqcj%2BxB8Q52PtWa8LDCF3jdGDosmL75fTjDr5H9JGM90MFvued7AFEKOYdI8vxf0v0oDZinXgCRxMJyXdCYV4AyjnYRzn%2BJ6ELdhjDt3sAlFLw2jPRH8m8rzB80%2BCXPQHB5qykNIBNxu40Hy7wh%2FbfoCQbq3qjkkZRuC8K9zKHP0CqaZJobbcRkv5lt0yuvaAO6U1WSnfVIUlGtTDnxuNSw8sa04G7%2BSH52MvqXPOosu7pGvE45%2FCZ5RfXXtEVh3nlXaOQqXjM1Zc2oBMycKAUzvvghXWUsw1o%2FLywY6pgEFwzTv1BQ1YRm6W0INbzQqKB2hBkJSBZY50SpE6rdbO7wUIn1dRcStBVyth206wL7dtVMyd8fFaKegqGgVBu7o7li56CjLMUWm3UNFBrcRkKEzYSq1WsECvdj0HnixXFAWX6JmAZkKzgsEMt9qPTpqwLrFNzpJbouSS7wbPondjZfNPSuYWDS9c%2F4gbP2AvAzQdCHdEbALY0GYiSTK4MqI%2F2%2F1DYeB&X-Amz-Signature=2becec3056eab6dc9950aecbf2fd14844a650b17828119e7e7e1d0be4c15c954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



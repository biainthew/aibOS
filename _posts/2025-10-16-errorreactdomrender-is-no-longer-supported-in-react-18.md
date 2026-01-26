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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWUVU3M7%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAblivgoTtBDq1tcKJxyW6Y2XaDVn1cHzmSdQ4Ms3x3MAiBx8BqWgC1JUw2IKwbfFhO0mVQSBdNBrRUtrErBkmRJiir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMTpTmlZZ70pCqLDssKtwDVB7uRKyRnI0CMbETzRUq84cZVXskmbyAKA%2B1xUul5jZHFg%2FanUyYqwNt%2B%2FCxPhl4pQCcAS84vSRRs8euoZE8mt3%2FgEqKEU7uM25pu69mCJKZV%2FLEIEJrX96mJrzP9SdYpHoxfJFFE1uepVDF5yedUn99vna4VkfNZ%2FIjtOMVLFYm4AEk68XTzlF2KcAZfuXS4rNCnaw39FZvPiljL%2BVDspZdTjahGwYVh6vK7LOzBxES9rPIwbo0bFhHLKRmgjWszgFt7p0Lh5u2ptASkFl%2BXWoR9r2OPWhTmxowwG2Yrs3gcwtOxRHiX%2BJNg3ty%2FKDh%2FGynv0hg5zrqYaUZR4PKTVmRSXqCWfudkMvhpjSuoezhQXdzU4BjpySPEwofd%2Bz3t2GAoaJ5HtuCgPgZbBVh1CtOeFlHkZ64W%2BfxK3%2BCnTa1Xky3K3O794nAvEhjnayMmCKsaawEskryG9WDbaceGGoKv%2BN0MG29j48DQRiSnZUCHOTQ%2FLJzruwaOt2b1k8p6u0zSw6693yOO%2FIop1GZS9US1KBhYasLBN25Kztly6kBcaCmmlalV4PBYo2ykubZRYqcH6p%2BB%2BmhdMoHlNqMqTbmDyySl4QY28IMCJsgTdJGYm9ImxCiCywf0%2Bkwi7fcywY6pgElD9UMEN7xTKA7L8CZvffknGwftURFbb8RP6F5TRyF4JsZYH%2BTkJVoP6AJtCcOCZrf9DNZlmGq1knpPLsHyQr5PnIbCR%2FeuCy7ixNo28dD52mLc9uKP6%2FgTwxk2M0rBczpJbwjFdryFGkaKVdSu02yNF6AqxifD6TMNTuYr%2FS46xLHdm9IiVGnSu4gz5wxdaiO1klG315T8BPRJ0y9%2BSgWeRdhWNlr&X-Amz-Signature=e8506702302a007defd7ba28795bbe58b44b7de938d367ff9eef01ac032ee28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



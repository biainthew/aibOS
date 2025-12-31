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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6AC6MZ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV3MGNGzvH%2BM0Q5AnT3lgbR4mCdIk9hpZjx%2FzbU%2FkTzAiEAsa4KwO2W%2B4sCrxV5Yu2eNVEs1%2Fjd2swVqTwiq%2B9AYzYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF7feSIrljVhsLY0CrcA2PfSH02inyYMuKaCq70LaqgvzHh71eLf79YphaDkhQkaTIO1zj4t0dyCoH4IUcNGD5X4GLEugeVi5TPIU23k45mCcgmqBZ0fNfGV615%2FaSWU7nqG75WfEaW%2FGCubLQsj18%2FkKzSkAGoJ7Lb1vBiYZVEe8HYw0MINyukSafrMXZHyoUIu8EOdcEtRp3cmIKrnPC8EGKDZZ2KnizT5CZ43FWRKruovPjNkfEImKS0KZnTw9%2BQ08%2FL3KzZsJwuTa2NoAqW20aYVttqPZxmPchXmdza7JH2M0mbTbesFbzqzTTLbSUBIues%2B7RomsRfBPgtJIoILdw1GL4Bk7%2BS6alW2MD6c39PY%2FKwh1mQXsxiKeUoQSQ%2BYnmNZl5z7wmblS35%2BMPQW2vNGtCGlJ0wj8bQrhHFgF7l6X6Q0PBMXwH8W4qdpro7cAoyIRkqsFQ0ZWmna83IwNjXcRZ4R6Qa5CeN1FAbMNorwNp9X4BQw97GCgcZFykJT7Qa%2Bo6DTGI3HxzDNVCySKlItxb016HVpiZED%2F7QG4R0gKuJVqS90Ixie4PKblcyFz42JGemqgDFtSfY3zYK7edOhhrFFaUv2ITqlA0tjlfMzHWkYmukMk1qxZ3xGtNR3ZLEYCe2hXdWMPva0MoGOqUBhBn0MzmkoB2piizil1XtJZ2aWVhY5qzwUXfqqVRvivODia2RwsXxxz%2B5IrnyiF0ZmNKintKhnaWqXBjmsSA09mXx0QbD4Y9Jmel7LI42c6UWo356VQieIpDMZ72cRojOFp5qBL8AsxZdJQrees0vPsjtW4Dnu1G9NnCg%2FgXJcutM0b%2Baw33PLxifXq5JowiZ091u%2BCTO2RNtda6Ogstx%2Bl3FeXHG&X-Amz-Signature=2f7afcba21cbfdce35f5bd60be552039f7b4d56d5fcaf1447f91ebf4d9023c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



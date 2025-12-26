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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ALUWNL%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC9bcxVlhJ5lViSaEIALe26%2BLptKOLjxhgOjv9waxBPAQIgeyN3N%2FlraM%2FQyiXTjvmIs7dvlLBwNxiR5lwMYfj7faUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCkj4uRxgzImnDbI8ircAzupXPO1VnBbLixS392%2F4adlxsM%2FP3yNMyhvVXs%2FgatR2zb2UxJqI3nOJebR8lkCDHJhcqaRD5PFZ9wwFvo6rVTJXSU%2B0Xh66L8RI0xebzYCeTVYb1eIj%2Bi%2FzT3R%2BUuWX0U%2BPvwFdaKAS5jV1Gy906wUwaR9ddhop5Of25cjIAb9ZPpWkilcMAWz6JyfluI8htbq9uczPNlCzomIgsHpRjFV9OZk10nZSEkRNbxht9WF7cG7h9ntR8wYJJIcZKPfcrs0bQYaBSCmSLebciMcBOwWIjqUHo%2FOz78hz%2FTRRmnj9v34v%2BlIsIq18nlGBQZDw9GKn9blRk4MOJrvkv%2FIWCSCouEYCnm3huKTGAxS21zGDFU37stK9ABpYwrvKtjKv39Qmw1R66VjrrU1Mzjt668Wwibkel43wM%2FWsLVp0zT57mk864eoyurq%2FIoMXenGXB9GVXIjAxRS7WLvxuJi9f3GvbfwNqUzjuNJRsK3XCMYwJAG9j9CMKmQWrO3U9CnLtwPTonP%2F5qok2%2Fe7JnmPGWRWMEo2A%2BW24AIhhZ2egXlpBlyk1lnttP2jATYvAP083lj7mSPDgYgrTJ4E%2FMV%2FezcUR2DMNqmYRcfUilvNnDJXD%2F8QWjsovB7vNv6MM2ttsoGOqUBAVjnA%2BxTuDZLiWtqVD8U%2BwgJvKasX%2Bre7DPFx%2F%2B9mPzKRrGJBKBSV6gt1iGsiYjHF%2BA2FfLeUYqyuU3qh65IvK2IIBlbdj5sQfuISetLtykz7plkr0wsv45BqLZVfCXr0FutYr8s69hzmD29KAd4VwKy7uRUl1p56zRqwdsHKfn%2FhORs5dHPdThPiqabQZSJECIhmhQ5xf78%2FIvjPC4tPXEulPLH&X-Amz-Signature=5a7267b56be4f3f76737fe0a407aca1fc2518c3c294a1a08d8acf3910666fa11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



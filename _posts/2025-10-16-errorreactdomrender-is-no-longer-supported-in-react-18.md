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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESZIKHV%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICxLgOzDZP6Dit0nQzxB8LpyJYZVICE%2FJTGpRY72Swg7AiEA8chKXHrjz35ua%2BXz0Qkt%2FEJ5S6WeeZR0RKH8PmwBk9Uq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDM9eoYWWWgmPLJoukCrcAx07hmxy%2FKOt87h5NZez6o7OqviomxGYIz8OahU7kg1pew9N8qp2XolerIacLo47zht0qsk%2FKQcYonbjOxkhiaYkV3h4rAGQEKxhoPwQMJd6lSLYVULAER7rjdxtN9tN7pukqvKQ3XDBM8%2B2KlpsVT%2Fv2SZq5MBxfHz6%2F%2FFM5lxB87zQrPNrQ3wSSlCUkUQO4MDdQE7dhPkuTJHNpkviJ7XslT5XRxnQhU4%2Fgw9VRP33%2BrpLgn7GrkG4VsDRtf3ebAJq0q1WpaGD2qkN6eMccGI0Ckw5GUeQUUxmht%2BUkMh3NkbT7Qgcu%2BnY3P9kQwUuk8JYog5vM3ow9c7UpNWENwHm2cVwWugpZnF%2FF01Xl5AHHyoC5RNi%2FjQuMVwzlD4i0AZ7xKWNDLqEalW3NIO%2Fv%2Bf59NJzyaGA5pVJIdpHVRzkrDnKGdcf1DXrbW%2BX1riUdZTJK0kb%2Fo4dyBiry1m5e%2FZh58ARJKZSRhidsgZTD17V6cKmS9rB4oXzl2BxwC7x3Qk8uIwcD3kwugdhOrCqgBillqjFaIkpbxveyfQ05Fx7HaTrka1urSCqNhVQqXI4VgPs96Lc91ml3TKwXjchA2KkkecAKZODZ0GE2qmfOkUhV9xUQaD0COL47aNRMMuw0MsGOqUBm8mdxu6nV%2BjvEvonQyBPmIUda%2F2vXJFQ6Uv1IoYY1J2p9AyTDWY9EVXu0nlNDvs5TLqiE%2FOmTHU46XndvcAtMwyWB0jJRpwBPXm3hKr%2F22tYMNModHBCMUo9S7zR%2BUyF%2BHZVbwh5ObcU1SZzrhELMNLDv%2BpnKgPvQGnYq%2BJj4rWhAZ7BnfksN2GgaD65lD6q2BZyFcAIcEiuc47NOGwPZHInu1oE&X-Amz-Signature=b9fc11db5f48afeb9df90b8deded4212d968b779f0bde514e5f9616f575e8c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



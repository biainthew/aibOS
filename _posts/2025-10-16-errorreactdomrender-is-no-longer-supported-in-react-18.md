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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZFXSLL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCVH2ygQRp9DnFE46KjuDmiVkkxhPBiTTNDakJq04Q7%2BAIgRwlbpU41Ouqbq5am%2BrZikGudHKess59%2FoSV9zQlmLBEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ULHn1NqHs2ZytZSrcA3ZID0xKeLgOzpX3Kv%2B5oSeHHmVQvwVhXGHrNF4QFcnwl8wCbgWH9JT0BSPIM97nkLJEMKCtTxgzUTHBRMxSQTMAVN09xanPPFVPIl2UeJw%2BnaRUl6VYBcWWOEpsSUW4GHfeqH%2BF6Jg4UCB5rJp201e1Pop31CggieQOBFgvSeLDQ1HpJYTuWm7eqPIat%2FvH6DhJEyiGBo2AXadrB5oyyu9eoxJM25aeaJH0Yrf2P0z71kNQdhJfUvcwbKXT9NpsNGo8A%2BmlhGBFQm0SbZBxs4jHCplMqrfO5w9TgfMnIh2khu6EDLMgPkK0JeGdb35NWqGNSVr406pkVToNGxdxy18dtvkPPqtt7rgUPJJfE31pq%2F7u8yFiYTUYd%2BQYDbrcV33BL4%2BOzuwOHn%2FLfPTsBz9obS%2FtYGspdkl8DrFJMxLuIEuVWHS1%2BVCLbyO1Th9%2FI%2BSGLRWYBK7vn3KnX2vi3NdGrFIc2lmrKWuoCESyN%2FZALq99wVhpAxXHggH3ALLFJahTZHfa0sBdHYlF%2FaXtJtrcAaoCvaL%2FLpllQL%2B3CsU0McNVmmSXBvg3NJWGCLWD9JrtINS7ouG6QaT3DdXmcRSdz3iMJAXqAZOphjjraDrIcT6RaTGyCimByd6JMO7%2B1coGOqUByOevIo3PfYaIIVme88%2Fznd%2BeSB3cwxXwgxqFSDeFvRZl7FT4e8ntAkkzfomeGAFEq3R8MHHuIAl2jMjYeiwG3KUi33Z6BHPDWYm0e8GacEA2AHqmC8hK85H%2BKTXLuvUyabv56%2FJJOWvUQE2w3U%2FI0V6efZwZEcpkdfIxvW5Trw2L5FmBHZ8VH%2Bat3GVSBfLyXaAR8HSiMWQkqD3LnfE9Nd4I1O%2Bk&X-Amz-Signature=d15430e1241204b89b089fd6034ecd97f6346bdf39dd2b95dc3637f3f68a2b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



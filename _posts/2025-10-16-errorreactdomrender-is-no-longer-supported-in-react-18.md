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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTYY2KJ3%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICylUvItpNSYk0APwi50TPRH73vyZS02GmvMFPkDNn%2BWAiEAjOt3FSzDUQGcA8YvI8n7C6AdaXizl%2B6ZRv6be6a1fsgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDF5LCeT3vsR8pwzCrcAz3EigqUy6Ed3It58ED3wY%2Fm%2FXgyLwfdhztvZz7tzkLTqJmKtB29cIIVMIiEYVMU%2BBEtOomjXahX5Luz8HRLVrH1RnMCcH58s2PSjUlqg6immM%2FkBn9K0dz0Wvd52Un8uF3sooJIxI3WlayHd%2Fa%2FetjZWXTyBZSC6z2BV3509cDfU61MsP5DLtL9ckDPxOgPNL915gX50czIaYKuFarwlunlxXtZ0BaFmbQiz6671aprThMwcr4Go68Um9kpMX5ZOaX4b1xdkJcJ5LU1tVdro6GNCpC5GFXm26nxSNKqYA%2FWSK4wOIZygA9VQPly2fxijmPXS7OndcpOglrVp9ISwNejxlp47J3lhTD8SN6IRDAFOBH3%2BG7%2BvQsQzPcfvlzlKe50wyCYywWaj%2B%2FbTYTf3sHFebLl23u6qxhmKObPMsafgvTNDVF2tIux4j8TEO5dDq%2FScocRrEjCRWGHNAUNrcGTrv4Sltl2A5IgNh8g2emtBxjyPRGIHLJ67E3DohSMhE4hQjRUh9WURSH%2BM1HRhXKisYqnh2JcyouY13ueLUKmJMnbILP6taAiB3HMNSzrPHvlMSnYqwbEqJXt4wOkAoGAmSyEc4qzVv49vtMi7FKfV4PF5ge%2FSmZmZY9kMLCix8oGOqUB76XsPFiV6vdf9EJjMNe2Ba5d8lkpOoyLJuX%2BA0trQvnHxmq8QSMVNWTGVBldszgg4p5CESdgCI6%2BWT48yVtUeUEXbndVAh5U6ejCXOfjIHkWhm1YM1snhCbgE0mPRgjTwdB9fxM8CY0WJis3FyjqYp%2FzE5ftshUDVnRBn7lDnTuECOfU7rHmaqnynyLDnB6fXszMdBkLJj2l0XGvNktSZptdq0dC&X-Amz-Signature=2d782e5bcedc805fa86cc8589931ec4ca5245b154b1977024c958370174f1cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



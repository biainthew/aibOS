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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHMEMJK%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCiRr06DaDglnCmJUZlk26oa00Td%2B%2BYYsh1WqWoQMOwEAIgDFohMhC0kanptau40kxUVj5hvqVYUmsjjdkfOiJ2nY8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEUn5gMDanZxbs9C7CrcA7LLi6BQftKPbP1JvnJp09ziKvxwvApAByPSqsyy%2FalTNgs8Cy12s5GYhpUZOJH0ucw2QZy5EwGfxt7EhIlbAtH4dgawABgMGNMKemnKWYYCdCC17YFrs%2F09EmO2T0e8sqnaOvatCUj9RAuvi8WLiq5569vw7gG%2B2QRFDWG1bd1BT4rzl8Isc5KfxgZYhxGJq5YwqrHkPBTJYh0UchT5OrnwWVB9mUWwgeSor90RdOySYWatGXBhyiCraBsnnRSkdyBcSQxfD9Ptom8kZdTibkDv%2BkC3c%2FoKFfYef6aIZgUo%2F%2Bcmylgr%2BLv8bnk3%2FR%2ByFaPNgRIeyZhSiy%2F0dbeoXMJTBCb82Ehmpgd1DjZOnuv%2BFRFx7%2FurLbFGlh%2Fivm9oJMJT6wmNhDrkNr%2BpIlH7AFu9HxRApVI6Ktc3aIW8HXtM1dqNTnfBb0TSf9elGqb5fNvufAXHrSMcl8sCaFN1iqBcyhJK3K9I7MFCi1ZQW9HjmHm4rOfnhV%2BRr0sHXFIJn83rbRbFqfrQgW%2BD5s4VEhdBij1Cuqifq17cz1RHPbXMOeY7Nqvh2C66%2BSj4oyX70MM%2BsBunC0b19es1BYG03sxevNnVvF08AmF3hwrNd2cC54yQHuHg5lDaRExXMLuCscoGOqUBfXaRpQZiGCI%2F4Xxdme0uvNGNsjdG%2F097JYxoFR6EpyqD31RIV3YUVp2ObhPNk56LR3xqrqh6K6PP%2FqCoawuNur6ggACSBdaenrnMfqfXCdxy%2F7N3q1b%2FjDNUXG30DNr4Pw8wj7Xqn4yN6LLVmkyaswzgnlPvNQ2bnFHpFTFca7lxrAUjD43NbZWfOZ7IIHMYqtFIn6VX9DNzZ2ip9Z%2FwY%2FdbXYCw&X-Amz-Signature=03b6fb93ed3e3ca79ddadb38b77dfeb179b0607a7b73965b1a354b3effb5c1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NGLGJV%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC%2F7Z5bzqNTfPE5TOHkWAEbH7E0C%2FpBRDCFRzOsjMvvFgIgE9TsyHJN2gH6ihyyi8lFE7K2SoYp6ELhnyupuonZ2okqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8PbRgxcwdhDygBmCrcA47sy2%2FQI5NO4V9jQy0NnLlm38z%2Fz9EoWsEbW8TgXtC6Wvg7SX1a7xHRpGeksCcK2yGCpAxOvIfP07aL9W%2BXgKs0uE9J15VYG3liAZlh%2F5oxz3KJFhFV3vIB1Q9EFkvB19WzKGg5Lj5%2BdQRLcMDFoDzCGnALTTfD4yVFZ3%2BnAEgMJUYFDPVF4NBr2rWQ6Due9JflntRxxuQgzj8ovUnSMu8oNotMrI7pBWh4Vrjr3BqjG0bwD31PmIWeaYU37xk8zEb6D0V8FCtGywuQQMY0%2FNV6s38FP3Uim9XNQXrbGEbTMKodAwR1%2F0OkglkkO8aNnnRNsJDtGup5cke4rsG6I4HEqg35Mr0GQ%2B1jFxZLvKFLWhskO2WvY5Pm%2FRqEGPjHOS79HWOTKUemN%2BWwKH3VlUIU0BBdrH7pKG9at4cTefmKW6bAhpqFqsfltdIBRLJNODrZ%2FtxhKxpu0dxJjGZcc4oZO7VcV0AXJ7UX7uYM1or9mfcdxh1xqGAey1MZWDM45JNymmUrA%2BVga8LjwMGaahyjHLx8N7rqbqYihba315zapNpiBpYNX3uW%2BRB6zllFu%2FLnd1bAMSu4iyfSZ%2FbTRE1mcd3Paxoub8iowwL%2BkjHoT22x01TShboWk4RHMJetlssGOqUBADGlQyPK%2BDoW6UhJs34B6lEFYPKmIcmVGgfBVzQk32Fz0AZ%2BF8ay%2FmBrr1q6%2B1mTn9tO5XAa4CLFIPOMt1W3jO22i57dmUVR4o6kbdO4WinWa%2F2JMKo29UFzjDgAuB4p2zw%2Fih850cSZ%2BggUaWZTVSL0snU9p7nwYhpQ62%2B0UNKMRLdtEkRxnvERJ3KJgRzpiTjwoWDQpXFWRy28Js28klZJMoGL&X-Amz-Signature=dbbadb32228c6e79dea694799465a84fd569839588efe232ef337b0f7741fe50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



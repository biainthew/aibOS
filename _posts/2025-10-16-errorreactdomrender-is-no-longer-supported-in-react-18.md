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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGYQC72%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5f770W1OrnzfL5YxTQ9nqX3N%2FEpiEgfoXphf8ByabyAiEApftYwaMMqxyEbG%2BqoKmO71MJZoez3au3N4AHx2ENBtUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEISDubCd5s9hN%2BcnCrcA63pO6LydasAA%2BhTJYFTcIhuQ5gxV5H43B9yF34WAsUDVPb%2F3RktTHqadEsXQJSXxyJytA1IA5W6r8CB3l0ZcuDVF2Y27A0z6cxzomLqXBzdBtxa45yyDnyLAaxpKwCeC4C7HfdJFy6hohR6OhzFDgVqXMDQnfimlnEQU6woJ%2F6mwJutLE657G%2BicdH%2Bs5s0RAIAWqxsuIBfC%2BWgJ2NxWYo%2B8kjTFoESnxn1sdEgW2h7F7gmcWQNTC%2B6JD%2BjeKQQOYnH%2B7oLyW968GkvkO8bptblPsanPozi01PxiFOht0seh3uYQXvNysjlo%2FaGDCrCcjSNTwsHzvlIQPPB2ASSgUeiCcwb1%2BqEjOKfbuneuhiF9pJ3tJXHk0IxkhGSmsO0NxfCF4z2QYB%2B1z624rQdGgauVvmJxLw5agshlMYw1qJf4OY0i2%2Fa5wFLCgYM6ZcqkTO67yDqCNAVPr9hgKbRwXjVWZIZNFQctwQcl2Jj3eNh8VzGF%2BMZ5ls2kLcbfeNkIBPoYOSPow3Ydmf0QyM90oxbdj6YwGwZlcAYoJeUmCLSqaS%2FIYMr85VjQaANbrEH1OE%2BgaDeI2LpmqOK5e3HQdg1Rz80RYKANIP%2FXpB3%2FRqCxhlkzyIgeFLEu3UDMLrLu8oGOqUBJpZ5bSg%2B9AvwKY8dhxIDyIdPPBNFJ3f5Tu1IBDhsEF66AEeZGUcZ5eeCfl5c7Iib3LMyaaD4LL%2BVTz1m6%2BRWcX4CCteRKi%2BwcDvw5SKYb8ilBO7PdSu%2FZw85Ob5d8PMnYToHdvhjwfOsOJB%2FH%2BviMJUAr74dcgZGQ16KjgE%2F6B7t4BjGpgRjxQ2F8jmdqbSF6VbnfoKTY2uPxdpoA4ZRPtGgSC3J&X-Amz-Signature=53570a6edfd0c662dac5ca5c01039104e0cdf6bc883c7b21178e1ffb38b5904c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



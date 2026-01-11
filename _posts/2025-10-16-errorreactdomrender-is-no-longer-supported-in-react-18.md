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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74PLR3T%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1lmD28JFJgE2uSV7zPxsbcAolwGOghaXh1%2B0Dk0XaBAiEAm5%2Bpr75zZYBoqrm%2FKfa9e9xb0%2F8saJFVOTpriAndmO0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm0fTvcdlzfD5BMHCrcA%2FLAmEEq5wvjvfHCJtVhbuWo5dzly%2FXOr0o3FoQLG%2FQ7OML9z7fOC7GEww%2FCJFUgUUfHS1M3kDlNvi3rtnERzcm3KLyVKpDJV2DswlipNRsaVRfnW8MirGDCezMEPXK%2FySZSZcGd1W5Depx22chFqgz095N22HOatO%2F2fpoNbFq7w6aCE0T1k0qlNLWPy1dsH0K0dmjZg7Cpq9%2FNI3K2VvNzPGvPwVUTGTNFZHEs4GFr3JXnjdegqpCcqEAVXGjo4moaS%2BlBr5N9UlYfX6cprPSZto73JK070KYUGa14avCRS%2F2%2BgphIAEHLmZYf%2Fd1kWG%2Bzg25kJYVOX%2Fl8p%2BIb90NfbHsby8Tv6zW9qtmBcdsq%2BIEvnGlAvmcDhcI6W6%2FRKMi7oboQQ9FByLOiO2uuuyDbgtF6tzm1sFWrybQeUUETROwiGTTMO8GgZ6fK2I4D%2Bj0bDsCislh82W1iY6nFlOuh0oRAT%2FS3AhE4SxGd%2Fkm8KkYHa2Eg0KYcM9QRv1PpredaGF9FKKIGobDlRaxd7h2e92XQ6Dh7MKS5cHcktt1F2keFYmpcWqUOBmglofl2ZPh%2ByHkJ2elKh%2B0BXmyeLBkngOBu8xafiN0W5l44xXBv3JttB%2BFxxRr2g0WzMOfgissGOqUBbVQL4ZBcnjk6CMdQJk5g8DhSCXxOAC%2FXYYIS%2BuFfjaUJt7NxC731fJliBySEMhYcL%2FDPffD8oxQHyVU9MQG7q%2FRN9FxSpoqY3He%2Bc5lTtF6%2Bg8OxH5ep7kgh8ZDC%2FIRplM%2F9RGQS%2Bu%2F8%2Fr5SWfJFsMhaD9MA8T4gMvSGdpm9nHs3F16giGe6tr4a8foKMGctVVza0zzRHB7dYtwTfdETfWOwzSYW&X-Amz-Signature=83c20b32f1e287156eb3681f5fcd50a52cee5c272f58c64a406814fda3472198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



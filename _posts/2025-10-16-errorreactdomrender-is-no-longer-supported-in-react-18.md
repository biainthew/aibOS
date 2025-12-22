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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZ7M4M4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDw%2FDy26nYY5shFiADVQf4z41Xbd4GB53SzqepbVaah0gIhAOO2QdtBs0ZiaMKx5K%2F1oBjWAiMFHD5zpYG5qyJQrAC4KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzakHkbMc0UFLVDBIq3ANwQ08SHSHQHGoo1cRqD4Mn3LEezhSClKpOO%2Bi%2B6c4MnxxET3KSjFrYCw9KYOyu1fr7uagZO7RUw44F0iFaAiwv3eaUEES2ymBUSjhsltL5BwO0K1XBoR7DgXQvhwHvjy5epgWGgRG%2FN4NyvbYWx2ADi8WLRSeqNpkdbZ60HEKXVv8YZcDqYtgZRt%2FT%2BKDckt9z87qc4rmNUMJZioMX%2Fl8w5Ej3UZSI%2BZl1qObAj7%2FjumBBZeJm5NjElU1%2FDgCzGCKmtfpTPjsy6R1dpUvd%2BtcgMICxSgMjjMM97R1YrSmqFmy3ET6i3h2%2FNZf8rFx2BegqCe53ibokqkAyEfsIlj1OxqSvaYQv8fYFHjNIsah%2BndKXcIhbxK8lFPWTAKhFDOo6Mfe6E5GFEahx%2FQd9k9fkn1ocGmFFhEiPE1p6CZZhEOAIkDQscuW4HeJ1QpV6Rn%2BiizxqfoHpfde36M3ItMf26yI4335zG%2FUDOJfzzlTAdT2iAgx11iQX8Jh47dnhKsYWON%2BQEqF3ji7xI5N4W15hOQ5Pxog10O79S1Kv0aV94csmc0bcJTlsGa6mnmdkKRH38jI4T3b0VObvK7IJHfszQQhUkZJgNwk7DfwZWyzPjouPDafD%2Fwi4jY%2F3NDDL%2BaPKBjqkAXZ7lg5yzS7tSorXxuAC87ZJZPW6N49iC85q994SaM8GkMiaDO%2FKili2BO29UG4rtSTwKgGBjriketR54Ce4UAilwvTqvu1ds2Q4cCfg5lQowHJLJmCT7SU3aTFRnoZGzwfyLKxJuZmEht8mt2mpfYbWiztenX6ms6%2B6mLnI6jaYlZ%2F0uCcnrsNyFwbe2yvOxZGC5suevj1Movva%2F%2FrsmGgfNk1k&X-Amz-Signature=e053b4385016fbe27939e5480324f6b4c9786a0e0d12ecd4e306438d555220fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



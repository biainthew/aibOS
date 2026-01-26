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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ32EJCM%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAy013luXAU4hXpkoq4bXgVfECa4kX6NR95pnxvnGHjlAiA3DYLUnNOHLjizYzqSRJYKCxeJftdV3E%2FGuOMVFBnjJyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMrRbZ3ruDJIxoA7KRKtwDITcW0WSOl9FavGXa%2Fepxfo2FvP0xVjKSm7KQvC7gL9tPfwu1L6svbISjAsY9qM84Ni1ERR4BhIxvxN7LwL2xW%2FJrbgMsCJrhwXoxrKP6Ps9p%2BCq902jBsfO%2FNjmI%2F8Jr6KzU9%2BKXAJS2%2Fvm%2FIICT62DUtC39fiVobmB74lH8GdMn9YDVV%2BxXXrF0d3ATQFbo0cVT%2FqZvv2fdmYq%2F2L5v3OxJMrKgktOSPU4PNiQiJvvZZQmoGsByLxEVR6f2Cl%2BlFZbOPWLVkpJ1nz4xybxMlvLXbfj0nR3xxj05GAgU6CHgaR%2F5dTvEQA%2FmGkme3KkRFEs1bHlqlGTk7hR6iYm6gb8v8PiImT1F2iriI7RRModyqrHvGHEfxTFvPmfWYhqOfqp4WGIcM2%2FE7A5TEV%2FyMW1FOt8TzFi5z3UvSoCQsuP469yMuofU9NBGgVLK9Vf6GdN3sJB6P1EjWIFTJ0kLbbyy1Voukv%2FjWaPRvCa9Rer0rgaQp7vP9lIkW%2B82Y%2F1Mds3pOwvVgnMSk90J1Oz1p%2B%2Bnq0n8%2FB58NlpsWbkhRnJ9yOrhhrfmW4B%2F6U%2BopKnEIzIf%2F7LGT%2B%2BOOdIHx9TSebfW8n4NOBc1VgHSefIWZkzouJVYRETr588O2yswqNncywY6pgEaeLMOlMdUIRO0zDaM1a%2Byh0bJnDBG0HWP03jm6c2I%2B4p1VdG%2B4AZY5VwuHqu1HkGQL%2Bp34MHHdgTv%2BJ7l%2F%2F1F5XGBWEJr%2B8RGxgSevK9mO6megKt7Vl5wuW%2FTacif%2FITVIssOSY7%2B9E8RNrtvg%2BgQPG4CSS7xh4tV6tJnVvBP8clbmw%2Bi5E7aE1wkbtrXD%2F1zWjA%2F8MkK2y6xc5m%2F4dJELz8MjXLl&X-Amz-Signature=4f2e705d324c16958be6d58fb90df3e8096b3a73b3a4796a8a5cc57022a13ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



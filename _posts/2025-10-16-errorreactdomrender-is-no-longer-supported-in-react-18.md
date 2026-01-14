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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25GJOAN%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T012022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClc191HPbVUvdLTL%2FDmqqVItEIXfqLLwQLUEGGbhFX4wIgYsyqMeY8mqAfMfd%2FVwfCV8Mt5kWMs3oRc5iwi23XTCEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDImNNrwBAwunD9EZkSrcAwv%2FYNZ9R%2FL7wVgSCSifo7BLFFiaqS8FvKDj%2BxudBEoX6wZHwT5G6NeIOk%2Fo0Ire2v0FTMJPC43XrQyJN4DCTUDNBcYiKfF%2BOJ%2FMig6TYIp9KcEoGjil6I7d37kqM2D9H%2BIZapNOxRaPLWoEWnXQxzeQIn7RQz4GiQF8dad%2BImaQyezIcTBp7hxxpmzn4z0xl%2Fim3LxiuWNOm%2BHUteq%2Fbc5ug0F33esH5cvSMsuTfXeQm1I6rcTWayGpSpsPJ82onaXnxhhyFU0Hkz8tZ0pK%2BP2H6%2F%2BKnGNoAXEUSiwfXHIJU6YfJLQO60f5leyTBuymJTZul6yR8PoKdSSQxs6A9LNfNDZnKyL9ctI2%2B8J9a5QGrwztyFAZSlKJDNyi3ZJuLzo7COVyQuVHAtHCUTJ2NV4G9bN56%2F1tW9ckmikXE2T3FmOIhBs%2FNxn%2BxwZV0i5TBwDMx69vwUjrlfwvina9SwI8nBs4WBXYzanOKnTPWnYGzbnRwEbnYzlhNJNOuESWbxAxBYhFHuEC%2FD3o%2FLPYcecfxdsMeAuP9inpFYo3NHNOzgCQQD7aq7QTjCExVMqxio3X6RMKa99Gl5Es8UvQdGQsE%2FyI0unToq2el6iOBK3sSjv5cJGiRRjLh1IzMMDQm8sGOqUBf90KPAhWdcpNQPww3mDmWGoFioli%2Fu7zmGZUff25ARSj%2Fu2%2BE4ObfsrEbXv4sdPUR9vRwN13hOguelVeZ7TrwOxE51WEeBGG%2FgaYq8ULnF4MFUqit9WXKP4QM85dhL%2Ftq%2BJph%2FPhPSbb%2Fu%2FlZHjsQ%2BLQpqhz%2FJaB9YCybruDXwREhQWqUvYFrSTi6w5VmmYHsr2KLkvndqmkRUsZtI0As31bsE2b&X-Amz-Signature=e26b747a320dbb9a4452a65c15c71fab420f5be7b4f1e8218b955c09261a1ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



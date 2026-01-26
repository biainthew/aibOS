---
layout: post
title: "[Error]ReactDOM.render is no longer supported in React 18"
date: 2023-01-17
categories: [general]
tags: [React]
excerpt_separator: ""
---



[*관련 링크](https://7357.tistory.com/44)


🦁 리액트 시작하려는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZ4MGZR%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFMuB4rp%2Bnv3sXeQN4Mv6dBCi%2B%2BjghpUz9E8CBA6dXIQAiEA9PAyDR%2BZT5hR5LUzIKEYV%2Bdb%2BWOyPeTt11Ilm3zvMo0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnnPNp%2FCkDAYhOkZCrcAyXDyCTu%2BrVvAbmG6KTaRvYpKR8PG3YJIzlVMy82CezAhHPA5Ql%2F80kbqFeNeW%2BLh8q9MKAdbMjrJmR%2FYj%2FtKNj608V6jfXPwKpKHB4hXIfu%2B%2BI9U%2FUPxLfY%2FDyhbYnGxpH2iU%2BbJRsr6Gsg0wK8qEdCv1u4YZ2UYPIslJF7%2FIywT0VLOiQ4PZisYirw%2FUnk7Ro6JRAE0pXkZEvrco7o%2FyEXBHMHK7M4RoCXLEUzZPr7t29ekQ2COhC0OMjpY0ZWfS2qET7GCO3g43ssKdhlAfPvkUbgkVWtJ6K6aR9CaJZtmNsKMge7Hz%2BnNfHo0Zz5L03e5laFpBZR2quAqh6RKOmW0E54BC%2FFmhlIc%2B8BE1MZUSxBWTg7SAVFoBeLjLhM%2BV2gbuzjN5R52zrt19CDoFX%2F9MTF56ZiIwuvGtcym8MhPr2AjklWC6lahG386rJ2RqdByMCox5Jly6bnpMyu2TdnpuhoN22Q0phtmewtyfl0dja1fKY6m4hQRpZ8dr%2Fsx1V8TkN8zylF%2BBQcLxt2k8W%2BWC8hH5TQbXVuw27WbVQoKU9IurAW8CuZKAXsRc9UuqtZf9yh%2BxZPm4NLG1ZfO0GMUlzI6GnSW5jkOjOdtd5HK5hdous5VATgmQCrMLH73MsGOqUBnD97JhWH8IsOg7JAWNHxl5q8oMr16smcdgaT5xaFOrcy45Wwvvppr9SqZCR6yjGsSSYUJCP5S%2FifPVzqp1w4Lp8jtk82CZohExsa1H6W1C%2BL3Kr5kdYXlo0Mf0CZjuboBjqb6ocuV9jdBZ45hrzsBT1LPBigueplSvEgGiUn74u1MOHFtJXLoZrQVszAS3cL3lGLS7CC6Xf%2B0j7r8xBVrFVCR29J&X-Amz-Signature=7bfe83675b5d1c107da081be3136ffdf6c6ded60b42f8087344451d32999a0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



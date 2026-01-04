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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHELC7R%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIAWwhEqDLPXwPO06mJwLKEnZoZHsZll%2FuwCFlkDNeKXjAiAbTVSTerGc6uUkytoH%2B0%2FiSWQYvIo0SOA8KhkWJoc8Yir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM%2F%2BNY4EaVlMkRDfZJKtwDV9B6MO3VvPxxQlarzLrr%2B%2Fvid%2FqZGsZ%2B%2Bg0IuPWJjpzyVusu6iCazJfcGV2jP2UkyXxBOE7kJQOYzea%2FLfSdasOu54Sse1PB6KAYPUqnmLjLx7I9UBgObGtYlcoEni2LBN4DlIqFNJT7H3%2Fs1faSd9t8%2BPlCHAD9YMLL3AF7D%2B%2FfGT5jWn%2BQYBhEA7pXqiF3psD1n5wog%2Bf9kKZ1oYOwHR%2FycPxxuGey73oY%2B%2F0yuNIiaFmd8vhxw8kq4d8lZkmIy%2BdTHVZ9xVuFaOVmYlRzRKnJKi46SJZjI%2BcgzdZoko0YyuBXNRcfclEH7T0pYThqJuq7w9b1llEHAOjT58cPsxFAFk4SWabtfRLt7EeMOcTbDSkYcIYi08QGDGXJpjc2ZNdVq8tjlpgjNP2mbKGt4rkeAKKPZIblpdE7s6cWoQIjU%2Bwt%2B5axqZOX38Rto2NyWoQlMg3w9UbDSmwi2Q3Nv4hAvlZuaF53TDX3j6Zcx5tXktadcykH2LYnMHKI88CqXJhuG9qB0U6vNU4df1phlcVaAybjtqrDOYxL4x90ZCWiFt8JH%2BHADneTwj1g6yRknuf8dyaLzNau6rpg78vOgyPr%2BAyq0k6m4DZs776RM%2F4ORBl5Dm2r54K21towgpPmygY6pgEnnGqWPpQRQl31w28aTwoQYmPfxy0WQTffB8bq2Wmucs0gFgShFzcDd%2BvZGLkrxbWPdUR%2FBdRmQEYewV%2FMyGz7%2Fa7%2BGyJVbT2eDa4WF7wyiD5DUG7nMCWTAm0XcGFXEWJsn1YA0a3aetWbB9zWX77Mavpjm3oCy6TQ0nV%2B5lH5AFTiCFVVNbQfUYsSKWExWeq%2FSmWi5cYS9AQjzgRDxahOPohWon53&X-Amz-Signature=d3ed6959de45565552b9a56935e20e856af4fa30033e849f99ae5fed548835d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



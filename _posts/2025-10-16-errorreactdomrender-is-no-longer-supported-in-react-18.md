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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHJESZK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE5tsRycuv0pO6cYwOBnpObVUzgjMC1KZlxcYjJyH0SnAiEA227UmHu1k9apTjHNrZZuBC0A1hL%2BpWBytLBgpmWx9zAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ty9LERynlHxtE7CrcA%2BnW0SnDXZj6ETBszyPcpE48gt88RGM8IOOK7OH0olGtWd4pPx2q0FS79qiEI9vU7%2FdWlPaGdpK5aHS212B87dKn%2B4oG%2FS2BcB1iFSgzb8lvO75ORAR2y0yOEnArbOsjFheuLNZwxO9BpVWt2ZQ%2FVxm3ScnIk9YMh2NRUAQDngxy6e6LeTh%2BJ498pNgtYwIHo1qSzjfT06P87bFBuIbkTpx6%2FMfKqzNq3sdq0qQVqjCnZxdvzO7x5K4JB%2FdqLdNzk0qDyMwCNlTUEfXeQuKQaZQCwMLxM0UUtoQ%2FFFXB0askz%2Bq86Va9ldeS48Kyq6islgW8T51jZY5lw5rqt3P6jSrHxbfZoBoMPaPd4l5PKQma98b0CP9wOH3BJlU3IDeaHtO6AB6ZivKX7lRtCq2IvH4eoL8C6Uh8%2B4BDgvKb%2Fr9S5P9unJFvhNZMDidJv9WlnptGoAA2r%2Fkj%2BCs1ElWARqeHiYnK01bbTXaBNaioOp4NMM%2BhYFksewELKZ1B0%2BsgORzPJIrt%2BnOa%2F2ZkO%2F%2B6JLbCct3S10m%2FJ3A9AXxaJ%2FwQWSIXosHhcWwjNhoPVrxRQcSLn45xmDadgArUIAxnDDGnHrRZtzBtCBj01lM%2Bw6AJ3D6x%2FD%2Fr23XbdClnMMv5o8oGOqUBFnv%2BAAaZiHiUgxS%2Bh8zEuVvNo1vq9Opx7mXxKiFr7xyA7KaQbQBSjaRQKEM%2BDq%2F8kzaSbqXeVtd7IYNAteD0oom%2BHC7brrxiN%2F9Qb8z8X8Z3bqOT4Ox2TQJGriDwzKhv1pBAfx%2BPMdtVZgoZ63ian0yw%2BRcYiedsBYXrgB6dPHGQOdEi4ZdvXy0J8s8TYsqe%2BvbxYdvYDfWWJa2Z2nEcbPk41zDo&X-Amz-Signature=ea4473bb3e8581dfb72672eb158dbddeaa730ab7fe99a0cd21fac2fbd2821cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



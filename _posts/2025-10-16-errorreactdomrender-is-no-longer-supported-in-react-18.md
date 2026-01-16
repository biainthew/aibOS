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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDTRVAA%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBdaMKp0KoAWY%2Bh1Ez92W7Na96mRocPOlO%2BC1iOSm0euAiB2MIRLBqgqHio4P5XgXsFI%2BMt3bjvYB6xk8wHptooehCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMyn1LfBZ55Fl5XzoVKtwDmTp7Thcp9Lxmvh9udE8cQulbaHpDEKIsUYAK9zHHTXN06KqNH7vX77snUsID8XtoXMj2Fv63iJ5iIP%2FB%2Fr0Cwr9F2PK6KY0Sg9gsLwWshgvzXk61l5eBE80Q0eBbXt%2FaSreYLgzp4x9wmykwU6Ef4doyDtFuWUlVFgJdaKpT1zN%2FEfky69mpvZ7Rv4JI0oSjtYm%2FmRv%2BiX4WR%2FexHK2bnZ3QKDukmRPPbMwth3GBQXctAY10U9f%2Bt4HsgdE1rpgqaow%2BVMrfLSFymhqr8FZztiVD0bjDptLx1flzCwg9H56qlrXso9IJdLEq4V3LGdcg9NZSPy2RiykL9Duy153UJJYnX5gnRUnxM1AttJzYSb1xy22uTlGqyBF9fGCuAZJOV38PngJtykWEaCXQ0uT%2By%2FGJJzcgjzOGR5I4QNQEROlXnogUaGp1fLrP4BF5H%2BdiLbpFMtxqm4csSc7hyZhWqgRmTOvOxfshYxQ7%2B1XZIjbXYmv%2FU7ZHCDOxMImIoLtYN1Fwi7fNrhGh4Jw4ah1s0iF0EW7xJA1vQnS7v3lbVSYtmncXyp1N9hwHHusUmojXAmAOk1%2FwX3hbioULyZzZfb4TQBS2zUj92tNkzbl9whX1hoEZZ3XBCqFbZwgwhp2mywY6pgH6WZmQlnMADFn8fvf7UHZIaCSAjGblIhBs9W%2FKTXABdjU9WHkxfUtK2sgCS3X9857tYurwAUxLX3xM%2BC5ZGVhMluaeMVof3Pe3urQWP5aCA0SnY4ZkLQYwkh6r51O%2BQG9nbCHjfoh9HXq0CX53MFH8OTt1swz8C7fuZ8X7E6wmIrkrAVXNDn3IxBQT3sW4DV8D%2F5E6sG6FyiY55%2F1dHMG2TRybIZwu&X-Amz-Signature=bcbfec42193fc8431c8b815d849e821b642b1c7fc64a33c26cfa6cabe71060cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



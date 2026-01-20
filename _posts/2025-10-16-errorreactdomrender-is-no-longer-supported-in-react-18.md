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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZK53UM%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpg61VNMfZoomjUy7ekcNNjIFT92vaK52ItGv4O5sCCwIhANKv%2FohJLogHtHj5pmibP9qvpOkBblj%2BlSdHIJjE4utRKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAwwTjS7V41RFszfUq3AN%2BN5dYv1OzbDSkGR2wPssj6nH8Y%2BNM9MysdyTdJ1FOE9fkPNvKvzLBOCjYvaNEyOVpVg8UPRTIEcfXJKNEDqDYFQ%2FJUCLjYEPP9v8Kkts7c60vypHoVfZXBxBuRM1t9vPBjpc59qp%2F4Z7V%2FzHPn0XVGUmr4omS6pTECwm60in2JHUzMhjz4cqHPjjFIHEGp7ZGUTNtfHTeySKtlkSpXYurweGw9N5eO7VwTjqYTRxitr2dP%2Fhpi1QoVBCJr5NQS2A8SNCiWLxch2t1XM6rVeV3skHKzmNw%2FjmgXJhVzjCFcC9KxaYe%2Bi%2FZAEURCTTH44tf90GC7NSvhaMA7rd%2BYlbVrbNvme9Bp35Hw4QRyYgl8OuBKnJoHkiOsR1uxVDVdsWowv8kk%2Fed5zLPWQyqO7Yp8rVtNrFSze%2FfmX0sLKvFyhx9aichDgjZC%2Fj5cB%2F2%2FZ5DMg8J6HDgwYZpQsi7tglfCh2FacWOLYdqA9TvXjMMNtmkyYZJ8QcME6YfABRq3w29SkaqZJE1uqrDYd%2F2MV6PfoX0O0KH4DOaNlMNJXU33BPhlIj6UyPL%2FVIFRBRAYz1HnfLQ80DWsxRvGAs%2BHAVFaiHNY44gFE%2FvFx1%2B4dwZ1RSiJDQq4FxGl4iqSjCq%2BbrLBjqkASnjP%2FNX5Kdl16yPe3oRt81gZ%2BY7qor0CLqhu3ty8TvwDB7jSw7mBZ8f2ZYB2fTJO3v1cSwLFAUvAOQ9YtETtEUwJCJydOLEkZEsMhqdFdC7p7zROYvhvajGPc5NBIWZw9qBcW%2Bgkx7FoFVLOVPXpx2zoDehNV%2B1sf9j3WlGg7mg%2BuWGGpMzav69P9UIFSQzakU9epsyzBOvcaLAf6vMOGkJX%2Bco&X-Amz-Signature=1bfbd503cc5efcce216641fde0feefacc94381dd08381b7805d72f97b481ad5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



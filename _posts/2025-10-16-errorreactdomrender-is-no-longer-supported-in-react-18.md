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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WCPIVH%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAYnrsc64QlW3FhCesQL8KCY5ntjxLq%2FEdDK7DB3fgthAiBrYyqJ11fY4R1GiCov%2Fj7S7DPS1hQn8JFnc6y297edwCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHK8FW9P%2BiX4gc9dRKtwD4xE38PlXiI%2BGMMX%2FoAft91rt%2FOTO39Uz4gl%2FeAXoK0ItUqOJyLG783W1oG5Y4c7zSnuX6sIJzS7kwuJZmAE2tx9zDMqPPZxok8XjnMY%2B8w%2FghejssgJTOnhLH4e0p2oD2PNys94ILgtz02WqUBw2uA9HGETp8DJGjioa7bOfylGy3eHaFuO6eAFgD0oPYiEeaGQkDt1AfSSMPaVzv4lEvsQ9qPQIITC5Nh6g2RclW22ChGXy%2F6B47QA5mFpFsjSBO9PVVp3WrxH1oWoe12kojK59x7iBMlA5iesKWg7DX4U%2BMkTJcwTmDuv2X9AOee4mXC8crnDlhBdPBwdvI7icfPMugQ4LP8pg1pqwywhODTLwSJ3toYzuRtWknithfjhDEBvDZ7GOPzWIBRjZKQsBucaY0vUNcZ3rSKtRwvxXKFhnVC59RuxqmueYuMRCQQDvUndg1bS%2BZi0TUh3Eoe6ZFqGSXwFQ6f1Ks0pOWsENT7T5kzuyaUq1eICMB15MjQ6YMK5F2ZRC6BEjNGTopFxExMrRp9i7LgKRJNIbVzD4K%2BUXvSw4JIVzTcq0PJzLMV3n3d%2Bnh3ji%2BorwKydZE3NwetdsuQZG%2BlHuebT%2Fps5JlpjfZkhJfEFZL6DxYYgwy%2FmjygY6pgF5oxWIsxBCNrFsPaXtrIZbdhHDHxuPpdQe%2BwP1w2OCbi13n0pNgK89QWpMaT2F6iRk1Mz707WGjqRFxE7ndn1rHA6GyQouU3glsfKNsyXNt%2F9u43H0XYABj4KHSkf%2BrLRV9ATjFPcF1Q%2BmZaKOXBZbXVtW6wsHpoZdOTxBHcB8A%2BMAuLPbMk4MiCUT9p%2B%2F8413WM5ht6OsFFkG5NJYf1swNWMMNH2k&X-Amz-Signature=c80efa52c02769cd5301d225ec8c515f74c363ef5d4bb7242db0dcf32c578159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



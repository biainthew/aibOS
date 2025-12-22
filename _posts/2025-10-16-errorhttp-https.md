---
layout: post
title: "[Error]Http Https"
date: 2023-02-20
categories: [general]
tags: [Work]
---


[: 참고 문서](https://velog.io/@shin6949/HTTPS%EC%97%90%EC%84%9C-HTTP-%EC%9A%94%EC%B2%AD-%EB%B8%94%EB%9D%BD-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)


🦁 axios 로 api 받아와서 깃에 배포하려는데 http 라고 오류 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WCPIVH%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAYnrsc64QlW3FhCesQL8KCY5ntjxLq%2FEdDK7DB3fgthAiBrYyqJ11fY4R1GiCov%2Fj7S7DPS1hQn8JFnc6y297edwCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHK8FW9P%2BiX4gc9dRKtwD4xE38PlXiI%2BGMMX%2FoAft91rt%2FOTO39Uz4gl%2FeAXoK0ItUqOJyLG783W1oG5Y4c7zSnuX6sIJzS7kwuJZmAE2tx9zDMqPPZxok8XjnMY%2B8w%2FghejssgJTOnhLH4e0p2oD2PNys94ILgtz02WqUBw2uA9HGETp8DJGjioa7bOfylGy3eHaFuO6eAFgD0oPYiEeaGQkDt1AfSSMPaVzv4lEvsQ9qPQIITC5Nh6g2RclW22ChGXy%2F6B47QA5mFpFsjSBO9PVVp3WrxH1oWoe12kojK59x7iBMlA5iesKWg7DX4U%2BMkTJcwTmDuv2X9AOee4mXC8crnDlhBdPBwdvI7icfPMugQ4LP8pg1pqwywhODTLwSJ3toYzuRtWknithfjhDEBvDZ7GOPzWIBRjZKQsBucaY0vUNcZ3rSKtRwvxXKFhnVC59RuxqmueYuMRCQQDvUndg1bS%2BZi0TUh3Eoe6ZFqGSXwFQ6f1Ks0pOWsENT7T5kzuyaUq1eICMB15MjQ6YMK5F2ZRC6BEjNGTopFxExMrRp9i7LgKRJNIbVzD4K%2BUXvSw4JIVzTcq0PJzLMV3n3d%2Bnh3ji%2BorwKydZE3NwetdsuQZG%2BlHuebT%2Fps5JlpjfZkhJfEFZL6DxYYgwy%2FmjygY6pgF5oxWIsxBCNrFsPaXtrIZbdhHDHxuPpdQe%2BwP1w2OCbi13n0pNgK89QWpMaT2F6iRk1Mz707WGjqRFxE7ndn1rHA6GyQouU3glsfKNsyXNt%2F9u43H0XYABj4KHSkf%2BrLRV9ATjFPcF1Q%2BmZaKOXBZbXVtW6wsHpoZdOTxBHcB8A%2BMAuLPbMk4MiCUT9p%2B%2F8413WM5ht6OsFFkG5NJYf1swNWMMNH2k&X-Amz-Signature=1a3a6eeb4cd4a8c26dcc916a4b044dd600c1381188d0eb9032ea661bc9564db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


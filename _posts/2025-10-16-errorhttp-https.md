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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZBPEZ5W%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHQz4IVUFs8u2zyYfhXPZODFLpyD3tG%2B5bdryp1QDn7GAiEA%2BduJKOdMUS5rBUiSBIl%2FfCy5dxAEHTWECLvGg5zTfLkq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPguIc5KN9qi39BTTyrcA%2F1rEVYc703nroOpJ9flrU2r99EPs8%2FrNfGiHv0CawAg9RDH2q7UvUw3vF0rCX8AkBU4dBNIzaJWlu3vLPQNj%2BzDDCBvkXSEbpADD9QS38ED5jo%2BaF%2B4O3AOqG8lrBwVW3nwD57cYkwZXWNwp5GFj82pvFBR5M6mXjoDwFaYNcn8hUcA9Aibe7fjFXYB9M7O6ptkwDIz4kzDh5l%2BeWgear8z3nWPS%2BAdh5Cxs97H9AR7Rq1cc3vH1K8kcPX8jFKWSFg%2BZV2M0XRpH2NPynRZR6rSGqekuPCdTF3djMb6HhUWfc4c4ITuJhNTGC2BjWLZaQiM80qakek5Q%2FBOQpVK2bxLWcK88Vq0za3RtcjDayP0o1QLl1CDKAlz%2F7zTo5SNriFxFRQQ3qc7quwAA8EueIu0fz3gGq9NENTTyBUeyfpKMn8JEckYPEVqDABv4aAJFvioC0Wvb0%2BdOUTb7pLHdZh6YRLqtTtf5ubDxwTokdoYDap7Hm3p64DlVlZhssLKjqqet8GKPBYSEwpxgY3xHYUsHin7XB13zsqk77TGK9%2B7Zo7Q5iQum1z%2FgVTYIdqvBe8Mswxs71YU9YwctjLmK8FhVyTfoQJ4uDboFT%2FYBk%2BhrycxDhxuQzekm01fMLbJ4MoGOqUBNhewGqIikGjsowmRGBIZI4Y5pU91qqSeSvaDY7GgjVC%2FipbX2NWN3vWrxzsrH2uWNHTbwTFRh6JoqPUhLcjNvbSDqlVTieSA0zXftN5q8WWZVfcAW7%2BWbilQx7LoZ0p4VIUnidjeDTJoM4cZ5LdXHMmIsH88Er9tUMZ0z7xQ%2FZ%2FwUO3f1bojgI7MZgEv37j1TITLDXNsQwEIzNg6dNZgAZsUfsWD&X-Amz-Signature=75d518d9d305a5f0f8c842cc37395186c8e253168814af0cdf162c69d518d914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


---
layout: post
title: "[Error]Http Https"
date: 2023-02-20
categories: [general]
tags: [Work]
excerpt_separator: ""
---



[: 참고 문서](https://velog.io/@shin6949/HTTPS%EC%97%90%EC%84%9C-HTTP-%EC%9A%94%EC%B2%AD-%EB%B8%94%EB%9D%BD-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)


🦁 axios 로 api 받아와서 깃에 배포하려는데 http 라고 오류 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EUBSRB%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHHecljAuHtuX%2FigFAbuaJeW6nScAEVTNpgKVydQBGjvAiEA%2BSXKiHypr13jAblk8e3hkgevnulpg1%2FMLF10ksamBwMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF1inlXv1TNtxJArGSrcA9MsEjOyIP2hPu60cHDVz%2FkknwzJa7yNn%2BL614rTYz%2Fl%2BM5MSo%2FCnk8afLIQT%2FrH554xE6WraDq44w5%2FYvslpxpyyaXf6ej31yw4%2Fzvzgn0beLJqK1UwtaEB08yjA94hZDMT%2Fy27phXp5JK9wO52Oor16BadLTdh%2FiEX6vwJjjUEcdKXrtsGOF2L0dcdjzU%2B1VRQ5imTC1MdKz1Dp77kFoeKPpQ6iIWJgxTQbmdN09zpJLI%2Fnr392oU0dUtZT5oIXgooqVzUh2PjRhugWoPrerVb8Mqr23AJwxCZ6I%2BCCo2QzqaQxxE61%2FKGALhssMccsCbKFOIEwbmNeVBWWlguvIeYSyQG2p01iCvhfz7knbKLc7ZG6gn7f7f5quSD6lya5RU3%2Fu7yLrSKlOGfkkEqcxPJYR7e1L94Nh%2BW1TIxlS6S9tCTN5nkjZX%2FuPwnNyvyphWzKMAnMYSFRisky91rSa574Yyt16TIv0avPF1AOZSW8zi1OzMDmKaXir1WCm7Lg2GVhADhoc%2F5PZQEHST8x2Quhja1%2FqbawMFx1IgBEFcuM6K%2FqooCEUpwbX7ZpUhENEVxY7M3BYBOrdfnmQ9fpTnhzkmM%2FkPgp6UaLEAvmIOqJ0NJ%2ByCtFdFnnafiMJKb3csGOqUBvNnDh070nbd0%2FeW3vdxKsPd%2B8rhFqR0jNsS8yv7getjjSZBqHc%2Bxu8odwBZIhsL4%2B0116H0AVsF1xWAG6Qz6fjordH%2Ftogi8bJRmpV5OulG8WtocYRaRMs8r7HcjrG8eDghA6yPAE6E8jFrc%2Fru4L5mxe6ggc2%2BygFdVlozuZbWQLx7mLh1HdYhMGph%2B7WV4jjSVwBrl0TCk4ENNJw1JtXO9heUi&X-Amz-Signature=75f34d6de3f618df969e4228034a2b7bfcd60bd2c958eb7c159e68e40de72c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


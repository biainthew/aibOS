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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU5VAPQ4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGjYbt6CJcjKZ%2BDI3H9LNWkcTEKGGIFvdBxA4RGz3yTgIgC2VnBSs4M3n8IycqU7qPRdWsCZ3jgvaQZpx6sLJ%2BL7AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2B%2BXMfT83%2FSaD7CircA%2BCLr13A9x3U4%2FB66oNiuLDuLXx5rUoisc%2BXj3TZHcFkYpuvKHk3GZtuWC5j%2FRFXcjX0o4t6qzt2d72zaQvnYljW%2FnlnK%2Fm9FHekulNujam9qsrNkal%2B6FfHQezyoKCZKm5%2BIOC5Usa5nYnTB4zQV5%2FE3c2l7hCu8BHmr%2FXfr5tJRuPAeEQ9TiYIwzlZDEZ0x6ECRHKMHJjX8N2lCmJDDl%2BbEfHyDMI5nua42G983lVbw1PCImUusPFA%2FvoVusDsmJYmL6YC5r8N4zqE6miAFaHPs2%2FKj9riCTamiZTIzm1E0a4VcGNh0TXDG3xrKn9DHH7SqlIKHVXkRlLK3yWyNLkoVNpBX5h1PCSVOWa8nae4d4q695O47k8JIVpxjThsrZLKOTqEAFB4biKDsLlJI0SbkXxnS0sCQAyjmh6xGnd9GXnh860TolLjp9Sj6kAB6t%2B0pMxopjSGOnfXh5GhtqHUhS0m6dGKFHhwe9NB8AHNsZ%2BTRG%2BYcmgM3OzUO3p3TIpNRBxx31Ob%2Be9Rgfbhow1LdNx%2FUKEXACjQgIZy2%2BNMpxCRWCb17CZM12MtVheSiufwxWJRuExTLMNj%2Bzw2UahJAPa9w57KUYLaakJSYkaPMjvwlmpJZsSMLgMCMNGmgcsGOqUBf3G9JCzc43CgvaFtoIxaSMCyTXJKYgzxAEVWcyesQXrw%2FJWEZf9dhYOYgh%2FGmQET4NBy41SNXVF6N4i6RuujKVnnts98XGUanhBBBs25e4VocmwzpVHIh25%2FjgkL73KOu3%2BKoYZa9lTg0ERq0UVvI7HBVGCwfibpO1MVNCfsi1vC3jZPwOlTv61pAIzhhV7S1AGxrJFy2NP2dnvgbLJHoGXQj9y3&X-Amz-Signature=79306ff70c9b79fb0ec9d3ce2658905891eb2e10e4716b7609c8dea1b098c4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


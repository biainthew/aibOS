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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MZQVWO%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe2ldxQRWVVDyiSJ2a%2FeuEeNcGur501GAm0WPRAIvDDwIgLin4rMvxKYTIMmfnO%2Fw%2FCQDRY7%2BeVbPUBWF7lp3U%2F%2FQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfo1TQmIepYjLLCXCrcA9R83WYmykITgcG6RG%2B28dq7wV%2FFOUpI%2FqKV6o%2F4hfT%2BzSHdGgZW6LnOyurVB5HNIif9Bk74Kw1%2BobzmRWKy7rM0EF7dPGUrz7jX27VoFkuPnvKCAEY%2FeIOGAmn30symR0BrEtpPl5gi8UZPkryBNx6Y%2BcF%2BynoGveos6xcs%2B1GZu0fg4JaA5s1br8RF%2FFl5cXPk3p9I6AY17N8OvWlghlZWtepeHbzmeGX8vqxp4sIYvgse%2B3IRqSmxkK2GxxV5m0KjAQbzXSYsD9MIPaBopaVqeM79eF%2BqD1STm4BT5rW86%2FJuvVxg4ZeDrKqtoylNcO1ywnaLsTRrr%2F%2FZ1LvXfxBDzwh1q18tdclhZ%2Bb%2BJlQ0yLYKzYDOi3Q4E3QJoKyAudA1hzuscMPjyyIEJGPLDl4achLSfExFEAioIFPXMnmZfXvnxNQDDY9l8r4SjCTtvA7nsEgqXHZZS3K8nLTpViI%2Be2bUWgBKibpcvX%2FalUZQaZ76TGBV0gSR3Jb7f9FkWNtkgdgjhXw5KhCm%2BF4YBKOE0KNX4CRMSMtRzd4RKj4fWGzTZGVvU6cbbyd2glDn%2BPhQUM3S5I16ZusibfoanJc6T2Pnuiv8%2BRrKH82hYSsfOb6LjOciQchSenv9MPa5y8oGOqUBYFKd5lihhpyDFy9JIHmWy8eVmOMh8VkoFQVw%2Bhp%2Ft9FnHwO8Kvl91gC1vjA2lXE9enlJo6Xo%2FijUZk2ym6AhF9Fltwt443nAI9T8eQarXcRh46sX%2BDiYZpPQfmX2EVJ7FT4wUt5Q049PkoTjj8IIgW6q%2B50VSKDrI0E1Fn8ViPR5CvZFvCW68q5Eugi8Aa4jjeTHbrOaf%2BcjkF5BzQjsrwor2U7y&X-Amz-Signature=41a56ce0312a3069461c0aae8f7f6c48f58776121892381735b9cb39627f0553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


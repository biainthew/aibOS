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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRLJO7J%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEcNvOgxiazPGzUcsSPYGgjtcBF3Y8rvywMrO2s6WYuZAiEAsDPIEAcaTw2gxhnKAEP06sLuMswnX5qM4rzU5ROUCeQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B%2Fgkog3DykPCZ%2ByyrcA6CXLuYn7XSLEoj21cGOFgUifKX9%2FJWcFU%2Fh%2BwotrleXdLhhr4FOydnHdp8%2BEzfhLHiF4HaRzT37bXOBZZCn2inico6rD3nfNV3V11zxGDWqbgmimq%2BqaPaHmdVWJ8KiKTlFR0t91%2BbfjvQOyE%2BlxHE4wXGt6AFa1PWP78kVVu3io51bI%2Bmc7GPiQBzqSePusKvEj%2FTzjvAIhMzBc8Xw%2Bz5Dw%2F%2F0FGvG9ZvWoBL2gSzNf7nXgaJKaCkMWvsKm1EYdWRGoAHqLZb29xxB%2BDYgy%2BWmwnZX4mh9rVCEy%2BkesrFxDssAtWLdmn%2FGtvJgWu%2F2OSt9AV%2BjwaxyqY6eA8cWlzGXpY8fDwQ7jxVMIl3ibMzqNpAswqlc9w8zYPn9ynShgZ%2BE0UaCA33bT2LPVFjxB0JVty6qd1IaB6pRpwtaBUCDnm6RVpqd9yZwx9a5U62QkKjDrSfGC3%2BSI5l5ZezRm4%2Bx17OMCkIKcV2yeb0E2NaBEP7HpUKlHVhUEc1KBWPxHz2EL8NyojT%2FjQ8PEuW0uAI3ZaRPpsTmk8nsShOgOCg84aNE6RMORB3xsxoedfvsiBoIDEMLPTSUQbXN7%2FFXk365wYubfXfrH%2BzbWVG5detH6bLbN3i%2FS%2FSmqk6UMKDcxcsGOqUBZBHINewDOsoB4l0DNgUnns1ookUfmQfLQUAg6G%2Bvi%2BARNy3L6hkbFDkaHI%2FGbR%2Fv%2BFlbnmw%2F5oDtGkBeCdx8QCZY%2BRZZEVTQ%2FoNmWmCEhl2k2hkRWcHWwG5wI0TMOo1dW4j7RloBckXqpRWmnvEp2d5HnAihZioIE4dBSVKM2DT68Oej8wHrGF6dG1Up%2FX3lpyYDqey9rbSNt1Ze8KC8F9Wcm5rW&X-Amz-Signature=bfad0b444502e59c5f93be528453d7227671a08344989ea3260949d977a56dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


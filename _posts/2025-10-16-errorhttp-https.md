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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYHNOC4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB01W2o95WP%2B%2B6L4cuuBHn6yfvuZ0K6IFwH3IKIZ26GRAiAQLIIFp9dUvF411gFH%2FkblmzkP%2F1obpt9P5XXXR%2FL4ESqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEcLkuLoVuWm%2BH0rwKtwDRtO65kXATsR88kWBkBCIHgwc0wxoOZ1BjYB1QKrG3CmQvbEk0Szm%2FfzvlDzdqnvMkQcuqbWbp7Ks6dZhXP5vjSnkchW%2FlX9yTV81C6bAZW8nZ3Ma99XW4yhkx1hLni1vuKW3XCa5mmQGQ0Mo2Tv%2BTJA7ZUKswzQt8XmJOpjN2La3YRgZCuqg9owf%2F7X4IOIXi94OY0qh86SDtxY8Mmi3o1ahoRm0TwZvX5dqW9Y9TbjFqdxe0T5BPzXluhssWHpZIf89RHj6cpyD1AoEgjPyZF8219OnDcp7P%2BBk%2B77E8vNZTnuUsulpllc4FSqpd3BK9JBgWnGaaSk2ZxxSkEoA6sRyqw8DJALWlX2sPsZUj1Vpot3hrLJKRgLSV8mBfbwF5aJpqkm59beBGtR0zZR7NIlM4sbwJ9YA3Yp7q5F1i0LjjfxySfdYRAPYOeYvOSXbdj0FDgC5WqGXRQEzjae7p4MEw6%2FfvhL7caCCh4xd6O5K%2BNLmDmGAHX0yNn9Xg2rUMqjQdPj9ezE75etWCcT8UaNhcG1IFW67MYvscrMjHTeGjDQ05VvY8nqL4q15Mz9HvzjjMzgUqNu1%2ByOznhOxuxPQaJk8kv5kMjKYuMGpMrZgTHArFEoYbYDsoEcw85WkygY6pgFmLE5p5zC3HBsJ7FeBz%2BSxMPYGAktIOiIH9oQlTxO9DRI4uPu24wyvbDovfIkBn31xIcQH2qna6JpmttHdu1biABQ6pGLbyL6tbBZHSyBL9cWvc0mEPoovrZaWJ7MscXl7ylzJE6G45wLUZyeRg5816qe4kgpGBAyhoRo2tqWDa4V2PX6%2BOf93cPNntgqFSDx%2Bbi64p1BjulL6pNusLa2W2cuS29Bm&X-Amz-Signature=3e3f0335c3e48e128cc86c0dc36faf33490602a80e55a482e240de92fa970165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


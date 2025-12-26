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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736PFQ3V%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFkOS9t2ByTxb5Jbn8uBv5kIbGUWSGfyyljszpn5PsafAiEAkeJkel3tZIVwxWt34aNZZTwlYp8OtQq7WSSlTR7iQSsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCuRqWvmMgW7zt99%2BCrcAyXCy5oQ8G92jS6nbEj9897PAD0S%2BLDESMi%2BexLusVpRdGwJtvt3XqTRcylHi%2FlT7Nb5A8jTOq8ybNvywUYNRJmog1PLCqAjDbFfgE8JN6As6DBTfsunVDgpqBn5SyIQqCOaoQZ6ahRRea5m%2B2fBfDhlMTlZwC6LxoER6J1CB7xFDkUDCUfBS7nT7NuYnItcpr97C%2FUfGvdE%2FZrLswzKaZrz1lbS5Jrc5I0cvgBVmi71fah0end1BompZNGp7Ge76r4e1kygwjrGEa4V5MGWl0DLnMxXWq0xGwjJDMElMJPvN%2F922BSq2KHO5ZtrYMtpRUe4AzHTX4DDxoGOm8r2%2FkZdXa92V4zAS7pLcQDGFKEUmZ4fw4CMFZt2jsDiUN46GWdNBULtgQ1x2N78kc%2FH7KDoEa0JXfgoFoWEF8N6%2Brd5GHTKZo2%2FYrvaSQYD6JqHRjHDt5Gvi8LkcVZ07OHRVLFrmhTaJ8YBqCOhFMAZMSJQtDU94jC7UhRiMVaPSiQ1qxGmuorM2oO5sKT%2BFJMtvqecf0Ode8v1aSyPXJohkxovyB9Zd6iNEnAscMziYKN%2Bm3cLch0J38e%2FiB399QAVAxzyS6SDbNGZYL1t7Wc9LuTWWIodPDzwd4IfFsCaMISvtsoGOqUBm7d6K2iWnWDfw1sRCaA%2BDv4E6%2F%2F10KfnZjWFkaMTb%2BZ5ZzE8hWEPY6gx0o%2FbyxE%2FDNIbevRiTZFMR0clwP69a%2BBp2uVlO1%2B2VQp%2BxlgkAEiYSDHw1c3GMnaKTrGG5%2FZK%2BKJBfPgYg3m0sGyDob8hW9IeaMiPjocfpq67ePucS5brZqaztEIFMEJoVhrK81%2FQeSQk%2F%2FPH9H0dH%2BrVhUWVoKJepaEX&X-Amz-Signature=14c50fc3c40325195660b44f0f89689df90c3b6fdac0038851d48069cb4ac730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXJONLE%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSA%2BJq4sv0C24WcngpNvP1RLhNjALQ42OpCvlTGT7uLAiEA9Y6z0dKmm9dJlxbTZKw5WLoHocmRmR678qczEl6wCZ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOqLjbhgg30p7UPL%2FSrcA7Ff%2B1Nai9eByOACb%2BwZHDVAvil753vtBFs5KeyP4IILJr%2BrGUm67KcRoOuL6wdFpl1HUHXDK6VJRka0BF%2Ba8%2B3m6BaoyFAmxK6qZlWS%2FNWDMRuA58%2BwcL7Ss9A4itjnT8dQ8CImrExD1deQaNX3L0a0HkuWnyUbxgbXbX%2FizEHEtkHiGAueXBi0OVv5cBHkzjowA8aP74JLbDYMExjtLkZCXyWdQh8L1nWKDwqWljCKiMWByWNJrzq77fMVgUmthefgR2yxfUyolB8YCglhbsHHDKt291yWesnQscgk8DI%2BhwtRpsj4VlgXHePBFumeUJkHYWABsnop6Yag%2FlqPNT2oezXkiIJKMahAW267vMmo84oy%2FqD%2BiFUR6zoPHqOsTiab5fjx8ID%2B1pwDktUaZLDIpTH%2Bh9jjPVcaApN9SmUHeTvXCPbrUJep0zRX45ckN%2FMHcuRiPdczouC68GiBTObeYlMTHA8%2Fzc7ZmK%2B23JnzloqhCTfZHQZLzbQbSaTv0%2FpgGfUihhg%2B7uKECF4bSq9MgE2Oe%2Fdkqdt1I%2BguZUDmsoNa5yk3qGVdssTVGUihuRQBnw6Q2GZ8%2BynkpsyqcxlVP2K96cUBxToIWxagnAAUMO%2BbqHyFODbhDYueMIKzq8sGOqUBulXnYgrDG2nccFXGUU9boQxs%2BMUjmLkFYUL21RFtFTgkaNbleqwYDZ3O8L5YVm7oXJOxbMP%2FPt9MILWwIvrGrJo5dgGTEZX4ohUqckERfg4z6dQdowFbizuI1wT0anWQSvYVuDQSz521FnhvEHeEi2SP01EMQO7BGQv4WTBihPlMA0iRWSBl5dvGUtvaR%2FqnBT6gEeRZan9PgAmZgpWRa2YXTM9%2B&X-Amz-Signature=10feaf339d1301b3b5a4d30eb282d3c2953d2ea895289e4cc0958657324814f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


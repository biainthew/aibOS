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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UR4FX3B%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD8cQSqVqUSrI2XXxasf1rN%2BBxt0w6YtI0sz4Gw9XldywIhANHwIn19KyYMpXdeiOdcr3vzylsJXrJsww581AUSzKhQKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2mdJQmkoidMaKa%2Bgq3AOJqXTDdKhziTUrxLehSdbcs8SWEQWaCc8qQ%2F2b9amPHbXKlq2JCasRD5CqRP7KG0xzIs2lIlTW%2FiR0dR1fTPWOjTDzsjSQ0spW0MjoGrg2w%2B0nseQkVNd1tbpRSd%2FLxXU3g%2BVi%2BR%2BVysF1aZ59S%2FGrgo5qiMpvSznK5jUJIc4ygNbx6E2eOicRMNg%2BMrSlnY65tA4JrVQ1%2FTHh2PmyL3JKyb9EfwG%2BUhJe0z6DPxy6WS9koGp07q3t5Eivxtpv%2F%2Bcku7ijZV9B725fu37mMtQXZlnCiMqK%2B97e%2FDf0LOwOoRV%2Bcu5YDGc6oUIabgPQUOhAB5f2i90nwH8wUjc4NsvqQH%2FQR08Wpirc4s8dJiKboFOR48ICI%2F2fEntDDE5NWj12vVAwnT5mdvlbPnPV1U0fs3aearxjVWHtwljcqjz544kVpZJ31H7FoWF9XTHabbZVOVv15TR54gkkeiurq0XnizW3dgsHZw0R%2F9uWteNbJQBSDEfAk4BoVahwp%2Bh0RworqoaEknaaZRxV1l4TA7MobSKKbsKnRbR3f1wFRjdhFGmnHFI5q1VSfmyeiC1vA4K6%2BOaSEAP95TGfLcTQ3zBkZYwRkrCdaGdTWViLK8bE4xvjrzyb3FKyaai00jD8%2BKPKBjqkAV47KsfHQQlTarTqLzJWDKfYtcBlY6NTQMRFic7qMtm433NifawiqwA2bYWi1SUp2yJ8hpfs8LWXXmi5OgZdsRDf3zv0QCpGHsfEAZiuCLWM8ZP3KfFMcRqx5VmIgB1fuBIdpxt6pWKmQf03yEVJ7nZeBh2vsR0Od5NXBwDKCrM3xM5b03pcG5a1r2Sag%2F6F%2FFxD2fXA%2Bg5YjfdI7b9CI2eHNfeU&X-Amz-Signature=2cbb07337fc34fa8fdcaf39954e8ea6512d228961bc9d208b5f6979174af3299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


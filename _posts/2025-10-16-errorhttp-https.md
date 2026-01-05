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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MFN6M35%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA6qJVJk7P3%2BTMlzux9xjULN%2BNjaqKEyAk31No3e07nAIgFOyfjDiIXq5oAgEwRpddtO0ZaZcpovhopNTAfjWJOCIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMh5kBhpqt4SZq10OyrcAwTuAQc%2F8A2V2G9YNcJ%2FQ5W%2FULO8IUr5BPolHdsdrYoqDNtZr1cZha3m69EH3DPI0O5vKpQfLYTD5y3jGGAp8XVfGAq9aMqdpn92lAltaCYlDEQ%2BsB6upkXJbvHgy%2FP%2Bz%2Bn4%2FA9Ao9Ix0Sj55I%2BTbUQZ1Obm%2BC8s7It%2BDLpFv21zLEvZRpQiA8biXmEAtH1inNh9Fv7jJ7O3JhzLYyQbPQe9Bl3yDg0x101aDF5J8F9rfZAiSqYDYaM8ct7Wi5WQ9tcHuFssvIt%2Bc1pwWR4alpGNWF5rvdfiYCBmutcmRMGouZ7SKLvaQCT9nmf8lqimBth6lOyMpsjWIuHziDgWtc1zvcnHEzenoH7qT7xz2fi0yDRjdG2LjAyclYla2sswM26wWmKcx5Ez279j%2FMrwsFQLZqf%2BMtdCc8P2ys2DAVy6mtVWzwwJEq6os0bQW5foO4TxKi2VKV8P0L36DTuRmSbgeXTKx5QFqT8u64zGV1UtBuhuyKLh5M0bVD6wdU1ZJs6fIqCDJOoI4nJfkksXzEQIyOLz2do1Hh4V5ZJ9197PcfzCI%2Fsn9%2B63KgC6wV7IAvKUe8YEYmjUlvAQV0Mi9e%2Fp9TztefvvoeFOFQLqNz5bzAWG3H%2Flf2l%2BspVdMIie68oGOqUB1kyXrU%2Behvb58S03mF8trMcePqwTPghP%2FlNwLYzhua%2BnRtehf8eGsJ23avpwJtG9Ij37BP0vctWS68FBs1ANoLRwLWPTaNfzZNZaDVbttXsJvJB49%2B54i7l0SQ02ryBVrRIP097mL6D2agp6%2F%2BbUH7pn9xLQjrHbgSFwM%2FxzLZjgp%2B7kIJtYN%2BxzpG98ag10jiB9kwKet9MSqnZV7N491Ay8JPRW&X-Amz-Signature=bd7dc6e07fac6347f3646560c00011b15336464d3dc68cda2ed12d12ee84831e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


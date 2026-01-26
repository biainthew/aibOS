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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBNLTXX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCedXYOnBDZN8RoYECopD940p0tgDFB5ET1UyeV49OcYAIhAIjpOWBSWpD3FYhMLQYE5%2BhKTwChSCtIJxtz9aFFgaZ%2FKv8DCC8QABoMNjM3NDIzMTgzODA1Igyuh7jx1WGCIp%2FuZ50q3AMMpzkJ%2FUdaDRjjfxdK%2B3zxKKjr635V09KlFQAsKaZqO6RfP%2BMSGqCmQAylcTnEJ8lrLqc%2B9uubxDU78iQMHdyeI1fg0o7tbAbZTvDMRTn%2BehazJ0bVCEd%2FLR0yqd2ayqj6p3qvTPWaC9ExWAqTN4538bDBAtif4d%2BjZJJ4Q644sWuEMKWBe6dQ2hjwIU%2BXjdIZ4BVE6Q%2Bqnz2qym%2BTSZ9aZjI6q7X4%2BPQTkep5ecxbHVNxFPe8mUWeF6HLVIoeZfyBY%2Fna8sk0yxiuS61bNDYCgZRHLDIv%2FEWZi1iCXI%2FigLI8MzVQil0VuE9rUWhG703%2BvMgaknh3Rk1YsXc%2BUrl%2FMZdEb7z4wAsembNR9lAiCFqGT04SspwbJbUZycnXO5Y97txIX0DIDZ8839hclzVqi7Vi3DBN4vPAA5K%2BkDy1%2FMcL%2B8HJZgTxxNVFvPMFGDWjVNQN%2FF6P50FA0MawCOQsoVcVNTtBQHRy9EVuoJP%2BHuzKA%2FaSGa77s3UE1bcu%2FH2uRb1YjcNRLi0xwQOL%2FwH0aYI4Zy7rDYD8v82x2NDOlAPek%2FdJLU6I9uwdgMscGIkPiU44S5chNWQid5rO4KOnDBGQeEv2UzA40%2FOYpIfl1Ys0zpMteGQ9CAqRZzCVmNrLBjqkAf6fQmC7PBEmoppPyKESyRUX60inCAeaVx07qchVscayVG7fuZH0lAjmU4JU9A7gFISbuzz%2FgilsSi79l%2BNFwXJ3B5%2F8%2Fa1KUiIlXCeLSrhdQor%2Fw0vB%2B70DSnReh0vsi3dH6d5PLnPY02jw1y2LegcZg0sJTfHSeiff%2Ft4MRLQ89KzrDMePMxF44I7wc0umbZ42WerkW6v0LxkrDFahNMWh1wUv&X-Amz-Signature=32baefcd5f37890b8182d8bfd8479ce6f262e9e9d154927ca768f774233c3d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


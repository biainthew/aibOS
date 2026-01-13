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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU7XCXY%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCGBLb9uxdxKncxExaHAK8ZFgC7S2Ogg9dVajDCXIbPIQIhAMTgpgrQMvVJueVcGSHqoD85uOwXKUgCxuT3mQpmpTOsKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUCKfSj69iAQYUP%2BUq3ANfLvhh4KujEKSQVpOB9cel5jrTfXKa00ZE77%2FWBUcLxXMOCW3DCA0rCg3JdR1CWcl07Mx30rXEHaRFN%2ByWbtG4Q8nqKA2nYQc4%2FwyQAtO73QfHAOVydiJHZF%2BXbuCtRzAwF3puJYoN%2BpjnsBBkJybYW31d54UkfCqMoYzPBgq2ZMGDbFoH%2FR2CtMK4ZAklujOCuFVHK%2BNOpWQJsH931DxfbPyUzWh3KTUyna6yKe54o1GmPzDb9MCXSxXM5%2BDkL6NF50Xhtu6BSHNQV8pAokqQV3Bmol6gwdop3%2B0%2FWwvwOenFRSvM7IanyoyU2MNfm%2FkbiASKa%2BRhiEe9V9jLhA1Z68QrId7qbbNGlVlypuo9ebh5kqzArTFTbEPgXKXuVNmhrhmUN0D5Hrb0CDXVFMSrc1C50Qs720f%2FVeb3uzpdoMZEg%2FJoMNDS%2BtwcWmeQRKjaM2DmhLTUNaB1jhUa%2BiMF%2FsvfjsCuzIbwytPkdApvkYC3VgUQwB3tCXtHMVOOmlJ8ZQ3%2Fe6xD3Oq7JH4NQ9Ud9ctyHv%2FQcPyRu2nd313H4VvDSUla%2F0Tdh4nWYpYrLIdsnx8v%2F4RriA6UpH0E4Wb66gensdmHzZIuMAcxCDtcQDQC3rRD09JOH2mR4TCXrZbLBjqkAVHs3eyBAQ3P0KC2yOdLSppEVS1ZHknq0t1%2ByrFRcb1mafTxLMdeQK9sp3wdulHztg%2FDKVYN87iYRozj%2FZPcvBCEH4%2FY31sE7JNB9d6t8JiN6i7PYCfIjR1FvWyZNQ2GjGECqpcsEP2bWjtPgbOoPiKQp50sgqjsMrO92j5Jskdm0%2Fdy%2B541ThNBHF4CD6A2V1mnNZ6dkNZ16me2TMBhKgf0WXi3&X-Amz-Signature=1b9ff26015c245859661b3c3e6ed2b29f37ac8d0f498a3fa387dc8d353ffe4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


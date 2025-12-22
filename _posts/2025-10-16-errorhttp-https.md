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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSAHNFS%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCFI7rIRLjJ99W7FVcB5nvPwdWnvG0B54ewgF2060YIaAIgATFHmnHSOMyR3hLFuLu3TVIEot2RKhGqNwWptJrBXPYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUEWtN4%2BwnpwbAZfCrcAxSjoYsqIKPbPyN68ZraNgMEKndI17nPCGldXAO9mFl0T9i%2FkOyu1jFaw%2FkQov9lG8QsGfjRDFkeX7Rk3F3GCwbFv73dYHzjMxtPyEEubjT0S1SKJwFCFA1VZeDzfxSGtiQVwP5oggV4f1yY6Kti%2FaMxO%2B5TksGg6tBpwDXRSUihoca3EzHoFRoyLJg7SmdAsjRzZLcm7Zz4WK9m37KjDiSmlPVQsrxg3zGMEK8HAYDtyKMK7GnUrtCsE0%2BvgQ8vrFjiuseKaUAqfC1wkj5G7jCmPCSWgqcBD8KiR%2BiG7f1ppy2XMCvfz7l2wO%2B6BaVpXe9WGbF3T%2B5PtnUOA0nm4r0sFsnNeC5y69zxaMGsFzEkUfmXgrPZ8HIr9yM40O9o2aE1ZaUsAlnS%2Bl52rMQ7SBRywHU5KGSqqB5vcgEIyyva4fTovciev3JGdbRK0T%2FccswkGwJPk3jMXB7yXzTUP2pJsKBOWuFHGULQYBNtCmYnYlAFiUmEiCekXA70%2F1W2yTCUI9pioYCvI%2FMvGbEHb%2BKnRrPbNPNt7641UC5ydmJuSWIeu2KfI2NdveeeTr2T%2BojQ89fXSI1IdHDm61iSVMhSrrRdtzN7dkVO34%2BcDQs3V%2BcipDOFl25KUoQYMNSVpMoGOqUBIQ%2FwNy76YRxtm1zT7Oi5Kj7fwlLNX1Su36F29%2FvVTK80pP3cpDR%2F4tx8k8ruLO%2FsJXURImi60gU8yrcyfex1DIyCWGO7q5i0KDwS2Rh6LjQBYwEl0kCkJRyjzss5gLbbyeuu3KMNvhFKhR0pcOS1exqbz%2F5Q2v%2Fu0U6yNW%2FdvTPIIuEu0YCjnIynRMuSB7DsCBaT9ZxKiZennOC1jiRuWB%2FPeHXS&X-Amz-Signature=0e338849cbd11efee0f3a4082cb158ec7ba3b643f2b5253ab13a669a5d3ba171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


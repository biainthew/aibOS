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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WGXBOM%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDOM44OJsPCqRoOZvEocLciTT%2BTf1dCXv%2Fkl%2FiFD0JYPwIgJLhIiVu649h0aEr04Lrqpobn4g4A2JU3DhK4UjPyBu0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMHne9%2FyiVQmLbGeryrcAxiWZwYrPuJmTSAG86%2Byx3DBSbg7uZ6GdTWdfVChFh0gzloisceWr5UDV3DyDY%2FaIHc69MqSrC4DSnk4TvYDa18TeN39bc%2FXDYZhpRavmv4sFIJvGhpSCOCWe11586jiwuIPB8caT3PfDl0K4FC7arkT0Sm1GfSO2AFx4asrrCkM1BHFCTqQE7iMDMh%2FiW7F39PvWv9G04DXKNjNdnuCKI9egiIUlaoF%2FjF48UQOd21SuGX%2FXJaKipJjQByGkgmQKZbOqDkKx4bugYxmuhswIlg%2Be52DBKTcdV26JW8rzlTh19YK9%2BpEgIWYZ0b%2BZSlt2DP1%2FnTwnq2MecKfuvBFlTCgUDKs8tXIF8EBvbfyoGttnDOvX26s4dwI%2B%2BzsxBNt36SU99xycYD5pVCDTZYGqiz4%2BYS72oIIqyC9tLxSida4ekDQ0XvZX23nhnhcTCiL78aVy3kIZ21nkM46G%2FKOjZJTMfUXiWko%2B%2BVWS4hm%2F6LBx893%2F37LsDxDdkEaj24WLBgDT39h3XVEvy%2BxrC2aK0r3VQ5UCBEMta2YxUNwjC8oGElxg6AvlRfNu6n3P9jZ4TnFri9pA8hyhaOTAhZhzrEj6o1fGqOjDOIqTs09t0GZRhOFtiIkX7kUNEHUMKjY3MsGOqUB7Nz4fFnc9brA6cHGnL9wtAbZpGWI9M9s6z%2B38PeMir8xha2Yn21%2BBglGJG0lRO9mHzAxblN5D9D6moM96%2BnS4PY2CvhJhylMUWCLERFhULQT79oM98ArLuAfF3755LGSM6BIu6oV%2FjW5vobwkIen8EyNhcW%2BL8En5Br33tT%2BRQbCRxpDZ%2FXttbJfqxPYU6%2FNdUBxtovDoAxxlhY5xZbsg9%2BqpHYu&X-Amz-Signature=81a2314a2d9f900441615e521f7881a8e7e2ddf9df80289a553fd5ac8e8f34fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


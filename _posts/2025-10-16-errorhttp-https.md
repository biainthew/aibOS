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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCL2SSO%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALInnr9jjVNaKIGCjsjzTe2UATWyED2ZDXcN7NjwUcWAiAsDZkWL7iY3dJo1hxEO3O4NFqbv3FFBOeqYRC0dwOoFyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMlx2AStMOAvquhYcSKtwDMPsgMwRsus5GAVNBke%2FKVJQ2t%2FXwwTeaTx3K6C5Eqp0fWo9KvUbksPJzaKbYRj%2FthYPZi8aVKpBSoWV8R7zXqxN6Ioe2EP%2BT3TF85dznvlB6wMWd75SauLm%2BwI0KWUq6eCTt%2BqTJIzHPf4SniNrPs1aCn%2FDmz5QvJpnpx5kikHt5nvuHxD7k5Npp18h5Ir9aiq0xkncu8YaVHYj4rJK%2FNgJVuAr0eu9T9gE8xQDwci7vsm%2F55SBvM0u8HEKYiaqvX57nvt%2BZPAsjB4yiP4nLbVNtHcDAv4qNghegjrAGb6e7Ub1KCEB7kLUq7l45z8YZrgqPlx2ZRI2xIRsHh76rIQQypM3oAWARGcwsW%2FgGm0Dg9OyCgquXxgMyJCFjhvR1yrJxL8N3pjzcr1m6wU9IAmHN6Mng1xnepRRa8CPsGZDcawolmc5E%2B3Ert5ScywYHqvX2lAhetaiSIrCOHi85M%2F9JuRfU7x6lAS45ZgpGv4epilVyT8CXssU0KAqBshRArzLOynGPAYOnr5hRn2m9%2FJHDH3cUBFCldVQc2OmdMTA85OY1Y6dC3D6dV4qctB7Wic%2BNXNbf9wcrXyo8EumUNpsGDmjDEsgfo%2BA5ZMzDba6an6RTnP%2F5RMaIuDQwvdn2ygY6pgGHPAPiQz%2Fjt%2BuKX9U%2F9ZfpPK1tQTr8DhLZ0P%2BOuluo3qvbeL7JnUoI25E6%2F3HTfZTbBATGJPc6S7gxJJLi7PiSbYdLOG5ZKPLyZC5%2Fn4MUhQOfjLTZO0RuIxpAitWebHcZH9PYPafmLi%2BMNuYlNfZDk21%2BBmBrQXXVDja8mZQ2XSHKOSrNdRlPv0ErZnjDTkkaXT4EFfDIMffRPERfY5AadxBlVktE&X-Amz-Signature=2f6126e71846ffdec8124e838fb5b0b9ec226320cb7cbbf96db43fc041d980db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XCEJOB%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD7%2By74Yfg8EL69h4j5h98fTFfS91a%2Fkx9Mdpk83HI9ngIhAMUt3QpbyunM63KIoHlvBvVpIPtAkwXrtmys4wBcnT2bKv8DCBkQABoMNjM3NDIzMTgzODA1IgzyJ29tBWbWBEgn6YUq3APGrOMzWyv691j%2BG45MlhHnxhCCROvrtvCRipuiu%2BwMAf5G9A%2FWqjyV%2BrjiTiSS%2FIsPtOLZOpcF779gSBf3EAlvQowcbv2mIbxPptbre%2F0gNoWC7mjO5Yhu8ikvPOYgS%2FAR5tg4gRqYMGCcmSsq3V7LnllqcFAwo1PI%2FGRXdruV%2FMYqYhVYAJe0V7LVuXWLQfUtlEMv%2Bl8CQNrm%2FlRjpo5kK9N5LHy1cfEAKJiHtRQMVnz3pPppOqRqg%2FIOQKGP7apSIbEJ9x%2FsmJh2rHisipe7CV7JbEHQbMxX56p8I2Us5CbH%2BmHZzPeROA2ISGEjGKlE5TS3ShVaOaAVKL4Zwp8bIfjII%2FXaQr07pReP43ZaB0DQ3YKtB5cPpgKvTWhcnDbMdw6lRdLa%2BlTSezDJAxY%2F%2FhEQqL2Nu8Xe5zNgH4PDUsxks1zYjfik9m4%2BBQK5zTrzbFvzfnZndhHDlCg8JdntH3J2%2BPyaMc88N5SWTIA7s3yORHfO8E%2BOi7RqFxd03dAzLwtSncB8Gvy9ol%2FIujpiPbcCaCmWTE0Z5WWxysccY5i9G4tsGI9BU6syEAFDFZUm30deSh5LrykziUuVlZJK7Qs2Z8G0g2ZZoHhEoZ61XNT%2F0OPEVeJYL%2B3wSTCk46zKBjqkASGKddUusIa11Cj7VkAqR8OUMZpDs%2FW7IAtlwQZ52e6Dy35B1fMI2PAVn8BpDafGIPpNjTrRHPdW52un8Nl8qZxx95BZD7VcBPUT3OiTqzjC91MFzHpVKn2z%2FRtqgmSbGNaCpnEbVW%2FsPn4W0UJSZdbWoeJp3uKodzXOJ9%2BrlA%2BX08xYFRomcaMMDXr3ipkp3DYRVhsrihSkqd3qqsvaM1D%2F7rno&X-Amz-Signature=a721f4a85298f71fb77b5391fe2d3cd32616c27286a6b33ed3221c3a8289dc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


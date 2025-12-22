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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUWC3AG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCID%2BjrhBw5LtuPnf0C6F1466GxE6k861dduWMR0O0RJ2DAiAKmu%2F9ot1Qtr2W1hUJSLsGS%2BOnqCxtqF3B4nCJ78oT6yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmuhLqYpVo2Zh8QYBKtwDdGLqWCoijIYJVG1SKhrNfC39RbExYZwgin2fcMX8O8%2Bim3eNFOEzgksb%2FfvhIOYXjYYtZZxyPb4%2BEpFPpnD%2FqrlIADNxMcuF5cZlhrY18ldpzuV0Z5SIml%2F%2FJgfzS%2FQEE9Ndz4IWhlIVZ9SsQDfn0KDq%2F1Zy8VHzBsWaoVdQj1g%2BtDRA7ez7Ae%2BpLh%2BJiuUrBq2x9xigtT%2BHJd5Nnl3IsVX3JI8BEFrW2%2BX2%2FxLeSE%2FHV9vx8p9vC9Opv1tKNJczp5rCRDsQwaM%2FmvRTUHEpajkzHafWxeUmHVk5H5j41mniFho2K9XM7qWFJlZ9qPZ4o1mx1VLL49E71R5v5tsGBD8yniDBSIfDk%2BOTRWb4kU2t6llJJBnN98VP60UgqRyIUvPU9QEv0AP%2FcHXzjoZWVE6aO55UWsn0ENhdAKIvWgUsrgqzuoQJDB1lqVruSaG0B7DdM86CTPFbrc2JpycjBOROkPN9l%2BzIPW7J8s9nOuFEnepWppPjCeKAwCVl56uK2h3WuZ04k5qGvXP1PuN4%2F83yWbTTUPgXokbpRWZh1Pepo4z0ExMoFdyOnJDP0gE2Xa9TNp8gl%2FwEsifkbxFURmQ7sBlc%2F9cjHNKrPgqp9bRMMrIgBsbcc08UErow9JWkygY6pgHrenoRlFJKRyqEGJNT5QFhoJvtSIXCxh8Hk%2BjTcKaXOmlOjGAguo74ESCHkxKH55Y31TRYgVu6EzG2mfOef%2BIEfw%2FpioWqlIzUDPpJTF%2FpIfHPHZP3LRVUoBXXOKPoXK%2Bu%2F7f9KgPfrpEhJVcDUbLFotGEgOWcdChcvxgSYRdnRGllr0inRNc%2BegWc17M5MPX1xGUl43gO1rAEJc5bO7dk95a3zaxk&X-Amz-Signature=60a957470032517110d6c248d01ea7ec4d7539c41097485529f256c1c08fd1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


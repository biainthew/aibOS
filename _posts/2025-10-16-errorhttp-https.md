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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PTNO5R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCMMX0QC8KthmGH7iEmjOKPmtbMosfrAmARUooW6GnXTwIhAPC8zlgKKQwwwjfbViMHXH38QmOZGeUNo9fm7%2BCLZLFgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOkarNkqQb5QKItIq3AMCVPUg9LiLoig1lJoM%2FYB3%2FFzAXD7JWpaYli6GaGmiVWeEjON%2FF3GDX3HEYV1uNdRvgqEpHoQZlEyd3UgqAuLtIYdG%2BOfqUcCbuwM%2FKwUwDFuipQx4BK7DrixY2cL7RHZLEG6JNSlMjAbkE3nL0MA84ymhwR7BzaTgBsm78rJwunPphfYXYVjkXysm0yJP7YyCvFy4Bbgg71Uv2qwc8UCGtWnuiqOvVwSmVtZ%2B63tmviuaXTVhavgKsJYmZZEzm6EGYvGm7LTo27qxefgomAOupylSj7jmT7w%2B0h94dhQ7RMA9waNA2uzBhwYN0vfxThqn9sFG2yAnolJ3X2mSoPFE%2F67XNLquW8ybiVDsLOJtRBu5KglCk129QVlFz%2BszWkRqL2oXgHhtAygXl%2FoB3kNKgMV1bNU5I4%2FtnN6mdnA74u6DeJfpu%2FJW7g%2BrBLa5pyLZYgzCF6HpUacYL7vqaxs0UdC%2FBVYmqwRQYe9z0Crx0bQNGo9XyEHeoYW4x%2BjcoVAkPxYasCxT%2BpyZB3jGrx%2BtZS%2FPofhrbziCDbl9Dfb6f20rxYx2MABoK8%2FTraXO78Xj8SHQOkd7j373AkstsUJ9MSnRhD3BrVbqGv0M4FWellfOvzQfxBb2T7Go8jDm%2BKPKBjqkAX9vKvDcXJw6gUZbJ0tYBsZ2DSjLKzEhhfFRDZSocrcMGIVcbQOHnXmR19n5c%2Fghf2m8lX9id3S133iC8%2FCDH2Mi5%2FF29F70flcInlBJ5%2BKvDw4tDvcvkRggFImQ5KM1v9bMeJAQNcPhjVNdwxs85d3Nij0%2BiJ%2FdiZ54AnEV7MFty3cXnK%2FZgU46CQHtTdVZYOH%2FiO3cm78B40H9nwGAFzHpwdW8&X-Amz-Signature=afc1cdfef28918aba4c4b5ce19cdb90dbdbb2f23568f1bcf2f86c6613a0a77f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


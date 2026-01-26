---
layout: post
title: "[Error]Http Https"
date: 2023-02-20
categories: [general]
tags: [Work]
excerpt_separator: ""
---



[: 참고 문서](https://velog.io/@shin6949/HTTPS%EC%97%90%EC%84%9C-HTTP-%EC%9A%94%EC%B2%AD-%EB%B8%94%EB%9D%BD-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)


🦁 axios 로 api 받아와서 깃에 배포하려는데 http 라고 오류 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXUQRCZ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHViR8uL7lxXWXC2mHazHf2F3dQRJKYFtodqE5ynWTy3AiAoNDbh%2FuGPxR%2F%2BZuTm7qqCIuUMJVWtTcL1BeIkPOYRgyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMvPy9MdBKFt3zeec2KtwDeQATzsC3P%2BpV1plE0Lwfs7j4li2bzRXQp%2F6lP0WFj2ol0JXeieODQvV8pry83ownytr14BWPKy1dri6wv0zuQ8ic5eNMp3kQVMiQLJAQXfMkSUdzQEwLJN%2FTI%2FE80azT1gcw6LYJexYuP8t5IkXIvY0Dfyzv4bFV7EUEojcbj2hrpGzxNtEfPSqlonoAxXT2pmqjnqRoaDKgSfW76EvDS37T69IGU8XkIRAiUas74Kc6JgRlhcyedM1AqCseIeZpOELqwUmit8N%2BQAsiuRtVJ03dv9%2BzKu11Jopa6J7cImAHPfyKCJbfoDpwEeVVFiOk1SQ44mRCNLOMo6Kzw2U5%2FhPplkGaAINJyTdn8Q5MazFub66Vf%2Bf6hWCTlF9rWDmA6C7QZhIOuxX3EyLP4aXa%2FH%2F9jkOhnLjmABkWMsHuC5PRp3V1O2w8k%2FSEDpycCI4lCme2XpWTkqQZwvh0MzTZKgnwhUgudaZrfrhAOQkN8KoSluyVtGwPLovfMwdoYH%2BGpM%2BmXE3d7dy6Nk8ZsViLUvDR%2BRDlGM7d7JkhJebAjC%2FgxH%2BZxm3VkQ8eleANhYwijk8Zu%2BXGpCBzWZGhJV4b8of8MXOlZuSFoLQHY%2Bli4Ckx40rHB%2BBTmr5RV3gwsvvcywY6pgEXTVGODlAWKHxHmSuDaN9N652S%2Bp7f3fj4W6VcrVNaV14c590yp0NPZUZR9%2FEJcruUASoHXzZ0%2B4xeU2QSAM4DKlg7KCVvUmUxzlnTuSuK79SuvIHu%2FkXOWLi025x%2BZf4GeGU6vxz4RB0NR6smgKb5kPT3o9FrHcl9pFYw7LoBqa5m6LI08JFBeV02MJ072L%2B9h4Z2vR%2Bz3r45KSO4d5selBvhnsMM&X-Amz-Signature=e6b39775a241266decf3d103a03bac0040c2f1fda1e7ec007628448dc0f18dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


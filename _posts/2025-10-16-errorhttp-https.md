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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJJ77M4%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDytAzIhxMGeRgVDYf0KIOGDDkVITE8LwBXrNB8nS5LdAIhAJYK6bDmKd%2FMUgr%2B%2FfUwxoh4qPcALebOeiUmnCe124KCKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3nQQrd6bcqj1fflIq3AMkdSITyefTBkgV2Am%2FwRwu2nYS0yH5WH6gLpaigpfSYy3ZY%2FDqM%2FgW8gCo%2Fdt4WzhuAj1wDuBdpJhWEYDHGhqIuBPAOakHpeLhG%2B09%2BdGasqnfPJsLQcnnkgkpXLr0EkOkrlXmcYS39eyf5lqN26TO4NzjHACukdAmFX16VvZ8Icn%2FIjcFTK2gZRAhjEbWMigXL89yit4IOilsCmVWghQPHtJhds0icVh26fbIVs%2BGrJ0PozUMB%2F5nUU0GN60H7GPiAhfzLF64cwVqLyr%2Bt91SJ2fOIBNGrsFsZGtAuYAjk%2BK2001THJvJ47i9VenQv0c%2BCUo87x6D8A3MkpqvZAlXatkQKe0bkhnkjMlJSaV5aC%2FEnCbyzUw5Zv1rL9Wq1Wjhh29gtHJaNYh%2B53loYa9NEVsXdyKab%2B2OrObJ7jizv8u7Xe%2BeZebj%2FCX9ZrelDDTa8TyYsyVcAKiFkm71IxBydHwHaeWeJppaWMUaS8fShlS3WzX7fk0yqdF9APe5ME3UOV1JiwenAbImQu3MTTdlizy4lG1eTP3For%2FjBF5Q8%2B5meCnX4nkCwtwAgheJ0sgL%2FNE9xAHk2HF8YVg%2FzrdZtV9QBMW306u2ru7m5YSBuU9mQFPnz%2F9LAud3ezCW4bXLBjqkATB65%2F4Eme24xmE68ZOyzbfU2yqeNtSDqnzUL49KT7QVG%2FwAlMm%2BT5VCl6SjORFpUuS4npCWZhSwUeY5nzRdKlFZ09Syd0qVRlO5VcaxVel%2BY7dq98uOI3l%2Fg8lnDyzilI9yF%2BtDvzac%2B%2BFv4PKXIp75oRPf19Efn866X%2FK0lb%2FBQl7xXG%2F2WQszYrtaKEvhy%2F6eBcU%2BmI2V682ZemuUOmnF0x8D&X-Amz-Signature=7464e817d89e3a8be2879611974d3dcdf084dfe5b7fe508536f5f6c82855822e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


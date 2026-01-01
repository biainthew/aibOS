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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAONXDHK%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHpUCb07mnWqamv8vIspZtxGTuwVHAiGl%2Fzby7afLdCpAiEAosgoHBZ7n7jLmJ6m3rj%2B%2FxjKiXjQLR6GOsdHBPzEOW0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSrKSLds6QY01H5DircA%2BeCFNoiTzvX%2Fbv4RWkzpG4vK2dAAcDq4fm8YfkiPscZmscD%2BPNwhbnKvEwSxigoRpP%2B7oN0R739VivGXUhLdsTtDlo6aI4ABamtbKlbc0%2FlyQSlvLQNmrVO6FoBVzhEJK8OOP29t%2BzpI%2BOxgOdf1KGVMkpisOOyUumJC6yw%2B0WTwJBrJfbCRqfGD5yzuXfJmHYkOExFFsF%2BwgCP3pH4cMRsugKXwy%2FwztX9eOXPDR2HLcHosZ10S28sskKsBMMEKPXWUx1%2F6KsJ7qchi%2BPMG70nbJqAxTGh4ha8cUIZqvNiDRP7%2BdGI8nJJ%2FBg4xQahfPnbiALTOk7%2BPDS6u%2FmsL5K%2B145Ajm7WgGQbmOJ3TcLVHx6yO3IZ%2BSrnufvywzC39U6Vq7ED2a%2BBTbRq%2F9%2FgOv%2Bd6llMIG0TLhQRP7gfPIMqlfAzdmSLBehYY%2F1DE%2BDF32qwWpRinwfTJtDmkE4V0evCkiqAYvvfwM6760%2FVDepxxu30zGqy5h3GcHFlV0GX4L2qTgyy%2FTLr1Yw5RmFF4LdLIkTsgeW9QmF3H8tEht5WfTH3xioT%2FbbjyvljCpKCjchWoIsH%2Bx8vgBkd7uoZWaLLbrMiYivVwnE%2F7lDbf3B%2Fm7rU2%2BhkkxansAp3MJSB1soGOqUBrqSf%2Fqujhg51srqWUM3kf6CPwVGMOu7miskh%2BU95X%2B%2BYHOQTXrxA6MECftq%2BUrd6lc4quq0OmDvAy3lPrG6IyYUC0sefaUAssfnBBoUC%2FCr0G5NVdF2GAK%2FJDwLykKPQNp3C773LrlbObaZSc3pCmzJumrI1frau6Moy80OkjKPI6h8t3TtlJqjWJoJ%2FWl%2BaaM%2FOKlHcX%2B0YG%2Fn1ZvyPFdB2a%2FrG&X-Amz-Signature=2e2c2fed4d31ef5ca1f9a83b0328ed1ee0b3b4761d4577c029b237d71999129a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


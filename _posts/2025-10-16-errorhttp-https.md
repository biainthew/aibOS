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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGNBGS5%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWTt2hgsTREGI3ALsmKmlphVyeVq1Re2ypTb81bJMN9AIhALYo08CeynCtMtg4NP7aZxhJvL3lQw9sdeyhvCtpkRS%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F3Z7tvai%2BTR7fNhAq3AMo4PwWkzc13epDIgUUfGo9GQGbnbH9Q4SKSFU6WgNDMppetaUM%2Fc6K7jC0VJDM64foh3XQZgxRijHR1CDcDgubRkQUNHvedmg%2BiTK5F0JG1K2TSBwi%2F52w4ItSkBUm70jdSr9uZ%2BSi7iCJ%2BSOGPZ7scHR%2BxTyuSKAXzoOtdZi%2FyH1i%2B3Z59D1MaQ1FDQSjqMRGVeE7RvHaZmp%2BH3vE0Omjd01c7neoURiE2M%2BssnqUI4DE6HZ23L0b4yFpDIkxrIl9XbdtAWYciWQrIOh%2F7uZKFGJxjSa8QGJTCbKovqzL0fffCj%2FbJ%2Fb5wlY0woPjdmh2QEWjfwO0kdLs%2BJhCUkVW5fdy6iEXp%2BT88yZTZOWF3tWq1DIvmdK9E4l%2BTP5tT%2FuxZ269xAe%2FmXeq00lsoufk6IsGGcIghGFJV27fIx9F44GrLEkkVUle1UhkpPpXJn3hNPN0b5bbc%2Fz%2BnUpUj5W2Pzc0XZYB0uKy%2BCLDsi%2BHJPPWjfHaX06dfUCcHLj1AmfFaEoI1eig0EGO%2FZSRvZvqRzAMnojSc13pxQ482i8idxWwftfgnHlLh0BQx2Zn0Ye2%2FQAbI1t5Wqa3jsK7rqh%2BWL1F2KWUvk0mE5nMbHHFU6pTk88yKv9cAOUweTChw4bLBjqkAe4mGmU0RfWtTIJfSId9Fa%2Fyw%2BzaMEt8Ea4oI0CvSLJl1PdQt9VKEbsrJ81H4mbC%2BgZOeaiZ3OqPe5DLOCK%2BSe0GB7NSnumV5P1W0HlURgXZSsA3o7QoOqtNweIkX9Q2mYCz2oyupedyq6LhiLdr55%2B6S%2FC2eJikRWwo2028VjOkvOFkDsBv7zsaFhor5hR1oyX%2BSGEBGp7MLjDsnXyex3fLnyaP&X-Amz-Signature=f3193ee134b372629ef74d10ff2fd6a90dc9e56e5741285b17887608b68f62d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


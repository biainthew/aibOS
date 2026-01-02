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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677UDKGTQ%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDjk5nFmCKXo0O128nRcyswiI7GKeJFvLXmce%2FjnXQmDwIhAL4rqwF4CqwM55ukCuDtU7i189IUL2nubq1TuMT5se5cKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjbaMkrgl8vRr236oq3APz29hH05rF2Pj3IMp4JK65BslP3qf9AHM%2BfudaKkbPoKMUmjKhwkMmuGT0qvFRxLlmGed1t1HnnSFgLcFb3EXiCffjnL0yrLRRl3wadmJkhR01Y1uAxN%2BZNuGDEnVQvGeEQLcHLb1noJ9cdqp%2B14TAujlysvGSDBfAyjQ84LyKxrNCIY0Ve%2F7AuSoDlquc0Mz%2FGoEeDZK8y4ksMYrBaqvkUIQUYd7M0kpZbBn7CQOfVkdupiGhzlR39YM4l0XSXNbgXvcnvpCbGMSds6Y78BHE6zRxiVGKzTV1U9q25Bg7Q%2BTvMJ7HzmXWRk3FFHwNNp%2BG8YdGYkF2KsbXsA2L3HZ8HWh8BCseXPIGr7BW%2FOraN16S9IjTel25%2F%2FeW%2FENgOiuiPqbe3sVQiRKi7Titq5xx0z2xWiLwk%2F8rduPu7aJu%2B4Cgsb0hF4nlj4zH4jIkpV4YoRiZCWNkm791c78rpXo9acKWw0jNgplfqXvHmyQLd%2BG%2F0G4%2BbseyhlIn3Eojshm5aEpWG50wBIIfUq7rMywMZ4wex3FNE4BDxRlK2Nny%2B2SnEjMCRib0HlomutNFXbdzh2MhUUbAK3ioYpL6ToBzOPkprgc3DnjQd6u8hTxV%2BDzBiE3tdJs8Y0ZBrDCxn9vKBjqkAch2jg5xLDSWc%2FGVyjVldrbmTgb1AYl5uCfZuUKN9UGBw1uFvJDnLfTVUB9OfcAhE1fmE7CtlGr71eHiJf2r4j2eZpA1li64dCGbkFhdshg64AVHJq44yeQwiNB4jQltnaNsznAtMXPiyYYA8epUeJI%2B%2BcoTV5enm81aqHzbJ8R2sZ1FIYSCkwbcP9Lw3o9xGW7Vy3VJAF%2FD64QqB0HZYYsBdpwc&X-Amz-Signature=b616840f2f05b2ef6235c2ff07bc03fe03f035977578b0138d4d1baf8bd9fd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


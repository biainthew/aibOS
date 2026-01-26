---
layout: post
title: "[Error]address already in use :::{port}"
date: 2023-02-10
categories: [general]
tags: [React]
excerpt_separator: ""
---



[: 참고 문서](https://velog.io/@woojin/address-already-in-use-port-%ED%8F%AC%ED%8A%B8-%EC%8B%A4%ED%96%89-%EC%A4%91-%EC%97%90%EB%9F%AC%EA%B0%80-%EC%83%9D%EA%B8%B8-%EB%95%8C)


🦁 build 하려는데 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0648250b-7318-44c6-ac4d-e0f83117247a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJLIMZO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIF9tD7x5J%2Bgcxu7APobKBjWgp9b%2BC5KA%2BtIolbdmVZWQAiAYAvKaqt5iGfRSRUi5CEG0vY7O1WbgoiedDE1PDgVjxCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhf9kiHPOJj01du6MKtwD%2FeQ5SQ30Wd2h4UXZWImqnLhfe7XYx9ilN612XefvdJCRqVUh6rVE6nqoTW1ggHdngOBq1wnvv4sjF6S4sVetXMuFsiOgd71mP5oOyuz5pU9NMkfr%2B2BxYfFAmrbQoLVsysCA2cUGY58eVHmrRieXU2I1TSZFdZalmJ5CnrG%2FdQhHmf7%2B7F2qqIhut1mItIXOdYf0uRG%2Be8eG0fwMzBUvkUjbcGjQxKQxljjQYz3ibdvKvP64X7QK78%2F5vVflz8eoBx2EliKaEfJGw6UOibknQYK%2BVXbLOVuFPsvnNBTsA61E%2BCRHs9YvGQU%2BL8i%2F%2BWU9WuYt%2BOC04hXBNuS8LS%2BmMPJKDPGOHrYJKS4wrvInM%2FBQEAa2QV%2BEO8U%2BhYhnj7wph9Qr2yd3no2FlEhzVaYEpu2vte1fcPZ0qVBgeD8pvSOQldE6NY5Ywjn%2Fze9C95qtklbsDVTRkASonmLhw1%2BEK6k1S3RRumUvJERD4J4ep38NlhWlRnTan%2BJ%2F%2F%2Bohqc%2BAV%2Fy9%2BVJwAfS2c4uQj%2B4%2FMSQhsLvinri1s8%2BjbFHY7vQCyxBXxw588Mi0fGPOi5lMZ0KKJBCCG4w7s%2FIH8rhEdXCcfgGkDBdYNRFhNQeFfcZlz8C1zLk2tyihvPUwkpvdywY6pgFn0l9C4nxPVanBvM%2Fb%2F8qb7kmm2Q2m6ehaZoeuGssHn5jPLJzHxczy9tYCOvHUCWKItOcVVJZe5oTMCjL5VBQYUKgveCv%2BlkbTIMW8Idf7zqpLXFr5swOtcHy4qMB%2FWAP%2BwrL0VeuKlQg0b66N5nfbQXTaVCiQKD5LQWVgPYDdIl5CGwnfODoB2fHInedznTWAA0Rh1GucZTCeAoqAueB3Fbw03UFI&X-Amz-Signature=3cdd2ed3e35ed2226538eb43cc5c01acfdc117ec13c4fbdfd03e61f8d485d09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


포트를 받아와서 실행하다가 뭐가 제대로 종료가 안 되면 나타나는 에러라고 한


👇🏻 해결 방법


```javascript
sudo lsof -i :5000
//이거 치면 나오는 화면에서 PID 밑에 있는 번호를
sudo kill -9 
601

//여기에 넣어주면 됨
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/37589b87-482d-4f15-9513-eec6950854b8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJLIMZO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIF9tD7x5J%2Bgcxu7APobKBjWgp9b%2BC5KA%2BtIolbdmVZWQAiAYAvKaqt5iGfRSRUi5CEG0vY7O1WbgoiedDE1PDgVjxCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhf9kiHPOJj01du6MKtwD%2FeQ5SQ30Wd2h4UXZWImqnLhfe7XYx9ilN612XefvdJCRqVUh6rVE6nqoTW1ggHdngOBq1wnvv4sjF6S4sVetXMuFsiOgd71mP5oOyuz5pU9NMkfr%2B2BxYfFAmrbQoLVsysCA2cUGY58eVHmrRieXU2I1TSZFdZalmJ5CnrG%2FdQhHmf7%2B7F2qqIhut1mItIXOdYf0uRG%2Be8eG0fwMzBUvkUjbcGjQxKQxljjQYz3ibdvKvP64X7QK78%2F5vVflz8eoBx2EliKaEfJGw6UOibknQYK%2BVXbLOVuFPsvnNBTsA61E%2BCRHs9YvGQU%2BL8i%2F%2BWU9WuYt%2BOC04hXBNuS8LS%2BmMPJKDPGOHrYJKS4wrvInM%2FBQEAa2QV%2BEO8U%2BhYhnj7wph9Qr2yd3no2FlEhzVaYEpu2vte1fcPZ0qVBgeD8pvSOQldE6NY5Ywjn%2Fze9C95qtklbsDVTRkASonmLhw1%2BEK6k1S3RRumUvJERD4J4ep38NlhWlRnTan%2BJ%2F%2F%2Bohqc%2BAV%2Fy9%2BVJwAfS2c4uQj%2B4%2FMSQhsLvinri1s8%2BjbFHY7vQCyxBXxw588Mi0fGPOi5lMZ0KKJBCCG4w7s%2FIH8rhEdXCcfgGkDBdYNRFhNQeFfcZlz8C1zLk2tyihvPUwkpvdywY6pgFn0l9C4nxPVanBvM%2Fb%2F8qb7kmm2Q2m6ehaZoeuGssHn5jPLJzHxczy9tYCOvHUCWKItOcVVJZe5oTMCjL5VBQYUKgveCv%2BlkbTIMW8Idf7zqpLXFr5swOtcHy4qMB%2FWAP%2BwrL0VeuKlQg0b66N5nfbQXTaVCiQKD5LQWVgPYDdIl5CGwnfODoB2fHInedznTWAA0Rh1GucZTCeAoqAueB3Fbw03UFI&X-Amz-Signature=a181841d752a2f4fc593078c8d67e198a1e5fd229b44a06520e7c36ce24aa430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


이렇게 포트 죽이고 끝 !


인 줄 알았는데 안죽고 계속 살아남 ,, 다른 방법을 찾아보겠다 ,,


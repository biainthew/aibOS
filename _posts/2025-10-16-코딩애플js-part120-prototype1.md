---
layout: post
title: "코딩애플JS Part1-20 prototype1"
date: 2023-07-07
categories: [general]
tags: [Javascript/Jquery]
---


### prototype 특징들


### 1. prototype 은 constructor 함수에만 몰래 생성됨


일반 object 나 array 에는 prototype 이 없음


일반 object 를 상속하고 싶다면 constructor 함수를 만들거나 Object.class() 를 쓰거나 class 를 쓰면 됨


### 2. 내 부모님 유전자를 찾고 싶다면 __**proto**__ 를 출력하면 됨


### 3. __**proto**__ 를 직접 등록하면 object 끼리 상속기능을 구현 가능


```javascript
let 부모 = { name : 'Kim' };
let 자식 = {};

자식.__proto__ = 부모;
console.log(자식.name); // Kim
```


### 4. 사실 console 창에 prototype 정보들이 항상 출력됨


__proto__ 를 계속 까보면 결국 Object 가 나옴


object 자료형, array 자료형, 함수 자료형 모두 다


![codingapple.com_course-status__%284%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f5a0a2b5-3c55-4a9f-9a37-88508f8e45c6/codingapple.com_course-status__%284%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P5OUEP%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEvbh3GWBJgenY4r5vhJ84%2Fa4%2BifzsK77IAmeijLkWd5AiEA%2FGFlVqO8FlqZIi9pKxIHsFk29w1UFJhXHIkPP7xDlQYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNRLvO3r5QWKCgLFBSrcA4QHXxYjS7r7R1XwDozGU0KkQfRHfu1aO0TWyppVV3LNIOsLtyax5HPhd72hbMWGxJADp0b%2BmADfou87HumgGfO5fsSmc6lCSJGFdiJSCwPBQrr2eCpuXmL%2F52rE6hBwEZOsb1RcGpeXqVX7PygJzVbvV%2Fsf7h0bFJCkky4i%2FBf8rDJrcwqIUSgKTfmldVEM1gXnXaEroD70LZYxC8DsyRjImlV9QEqVvo5fgoGKGpWfTemqjb1zFUSMzw1a2Ei7X%2FlJmQ6RSGOHjfoK%2BOyoUxnd1KENF6pll7u0rWz3bpmF0ghcoVnKEzqd53QAXML%2FBeZx7Oow1J8XHjZpIqrcvF828kKJ8tmHWioRH6vHuaH1SArIK%2FmyB782BApVOGL2GQUw%2Bm9rf0c6fmmLAu%2Bfy9fonQ7JHQ9QmDmFuGSh852adGd2HpiSlQHAfq0KMQUYrAYiglrbxGeEtP%2BjVqfZCn1jZazr83mB7PPzjb3fYIpHixpZd2cljw2ac%2BKwp1Kb2qo5GrXpzOD%2BthChDr%2FGPF19ETdW69%2BaR3JsZ16bC%2FLiA5H7rOKINj6ucaDNDQbXa82s6CokW5aHYkkU98oGuEhnJP7Y6ytqR6m1S4QjXiJkhPYXVZ9NXWTVSZuBMIXZ3MsGOqUBPr5FrabPKeocg6dHewdNGGRSR11wdu90Id%2Bs2p2rqHG4cH1od%2Btt8GjWC1IYBsZ%2FQAZk0tDGbDsYcy7vF6EE1XaBlOJaONDtLN8FrIk8B69n1F5FfXyKjahxyvRouKLLGfeXAErCewEzgJ%2FgCzev7yE0KQs4PMwKu8BuLIOI32%2FhU2ti%2F3G9AvKhtYf2MS7AJk%2FZe%2BsoQ60567N2rd9rHVjsZl62&X-Amz-Signature=a044db8c7f4807c542ab5cf19adcdc66c2a8b54657b49db076cace072d1005dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


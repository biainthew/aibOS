---
layout: post
title: "코딩애플JS Part1-20 prototype1"
date: 2023-07-07
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
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


![codingapple.com_course-status__%284%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f5a0a2b5-3c55-4a9f-9a37-88508f8e45c6/codingapple.com_course-status__%284%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJ2ZPNL%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKqdMRny83AwV0CUlbmJNMZ6mG%2BLF5SIFYU0G4cFCe%2FAIgGxXUi%2FcjTWSNha%2F6Ex18UOACPblbL6AHhizR6GYlCrcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDr6x17pyYwFbA7TZircA2gFOSHJlZeoOT%2BkzB3TJx%2BLNHHpKzW44jz2Zx5gcrqFFi8bpZ%2FimBODCsP5l%2F3uDbz50J54MR8rvet2hEaFykMfMTpL4QDhaQzKYGlxAwp4IS5gMbJatRikIqUyhRNpvVtO%2FP8ygSvxzRQmYjNHjzi02whDe73D7%2FG7rMll8CFfW85a5EvUOOeR7YQPszN8tmx5WA9uIp3fJ5y7rMOussX4QsGExtkwSWyGP6tShUkFP9d7IaK%2Fr9FYSb63i4ybmv4ac0brq7X5Duoz1Lh6Le%2BaXRNZ67ZIYHvwqHXXyVlKDgcseMvcDbNk03wpwoeau8U8rdr1h663a2oA5YvH5P7Wwf0gmB%2Bo5qZLHhNPianPxp45Ew5QY0vM7%2FK9j%2FWlHz3u0WdeWKJ17IJ661fYSsCGR3cysNKMbg0ovXDESoD6P1Mx6t28STfLpnVVJccRnB%2FIj7ccfGw1ZIwkHaPpFBKkVNc7%2ByMj%2BwPoReoUDgRLdKO2rG2KQT8ZDb2xajulbMtKcUS1Hjf9mfAbqUw4tRp067FfTXODYs6BCfjoIdcZYcor4opnovPzyMBhJGkLACJPjowWDUKRhioYopajYO%2B0kqAnTl2DT0Ooroi6pW6NJdlPJ0Ge3XO0TsdsMKf73MsGOqUB3QkJTIijopG%2B9JVMIj3LQcB0hxCanaOPdhBlHxhXN2jLDY57Fsi4HqfPpjU3%2Bkh3u%2Bh0G7MPZaAlT5vy0QZ7a%2BReuJXqWuotQ1xyPXS9n7b0uCaTJ6Qc3DHl90bJX24hXtlEHleOlowlF9I9GX0Ubsc%2FcEAdAX0TTcviVWngg16w9U1ardt0AYl%2BbxoQCSm166%2BRdOpYU3hD9G3Wz5mEWbkcNIgi&X-Amz-Signature=2f7bcd4a856edae28ab0e699dde3efef6604f01a031565f9eefaaa8258428693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


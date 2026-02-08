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


{% raw %}
```javascript
let 부모 = { name : 'Kim' };
let 자식 = {};

자식.__proto__ = 부모;
console.log(자식.name); // Kim
```
{% endraw %}


### 4. 사실 console 창에 prototype 정보들이 항상 출력됨


__proto__ 를 계속 까보면 결국 Object 가 나옴


object 자료형, array 자료형, 함수 자료형 모두 다


![codingapple.com_course-status__%284%29.png](/aibOS/public/images/posts/28e0a7f9-19f032fada16.png)


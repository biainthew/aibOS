---
layout: post
title: "코딩애플JS Part1-17 reference data type"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



자바스크립트의 자료형 (문자, 숫자, array, object 등) 은 자료형을 크게 2개로 분류합니다

- Primitive data type : 자료 자체가 변수에 저장되는 자료들 ex) 문자, 숫자
- Reference data type : 자료가 저쪽에 있습니다 라는 **화살표(레퍼런스)** 를 변수에 저장

```javascript
const 사람 = { name : 'Kim' };
```


> 💡 **화살표가 가리키는 저기 ?**  
> 컴퓨터 메모리 상의 어떤 곳


### 1. 복사하면 이상한 일이 일어남


```javascript
var 이름1 = { name : '김' };
var 이름2 = 이름1;
이름1.name = '박';
```


### 예제


```javascript
var 이름1 = { name : '김' };

function 변경(obj){
  obj = { name : 'park' };
}

변경(이름1);
```


Q. 이름1을 집어넣어서 실행해도 바뀌지 않는 이유는 ?


A. 파라미터는 일종의 변수처럼 생성되고 사라지는 존재, let 변수


자바스크립트 입장에서 보면 변경`(let obj = 이름1);`


이것은 obj 라는 변수에 새로운 화살표를 재할당 한 것이지 실제 이름1 이라는 변수는 건드리지 않음


### 예제


```javascript
var 이름1 = { name : '김' };

function 변경(obj){
  obj.name  = 'park';
}

변경(이름1);
console.log(이름1);
```


![codingapple.com_course-status__%287%29.png](/aibOS/public/images/posts/28e0a7f9-78f8469d00fb.png)


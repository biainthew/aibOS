---
layout: post
title: "코딩애플JS Part1-37 Symbol"
date: 2023-11-16
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### Symbol 자료형 만드는 방법


```javascript
let 심볼 = Symbol('설명');
```


그냥 주석 하나 달랑 저장할 수 있는 자료형


### Symbol은 Object 자료형에 비밀스런 key 값을 부여하고 싶을 때 씁니다.


원래는 문자로만 key 값을 입력할 수 있지만 Symbol 도 입력 가능


**person[심볼명] = 넣을 자료;**


이렇게 하면 Object 자료형에 Symbol 을 이름으로 가진 자료를 저장 가능


```javascript
let person = { name : 'Kim' };
person.weight = 100;

let weight = Symbol('내 진짜 몸무게');
person[weight] = 200;

console.log(person);
```


출력해보면 심볼도 출력됨


하지만 반복문에 등장하지 않음


### 심볼을 직접 입력하려면


```javascript
let height = Symbol('내 키임');
let person = { name : 'Kim', [height] : 160 };
```


Object 자료형에 직접 입력할 때는 대괄호 안에 심볼명을 담아주면 됨


### Symbol 자료형 특징 1


간단한 설명을 저장할 수 있지만 같은 설명을 가졌다고 해서 같은 Symbol 은 아님


```javascript
let a = Symbol('설명1');
let b = Symbol('설명2');
console.log(a === b); //false
```


a 와 b 심볼은 설명은 같지만 서로 다른 아이들임


Symbol()이라고 사용할 때마다 각각 유니크한 Symbol 이 생성돼서 그런 것


### Symbol 자료형 특징2


변수처럼 같은 값을 가지면 같은 변수로 취급해주는 전역 심볼 만들 수 있음


```javascript
let a = Symbol.for('설명1');
let b = Symbol.for('설명1');
console.log(a === b); //true
```


Symbol.for()로 새로운 Symbol을 만들 때 설명이 같으면 이미 그 설명을 가지고 있는 Symbol 을 그 자리에 집어넣음 그래서 같은 Symbol 이 됨


### Symbol 자료형 특징3


Array, Object 자료형을 만들 때 몰래 붙어있는 기본 Symbol 도 있음
예를 들어 모든 array 자료형은 [Symbol.iterator] 라는 이름을 가진 심볼이 안에 있음


```javascript
let array = [2,3,4,5];
console.log(array[Symbol.iterator]);
```


Q. 이걸 몰랐던 이유 ?


심볼은 몰래 자료를 저장할 때 쓰는 자료형이라 반복문을 써도 전혀 출력되지 않음


> 💡 참고로 Symbol.iterator 는 for of 를 쓸 수 있게 도와주는 Symbol 임  
> 그래서 ES6 환경에서는 저런 식으로 뭔가 내장 기능을 만들어내는구나 라고만 이해하면 됨


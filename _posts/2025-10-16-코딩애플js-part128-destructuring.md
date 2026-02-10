---
layout: post
title: "코딩애플JS Part1-28 destructuring"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### Array 안에 있는 데이터를 변수에 담는 방법


{% raw %}
```javascript
let array = [2,3,4];
let a = array[0];
let b = array[1];
let c = array[2];
```
{% endraw %}


{% raw %}
```javascript
let [a,b,c] = [2,3,4];
```
{% endraw %}


### 기본값


{% raw %}
```javascript
let [a,b,c] = [2,3];
console.log(c); //undefined

let [a,b,c = 5] = [2,3];
console.log(c); //5
```
{% endraw %}


### Object 안에 있는 데이터를 변수에 담는 방법


{% raw %}
```javascript
let { name : a, age : b } = { name : 'Kim', age : 30 };
```
{% endraw %}


{% raw %}
```javascript
let { name, age } = { name : 'Kim', age : 30 };
```
{% endraw %}


### 변수를 object 로 집어넣고 싶은 경우


{% raw %}
```javascript
let name = 'Kim';
let age = 30;

let obj = { name : name, age : age }
```
{% endraw %}


{% raw %}
```javascript
let name = 'Kim';
let age = 30;

let obj = { name, age }
```
{% endraw %}


### 함수 파라미터 변수 만들 때


{% raw %}
```javascript
function 함수(name, age){
	console.log(name);
	console.log(age);
}

let obj = { name : 'Kim', age : 20 }
함수(obj.name, obj.age)
```
{% endraw %}


{% raw %}
```javascript
function 함수(name, age){
	console.log(name);
	console.log(age);
}

let obj = { name : 'Kim', age : 20 }
함수(obj)
```
{% endraw %}


![codingapple.com_course-status__%287%29.png](/aibOS/public/images/posts/28e0a7f9-7bd178713318.png)


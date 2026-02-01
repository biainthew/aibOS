---
layout: post
title: "코딩애플JS Part1-18 constructor"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### constructor


: object 자료 복사 기계


```javascript
function 기계 (){
	this.name = 'Kim';
	this.age = 15;
}
```


기계로부터 새로운 오브젝트 뽑아내는 방법


```javascript
let 학생1 = new 기계();
```


오브젝트에 함수 넣기


```javascript
let 학생1 = {
	sayHi(){
		console.log('안녕하세요' + this.name + ' 입니다')
	}
}
```


```javascript
let 학생1 = {
	sayHi = function(){
		console.log('안녕하세요' + this.name + ' 입니다')
	}
}
```


![codingapple.com_course-status__%288%29.png](/aibOS/public/images/posts/28e0a7f9-98164301104f.png)


---
layout: post
title: "코딩애플JS Part1-23 ES6 방식 상속기능 class"
date: 2023-07-11
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### constructor(오브젝트 뽑는 기계) 만들기


```javascript
class 부모 {
	constructor(){
		this.name = 'Kim';
	}
}

let 자식 = new 부모();
```


### 상속 가능한 함수 추가하기

1. 함수를 this.sayHi 이렇게 constructor 안에 추가하는 방법

```javascript
class 부모 {
	constructor(){
		this.name = 'Kim';
		this.sayHi = function(){
			console.log('Hi')
		}
	}
}

let 자식 = new 부모();
```

1. prototype 에 추가

```javascript
class 부모 {
	constructor(){
		this.name = 'Kim';
	}
	sayHi(){
			console.log('Hi')
	}
}

let 자식 = new 부모();
```


이렇게 하면 sayHi() 라고 썼을 때 부모의 prototype 에 있던 sayHi() 함수를 쓸 수 있음


아니면 부모.prototype.sayHi = function(){} 이렇게 해도 됨


### 참고 Object.getPrototypeOf()


이 함수 안에 오브젝트를 넣으면 부모 prototype 을 출력해줌


__proto__ 와 비슷한 역할을 함


![codingapple.com_course-status__%285%29.png](/aibOS/public/images/posts/28e0a7f9-7d417b1de32d.png)


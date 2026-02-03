---
layout: post
title: "코딩애플JS Part1-24 extends super"
date: 2023-07-11
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### class 를 상속한 class 를 만들고 싶을 때 쓰는 extends


```javascript
class 할아버지 {
	constructor(name){
		this.성 = 'Kim';
		this.이름 = name;
	}
}

class 아버지 extends 할아버지 {
	constructor(name){
		super(name);
		this.나이 = 50;
	}
}
```


### super() 는 extends 로 상속중인 부모 class 의 contructor()
할아버지 class 의 constructor()
그래야 이제 this 를 에러 없이 쓸 수 있음


### 할아버지 메소드에 함수 추가하면 자식에서도 사용 가능


```javascript
class 할아버지{
	constructor(name){
		this.성 = 'Kim';
		this.이름 = name;
	}
	sayHi(){
		console.log('안녕 나는 할아버지')
	}
}

class 아버지 extends 할아버지{
	constructor(name){
		super(name);
		this.나이 = 50;
	}
}

var a = new 아버지('만수');
```


### class 간에 함수를 상속하고 싶을 때 ?


```javascript
class 할아버지{
  constructor(name){
    this.성 = 'Kim';
    this.이름 = name;
  }
  sayHi(){
    console.log('안녕 나는 할아버지')
  }
}

class 아버지 extends 할아버지{
  constructor(name){
    super(name);
    this.나이 = 50;
  }
  sayHi2(){
    console.log('안녕 나는 아버지');
    super.sayHi();
  }
}

var a = new 아버지('만수');
```


여기서의 super 는 **부모 class 의 prototype**


### super 의 두 가지 뜻

1. constructor 안에서 쓰면 부모 class 의 constructor
2. prototype 함수 안에서 쓰면 부모 class 의 prototype

    ![codingapple.com_course-status__%286%29.png](/aibOS/public/images/posts/28e0a7f9-be899f623d0c.png)


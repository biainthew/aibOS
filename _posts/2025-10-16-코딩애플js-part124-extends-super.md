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

    ![codingapple.com_course-status__%286%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2f5e3441-587b-4084-b871-c6fae06ffc82/codingapple.com_course-status__%286%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZOPNZE%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGGuBukLbCpUPOIAhlHUXVW5SWB7rtFyf%2FQSqrfZVNONAiALaKNz4Sf2EVPl0%2FVCH9iu68AYpw%2BSjdYDS2tVnKYr%2Byr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM9nxI3hdHFFapjIyyKtwDA414sa2ICob%2BfYHjXZUD3ggJKZ%2F2fRjOeGMBDOU2rov5MPPHNgFnH9RmT%2BEa2eCOOIgwZowP0n8VUMiZlkbVla5v2WwvEnLrjqkq8kiTAx7xKANe2IkM89nTNbTxxDco%2FRzFzPxHUm0Di0%2FP22oNpUB%2BaWreBERR6oHEEiWm%2FOY%2B1oy7K5e1qLoXY9GZH0imBiMITn1MOGjriPpU4tNrVn95Ssf1ZuHJNgu9K%2BIzsaEkRcjww6axB6f4p7xb1e1iMWepEAxEmOexjG87Gh0lQKqY46NUT2VPTJnBXR3Ng1Yz%2BcrTI1RITipgIcMYbfM1XjhYhUechRP0zGsXEIja2UzJOAVDAJQRQI5126DTgiFuTGb97BXaxjZs4mHFlr1EJF6iRPmGfp0wB3lTZeY%2BvWUeJrtjhQhuWRainHL5IEqyOXgh2vT8sEVxnFwB6Q8NqHNPD4PQgwXo76BCGdTFK60bwLJ%2FcKn3dTEVyNNyxkk1wt5FMygvzwWJUw6ivfMEz7VPllHcFZYypa2fvhCxVkIeEDPoUuQszpXPTIwF9U%2BfP%2BcR5%2ByJrE72cdUaNSad6%2FcWBUzVgBJL5rQYOKEYeLyMpoUt20N4NefejuD1FJA3UppEpH0NlOfbVAswi%2FvcywY6pgGlz4jyF%2Fmtnh6BWnsoJoFMJi2YL8pKv2bY9PaAHxnl8bbQbnrjWlz6dQuEFeHNSicwpvGCLAdmA3%2FJOK0y5YIjKORmDfYSsaHu1518%2Frrw5b7EzPI6YXIPu7hUIeg9H412m7A1zKJeP6cfHEvnwFIUvn%2FdXxljm%2FCZzXIbiSCQ0HwSeHsG77AaMsXwDMyhSz4VWkG4ZwiOiE05GeT1PThaLhCWo3Ei&X-Amz-Signature=81015e4e6618babb0a07b66bcef80db28697a51ca0def5b129ff70d7d8774660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

    ![codingapple.com_course-status__%286%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2f5e3441-587b-4084-b871-c6fae06ffc82/codingapple.com_course-status__%286%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAX5MN72%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD3%2BBLvaq4jXkSNXfB4ka4bxtAb1gteITuhB7J5YNA%2FywIhALpKvaLT%2FQDcor72NeFStW3L5kALoM834%2FmT1n%2BGbHPfKv8DCDsQABoMNjM3NDIzMTgzODA1IgxAXXYtBWYoncw04vAq3AOD18ZQ8g1bGork9kTdc8H%2FaQdP2TG5KcGg18mS3c%2B%2BBYD6iHJibYaUgHhaL8chJBCxkGwiH3UglpRjNAznTcrFRoIE4GzYSiQeYBl%2Fug0c8DRJ2CuAv4%2BY5h42mkeXyiDifF7VO4tJNKIcLeN1tCiZxcSw%2FxibGw%2F5%2BXx60Rx6NQUcN02q3WE1dG8E05w%2Be%2FC9Sn2W4mri%2FiNemvPQbbOk9PJOVvgwJR5643Qj9Xp5oFNs2i30A4PtWxh%2FmK5FtIZB6JRHqtoCwsJxPeOw%2Fabzl4wGpyLdpy9J0SrAgMwfK2FE5rgPDM3Dye3g%2Fuj%2FAXZU3TEoF0pd%2BQqu42V59eAdHGjgSErZmenxDWiWCQzVlLO8%2BCfw3V4V29UAh2GS13OHHUzAVILguCIbxtH95nvJe5OPCZQ%2B15%2BFK7TblaJ57RjT5qTXVy0%2Bf8qu55slayUjc10wS04Qqy1gBVCabtwcX%2FAgRoVeklXJuhfkHL2tZbl9%2FA7bP4u4eSq%2FR67q%2F%2F4Upn0qeqLnRDavJPyyK%2BcORkhlPBP2fJnQDemSoWfI9q1e7FIVyQ%2BSXlSuIylXMkh4REJ%2F5Bim96ezO1rifnuUPN0TyKu8fYS9JP8IQt%2FaXMOUiRcoJNGqIXVtwDDJ%2B9zLBjqkAR9dMOnUDtbc7oVkdv1K4YrYNzDGXg63NTRuFYKq1MZ5uKYzyKiofsf5vFVibpKGy5YoT4zYdxgNkKY5SXhWQYc1B5Ng3y947G2XHcHgSYklMK2yyrOmPwROV1wW0HcG7mcpjtVUJUrDoNpFI5FSqg3LuLA7uUIOCzeacPsKTssbYKEMjEQxXZEUFHAx%2FB5%2BkSYW4C4%2FPOY4%2FPWfu12Z1%2FmbA%2Bp7&X-Amz-Signature=7b7c0988e25ad3f1a9f9ffdf62db30af6e56c824fb0584f04a1cd3052fe1fbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


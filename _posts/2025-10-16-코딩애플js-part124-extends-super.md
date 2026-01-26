---
layout: post
title: "코딩애플JS Part1-24 extends super"
date: 2023-07-11
categories: [general]
tags: [Javascript/Jquery]
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

    ![codingapple.com_course-status__%286%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2f5e3441-587b-4084-b871-c6fae06ffc82/codingapple.com_course-status__%286%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OS5NTQN%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDj5L1qznTNdDlsQGCfheJ%2BdUL3Ndi1tI4TwvxrzmnGhwIhANpNEY419t1uqsh2B7oM5gF0FP3uoLMwKx%2BJJP42x7UGKv8DCDoQABoMNjM3NDIzMTgzODA1IgzDXZQhWfTCeXAUoUwq3AOWl4qyGmIxfmHJkNNQ%2FTHETjr3fQa5GBh3hG4zQ8mdxZxGpumI%2FDp2BchTFBTW9WvNzI4X0jPzot9684H8PYaEJly4%2FEjvGoTBIyt4WVgOOXRvrIltypGakm3CQ7xyXLs6wn9uCvt7YU7NlazzS8yp9A%2BGt4wTZp7WmRxtvcAdVWBOgaEhsyialy4L%2FAmQw%2FeVtGKoK0r1noyqfhn5jWGqw%2FgIO2W8BzpqXWbVwDHUIsUaRhxUXhIRFazbDdn5JzPsrGlbsJ1vlNifH0SIjXROsazw55aDYsRtLlnCItziXAWjjNotIrJvq6WUHA%2F7MWpTBfI2so6OEyc%2BoieB30Y14X0xRGJQJCf53KkZquxs%2BaKydqrKzQa4Tl%2B7EfSTpWem2gOltb4s%2F4TMkwTNFZ%2F8lTb7PGE7%2BeyGyMq18KFY%2F42GnCiiVARfMAz8HOlwAUF3MsJwu4mxAzwyjxJyYGm%2BrzWmYEV6%2B33j2orXl3cashXA53mLEY8y5wmR%2Fy3BaVk92Q%2FjKAE9KRJPVm2I0O6pkhLU6ScalT0i1wX%2B%2Fz76zR9hxRdfc8W%2BeicDQH%2BScifH5Xi7uwtcQMC%2FFskT0Xa2nVF%2FlUhobDVjkguta5jA9L%2Fnt19GzSRAv5fnkzCH2dzLBjqkAcwuudNZQswsVw2Ew8u1mjN%2FgXedxTHmEuRpYBEOqUjDj9R7mFoQT7UhO499zvajlLCNQafNFJe1G37AMFgc0di7mA9iYPAJ2%2BneoYCrB46TFAU3oL%2B4mODjhQcTO8CKfV3IT%2F4RvaQtn1%2FX%2BbmOi7M%2BO37iVQY63X9MbTYGUIJjqqIk8hY2IifjrT4nUvOSp2INQZ62WsVnDZfU8fKvyhB25Vvs&X-Amz-Signature=ff28be751739529a6b1249e793211ab5d71220569522906abda08aaec7fb5165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


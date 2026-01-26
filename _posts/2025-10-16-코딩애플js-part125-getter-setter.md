---
layout: post
title: "코딩애플JS Part1-25 getter setter"
date: 2023-07-11
categories: [general]
tags: [Javascript/Jquery]
---


### 쓰는 이유


얕게는 오브젝트 내의 함수들을 괄호없이 쓸 수 있게 만들어주는 키워드


깊게는 데이터의 무결성을 보존하기 위해 쓰는 키워드


요즘 데이터를 수정하거나 출력할 때 직접 원본 데이터를 만지는게 아니라 함수로 간접적으로 다루는게 대세를 이루고 있음 거기에 합치되는 코딩 테크닉


### 함수로 object 데이터를 꺼내는 방법


내년 나이를 출력해보고 싶을 때 ?


```javascript
let 사람 = {
	name : 'Kim',
	age : 30,
	nextAge(){
		return this.age + 1
	}
}
```


이렇게 데이터를 꺼내서 사용하는 방법이 요즘 유행


> 💡 **굳이 이렇게 하는 이유 ?**  
> - object 안의 데이터가 복잡할수록 함수 만들어놓는게 데이터 꺼내기 쉬움  
> - 내부에 있는 name, age 변수를 건드리지 않아서 실수를 방지할 수 있어서 안전함  
> 특히 매우 긴 object 안에 원하는 자료 몇개만 뽑고 싶을 때 미리 저렇게 함수를 만들어 놓으면 매번 기능개발할 필요가 없음


### 함수로 object 데이터를 수정하는 방법


데이터 수정을 위한 함수를 만들어 사용


```javascript
let 사람 = {
	name : 'Kim',
	age : 30,
	setAge(나이){
		this.age = 나이
	}
}
```


이 함수는 파라미터를 한 개 입력할 수 있는데 그 파라미터를 그대로 this.age 에 집어넣어주는 역할을 함


이제 사람.setAge(40) 하면 자유롭게 나이 변경이 가능


한 겹의 안전장치를 만든다고 보면 됨


안전장치란 ?


```javascript
사람.setAge('40')
```


나이에 숫자를 집어넣어야 하는데 실수로 문자를 집어넣으면 ?


그냥 잘 저장되고 데이터가 오염됨


나중에 나이에 1을 더하고 싶을 때 에러도 유발할 수 있음


```javascript
var 사람 = {
  name : 'Kim',
  age : 30,
  setAge(나이){
    this.age = parseInt(나이)
  }
}

사람.setAge('200'); //문자 넣었는데도 숫자 200으로 저장됨
```


parseInt() 가는 함수는 문자를 숫자로 바꿔주는 자바스크립트 내장함수


### 함수 쓰기 복잡하면 get set 키워드 붙이기


```javascript
let 사람 = {
	set setAge(나이){
		this.age = parseInt(나이)
	}
}

사람.setAge = 40
```


set 키워드를 추가하면 이렇게 함수를 사용 가능


set 붙은 함수들은 setter 라고 부름


```javascript
let 사람 = {
		get nextAge(){
			return this.age + 1
		}
	}

console.log(사람.nextAge)
```


get 붙은 함수들은 getter 라고 함


### get set 사용하는 기준


데이터를 뽑아와주는 가져와주는 함수들은 get 을 쓰고


데이터를 입력해주는 수정해주는 함수들은 set 을 씀


set 함수는 데이터를 입력해서 수정해주는 함수니까 파라미터가 꼭 한 개 존재해야 하고


get 함수는 파라미터가 있으면 안되고 함수 내에 return 을 가져와야 함


### class 안에서 사용하는 get set


```javascript
class 사람 {
	constructor(){
		this.name = 'Park';
		this.age = 20;
	}
	get nextAge(){
		return this.age + 1
	}
	set setAge(){
		this.age = 나이
	}
}

let 사람1 = new 사람()
```


용도는 위와 같고 get set 키워드가 굳이 없어도 상관없음


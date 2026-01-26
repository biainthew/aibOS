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


![codingapple.com_course-status__%285%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/262c6b9a-c67c-484d-9780-e0a6c359d2a5/codingapple.com_course-status__%285%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIQZQ3B%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJFMEMCIAm9u5lhOJrCYoBCEO0JKMaHqpJUKYqTd%2Bri4ma3c3OEAh92acE9sRsQy3IkreR%2BkB8mv2%2FpPme6GYVP26InZgEeKv8DCDwQABoMNjM3NDIzMTgzODA1IgzUPkvm30Y9wJkMx7wq3ANhao6cgWWlMTHPNAGfbGAjjYl9gWs9hizwiseemToC5CHya%2BwAymuOzCkWgaT86vMqVXEPmkOuO8%2FgllUJ9ym1SxDVAcGu8xXVIQp0aSNEIi2PrlMpQfbqzM78QPVzaURKezDLMV7dGs1SwQuWo52vx0W8iiLX63GTHMVviCKUuefVM2F5tZzmjsuHcjmw2cfm%2BNDZK33cpkDtV1Yg1iY6nHEBMkvEp01MOMkjBrAHkH3Ni5gpQxsumYrbb86HxMIeAhuvPh6uuuWKXVIUt97dWbq4LP4glN6y60G%2Bd8ScTjGpav3WW56zu0tF9JRpHajhgvDbU%2Ba7Yb5O4hQMmFaPAlxsY3%2BHOzeAsL%2FiKU7cvnqnPCA8icP1m8IpDDL3j7QKXkiz5AFkgY335FiRr0rYfwffBAX8jN8syPSFFD39li%2B5RjdU59is1jMx%2Fwb1cIR5%2BIyxEtMHxSRyL9VM%2Bkj92bKRpS7RRQYtCbKrTBKZXK%2Bz7W%2FbcYqyKRU7UgnF2fgHV2Tw2zXcEhBce2GxVU%2FtUeYUVhmtvz4HdvFzutx7Cnx31Hjs%2FVlULqGPQX7K3ByOwRYjSASBwM%2B8kC32mwRedyopMZvSbVy8VEEYsqxrV8qDDiaAxg4Om1TVBzDxmt3LBjqnAelQql9aHkH8h0TnL7JE5fKCPpwclF7G4XY2huAC1gJDJj1mRax8ve%2FUM%2BA8UmrEsQgm%2FkyVHHu8lNzbaFQhxRym0aV1gay6%2BWEPGg6FVN02IFUd86hBmrhSxAQklCPAEKkEI5QWy0t57Gjrp1tb314G6t0EArxV66kGTeygY3W0TPajeYNL9smypU%2Bv%2FyqJ0AEeb0pwV0qvNbTr%2ByScBWUppqn4%2B5nq&X-Amz-Signature=59b78cf3cf92aff28bcc94a4d965eb05cb0631e10c9b1d160800c44ec3530e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


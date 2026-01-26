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


![codingapple.com_course-status__%285%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/262c6b9a-c67c-484d-9780-e0a6c359d2a5/codingapple.com_course-status__%285%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4S24UX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHVwXocSWuN9IrNZzKXryinnaZtht%2FvzlIBSLcjxqAGKAiAo%2BTN%2B0d%2Bc%2Bqtu0TGuvqMTxowfrA6FC9iC1%2FhihqDzfSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMqmKbm9Gr4KTl7yruKtwDoHym5ug9OzhyLf23CfAGzYPlDOjUVrUEsO9%2F%2BvAbkulDqK7Y0V6tnSI837dxKmejyjSG1ZS3KbFqcUy1hi%2B1UdH9wa%2B6RIU1m1W7zh90BZnsMRkZuIyRt7%2B%2Bev%2F%2BnfcB1IdQ6W8S44iGioXyeAOnyX7M0iKWNHYuahx2I5i4ZNIPL%2B79eL12Of12yFWd8gVN3QpaIAP09GE0vhB3RWAyWhjmBQibfS4qD6sW7YBpM31urCTdCaPWjlhijDcFITYT8CKsYNRESltBhE5A9WPxlPuanSNfScnco6D2Fp5jBuEppND7tUaOVO%2FbBoiVaLPT6e7qBiyWznejW7fV6%2FfLTlC0%2Ffm9gW6VHBqV4geVYcLYH2skfWOaUzl%2Bmr2ym3azXbfPEvaWIccZ6%2BjRHZkN%2BLbC8hLtKAvSdBPjFia740QPjIip6TwVjhaEORt%2BgyDIB2G2jW%2BsqWiDCCNW2c3dM%2B%2BSMs64sNajqMB64Gr%2BvQjK0XtJOlqRB1AnSY8nFWyK%2FNTUP8NjRGMpnQA66sbfgJw7tycvbZL62Y8XkdL4nlweN6OGlhu7CE%2FqYlJykTVxg5Ef3cYFA5Sn%2F7MkxZYCYyyyuFdWYUjz40dmmwU6zuONf31IOQjT3o61srsws%2FvcywY6pgEzhw8Uxs7MliRJ1%2FqqyxzvT%2B%2BBPrXCPVirCUX%2Beh%2FpJ%2FLdfkrPZgS3bteQE1lmFnFAmkj5b1mUIha%2BOCvi%2BYwYHxLjwRcItE2xZlQvPjtosumltXgZK0BZa4cYzhr8cKUBOFcmpgoSa%2FCKB1OnfrpfRqdkKmeTKYyioRknhGsMRW4Zwu5eUOAcePvvRDlxBpdvIcFuoegUgQemkcsmbcuxFu9EyDhs&X-Amz-Signature=574884ae25a49c83c9ea41abcf2441fde2e94acda803b603df8eee0927db3309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


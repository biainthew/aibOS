---
layout: post
title: "코딩애플JS Part1-28 destructuring"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### Array 안에 있는 데이터를 변수에 담는 방법


```javascript
let array = [2,3,4];
let a = array[0];
let b = array[1];
let c = array[2];
```


```javascript
let [a,b,c] = [2,3,4];
```


### 기본값


```javascript
let [a,b,c] = [2,3];
console.log(c); //undefined

let [a,b,c = 5] = [2,3];
console.log(c); //5
```


### Object 안에 있는 데이터를 변수에 담는 방법


```javascript
let { name : a, age : b } = { name : 'Kim', age : 30 };
```


```javascript
let { name, age } = { name : 'Kim', age : 30 };
```


### 변수를 object 로 집어넣고 싶은 경우


```javascript
let name = 'Kim';
let age = 30;

let obj = { name : name, age : age }
```


```javascript
let name = 'Kim';
let age = 30;

let obj = { name, age }
```


### 함수 파라미터 변수 만들 때


```javascript
function 함수(name, age){
	console.log(name);
	console.log(age);
}

let obj = { name : 'Kim', age : 20 }
함수(obj.name, obj.age)
```


```javascript
function 함수(name, age){
	console.log(name);
	console.log(age);
}

let obj = { name : 'Kim', age : 20 }
함수(obj)
```


![codingapple.com_course-status__%287%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9e5aa69a-2d8b-49be-a2bd-a21498716523/codingapple.com_course-status__%287%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNME243B%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICUPlKSiGlC7c1XJA5uNw257XYbeNLojeRodQSgWSZ6LAiEAxjkAqb2jQro29OUvuwFlm1uvqZvT8Ytbp5Tb%2BOOvaRwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPXcJzFLFPr1mLcadCrcA%2FEYfspcfMYCf%2FVS1TXuIVg1sJZeHbw%2FKPMj3YilknDzJ2rXo%2FlZ%2BiG8v%2BpycRtldz8IUIl9AdaNjPs%2BR8USjyN8FuhM0%2Frv6LNKZV2Q%2F%2F4BKbDk4yAUi%2BpZEL%2Fiij7z2l%2BfufzXKOlprwAVxhdJQ9HCuvBxa3VkXPxnqMQj8HacLPEecQQb60UBgCClJlVzDkrolypmvPPls43vM%2BkWHr1APy0FmoNyRBs%2BcpAgSYKNEsXokLpgatwW7dnO7rQnBz1a6e6MvNPY4SspmD4eRkWHBb%2BAb8znDmqoV0KvK%2Ft2n50%2BYv6MqnZhtyrsp73Wydkwh%2Fb6sWkc%2BVLGUNM8NcOHE9h0zbHaAECDD1Re9xExHBXmT%2B5oje%2Bb93otqMBtnPctRYKV4ONeKU%2F9WNbcx%2FadaQ%2BInnQOsX5sEUumYhDpirQPZvQV83FDoSVLOSrhqT0bAXxNPJFuciD1N7Rt9MrxbzYVrVqOmQXYBqzQ173hj0mhWGICXiQ0fbYvXG7Ap9mw9%2BtM%2FW9jCip75M5TcoWakm%2Fu4gbEl9IJSo4A7B1VUi7foCJMYnFHdkgfo7dumWS6niEYN9pQovT30Rl9mD61T%2BrduPcVN8R8OD%2F5slYDfAA76Npgduq4F%2BMcMPCa3csGOqUBpTl0YpLzPrbPKSXZCN%2FzbunBNBemP%2FVbVfAcvijSWyvANuK8Jd6VvkBtsPJ1Aza%2BYgbBx2MLqzYEDz%2BldwfACky9hyzO10CPDNBR1LyD%2Foz7mqWk4zyh1TLZXfMS1DNcFzPmSvVYSkAagNYByXP3B9hUOtP6gP2slSo6INUMcVS10xp1SV7Na1%2FZtNy7VH%2BuojjEqNyJJxGBXiGgzfLke5SRdqtQ&X-Amz-Signature=a54a11aaf4c0ed7efad54496e16a9637cfdc4bb4d799cc2680090f6253a2cd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


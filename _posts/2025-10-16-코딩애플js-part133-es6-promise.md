---
layout: post
title: "코딩애플JS Part1-33 ES6 Promise"
date: 2023-07-17
categories: [general]
tags: [Javascript/Jquery]
---


### Promise 는 디자인 패턴, 새로운 기능은 아님 비동기도 아님


### Promise 의 생김새


```javascript
let 프로미스 = new Promise();
프로미스.then(function(){
	
}).catch(function(){

});
```


: new Promise() 문법으로 프로미스라는 변수 오브젝트를 하나 생성하면 제작 끝


: 프로미스 안의 코드가 실행 완료 되었을 때 then 함수 내의 코드를 실행시켜줌


: 실패할 경우에는 catch() 함수 내의 코드를 실행시켜줌


이런식으로 코드를 차례로 실행할 수 있게 도와주는 디자인 패턴이 바로 Promise


### 좋은 이유

1. 콜백함수와 다르게 순차적으로 뭔가를 실행할 때 코드가 옆으로 길어지지 않음
2. 콜백함수는 불가능한 실패시 코드 작성이 가능

### 정확한 뜻과 사용법


: 성공 실패 판정기계


```javascript
let 프로미스 = new Promise(function(성공, 실패){
	성공();
});
프로미스.then(function(){

}).catch(function(){

})
```


: 성공() 이라고 첫째 파라미터를 함수형태로 작성하면 성공판정이 됨
위의 코드는 무조건 성공을 실행하게 되어있으니 무조건 성공을 판정내리며 그 후엔 이제 then 안의 코드가 실행될것


### 1. 힘든 수학연산 성공 후에 특정 코드를 실행하려면 ?


```javascript
let 프로미스 = new Promise(function(성공, 실패){
	let 어려운연산 = 1+1;
	성공();
});

프로미스.then(function(){
	console.log('연산 성공')
}).catch(function(){

})
```


프로미스 내의 1+1 이라는 어려운 수학연산이 완료되면 성공 판정을 내리며 성공시 then 내의 코드를 실행해줌


### 연산 결과를 then 안에서 활용하고싶으면 성공() 함수 파람 안에 넣어주면 됨


```javascript
let 프로미스 = new Promise(function(){
	let 어려운연산 = 1+1;
	성공(어려운연산)
})

프로미스.then(function(결과){
	console.log('연산 성공' + 결과)
}).
```


### 2. 1초 대기 성공 후에 특정 코드 실행하기


```javascript
var 프로미스 = new Promise(function(성공, 실패){
  setTimeout(function(){
    성공();
  }, 1000);
});

프로미스.then(function(){
  console.log('1초 대기 성공했습니다')
}).catch(function(){
  console.log('실패했습니다')
});
```


### Promise 의 몇가지 특징

1. new Promise() 로 생성된 변수를 콘솔창에 출력해보면 현재 상태를 알 수 있음
    1. 판정 전 - Pending
    2. 성공 후  - resolved
    3. 실패 후 - rejected

(성공을 실패나 대기상태로 다시 되돌릴 수는 없음)

1. Promise 는 동기를 비동기로 만들어주는 코드가 아님 비동기적 실행과 전혀 상관이 없음
2. 코딩을 예쁘게 할 수 있는 일종의 디자인 패턴

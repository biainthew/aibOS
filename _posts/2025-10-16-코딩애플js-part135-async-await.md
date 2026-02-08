---
layout: post
title: "코딩애플JS Part1-35 async await"
date: 2023-11-08
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### Promise 보다 쉬운 async await


### async 키워드를 쓰면 Promise 오브젝트가 저절로 생성됨


new Promise() 할 필요가 없음


function 앞에만 붙일 수 있음


{% raw %}
```javascript
async function 더하기(){
	1 + 1
}
```
{% endraw %}


이러면 이 함수 자체가 Promise 가 됨


그래서 이 함수를 실행할 때 뒤에 then 을 붙일 수 있음


(함수를 실행하면 그 자리에 Promise 인스턴스가 남음)


{% raw %}
```javascript
더하기().then(function(){
	console.log('더하기 성공')
})
```
{% endraw %}


그러면 이제 Promise 처럼 then 을 붙여 더하기() 함수가 성공한 뒤에 뭔가를 실행시킬 수 있음


함수 안에서 연산한 결과를 then 안에서 사용하고 싶다면


{% raw %}
```javascript
async function 더하기(){
	return 1 + 1;
};

더하기().then(function(결과){
	console.log(결과)
});
```
{% endraw %}


### then() 함수가 귀찮다면 await 키워드를 쓸 수 있음


async 키워드를 쓴 함수 안에서는 await 사용 가능


await 은 프로미스.then() 으로 생각하면 되지만 훨씬 간단함


{% raw %}
```javascript
async function 더하기(){
	let 어려운연산 = new Promise((성공, 실패)=>{
		let 결과 = 1 + 1;
		성공();
	});
	어려운연산.then();
}
더하기();
```
{% endraw %}


여기서 await 을 쓴다면 ?


{% raw %}
```javascript
async function 더하기(){
	let 어려운연산 = new Promise((성공, 실패)=>{
		let 결과 = 1 + 1;
		성공();
	})
	let 결과 = await 어려운연산;
}
```
{% endraw %}


정확한 뜻은 어려운연산 Promise 를 기다린 다음에 완료가 되면 결과를 변수에 담아주세요 임


연산 결과를 출력하고싶다면 성공함수에 파라미터를 담아주면 되는데


{% raw %}
```javascript
async function 더하기(){
	let 어려운연산 = new Promise((성공, 실패)=>{
		let 결과 = 1 + 1;
		성공(결과);
	})
	let 결과 = await 어려운연산;
	console.log(결과);
}
더하기()
```
{% endraw %}


성공() 함수에 있던 2 라는 파라미터는 let 결과 라는 변수에 저장됨


그럼 Promise 의 연산 결과 출력 가능


하지만 비동기처리되는 코드를 담으면 await 기다리는 동안 브라우저가 잠깐 멈출 수도 있음


### await 은 실패하면 에러나고 코드 멈춤


{% raw %}
```javascript
async function 더하기(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    실패();
  });
  var 결과 = await 어려운연산;
  console.log(결과);
}
더하기();
```
{% endraw %}


이렇게 실패한 경우에는 await 이 에러가 나고 멈춤


멈추게 하고 싶지 않다면


{% raw %}
```javascript
async function 더하기(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    실패();
  });
  try { let 결과 = await 어려운연산 }
	catch { 어려운연산 Promise 가 실패할 경우 실행할 코드 }
}
더하기();
```
{% endraw %}


try 안의 코드가 에러가 나고 멈출 경우 catch 내부의 코드 실행하도록 에러처리


### 예제 : 버튼을 누르면 성공하는 Promise 만들기


{% raw %}
```javascript
async function 버튼(){
	let 클릭 = new Promise((성공, 실패)=>{
		document.querySelector('button').addEventListener('click', function(){
			성공();
	})
})
	await 클릭;
	console.log('성공')
}
```
{% endraw %}


{% raw %}
```javascript
//프로미스 만들기 (클릭하면 성공이 뜨는)
let 클릭 = new Promise(function(성공, 실패){
    document.querySelector('button').addEventListener('click', function(){
        성공();
    });
})

//클릭 프로미스를 기다린 다음에 완료되면 결과를 변수에 담고 콘솔에 성공 출력
async function 버튼(){
    let 결과 = await 클릭;
    console.log('성공')
};
버튼()
```
{% endraw %}


{% raw %}
```javascript
//프로미스 만들기 (클릭하면 성공이 뜨는)
let 클릭 = new Promise(function(성공, 실패){
    document.querySelector('button').addEventListener('click', function(){
        성공(100);
    });
})

//클릭 프로미스를 기다린 다음에 완료되면 결과를 변수에 담고 콘솔에 성공 출력
async function 버튼(){
    let 결과 = await 클릭;
    console.log(결과)
};
버튼()

//100
```
{% endraw %}


결과를 출력하고 싶다면 성공 함수에 파라미터를 담아주면 됨


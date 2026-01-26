---
layout: post
title: "Callback / Promise / async / await"
date: 2023-01-09
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



= > 비동기적 방식을 처리하는 방법들


= > 사용하는 이유 : 콜백함수의 과정이 끝나기 전에 다음 프로세스로 진행될 수 있기 때문


# _Callback 함수_


: 다른 함수가 실행을 끝낸 뒤 실행되는, 나중에 호출되는 함수


: 코드를 통해 명시적으로 호출하는 함수가 아니라, 함수를 등록해놓은 후 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수


: 매개변수로 함수를 전달받아 함수의 내부에서 실행됨


### 🌈 사용유형


👉🏻 익명함수 사용 : 함수의 내부에서 실행되기 때문에 이름을 붙이지 않아도 됨


👉🏻 함수를 콜백함수로 사용할 경우 함수의 이름만 넘겨주면 됨


### 🌈 주의점


👉🏻 this를 사용한 콜백함수 >> 콜백지옥 (코드의 들여쓰기 수준이 깊어지는 현상)


👉🏻 이를 promise, async, await, generator 등을 사용해 방지할 수 있음


# _Promise_


: 싱글 스레드인 자바스크립트에서 비동기 처리를 위해 사용한 콜백함수의 에러/예외처리의 어려움, 중첩으로 인한 복잡도 증가 라는 단점을 해결하기 위해 지원하는 객체


: 콜백을 대체하는 것은 아니지만 예측 가능한 패턴으로 사용할 수 있게 하며 promise 없이 callback만 사용했을 때 예상치 못한 동작을 막아주거나 찾기 힘든 버그를 상당수 해결해줌


### ✔️ 문법


> 💡 `const promise = new Promise((resolve, reject) ⇒ {처리내용})`  
> `promise.then()  
> .catch()  
> .finally()`


👉🏻 비동기 작업 성공 시 resolve 실패 시 reject 호출


👉🏻 then 은 resolve 가 호출되면 실행 / catch 는 reject 가 호출되면 실행


👉🏻 finally 는 콜백 작업을 마치고 무조건 실행 / 생략 가능


### 🌈 예시


> 💡 `const flag = true;  
> const promise = new Promise((resolve, reject) ⇒ {  
>     if(flag){  
>         resolve(’resolve 가 되었음’)  
>     }else{  
>         reject(’reject 가 되었음’)  
>     }  
> })  
> promise.then((resolveMessage) ⇒ {  
>     console.log(resolveMessage)  
> })  
> .catch((errorMessage) ⇒ {  
>     console.log(errorMessage)  
> })`


👉🏻 결과 : resolve 가 되었음


👉🏻 then 과 catch 뒤에 또다른 then 과 catch 연결 가능


## _Promise의 세 가지 상태_


### 🌈 예시1 Pending (대기)


> 💡 `new Promise()  
> // new promise method 를 호출하면 대기 상태가 됨`


👉🏻 비동기 처리 로직이 아직 완료되지 않은 상태


### 🌈 예시2 Fulfilled (이행)


> 💡 `new Promise()  
> // new promise method 를 호출하면 대기 상태가 됨  
> new Promise(function(resolve, reject){})  
> //호출 시 콜백함수 선언 가능`


👉🏻 비동기 처리가 완료되어 promise 가 결과값을 반환해준 상태


### 🌈 예시3 Rejected (실패)


> 💡 `new Promise(function(resolve, reject){  
>     reject()  
> })`  
> `function getData(){  
>     return new Promise(function(resolve, reject){  
>         reject(new Error(’Request is failed’))  
>     })  
> }`


👉🏻 실패 상태가 되면 실패한 이유 (실패 처리의 결과값) 을 catch() 로 받을 수 있음


👉🏻 fulfilled + rejected = settled


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.23.40.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/643b6d0f-2d3e-4619-8169-72cdfa977fa5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.23.40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ADP4NF%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBF%2B9wRts0H8bOA8hBjE2fy9ofbBq3UCdh0r7Ydp%2BgS4AiABuMBvStfQxpkfK%2FiItdJj709xHk23EhLULvfZCYEMdyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMYBqrcPpLZGnt8yM4KtwDnAMV6SXVxufOF%2B4jl2hu9CDq7VFnofQVk6NZCJBlDvH1H0TQIy5fukSAZJvZJP9PjAowu4l%2B4Vw1w2nZ8sMMqxBEbWhMDlPIo5UhsWdtIlTZhXlG%2Bop5wUFZgIeythThNvIXHa4JDFcCWKB1ReQAJn%2Bj1Ue9XfiCP51xwQrOLolM3gBdeVCEAasN8FMfOJHAlxtM7vqvCP%2BGLQ8A2lzhzfKFKLcIl7AyIDgPc0%2B6fnFnTJPmpYKPee8NrFfyclI%2FLsD0nh0XUIW3bjAkiUOSt7Y7yTwmhfSgsXNbxY0SnTX7QyZhvEKRZ5V0LkLH2soe6wANCGkcN%2BK5O%2F5g%2FNXYGSzJf8oiqdVVQhev9N6D%2BYJ23zoUDPgWZmrmvLCu8IeGQlDuv3Y5EPgLpeyKUTaL%2FNGrCdPdclnp8Ww4pv91V01zGJeJE2yL2OfoXFFh0vaH6P8YVoMOzWSA8SxPodCi4A2Ka%2FVgOdlOsvCxtM17fLmUC8ANPXdlNtiWg%2BmoNDBnJPnfmeRAJTPQsWhhSaQFjB7SYM90gTCN4CXhDKy2pl1bt%2B58qDuaZDQMOx28jNwb99%2FA5O258nT5cgcbOALEG3eBCFiyphowhNXPFmjY9a5QwdSQtyqD19wTolAws%2FvcywY6pgGYu9LR3zu%2FNswwPwcH7lGJkyJIa1v4oWbopUHhV1DDsZcoJMp%2BAXhwsdALi%2FlGrb%2FB%2B91ndgm%2BpVYAw41FrPxu19Py7lgGfTBWtA7Iuve45fdHzIDLCdJrWrAT%2BrFlsm3iTzko70GIxi2tTj0Drwhhy2LEb81jfHboLI%2B%2FwzuAeWIAziAMxQAwl1PBSfd4fLTz%2Fs2t6SnYfTLjJ%2BNdzeRP3MzmL7Fz&X-Amz-Signature=3dc86e26a910fabeac16d9b17d6e6064231433c3e44debbd63b9d6e253a63b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# _async & await_


: 비동기식 코드를 동기식으로 표현하여 간단하게 나타내는 것


: callback 의 단점을 보완하기 위한 promise 의 코드가 장황하다는 단점을 보완하기 위해 도입된 최신문법


: promise 객체를 반환한다 (then 을 사용할 수 있다)


### ✔️ 문법


> 💡 `async function 함수명(){  
>     await 비동기처리 메서드명()  
> }`


👉🏻 함수 앞에 async 라는 예약어를 붙임 > 항상 promise 를 반환


👉🏻 함수의 내부 로직 중 http 통신을 하는 비동기 처리 코드 앞에 await 을 붙임


👉🏻 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await 가 의도한 대로 동작함


### 🌈 예시1


> 💡 `function delay(ms){  
>     return new Promise(resolve => setTimeout(resolve, ms));  
> }  
> //2초동안 기다리게 하고 사과를 리턴하는 메서드  
> async function getApple(){  
>     await delay(2000)  
>     return '🍎'  
> }`  
> _`//1초동안 기다라게 하고 사과를 리턴하는 메서드`_  
>   
> `async function getBanana(){  
>     await delay(1000)  
>     return '🍌'  
> getApple().then(console.log) // 결과 : 🍎  
> getBanana().then(console.log) // 결과 : 🍌`


### 🌈 예시2 예외 처리 (try catch 구문 사용)


> 💡 `function fetchData(){  
>     return new Promise((resolve, reject) ⇒ {  
>         setTimeout(() ⇒ {  
>             return resolve(’success’)  
>         },1000)  
>     })  
> }  
> async function loadDate(){  
>     try{  
>         const result = await fetchData()  
>         console.log(result)  
>     }catch(e){  
>         console.log(e)  
>     }  
> }  
> loadData()`


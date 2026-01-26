---
layout: post
title: "코딩애플JS Part1-38 Map, Set"
date: 2023-11-16
categories: [general]
tags: [Javascript/Jquery]
---


### 매핑을 할 수 있는 Map 자료형


Object 자료형과 똑같이 key, value 형태로 자료를 저장할 수 있는 자료형임


```javascript
let person = new Map();
person.set('name', 'Kim');
person.set('age', 20);
```


이렇게 만들고 저장할 수 있음


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/c2418b1d-8d23-4e04-9e31-0570e3fa6d42/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGB22AC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDdEcPyg2xHAW8eqHMldJu2G1jftLYPHbf%2Bfh7rF65SXgIhAMoPcGGmOeFDoZTk%2BuB2jRoOrrfHo3x4Nf4oxAACVY41Kv8DCDoQABoMNjM3NDIzMTgzODA1Igz8iXq%2F2osvW36w%2B0kq3AOwiV1HvDZ7S17iB43O6RNMHR1LKbQdBlF52lD1vqbv2A4ttpisySnXcOlvf0iaTv2zzu7WDHT%2F6NM0TpxAVhG4l4T0FZUkKvu0k7DeNdUt5SydMt6PRxYfwYjcLURJBYwT1pQ1%2FYC0leoCDv5DqZnqxeR9OMEJCgVUzOxFQ4Mm4w3j3kdgiaPCJjEtYtF%2Bt79bznecg%2BUT%2BlU4PKnZNaVnW52I7SgSgXjCU%2BN8mSKQ25uRJ2wRabvEogOEg7ZVJmX4hL4d5KXV6QfQYooWdADvuTujqngh9smbFs8oKDWSruc81Njbhnev2keczX9ttJ8Ssf9m4hNtE7QFGpYVM3nP84skooDzGsfJcG8BISy8xl7FS%2BmT0yEISitppYDKAakU9GchKI8wHf9a67KYE0ImkdRXiCKtVdz%2Bpn2JKmhmtmWRuaXEHFSx0cG5krNhiC50pkDSu81CX2Gaf0p3u2%2Bv%2Fs6JSdlxbrmRtGBVGEdUa6EU7fADrNgehkyJ2UtlqC%2FWdh4W2Q43ZIyUd%2BEL8T5zhjQHF9bRgE2sGxMv1MA1BdrgrtbsYJC8IxE%2FjUnQMwNEL%2FfcQlmGVKf2j77Du7YaG%2BGz6z0DewlA%2BaWvlI8bTTWZ4TLaBLEsyTxC5jCo2dzLBjqkAcFiZaWVBHMBZCkMHaepIeSGhhi1ljDSfyOUFFOZVnLCgCwMagBlgYJb4Sg%2FPFRseSmxcI0pFemBGEOico10%2FzMqBkqgjJwS1JzZri5kAwiFN9qBcyd4TopREldoHZd8wUT9AYOjuaq3AssXQLlXNpifjVx63Wjy%2FeEABsFhzpKCMXt3JiutTRLvf8x3uN%2Bb8UGZNSw%2FjapYAnlxfPmTawjOt4Ge&X-Amz-Signature=7774c8d689c6187fb752dc92579f6bb3302f45778661e7539b9bc88d1107e023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


근데 출력해보면 이렇게 화살표로 나타냄


왜냐하면 Map 자료형은 **자료의 연관성**을 표현하기 위해 쓰기 때문


그냥 key, value 형식으로 저장하려면 Object 쓰고 name 이 Kim 과 연관되어 있다 라고 저장하려면 Map 쓰면 됨


### 그래서 Map 자료형은 key, value 값에 모든 자료를 집어넣을 수 있음


```javascript
let person = new Map();
person.set([1,2,3], 'Kim');
person.set('age', 20);
```


자료의 이름으로 array 도 되고 object도 됨


단순히 자료의 이름이라기 보다는 Map 은 이 값이 저 값과 관련이 있다 라는걸 표현하기 위함이라


### Map 다루는 법


```javascript
let person = new Map();
person.set('age', 20);

person.get('age'); //자료 꺼내기
person.delete('age'); //자료 삭제하기
person.size; //자료 개수

//Map 자료 반복문 돌리기
for (let key of person.keys()){
	console.log(key)
}

//자료를 직접 집어넣고 싶으면
let person = new Map([
	['age', 20],
	['name', 'Kim']
])
```


이렇게 다룰 수 있고 자주 쓰지 않는다고 함


평소에 개발 할 때는 여기까지만 알고 있으면 되지만 알고리즘 공부를 하게 된다면 다시 만나는 Map


array 같은 곳에 자료를 저장할 때 자료가  천만개 1억개 이상으로 많으면 Hash Map, Hash Table 이라는 걸 사용함 왜냐면 1억개 자료가 저장된 array 에서 원하는 것만 쏙 뽑고 싶으면 반복문을 돌리든지 해서 1억개를 전부 들춰봐야하니까


```javascript
let array = [1,5,34,67,43,2,213,8]
```


이런 자료에서 2라는 자료가 어디에 있는지 찾고싶다면 ?


몇번째인지 모르니 반복문 돌려서 하나하나 출력해야 하고 느림


근데 Hash Table 이런걸 쓰면 자료를 미리 abc 순으로 정돈이 가능한데


abc 순으로 정돈된 자료는 매우 찾기 빠름


그래서 자료가 1억개고 거기서 원하는 걸 찾을 일이 많으면 Hash Table 을 사용함


자료에 key 값을 부여해놓고 정렬하면 그게 Hash Table


사실은 object 와 비슷함


Hash Table 을 만들기 위해선 쌩 자바스크립트 object 자료 쓰면 되긴 하는데

1. object 자료형은 hasOwnProperty, toString 이런 키들도 집어넣을 수 있어서 너무 유연
2. key 값으로 들어올 수 있는게 문자형태로 제한되어 있어서

Map 자료형을 사용함


### Set 자료형


간단한 Array 자료형과 똑같이 생김


자료를 일렬로 쭉 저장할 수 있음


```javascript
let 출석부2 = new Set(['john', 'tom', 'andy', 'tom']);
console.log(출석부2);
```


출력해보면 중괄호로 표현이 됨


중괄호지만 array 와 유사하게 생김


중복을 허용하지 않음


### Set 자료형 다루기


```javascript
let 출석부2 = new Set(['john', 'tom', 'andy', 'tom']);

출석부2.add('sally'); //자료 더하기
출석부2.has('tom'); //자료 있는지 확인
출석부2.size; //자료 몇개인지
```


반복문도 가능 forEach 혹은 for of 반복문 사용


Map 보다는 많이 씀


### 특히 Array 의 데이터 중복 제거할 때 많이 씀


왜냐면 array 를 Set 으로 바꾸는게 매우 쉽기 때문


```javascript
let 출석부 = [ 'john' , 'tom', 'andy', 'tom' ];
let 출석부2 = new Set(출석부); //Array 를 Set 으로 바꾸기
출석부 = [...출석부2]; //Set 을 Array 로 바꾸기
```


Array → Set → Array 하면 중복 제거됨 개꿀


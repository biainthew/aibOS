---
layout: post
title: "코딩애플JS Part1-38 Map, Set"
date: 2023-11-16
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### 매핑을 할 수 있는 Map 자료형


Object 자료형과 똑같이 key, value 형태로 자료를 저장할 수 있는 자료형임


```javascript
let person = new Map();
person.set('name', 'Kim');
person.set('age', 20);
```


이렇게 만들고 저장할 수 있음


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/c2418b1d-8d23-4e04-9e31-0570e3fa6d42/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJJ7PQA%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBjx5ageeP%2Fh1V%2FgZeX1JUALTjByk3AHgaotbBA%2BrGk1AiAgQKFxRccYUT27mUk5RCNqXQfnHNr3NyndhgdlCwsbASr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMKZzm15s1FfB0clFPKtwDuHOn%2FCt6Kt5klY2463JQiZpmCu9c9GW9JOJrrPyu33KN%2BRzTBUVwbAV6TX2EpSxnSn6Xtq6%2B%2BLMsJ89dYm15LIud%2BNRj%2BlldUfGkAz1pcu8t%2F9%2BGFOyPCEWuoe2DFEqO6NUhd8UltC35GDWUr4P3blj4mOdHDNW0gIEaTU4263Ux0Vz3FYwDw8wAvOmXcSLawtMeBCu125n7kKPbKcgF%2BRyclfl1aDy3J75ocmX1xX1s%2FUf3URsmNtNl3vEYKgh4aD%2BgPXrF9CDYDwLEA69I8J7cLhHNb5oGUt3DjDu7oRLzdu%2Bxa6Xm2V92ep%2BtuF%2FW5wyVGXu%2FYMkmW2QcBKcJDWLjFfUSoQcvbhh1bT7O%2B7CH381FkM%2Fl%2FDkxGpmwDX%2FzvmVz%2BwMXUzpweN7Pd3j9%2BW7Z6GSHb%2BThU55jRmY8TLxAhJXAEI6W2%2Bi9JR4r5ddCAAuHsoFBrwbtgHqiVAAVOtJx5LmnaR31UYSi%2Bh6uo6Bmg7kxOidUMYegAeNWCFYbHj8iKx%2F%2Bge3JIjdRA0o7Kzz7xuVLY208Bl52L784g7r%2FGy6NVCeQNdq4ktqIapBHqs%2F%2BFUgSy8TGbVj%2F5xbvme9Ixl%2Bg6HQA%2Bc0%2FSfgSPBN8i0eawNoMgmdHbI0wp%2FvcywY6pgFzKNIbhJ97MJOkBjwKr7JoHaZg12kaury8M%2F89tbPEuxaI5J7dO7c8zugnx8psvtvMPv5a1fBXRjx7blhnU8R1qWoZcg1%2BFASovcKI8uXZGQwtD1ppAKioSQp64OU515ElkoG8vYw4ZCGxjsiVHXRy25GS9ACQbr9SP9Y8RcGGp%2FjdJYyHpMlqlMAxDHerlTb%2Fnsnno8qv9mkoYQLjLJTXP9J8aKQG&X-Amz-Signature=9e5594cda7748a47304800d0da9bfe75482277074b525d4aa5ddbba19d9ddadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


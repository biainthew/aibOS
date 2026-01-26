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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/c2418b1d-8d23-4e04-9e31-0570e3fa6d42/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DTCYMP%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHjqqDpMYMPZvzckn3YBxMc73i6M984vP8CbKfxmIjRQAiAZb3MKREWuHOx%2By3S%2FZ50BxbyVwIBa2h51I9SJJtQK%2Fir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Ftyd7jxf6KGbTfMqKtwDELEjTJ9SqB26fR%2FYRRwsBtV8EDuXuMnVV3jFUMKSVWpVo87ogBLxn2eBYHpcPj62slXwLcaGP3kJRIJ%2BYVyUiF2KYg0NYMCXCv%2FzXgzo%2FwOoUhQZGE0oaPavAIJbVJgymwu2hWYVS9dOuO7UNLCEs2Q6ayA45V5sQgJxYUZKfwRCv6XiXALlgEdS4nF73nNDZVCjdAo52tNHb8eiv5kNpAQyWo3ByAKFZcXOxeoiRpiZNfQKzeRM1cpMDx54NSe0BgcbGX2lON7k3RdBlgVQuSR2En3sS0kKfmyuhUIa%2FD09SZdk%2BDunAx5p07uC0At%2FZgmH4Qw8JAicTz16PHcVzTFLzkf1yBW6ZlJR7LY8TAFd2ozN5udeB9o2VRvpPuNoqHYCrgh3eFqbyoeTQ51jmLCHXsUWOMU1cMJ435FrAo%2F2sFWuUDEXD8fUMpV%2F5BuQMU43AoyRzfUoolvhf0P6pc1RM9%2B8nzhBhuvPZYww8cRJxydJkcbEO8%2BqR5Z7IKWJaLIV7gmkFcabOhHORhUW7NlIaNs8PYT%2FGYprQHl0a%2FDRDL7TnI%2F7Wp980tKX21jrV8NA383MJPK7LghvqjsfD3prsXCLE3j5D3md16goPIEbyhQsE5oGa8yFSawwkZvdywY6pgE9sbGN0orq%2BHZZhV0gOqEjfCuyFNLF77J6KdFw1kgE%2Ba%2BeOUPwQQPStylEzbAaLc7K2c5RqJvvMdjvNs1JW%2F9L4I0E7JLDYwB9pnxBm4KfNj%2FypM9UwAuhz2Ntz1w8VfEJmV4btUvGLZ9ycuC5%2BGL8MO5exc2pLmNqEgZridFmwKA95BmwYtRlHlTA5ddJIG407kbmlnAUxqYiA4HurXq0TLzl4fBA&X-Amz-Signature=cdbfab1ded56e0dbb80b2faa89dafafca2db6c99563f1ae1b2d3378d32fbd5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


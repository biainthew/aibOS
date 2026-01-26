---
layout: post
title: "Spread Operator"
date: 2023-01-16
categories: [general]
tags: [Javascript/Jquery]
---


[:참고 자료](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90Spread-%EB%AC%B8%EB%B2%95)


# _전개 연산자_


: 객체 혹은 배열들을 펼칠 수 있게 해줌


### ✔️ 문법


> 💡 `// 펼칠 대상이 객체인 경우  
> {...obj}  
> // 펼칠 대상이 배열인 경우  
> [...arr]  
> // 혹은  
> {...arr}`


👉🏻 펼쳐진 객체나 배열을 담을 객체나 배열이 필요


### 🌈 예시 - concat


> 💡 `const arr1 = [1, 2, 3];  
> const arr2 = [4, 5, 6];  
> const arr3 = [7, 8, 9];  
> const arrWrap = arr1.concat(arr2, arr3);  
> console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]`


👉🏻 ES5 에서 사용하던 concat method, 배열의 내용을 합쳐 새로운 배열을 만들어줌


### 🌈 예시 - spread operator


> 💡 `const arr1 = [1, 2, 3];  
> const arr2 = [4, 5, 6];  
> const arr3 = [7, 8, 9];  
> const arrWrap = [...arr1, ...arr2, ...arr3];  
> console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]`


👉🏻 concat 은 전달받은 값 순으로 기존 배열의 끝에서부터 값을 추가하지만, 전개연산자는 배열의 아무것에나 추가할 수 있다는 장점이 있다


### 🌈 예시 - push


> 💡 `const arr1 = [1, 2, 3];  
> const arr2 = [4, 5];  
> arr1.push(arr2);`  
> `console.log(arr1); // [1, 2, 3, [4, 5]]`


👉🏻 arr2 배열 전체가 들어가 2차원 배열이 됨


### 🌈 예시 - spread operator


> 💡 `const arr1 = [1, 2, 3];  
> const arr2 = [4, 5];  
> arr1.push(...arr2);`  
> `console.log(arr1); // [1, 2, 3, 4, 5]`


👉🏻 쉽게 구현 가능


### 🌈 예시 - 펼칠 대상이 배열인 경우


> 💡 `const myArray1 = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];  
> const myArray2 = [...myArray1]; // ...myArray1 : 'Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'`  
> `console.log(myArray1); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"]  
> console.log(myArray2); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"]`  
>   
> `console.log(myArray1 === myArray2); // false`


👉🏻 두 배열을 비교하면 false 가 출력, 서로 다른 독립적인 배열이 됨


### 🌈 예시 - 펼친 배열을 객체화


> 💡 `const myArray = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];`  
> `const myObject = {...myArray};`  
>   
> `console.log(myArray); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"]  
> console.log(myObject); // {0: "Canna", 1: "Cuzz", 2: "Faker", 3: "Teddy", 4: "Effort"}`


👉🏻 객체로 만들면 각 요소는 프로퍼티값이 되고 배열의 인덱스가 프로퍼티네임이 됨


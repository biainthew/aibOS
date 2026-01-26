---
layout: post
title: "findIndex"
date: 2023-02-01
categories: [general]
tags: [Javascript/Jquery]
---


# _findIndex( )_


: 주어진 함수를 통과한 첫번째 요소의 인덱스 값


### ✔️ 문법


> 💡 `arr.findIndex(function(currentValue, index, array), thisValue));`


👉🏻 선택한 요소 제거


### 🌈 예시


> 💡 `var arr = [1,5,6,3,4,7];  
> var even = arr.find((item)=> item%2 === 0 );  
> console.log(even); // 6  
>   
> var evenIndex = arr.findIndex((item) => item%2 === 0);  
> console.log(evenIndex); // 2 : '6'의 배열 내 index`


👉🏻 첫 번째 짝수를 찾는 예시


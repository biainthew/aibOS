---
layout: post
title: "코딩애플JS Part1-17 reference data type"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



자바스크립트의 자료형 (문자, 숫자, array, object 등) 은 자료형을 크게 2개로 분류합니다

- Primitive data type : 자료 자체가 변수에 저장되는 자료들 ex) 문자, 숫자
- Reference data type : 자료가 저쪽에 있습니다 라는 **화살표(레퍼런스)** 를 변수에 저장

```javascript
const 사람 = { name : 'Kim' };
```


> 💡 **화살표가 가리키는 저기 ?**  
> 컴퓨터 메모리 상의 어떤 곳


### 1. 복사하면 이상한 일이 일어남


```javascript
var 이름1 = { name : '김' };
var 이름2 = 이름1;
이름1.name = '박';
```


### 예제


```javascript
var 이름1 = { name : '김' };

function 변경(obj){
  obj = { name : 'park' };
}

변경(이름1);
```


Q. 이름1을 집어넣어서 실행해도 바뀌지 않는 이유는 ?


A. 파라미터는 일종의 변수처럼 생성되고 사라지는 존재, let 변수


자바스크립트 입장에서 보면 변경`(let obj = 이름1);`


이것은 obj 라는 변수에 새로운 화살표를 재할당 한 것이지 실제 이름1 이라는 변수는 건드리지 않음


### 예제


```javascript
var 이름1 = { name : '김' };

function 변경(obj){
  obj.name  = 'park';
}

변경(이름1);
console.log(이름1);
```


![codingapple.com_course-status__%287%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/bc1e17c9-b1dc-4a48-b043-81ce61ba28cd/codingapple.com_course-status__%287%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6KNNPR%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBQX3oA8oM%2Fvi6%2FafSa%2Btl7tOIIUf7%2BdnLKXJtnoou7YAiEAhRoZZf0%2FBsUbKHyVPi%2BRkOS5PJ%2FXw5pJ5S6VoRdUOboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIGXozJzSQUqg6h15yrcA%2BZEjZ6UrsYZOsseUVM2%2FNKxc9XLYdP%2FKenv0K8nyJm0s2X1EdUK92a%2BimIdQfWlL3y4nj90NEmhhC901WZ2bDoCxhVsDlX8gxNjftauqnBr2PDeeO800U5gy6z4a5GqN5VocFX6rX6ciJDKMThfKdiGVXQoOAlKTMArw9PbD3vGA0bjKm1%2Bx1xdXr8man%2BJjK%2BtbMmDWzGkQcS2Mp4cNdJcfmoW8HecUjl4n7ZdW7fjEYjx%2FTuRi82%2BVfxpXKqW1Um%2B5djx8N41g9Qh8QZ%2FWa2yp7s6NWYOUMhsBwXXnuIfmszmqEpqxoFrOk4p68dNEN6zg7FR1HXQjO90QibYzWj4pUOzyiGJfKpJQqj9hkrQToUOActuIUt%2BSXWqltyfirRZMI19rLBCwGTXrJJLsxuiw2LLWSk4tXCTMVXwRj2DVFwXyxLJAC3J3zFP%2BUTtGb9cqFQB52qhwrHmi4dFH4YeW3lWqgcl3ThF7%2B6neBa9xqPoRldWH1njTJkRUA%2Bq6ETwzDzgNfUzQ2U4dL2O5bal0jEG4hyP8FIAPxT5dIXoNvjDgprU1ZU%2BOVs2%2Bx2RZxbdaBolJ7kFS7uHrzQdL93mkkNufFDs7ssvzYU5ZRlsXGKKRkC7%2BkG0j3xmMLH73MsGOqUBpYWp1X8X3kFW0ppmAaBbS%2BekAlEpLxiyG%2BbATpwGXl4OuFpj481IBT%2FhpLcfX76%2FobU7MFDBlHB7EMmK6BtYI95FrAFCw7NVlPQTBWKSvNgFljjSuDHkdVXOQExW6KzxfD6K2FIh5sMOf%2BfQ1FtHbcbOx%2FfV5JQnkztrEpxMG3fi%2BSlJiCTzjbIFWv7hsDGvxRftTywAl6vO4OE5PJR0xbC%2BHIio&X-Amz-Signature=9e6e585896f1e2e021b9318ef3ee6d6fcbf0811d8492d0fb912ad128acf8761d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


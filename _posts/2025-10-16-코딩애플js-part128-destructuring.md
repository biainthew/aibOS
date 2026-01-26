---
layout: post
title: "코딩애플JS Part1-28 destructuring"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
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


![codingapple.com_course-status__%287%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9e5aa69a-2d8b-49be-a2bd-a21498716523/codingapple.com_course-status__%287%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAM6HHX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEcsecsp7RAzQwu8pEA3vtK7F9hAMRcQwDNl%2FnVPqEycAiBVLNcZoaRvYRbXn4b3olib7eXnZ4E2%2BKsr%2F%2FL1ZpX1DCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMa%2BFdfeVQwdfLueN2KtwDSuWDzlCyW28NWLCM4H6GfuUCt%2BlqdiIoXjmkXZuiQdcbKNdhMSzHVPovvLHv3hzvmimNGhhtxsxoedhfdzK0EtW784n38kHC1qZ1ykQf3fu%2ByYXM51nHoadFRexUSaP6FUVX4aL7D%2BREYWITKXesWSpouhLhdf%2BTX0y8emCpydA%2FAePEKx%2FTVD4Fl44kst31QE8q%2FxjZ4LN025oNh9M%2FPtjPKDA5rUMmmE5U2%2FmZ8M%2B9dZvb3qpg0k513Sr4xyfnCEpWnbB3LSeO97YXxs6sKUYF0EEmAhTt%2B9PxbUKMkI2e0%2B3s7UfiYB%2Fy2f%2BOD7l3QNkClxXnc%2BBKee74EwGEb3%2BQ0ctQL6VBI96Oz1ZKFXzWPmi2MjAWfUqPppIZdHdURWBNOf9qukAayyOCZ%2BN4pFpUqLKg2QChSbi8vE4q2PP1CbEmkMM8Wfb3ZY94FrCLbP5JyFfh7hS1SfdvXWvpr3Ii361BDm15lMd3QT2vJ15HK0%2FtHnjZhqgPh8F%2BRIemwgYq%2ByNl6qmNYcpUn1EE4%2BympJzLpLe7kpSSDg2CwpgIocVWAU8cuOG9bR%2BtrRuNmuASw3ZQeKsfgc7JexbQBxaT6hOhJ6m3ClK5SckETIB6vek3AOw9RP3t1ogwhtncywY6pgHE8KSagB8lYyWYtbORA14d5GvpMV5Vm5sDpvXPlx4vCl5EVlYTo4ilGMilcdp4YPs4xNF7JbEvx38ZT0AMMSXrkMBkcLxzYJEHsVwn2TyxkJMblId68OLRCxSDe8wMzCkOSGAQpVEfMhoiFWP3%2BkMrc6WWejdg7la4DpYvEfLTyssjKP3PKXjPM7LUkQYiphtvTBl1Aqq5EjyvPBmW3iPKDbC%2BZ1c4&X-Amz-Signature=4df53e4203ab4a28b52ea0f22540af0cd796f3aa010a041654d4aacd6991dc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


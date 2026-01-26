---
layout: post
title: "코딩애플JS Part1-17 reference data type"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
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


![codingapple.com_course-status__%287%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/bc1e17c9-b1dc-4a48-b043-81ce61ba28cd/codingapple.com_course-status__%287%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SBDLY5E%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICH38hDvMRY3PvOY3b6PghLjQsU6X3CuRBq%2B%2FxswYzewAiA6KoiQzbjvUOvmeHHlJoBa4jzJ1yvGvqd4FIxYn1K9Mir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMuF2nHQPtpUB8idAKKtwDqodpd56yUyQC8yfTW20nFPYwSgUUU%2BWik8OF%2Bd2Q%2Fq3XVS%2BpByq1PQwDth41jwNVNp6%2BKhyGtzKo555LfIQoxh%2FId3IcG7lSDyAmlsPA4fF7tVMoBvsItyUJpkJY202btnA6BUOtLDyb%2B9V3U9k%2BobPaegtgWUJ9CsIDRvmniMeARl%2BSjZItaFHEvEdR3S976fGMe3tiY0oIG4gelweseV%2FyI8Hzn8Z1LWY9ecL8Ax4yjLcqvT6UEsRXnx14QWNC%2BkDsbegJivOY4EcOxS%2BBITbgaQ5Ztdqak6JU851H%2FFs4YtcS7btJS11YPZMj8jRGcHcFQMzU%2BKoaIk56QUtxTJsehZjB1LWwceyR5kW4tYg9jOhwLkBDxKQ%2FPHXwoxDqQUGkd7d3GQ%2FjdiXp%2BBWAd9qO8AsJ7RStBjVopbXDt%2FuVSSaeki3ahKEwc%2B%2BmKbL1rn3KKJXVrNyO6d%2BZr9wOkj%2Fm%2FwoTXmBItTD2zFdVtW0msII0CJsHbrXR9tpi7aU8RYYM%2BTiI86CxXi8Z%2BRkdOU3AenZ4LbiRtfC6ybntfr1RyWPDfZKO6jMGMRt4md5vxP9usiMNliUryOhhIommh16ZWOZeobEnqWwvpLCnxUzSnZeOPklisZQgv0wwh9ncywY6pgGpv8Y06IZ8i1LVcYGWw%2FKOc0omJKJTHKDU873P2PLeb6SQO9piUxMn1h2PAdItpHhXR6km2x7nfhDVxGGHNdiFSBNtW6TX9QVfl1jXqj7sH2cm1N1PXK5cIA2g2tFjdK%2BCGgyIXlGLEtnjAfvKCQZkEvOKSdZ3DSfO3ECWNDOE8wNYbm7ory22rmXhPBNrGQh4i3ZToKmvCQOij%2FVrY4Knhm7IfgQC&X-Amz-Signature=23c549f642c7c69503407c579c6cf09107b727be57c107316d42725d9774a603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


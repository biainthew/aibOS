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


![codingapple.com_course-status__%287%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/bc1e17c9-b1dc-4a48-b043-81ce61ba28cd/codingapple.com_course-status__%287%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU6RAUSR%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDX%2FEHXc0VzVTFHbPueD3Rx3W4oYi6CWByeABrRqOUlKAiEA1hB9Z58nx%2BwKhzj8Bce78NR2o%2BSHzc8XpVxzD3OoWH0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA58d31KASlA0kEQSircA3qk9%2BLjqZWwhGpQoXcQ4MdAEwhJcfPYygLbI6h7V%2Fl3pgI%2B1OIqjAvtaFZb90sRzd7atRB98ZmxsU6%2Bowh9D%2FoikfktoYLu4T0qcd3051ngoVnxiUSWmsEJqecYXu78TI7hNRvgvUOnEe6ExhiL5IEG7lMmDgaJDgDluq1gXbq4DEJr%2B75TXMD13VH%2BL8lDZRl8p%2FHpfxLx3yIjzAf%2Bwf2DKTdAFgGV8mcx4b58GNv8gfodW6pSd2GVaWcLw%2Ba5fxpnhBdh6K80HQgSFKPzjWV%2BoW%2F4CeswC5z7WjG8XZgSK11uGsAoVVSd6clud7VLsl%2FPkCu7e%2FfXHWCevcoP3SHgni5Vnd45hXFn9iCTSYIDbq7mcsOqW3YfZ3xBeicAPIA6DMCkNvdGgThtiZioH2KANoiEL%2BRhtSIoZ1bT4pnB0uuNgxcjOUBWfFZgnbqrWnaInVACIvV86xcINL1RqVgOK3i5YVE9NiuNObUPf%2FzPdQmVdZaGkJFhcTJWIFi14KnCwFuXFt%2BCsDIDRGXMwryn3uY7IVD2wgRQFKsrmihLUJTFL6fc8ZMjwSOpq6YQozO%2B8FtVbyW2kPc0viUtSLuAPC7eMcpa8YMGM4fPLgYIbs3RL0Wv9pM84JTwMI6a3csGOqUBteKnculFCmJTkI9PcwcBI%2F7%2FBINU%2FxResaRh0l1WalSDZZN79%2FhjJBpoiqRUcIuxKLNBTkmu4WNAMH5UMcu2Sd10CCll6MLQpwsWttnoynrS%2BURKjXZhBQyUSn2JpleYQAdgqu0shPAGmB7X9SRLrn0JCMIJTKg%2Be1kw8v52WpTDfNiyYbabxFzI8mGDXJGnaz1t2G57Dxl6FdXa0ORlR5q%2FAmBA&X-Amz-Signature=d1c591ec17a5643f6c6cf7ea820b4559918d294770b87c4f656ee074847a5cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


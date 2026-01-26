---
layout: post
title: "코딩애플JS Part1-28 destructuring"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
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


![codingapple.com_course-status__%287%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9e5aa69a-2d8b-49be-a2bd-a21498716523/codingapple.com_course-status__%287%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q5DXRXS%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE%2FY8Lu2YK%2BmPMsBN1u5ETTJo8BwKF39utUAQrdWaciXAiEAwehgw6T4rUpvjUwCx%2BU92UZ0%2FI9QrvqDRDBWEVm1RbEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKpZrOueuq4QUtG15yrcA4%2FwKb6a7K7VLj7OTypJ%2F9pFRLdbtuqL3xhwXxzsO9DA8uObbtD1Xrt2XQYaxJYWZ0FfW22qbfsOqLgNqAvLKc%2FCMHiwpPqxNqj4aZaRKN9YXTAQZku3UkfZ4ke8G2rYXllGkgpq4Xy7WKtJccS0VxYRor7YtWH6LEWONFZFrVAH8%2FsVzwy1vcZkOLfL5uL1iV1%2FrvlhMNv3PuhoIO9xSZyG%2BjilNnT5WwGUnpm2LG0QkAg9it2RFc%2FWGU5voNv9NWqtMGjTwD7wOViSADYZefIa6YpnUUqcmHOvA1RyPXvrnAzxG2x8nKyP%2BTIgqms60iUsUoirbH7bbf41Rs5PQLSqqylcjYPqDqFX9NH%2BO09or0a3WTS1z8H%2FnxU1GuBgI0x856LXQXchQqzthtaifC9Sk1SciRxvXOKLgync3TGYdL6VeXRSyKB0vLDR%2BQl5KjoqvtKu2ilF%2FVlf7mk%2FSixAE7iYS1dEA3kgbJbWj0sfwM7KOf12oXhPakn89eNFDOED5xOkJN0OvIHeNma7C43qAD8vG7XCNdMWl4nNzxjBYY5xEauLi0I9UkY%2B1O%2BT%2BvAwfnPb01mMHSL7FHTxUIWH4R47Q%2BGpvnFxPdnyz4NHRizeuMp%2BqB4yLyLSMMz63MsGOqUB%2Fv4wdjQQzjcEebECr8QX6tF9JZxJfG9UkIAaUYIC52bLuaftwzaYoGlWKK%2BZnB9BcDNxAcsHXo0Xv9OqQn%2F2%2Ft2Hl3p0z5eeGEm0bH7sEJWOTjfwWluIo%2FbpRq8Ua98eCWEwh4buO7CVGIeQ1UZwbE7yMZhCZe380qzyFXrM7T17F8ScfRL5n%2BFeq9O%2F6GzGC6hFsSoozVH9Vj7w1gSsaTP%2FXP6j&X-Amz-Signature=073bb22c6af67b45cc2d10631d51bb88f37c6d9487cb5d36c1f37f33adfa7971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


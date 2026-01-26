---
layout: post
title: "코딩애플JS Part1-20 prototype1"
date: 2023-07-07
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### prototype 특징들


### 1. prototype 은 constructor 함수에만 몰래 생성됨


일반 object 나 array 에는 prototype 이 없음


일반 object 를 상속하고 싶다면 constructor 함수를 만들거나 Object.class() 를 쓰거나 class 를 쓰면 됨


### 2. 내 부모님 유전자를 찾고 싶다면 __**proto**__ 를 출력하면 됨


### 3. __**proto**__ 를 직접 등록하면 object 끼리 상속기능을 구현 가능


```javascript
let 부모 = { name : 'Kim' };
let 자식 = {};

자식.__proto__ = 부모;
console.log(자식.name); // Kim
```


### 4. 사실 console 창에 prototype 정보들이 항상 출력됨


__proto__ 를 계속 까보면 결국 Object 가 나옴


object 자료형, array 자료형, 함수 자료형 모두 다


![codingapple.com_course-status__%284%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f5a0a2b5-3c55-4a9f-9a37-88508f8e45c6/codingapple.com_course-status__%284%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OGLFJE%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDaFT66jJwvfi9kYZdLVU2mz54agRJOk%2B3voUYRt%2F6wmgIhAIekuFTKkkKAMIBSuvY6IcsJaZP8%2B%2Flrw9MqJNE%2BF3oKKv8DCDwQABoMNjM3NDIzMTgzODA1IgzyG%2BY84tDPoGLhBSQq3AM%2Fd70KrII4%2F0R1MGWPmpwCVDN9OYBh3lIPhzO8IbMbIYiiUfuHkd9mnDyPD6giOd%2FXoThX%2Bco%2FcQ9QjUHN1he%2B%2BSu1i%2FXZWH9W4hLC0SwUCJRk4yg5Eqb6%2FbQfyA%2BiubWsM%2FeJVsj%2BsLhjkqJ5cUgjrxDqH2drab0K58ehd2%2F1FDGZ0gxrrI3VTsqsNURQTK8OU51qTML%2BhnPJFsoPZauzSfXUyhfcu%2F%2FUN5RCYeivgIii1Uwu8c2AyLVpusAyrfgMWMjlqYnfzTQ%2BwR1aXR4R1papg5c2fsvH1eYtqgTazZjEAEXW6tjbkQtJwbyYUpfqbbKuEXFS8K1Sivx%2BDAOKkVhjo5VdlbbE7wCvgsFWvzGwDe%2FyMfNnmTI5PXc4ofE%2Bop0KAO1sPFkfmMRM6ZjQOwrQ9SLNa4E%2FhwzXtB0LxlOZhRL9eokknrMxpGZdkqQSjthtfJydcez4cXMDK2ZnEf6XavlMokrNLvQj2iO6GMvYpEnl7gYSg35cZYtMRr4pMNp4Y5UAbTRoX7UVva%2FDHBKPVIa5oldTuMPEqxXlZ1yiThybkRtBaGlKYTIKN%2BhKLB%2FzkGRMqxSbHQBYdYozKj%2FTsYtrtljYJgyT3Neuhf6YbcC%2BFHxMfxZC%2BDDymt3LBjqkAYEjSfoKaAxZ9RmTeDVQ%2F9TJ%2FutcpC9Qdg%2F2VgyBJUjyu%2B5R9aY8Kah6DTy1d3d%2BBC3j8yy9OwRjtrbQw6Dw%2FR1OKvRHKaK3RpTb2BZwB9sbgEQYzL9LQu9ui9F5KZYNDgROa46Jl%2BQiTGL7qdinjw6pm3QAKZVMabNQAAbXQXh3o6NwoDdRluBxE%2BV1F5D9tA%2BIkZShiTNI6Tev%2BJyN50%2FE1EmB&X-Amz-Signature=b7db9237e0c2176b16280cb718c0cafacd49f1c68a8c778009d7d8b9ec085760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


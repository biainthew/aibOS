---
layout: post
title: "코딩애플JS Part1-5 arrow function"
date: 2023-06-30
categories: [general]
tags: [Javascript/Jquery]
---


## Arrow function 을 쓰는 이유


### 1. 함수 본연의 기능(입출력 기능) 을 잘 표현하는 문법임


> 💡 **프로그래밍 할 때 function 문법을 사용하는 이유**  
> 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용 할 때)  
> 2. 입출력 기능을 만들 때


### 2. 소괄호 생략 가능


파라미터가 하나일 때


### 3. 중괄호와 return 생략 가능


중괄호 안에 return 한 줄 뿐이라면


---


### arrow function 쓰면 내부에서 this 값을 쓸 때 밖에 있던 this 값을 그대로 사용


**쓰는 핵심 이유**


일반 function 과 용도가 완전히 같지는 않기 때문에 일반 function 을 항상 대체할 수 있는 문법은 아님 주의하기


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQXAFOE%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYzNCCbqifdQgGcTMaftx3yRZXJFFPhDQXzJkq2Kq5TgIhAOh6uPAu%2BWJIfzPf5Fs0j2Jmq8IjrcNVarsmbDtUm9mYKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Bh%2FFWER3uKUBSPP0q3AMJmqZKmiqI0dBwojGmNJLryBOnB9v1EcuzVz3%2Bgp7GslkQB0iLKBjI1ExW9LgMgjLD3bkZhYU8qsywNCrF01tLrQN97MtG8QUD4Roo74Fuvs5faWvhhRC9SVwXokkRnhA%2Fc0tkam%2Fbz%2BXXYSx4aqdJ9z2eWrPr2rkfN80KOP1npp8Q%2B18R5er6VVByOavWzPUa2U2uscEPEbJWM4bhs3pR9%2BEiy%2FqhDxVX1802vyJinWOjEzylMh7MFOJmskiCZG%2FeWSLT8kufMNVytkofbRamXQur0r%2FMG5EXP3qPXlOjx9DxStlC63TdGwZBCUHn%2BmKiW3G%2BANWMaIJJQzIkXSvjxMR94sDCd%2FTDb1gdHUwrdpwS7A22lsbJLha72YhqpGu28Lq6NW1A7JfrF3s3r1n6a4ltBwAX%2ByQIDGvuLW%2FdRHwu7OgFSoAQU31KNZsKaTPYH4Ks9UDxdiKFTH8%2B3JgCYRrPhyXnyet5kumromNPsctbxBYzsuybIyV06hLl12tiMWHbWbI%2Fs7fFezJc5vBpJ59D5recqLPejNn%2BTwHIw7l3isU70QHDUzxsklYVi4S4KxE4ONICF8Eoa8DTvj%2FAcHD8SqjrjGoXY6YRwtLQ7Smq97d6IUwxxZZ2nDCd9PvKBjqkAePHXvheO156zzeqGG3fjBRa0yUkOdQS%2BZ8ptq1hWSDI9k1eSkTG5xiYhYxllXnuZGYp2eaUDGCGYQQdMHKG6NTYCOU4vrKX13KjiT%2F%2F19okyyKrBaHmF%2FPV26UOoxxgNuBs3yGY6pWhnal7sLPCM5pxHfxa%2B5CCapsso8%2BDrdN6V6bKOidQPDpwwzkcmdhV8LjE4zhDr3Ej7UrJ0l78mLnO%2Fs2q&X-Amz-Signature=19daedd678ba285f0e209420ae67e760921097418692997e699d8a12e3d52af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


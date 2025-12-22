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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNVQ7KM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGVKcrhgTqtcKALshGTyLOKyVOK3gSJ%2B1L33dj6eD2rUAiEA7oQNa7aQADnZZVmidCqtkBQsKXpQWf9e7l2%2B86qI5JMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2mA4pm0yDtxZxb1yrcA8zRYZRm%2BWLBEGtezJ1H964wkueu%2B5PlIa6vJhV%2BSU8AOq6IRd%2BxrR1eGYPyswbQAhh0SsERBdIoDCThjVMw2IWhuPpSOmXJeX0uYJ7fW5HBvVgqYasDnIJFUxUH0ULvOl8toD02IVZ3GbbDU6KQvt6zVUecaUn3VYQRbViDLRufe9O9XySvUsW1qJSZITEfpqkqAf89yzuZBt9haSxzbiClWiUA1RcZrZYf3B6eO7lWtIHKfAyLJ2%2BrVD%2BrYS%2Fz4J0SdqiHDMgjJY%2Bydt5Amx9P0hBiRnWRGnAMXIOfFMbyH63KODjTxvTrZ4BGxRPCHh8Xu%2FvtkaK1HT4ial4LzTxe4K3UIFJgCRATnNbYb%2BrEDKw96YcJpKdFtFPGwezBUVAyatbY94d5Tt4jI9AHxbpmQVsjL9unGnKxFg9wgtDX4G5Ql3ybluNvrF%2BoyzmJdyf1Mh0rfyhYeZICIDBTLIdMWSd3rBiPrzq4gdwSuF6ehd%2FEXmJPp1F9EXKyvBZOdUHsPcaqvcOzqRpoFnkWzXN9%2BJ%2BgfU2uJZgS7yDZKrDiQzX0cTEVNJP%2BHZyLRHErRvYwfif0TC0eExjfuleQdWnaYRCmAmy9Y4OM6hjqYKTxKcD0jZeBy6stgl66MNT5o8oGOqUBTAPuYpu5e9UVdQVXwV1k0%2B35LqXgADgDFwW7P6H3VeD3gYNHIFCU6AZb1yfMUIGrPeqSHhXSqqzFzkTRc8T738fu9%2BFZSS2jjYJJa1Emwdgi7f11e8Tsb1nTHzWqJyiW5%2F8gyfvJtlRC8Mtg%2FutiJDkYZ7FeuQt1LUXBzS1vORvfCd%2B57jcFpDoF3gis%2FudVSGBPtwvGB0XxgbxCDOAx9HnUHN4L&X-Amz-Signature=64ceaa2052addcbf4f42b6232bb79e8f21ce62e56f9459db66a512986d28eb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MFN6M35%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA6qJVJk7P3%2BTMlzux9xjULN%2BNjaqKEyAk31No3e07nAIgFOyfjDiIXq5oAgEwRpddtO0ZaZcpovhopNTAfjWJOCIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMh5kBhpqt4SZq10OyrcAwTuAQc%2F8A2V2G9YNcJ%2FQ5W%2FULO8IUr5BPolHdsdrYoqDNtZr1cZha3m69EH3DPI0O5vKpQfLYTD5y3jGGAp8XVfGAq9aMqdpn92lAltaCYlDEQ%2BsB6upkXJbvHgy%2FP%2Bz%2Bn4%2FA9Ao9Ix0Sj55I%2BTbUQZ1Obm%2BC8s7It%2BDLpFv21zLEvZRpQiA8biXmEAtH1inNh9Fv7jJ7O3JhzLYyQbPQe9Bl3yDg0x101aDF5J8F9rfZAiSqYDYaM8ct7Wi5WQ9tcHuFssvIt%2Bc1pwWR4alpGNWF5rvdfiYCBmutcmRMGouZ7SKLvaQCT9nmf8lqimBth6lOyMpsjWIuHziDgWtc1zvcnHEzenoH7qT7xz2fi0yDRjdG2LjAyclYla2sswM26wWmKcx5Ez279j%2FMrwsFQLZqf%2BMtdCc8P2ys2DAVy6mtVWzwwJEq6os0bQW5foO4TxKi2VKV8P0L36DTuRmSbgeXTKx5QFqT8u64zGV1UtBuhuyKLh5M0bVD6wdU1ZJs6fIqCDJOoI4nJfkksXzEQIyOLz2do1Hh4V5ZJ9197PcfzCI%2Fsn9%2B63KgC6wV7IAvKUe8YEYmjUlvAQV0Mi9e%2Fp9TztefvvoeFOFQLqNz5bzAWG3H%2Flf2l%2BspVdMIie68oGOqUB1kyXrU%2Behvb58S03mF8trMcePqwTPghP%2FlNwLYzhua%2BnRtehf8eGsJ23avpwJtG9Ij37BP0vctWS68FBs1ANoLRwLWPTaNfzZNZaDVbttXsJvJB49%2B54i7l0SQ02ryBVrRIP097mL6D2agp6%2F%2BbUH7pn9xLQjrHbgSFwM%2FxzLZjgp%2B7kIJtYN%2BxzpG98ag10jiB9kwKet9MSqnZV7N491Ay8JPRW&X-Amz-Signature=2fdbc4a5b63d91a0e50ebcc899501ce589ff4350f14d8a77b16139787c5fe23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ATISCE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUf7DaNOGahs7%2FsNS6t%2FYhIVIOKzOT7axmoGiXXM042AiAjL6VC9JjN1%2F3P%2B6O2guZA0bfYTVDyZleBHEOuyJqPsiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNq7AJzpQgTJPvJRKtwDb0n3Kir8gbQDTwWZNJCX56lC4Au0sFDTvjqbmBSh7v0RdX4dL8nC0peXYMXdHBf0mQ0Lva9KcxY%2B7TzyiWEl1AzqFIzDtudqOYNEDxcvleqC4kdSkfLra%2Fv4WFBjJVQPWsweWedHTBk0N9O19kwJShfmQUdnWUKRA7Ns%2BQw5oG8vbR3QEfEu%2FlBLBYMCDmVKLSNvHNNQ6cT%2BvM%2FU4jtf68343blUSVxIwBFaA1oQHA0ylzKQWlWSQnXZcUQpJGV8FWc6wk6dF5CWRk7h0beUsjMxqMkjffi2Pr%2FogTLCzNXtAEW3HzE%2FZsMJukw6O7xXtMK9frJppRHMYpPE42q112xWApp%2BfvKxjExATEHsd8apVz1f599A5wPzABLm26bgef0rG2xJUmVisCGVruObknZljGlM12ILdnp%2FR29yEHrckaH6K0nrPq%2Fzbfl6gOzHAstyi%2BO%2F4yEPWaLL2MQtFnDalMDK7Nv0TwC7BuwZ%2FuTdBMLIkuJPLbtDoRK9FUtxb6vZst%2BkQBlMicvfUiseHTbzqiYwN6owh4mfxkzK6U4S3T6xPm72Kkh%2BNNW878NQ7Nx4Yjuf9KVYaEs2pSNvWblVWUmfDLhgxMVOItc%2BoJ6pOPVbD8jzbO18w7owl%2BG1ywY6pgFT5UwAYD9RO2YtlFFJ7RYUrBBhrzEax5kCYWw1QSEwg77rT2glW9qrEZK6zMdrLoffX5%2BLEt67CCf5rEwxEHJJLWVrnYPrdSSBw62sD2C%2F%2FZtKaH%2Bf7eCu5tklX%2FbYfz%2FS%2FU2VtD35IVAefeNonaCnGlKKJp03CG0yXaVqhCMTdhj79lvf1jiQ7JirlJMu8SKRtwlSM7%2F2L9T%2FcKy5xFVenprPh3KG&X-Amz-Signature=fa08d9cab268bd664feeda9d198ff6ea2d4a1cdb59827580e4bb80a4b996d3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


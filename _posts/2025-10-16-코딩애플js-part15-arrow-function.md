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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XEUWJG%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQD0GUNDO6IO544fhfIAFxQuYHh5fAWHatVT3YcUbHOOOgIhAJY3HmJqgB1IWdkTT6J8Ay5ihEm%2FLwo2XLP8ERUT7vk9Kv8DCB8QABoMNjM3NDIzMTgzODA1Igyq7Az6EliNHhPlc%2FEq3AOnHbnD9dvKui4SMc%2BxRNX9n0NXsJzbEuZCtbSmFhDyVGkBRvD%2BdA0ErUfiDFsyTzZPQ2vsRxa2uqxnZANhKRr92%2FF99n7rabZtzNmuA9xjiUzFl5lf5wf2ZvHiefTImHfjj5qnKBeQ%2BfpDRPortOhE3SXcV2cnGCiWFsoMN2yywtox8B0yHoS%2Fd%2BGTmkHucKPkA3ivCFpR3RjdUuD4uAR6%2Fg7PJNTqDgHNs4dGSbksM%2FL92ix63bv9zyp%2F7WqwviVama6VCm1tE4xYir3mzdWdIlkfluBR3Ac9LowNJQMuDfGGbo57JZk9UqJAUa31K8WcQkS%2FzmZ%2BDqZFkIBckV6lkDkoFcXzPYeJxWkB7YRffZIECziGFPIi7UjCP%2BG2YqxG765E%2BVyyV22k5CX5Ep09fR4a82yV843bn7QnEqTki6CZIaHdAGkKLmcSNaJGB20QLH8D%2B1AHUGvDNO%2F0oPKvWsvbUajsTUXrqLKA4dAEpntOaHyFuJ2JACa1wnM8aLmZdc2SJ0%2FDazuqTdUT45uTwlnaBeOZ3%2Byuq8C3VlgF1LUMXoqRWosZ8XSSu6KQsdG%2FXMe7Hm7zAl5BGKRAtC0WEfq1XRyWi%2FGwE0y8Ie9J7bolsP0P1Qun92F88TDDmObKBjqkAUTGaH%2F7u1p7Zv6TC0Y%2B17CgpTxiSqNnfzNYP68HUPmnRm8TywyDUMOi0EzwJjARPfI1L82g5HiXqFHbDaltjz38ZAfcIljvj8GrF5dnVmWJ%2B%2B97xZjOdTiQDyNTC85lcHU3DyJb8v9%2FNeqMAvt0l8Ry6ZhEVXrsEDtLYd%2Bnip03By%2Fub6GBcGJYmqq%2Bub1tqg56hMxYaiWEeHinHm79UBTyFuIJ&X-Amz-Signature=8673a8c54c20972f409a0a42ac440e2b4e112bb6b137914d9b6504638a2dd9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


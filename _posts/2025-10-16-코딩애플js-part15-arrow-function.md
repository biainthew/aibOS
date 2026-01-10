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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXICXFUC%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKXdsjkpxgJjUCWeXL7yOVmIsLKJwr2Ip7F4y8HHmXQgIhAL%2FTW8dfGf2XXaceWTUSGgQK1gw99BJrk34vJ%2BpwJNmdKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb37nkLy1VuIq7U9oq3AMIzVpf2zZ5x4bKoqPQ5lMY6aTKO9f3uQ6kwEmz3MKN1tkkED4KMk30ChSDmNrZoiInR6oDrQlDR%2F%2FwI2dpFq6sim8EHSXacSjum%2BPo%2Buj2L8m3hbqJbrjnY12aKPyMXoeYcscpfjLJ%2FE4%2B2T9Zr0gPGDUa4h8J3oXWcsa85BIvnjVxRIrhaH7dkhtoYpuIWJexbJXO7FYWiSnZLAzGieVTQVy9JwdIY7mUE0MSEHHqe%2Bx2VKA1tKWZi71%2Bg2z8PUTHFJk9JksyJ5q3oTS3Ql8bbNbm774QoPoBZ2YFGjih2rSVqurKvnuhKUp%2B%2B7xZKPhKy%2BN4HNCiXHspjoKAsjw8Z%2BJ2aImt7AePtQ147Vscu0ilPZKNOIsAFzJpBtFnMvbNDv23TsWlg12RnPKLJZOVhXp%2BjYlqDcD3k6j1qlYjbdC2UJhE1sYDikVjFtBGQwhQ5txk74jBB1vLsRfs8d5JzkQptZj9YR1AjCfv9gV%2FlQAdNrnkKNhQILsjWuLvOUsiWl34nxgca4bmUaGQr4gFOBSOgORHliQtlWlGTzPobN%2FxJPT%2Bpu7ihtvtMB4MlsrW%2B1C13jQi%2Fk5PYSj%2FThEE9aTaGtoSLqTIVpTPqDPcIVpjfyMwwsr%2Fm8th3DCgw4bLBjqkAeXodPeniQxUNXml7bH93x0p5iLRTt755AAcIgmIqetgCTSmKab%2BgtRtr1rCma%2FTyAPK017ORfVuYQbo6TuJ4yFT5KtiwawegSmjXUExI1rHyfuYvNvQcdLQhjY3ggUhLGpX5izvHRf%2BbZe70%2BbZditI8IuG%2FopYx8zOyCaU%2Bd1Vyw0cgqGU5EiOEIcFwomACFcZWrtMnYOovVgDmjRvxVFCkPrN&X-Amz-Signature=f402b474c811c8a5ab95831796bda92539ead42279f39f7be016e10b0dd4b32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


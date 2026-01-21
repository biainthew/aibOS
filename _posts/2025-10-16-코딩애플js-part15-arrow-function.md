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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BFQXYK%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqnupjnkT6rI6gTxirbRHHDVyj%2BbCjix1Pe9lMBav8wIgeGlu8pPPT%2B8l2tysVA%2FTASDxjyE6YTyb1ivEwT%2BORAQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPZutwoJug6z7eddSrcA%2BNkNa6qlJUMeIRAJ3CUUWmgYIjLiMcRsgl8psTPv%2BCfxPObG%2BgzTxMvgN8UMJ7YRhr6X55uMdd%2FsQbTLoWdMkjywiOiHb2VZhOr%2F1AFsHRkHUrtiHlAbeDUfdPo4INNb0e6V7jW617ziF%2BNq0ixsOoNhe3QURBL3zMNgNTRj3YAPoS10mEoIQIK3f0X4AWhmJdlr%2BKuQtbBvSIX7bLaHfo6WxThH2K4q5Vr457JrsE6WoToTRLL5UWGo1rAAKf3z%2BN08zlGhPATcKYXHJUReZdvhzV1lhnI0ZUkx9s4U6dRd92hYwfk8nRxHAmdFwI%2FnJAEBjV8clAhJ0w5CBPlVOlpLh2ax9jp8sdSztjof02LdZ%2B3YuBm1%2BeXkzBolyIw2C30jJrmsE2qPxOImjYWhXo0AvioshoKPY7U0jboCOqt6zdo%2BwYaTzCuOeg9UpK4EonYpOXSQ8XjSNWjxypwsbX4dxIR1z1iDPLrSp%2FbvQZc84bSzbWArtyLj1pMjsb39IFWhT8B%2B9%2BY9MJMS8bWgc2Yl%2F3J8Nu4vQJ4RhAg2enxMkaM0ayDNBFLEQyXu5aGU%2FIa7CQcOw1gGYRDIMONNBZpvs7OzwjYl49rAKd16D0dhCNvzuFxFbAlSiHrMPC1wMsGOqUB2GC3o%2BMom%2BueqBgk8qHm4QZojvgd9CuxzsWY0OTBugiz%2BiE5x5PRGba0m%2BZuqw5BL8wHJ2ENWX2%2FFcuIc14wxnbJ8h%2FRhvzpW01%2BrmT%2BLN1YlzA%2B%2F1vG5BMpjpgE5INDXaI2BEEwYyRhX1UIHePhF2eO0b3eeTfVkX86UCgLVGKjTpzOSBK2oySjZZlPv%2Fa0toL7GBpwHNgI%2B96LHQXJHJFtl1Dh&X-Amz-Signature=4c6eb4bdf8fb5a2af3663f53b86b043db4b8d9f4d3f7827127f04d29f010819d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


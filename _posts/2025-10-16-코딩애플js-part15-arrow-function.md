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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EVMQAUV%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbBBVkusb3YgBOu96Ci4rxCtj0WiqCI4HUZkrENxV0DAIhAOLMyr9xAmRuUxh4P0SOgfJCKNAgpDY%2FY85SSVkLvq4cKv8DCHkQABoMNjM3NDIzMTgzODA1IgzHBUcSCHHEzxkRFzUq3APuYB2IC0B6WsRFdO6s%2B5EyQ3cP9s%2FTSOCcKYcpBRnxuhJ9oC7Ijh0JiQcEmUMEyhqBT9Ngc2dM5T%2B%2Bg8mLxyTCjgg7igsWpjsrlkhbBYm57SWQVB6knn4w85tNkfREal0ZBB7ufKmz2CNGCWcXtHOJnTzeVE60Nv3JZGBqgDMB%2FN2c2fEjyo4dhQXkmbkJo6VaK07UHrF0If83hVTDK9IlrEM%2F5gPVFUdcVcf55sAu1x429wPyDD8EYwTWO7s0hEFfeYUXI9BgVcja%2FebCdj2eEyMRm9uMZor7urhGliTV4CsRWcWrqBqO681Vuez0fhGfUySnCJtUeD15ip1eV3fQkRiJbBzpq%2F0rog8A9y0jnxa13v3XvP62Gp1%2BmZfXukQIHztiU7ee5EZcSbpFzXRH%2BRFOiDj4bmM34jOlqAzFwzooMWtR7K14CU4Hqp7pAEX53AWmaKlWXvFlrXl2HnFaePa%2BIltbVW5sAlMjg5bErh8GPSOPwOcRO55QXThGrBqsQECmpElT9Jrj9VKcEs53OFKDBkzJu5msZrMvE0KftV3yF5qCLGhmE13KUtPXOar1mdE%2F06vBqEFup5NoTqBAzEgw3qULbs5MihKEO7HicsefeXeCCi%2B2s5I8TDDS68HKBjqkAQOLfd0F%2B7NZDm%2F73OTmjKzcZRmF%2BZlTFr7fqTTR8qgPPhycePpXNLAzBJlKCpg%2BuXHsUZtNc23lo7Z%2FdOUqPEAfYeNVEd4tEPH1u4S12%2BO5t2%2FgxEuxLNnU4yk3O2n9qfmXMYlgfvkJbi3dw3LBWFPUSdZ1rtaBtUtmh4PviHjYUhev15Ub0yO%2BdHp%2FnEZuWzvmK6ccrSwpa7M%2B6kUKbt1mflYe&X-Amz-Signature=1864b1ecad8c1fa272bc44682a75a2f5c5706055edded90aa2983650048e3f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSTXIXL%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD1%2FkcRP6rjxXMGLUt%2BHsgnVZKb5HcFxfB44%2FRclxHRTgIgNNY55NEoVECW4FbEqtLuRNpq16RzT%2B4FdFQJb%2F2kTYAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFzfwcVhvxcYrj9BSrcAzNv%2BRxH8TnrDAqaimlpIWZo7nrguvKxgmvlNZZQPvvL0ybnVD9TUPxY6ErQGSf7DDF1idv7o6xS6Q8CphhtYikzvzz%2FMyTsoKWgxPj0N1m%2F%2F5B2W%2FoSTx1Anq0bC1d1%2BnulCKq1CXGoCgYbavvx2wOf7Sjw8ZJ3LXsVMC%2BL5%2BtZ2qYBeqr%2BS4Y%2BakfbwH0zIMOT%2BTU2GezTIqTORUbidggnEdtuiDeJZ%2BtSzyylBDqCqQncKYPmTfCWpW9OfNfKyO6%2BBT1%2BKsdvqOhxfitjDdxUPMTf6PsbduAX7o%2BVmI0fB%2F%2BedeLUMEbsZGJre7YNxq22qXJNCEFGkWVVos7Ok8nagIzXxSd1h3ILAe0RrrN3P1MNKyCuPRcABTJYWY%2BCGeSMX8f5hKPpxqcIe4rmujrNc38mlp5v543Ti6TC7eNsnSYYBHdnCS8s70p6iX8hlrN0V0pC4p6s9l8cSWhyiR0bVSc5Pj9P9r2IFpvhBrY3WtxUZo%2B1DluaMfhJl6IKRwvwOloUuazObmWszuUcu1PWI1EiGG1q6%2BKFE0wxFptEKqWmG96ggPapLkduUTWRzVj7AmsO%2FQeQYeYcz8C%2FBPtSYWRTYUOw2qGG9VyRyrcD9gV6ThbQShszdWCLMPv4o8oGOqUButapSbv1%2BuKXSVvD9bZPXIdxpZMDqy9SqbS6RnlpqqSEfEgUZbbZViPgwJnQQYVddfT0i6mHUtAndOwQJ7Px1AHm2oboTqN1VjqXNMcJ%2F8YEw3wTBqAbKBAW67K%2B8HSSOLuuAQD%2F%2Bn0op4pMNOzTB0XTlV%2BAwD6Nj1IMEt8JYVfAsvj9BqPL3%2FjV5MDDiZxEP0VcOTaZ1hRpgCu0wpcBwUwJENj0&X-Amz-Signature=10d795c18c442ce1a0340da2e928044eee4a7c7436f1f2c9e1efcaf10dc7be14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z7BXZN%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAQ31UFBrx0S7taaVNMPWmTFbUGvfcFnoWFSmdR8YejWAiEAiT%2BW99UGd%2BKRVEXCbHSL3Odv1NU6EsFt4bpUKmB477Aq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDCvh0ta2m1cBXUJ2sCrcA3L9BNxUXkQOvHp%2FNiX%2FH8k8ZWZxeuICy8ysVYRB96QkvCFFJG%2Flk%2F8DtW1kxgvpHBUqc0OHlpSdGpFKkHHvUfp3eCZrklnyY7BThN1aT6pLad3aXKO4oZEgDsQoPMmGsrtxl9sZEk1G1kjuGatshXgwBwh7eijA1hnpnEhA3XJwVH099YwgcuRBSpfk8sXPcpl9MO3BBdBNw3Cvz6xoZlvj%2BaelauhKsHs2onAiD0sdLkIXCWUkEDQiS2sRhnnvD%2FyqGOLqYTT37uexZSNy%2B5npo6qJ2CDouPqYQ%2F%2Bx3FLOzYjkIGwuRHjfZD%2FSBTd4nePka4dupu3fwhvCieoso%2FCYhB9oCNP9nHkgwVnm0V02PBzlgXackHX3DKZPT6DjQC6i8pHQkNhtGLVhz5B1c%2BkugWL0mMEtRq4o1nYEPh%2FWnuWayNujjUcZibf1RtWhJtezOhBxjBNJG%2FExa90zDBM6LzfZZTCmVU%2F8%2BATXKf%2FMmFdxgUvmT%2F9C30YVZ4jNJqEzDSi2vJn8opMdbjWAB2ZfSle06yTwKKS5u%2ByXIHh82Zhzy0P8ocugu8eycMbMZzIW8Jegsoxumvh96VHpurNs853Gcgq68XOmc8PJbcGa3jYQosyo9bTUyJ6WMM734MoGOqUBLbKPanwSpp0AUbhaFvc9YUOiksxUjP0h7et02QtBdS%2FE1aF8xVhwG4HS9M9%2BRFPNLX3h9NCbFrcBXwBpb6ifsSea0BigDqZtIUZyJ9t9BEOWLQb9YRtFv1WjLPTeQZKmhwTeYItKyIqy1rQeDMjXtKI63zE56eqUAeiD8anBTnsNdB6sFr9qZrM4SxgHiuZ6eF1kEk0qahvmnAL2hXXSIiX74WgY&X-Amz-Signature=1b655cc4800fdac1f198ff5006e3419eb81ec5e64d16f16c2b32a510d0a5e2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


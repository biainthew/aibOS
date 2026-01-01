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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQGSXGMX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCPFKxtABUQsBdaCzF3%2BVZEkDFT96W0lVV1fqv0cf2NxwIgRd6PP6c8C9HuXYghqMCYtLXd6QkoDdhDG3%2FDd105VQEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIQlSMdoa%2BwhSmkxCrcA5WoAh6i377amM2mFkoOzTMY6tW%2BVfjnueSUIXBvQvxFTR8tf3JrMJo6nA8KLtOdSCMRoJ2qKvyu7jZ%2B1WdcxuhZw5AuSe6qvVArBefyiMlMVbNF0%2Bt%2FOsJmG4pNq%2Fv7aG67xfX5NIxeLyIv0FWp2dypSPClmwqcljM4DkdiR6atskdWXU19szc26G8ccSnZfIme0XViH1MN5kIdHMTC41gg7y8cbpjQwTUW5ccOdPVxBBNbk35%2BFoaim6vJTP%2F%2BENhEz%2B23QYChvYa5fViTWwRx4Ew%2Fpdscn%2B5sBit4cvjdSoSzsNYMCg4TLjxFvQnYqu5pWOhuzlQa%2B6qRMd2y8BlXJFXmg0aeglYcS1anb4OThxcNxRUD0XEpyRFntvwu3EZwQ2Dj3mZiTrYQaN94oakfc9gy9Ia%2BKYW1EaU7PPZuXrFXlF7HD7%2FtodrHxfhML%2BRfa3X%2BdqfD6984%2Bd7VH98F5myf7hmDKYfGeXWfXt96WCS58EeRAObwhgERgfqK9ivMtMj7gELSF9lHLzzp%2BDqyPQMgdSb8xcQvrFYp4Aguh%2FUT8ghzsZ5Hpxo8p4jBvWSa8anjg%2FWZ9zx5s4ylCmBWZRFHYfUpNk%2FwvsaoofvmLwkAhhSZCm4MKNImMNT81coGOqUBboaqDGkeTLUBU5KsDuhNedmtxtKKVglE7PBXNBtL6ahZ9GgAswVd%2BBWGNV1CzxZyuVSVqSKd19J59UUISTEG83ex5jF1J0ln9%2BYDSZCnf2e%2BicIFTdDAsgjKengcxpKwuYE2rB8xfbyrLrJcdk8PmipPyUtdbLMNg5O0HG%2BB6sYLVHWFJOaJuRk4rSpnRi3Ytf3YVCmDY4ker8Uhw29G0beGfCNk&X-Amz-Signature=2efb93f0c13555121fef147671ec8af436ca09bc6a23d982609e5512de98ae9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


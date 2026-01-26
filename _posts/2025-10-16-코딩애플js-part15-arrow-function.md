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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBNLTXX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCedXYOnBDZN8RoYECopD940p0tgDFB5ET1UyeV49OcYAIhAIjpOWBSWpD3FYhMLQYE5%2BhKTwChSCtIJxtz9aFFgaZ%2FKv8DCC8QABoMNjM3NDIzMTgzODA1Igyuh7jx1WGCIp%2FuZ50q3AMMpzkJ%2FUdaDRjjfxdK%2B3zxKKjr635V09KlFQAsKaZqO6RfP%2BMSGqCmQAylcTnEJ8lrLqc%2B9uubxDU78iQMHdyeI1fg0o7tbAbZTvDMRTn%2BehazJ0bVCEd%2FLR0yqd2ayqj6p3qvTPWaC9ExWAqTN4538bDBAtif4d%2BjZJJ4Q644sWuEMKWBe6dQ2hjwIU%2BXjdIZ4BVE6Q%2Bqnz2qym%2BTSZ9aZjI6q7X4%2BPQTkep5ecxbHVNxFPe8mUWeF6HLVIoeZfyBY%2Fna8sk0yxiuS61bNDYCgZRHLDIv%2FEWZi1iCXI%2FigLI8MzVQil0VuE9rUWhG703%2BvMgaknh3Rk1YsXc%2BUrl%2FMZdEb7z4wAsembNR9lAiCFqGT04SspwbJbUZycnXO5Y97txIX0DIDZ8839hclzVqi7Vi3DBN4vPAA5K%2BkDy1%2FMcL%2B8HJZgTxxNVFvPMFGDWjVNQN%2FF6P50FA0MawCOQsoVcVNTtBQHRy9EVuoJP%2BHuzKA%2FaSGa77s3UE1bcu%2FH2uRb1YjcNRLi0xwQOL%2FwH0aYI4Zy7rDYD8v82x2NDOlAPek%2FdJLU6I9uwdgMscGIkPiU44S5chNWQid5rO4KOnDBGQeEv2UzA40%2FOYpIfl1Ys0zpMteGQ9CAqRZzCVmNrLBjqkAf6fQmC7PBEmoppPyKESyRUX60inCAeaVx07qchVscayVG7fuZH0lAjmU4JU9A7gFISbuzz%2FgilsSi79l%2BNFwXJ3B5%2F8%2Fa1KUiIlXCeLSrhdQor%2Fw0vB%2B70DSnReh0vsi3dH6d5PLnPY02jw1y2LegcZg0sJTfHSeiff%2Ft4MRLQ89KzrDMePMxF44I7wc0umbZ42WerkW6v0LxkrDFahNMWh1wUv&X-Amz-Signature=c7a0e07fce125a92d81916c486ba15ada58fb2fe99876160b8f05da696ca6bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


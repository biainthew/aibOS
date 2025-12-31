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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLTZYS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGti9BmbtrTljxXeuyQCZMtv2RGPmkxeRE1xIDtLJIsCAiAcXqTgdJHxMvopSdjAB7S9CN7WqQ1LC92datF5J7BQEiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsS79YCJ%2BJC6heLU9KtwDDEPPycIsZ%2Bzo63u6hzKd459cBohv6VPTYGT87Ml7Va1th7oxQroNebdglyMLsPZcwf%2BGZui2Rc4U5xrgKKpUMjak8V8UMRY2GgudXFqZ0JpcxIQvBbmAwInGR%2Fik%2BEK9TCp7nY1ip1xfnFRK4or%2FqN5UMP7cJk5DuLc6yLKb16sxHblFij8OWeSziZQJZ6is4Acdw7xfOo7lLi88IQMGjeACGLFAuqFvczDWpHRwWlyC%2FHMlQd6W%2FWSndRhAEmceD6wpjOUIDsKTTivBpir0AvS4F6jcZ61pOK3L6%2BClW5O6o3AH3NTcn7w0LfE%2FkFvfNFu0vsh4Oaq4fYl%2BAiMvCqZGXkTYYq5AztH7iEDLp0b9crL4xVEv03MKZEfZ%2F%2FZBvXSroBf77OEvsz%2FhDf7g2z3CiF%2FyWypA5r8LtBNYP3HvrAFkjo3Y4p%2F6FRGurSz2PmW6WnedvXI9v5iv2MbSnPQwNFXSruvlej3iEM0AGLQ3BFrhE5StySKchuGwkrFNTGxMCS4YGB64YGqTW7wj8lFI5Fw69IOfjhwxtGr%2FZ67fJ0L%2B%2B2ADiZNTxw6z6aGeZ%2FLlOG6rGKMfnwsNVam%2BS8VTJOJ57rznmseLuOBoVNUbYV%2FOsvTTP2zcdN4wh%2B7RygY6pgH%2Fgb9GLarjCYGRimLkP9VsB7PjrwPnagL0gqTB0TCFgyQbEkeH8hpIuUOD%2FP5tnmNA%2BnPUd%2FC9XkfoKsWilAiwFFaTJBYeDFLsl1c0srAOtwtPm0D1nujiwo8ymD5JFvmdnq0naO%2F2AyNQjBDHEMezwA3L45ttJIsfFa%2FpR7JJQkZFSJCLh34fmkpyT7AIr0h86QThOwl2yiD8YPN9wrq4epsmKY4u&X-Amz-Signature=3b3449938126270675993596b0ebb5d307006e842ca38442de9bbf44858202d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


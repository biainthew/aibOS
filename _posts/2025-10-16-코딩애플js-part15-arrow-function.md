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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPEMFG6%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCLhUH49mX9FthZCaYeSDQV%2B1FEFPDN4E4l3I5EEBSU5AIhAN%2BpG9EJFGDRysqVVuk8JLTAnvVdhMlzSEAoujHpdAj3Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwjDpsShYsXwvNZnhQq3AM7E7oTvvjCSQxRktaA7Jnw2UtrNWAFmiUfXUb%2FAVwp3eoelIyW24MlvFAWouum7VzhBxhxzPYExKC2U7Q57YBTb%2B2ZP9BWxbvTpxH3GA2uQJfClyufhns%2FPIAVVXTf5rJ4jyI4CPfvQPJaqGqiV%2BQAr8XqmJyLj62Fl97fuEkN4d%2BokpI79xlna0bwiSh5I1tPdzwcdAJ%2FmKHndOgaAHHNJVp3EhRF46lcuEjz7jcjxRRD4XIpWv9M8DjqVA%2Be6O%2BGmaUw0L4jtwXgV%2FoQc0M%2F1ZZ0jbuy9mTPtnIc3J8zgoc0b2mQgu2ckowjFQ%2FD%2FvgR8jeg3B%2BBdzNr3exaCBgwOGOtmvaFTkcqDG3FG7%2BIG4QG8Iv6s2AaoM%2B0DAaZEvingab7rvznnTLZUBVsYXGsgF1Yw1Ps0%2FPCk5DpnoqxummLW9FNW4M8ZbGBQbNrbhVGj7ACyHUDB6LHB1VmJp78wQFjxdmIt0NPX%2BtOE6QcrEdydXFvp6Kb9eima0o%2BmqcxR%2FEtiWuoTMDPt8ODzifFBznoKiOWX1UgVT6skXGb2rFh20m%2BlXi7hHSS3hjP9PC8JNYBvatScy0d4KCkTBk%2FYlnQ%2FIt4%2FS9wXovjq6YZbjyT8ncxkTguUeICYTC90JvLBjqkAcNlagr5TBRfP2VUFExQK7r5foa3RuBxaoY7sEJR2GcImgvJobneJeNkDqO7ZeKUKG9V63ypJRv1cmVILi2BbAADfb4s41nW2Jj0iU5yavn%2BRZ81rQSvVXefd3tskBnr1M0ib9n3HVtTiKW1901QDQmMIAV38hxknuDy%2BiqS%2B1IpVaRhP%2Fz9bPY1LFhYhnmdn1gRoamECW0OaHnU%2BSwtFVzacHWi&X-Amz-Signature=1550a8cd34ea626e8b8669ffea5e0d931873ff24ea09e3ae7355a8cd20d2bae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


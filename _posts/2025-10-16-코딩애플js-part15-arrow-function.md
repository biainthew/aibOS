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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67TIZVV%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQClrn%2F4EL1SMRF%2BuHDuAf%2B1cSS5xOsfkcM%2BkWoxdvfz3AIhAPiUppuGsnkhQGeA4ZPvT3%2B2aBna%2BfxxMEGmBxXM9QHBKv8DCC0QABoMNjM3NDIzMTgzODA1IgzFq8pcdSeAtxx0mdgq3AOdkaHBDlUO9C7Nc6IrYCr7XtGVWC4oMX3Y2LXLQXk8402vhRtJoBdFoPfG5iVkttrkGdn4vA%2Felvq4DxVjBMj6CtcM4stp63e8XhUqiSsxjJWFmGbfCj8OjMBN8HBqMWcRV7H67gAcAOUKwBQkD%2FJe72a2v5HGk4xIpSgaBcH96cveVgRdb1V1%2Bgo857rc15OxBW4cghS32tRrapWNLaptIC07%2FRDgpF%2BwhuC1MjGEsKxhkpiRiqEBz9Z972SCOplty7nHiAUxC3irlBtVaK22Y58xIwr8lV0cHOiHN1YFI40IyjGy1nUeVNVRXXmBf8ADTsc6Cz9H1jaQKUCHoOgd9ckkRE4LMO9I3MHU0f0RMkKMdCCL3Zo8rzggYKQUScHw3ifYy%2FCAhTq5uJqJ%2Bp8GKQx5%2FlgLXimBOug3ehMHnkD2zSdJPwbCq%2F%2FIy2GRDnm3TF61vXEycHTfLV3YJkJYn8P1PxOpjDh5s%2FXPtVXkhSob6IPmw6EJrwKSIlTrQDCES11NxqNA4%2BPUSLhsnRY0sS7lx9O4sgqvw%2BhBDgcr3p0VUgeZwlYwB1SpmuTA1pnjcWOu9RLmoPT5A7MGKtMwpLseKASNL%2B0NMFIOUS7wKebYKOXoqSDY7Ma1HTDAhLHKBjqkAf2ELmeiOEaqnp6OUYssJJLLQIj%2FErIO%2BxkoLxu12NVDn8Bk%2FSG9ylhGWQLhxQVyvIG6iBsQKrZ4MWlfNl4C1XPKzKnfxm4kfkjmAl9QhnMMAjdp7xkZlaPoRC2fEJag6cKTLGYnjqtO9K1BgLlKXyypipWUefr1fsNay5FZD7ifDFWQH7F9QqO8xCN%2Bd8SockJKEPQismwOcLYHQCzRJFkm1c6j&X-Amz-Signature=452b60b4d0e1814ba79d467ad3b8fa3bbe23d61494a87e403f720bb2a9b3902e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


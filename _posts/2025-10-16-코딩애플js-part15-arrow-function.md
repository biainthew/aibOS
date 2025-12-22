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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JRC5M2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T090315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFG7%2FiNSIhN5varn8fq66O2JKjGBcZj5Ayd%2BZoTRVEJKAiEAgyuxMkZFAmw7sSIZUM8THwyrBSImZq%2BZVE7XY7tmUeEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6T3puSPU8U51Y%2FxyrcA5HpKTLspkk6lOZk%2BEsTNfWHFrU7wrazB0MAe3r%2Fzw6BhMO1OIUwfQ6guqC4VyXsfdl%2BFSHRSd7b3CU6EUmsFkFENoyyDMqmmwoMEwKSXYrtJAVRifjJIHSZ%2Fa7cNSHNhMm6XfcSPUaI2s8Nsmr37G5hucaSJEDEOYDmce8YWeYh40n6ZvKtPmEgvwF9Cnb%2BKAWPjvxK0wB49ULJwyiVSEHjp2W2FKiOPuLJDlTfc0S1hMzyRNt9PYuepY21lFq%2BHkAPryD1VRDEqaVnH5xy7wY3Zjxi5zldb5R%2FLe8PNXzZNv9KrTRRZLMC7Ukc9x2ZrMRQ02upPkIco2L4dMMr6sBwhHegUCdaGWgabe2trghD4iBP7UZeuwWWvgJQA0NWQyE2MHauAzb2BDX1bojM6Mbp%2F%2Fywln9KQMLmrOmP5%2F5gncpd7rQaziOqva2%2F%2F8TW3gEhbwIIJRG5EoU2erucOjVENpxlEguEIeB16yh5Sg6x1IxTrXQ0NRCLvXpdbbordFwpuXOYLOcAEFuBSdrrsVRZ%2B%2BTagD0h46MuiXwY9WJWZFa115X5OhjMYEiM710GL7QEWMcIPxNBhXvprw9k8sXQmRKiCpx8%2FkAyyT6mruoyVHj8Wg7eGb65s2K8MNT5o8oGOqUBZOc1tzwmBGnPUua8W0t7kbUHh%2BFrXLeIbC9G9g%2FcQZwppRjvfrgxl%2B9kzabLbf79FcSINuY2mdyVX9%2FLeWCDwz4HqFgvHeuOMxlxoy%2F2yRKIpa16mJnrDeazPdVeKy0jQPzARmBDDhtqvAoEFYUqjGUFqiVXLZ817HrmpvoROGlh%2BqI%2FuZKRBO%2FjG5LfgSAzARmctu9ogcEFVdX72nwNSiM5zWeY&X-Amz-Signature=c157e7e77eba09ccda62fdecef2d02522da7eb59e8efec94de93e082afbc14c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


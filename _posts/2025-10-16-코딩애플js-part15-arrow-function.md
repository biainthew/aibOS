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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LR7N5YZ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFSnz0Bw8nE7Jdu3i4P4mpGlsoWFETl5wG5ounnG8dYQAiEAzX6f0sdGrOzU8v%2BpcsLQD5gDWy3eL65NKah1tH0xF8cq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOyar2sqO%2BCxy1qcFCrcA6noszI9k%2F8VwrPCeu%2BNhR12kMyemHcROxDeBaTh84HEC7ZcztARNnn%2BcCbr4CREIuPZbaBMOa3v1MecB4frplxjtydtMpHlECq6zW1REdpSo192O%2Bn3t18Sr97yU8T%2FZ5Mmd%2F%2Boy09bITExJ0OCwgUSgm022wLrU8KLiqxQfdMRJUesWmYgP2t79i38tqTBQQRds6Zkrng5apTHv4Zs3dWRZl5KsEEKqwEHV7gzCQZSPLJSJDVT6v3z6OVPx8iMtxbflmH1W14soMdTCq8YRwD%2BrV6y4vdH3nPDXU0e%2FnsKlEzf7Wjldn3bMPpj%2FaN0WwIfZY2pAW5s8Aq%2B83calsc5opLytcaTNP7%2BBtRt7x6POPbzq91VDgx9VUMeNkxkHNCUycBkevJVSU1IHqd%2FuPgPhN%2BYQ5NPD9JrpbmCFJwIpb6TG9d%2BzUe4xrjSirS9Q9A5HfhLmNmczf6b16L6PLEbt5jEg6v6u%2F%2FiDazqqajetKa1Q9XbYKyLZtgL4WVmWIzuG8gDZ7gPVEXaeMju%2Fl6Ej2CsKOV1VQHYN31B9s7dcIxJq6ijjXMCsnkgR9pnOAi2Y6MIfRIxHvJF9GHOSm9f3F%2BRJegkj%2FwACfxeCeSEiWYKBd3aH9LykYV3MLe1tsoGOqUBI1GXeO7zrKV1XlIB9bZir9BonZOKoDMq12x4W6ytuI9Y4xhRuq9NAIThkR7fO9TcTkhOTnmd9e%2FdxK569Vql41Sizxymv9EIPRoVJQuM3V9VcuBDV0LUtLNRLulLH43%2BCTHeZfPP0lh1DZDZ7XItpdsMt%2BRWPvGz092uv%2BLBMjOIdhjnOum8cSwtWlwyKZDwE%2BFqgz9AkMA31%2BxnFQ9yfjPU6BuF&X-Amz-Signature=3d4411ec652000b56d44d71ed848dbc205deb4d7d7e316d85bad7f4f220580e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


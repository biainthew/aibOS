---
layout: post
title: "코딩애플JS Part1-13 Spread Operator"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



## ES6 Spread Operator


: 마침표를 세 개 연달아 찍은 것


: **괄호제거 해주는 연산자**


### 1. Array 합치기 / 복사에 사용

- script에서는 등호로 복사를 하면 **값 공유**가 일어남

    > 💡 **이유**  
    > 등호를 쓰면 값을 복사한 게 아니라 값이 저기 있다고 가리키는 화살표를 복사한 것


### 2. Object 합치기 / 복사에 사용


> 💡 **deep copy & shallow copy**  
> 오브젝트 안의 오브젝트까지도 엮임현상 없이 카피 & 맨 위의 오브젝트 하나만 카피


### 중복이 일어나면 뒤에 오는 값이 이김


### 함수 소괄호, 오브젝트 중괄호 내, 어레이 대괄호 내 에서만 사용 가능


![codingapple.com_course-status__%282%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/4e8f2922-ca67-4c9a-b0c1-b9805dfa82c6/codingapple.com_course-status__%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOMV4LY%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDUxY7KRl%2FmZY36KQjSXxyeo6KeU591Qht2WSqYhwe%2BTgIhAKfzC4kvGmAjeQvdIgazZs3rNw1YJXN9q%2Fsbfu47YsxAKv8DCDwQABoMNjM3NDIzMTgzODA1IgwPJp%2B%2FEMrsA4RBmJgq3APbotTYbd2WNyFdThnZO2tBMgDSObJG1YC6Qx0cWmulYrSGtyNtDVIv7eXL7fZryMfhW%2BIWf87hauuKWCm0ghBA40nAQ8j%2B8Ffkhxr4bH4M2edlROb5DtoGd6LBRObpDWMmlUZm8acQflFOlD%2Foe6eU%2FyAmlN%2FXteQxUKvIo5IJ0zWXC7cf22LkomysB3cgmXEW2DQ0OLI0PN%2BclTWbBRFPzv1svuFocoXr14zjB4BchB3FaENet9q90n1iUzQSSON9hL7hhPn7NBO1JWfvXWMxcohG3OWTPCrb%2Fj2EEOBs%2BL22SmI6YY1IKUBJYhCy6H1qtResL%2B3dbcCi%2FvZaRao5ZjxiLm%2BJtF83srnb7KVSt6CQHPbW3CB5hkSxEYfKgmMXErBp4lR5sz0WhQN%2BymYiV9fHiRl2A%2FFIjunPaPxLOc4hWj%2BFfVK7eh0yFVEg%2BFDbMDlib6yDvIRIDu8QlIMTppDMn78a5EyHj9Hq8EBqr0H6DLHTVTaevJ5wE0mTdhIqH1uTIZoeabadiKlQaJEScvpWXsUy0A2H9mKoE7wtKPV6MgfPACkOORyGKogOnpOkki%2FQvtYOeaiA9BayOJzn0UzW%2BzERrEaVY0CSPDmAH%2B9eaou5VN5%2FwF2OxDCQm93LBjqkAQnqXgSO%2FelUVkarLDgANe4SV%2FuAyQb9GKuJq%2FCBk5Q0tHQUZ3mYOU%2F%2FGy1Yy6wlcoxK5JcmIHmBjSxVAiZDMPvisFslM0mcYhMU40OPiaPmG5NKO5YCYjxA9D%2F4Y4sZ5KinVXBDwuFCB0HsOXW65AtjHCMo25E2kv%2FoAaDdoD8r5g%2FRw4jeyjHcmBvcYpELvVvqx8MWnV%2BQJA%2BpxDmck1QoFOJj&X-Amz-Signature=a16e8c0a1bbc85008f7ab7904b800766cd974849069dc3920e586442c2ab8a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


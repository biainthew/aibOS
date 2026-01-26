---
layout: post
title: "코딩애플JS Part1-5 arrow function"
date: 2023-06-30
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227V5Q2G%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCX3vnYKi6AjvJoR%2Bleb3dxTXitsO6EtDgBrc3EcRC8IgIhAJyqZFwguF6gZ60U8B2HMg6SB6XBFl97chs2eJi1qnMpKv8DCDwQABoMNjM3NDIzMTgzODA1IgwEQorh%2BCYldSm0DuMq3ANTqsQbtU6BRtD5JI4EY2Y4hRZFxgenHSkz9a%2Fp0EfKaHWgdVl7MSkrcvbJJlQsOfwb7%2BwdNzrXBN2vAhLJ6i2qXnfVMRnhL88xqa03Yg6%2F73Vxd1Lz6INAIbN1riPOgBCExbEjBWu%2FQQ8oD97rNSZJFSqB1pHy%2FQv5lyOAPsP8yOcVQ0sYJ%2FFnt1mAKFx278PVxSK1cZvuSz2Zz1O4VDKPrzu%2BizQzKGx4h8YzpnvTxpOKUtR%2FsXkgjK2rYvc9b9p5VyVG2fHp2x6yjoq%2B1c0BBMBebGE1oK4g1dYR4Spva9C1PovBsANnd5viGKVjB0EAbEiSHWbrCemcUkD%2BiB%2BZbiEbEtz%2B1RvKWYJ0smrRs7bkxfxCMJsrmMw83NDCj6EcFHkMAyvWbg1DBGKVUfGXxnA2eDyGQg4xOi8GJpCWay1IRrlPivhBbK1qlP1q2bns%2Bs6D4IwVcAvZfFxWBbOIKLv0uUuCFHonRgK6JhCUp16637flXV10za28emkW8clvT6tNQh%2F9antXEZAW3nIOIpjRpj1vGZxapmEJ0JOXewc%2Fr7L7fSkuRRtD1zaru31ziXbdN96PZhS6tHC0uaSv%2FFQ3d4EHrJX3ohPJW5P2n5kNgeKgv0d3k9KZxjDvmt3LBjqkAcpkkQCH3QKfMcsGUCjS9nDeeSzjHwH9hJ%2BQhlmBVJwG72V4iuVMYbqwUA%2FP4GkN9AWXV1JU%2Bf%2B7oO%2FCRF27ENm77zOiYYPvb46vp%2FRFAon1bRbvkSt8dcveJl574lqupYjZV7C5J5r%2FoYP7K71zhjOCYbxo6kQpIppfM8j%2B0W4i4pyevzEsX23ZnXbK99SOY9yu%2FtXTQzssWAQdmR1vHjUuJrnb&X-Amz-Signature=7d7669e3d65d03e8a6cbe0a1dd2ec4f010ecf672001b852a03c38183aa20325e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


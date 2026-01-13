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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJXXI5X7%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIArkrRJds7V%2BtEWO7Op%2Bm7xiBP91HItkxhzeg1dYTQt9AiBSqs3Gc98hIAzqcdGbGysPwElSA1WW4C9uXxXu%2BZO0BiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk0M2R9Nt2tvfwLdtKtwD69KDjc0DDQYa3eKp1m2g1C9fi9QaNOJx9PLKzbs2652dd3h9%2F8gljhzFSLkj%2FaFqyTQ%2Fy1PHPQWpNThJ5GFZ5Dtfzi3Yz%2BNAo68yVHLEYit0yjH4O0LGDSYH0ZeS91lO3JM6wwbgCSWAoQNtlpVR5vVPpxP0KGj1Q7xsn%2BJn9icaEWiOuZH7dTTQ3h%2F2JQ2icVghUylAZNtMSZ06Z75nW%2BdGDh98473W4%2Fm%2BTC6wWc9p8t4DIqmbeXcNyS1Fz4L34e8bGs8gKfcNEt66MupFFx%2FbwDD3ibS3II7axU5yIOHVTz%2BR8ivCv657K4TeDrsn5lMJNPyAY%2F5JIM7%2BnTUTlk0yzFjf2IImFY5wYGNga%2BUL4A0w6%2BJBXu1ncIv6QATQiG3NSn3P0qalqvSvJoUOgKR2Lz0n4Xk4KElxUATL%2Ffi%2B4mPvhQ77nyXtiAcQCmWVSfFNOd%2F4H42FaZIVedAuCgUbdXTN1QpAsYmOzUQtwXPgdLoap%2FVUHpwiqFrhZI2zfKi0xkRsWyguio0BUgFDGme7uxgrhiwDZcy%2FkQ3Z5hamRbXUx3hvxvQYlFwOL%2FTnbl7puSYLKDsChZQ9ocV5slb9eqJR2xqIpBYYyUaoy5P5%2FaUZt4UoOIhtbeMwl62WywY6pgFstGCUKXClDkHSktjbVbvGEhrgQV63ITQzyb6HvMGRrCqOR1RALtMZZiRp0VAZteS3aiUKjlEOrzVKFmqMHIWz37y1ogfhw%2FtX6BdsuUTGC7bgstuwDYeXiuunF2Sfwp0jdaUVJefLhi8m6H9yayyhW67HgHyyYaHLJdhLJSYuAYSd68EPU88%2BibPECHfvCSfzXcXQe5FfpoUCU9%2Bcs0g1JwntKoFx&X-Amz-Signature=49258d25acb4e7c2f9f12fa6aec8fda697164e5cf77fb2b001a766fe3c07aea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


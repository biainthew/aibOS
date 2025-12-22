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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4HYTEK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICERW3OPzftkqx5BKvVCmOGotfVC6VsRbzMU5XXx8CgJAiEAmTe3Gb%2FwlH6nP3AkpaUNQ7uIJpg3RyHCQWq9n2S8I2EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4j7esDHSv3cS%2F0YCrcAwouJ2mJrad%2BR2NE5pXI8OnnuGaRgnJVRRw%2FRc4Xr46uY9DrJzK07uUBEqjrIo9I8J6SZ%2FFVURWZel8%2Bq7neRZNpGF4i7U1o%2F3EtTwOhEDAua%2BPTzB9WnL9Q%2Bs5fGI7ZWQ%2B6Vy5CRvywmQPmICzj%2BNfmQAdkOr1uzoOLl2cIXZuIgue%2FESfgqXx%2FBa8NqkIjH%2FWrw61vIruQrglauykkjBaBH6CAx22D8ZsQRPkNs%2BzZT4CdaznOxL2sY2OmIvO%2FAwNQew6ZpVFpe1qLJpyLsf3R8DY4cR%2BXBgKWGIV6e0alm4jHHzE5kNVzEZoKcvAmtWX9mXO%2B2rz%2Fpuqvc%2FknGCh53mP1wZOqdfEnETfd1uJFnORPIyiG09xqM4QDDE7rNNnX4a5fgH71iDXCbEJhlkbZ1q44S4Cxz5yhfz%2BJ%2FX4deHt%2FWnyc3xtHLaULbY1q%2FBtBo43aVqJXuIDuh0IvBachmg5bJ1qF7wiW4ftlWmC1j1ZEk3skNZL3mA02XPOrPXUhlBkZ9M140OQCQGwg0BDXVQOx5BzScZDXw7tmNAYL%2BreMVdLYmaABv%2Fbgrp2TSjbxnS580yyAJih7q4eMoDEdl8HaydV90G2EiTCIQTY7JXKNhMGFUH9aplMcMNeVpMoGOqUB8PHixkhA2fDjS3Bi4LymsXST6Y2j7R2Oc32ryH8Um3jnjM88AtjiPmlNPdlzHnk4HFFwylCpVKBb%2Bxv2BoWmqQkvnsT9KCGUnbKSBwET6SG2Cukb050uFpR0MwKewrv7poCRdetCViMKaipxRy6SJ2OuqqWDwcZ9Qies2vWY2N0q2iIGbxj7ahluC0JIn55ZXXp9N90zbpVoEWmDAgkcQkR6g%2Fdl&X-Amz-Signature=ce28c0e76f7b9c5e2813e9f507b5d2ceab42129dbf7200ba831e9bbc43df5fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


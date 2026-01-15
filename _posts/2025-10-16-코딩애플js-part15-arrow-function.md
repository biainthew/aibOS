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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLQJSX5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDASmrRuw7dGUV8h8qUu0AUOiBsl5lGBQCHWV9DMDNjtAIhAKSSCQMT%2F%2Fu7QnJUqYuk30qFCF6RipWCSlenzVrcPfy8Kv8DCCkQABoMNjM3NDIzMTgzODA1IgzDzPrA3pf0n%2BPbgdcq3AOjjFd7c%2BUc6m8Hm6OcCbj7sXSFm2fZIXJy0ji3Ggm3ZxKkUs%2BEvRLwMlHwQYOa855JvVud7xsTQ823qae3TCtsB9NZ6yTjB%2BkWfkOko7fT32o%2FUa87yUMcAGJ%2B43OT%2FUvkr6vqpl1GqJHCVyAwmJxi0dlZ1XjltAb6cZJP6d7Wqz%2FRmzSWukoek8kg%2Fjz0Szve4i%2BlvfvHCW3RBUxE8E%2Fz3EHsUYJsLQwM6f9Hi%2Ba8Kgusw9WhE6Bp69hAI0GGY7MVxQbfr%2Bd%2FExx9GkIR%2FEbAufs4sqEwlneT0jMTpczvkYVG7AP0Sadw2zu4YmWkUWFpoI2748tcEUefr%2BJQ6aK7NQfxlAYhVeGMC2pM3YMm%2F%2Bmr2SvLN04RGbS50eVqzotw%2Bf8oQNZL6qjA%2FHO6o8wEjmQqZ%2BVj%2ByfeO33WTwHtRw7Sl8Jo9HAfIhN66hn9aN%2F6ZfMWtqYUjhZyQNpnUCf197Pjf5xOl6GB73fmyyEkd2OrurwdK3I1rbrl3uugqVBDsN1e1Afhw1sKNORxs53HjNDkt1jhmuP%2BVaPUc%2BowNVJ8pkJ7jEhCpclv6A5eLk3L%2Fem2j0cqpDmDrcOdcy5ydCf3W6QI%2BTiqSn%2FjgdGJ9tPyPiKbwI%2BsIGpxvTDQ5KDLBjqkAdInquMTC8IG3pmyP8PToNjovautLfCAgW8VI8FDPlCjkRdLdmSVaPyZ1Wqrebxca9SZ0ptOg4oxd2xWWKp%2BE2QYg7Gsfpyynmbl2EnkYX4UD%2FKy%2FEKxg51ackJ1hZAQ09WZbIo3sGAcrzWA5EF8O5RvbHLM7J%2FI5GxWpb%2FdE4syybvV3KQZMKQIdR55nwixhnEmMEDnXbA9qmDhpiueegX2hEkP&X-Amz-Signature=2083b684d6c84d50020ffd1479b9b7c6e04d3af303dc91c774e525eb1597cd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLQJSX5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDASmrRuw7dGUV8h8qUu0AUOiBsl5lGBQCHWV9DMDNjtAIhAKSSCQMT%2F%2Fu7QnJUqYuk30qFCF6RipWCSlenzVrcPfy8Kv8DCCkQABoMNjM3NDIzMTgzODA1IgzDzPrA3pf0n%2BPbgdcq3AOjjFd7c%2BUc6m8Hm6OcCbj7sXSFm2fZIXJy0ji3Ggm3ZxKkUs%2BEvRLwMlHwQYOa855JvVud7xsTQ823qae3TCtsB9NZ6yTjB%2BkWfkOko7fT32o%2FUa87yUMcAGJ%2B43OT%2FUvkr6vqpl1GqJHCVyAwmJxi0dlZ1XjltAb6cZJP6d7Wqz%2FRmzSWukoek8kg%2Fjz0Szve4i%2BlvfvHCW3RBUxE8E%2Fz3EHsUYJsLQwM6f9Hi%2Ba8Kgusw9WhE6Bp69hAI0GGY7MVxQbfr%2Bd%2FExx9GkIR%2FEbAufs4sqEwlneT0jMTpczvkYVG7AP0Sadw2zu4YmWkUWFpoI2748tcEUefr%2BJQ6aK7NQfxlAYhVeGMC2pM3YMm%2F%2Bmr2SvLN04RGbS50eVqzotw%2Bf8oQNZL6qjA%2FHO6o8wEjmQqZ%2BVj%2ByfeO33WTwHtRw7Sl8Jo9HAfIhN66hn9aN%2F6ZfMWtqYUjhZyQNpnUCf197Pjf5xOl6GB73fmyyEkd2OrurwdK3I1rbrl3uugqVBDsN1e1Afhw1sKNORxs53HjNDkt1jhmuP%2BVaPUc%2BowNVJ8pkJ7jEhCpclv6A5eLk3L%2Fem2j0cqpDmDrcOdcy5ydCf3W6QI%2BTiqSn%2FjgdGJ9tPyPiKbwI%2BsIGpxvTDQ5KDLBjqkAdInquMTC8IG3pmyP8PToNjovautLfCAgW8VI8FDPlCjkRdLdmSVaPyZ1Wqrebxca9SZ0ptOg4oxd2xWWKp%2BE2QYg7Gsfpyynmbl2EnkYX4UD%2FKy%2FEKxg51ackJ1hZAQ09WZbIo3sGAcrzWA5EF8O5RvbHLM7J%2FI5GxWpb%2FdE4syybvV3KQZMKQIdR55nwixhnEmMEDnXbA9qmDhpiueegX2hEkP&X-Amz-Signature=e80d92cc1abdce8f66ada99f6c491cb9614e80459a2d03379eef417144eda02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


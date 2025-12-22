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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PTNO5R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCMMX0QC8KthmGH7iEmjOKPmtbMosfrAmARUooW6GnXTwIhAPC8zlgKKQwwwjfbViMHXH38QmOZGeUNo9fm7%2BCLZLFgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOkarNkqQb5QKItIq3AMCVPUg9LiLoig1lJoM%2FYB3%2FFzAXD7JWpaYli6GaGmiVWeEjON%2FF3GDX3HEYV1uNdRvgqEpHoQZlEyd3UgqAuLtIYdG%2BOfqUcCbuwM%2FKwUwDFuipQx4BK7DrixY2cL7RHZLEG6JNSlMjAbkE3nL0MA84ymhwR7BzaTgBsm78rJwunPphfYXYVjkXysm0yJP7YyCvFy4Bbgg71Uv2qwc8UCGtWnuiqOvVwSmVtZ%2B63tmviuaXTVhavgKsJYmZZEzm6EGYvGm7LTo27qxefgomAOupylSj7jmT7w%2B0h94dhQ7RMA9waNA2uzBhwYN0vfxThqn9sFG2yAnolJ3X2mSoPFE%2F67XNLquW8ybiVDsLOJtRBu5KglCk129QVlFz%2BszWkRqL2oXgHhtAygXl%2FoB3kNKgMV1bNU5I4%2FtnN6mdnA74u6DeJfpu%2FJW7g%2BrBLa5pyLZYgzCF6HpUacYL7vqaxs0UdC%2FBVYmqwRQYe9z0Crx0bQNGo9XyEHeoYW4x%2BjcoVAkPxYasCxT%2BpyZB3jGrx%2BtZS%2FPofhrbziCDbl9Dfb6f20rxYx2MABoK8%2FTraXO78Xj8SHQOkd7j373AkstsUJ9MSnRhD3BrVbqGv0M4FWellfOvzQfxBb2T7Go8jDm%2BKPKBjqkAX9vKvDcXJw6gUZbJ0tYBsZ2DSjLKzEhhfFRDZSocrcMGIVcbQOHnXmR19n5c%2Fghf2m8lX9id3S133iC8%2FCDH2Mi5%2FF29F70flcInlBJ5%2BKvDw4tDvcvkRggFImQ5KM1v9bMeJAQNcPhjVNdwxs85d3Nij0%2BiJ%2FdiZ54AnEV7MFty3cXnK%2FZgU46CQHtTdVZYOH%2FiO3cm78B40H9nwGAFzHpwdW8&X-Amz-Signature=8f12097208cf99c14c8d41866dc88fa62904fceba9abb7302d602f3ab80a4d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQMEDWK%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRd6jFbF2ayqWSsCB4dEtMpdlxxuSPe5I5cpSkxTQlzQIhAN95XYVr4gAaRjXVX1hWVq%2BiK5nYhDO6pmQI6SdVKIKjKv8DCF8QABoMNjM3NDIzMTgzODA1IgzzWN8EgtAhrMSj0LUq3ANTDmk%2FcqMNFVO4zvT8jHvXTUL2hhPEEfRlbYaEaiiNLX%2F9GUIh0rfoFqI22g5vxwXoWZS55ShvY02FTG7YbbbYtva3aegjYaXrVBEFi2vWA2lu4v2DiYA%2F8IuX6UexbuHTFAiyExlO13JS%2FWcY2yYaBr4T1H4bkFYING98wmFItEHCikCBc%2FxPkAxTpqV66I0AZc0OBdI%2Fod5cu%2FkFqv9i8JyqfDAhB%2FRAssdYe4on5fh9Pa6fvbM613h4h1F%2B1HOSkYGxbOLw4uMANPs9n2NbG%2FKmJdlaSj5fxSy8QiJTkAVNqB%2BZNIdbpq8rLvjXmFKVerei2T7E04qVk35jUDUZQlb4GYrADiZTQt5VXnB2irSyVtepfbE6htMZmjmwvrRnh7nOoioZDQvQscDm8Mh2aJtqAU00NgiD3dmFThpQfTf91xBjMz44rOqHhoBuBIy0arZYo3Ob4jJk5TvAo2oJ3lQXfLyxgk%2BmHBGAr06AFPVYcxsWkawMZdvABSryiZ%2Bz864VD3G7G7ha7xQ2tLXedZvP5MKbqINoAc7xdbLUvXcUhirWCK1H%2BlW3CdoiXTV4GdMj8YNRWw2fKIJsuAKn%2FLYA4abQmVUKng5MGFg5RuiThrSCWU%2F3g55mlzDt%2F7vKBjqkAVXM5QShU4OAioPnoIdJT2Wcmkc%2FlQ7o%2BXnt2HYdaXJy2gSt9CTdkRKr5WA8PYdQTvfrlgGtriW3aIeIc92OYv8qIp1%2FJY6aHzGXzKuMFxky7Inr5%2B9HYhXnPwF7Fbsj8Nlj3n5p2cp%2BzU3QvHkRk%2BXZM8NgAmK19xpcN4Kh2goOKEPG91TemkzoYvaWH4i0LJmoRS%2FFeSuQPg3RyYJxouirtHXE&X-Amz-Signature=9b9c01b888592db890a7b3fe1b1ec6576a277d242b7f6095a88e3bd5cc060a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


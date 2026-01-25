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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G5V6MD%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCA2VIisa%2FJ2ck2aI9v8YjBsOLvQ8pxqRJ%2FJWhQXwdvZgIhAOFtPnMUBpAjzaYffSP02haUY5GJoT7g3SIScwedyxmNKv8DCBoQABoMNjM3NDIzMTgzODA1Igw1NkuS7p1J5d0Xsw0q3APep9cqWwDlXytVIN%2Bv9fCwNJ%2BNJhFbdhg4VfOZsEzeOeJrlEagzyUf0%2BQF0luz9qAb3xP0S%2BrFku9TYvF7lF0gua5HlsR7pOXy883EjaDN5ExJoKWaNdplu9vk%2BqWNniPUcU7aSgSfosLsDphKNKQZ6TvW%2Frb4D3HJ%2BX9Dp2CCc5Bj4PAs52CSl%2F%2F97PfaXEGtglnd9BEfkwQlYanUMlwOnPyZ7Cu4s5oEAdXNB8PLrPMFYUFPqeWBpkVdMgGl%2F%2Bgc5wof1zf8TjsBGyTwSHlvxso0o2Ev%2FniHqGmqHjUPve%2B2CXB%2B%2F60chuRwFusbAU5kmZCW9Xlz9JLWRPlWcIcIHLqdITieCEr2PW4B9ME7f6y5ZHWoeEUz1LEe3uvJ5Cmw6iIMAnQaKIZN4OtV4Pmf3dt4RwTmmJkN26IUDLdxbcQk5rKWDBA7Asr5uPKZGBQ%2BF8Di6kai83hkbaXqSh0FKjFic3ytor2OJtO0%2BFyYV5%2FnWSwr1kKPy%2BHwgviVhTG5lg1jOvduEKFnFQVbJPSmpCmxzFMRZvtDUQ28yFFHPUPhKL9gkvDkYSmEi9NGrhMXjSJzH%2Fl7K%2B9BMGsHrtwXC4pfHrFqGKPMLi69%2BJdLmUhB%2BTZ425ecevXouTCL09XLBjqkASsIlJCXunw5Os8HBrsaz0AXvHpAHwl7l8dFRB16cnPK24VZkoEUKZiSLB8ibNgLboOfaXxhz3SJeCN240dhzoGSqtVWwDv3ktfj6kkz%2BFp60qvJ7bvRRL89Pv3gxGX5MnGjqFFlAx2twUhtPdRXX9oc99vrTPU6g8RZMsuSGGsDvvN77BJs2AdDURqyDuyXFdpC3dnWN7vLwFjop39daB4lfY7t&X-Amz-Signature=e48ebf75b706a7c32382d18f23f40411ba45d3e27d6e7bb7fb0d086471e9b55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BASMYKK%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIA5sJ5AcKaiuWAwuufMxT9XGF5z3pPV41%2BP203zFLLDwAiBtdpfqxlh5p6RY0z%2FYOqsvvq%2B67GZaaQ9vfYhOxdkleyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMGw2d3hc27OsrMHjzKtwDwfcxC1UmAO2VglE6C7DYtVhjauSlMh%2BcwhaKbiH4j03RIogHf2W1f2s1L8ytC1JDEn3OnGuNXLhwWek%2BOS2OX1nIBpRYQilVYmP9NbsnJwhjrIAkGHf5k2oHS%2BNPS89UHUxw19TrEm5KetoFWMR2%2Fd3eg790PJbUkdJOCnBDUKY6kd0uQk4CeG6zzAuAOnzOr9Wxmk8WZiKOQ1p9ZXpmuWgr7n%2FyOuUD3ouq9c%2F45yeIlk%2FuVlBsr7TmRgiR%2BvCG2bge%2Bd6UWNonokNDm7yK2uJgAbJLv8bhCYlwciESneTHdRE2q%2BnrdsC9yxFLWPymh%2BSPj2fLq0raDDEoc%2Be2xf31u1Yt5OTN%2BoUA0eX6kQegYD1T97LD4U0vxu7dw3ga8m5OahSDOVSHZjxCA%2FL1HiP0mvZDrOA81fR4m22MfgqLLqxSmUPItjzuyY83UR1IbUvWnc6yCHR6E2GaeATz8ghZjMhqTRztQ4WEFThJARQUc2NN3oXc%2Fro%2FeNlbYYLQfa2g2sJcq3i7j4bmVTmFoU1mjsWqKoGHppeTXQ84Q132EkPXQf2jrlZNKewDrk9C4YJxxO3BHfQk%2FSvv02mV6PKeOvL7RE%2F72%2BnVUm549MyyFaPnkfYLLgulTTowhp2mywY6pgHEJHx2CYxRU3aiQjSe2CuuvANJRZpof%2Fn3do56w2Ls7eyBAOOf8okxd5Xn372jM9AWN4CAsBowIA2KNBb1jfsz0NWMQbx2exPLIG%2Bcxhn5BUAcgl4Qa9vdVA74NHgTJTwiRa6bCqD8mwURgbVcyFUFXtHhfqhfv6d1OuEoG3oXPsaqQae%2FM57P1dO6wLyCX9N8SVbN%2BokW07besurQb6ySr%2FynBBNw&X-Amz-Signature=286c3ecdde0e7831b808ce4081e4ad094ed46f80c7f251a7cd9cee187664533b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


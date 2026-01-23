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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB25XVXM%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCWdIJD5dlCpaZxykclkItRIVtCSl18gghHxZniKvaSwQIgYIFyIkM9ypW3d9raMV8kDs5tFbRQn7PqQ8Xa%2FVvwwlUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPqORSFv4oIQALRRCrcA0fX%2Fa%2FifN7BQQIPq9ibkGV10ZmmI6uVClIfK%2FLcioKSQ1twn7hoX87USYjXSz6EaTeVpA2MOoOJYwQSfYcn13Fb%2BL2rtMn2KAX6wAVAFycW8wL557S%2FRJo0h37uGMI9IhR%2BQUX7wkgpLsp50T6ezk3ae4cyxNwoDX57njRjl%2F0Lr7taVKX2tcX0oTGt0iJKXQRrXBLQ6dok%2FfbqGAiU5mJ934lDxl0%2Fxv0Bb3eZvTMoRfDdTUi7THT34r6mk3vwldcT9%2Fw%2F21C7fr%2FtDtYYDcKU3QLXhLS1y9WOictwoU%2BSA6mBhAOKce4zV1Oj%2FNjG5uoTvqhaSwll4Sf8bIARcRlw6Lh5zx1SdNeLWXEtOe8D6sipT%2FWYMM0S%2FdVPFb5SMtrAFEyFffE8WA30kk9LU64CbIgb9RmPTWSibUnGkfmfBqKEcpdtSE7bF1K2mxINZbw3PTZlADcjJKlZuuie3BRGkAEWH6nHMwUOvczEWcndbawwZNPTwsy7BmdKRE%2FxTnVCdkBtho%2B%2BA5umLg%2BTLzIRHH3BvFVLEOZiGKzkW6OP93b2srORuBOH6I26uFiU2VB%2BVfzUzhz%2BCrf7riLIt7sXf4YqJI0OG%2BRM6zWMZeRUqUFETtTZCM2Tx76SMNKPy8sGOqUBLbqPw4XH9YJq%2FkXZg3KgDtUPWOaSyKYKB95YaZ0y%2BYxMzODyPsoh9GF3rmdSuy7jq4dAviCs1Vhp8Aqit9EaaDaFYbWvc79s1zuGgnwOHb6Jgmk%2Bbq74zfFUbulKEyb6TTGps782S0ICOyR%2FdH9r6Jj0%2FVF79ky4gXXztYYvWOpG1FMSaoKZg6HVFIJ0VW0kZlSFP2vazqYu%2FqoOKCpetDwFcysN&X-Amz-Signature=77c9c8a52a66c5ff91a22cc95876cea7acfa2dd0b662b5bca9863fcdf776b5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


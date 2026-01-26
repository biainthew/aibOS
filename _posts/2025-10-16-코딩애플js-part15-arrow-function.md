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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWYBIWH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDif4oBViEKr6aQFCI52ZPDvie6WcQ4F1d%2BmR4WpeYB8wIgC39CKNCKtrsFyfCv87KJ5KMq97jsOWzfO0XWpwjCZqIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF6Y2I6YhfJe332xkyrcAwKG%2BnCMCRlwBTCPNVaGGjqPODzy4NPoy8NpnyBmVeoxI5atDfCq0%2FIFTmYEcV2iocFQefICuPVUQGuD8GpbldVPUC6hQ77C7AHGpHTRftrMCxJhCsPnWHDvCEI4hsSe83S7VKIInZx0IMjiHUkp7IxPj8rZ%2BbtsEdJ%2FqSfXpd%2FzjT0oXlsugWS3W2qFtF57esOAhZAvzY61ZY2EfqMLkpjt8ee4LFbIC2fXu24ZKajgqFuF57MMqt5xVwYd2TlwGXv8ojcZ4iT5PRNpHtjWl9Ol3hHrgsK48Hl8%2Fij%2FOtKE8mA4T2HJ9Du8LC%2B6YFtQj6sljsubi0ttKXjXOaZCZ7prYtVzIU9930e2QtPH42I1gIwvtgnIsRDlu%2BBJdQNyeahoXFLHhApT1x1%2BHcbqV0NPSmlMCC6QBP20qynNyyy%2BXFY7du5ylJ%2Fc2ewqD96t2TIzGhThTNby%2FdHho7qMAGxjVfqvRYlq15BUj5GMt15Tfj4VdYT7pcfPiT%2F8ZTRiCfGBrWgq%2FBvGfgqlOcfRloQ4jKo7sXQyJ0Ig2vd0M1smbAntNcKRydrNvJ8uoou11qY%2FoX%2B9UWF1O1Sbcoq8cGlitWPg%2FhrTVNM0wWpFmrLh2pjwLnZfO72VvYUAMLL73MsGOqUBF45STeOuDRc%2BNbtpaRnSwcM%2BuP5c5zdFiLNSxpx25q5%2BTX6AlYRouUHfFCi2TVCwihCfJ7e1WSbVRAQbzsaqvQfprfv7ZueeF0L76goZU1ZA6Ez%2FPw562DQdSygX4mexrOnKYkRfVHTJ2GYByO5ZRfdlirWeA%2F6g8%2FjIGVWLUUy3Fe%2BUOVucH0Hp6l4DFEoCUAeYofo09htey2SdfemDbf6SQ5sS&X-Amz-Signature=10fe8a4ce5cd39d6f53ae4c78bf90eccb8e6921dfde759e02c14046d46e3a8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


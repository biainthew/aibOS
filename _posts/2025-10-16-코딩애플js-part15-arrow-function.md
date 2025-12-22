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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWLLD3AX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFRvYxybTd5hoGuDy4%2B16D%2B55qxMtxWdrTlCPr6yi%2FnTAiBsADXB8zDQNKhCwff23t15%2BcGAVT38EIBEVosa10%2F4DiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBd0UlGQ0U0FT%2FnGOKtwDPLsfK%2FnXB660pVoK7tEm%2BX1hRZGvDJyzMUqp97N5opNQSYdAvPJQv9yeUb8RlOKn7VMEG2Sv367NhjiFs5UflWpHXuuu5vnAde0nKH5DBKEM4srSoZhsAfXZw%2BSnHHWYwpNJVADfqsk0HeaS2aesLMJpYwObRPMjJRhLJdM1FWriqdvVXKh0gHoPv5pZdbF283miaikmG9%2B8BzTcL53VzGXESZasTRrcnvjh%2Fg6rm9g1028DPwAZtnqdfIpGKeeYei0uNA6A7bijgP%2FJ2dT9ywj8Y8w%2FC4JM7prk%2B1phkSlm36b9UpRdWyxhl9GJ2gfAhQuEbHUnsh3lofVsietPkXas8qo8JJH51haSjLPDmKPlm5OvFLe%2BUPT4fkXmge7G%2BuRrJAhiVvgcZW5566cW9TV7RdLInBCTjrTOqxrFOPZEqZj0vXN%2FbqEnqKh3s%2FvcXlmROdhJrdN0tlfOOsQJX8PBlLEdXU%2BZR1BDr63jhwIknCeEjor1miXBKsUacEvfuHVkIBq6MjY51iCBke4NdUfabrE7E20Lq%2Ft0F6hzDD%2BMKnB%2Fu%2BvHuy2OMpIJiaaRhGJ56W%2B9zcXVqO03uwJq3CYRe2OrSHndUuUYXHkOE6%2FwsVMOHUR4DcWWPAww9JWkygY6pgGz35xxyTvgn%2Fe7hQk%2FTyB%2Bf27n2E1yqc3mM%2FHAUkTKDLEqkdcJ8TtvuLe8KLa9qpqapokrqfQh%2BN6t%2BdCv%2FAkDZsSaUwCxfb%2FUcW8qf8nGDDjma56%2B8OO9uMeWZ12D%2FwMq%2BcVaaadXJWME2qgFHul0x5B0EKshIoBLT8xqSN%2BoWW82MVC00rPWCA9TTu2lLvzeKavP4mlxBOGO6Y5tv7%2BdMMJJUHH2&X-Amz-Signature=3d8ea96f9fbcf1e7635274a78c75aed97134eda51f5bbba903fff4ef1caf9067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


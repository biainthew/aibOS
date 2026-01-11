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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55DVY5L%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW2XkVevawcTyO12Lo23vnsLBsU1IX5pSiCoY5HNeEDAiASvsgQq0nd57kEJwNZEEuoHsROyKu0x077w6c4H4LtPyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB0nhORPDlYbCgPviKtwDJkCE5oIAyn6lQRO1i%2FO9r4i%2FR1q1ifOKP5s61XxDs3YHxmS%2BEG1UKtjzfv%2B0Qd7rcPTw5HdACbHIU1SFHcgWh3WPdPyBbCqTt9xX9Inib0sDI511xrFmRodXLqG1et9hinsqWOewZgIIYnTexKeAg96XPs0TXNhxtDPllBQXBQrfeclIRkmgs8Zb%2F4dw54%2BrXhsVfEOfEJSq67QryB6CSHzP6sNXPKIjX7ylsOt4fZeZOtJuHZaWsx8WoqpVSjNeUah5fOUNq%2Btqju75tyyvLWu3%2F16nPC%2Bo7d6%2FvfuIedNu9qoIGxXk0sprFXTPVifyEYxRunjX0iRVPYErzJWttaGwdW0t4ctBtvg%2FVXbXE11pj62PjvnBXHfYtL9dUXdHgD5FfOI57U4z4gcbbOAG%2FPiMCL1uCLLOqxv49tn4GCqw4Za1nJiNsAvNzp2M%2BT7%2FglVx2QYKMPCGaJRpkxH7zOuGyZDr25IYRcoPNla2Y2y0nyhamZYvl360T%2FouG1VbQ%2FAI5kU3JHiBBWuDpcVQC24iL05Xa4L4ZwucRthxNaUf%2FLafv%2B54m4cX2b2Yq2qXcBb7QC32mCrHY3NJbQLRk%2FIbT7nCLNNmVMuYCyQznKOWh3jg2nSC3EynNkUw5%2BCKywY6pgGfLk7eGY2FtFLMFor%2FjSuOQ49C%2FCSbtFQgsscUoRUQfpXwAdEUIJbmJo0HntAaQPPRHSPTzX3%2Ba5WIRLzCcZBgYkEsaH5bePUfdPbAJt6Zad8Lc42NbJA3LxmqMENYFSmLs5m0%2B%2B1e1y40vqgAxaSna%2BEv%2FwgjwbYTeuocI3KibhoHj8Y8Uh%2BAi8ywceOQdbJOnydR4%2FX9pPpOpHTel5GPXZefnVOO&X-Amz-Signature=12398e4d41be9b2ad28b770d4dfc4493e5bc850713696c305caf9a68b6bb7827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


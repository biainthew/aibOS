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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFOGCPL%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCGSoqQLcnbHZ18Ck%2FdkSFKlYqH3Nuu%2FUt8KadX6X%2BaugIgDvhXFU64xyYUJ1hcfEBJ9WAz1E3opzmRRiC1ELv3Q%2BMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGoUaV2gbCGcR%2BMptyrcA6icV1t3xPKORMd0SjRXXkICNvproj9hyA3MTcDu3jmVzAmuaaVSuCD1hxxwOX%2FAJukNlvnfddMbFvosYIQ8nyCPiCslg3IbqOE31d%2BZA5g0zymtrSim19DE%2F8KYiH2CFA8oXXESroJL2BCT%2BOiz1uCGVnQQHEZMNJ3x07gnCsb91EBGceUMKhPq%2BI9vUQuvy9i4UpFAsegIA81wCaoF2O%2BoaPzBukB6bIIl8ALKkbB9%2F1qORCA5JfwmXTEmKLq0xniX6g43UJtIAoKgVCJHan8U2h3VWdUprG3xnCu7j1Fmoit%2FjZQmqqcWoMK9QkoDrXnbdkFAvk5qTn46YggzPU1StGWP5JhSCrefMjkoSByn7B4iRDC2ZurEEBl8MwdVF1UYaoms1oEZVVP3bxMKqjud%2F3N7olU1bNDXpe6eru5dmZTh%2BZwNJn4F%2FoiVOiBOd8jffUTxPjTnV8wNVyw%2BVBcbrWGEMk7lNevU7DHp0GtF5Ij4fGAt3%2FQv1GlQhVF37YoBzeSPG6A4885fvFLVa%2F5OKwHMXYulQ%2B9VU7UK40D1n7xSALUESnANrRZJKJ8TL0JmECyhIcgEok2j8tCIY8UPfXf88n2AS17bluGXaUjFBgkOKeD3LSiD6Ok8MKbjrMoGOqUBlsn85OY%2By7v6uUU4NedJKuMKKFrI7gsmAejmSqshYC26LkChLWvY9IUZ%2BFpuB6i6SIph9Z%2FKjT8RyxxB5YMBP1%2BpGiTC2Q3v4l9u%2BUpo9xXm8pTbIRKQ%2BQlPFyd1bIrSxllr7ji70bjrfijqaUgaLPl3PoaTIBQbXw%2BzD65buW9PQAX0EnfO4TxTpnFwisjKpzbPl8U8RUBOaF5mRoxmBR%2BAJ9tT&X-Amz-Signature=4e679d8545892be01af4cd5db595b744d24c3902d685cf7b62a17ddc72cdb4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


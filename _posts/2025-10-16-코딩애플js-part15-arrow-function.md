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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB44ZWB7%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOKRQxEwuyc2G1RE6Z%2BFpGBnlpNkHI9E4FxCuuZuvJAgIgIpSb%2FfmmlYQGlEPUugah90Thxy2i2sAjTvzQ31McGpsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCObB7l28kyVTTQR4CrcA3FLWlIDL7sWU%2Bqmyjb1hSFVTH9mcorQ4dd%2FJLAPngaYk%2FZOoSybNXXGwotMibslpHx459DSs%2BAJdvsCABsbBvNu87vHQJaFg3lAVgb%2FrmYqDOctG8Fn6jrurWR2BW1n4i8UFJJOI0Yz92VLSwchyI082kZwsinFx%2FhDTTx2eoqZsBRtgaGp2y13anBDRJSVwKu08rbIMr9SmH%2BId4AbNdzAeqPby9M%2Fmt5Mdp0jeFbv3gMKHbO%2FnjOZ9OkDn8IcuRsZy59l7bfR%2FU9kHcZpdIr0xF4F92vASTSB8P2mqQvvLtGthZiZo1t7fh7Le%2Fm%2BbM80muE5jSyiG7muITAgOedfc2m8iV5o0tPewuRCl7JutLx3Ti4%2FBT1VfclErMG0I0T0cG3%2BGzJYvYH8T6vciZ3%2BDeB2IDjF%2BSJn1iI6B1Gl9q1ume9HP8KzDKNLTAiZa32r7k6K%2Bug5AjTpd53w%2F9OeLcQ26qDaOA%2FKMdecg9wI%2B06MJqtMMzfY9U9VieQK%2B2HDFtTxBnChrYoYg2ML62B6My2exfrpkaUFJISM6eE%2FV3wWgp%2B0gN%2BSqexdA%2BPG%2BFcBt%2FqJKnFiLakEaHyIGipZ8qb%2BTO%2Bvn0B5dS1gXwmUEwW0QAR9bnWODL25MMb5ussGOqUBZQaiMf7SOT7nLRPj2MpVLcwb%2FBXR5v7Kcd9efVgmta4e1oEkrbCoRWiHIID42UdsLFizAEHWOx5mruojdV2KpGibRV9Pe1lfCRMsjzh64NtIXNLJ1KwuCqeXeBTkTKqIT8PzuKDO%2FR8UUFZ2Ch9UwfVxh6PXRllhyjOrrXYK1gk5KEAwYe88imcuUoLSF9T3cSvoz8tOl1FEot01m%2FjeKB9BruY7&X-Amz-Signature=080d361f00759832fc1d042860740bb4b401c64cc2d640bacd28882a21cc90ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


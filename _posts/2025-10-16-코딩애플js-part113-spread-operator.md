---
layout: post
title: "코딩애플JS Part1-13 Spread Operator"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



## ES6 Spread Operator


: 마침표를 세 개 연달아 찍은 것


: **괄호제거 해주는 연산자**


### 1. Array 합치기 / 복사에 사용

- script에서는 등호로 복사를 하면 **값 공유**가 일어남

    > 💡 **이유**  
    > 등호를 쓰면 값을 복사한 게 아니라 값이 저기 있다고 가리키는 화살표를 복사한 것


### 2. Object 합치기 / 복사에 사용


> 💡 **deep copy & shallow copy**  
> 오브젝트 안의 오브젝트까지도 엮임현상 없이 카피 & 맨 위의 오브젝트 하나만 카피


### 중복이 일어나면 뒤에 오는 값이 이김


### 함수 소괄호, 오브젝트 중괄호 내, 어레이 대괄호 내 에서만 사용 가능


![codingapple.com_course-status__%282%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/4e8f2922-ca67-4c9a-b0c1-b9805dfa82c6/codingapple.com_course-status__%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTUP2IZ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDN5RWpBgY5NjH06CfJW2jwFm%2BFDT1WDVKh2gs%2BEpFlNAiB36%2Frenjc9bkStDLiV5vuDa3AeaY6UpFCfljLZhAbYESr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMPVb9IA8MDLLXsXKZKtwD2I6dnYaYNwmD8IazgWVm3fljgz6RDl81Pw%2BYBqOg87zNzQZGQk6acSzB9P%2F2EMKEs77C811YnA6yL0LpRJwtC2wdxV4S9jbEbai7TEE5AdsoGxFUOBhYGJWAHCN3X0SP6zecEePLURUfnzeebVxgeHIdAQJDrSaqBOyeMYRcV8U7bTEh3OxzMwQLLnRyTEIXbfU8mAlNUfXhHBWg4xOV3JIEFgnZupp9FqtFCD%2Fzw35Av5BXUOQ6aCckF0BihUNwAdfw771vs1rm0nIfdfNADOmcdaMpWyjlimuT4FsR8F4wdPYY06kQ%2FlGvkJP5rW%2F%2FVdQkREFUY2cKqxfYQZD1BvWAoiqYdonCPiu7UgHoddc56yO7uGfVsDeyTgsz2T0GreVh0zM4szKmeA5dCKbqIDQGR9BI7t%2FtMGfiRzu00ez2s%2B8epHOmpINdWrD0DYHEd9mT357reSDXNSSrDjApP3Kuh7Qnm02t1w6I63cvfmQePHgTIDVvJGjnEzPKcg4icgqtBMiHKRyAxYbvTfPIijioUakl6Pi07YLIye7iFQKcTzFFmDvbgZQrIOEyOokSwg7PZE9I3FzfC0BC4SINMOPx1JKriC%2FauO1oQ%2FPpE0U8bLtelRx6MSQX%2FPYwivvcywY6pgHTa1SGxhkrJM7XdIlJt2V952LwTAZFYZcQfjDylk27VctKEElf%2Flgeo%2Fd2tcSc8SJRXzCLQJCYLvS3Sdhl7mFhULA%2FZ86u9rdRCeiuBcKf9Wf5NvPsHc3Izb8XNT%2FKqa1z0qzskFq9kRwVNwI8CMzor2IxvCWFK2cgdXBjBbR3Zt5kg3CervpeZsxYxMR%2BnTiDd0IpmHX4hEyGNzrMEDUC5m8uqzIC&X-Amz-Signature=813f7b6a57f0d37042cbe29b63bc60e849972903436450a5075d3c2ee413c4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


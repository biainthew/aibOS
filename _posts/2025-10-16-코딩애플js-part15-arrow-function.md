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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKQ7RWE%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmKF9msE2hvIJJhgxX49A7yGYQS%2Bs7YGkIJQdKSJoWLwIgOIfmUjfQT04ApFhJAmKnaToFKaWKx%2FBe%2FsaXcMVyM8MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErkoIPiCPvgG7JNiSrcA4DdDHqzS%2Fztn3U0TxbS%2B%2FcDYhmNHzsALA8JnExRHSEYtWcqpwxV0HOmSAO0VaPMotSOnzbxrjHxjd0jRCmbjT748gVksS%2BI5oamboDlL4GJakcjiw6Xh9m%2FMxSWkzUt2ZsO28N3%2FoHda%2Fbp83crSKFZ%2FxVh7QkRn0yg1Ht75ehPLjWnYcIP7oAeuTwr63aM1ldVCW8S4oArpGn8H6uW4s58vgukH%2FTXcOqqDufxtlUR8hhF6JoYdzVwP88KT8pXfcvYHA6evMYvg3HBtemBeqUPlIfOl771s7jxYxvlZnCutmNxV3y196PLDztPj7n%2F8Rk1PzsUACehTNFIbvZZNsMlEfIyJ9iam0MoE%2FDBNjZyAZfKNCI7WvS0CW%2BM%2FIzZ1wLfLIE6eu2%2B85p7LWAxa8xiQo6HDs48a%2BCk5kG2V0d%2B%2FD9JnbNIZF6jUfeKxiD5LRXFJrS2%2BSRKwzU8U6Q9rhoHc40dVOmkbzTS4e6dHDPKP7b0G3LCyGPLdSK7i5k%2BYb2GkwoCIQTJp6ukrXvKaqkTC6HZTI01hEGAZmTo0SKpWaoPds%2FxHNiHVusD50wsih7sVA9c%2FXdaehBw5JOOJJOsmDC06QhkK232TlT0Fmg3dsVi8eKIudXd9micMNCmgcsGOqUB9d8T8w9wSaMi7f5Kn%2FWd1QjutSl%2FBwfWI9gksXfKrCoEC4Wx%2FYJj7xalMlA9poC19pGNpFftacashzvypm11Aa49MpnEW8BPMnWAYeaVUlc5KrCvum6NT2DN62oXg4E5T5Wuw54CzEaxpDEn8KhgvNESIevzA%2BPEHpZZ7Qlqp34yN0aDViPsJZvuRV7pq6i4I6x%2FDvfBgIgoIt8Q8QvYg%2BYiwQ0C&X-Amz-Signature=ec98310aa9dada6da9e29c8322338e6a852b53089966c6c90ff149b57a265d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


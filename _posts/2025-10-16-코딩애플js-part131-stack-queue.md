---
layout: post
title: "코딩애플JS Part1-31 stack queue"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### 웹 브라우저란


서버에서 받아온 HTML CSS JS 를 실행시켜주는 프로그램


브라우저는 C++ 로 코드가 짜여져 있음


실행해야 할 자바스크립트 코드를 발견하면 C++ 언어로 만들어둔 스택에 넣고 돌림


스택이란 ? 그냥 다 집어넣고 맨 윗줄부터 하나하나 실행시키는 공간


### 처리가 오래 걸리는 코드를 만나면


서버로의 ajax요청, 이벤트리스너, setTimeout 이런 코드들은 처리하기까지 시간이 오래 걸림


ajax 요청은 서버에서 응답을 받기까지 시간이 오래 걸리고 버튼 이벤트 리스너는 사용자가 버튼을 누르기까지 시간이 오래걸림


그래서 그런건 스택에 쌓아서 실행하지 않고 잠깐 보류해뒀다가 완료가 되는 시점에 스택으로 보냄


근데 스택은 항상 존나게 바쁘기 때문에 스택이 텅 빈 시점에 집어넣게 되어있음


그래서 오래걸리는 코드들이 실행준비가 되면 큐에 집어넣고 큐에 있던 코드는 스택으로 옮겨서 실행해주는데 스택이 비어있을 때만 차례로 집어넣어서 실행해줌


(큐는 들어온 순서대로 차례차례 스택으로 옮겨줌)


### 그래서 코드 짤 때 스택을 바쁘게 하면 웹사이트가 버벅일거라는걸 생각하고 짜야됨


### 반복문을 100억번 돌리긴 해야하는데 어쩔까 ?

1. setTimeout 을 이용
2. Web worker 를 이용

![codingapple.com_course-status__%289%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/438c576f-5974-41c7-9c32-0ed4afa53a46/codingapple.com_course-status__%289%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z377NHRB%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDzayYeZlzUXdpSQ0WaButD0JskpVIe1wyYNGQSH%2Fg54gIhAIcHDUfVqq5VTKSe4xX0gatZyB7muXMVE10yWAIXaB7JKv8DCDsQABoMNjM3NDIzMTgzODA1IgzUKfrtRNlv27MtIzoq3AOL3MojLdlcGdwa4RbWGsqpUnE3csmXj%2BedBnFlfKMdtHgEa4dxViEB%2B%2FZcwOOnnrH1%2BzFx5F%2FPEasS4A9EBbhBerWr6pVNwOziIo23Dp68yiFErp7Ue8T5fvtovRcbutP44outgG8UGN8F6PoKm7jD3Gszkq2gXr4TU6C0kwdtoL1xOwl4fnpqTzr25jvtvrMuQNrf4WzPASuzZWbwFYCKLUuSMz0KgHG%2Bpp%2Bvpt1HfGegoE8cJwQjNWHeWO0CvpPyux%2FFOl1r8lu4qhm2In%2Fea91XCtjx749%2F35XqLa%2FVO%2Br7cRoDf08ZUYBqoPA6llmUKmlO%2BjCyqgX76tDRK3PesuduaVW2ptQhGuCE0MoMbOr4dO4Zpzip0e812Zig0z87PguYzPbqvLxR1%2BjuJXVa%2FhHHyXQzS%2FA1NxoL40WhGVUaMpzoEaQ8QyPtMESglENCqE7q6tmFZp4XqEySN8CAsG4tyO4yFnBaOdCWewMEnJKpARFlDuJVJzHBpydJ6HtrKTBBhwV3xeIfqjRyOlCHc%2FjlTVcgkKh%2FUQTcWWzCVzvJqQ0LQH%2F74MwQkSbASwqLu6dOzyEPTdEiphOUpJgsEoFDsKtjP9qlJTy%2F8T%2BjB9fnbANbMzv3cr%2FN6jCn%2B9zLBjqkAQ5Y2jGnVqxwzYiOAfjJTWvADt5XWQL1a4XqMSJu%2FUXrDcKG9AQYxC%2BiT9K81L%2Fdp1RTOYRE77LaVW20KzcLzeStV4sNtmaeb83KU%2BO0rBnL6Q9ST25TvI3ZRAD5NgKeh%2B%2FNDNnUPVBgYc74xn72JLBBfivb%2Bo%2B1Haky0sp36CupW1C4UGAoB7i5XW7AVjnvMLl3iPj7md64HCphM1cVYMs4Laox&X-Amz-Signature=51ee4ef0a9883b14fdd168135524a052cbca78ba2c2f54f03bb0a99ffbf41574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


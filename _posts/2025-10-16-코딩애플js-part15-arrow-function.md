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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMB6KSLX%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBc5tbTi6j%2BfbKKOffMspvxBaZNko3WVianEX5wVfKvbAiEAsix8WMAtw8%2FuhqOX%2BIr%2BQieRMGPvftuBoyRKvxBkakIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdY3JtOtTxn7hjCcSrcAygSqLHL2yawz3jM33qwvocWzNqDlAI80FNCO37ze93n17FZ9AmWqNzjxeD9QQFtYFnTZpbveRz0SJxwRp0vrva7pt3hjmrkHxvn2JImRXMAhhwG1Gq8zXSrqqWAQwOgFYIqtxutAzqDKyULdQoQv%2B9be33oFZAwMDzpYtSVv9uGtf9mzvgkZVOMGTvWmO7y8Gjd7yyzIzgvDCp%2FLCbZEyCOHl0sJfemloEZbEl0hPb3a33Cgpv4LQ3VySE6YeVjy721s94t3m%2FUbZkcKwpg1YJwaUq6EgPzqUCUTNjgzLOfmabqs271rwJO3G%2FNX89PpIaHw%2BwT03wA8kwWby0MpJ10rzM5L2R19CwcAHGWgx1I8syKzXUPWf5BaMkcAz3JwBTalcp%2FUOH1Fl8fgu6g%2BbIMghEFnPTVQsBJoFP2zIKV8Qk978foKQqRW9LNb1haI5Fyy4%2Fh%2BaPD21ob2BDmRQ54NQUcXCXjBrXcL4gbbA%2BOz8xvnCN3PwIEWldL1XWnd2TW%2BGylWS1O2NKbx3cWtwkrfKPEdtrDPZ15FmJqO9q8Ls2%2FO5qB0B7xY6vaq%2BWcbIrBKTIwrzqfKTUZnYiGHg6oeW97mjIteyqYbwFxYvJVNbbTE5LuWzd%2FFhM0MPryy8oGOqUBBIskdzDeDLGlX%2Bchop8O%2FDM1PjnVPExC9ANEreZl%2FNVrP9ivDfAIwlAyZiCcK%2BwdguvMTibXoL6UkbcXL9MElWxodPkGL1O1CAkNjwZZdGm2JyaqzuoptFyNDZ95kiSt2%2BP1rZQ4rNwUgTF6F2k6znGxxRPrbCW0IyNN99VRqjkTI9tHzww0e9hxiFmOGuWiMZCLp9DaT%2FQOQuFHQ29OfHEX6a6b&X-Amz-Signature=9bbe7e330cec901a7de456bcce6f5da6d5c6c807237a243401cf0fb20f38f762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![codingapple.com_course-status__%289%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/438c576f-5974-41c7-9c32-0ed4afa53a46/codingapple.com_course-status__%289%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZ4MGZR%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFMuB4rp%2Bnv3sXeQN4Mv6dBCi%2B%2BjghpUz9E8CBA6dXIQAiEA9PAyDR%2BZT5hR5LUzIKEYV%2Bdb%2BWOyPeTt11Ilm3zvMo0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnnPNp%2FCkDAYhOkZCrcAyXDyCTu%2BrVvAbmG6KTaRvYpKR8PG3YJIzlVMy82CezAhHPA5Ql%2F80kbqFeNeW%2BLh8q9MKAdbMjrJmR%2FYj%2FtKNj608V6jfXPwKpKHB4hXIfu%2B%2BI9U%2FUPxLfY%2FDyhbYnGxpH2iU%2BbJRsr6Gsg0wK8qEdCv1u4YZ2UYPIslJF7%2FIywT0VLOiQ4PZisYirw%2FUnk7Ro6JRAE0pXkZEvrco7o%2FyEXBHMHK7M4RoCXLEUzZPr7t29ekQ2COhC0OMjpY0ZWfS2qET7GCO3g43ssKdhlAfPvkUbgkVWtJ6K6aR9CaJZtmNsKMge7Hz%2BnNfHo0Zz5L03e5laFpBZR2quAqh6RKOmW0E54BC%2FFmhlIc%2B8BE1MZUSxBWTg7SAVFoBeLjLhM%2BV2gbuzjN5R52zrt19CDoFX%2F9MTF56ZiIwuvGtcym8MhPr2AjklWC6lahG386rJ2RqdByMCox5Jly6bnpMyu2TdnpuhoN22Q0phtmewtyfl0dja1fKY6m4hQRpZ8dr%2Fsx1V8TkN8zylF%2BBQcLxt2k8W%2BWC8hH5TQbXVuw27WbVQoKU9IurAW8CuZKAXsRc9UuqtZf9yh%2BxZPm4NLG1ZfO0GMUlzI6GnSW5jkOjOdtd5HK5hdous5VATgmQCrMLH73MsGOqUBnD97JhWH8IsOg7JAWNHxl5q8oMr16smcdgaT5xaFOrcy45Wwvvppr9SqZCR6yjGsSSYUJCP5S%2FifPVzqp1w4Lp8jtk82CZohExsa1H6W1C%2BL3Kr5kdYXlo0Mf0CZjuboBjqb6ocuV9jdBZ45hrzsBT1LPBigueplSvEgGiUn74u1MOHFtJXLoZrQVszAS3cL3lGLS7CC6Xf%2B0j7r8xBVrFVCR29J&X-Amz-Signature=52610dd0cc932aae6ce8853d7168432aaf8016a2b30700c994072ca8366ec517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


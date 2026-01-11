---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDQPFAI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9jgeQLW53DM1pJ0aJyFmikeZJlU7lTxW38lpRSHL%2FQAiBj4spJOr4wQ3ysrCDEX6YV0R6g79qBDENPjlJB0Guy%2FyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKLsvQ9Mzvws%2FU9aKtwD8QMbEvC%2Bk3QrV8h2RTzs5BZfgJ6BH2bIl6xYgozPck%2BDExK1SyjzABFmv7aH49NDPzpJkJZA42e1TVGM9vda%2BHvAVX%2F0RIbbFDXda0XdJCtNwftv%2BAL1o89Vg0WidFSQI0TDCkrcTVJZjUAby5oedXOVEjnM5i5rtJQCGBtp36FKR6SCqYED6tXRnvT%2B9UOVoFOzFUQzzpYyYxj5ZcMmeYCWqYqnuf61Lw8DVECePfDbv%2BobIuA5R90XYMw0Jiq5P3r46kXB6x%2F2NsgqWmNRtT0OmQLP0vFPqdMaaGRtPapEzUFzkYSF%2F1d01SQn4WTs%2FAQ82GikgeAPMNh0SUPAHiyP5%2BuIWTPdGZDzOEgsWkxa6w9aFfDnQrJLcaCfCbm99hkK%2BZF9f%2FG17YkMb%2Fk3P6BYnc83JHVg9tbcqJlz%2Bdf3qnfDdtcdmdbPgxXqZozSjS44yGaSUwdtEobYleEGYM3yySrMASlIMV9j85V2L9qZB2tjbXLLW4uOcFOjdoY5P2b6J%2F360ebKjLEPq3exDOns53pIM4gUgIc4zHRe8q9sHHgaphdx1Cpg9tdNuGRQRKqckgDFDH9S80VRX%2FkKisNJ0euaKJPvdCyg1aUzlqfwO5dD6giIgpA5VsMw6uCKywY6pgFYmenDWgFV%2FeMjKdL8F4Z4n3oX81IueAG4kE9JHKWmoTrizp5LIQlOOJzt5IFvRS1wiyKXNfBa97VsrIGbrgfz8hDvweOCMBrTDAfAEnI%2F8k6hQUfqqDIf37gzrxv4DZ7O%2FBJ21zZwXnLa7x5xMu8fl3YfJlfSO2O2rYj3EFEJBbrXjMc0nBkmXR3T9RX5JLKX%2BTVAIGbxEduA1m0Bm8%2B0unCaupqE&X-Amz-Signature=e1ddb4d8eb0068d686cf6a8ddc97df82d5eddb9e14c1677be7477a177f2bdb31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


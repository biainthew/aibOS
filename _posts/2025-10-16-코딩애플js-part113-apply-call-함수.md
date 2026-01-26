---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLDQ6QQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDSjjtthJQTTBN7%2F%2Bq6ovbNPZL4v0TSuOQWKMgi3RsmkAiEAnR1tSZ2YVONjJhea%2BK4jrQM5fVQ0P0hMhgLh9oc4gnMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFPtDFi5g8H6eEJBPyrcA5ZJ0QmQ0HaGm5UHJTVq%2FqVEzH%2Bg%2F2deGL5vOe%2FeRI981W3XZv6uUWr%2FkA1D2Ta22RD8n3LhAKTUJ1RxOLVx5d6Y1I%2F17vjfCV%2BqtvvoUYuUbRIDcmXd76TGETdXe%2B9hZHMX7HIMOYdvNFn8aACWhinHEWFgfd%2FjRzQmMqEheh98qSA6Gnmgn0PXCUxcN81oAP7vSKOxm1BIBK7yrgj7vtPnx%2BnL4AhXbfEQ7367yZ%2Bg4KX9kbxA%2FnqrDHnXX5HLVqScfZpaKAsr8hffdZfNHA3%2FrbuWY1Tcnmm1Ajbz7WXWVUa8cNroWoGOASbE1OfRxQg5pKUWIlvMoAR1HPC%2Fb0H%2FwRnWhcdtl9%2B7J0kL4HsS9olGIExfdqybhfZWtbbw5CLaD7cha%2BFWbSi2Yb3x6C2zwWedgCQqaJ0b1Utxur6SK8jTHWdAA2Cibs6bsCK51NfnCdHAsouN2DFkU3kYTQKkFooCoxP%2FMZs0yWFt2V0C%2FpIwqpV7atWmnAnW%2FNXNCiPTGsOM8wTpiVl6rUqQPfxiTb1D86OWLUxZE851aaCU8OAqwJoLZYa6u8EjtTahndqfA%2B1RpLFF5cMpN0HcSZLjv9d0h%2BYAvpzBC8QT99khT6JFx7nmCifqwUB0MPGa3csGOqUBL%2FBTMT2HGAMc1r1VD3QGxJfQSMdF5HPhlCsABEcmvZAt0vXZPkABpT1qKgifZPRsGGg2wnHw6v6aQwJftLQ4J1z%2Bo5GLfPMGBgsY2rDpEgNv%2FIXpocpPQqp%2BPxvJFrwXoPdcTHxWBgSYi0aOOom3vwnhkdnQKdroXm1aGH1K%2Fh8%2F6zAjwkySmLBj%2FLceCrZuSUD5lWq9Sl6yQa3P9Q1F7GgIRQ4S&X-Amz-Signature=ac707accbbca96b584b51b8c36e1cda6a5265c7e3534a2869fcafdb3e722041a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


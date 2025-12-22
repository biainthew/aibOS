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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZCC2PK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FjXEPeoergXLe6jVUj6eF8bnY3uxT0v5QufueazFg8wIhAO96FW5c5akysoFhZc6m07GJ9azvic3xijxDrhyLrElIKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKiLlf3CmLVaosOOsq3ANyEDcLmxYe87i71jJIJCHhQ1%2Fplc%2BNTLbTfULds7%2F7QA5DoJWJ6ZRWg0qqs04nS7BdrGzw8DIjTIOqJEmNjkpePmamwS3q2D6XhMTF%2FR5uxBM1s84CtN1q7NBgxa5nLRqnX5GICJOYdQYnLF2vFopABGEyZYQebm9JvFlQNm3DCoaVsRYXxyKQM68TiKfv%2FLCRx3Ny0iCo3cVmTCyj0W%2F8wTwezOrJKxE1vSzbMMeEa21GmZ4Rf1VkaK4eSCG2XeSBzJHfd83pO7M5zaM2hjZENW9MKuASDaYGrTVpHtCYppnugVVaKs0WaeT6rBEh59bYWx7VCdE72dSMult%2Byivwl1i08XMoESIONJJoCVC1SH5g0J9oK1uYUBIyo5UM63DcC0SxEtWXPn0tjpp11YP%2Bqlt0yRwwlesP6yp4CjXfas4AZznf7haXeZobELvCys88SJqnHezg6gsKR6GoRCVESfhT5bprSbQEBTdB0nE9UuFZdrLXlVy%2Bn4JWNWgbSlYmlESkLCOCpdYsoIfm9cbOTnpTXXif4Qi0kZtrX91rbEFnIECobNP1u3aVCFeka309n66yj%2Fg3rT6p%2FMbNmAgTW0YerW9XxQZnwVf9oukO1fB3pNs9eo2RqpcigTDe%2BaPKBjqkAeZquTUIGDypNNyVjmEmaVqLVVPvlXHGs8q4YUEyJaw4JguKnrNsHC9YAKyUeWYd3AF%2BhNhXVKxUYeENPdKBG0s9DdScSs0JOIbuJSkoM1DXHAd0PkQ0X3mq6VtSGxwgJYWroDHhkua7ufV4ju%2B7G%2Fo8US8ULrlH8g1fLThVpFdNQH8MpQctbbSsei3PzlE5%2F2oh6eiVLL5ib4cn520VPbxB2wOz&X-Amz-Signature=f06a69cc9f02b708d918ad5f9e4dfe212ddcb2c8ccf0bd44902a1e29616d6ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


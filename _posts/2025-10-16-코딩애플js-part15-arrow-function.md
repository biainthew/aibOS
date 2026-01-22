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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNUTJTH6%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIG332YwARYMsW621LvwMK%2FLX9fyZD6g3LZA3MOUqEpnXAiB2fq1DMAxOyNRCnqvKU1wjUlQWZArt5kw6wWBFGPlp4yqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2opM%2Bqutc339KAz3KtwDgHr%2FHQLHEEOoRq9URSV9jABR8NC9IkYp3qpbFX6aERG30H38mvKyOCiUcoPJkhzOZnXzJA5OVyAKYvK%2FSqw9m2qFe3p%2BxZOHQmiSqIuXrUeCCp4vpxM8aFbahTOC6z0Ix%2FSghKp%2Fx8le%2F4CUF0tMc0TbEIX%2BPTYCaqXQjHMhnyEbjt1zJpVxrDxfd9CjC6jqjLCIVgJUmTl9%2F%2Bvc5C3YQJNRCccd%2BVEq7O1uV%2FqPBcRExzQqVnHRHW9un7SeAXmI9gaS7GFIefSCEKj%2BQfxGdq%2FwoRXVTieKCc30o7xkAbVOLvotxqeaji1Uc96dpesk6WQk7Bbi5ElUQd6O2NRESMzQIujhe90oHEO01XfSHkeqWxmaqh2O0LVOpJQokdfhb5bsHF7KhZlmY%2BwWwOvBeRDZXVA%2FivmhpQKZ5T%2Bdl1hb%2BtbWb5TW%2B%2BWxOj%2BssPHJjiVYaIAp9HtOnl4kDQZ3WiQb09eTTxw884ijlYSTAaC3dEfD3CgAuo6SRvD41I9fRMJz6JEOXzW6WbGQH7WbU%2FXHpyZ0cefJ3SsOosF8FDjkLRikmlMqY%2F%2BW8ueNuLCstvUTIsZln7jDiZyhNv0uQeJQMWWo9%2BMtK9KkHYvC9CNGsywfBBU%2Bn3YJkKcwndzFywY6pgGrh1UAXRDYwUpV9oNcVn0ZO4Ag2lu2R052e88uH82YIN6D49vKJrlFfUF9HRQb0kcj4p0GGupRu8hHBsy99IloQkIPyuqlljQCo%2FL%2FUZnvi%2FZlBFyEqFAdxs2MHeLeyvS5wq2hx9uyWwh86oPWN7C65kME4jHXupKAhFCL4RMqhFyc84AkLKvMyS7MhBWZGDbdjT7k0%2FPHQqtbzJ5xysgIg4rRkQTl&X-Amz-Signature=318d37f875921281d6ed3073d2839f1c12f678da93e1955fe96fa7c9f8782d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


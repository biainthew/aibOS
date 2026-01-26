---
layout: post
title: "코딩애플JS Part1-13 Spread Operator"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
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


![codingapple.com_course-status__%282%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/4e8f2922-ca67-4c9a-b0c1-b9805dfa82c6/codingapple.com_course-status__%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHGJZ6X%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDunvfQQQvw1VNU2PtzXl3ocOCnkyIdXbGc1v2d4el9dwIhANmcvsBCW9%2BurmfqaKFRXjBl6BfQOnkdYPZchJ%2Br35lFKv8DCDoQABoMNjM3NDIzMTgzODA1IgzAmo5N6P8IBHSy0VAq3AOOFg4jSzLrjNigkCFL2XlfUzQHAPg35iZO5fTzFO4mYlVE7D67o15u2MSrXjNTIONL%2FvjUQgoWPsDgytKTxzclh5ZWdAeFJgKzo0jENkWfvdkNRpAiQHcn%2BM4Zf3V%2FiTn3oYmnxVN8smBngNCMiSj3qws1%2BRilXwvoHCZk9ypT6vMuw977%2Bpm0JrornFnEg4GErFdY9fAOwoc7c%2B4EmuG1g7ovnmJs4z3zFBCkBukhOh2iZmgEMcvUd6Cv8u%2BvsvkhScVDvB4VDQ7HzvzNIjlpKBYfGNP90pjyhSBCpHVr5%2FdZ2OAouD7hX8owNs%2FCB7Rd7QlbSIyDGjqVADUtcGmtXDv8z9nW%2FprPrQtWhqWNKN5UjAI46xDZo1mt5cMaVm7GoZ90TN2lGMDxMrq6Kij8riz6EEoyiTaE2DAS%2F%2Bkl98dTMDa3THfOBFPd%2Fm0G8CB0bFY2n3hPNk1M26J8TUJGad2PZhfdxCmPx4V4Cnr18A1g7Xn%2FmLuDHe3m8TXXgvZz2BoOL24YmyPRunvzcG8KaJr4tgcMQpaPP8r7CX73vBneZaJrbwfk4%2BAsTzbI%2BRsn64ySk27G6UdVi9SK1zAMF3jOA1KvvCHciSHfBXXJZG1aVlTsS6rhhpcHwjCo2NzLBjqkAeYqKauYTai0OrcOsnjGWA%2F1t0JLVA2yFee8QVckw3usqEW81zSbYLUT4PFgYNz5dd7BhK3ycQykGHHDYDg379GpCAznurAdIR%2FgkyQH2WmB13Td2WMmDfhFz8kI3q5i5ipl93AR1AySoO1si9C6BMFnu%2F%2Fa8j59WlyqeFvy5SiT4LBJDYucacQLelWkfn9xBkjpa1CkCZp2un9RkuvwTz6Vv3tx&X-Amz-Signature=a0327a36f64f7d1215b07a519b44fe077b8a6e7e925807c8a6aee0412fc3d322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


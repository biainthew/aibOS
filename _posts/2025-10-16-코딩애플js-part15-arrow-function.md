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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q64BJ3V%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA2P1lilzulwtm9mffsuo4OePc0rd1PC86td0w3zr%2FwIgbITaDJF76Sz9SJ%2FmaF2GOdsOA3BLk7U80jQDNtXTjNkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLpDDZBAuBHHR1G8WircAwQ2El7UVRhYOAkQmpwoQhcclMXyNmK6xIftQ8ggywCWkehGCbxAmi1GXW1uFZNZrExpFf421nJZyrHASFfhKK34SYIg09%2BxrbQlDuG1sctQF8zyNKsvda8A9DhJAY6uVYID1K9zcoOUGDm%2FvZa805OtkN23ldxJSe%2FVEcHfa%2FWr%2FcrqTv1QD1EjHazR7wxIRYSZOqH7CN0jOvYrKMrl4efmsFReoZs9%2FeScMrYJW6OrmoEoNBXN2una1ERuTQMwRYmrvqIhx3SAhFTJb2%2BA0v3dcQpWjtlmLS5tJu3SSvSQUyCUx9WBScLL%2FgOlwOWzwHUUDRYZ9FtRviOtldDJyhHW%2BlG0IiiJBd9H2ZwU8Da%2FVS9ww1Guyf0%2F26J4uRuvLubvBbJNIMG8Wim0lADJlLYpMKG%2BVQSFEst9CUzmrN9%2BXe05gHpkVokgyjSGtH6hXV4OOpW7sENfRs0envzVXC811N%2F7bosNHclj4kFpdN6TGrn2uQzaxSkDjNAeh4HTRJ73k%2BSNRhQgiyFwj4hjvHvnBM6U5Lb1Ax3YfJtypKJBAoXMkBcIO1rnZO%2FWd9Mm9Z7X0sp%2BIpX%2F0wW8LrNRySSX6kN4PGL6aMKrAQeVVHMeoz61ZgbAwsDCVmsTMOWt8coGOqUBd%2B6qaHqAGx0es0d2WI2MtHYPru4JsAEiIs%2FhthDxCdelW8PyHERdQz%2BQEGAHo9qcD4hipKrgzRTVNZEYHK8Bdo2C%2FqQOU%2BuuOR3K%2B6frAR9xdrI8GRRUdmBhfXtzZmBGWwDlIELsJTkRj9qCh3uSi0gzmm0ZIgztzkbugb5NvtMA%2B4jktMSyDUL7UDCri9AhYhxrR4%2FBiYp0sAUTtmz14VsBOaR9&X-Amz-Signature=e86224fdfc550c32421ab8847cf88f6852847ccad11ca79a35b611da7f478092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


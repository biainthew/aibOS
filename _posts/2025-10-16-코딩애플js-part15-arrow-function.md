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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWH3FC7F%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd9HVcEl1pW3S%2BFplfQcQn5C9mPMn%2B2kKOPHDp8ZwldAiEAxypfhq4xJqBw8Q7aOh0EYdNC5Sp3UZTOGcp7tNS1zi4q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGeVQFOdRy6vr2ZwkyrcAy3AUe6f7VTRwrhZSEKwLRmSfXvwkTOli3gx2dj9gYCOKME6IC9Pwpk27%2F%2BJCpsEdjVFrVc%2BE12qdl0cQhWnyN86ee4cGzPNPbkcvB4x9K%2BeZlJHgZknCxxkGgwclIVnEpW3mlzoJH3xRNzraijfaBAR211hlfPli8kHce6s4dx%2BpL6g9ZKXf2%2FUcHnrVC6OaMFMdF4xxS2ectgjl28kypwMV2aLxhorhX%2FaDXBBAelrOQ78afrB%2BgWckMyjDT83NNSrIPf1ke958HtC8ar6vDjFTx9AaBLu2skjRbW%2BDcpvpRn9YZ3PbwYoZIZ%2Bc%2FIlC8%2FIQ6MBRKH6BmtIVNMD8BD%2FES4D6qObakr3x1gAbPTDaghkNhGcEtPMohT66sX0K%2BH4diEz1SmlE8KjrIvqJww87j8xz0XnwhEWffVcc0BwNBvGnyxei7IVckPEVPAciGmdfHxEbfnsGPy4thQdJaJAlQNfk1UcsAoGoftYL5xRpeIZuYw6VXVV6mYW4O022D0VcOrJoGw6U6qZYRwWrmvvAfrytVPCcTwlry93eMbg2MtYcSwGF4L1U8P%2Bsv1fVyFH6ubZUP8pdUpi%2F4txgNxTWOBgO669nkRt%2Fd%2BR1La1kRijFaI9qf2JVy9UMJfZ9soGOqUBhLcAoENpZgGPrD3MpoV62T%2BtOpPyQgTQsEbw2T1rRpUoVKZ28%2FzkdF2V2ndb6XaJO%2FlxOcJJfMnc3IuGzrMWVrgewb6cdQVK6P4kT4ZCjYukKF2bYjRhOU%2Fb5mwTED2M2mCI18Gmx99Mcj%2FjICzawAOlJEufWgP%2BZToMq3WdXXlKcrLLXKIMB2rm2C6A8x8afqRsuFObpvlb%2FA1XLj%2FN9jPwzv1G&X-Amz-Signature=79f6ef257c163642eeab974efac4be61261cc53156ea12e992e8abbc6f894817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


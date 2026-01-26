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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE47LMF%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD9aXxhdTL2CiescGzxvLCAXuyPKmiNhJRnBhqldPSZNgIgcMX9tph9QktKnON%2BreRqM5Cje4xd50H6nxv4zI3s1kkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBqlPlTpShUsJGnmEircA0C0XQcaKsCU%2BWya%2FuHPznUA6BX77GXQMg9GeyS5ZsWnzIoL7XjXvAdkFrJkH5vzbwezwtQaazC3Mfay5wqqYTYm7TPj09nlffUsbcj9n4nHUee4w6%2BntrCHxTK50%2F%2BNsWmPyWUvzM%2BaqbXMHiZNF6ZZqBwRm1KGiuoBOScZEfJDtcnDVoYGP9O2M7VAM6SDpTkXSZWO2Pm0Ko8Kkp5iVare4la3zHU5CHin%2BnSNQn01Z0uvYkF%2BXq4wF2mBySC4cMYUijEikpQilB0%2F5VcSwq6MF6G9z2u2vS57vg8pSUX%2BLt4Yq7s1kuWJ3x3W3m1wwR%2BkmnI7k47zM%2FZUU%2FMtJTyoj4xMomNpAyBDSChVHnh7l7JpMSnYvhgkqJ2DOk9XzzGAtGDfPFifoatXAZgtraRpKmWykIvuKR23O1PKfBDtGp4l%2FQnlJQSGpnYL7dks%2BgTrSHeRalkEbZOnsPndfCwTBQX0VOnh7KMLRJlSC9EqgisgK5m9GuJd1a7s5m9TyTWpW0A8vO0NxHW57gmK141yl2IqGa9qFecX%2BNEcCeg%2Bmcska%2BhbTZU4VKATOxAO60gtW6nUKakBvSjfCCjJmHZE99QHzQZJrSc%2Bqr9AoDKo%2F2JQsY%2BBrbKSdneAMKm33MsGOqUBn7smbmyzvCXudpjRUynfqkMp7CpwFPmsy5SuyUx2OcKCvgFlLr2SWLWPfuTK%2Blex4ve%2Bnjy9x6d2YqnTuHD%2BHRRQ5P7jhRzeMwPzgRgZpIAGucDuGOn%2F6m7JYKvyU0AQvuTRDAQlaeWmTMtv8sYjrG1r81uZzSQHGrSonyjSTZvXP1abwndKbJZPsKvf%2FvsJ14U%2F3orMh0n%2F5fYN6NuTt%2BkNEaQH&X-Amz-Signature=ca1a1f8a712ffd547655f300ae1cf80fbb5fa62fc811c527e42459cc37f8a4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


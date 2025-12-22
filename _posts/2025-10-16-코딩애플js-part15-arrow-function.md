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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNSHNUW%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGbVi3CpQ%2BhEEJG4CeT9yuIw1BWf%2BO6rEH53Gh8IEodkAiEA2A%2FLdjaKDj6YMQmJ0Ai85c4cI9czS1QYvHbaXEam57YqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA30RRlbPCstBNZCCrcA1XWsVw3Fq%2FIMFqHKFi288AuJDL8pCrRu6dKgspK8uPemHmeHjsUEIcNqdUwVz53tcGBl37wuMEc2KEzJw9sNCGIA0L38SBWolwWD8eZ9b4OEOET5xtOiLWaSuHHSgYju3dL4XFD%2FzFVXm17s2LNU3CvGPx0VAjax8aPp8smDW%2FteDX%2B1bjRRth3fBUYBCXMds3P%2BPKpgCi%2BzARq0LZT6RYopgWuA6OQsrZxtYZ%2BmCIPsl8ErWZGEPtB2nvJw5cHHviUUBbb9ODWgkkoIJgMm5bKP9kdwMS20QJv2OGPN0d1RLgvgD1d12uOTwoEtyXoLPAMSOtZIw%2BsVwb0Xotps7wlps5780k0pcCD2g2m5GPJlGOm9YXVjtNwCXGHRRT0xnONZ9%2FI%2F1DoQ9fVTrjCnrQRaBLHIHgOGBXW1%2Bz00UK7GxX1yXitt%2F11dwgWR3op%2BgJUhaND2bVftmPX6kjgL9mn%2FZFuK824jCA0Po3TEy4AU2EUP8inaIbxcp6bZYBE%2FlurkEA1AaDzV61aJKQLFz96K0MvIAaOogROynRpCtGgytoSWuWT1pWADxPSRm8E0tLleD4OgMYMuK5PXbnuzHi5Aflnk8DcYU%2Ftqx7DdngFQ%2BgvsyeGwjUVnrq0MMv5o8oGOqUBAzjPp1qq0989Vmq4N%2FSFKKvhIO7MMqmKH8mrI9F1mLvddTlHiOOEgfRbeHmUpjAgY1uK9Tp%2B0kQFcFReRjzkFtM2klG%2FXVhiyx1GvvgbVOAIe2GqqWyCM%2FyWoO19ReSogjd6h1N7x6yS3fxE%2FWHsBmmtmJzBVHWSnsEkNEo50nGDErzicRk869hpWw0oO7%2B72ZHWyJ6%2BH4FWw7%2Fu%2BchXLyWOZxW%2F&X-Amz-Signature=a111db96417af77d540cad8e5e9394892143ceb476680f8f7c87471e80fbad86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


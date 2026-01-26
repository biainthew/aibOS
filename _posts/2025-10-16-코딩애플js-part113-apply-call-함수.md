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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KKPV4M%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDWPb%2Fih5P2I57W0xS50%2B4pHF105CserkH%2B%2FjN%2F%2BAjBMAIgepHbYms2PmzPhX0ZeEIo7uKsr57VK3BmmDObM2B9%2Fa8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGU1w6Z%2FQhm0uLuynSrcA7hQCRhUcVOxnj12elQPa3apHIcNtVTeCKmuIHacX3eKa7UslMfS7SODEFEsp0mKnVIa1WxmLUaXBlTHqewoRRIP2btaTKi5zLWJnqNR0QTZzAj0YL6K2LjvvSTGdJdLPIWXni1Nhn5unZDT6iWRWjPnNxZDQ8EN696a4WUrf7xDh9imaWub%2FZFPephuJfqyeBMrWLtmPtYIPAxL4i9NbNOHjeDeLiztL841YyvV1vDhaVeUqVGsGD7UiV5BeCnP4bTECYQu2L3%2Brs%2BE7WsXDV7UDojlem7i3twGCG7Xsm0vxNXNz1Y5FvAu0b%2F3vW8GeWQDhZh6MjdXW2CuvevQKDZSivP0iIeIwtVuiJELkI8yd3TkQBREqFlKo3JN2uHGjmx1C%2BG5v6o3S1CxhAEZGlYIEkvbgn3FxO%2BfsgWtBOtTR37OVhS0SZIe20EMfNm4oLaOfUV69gwnpH%2B8ztfP18EsAES%2BX9KQ2O1GkkyXHd66JhaIGIgwMAVSJeKQWFDvlAJinBHgZXzOp8VQ264SaofX%2BD0rpUjB%2BBwLFScFLQ2VZ0WtslDJU5EfUQotc6dmPR26VxGhVPS5ypTQeKHk3QhfiQxRiqyP56kDAI%2FiEQvjLe0PzKNTVIbWwITMMOuX2ssGOqUBXs5lKlxFXvNGFgG9%2Fyx%2FvJKT9s7TFICXuA6WAsO9U7gwFEjx6ldM0po%2BcIJLQWSN4%2Fzm2fPaEpuCAYYVCEeh9%2FGFmIQtYqucL3N4%2Fq7rmuxNmKYqe9BmJYMwn0PmDwDqZff1QahQk6f5q%2Fhxza7JpgOKX6oUHg01a1EP9xJkxbQs2paRuDnlPqca4RFxjCXXsxdiTCyBb6HIYb3soaLzMfH7RHI4&X-Amz-Signature=09faa669d8f520da52ed602366ab5c9dc998eca45ade01f7634cdef206c9397e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


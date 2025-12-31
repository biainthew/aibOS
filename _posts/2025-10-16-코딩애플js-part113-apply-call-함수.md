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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKTIBYZZ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtBSpAv8mfkmQVTf2xn1NLscfNS9sCZ8xsXqQRLg292gIgWXrE2EhRvqxSxB3Tazeld1yNdqc6NwaNaxjvZWPGPWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyBLGDzxTtPFz5rryrcA6gCYiSVErb4FTysoQq7mZLQkSnHMhIWIdwuKLJ1X7ASn%2FqBpC28fxMbbtoxp8goUd94q9Uk6AsZrvdFUwY6PHv32P%2Fj5c314Q6AP2sY72fJAb0wOL8K52mip52Q1va5zVjb1SHulFLlh5F%2BW148TqkUZiAOtsxneQ%2BPVWPww2dIjtB2TNuS%2Fdt3jirUkOH%2FR0AvfrsA%2F9%2FGWFceknlBYOZWV1R2ZWIEbG4Vq5yoIJpM5hjHGHqBjla69PT2Jf72L2aNhF%2Fau16mEFetqMqVBODF1aolRqZx3sx%2FPaLLoQ61oTDJPkOW7uLnsn4orTGqwoktF1uddFu418Nz6UeX7OlFjh%2F%2Bwy%2BML3pUL5El9XK37yXA31nOaWsZex8OGRZNcKUSw2gJzsrGp9CGjSAqnlRQOPttaTjUanOETSMHdzPUNviHoJbLW%2BaUaLBt6XGNbHBSZyxxCFRjQi%2FDEAoluThvnYfc19FxYKgUp8hpVNJ8R0utkGprlADc0385d8xBWHj%2FzIRbDPEEDaOwZj%2Fj%2BHUgZw3qRQwaUUkb7KDhrn2eRTQ9pwb5uB2bRkHvyqlKQYwZRVg%2B4gJvy8Qm5ub8mEn94qKDBkLyRGgZiLvIOAlZjZlVtw4PHsXhpMNMMITc0MoGOqUBCxatbzNlvLWavgcg%2Be4M3PtTGf5dYUlPQTkDW%2B32uvzFwi1KsKa3fxkW0xiCTK7D%2FjZlI9zMydr6MM8OznSqDYHl3pbu93MREapPuW4CgChMroLsR7DbvL4orRMCwHSADMI66eCo89R4qGlCAOD98zoBgrcn7fjafBCF94kc2fiXjyuLptO6Ogj3sLgZjQQqpyvuK12U8ew4W3GHvGwjsXlWNulL&X-Amz-Signature=2bf645e862a525d95c57b52c2d3cd607b8f0a9f55875cd808c533d52db5d67f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


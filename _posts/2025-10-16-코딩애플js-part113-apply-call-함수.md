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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMOZQIF%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3V2rbyeHXQ3LqQTtqRAob76MS2hdbpK1sUVaLbSnzmAIhAPvPTa1bg69rUXpiF%2FoKXO0qWQJGbA1j6kVasDRLgVQLKv8DCHAQABoMNjM3NDIzMTgzODA1Igw2gg3h289Gg5v864cq3APx0r4FbUG4lMQg3IPLlEuoLZAJe2URm5HsbTN1o7aokEWDYJS5ll%2FKdpRxqkneLXFNPji4bx029ZfyyS1Gzts2uQ3SE%2BS6SIJGDdhr5NuJWWysLtIwnEDye9Tb7HU9UwjG6RVZQbkEAXXm4g8cZrIFoXtAuSNLFWNRm4v6hSbx4nco4%2FyujzlDj1nqvx%2FaaYgTxDIvmehGnYl6GiQ%2FxCjEv0GbD3j8xWJgUWm2Dm5RqZrk6i6tDb25up6Zn6t0Bg9O11oa0SvoGe9bSaHRykiO4abcSS6MAueDHr8gAMaceD3pUG3zP%2BZWFWMEDdW976mmwgqVyPt13YS0vQuttq%2FkgD2%2BidBbmUVakOvPbN0RsQvvS13MAiUQFfi49wO6Kii0%2BBafZdQufuNV9T4CqcvMmUXIJZ0dvEw9FvyahPAc8ZVyuM%2FM6Hn4KhuYTPSLRb2HLQdlFMoiIPt%2B%2F9F8YDHpqj%2FoSQHDLlx1z%2BjWb4D4kC18fpf6wT4B5HVSNOgfbR6b%2BfAtpgHHxFTC75zuhuiLrgVgIErXYfQ0sILXNLkHQkr%2Belf3g%2FZDaezG7CI9ZwR4Uq997S8zV21qJ3drreMUIEYr9PVemRLyfO75VQ3yfxHYdd6HZAFIGwS%2FdjDFobDLBjqkARagZJv68MOUyQvqG8akKJiBtGC4xNYEojcl162JZ%2Fi%2F0Fg%2FPgTaBLDuq4Ub1uC9bryHo8oEW7Y7ZWtykqvXWXWFBJ%2F2S%2FCdxGHZmsP63Bgbot%2BGkMOmlJZLvzwsVbAyDBDz%2Fk3hHImUgEg0dUsmM%2F6UHYOFB81%2FQRi0mfxk%2Fl6LUF%2Baw1wIH%2BexU3lw1TMi8F8JCUkgse0t7CtyPVJU4rh%2BgUAG&X-Amz-Signature=391d17f9494b0aea45634a1250e7384564371f17985e479f31dfa0839244e6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


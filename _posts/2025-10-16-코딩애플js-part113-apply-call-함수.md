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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UR4FX3B%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD8cQSqVqUSrI2XXxasf1rN%2BBxt0w6YtI0sz4Gw9XldywIhANHwIn19KyYMpXdeiOdcr3vzylsJXrJsww581AUSzKhQKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2mdJQmkoidMaKa%2Bgq3AOJqXTDdKhziTUrxLehSdbcs8SWEQWaCc8qQ%2F2b9amPHbXKlq2JCasRD5CqRP7KG0xzIs2lIlTW%2FiR0dR1fTPWOjTDzsjSQ0spW0MjoGrg2w%2B0nseQkVNd1tbpRSd%2FLxXU3g%2BVi%2BR%2BVysF1aZ59S%2FGrgo5qiMpvSznK5jUJIc4ygNbx6E2eOicRMNg%2BMrSlnY65tA4JrVQ1%2FTHh2PmyL3JKyb9EfwG%2BUhJe0z6DPxy6WS9koGp07q3t5Eivxtpv%2F%2Bcku7ijZV9B725fu37mMtQXZlnCiMqK%2B97e%2FDf0LOwOoRV%2Bcu5YDGc6oUIabgPQUOhAB5f2i90nwH8wUjc4NsvqQH%2FQR08Wpirc4s8dJiKboFOR48ICI%2F2fEntDDE5NWj12vVAwnT5mdvlbPnPV1U0fs3aearxjVWHtwljcqjz544kVpZJ31H7FoWF9XTHabbZVOVv15TR54gkkeiurq0XnizW3dgsHZw0R%2F9uWteNbJQBSDEfAk4BoVahwp%2Bh0RworqoaEknaaZRxV1l4TA7MobSKKbsKnRbR3f1wFRjdhFGmnHFI5q1VSfmyeiC1vA4K6%2BOaSEAP95TGfLcTQ3zBkZYwRkrCdaGdTWViLK8bE4xvjrzyb3FKyaai00jD8%2BKPKBjqkAV47KsfHQQlTarTqLzJWDKfYtcBlY6NTQMRFic7qMtm433NifawiqwA2bYWi1SUp2yJ8hpfs8LWXXmi5OgZdsRDf3zv0QCpGHsfEAZiuCLWM8ZP3KfFMcRqx5VmIgB1fuBIdpxt6pWKmQf03yEVJ7nZeBh2vsR0Od5NXBwDKCrM3xM5b03pcG5a1r2Sag%2F6F%2FFxD2fXA%2Bg5YjfdI7b9CI2eHNfeU&X-Amz-Signature=49037478a56ff74c97d7e3e36b6900b2d43e892627d337b3b99e1971ee8a34c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


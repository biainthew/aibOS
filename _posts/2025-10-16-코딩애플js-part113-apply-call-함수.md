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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNKYL4F%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIQDTUSpxFIyZZZPsR%2BgyGb7U96u1nB9TL5uEj6%2FmSAClHgIfRMWEFEAghk7n5Rgo%2BDa0qQY9Qo2djvRKs7ihj18HMiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrSfzXxHA3PBb19huKtwDuP%2FY9rZ2cpLOcEE7b0cyDPPj%2FU1y4TZf5XUy%2FkAjrfXoMZhod5%2F9v%2FepDqynP9fyffeK%2BgqPufVmyZ9W71TiVVg%2BSvPUPzW49O%2BCyBIN5MiOSqYy4FLVee5cIRp%2Ff1eEb6LBMoZSFZEBR9m0%2F4IPstDniNj1X4ZkXuycednN19fpWM6fIhKYF%2BZQeuKch01he277cVAjVsVdR4S7VUmwcYfqN6GCvsD6A%2BBeEpvhITPRRwV6eHGTDDx9jNNqFnlFEhBwcJzb4IEb3PB%2F9H%2Flz85eQE63zj0eWJt9U37fUtSU6evme6TmvVveOb2vYPeugOJqUGiM%2BuqlpXaphevyd9u6lbVH8G0MGnuK6xJw4GtqmPL%2BfqLK32fbZGgmnwHztYM%2FbmjFd7vgCxh54yXCx8GPMOmkkVbMJXzhect4XT4kFl%2FTMUMkaiF%2B5wSHCVkDfe8IAtZua6kTnj7Sbr5MBXLipw8%2Fqe7wgFGt4FfDcomGvRFiHqSeqoipH2R%2F4ySmC3WFoMML7xJNxtJQ7SDxdxvtp0Q3PTMyvs7OMeNV5IVRD8zVsU8SUyRaA55w2BrRPXvbB%2B4gQrtP0oXZnVTX1a6rNPFfyQhIi2wqE3opnVUV9T9JdHYQ4l108Bkw9JWkygY6pgH%2Bk%2BJCEP8gtSFss5HwC1UdLe5ES%2B%2Fy7qor2GBozl4VWPFk3hRsmYA7DJDk5wBbPoh5dT40BH0xsly8LEgOdAHbwAX78bfSBzRWNOjr82BhLhXvU3xrQ1t6foM1vXy%2FW23Qog37iD3%2FZoSeJZFxRGSnkJMlb9HUkYVhw6joVge99NTk7x31wzv7JM05jvPnnWsACeduIGBQe55%2BVlRcxYLxBgbWKfkZ&X-Amz-Signature=5717d2b581a0fa667025738cdb437c62a0b7b11727d4fc0288b9f5fd81acd7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


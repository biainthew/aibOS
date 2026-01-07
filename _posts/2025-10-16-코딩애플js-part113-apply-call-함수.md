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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227DCY3K%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwDVQ9Ti8lAj2AwkhTIUoHXiun5IcTZoWPKViD%2FtdakAiAhCv55nUyaQ46Sz%2Fm28JVgdfZKBn5JkTPj8PgRpWrFair%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMho%2BUxcqcgqH2LN3NKtwD9iWs%2Fca94RcoWse2AVgt1H5PbbczFDPz%2Fo9FkXUYFwcyoqN1l6i25moAeLKt%2FOwO83%2BlalKKg5miPw4j62CT%2Bd4FU1xoZ7TaU8vMMBJcwsO9vVF8OOUAAxvtkglXSF%2Bc6BhqyybeQMx%2BG6grdeVzMwF%2B7pd1IuURLA7XwTwlLckUcHnMVIYu5revrbz%2B9%2BOZSS%2BV1SC0OTrPqBxjimTPOsbgXDiAz5KP3iz8UELuZvhKAePaYngLHg3T2UDbMA8%2F26qKHBV8zH53oJ%2FW7Mjar2xHd2Kx7p8JJIBZgr%2B5jgTzAdXaJ4VvIuLkZsD65Nuk0L8HM0ZmJshaKBFrP9NSMfwBaoO81Y8M9zH79U9Gk76BaUCZpRB7W47WRg6bZQBhFMrxzQet6n9RWBasWlGCPpqMXsWH6xnZ4zAIR8hVnpjgT1Qv7%2FDvWjJHi7g%2BKpGvD0zqTwXRHQtEgtD%2BVcdqrnYcbexzZdKWgAyhbmZgWEGCDefpeXdOMufx9zO1qwOyZ7hv%2FFVSIuJpQkrF%2Bdv0r9I1reez%2BXx%2ByM6E0SFIW8f5zXsnUkEpPgQhV%2F57x%2FLFnP4YjTktgjo0LxtB2vN6Qq6KO02cuafKUn2UJ9aBKV5CUm2%2BWmRlPbc4ZV0wl9n2ygY6pgFq%2BUcaDc64SbitNX%2Fxs8mLsqBSEO9zOL%2FJq7J7Lua5YCVcw88Ou5GnGk4YUQa1asThcT8qNdRL3dmi0ki0r0CZB62SvQkAfuaJv%2BxOyemx%2By3n6%2Faxl%2FEgjDNslz%2FguJkR6g39l5ynmkXr4vcmwWTqciaVuIBDVZw9tZWB98x5%2F64K0jZbHE5yayH3MVe9e1WUF568qIJ0DGigch%2B%2F8F1VLsNa76zB&X-Amz-Signature=0ad054369ab3ff16dd0ef044c406da61caa1cbf6f3eb7944c68dd8a92850b81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


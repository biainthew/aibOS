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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTLOVHT%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPdrx14VGZOk8s%2BEqdb0nbavoNtcnsm%2B%2B1JyINNOGQiAiEAy5OkZkkKXy1q11wCmc6lRbG5iMDcQURQ6gyTIeOtulIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIa8XxLOmCaE5BICSCrcA94OlxqmOhNh1yAVzSULoxSHcbuGdG8wOLfW8gMvk30FA1w4rLH68DfjpqXpITXXzuCy8clsfSDV84UzBi7GgRBlVRfVHY17CcHA%2BvgJz6k522VOoejYaucP%2Bgup4nUDUkIOVeAUtCVGyO2yJTOtn6J%2BGpinf8wTa1DUWtBtbeUJQWnljvorYGhjghNeulspZboh6ZFRGitjnB4EZ76nyfFfc2AeJ6AkrL5s2%2FmW0e096PYvu9zDxnB%2Fms59quMt6Ub%2BAQszF9vVu%2FhIXug5JL2D5sJknn0CVcyo6nYYswDuHHmm3wqTkxvo4HdxO4bekacE28Cz8dkUvL3kVyl3S5us1Yz%2B5ScSfekokEZua0D84zIehsKk3lRKzT7VV5DZMaSiSw4GRGbtwsjT1ecZrTsu9KzrFyxK8twYllI0YEYCPrJuh4lW5Xx3W5eMqtJTRzKxgZXfghfcLhsr7LeCZW795%2Fa022lZV%2ByPuRolGVeDL0l3auktJFHck3CuIzb8WaeuStciCoB0zYd60ufdBFbo3bHOwhewu1z3hojt7W30demFRCcOsA1KO6jaljnjKnJGzxqWT2l2n9iVINsUfueAZvfmuYQH%2BzGOMtv0da3M4%2BIP%2BgGsuoD92a2VMKiIwsoGOqUBl6WKN14vGuG%2B9FR1mxxkGhzdB2%2F3pTAZ0gwFE8DBppxx98SxoLYtZqDfqqVEt%2Fh0RwpLoh4H8j%2F5tZEwvorpzDwW30PKppWT7n1S9ispan93eQG%2FsQeygHX%2BmNJYpAeH%2FXM1kQETleM62WS6JDP4kpALryzOkPOMjomdYqbfhNHZM9yoI7SFqRdDeYJjlIicg%2F4owshgC1k6tng2qo4MdP2wPss0&X-Amz-Signature=fddf10bbc29456ee52b0d7699b3343fd4b0ec6bdba85e69bf56b13d610a48f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


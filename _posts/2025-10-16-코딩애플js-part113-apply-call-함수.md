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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGYQC72%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5f770W1OrnzfL5YxTQ9nqX3N%2FEpiEgfoXphf8ByabyAiEApftYwaMMqxyEbG%2BqoKmO71MJZoez3au3N4AHx2ENBtUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEISDubCd5s9hN%2BcnCrcA63pO6LydasAA%2BhTJYFTcIhuQ5gxV5H43B9yF34WAsUDVPb%2F3RktTHqadEsXQJSXxyJytA1IA5W6r8CB3l0ZcuDVF2Y27A0z6cxzomLqXBzdBtxa45yyDnyLAaxpKwCeC4C7HfdJFy6hohR6OhzFDgVqXMDQnfimlnEQU6woJ%2F6mwJutLE657G%2BicdH%2Bs5s0RAIAWqxsuIBfC%2BWgJ2NxWYo%2B8kjTFoESnxn1sdEgW2h7F7gmcWQNTC%2B6JD%2BjeKQQOYnH%2B7oLyW968GkvkO8bptblPsanPozi01PxiFOht0seh3uYQXvNysjlo%2FaGDCrCcjSNTwsHzvlIQPPB2ASSgUeiCcwb1%2BqEjOKfbuneuhiF9pJ3tJXHk0IxkhGSmsO0NxfCF4z2QYB%2B1z624rQdGgauVvmJxLw5agshlMYw1qJf4OY0i2%2Fa5wFLCgYM6ZcqkTO67yDqCNAVPr9hgKbRwXjVWZIZNFQctwQcl2Jj3eNh8VzGF%2BMZ5ls2kLcbfeNkIBPoYOSPow3Ydmf0QyM90oxbdj6YwGwZlcAYoJeUmCLSqaS%2FIYMr85VjQaANbrEH1OE%2BgaDeI2LpmqOK5e3HQdg1Rz80RYKANIP%2FXpB3%2FRqCxhlkzyIgeFLEu3UDMLrLu8oGOqUBJpZ5bSg%2B9AvwKY8dhxIDyIdPPBNFJ3f5Tu1IBDhsEF66AEeZGUcZ5eeCfl5c7Iib3LMyaaD4LL%2BVTz1m6%2BRWcX4CCteRKi%2BwcDvw5SKYb8ilBO7PdSu%2FZw85Ob5d8PMnYToHdvhjwfOsOJB%2FH%2BviMJUAr74dcgZGQ16KjgE%2F6B7t4BjGpgRjxQ2F8jmdqbSF6VbnfoKTY2uPxdpoA4ZRPtGgSC3J&X-Amz-Signature=779cd6cccc98a80a7e4937817b5ee07643b470afc8cf318d8df841e6cecd30bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


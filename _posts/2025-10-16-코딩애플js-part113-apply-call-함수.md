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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLC5PIH%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpgaAymfgRhg%2BYSsGOvw2psIvAwH26hj%2BPMmzefWHIAIgVZEml71SEPvsRVnM1Gdz5dwgS6pavcaupEVpwveYCsUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOE4dp7zI1HJGU%2B1TircA4mli4Qu9w0pyFvkapFTH%2FPon66fiqvwvf0C7UMeaQVTCfv8ur78bZv%2BFC%2BKwOtmU%2FRbY%2Ba%2BuIdNe1DNi1zjAuQSleY9uE%2Fg30yaHKEZggWi6Ew%2B4BUZnU8mav52Rx3SEEteVTQLYW7F3OsXIuYgSicAoe604kpz8v%2F345DLCDHUIIPmytCuGhfugEK3iRzfrAl7hWawHvfN2cswhCx%2BddveFgpQOKIf6A4LhJo4g94sZoPRBrIsEPGiquypBbJCOtaV%2BuIChZkDT9%2BRihVY7tz%2BYp7VccQpm5P66n1vPQIDdgos%2FQEJW%2Bw7cSqWcVjYQEjnGwq8Cz68gEsqPdvSyjmKHoLoR5qdeJnj3v4E%2FA1JcEJW1MlLcTQ61Uw2kCAyBSwQ%2BicvyTLRuhIGadZU8owyjkn3VCrpp0J2BxedI6SA0hCKZW4NvrNlK5l7FEbLO1HSbqSwhiaz25T4SP5l39uxqz6JPtVQ3f46HQX0HzB0CSCMAJTq1zYVyqIGHVXlozC7%2Bs8yROvksVAzOItwBg8am8Sw36u9uatu%2BXr4Q94KJbwJlursDEhhnYZUGoRduhHDQmEult2ZBDHcf7Dvzxo59j5qKpU3nEVSN3yzNikQmCT0W6Dy%2B9YhNWSmMPet8coGOqUBLUEVjAMBX%2Bz0vqcdzLD0vox%2BUJml1X3w0a5lLnLwOIwWmMAK3eQXdnTtBuExTd0S0LIv%2BZD%2BcvRKFQGIxd1OGNNoxoO2MCvdwUtq0osZgrNACaHw%2F9E0cTXX5GIUBSc4B51ymwi%2BFG9aqpK3IhuqAnOGmGrpfYHZmH52b59%2BM1%2FpxdSq7SBkCUFtO4CZGkZvLHINtmwlL8vj44rIyTYIfZcBNYVX&X-Amz-Signature=42f1cc1fdb0407cd116f4478fce2422076aea6bce6dc5b4cd13874c2371d219a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
layout: post
title: "[Git]잘못 올린 파일 지우기(ex. .idea)"
date: 2024-06-04
categories: [general]
tags: [Work]
---


### 1. .idea 폴더와 같은 위치에 .gitignore 파일 생성 후 아래 코드 추가


```javascript
### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr
out/
!**/src/main/**/out/
!**/src/test/**/out/
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/dd9ced26-ff22-43fa-8b7a-87f8c3a2aa0b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ4MVWU%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T093920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBwr3Zu4UmAzJ0cKo%2BKlIJI4oH%2B99gMWHYba4FwHm2jWAiAexWSWW00xjpOchyOQLqo2JpD14n8flhgcJ5umoKBIxCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMpveQRwJhLkHE5OLcKtwDJTd30s2yLCIIuJKm%2BrT6y%2BOVlCNhsMQSvzFf3B2dzcahc3dTFIWX0KLcH0U%2F28NWzYqBVBUxkOt0xSj8XYCeAGKImMJMeatJNcrocZaGbH0OcFCwH1b670ZDXhDYewssAwI%2BC%2F9WR2L4tl%2Ba9ySSCC2y8ER5Ue%2F%2F%2FgzQhEuzzS9QtLzyBHnXhHAEQ5yjKRdSvsKS2NAx0ZJcgJVuiUu6IOiszzkLZHlP8fpD9xGZfkNfAXHr7fshHBG6bA3C5eTuBqaUdEpt8pJr%2FEAtNh3WeZ1Z8%2FMbXNtVEm73H6HrmoOX3UsvTI2MKJuUtf5Ldfsc6%2F4MGgbDNpXidOdaZqrVPTCp%2B426REqM7Iz3FRGsKiAYBa%2FVXMubN%2Fsm3Yk647mYNNYFGqQKwprtdDD7xU3Ng0bEX%2F8Zgxd8DayFKQXjA9MY3uFu03p%2BSX2Vkp8Evfp9nvEHCVrMkjPASNkt2E2ScVnMQrOcb6Yfff7gFE%2Bjnikm7AWWxKRE8Q3W0Vf1A65rOd2ZQs9c1ljS%2FBb5zDu%2FLjfMUYL%2FVyqd9UxvFZ%2FFh4rl51wgs5QuO6JhndMpjNjDEqH78Smt8VuQOnuqB%2Fk6FX0kmKNloza25e82UXO8%2BWsFwVgMr4YyELSx%2BS8wvtjcywY6pgEzjs6i9cQJwVhOez0krZ2GEE%2Fuv2201Ni23Pvf5kG5lyPGk%2BWGGMgpEa9Oz%2FP2Xnh9FxFfy9I4xXiZVaj9TIGwlOKCRy99lN5UKvBy72BfiroHSZVfzReXqvYi25UCqW04R4kZWdGS%2BgGILzO8e4jFaYUGTo7gMf04Nne0nEwy3DA7hKBEiVz8dkuETWqsjQezia%2BSrLgGiLXtRPeLilUKCZBpCJHk&X-Amz-Signature=37711acf3a46200411684f75cdd6f9d8012b2733b74e4f5f022315f378a1702b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/7e8f340f-f716-47bf-8c94-84cb3f045685/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ4MVWU%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T093920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBwr3Zu4UmAzJ0cKo%2BKlIJI4oH%2B99gMWHYba4FwHm2jWAiAexWSWW00xjpOchyOQLqo2JpD14n8flhgcJ5umoKBIxCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMpveQRwJhLkHE5OLcKtwDJTd30s2yLCIIuJKm%2BrT6y%2BOVlCNhsMQSvzFf3B2dzcahc3dTFIWX0KLcH0U%2F28NWzYqBVBUxkOt0xSj8XYCeAGKImMJMeatJNcrocZaGbH0OcFCwH1b670ZDXhDYewssAwI%2BC%2F9WR2L4tl%2Ba9ySSCC2y8ER5Ue%2F%2F%2FgzQhEuzzS9QtLzyBHnXhHAEQ5yjKRdSvsKS2NAx0ZJcgJVuiUu6IOiszzkLZHlP8fpD9xGZfkNfAXHr7fshHBG6bA3C5eTuBqaUdEpt8pJr%2FEAtNh3WeZ1Z8%2FMbXNtVEm73H6HrmoOX3UsvTI2MKJuUtf5Ldfsc6%2F4MGgbDNpXidOdaZqrVPTCp%2B426REqM7Iz3FRGsKiAYBa%2FVXMubN%2Fsm3Yk647mYNNYFGqQKwprtdDD7xU3Ng0bEX%2F8Zgxd8DayFKQXjA9MY3uFu03p%2BSX2Vkp8Evfp9nvEHCVrMkjPASNkt2E2ScVnMQrOcb6Yfff7gFE%2Bjnikm7AWWxKRE8Q3W0Vf1A65rOd2ZQs9c1ljS%2FBb5zDu%2FLjfMUYL%2FVyqd9UxvFZ%2FFh4rl51wgs5QuO6JhndMpjNjDEqH78Smt8VuQOnuqB%2Fk6FX0kmKNloza25e82UXO8%2BWsFwVgMr4YyELSx%2BS8wvtjcywY6pgEzjs6i9cQJwVhOez0krZ2GEE%2Fuv2201Ni23Pvf5kG5lyPGk%2BWGGMgpEa9Oz%2FP2Xnh9FxFfy9I4xXiZVaj9TIGwlOKCRy99lN5UKvBy72BfiroHSZVfzReXqvYi25UCqW04R4kZWdGS%2BgGILzO8e4jFaYUGTo7gMf04Nne0nEwy3DA7hKBEiVz8dkuETWqsjQezia%2BSrLgGiLXtRPeLilUKCZBpCJHk&X-Amz-Signature=21cef53a8d5c90ca8be0239e5cd123e3dcca0b05442a8efee7e3bc2cd4f43284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 2. 레포에서도 파일 지우기 + push


```javascript
git rm --cashed -r .idea/
```


⇒ .idea 는 로컬에는 존재하고 레포에는 존재하면 안되므로 —cached 옵션 사용해서 삭제 후 push


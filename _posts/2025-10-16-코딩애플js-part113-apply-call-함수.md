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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHIYUXK%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XUmU6Vd0IEe9Iaoqv3aUwiIifXjAC0IyxIQ4mv1%2F5wIhALb%2FLACIHe%2BbhsgFmi7R%2FKzcsA1guc%2FEDjXDiCOs7HyzKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhbqu5PibIjzJTSmwq3APScjMjuNwoeJEttVf4OvRfXhPsdYS7qS6srZKgqabhkw%2Fumoj%2FAK3eK7IjDiK2qySvJ1sHJ6CyazXUraKT%2ByucvXjL3q9UnFrIg01L9wvWzMt4wpJvaHyF%2BvHIzmcd9rK6pvNzqZ2wE0XYKkYChiw%2BIYwEoUUPaJg0yE8RBR6ksgXWNixEZoUrAQ%2BQttmNzIvChPow0nhVAAIVn9rgyhMd9dEXpLOQLP4GoxYi3kPEWPph63P0Aovf1Lugg%2FGl8OZ%2FUpc%2BnolY9AWNVGZRm7qt7au6W%2FuAUkL2g7NKFV%2Fxw35yAAZ3bU6nYTGlp%2FnY716eOX%2F0xA5A4UvA1ZOkg%2FfPlfasZr6taY%2Fav2wPEgSmJIu7tvxnRZxPjLUL4RLPJ0JaiQ1ZQPxb1nRX%2ByNyPpRpyyXRJ0e9O0sv9TQT7Z4QM8NZEWAtN6ugc%2B6CC0SvH6idSbjzs2FG9DO%2Bp8TE%2F2%2FiSJBkmWEgq5NWleQxkr8gJiqaSA7kJe4KPTUB2q4rpJ776IhzDCWWc0QAkpX7Tsea9MdZ1%2FJKA1fGh4cEFPOncEN3G73ZG7X9mu%2BeKcnsz73%2FcPz6jGyDTls%2FmTUEGXkDzL3HPwUG0VKE6yVWpeJYsEgnXOT7oVNbywYqWjCp%2BbrLBjqkAV%2Fe3U4mnd4qlWH%2BDYYAXZrG%2BuvE1LqyAiebGfku%2FQsCSYu8AQV9%2Bw2u4%2F0YIm3hJEWqlpG0CIk5XyFkBDNh97%2F6shObj6X62ZBAqrKjehNn6rsAONCABDXMXEyOTYeIcOgWPRDoeQHQlnCUD8f0PO26a9ChZ2Z0O5EaLgt%2F9OM3JFSYm9Eg83gYpSEM9FIeHYrRMS8HzYJ5wvxYisjVc50BbXsv&X-Amz-Signature=d3c0e61dd939c33d270550d4e5c306c545fab3c483ad64a2816df138826b7b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


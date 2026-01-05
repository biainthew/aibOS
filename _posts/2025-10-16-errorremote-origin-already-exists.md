---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
---


[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFZWM3S%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCnrRtsGF8UjsYmKGVDHe%2BLS9O94B1INWJRZnXhTQghKgIgcEvdWRteGAulVKPkP4ywpLoo6zi6tlApZlUI7XZZ%2FqEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGsn8OiZSC0zftQ0aSrcA%2BNkpkiqa4HGSkLXhepTLENPYfthZV7LnBMJGU9CDi47H9we82sDTm4sqzEeXOxt9yuYxgF7xZ4X6o98fQJkOS0Aw%2BYltd%2FepECW3%2BWaKmuBdqQ5R3OkZO3N5TSAkx3FFoZ78bEHKmVfIh2QQxl%2FlR%2B%2Bsxm9sVQMmZrtDTU3z9xhBJtHXrK1iZfDlugC3qgdk4g6QFqdXWqcnlLrASGfxyOHaoqhVO75Wec3mBrmCcZQ4Ck3fPA8kQ0uCgErlzOFzU2UasbCkd%2FFRs5wXECSHKuUE5tzcyq5OzEmQNnfvu%2FmBV9q1vmTBTZlE%2Bs1dEmju3PDdF6AUcxn4z8dOCY4qvkhpYIALhMP7gX11oX%2BDZel23%2FcVHdyS5ytyosNYjaTJS6sYAyvd5n3hEGK7nMpwSASsh0Cktg562R1sC4gNWoH%2F2J3dKh6rgnLbV6sJzt5nhQm1FnUDpk4J8kPmbGKZBqWCq5o76XlzK17ZVYpOLrZWlJfujdrVhEgm5jqQ0IH4sT1DzAu3B1cQMfamfqy%2FO64fhoAr1hJFbdDeP6ptnc9CRoDm4e0wYO1mppDI76VPC3qAjkegwmHklzZnMbMKfdmWuEwX%2BhLDZtHcVPqPpYVizy8jS58M89tY0sBMPyc68oGOqUBfQ34NwFpYpCMYyPTu8VSLUqW9f%2B7snRrpMQIR1FLZlToWrdZjvtCjQm7xeXJxabvUTe0pgkUtnTjYaJw70zjI09oZwco0euDzGhrCyblKnUlaCX23khi%2FepPYbCKyF8uokgjMADzZpCHPQtnDOob9P%2F75rlDqvbsWEZu6%2FGhbUlOYhm9CUGxqL0cY3YT7QdWGKvhBdx3gBZdfp6McPydBRUJC1KE&X-Amz-Signature=7fffe52c7638426487109ab9f2728d931f6e1dc59fe65cc913181c224aea4c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


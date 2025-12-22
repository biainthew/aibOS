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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCJPDBE%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCALg%2F4BcjIryOvEO0iLQI%2FiyI0jrDlQIK%2FdQ33krCPpwIgMxi7Kh9d45NDc49AfRhzfkrwTW%2BCA8GzvzX8iVFVgm4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlOOHQLaECmHkGVwSrcAznLbc%2FynsKEXnvB10GejsPoMs8NiKAgs%2FU57T0NQ5pKq8emAE8%2FpQxrrN2wqmyMzb7zvmkRnqs4GH9zDd4IOUOzSEviSZ794jXqaFTFUNuD0MtdxLzNdiiZHThr3zWHrsz1tIDK7%2F3vqG9UjhdHfvu5TdOAfoVSMZqeSUreF3b%2Fwuq3l%2BDqp4Js8riAsfVFw9Y7PEOxeOQ81AXzWlpGmHh%2BHpxBFKJPSY0Lqkc8wFjJWFCc113EKgJmiMvfxJK6JrzUK8bMXYr0RRmjoMaO07%2BLbOb30KrS0YBu2CVe8HQmpVNPaA1eQNtZAGgOTWpt95LKtLi80cTq1WTiDC7HCyObybYJxStDBd1siv0vvQzUm5VFmrQJ0tQJoek%2BbLhG%2FFxHy4LLSd3l42KuAgMNg%2B8XNmUfRipSa%2FdrB2UxjFc0%2Bys2Ijk7vGjoSS%2Bcs1sJVAMGWX6Qd1xL3FT4cLO%2BqJyqOOHMCWunakBp8sMFOMNdgDZIP%2B%2F%2Fc9FhxmQqOOI%2BjXQGy8Hi9zGbHPZOK12cWvWnH515zhoTJAZgzLXC9rzFGkDgsR1%2BRYrdBZiTWHoWyaLqiTVGYoBZ%2BOAgQcAv%2BRznmk%2FCXd430ZehRwWtNqXtypJZdMUvVkMRq%2FdUMPz4o8oGOqUBpp3UdWSfwavytpNBWMZ0CAylQtXguPhrkZ3%2BjFsn3RPJ0yn7vk4d5BD3z17Q0obVqjpW1MZTEpdseJpnTNZg1IvyZrjo5DH1VpzNanVqjJrMDHFIq2IlwIrWAjrxe4q%2Fzpur1Do6gFSLYr4dzytJV6R576qhl2r1PJcSy3WsvJcZiTTFVHKCH0lKdw9%2B4xVgK%2BTk6V%2BNK4IqB%2Bj2PulMToCjCi5b&X-Amz-Signature=58a5fefe9e1a2910e7eb4878221a851a5c1c0e0255d46f652770e725dc05db3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


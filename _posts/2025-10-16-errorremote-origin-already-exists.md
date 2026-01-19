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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662HOVNJD%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjv5J4lGFptmKRWruLSfotLZvpJ66kNOmw%2BJ8t%2BrC6OQIhANJ2aq46EK%2BQ6pb9tY7Bh3T6lpJiyP3Uvp%2Fd9DA7roiFKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvnjygJLVtKnDt1gEq3AMV6f4Q3cysfFBMMnVchhMdWpalDPLM%2B4qwlk0a2EKK66kC3F85WKbE4zEuNsDp8HDxEZW850CC%2FpBxJtN%2FV77mIp7gnbTUvU%2FKkQEZCYSsnu3CJsOcqvw3USNX9W5kIZ1KlduORTyyFieow6tEMet880hCaqyPCPFG8PX3cWMjCAxIjBmZJVze5TzBHEAJClU8itDnZCvc8OyeFmABjFq9QY4iYZqO0aLujccvM0kOQY2yO41I%2FRokT8ZAm4qTHvkOsy2lxt9w%2FaoUPDbkaeTzGaGaZOUk9ryMmKSXHnwHchCTGgG38gUtlBpJhCa%2Bv1El0d8uEe6Szbw4PpIH8iESuz8sYg55%2BFUezgbq1pbcQxWxWlWZ0W2TqyP%2F%2Fx%2B9w5d0uSaPIPTmqWZHqi4E7tWpnxh7s8vry%2BboxZe0TytEFzZi6fea6k8FpJgx51Y0MheNAJiouLmwPNL5m8hB1AvYkqZQ5krU5Xt88IEnesZP4%2FHkt5w9Fx3h%2B5n1B9kYkUYhEFJlbaL6hZVUhLYGXscwubUjO27xBhgvuIsXweC71Gmd7P4AqlU7cfeN%2FTojwm%2Bnb%2BsngsE%2FJLYdxvYP055JQKUy%2FJcoupbRw07uZu53Az76wt4YPJ3%2BocxuezCY4bXLBjqkAV9wX%2B3OmbFepV8mXwk3%2FwzaQSAF6jZ5%2FZ7GPlEEdhNLRxmNWcMl6eFSo6Aad7Eq3YY72yKvH7dCv%2BrUGauxTNEc9%2B55wPr1fa%2BQYv1duQ605s0MyD9dO550OU1Xedt9fsIuv3zumA1OJ5l%2FTnjEUE%2F3t325so5M6NYSMcaaslVFTrP4056hvJF6%2FQMKdtb8TTP2Z51pTYsxMsEu2DPtxjK9XbOu&X-Amz-Signature=617aa01a93a4e3c2415c75bb441a58d8b8054a1b2fa9cf79cc29b0bbfaf41892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


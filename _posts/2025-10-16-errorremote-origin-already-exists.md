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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUE7WJK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDzmmq9R2%2FTHhiI3NM3CX2YJGOttGA2FujJa47pj%2B%2BMaAiEAhSRFEZi1MOyB5Iy6IAl5mr9hiuuUWmdXD2YVAIAlgV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpIG1JqpukRIgv7fircA%2B9U79%2FYBtoKpafZVjTImhw4DDkZXFU%2FqOBrXB9oWw6%2FM0fWh7SzM5yQoM8vhk%2F%2B8y2NfJgO4V1nDWqh412sCNVJuznrb1dBdBfZIv3RWY3xsd9yQBNSzV70ygsWQ6RLt5Xxb%2FWOMyWbLXgYot4zxJcqdRzG4Q1E9CWwEmGGAOmyDjiEOxgUedmiaFCHt4PLxzL0XZ0DyEHMPotSffhBONQghOsTvaJUiiewutUWYlpRwar%2FNj3h9uCVFr5xJtRtEUA1ld3dV%2Bn7zcgwUS7ZYZCUQBY3VPz63MuI8xvwqIVAYLhazCtHLecDiE9g8VZXmo%2FRYqKhW3UHB%2FLoG%2BreYDdvpp3I%2BKMq%2BZWgoZNCs7Yp32HsfVCQYa7B6OmR5%2FOFMmcO2nfUzLqK92rp9CqDRHl1Ri%2FLGoA9luvxhKZzZnu0fugyZu3SO6L7bxfRuZ7tIGZK4WRW3qWqIu6ZRnHiqRFF%2BUJ4yU4w1tpHAbpNsM5j5tj5T%2FOUgGOdJmV6VywVD2nXJdOUkI6TvBSHOc8JUJJhQm0MviatUIaCAvUhPjX3Np6oKhCh%2BAiIyTbryedwComdHtD0%2FZjZJ5QnaP2tucxnYTxwEdILzR9dU9RTHqE5oCluDjGvwSOv8xzZMJ7cxcsGOqUBQDzwvh4m9a6KpkkU2md6Iyj1oURzdyw2hBevclAo8Bleg0UGcsKFRnNINHXWVxz7zaLRWzdg9wTenHGwGN7swfkAknT5qnhuM3eRRb9aJcXcApDC%2FLCQjA7Rek4JghcedpznyNrapaCT70bNIO5G03SmNFjZs%2B0o9nJW9J4CHyQvWj7MGYIxe00CTNMjIbNKNPvxBgcMrXCyzYHc2VX8GljJ6ANI&X-Amz-Signature=00e556a9e305346f8c75490f9dbda673fba5b477d3b2965e229200c0188cfa5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


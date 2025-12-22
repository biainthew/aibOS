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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IH5GBF4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCeX9HDdSqz6tPjGJVpEDiEOnv%2FuAJ2hFlhgIqgfvsoeQIgSZdmcbAZvZ%2BrIsdcwTEWOSFf7kebRjoftHCfSvZMWlsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq05wW7tGdZePLyGyrcA5AZ6C1GuNS7wYbKPIEoFTCVfJ4LMm4C3DoRNNQiwre%2Bahj4YXIwWY657IjjQQ63uGMi%2FE3kcc%2FaRcHhxXRN3g7SGKJNbg1A3zYmQ8uWBrBiWwDunqeckdzeWVHXlwXtCr4Ppm9qGYgllU0wQvYtkGzPbWUa9zH%2FwqT%2Bw044zZA7QbbfQmK924MNjD%2B%2FDoP53d1UuvZUrTovLW8pCJ%2BLuLG2zXfxeItPZ2xtXGn%2FZsFNakdqWxzvQvcMl1JE%2FiKPYZdXn06a9NYgPuAm4L9W34Jhb6tZ542zYtL7B9PChVAxU1ZU5lQ%2FEDEtT86tbNyVrcV9hmBgKMMOMcvXJYeBPwryzc5Y7gBsyum7i9Tst6tPhcGUQqKBfHSQb74Z3XQoYN5jg4BernGWyyKYFf7x6OcbmVcYpcwA617v1hTMJzoGknAMiGwBpd9Q59XmC0m5uldc%2BMHLZAJtI63mRQFEQBGp9VrcqCMJWHYxY6P6NjWagbWcm7Y3A188iE%2FcF2FvHeNC%2Ff1BTwXowMUFJofcSbLmphOzsh0ADACI5PNC04TMhd%2Bi28p5FqrqRI7oBF2E7ft%2BnXQiD%2Bz14zyEGkLuMUdQwBzZXk7BS2QgI%2FC%2BCKpWeFCJrvFw9beH%2BPUeMPOVpMoGOqUB3424SHZn9I3sMZNoKZNkg4WKHae%2BEnr0v%2B0JbIY5gaA28BM%2FAtPOOB1iq6pT2u%2BXRWnJYxWYTLzRMoYbgR0qKY6Eo55%2BjwKC%2BbR4rGCidLGTtJeN48FclUgLN8DCYnc6L7UROxwW2zi8iW5FeVx622prgmlWNQxu4vSglG3s6x66q3%2FmpDVDKZGTXPZF8EqnPC0vOorbTca0sJaw6xzWbUg8B2bY&X-Amz-Signature=1f15fc564afc78b5dcd6295c7620fe113fb8e526c3d4912f1a00991cb5ccab24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


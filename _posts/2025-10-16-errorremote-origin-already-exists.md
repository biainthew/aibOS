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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWSC2GS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJfFJEz1vlXE2%2B1YbucU1F3vuGbdSDMcahaGqochebGAiBGKMsDYlOBn6LbUar9noMnZrh%2FSpy7Y%2Fl3vtPBe9evlSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAJWiogyAkgn9jbwJKtwD3gPW1B%2BanlLXL7yN4oVJ3aSjYODPJHlFG0%2FNeA9on4eWGQ%2Bh69N6rw1yyb%2B4kdY6wHC73fVCpHmiO4uBnx4f4s5M6EjBvxzTVyXKLssHzFQ5MpgBkWiBdajaVOWSlzBBrY%2FPUdoWC0MILbFbft9jsBYJXm0SfMwWAaF1bns4QrmYi8gFDW3%2FEqSzsYBBQrO2SYgZk%2F6JLhMswtCz5tfz%2FwLEVE%2FOr73%2B4IOefG3Vx9S3E9GGO8TmHrCM7F9ekR2l%2F7Wi5qLm1V%2BEbep2V3pG5JnOhx8Ry6QF8SVxJpYh6QTvEslFSXx4haShdPTXE6RnrqcAvF%2F0rhIEJ0qM5%2B32CSUIluFng8mWCBV5zWFMsWT7c3LXAyYalUOLD2OSejuXXAH1dr4Ob6RgLJLbIaQKdaf%2FZuTQk45e%2BsxLZNjILf9EQGERPoMYRq6bFyN%2FrS1q0Yv%2FvEUDTwR0DTL6HqQx3hjkFdhFDEo%2FyiRe3Rg30JTwQlP1lO1QLSoX1GDlmsuXDMXbzIlUYFiO6tyEKF5bmcSHG7AveWdzK9BFoL7rzHaswr6h8oEk4dR1CsphWIj7HTQOHgCOx9PnFVBRRyAnyoJd1UQEy%2FKGQRfFgbEwEc2r5vl1X26QelzrfQwwiNzQygY6pgGJy38xKSqjiuz%2BVUWJjn393DoH8QveXGAAWEivtfrnejdAFlIYvBUWALtGRPA74oXG1Joap5dVAjiMwpGzk5Xgsnc%2F%2B9bryeLLBhz8h1g7PDWdJxEaUNW5LL2Bh0i5R6wzQFwF7wVq%2Fb6wveOKOz4tDoFY95%2FQPmQxr3Fc0YcH1Iaxmqa7jFQswaLLF4McTWWHusc3gcFwF2s7PPxmsgPEluSDrMa8&X-Amz-Signature=4454054a65a121b5176148bdf56bbb3994de4bce25c29b663d8c1a365d263dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6AHGQM%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCSZydicc2%2Bf5YaH%2Fa%2FFnax6odLrF5sAAHQdOjme4ZmjAIhALUX2F4zPeTLMD0qDKkN3WvC4W22DowsWIq1LZ9LXK2ZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8FxLHjjJ5svqxP4q3ANF9SBvg2ylmyKq965zb2T%2BLoLv7XwYOq3BjGaggkJyaRZn%2BiDe94inuv8Re4jw2HOPj12S%2BmGJQZEi2cozN0f5zUGUN9ApndrviuvHwQxKAVzaAGiMA%2F%2BmHBIn9EGEUAhXN1gnK8two%2FLVUULso8MbP1c5ul1wZKRPabesx%2FWgj18twIlXri6e72Pqnc22xZWxX8qLYlNhsPeEeWSIa6knOPnHQcXc3srLailH2pstlPCQc8ZmcwPzOSPMh3Rsebsxmk4xCWcFGV4x4hRZIuQUnqnxOgej2HaqyRk%2BzCwO%2BYF1kIN7q2D1F%2FLi1SDW67WlFuM0IoMsUaz42%2FaGSwptnFflJ8R7qV29Ut5lhBGUJLWkJTFNQSfXT%2FiUWSX3ghV%2BKkrisgLw%2BW6bWespRrqE%2B2gHfEhZD0ZC5DFHYs49RaDkjMeDUVN9bOmzXqOXG2sh%2FHNH9BhKqySXmCb6%2B2uoU1L7jWTGP29H2AK%2FUS2gE4HUaXQ2POUtAhBLKBe7Wzp1VaCp14Ey1Ej97t4kp%2BLe6svuz1iq0P09AkD2Wd%2BjlxcU%2FdTEkI3NO69w8Xb4Z5TYIE3590i7ptQhP9V5veCLwceLThDG5bu%2FQkv6bduUYcwWdj9Emh91RoBiQjCXrZbLBjqkAWQj1BSv%2BbEOzbYL39jzZsYhkOk%2B%2BhZyL%2BhrljeeP2mg11YrO9SDz5XNsU679gYY%2B8mgCs5a2AqWgO1u2A3oDA%2F4gb4e103PazRCbAzrCQIShV4x05jEX%2FK%2FharNERtseAQfblcucCYaPsmZMa6Hw1j50HgxqVXHQvUrdjn3y7wdaCjAgyEbogTeICn2s3QpjoN4dSygZv1qG9b1srOR8vcla9dX&X-Amz-Signature=a970fe077a7f7f0c18943d02dbd597976a62e5c9e69d29030fb7b1f4a251b0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


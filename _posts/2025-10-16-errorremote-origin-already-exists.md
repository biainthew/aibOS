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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNMDGRR%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiaRD0oCTIR%2F51YnCNam6sxlGtCloVi1M6KZmt9iUX4gIgQK%2B1G0T758JQWdiWrirOZmhj6rQfzcQafvSfGGNcYYwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGyXNh3ZwwGuOPiqByrcAySOf7FGWn%2FOUVFNWZVNs%2Bwujfr0DvrJQ1%2BmJ9xY0fpmyvoYHBVYNXjfojOUmibDI3MDpfcVnhnb%2BHdZMTMZ4%2F2zspF4Y1MU%2Fys9QFJNH5AzfSzhxj%2FwTA5jLfzyHrwcOT8hbbw%2BRaALlICUWwN%2FcEbem3cr%2BoZyUPq%2B6a2ffyTtpB4dOiJtPpmeYij5o6K218f4kmFpXLaOMdFp%2B26uUyiJJxKyAJqvPKTXQgeURYX12vl5rPowYESU%2FcphERaO0EkOIOuNht9jx%2BzdcgD3QMrcE0eVHFI8A71APM6jScdFIbGHz0vEOaT8GiqBNUHF8xGOeKecbg7v0%2BOwv9xbg2QyucIWyatlRKzVTBe2CLpSHItPkHxsI1wy6PuvbCSo7Hu3L8Fb70%2B8aiwlCtXdsY71OzifP0zUBVlNFppjf9OPIsGr0yuhMBTuJUz0dWkZRU2FLMndkdy4jR05YGDsMiNx7DO7ClpraJZgpCtUbvDx1dV1ypIndV%2FuU0rCdMxcmblHUaO0VjXIQ8lAf5SXhoLYK9LX3ZNtFdRAzv7KR5%2FYW3mMygqFfpjF369Nf3%2FC5DI1oKHJYIs4lM1P77DJq58E%2FcyWUu%2BMvyxHBWJ0ms%2B5JuZyau%2B2b5F%2BUP7cMOWt8coGOqUBytu8CQ%2BX2Op9S4yJI6Kl4OJiKs4eKrK4tBH6eFcQOBzXACwC7epRAiOzLYxLWjey4Bl4uaexDjvl1He8%2FYTlVWrY37bJCtFFaduuHXHYEsvDy%2F2%2BcPkH%2FYv80PZdhsJazJ6juByeOUjGt%2FGGs9dvLDcLf0K34mEzZoP2WhWMXqJVWHm975VpxzSU1poxLBTy62c%2BvP%2BEpkbl4SwUR%2FgAJh43fiWH&X-Amz-Signature=85c796d1b638275c73d31fada6d496faee73b86686500c7cb8146c05fc26aa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


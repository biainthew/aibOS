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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRTS2I6%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELT9DMWgg4LaHcOebSr7dzZhfjQi4HiQoFxc%2Fl0v8W7AiEA2NkqZbk2bjyfQL9vXQQbXZ8Tkj1ToFxlbJXOk20dYv8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FfY9fh7BTbSZBWqyrcA6TSVzpluBytuLdNaZTRlCq4Mllg3RoAJ6ZgENU6L0tc0YqeuYToFMXpggwtjoWMmiRICGuFjjIi6Th8VfaXnsVtPW0bthfNh6fuOFGE6Q1F%2BurDI9xxBp5da0bUPMm7t4RErZfDtq5fAiFcZFGGH1ACbQEAEnAhLRxQE3zjvmDP2N8oqgKl%2Fl1YZBm1QHp1TEI93qWv%2Bp0OIxzHammz%2Bfrnw%2BJ6X5exvhstnJrk6sUOb9MvbNpCjLpO%2B1bWxowUuvx8Rc%2Fdnh00dLkFzmEtfAlXuwKJ9qBISNz1FZxIqdcsn21DQX6Y%2Fc9b7I5lqozvK5D%2BXmZlQsalIOhfkoiUFN8JtoiOtSkeRKDB9xvLmwMPc1GCE8WEwS1AIqhqNyo8HaREdn9x%2FExpI3thNgHc89HmezF3zzSKFk7sWCjtedL3B2sX6gE91GVuH2DGvZIO6obMdXWnoYa2ltLpvmhFfx5LxE9zOQp4ILKbAwuJV8P72R83HyJNfDLuoUUZAI03PJMYJShHDdXb5ADTdoV4s%2FiWlCZtdxzyfoDpYrN72ZBKSX29vc5qlBSNsVYuKQrwyEWOJpWVyHjqocxtME36oHsX%2FJgix3ZU0k4XNUG6AuVlnMd2GScCnpDBFiSMMKz5ussGOqUB1KKRe2ZS3Y31bLsj91o0INIIF4WYck%2FMQ7X%2FMKbx0gDA59Qy%2BoZKi8HNg%2BJ2qldf5pBX2NQeD6uHot0e1sLajnfQoTFpKc0az0IlWZfJHpM7%2B%2FKK1FmMpP1Sg9AADQJ68H6LjXj5gt7vn7Fhj1ZUzvlX0zwrVMoeFu3aZslqanTloPJOh9EaoYzZIggzOele%2FHA1UlTWSgRcASSuiF5GXHa%2BKYWw&X-Amz-Signature=a9f806681aaf69578b9ba963301907a4630224f9825bf52d1c4f0bb6c343dd34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


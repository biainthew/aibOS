---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
excerpt_separator: ""
---



[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOCEZXW%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDi%2Fi3XZgmLIKZTGu32x7YaatQ94s0BR09%2FE3LA%2FuBj%2FAIgG0OqNA0akrd74aZYzXDTpl3Wa5Th24kQR5xrU50bb%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMbzx4m9Ihhsqrjj1SrcA%2B%2BCnKQdOoAh34sc1V%2Fq2TIvXO8WXzcn%2BtGjpGrRtyoVxFjYREmJwJBR7DtYTk%2FKNTLy9bO%2Bekq8XVNNUGTmkIWFeTKFaAsNOJAd97DQsZ4OBg5LQiZ6buOMCaLpWHwfwXyy9JzTuYZNOS6fSAqeLGqat7DwHKMBya1jpRxGRAzJxLkjlbgkDUU0dQcOW%2B0Ba6WIy9esOyZ7kOTcIWXeHfugjGMjnjp7efrFeu179r6Rb7QEdXp4nydJP7IDtyQyzEgstJAFSiurGtGwpPFYS8hbN5UTDGA40re2ww0lc3D3ZspjXoY2aV9LpcyzmuFBbVWc2W2qHURHTuZ%2Bn1dI5rqXu64Ph6uo4GIiQh15BUKpE9OHG7PwBmpex%2FuqWOLAZLnQAcMP30bKEzwQRs9MAlMR9CATH4%2FLv6G9D%2F1DeTR5Yyz6YpHhz3NT%2F0zyZPlAtFISLxtyzyC7h6d45H9yEe%2BXlMBZ5JStGfKRAPtwK9weptn2iuczWU7aCQTtDiSfDwU0fCLE5ZwQ9uUz3D86HvEXS8mV2yhpNc7lUD1oVAOXXnYO3VsRbE%2F8yzvwFg7hnM5JHCqq4f2tQEyLy%2B5XjvugqhYtPS6dUbSesIaoqvFWTM42IwQVQvi9CnAPMLH73MsGOqUBF0x5oWCDA1ZCddyiBoevJz1wYjNNDAsiM6frc9a7hDJY%2FeO93dlyuuKu9cNzrQjfEtFxfTIoAzAXGZoQys6yNvSnmYjbCJqhgnQcfVmnlSTS1JxgZZryNTFttjKugBuEjLpXxs4dSqX6zbicysViv0FgBC2FbCATlg7r2GiRkx%2BQ%2FsPEWEOYR%2FKuR4YOOvULXVkAiG8JFQAm33DTUMsmB%2B4Gg3hk&X-Amz-Signature=4ae52164b2eaa5af21dc93c99aa1a6f4effa3bb4000d573d909f01f9fb55def2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


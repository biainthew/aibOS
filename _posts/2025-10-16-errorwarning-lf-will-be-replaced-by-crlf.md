---
layout: post
title: "[Error]warning: LF will be replaced by CRLF"
date: 2023-01-11
categories: [general]
tags: [Work]
excerpt_separator: ""
---



[*관련 링크](https://dabo-dev.tistory.com/13)


🦁 git add . 했는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6360fbc6-d07d-4f36-bfe6-fd6353aeb873/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOCEZXW%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDi%2Fi3XZgmLIKZTGu32x7YaatQ94s0BR09%2FE3LA%2FuBj%2FAIgG0OqNA0akrd74aZYzXDTpl3Wa5Th24kQR5xrU50bb%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMbzx4m9Ihhsqrjj1SrcA%2B%2BCnKQdOoAh34sc1V%2Fq2TIvXO8WXzcn%2BtGjpGrRtyoVxFjYREmJwJBR7DtYTk%2FKNTLy9bO%2Bekq8XVNNUGTmkIWFeTKFaAsNOJAd97DQsZ4OBg5LQiZ6buOMCaLpWHwfwXyy9JzTuYZNOS6fSAqeLGqat7DwHKMBya1jpRxGRAzJxLkjlbgkDUU0dQcOW%2B0Ba6WIy9esOyZ7kOTcIWXeHfugjGMjnjp7efrFeu179r6Rb7QEdXp4nydJP7IDtyQyzEgstJAFSiurGtGwpPFYS8hbN5UTDGA40re2ww0lc3D3ZspjXoY2aV9LpcyzmuFBbVWc2W2qHURHTuZ%2Bn1dI5rqXu64Ph6uo4GIiQh15BUKpE9OHG7PwBmpex%2FuqWOLAZLnQAcMP30bKEzwQRs9MAlMR9CATH4%2FLv6G9D%2F1DeTR5Yyz6YpHhz3NT%2F0zyZPlAtFISLxtyzyC7h6d45H9yEe%2BXlMBZ5JStGfKRAPtwK9weptn2iuczWU7aCQTtDiSfDwU0fCLE5ZwQ9uUz3D86HvEXS8mV2yhpNc7lUD1oVAOXXnYO3VsRbE%2F8yzvwFg7hnM5JHCqq4f2tQEyLy%2B5XjvugqhYtPS6dUbSesIaoqvFWTM42IwQVQvi9CnAPMLH73MsGOqUBF0x5oWCDA1ZCddyiBoevJz1wYjNNDAsiM6frc9a7hDJY%2FeO93dlyuuKu9cNzrQjfEtFxfTIoAzAXGZoQys6yNvSnmYjbCJqhgnQcfVmnlSTS1JxgZZryNTFttjKugBuEjLpXxs4dSqX6zbicysViv0FgBC2FbCATlg7r2GiRkx%2BQ%2FsPEWEOYR%2FKuR4YOOvULXVkAiG8JFQAm33DTUMsmB%2B4Gg3hk&X-Amz-Signature=166690b8d67f0c1c109375ba263d928db6f7d54580625b6d644ecfa29cc96fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


LF는CRLF로 대체된다는 내용


👉🏻 LF 란 ?


line feed 의 줄임말로 Mac, Linux (Unix 계열) 줄바꿈 문자열


현재 위치에서 바로 아래로 이동, 커서 위치는 그대로 두고 종이를 한 라인 위로 올리는 동작


👉🏻 CR 란 ?


carriage return 의 줄임말로 Mac 초기모델 줄바꿈 문자열


커서 위치를 맨 앞으로 옮기는 동작


👉🏻 CRLF 란 ?


CR 과 LF 를 합친 것 Window, DOS 줄바꿈 문자열


커서를 다음 라인 맨 앞으로 옮기는 동작


>> 플랫폼마다 줄바꿈 문자열이 다르기 때문에 git이 어느 쪽을 선택할 지 몰라 경고 메세지를 띄운 것


👇🏻 해결 방법 Window, DOS


```javascript
git config --global core.autocrlf true
```


👇🏻 해결 방법 Mac, Linux


```javascript
git config --global core.autocrlf input
```


>> git config --global core.autocrlf false 가 기본값


플랫폼 상관없이 그대로 인식해서 문제 발생 가능성 존재



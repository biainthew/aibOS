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


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-4a9036c8e574.png)


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


{% raw %}
```javascript
git config --global core.autocrlf true
```
{% endraw %}


👇🏻 해결 방법 Mac, Linux


{% raw %}
```javascript
git config --global core.autocrlf input
```
{% endraw %}


>> git config --global core.autocrlf false 가 기본값


플랫폼 상관없이 그대로 인식해서 문제 발생 가능성 존재



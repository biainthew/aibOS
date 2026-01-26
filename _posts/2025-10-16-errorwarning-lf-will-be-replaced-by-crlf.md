---
layout: post
title: "[Error]warning: LF will be replaced by CRLF"
date: 2023-01-11
categories: [general]
tags: [Work]
---


[*관련 링크](https://dabo-dev.tistory.com/13)


🦁 git add . 했는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6360fbc6-d07d-4f36-bfe6-fd6353aeb873/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFGQMSO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvL3zNO3s0%2Bn49LjyYDHv4EEOkCXJf2OUs5gnsADutJQIhAOXWGk1YLcDHUTKDBQZz%2Bo6dQJbTNNCxb0vHJ7yj2Cy8Kv8DCDoQABoMNjM3NDIzMTgzODA1Igyny6j3XYfGIxEUYHkq3AMZqppZxTy7ExvPjo7iQh74KnXhpT15%2F1ILE0naRQ2qb4tb2JMcOuwif6z8pKq2MmuAd4LYe%2Bfe4ZUto1vWD6T8MRyiSXOb5fMKY6%2Bp8%2F7a0tLzqQXrJYKm5GGUApzpWrS11I%2FzFHyjUqUpO8xGQWVyI5G9CaOyNpxDHtQvHEFAM1S7XXh6hPXGYmHZPZnmWexNwmzRu6px5DyGm1fU8ChBHSUFcSNs7HMzgE9yHaX%2F4CSwY9w55IuY%2FvMSCNV5qecZl8A9QJxfKr8lhtrsqPjPTIup5YgKo9L40UXl19o0T8Bd%2FWyZqAv9ygD5DXPTZS3YwfW8w1cE%2BqFzrLupf9L7wNuIep15%2B0tAAN1bUdDvBMb%2ByiTTBMohAZT3Ak0OIVMifKEodk%2BPesSm%2F1MsfrvHkwgiGMTkGSrf3Q62cselpIScHVyd04GVBPjl%2FfMPY3hllN9cKkAI4C7mD79kdg8UXJXmlRz%2FKtuzVC%2F6txWxn5pcWhNH3K%2B7wv4aw7RmH18AkMSYIugY7%2Fn87M%2FYjvI2WBlwsQJPyCIqA4O%2BGQX%2BFlHZuIkTw38Oob%2FTO5GbWPmfvLBQr99Nz94Zudx%2FNlMzMcF9szRg60zbSt58pxLKyFCMPqKVlw52wmIm4jC%2B2NzLBjqkARGHr%2FsJ62%2F64mtq1Nnrk%2F1JqaRa1uqzY035%2BxuwkIGangcbz5eG5ctqeOV3IkkIVxqtnzzJ4IEpctB%2FMA1u0nbSxfj5GNaNo0fnV4nuEooI%2FTBE73SF0Uq8cdWR9N0GGjUnPzDb27VN8qDsR0Pwr4%2FzBd0ioGXBzXz8C7Pg7QpYRmSfB%2FAaKEZK76kA54u6yj%2Fzi62UqZRseI5NLZoX%2BT54jveX&X-Amz-Signature=20b3465bc7650030b343f8d3e039a8bda5971ff0ecfb9b2caed0c6281a255e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



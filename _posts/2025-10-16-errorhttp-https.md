---
layout: post
title: "[Error]Http Https"
date: 2023-02-20
categories: [general]
tags: [Work]
---


[: 참고 문서](https://velog.io/@shin6949/HTTPS%EC%97%90%EC%84%9C-HTTP-%EC%9A%94%EC%B2%AD-%EB%B8%94%EB%9D%BD-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)


🦁 axios 로 api 받아와서 깃에 배포하려는데 http 라고 오류 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUY6FA2%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ2bYtI69t4Sq4b2pFnH1LqDfgfwZMCkrZDr2WAQ9PMAiA%2FdV%2F5q2uf3nbris%2B5fO7GPBZUFLFYMovEixa6oyV0YCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMKzG62RFAQnNZpQ6KKtwD1cnuOKytw7J8Ju%2BsvHB2Ob8CwDyXE%2BPWgNV3FnkTSJHhRzaDzP53%2By97EqTRZMr8bmgazfOysnQt7MuG7l0Edqd785lrBQjqm88Lc9IJlcioiB9v7EOe1GeJhhCdlcLmPrMv8Hd6KIR1%2F%2F3mgWI26pJ73ec3%2FXPYroCjm7ezqkx6PED9Rpz%2BRtYL%2BNY2kZ1S7PJNNFPZrdC9AJ2E%2BH2%2FVIjvfOndF8t6C%2F3ON%2FHVCAZ1kxf12tK7Wmy2dNpytNBXd98fyDwDyu9Kfw%2F5DGlrAfuKhzjMWM8xU38gUaBGL1Ekk5nKdg2AoIFZAFMLUp5WOAKsLzD92o3VXkQ5hSTqJ0Yq2d%2BopkJHQSLnBTaZ2njGOLG3RW9EVvXfe1lwYXjtR9EovvtfVHRfM5VOieeotJli7BAQNKU8i9LKtJvTMY5F85ZftSBCIAW4E3Epfctf8Tvb2STZ5L0ToM99MQYjV6rlAbTCpoRXPStDI1MY7aXbxdy%2BOvn%2BYo%2BZGWn6qyXP9Zr5d1wmHrE1WVVYd5GvdZjY3nzScEsAkIHwRzdU0jrdpyg%2BuD3FRLNrqsOU1viXP4mfhX%2B1L%2FIiR%2Fo%2BngKEbM5c4qTsU7TKZcsFwVINts7RC0vzu8lEidQZr9Mwx6GwywY6pgFIV9O3jT%2ByLFDo8toywx5S3nNcAfUDZP2CeEC6dN9ZVs8ql0v1IW%2Bla349GikDXZH9d8vCdQjsagc0RcYp%2FaAJwH2ogr439Qq%2BHvjQQgk6JH75doFsAnbTHV8%2FChCIzZSXSCELge7rrN%2Bo28zyANuNlZnHg11ZvKLJlzMym2NE3ddPIdT99XAbY%2FIJkVkspE465VV7%2FUwow1qL0fAaorBIjmcsPImd&X-Amz-Signature=a8013fcaba6bb668aff7c259ef73c4e08d560082f906b8e855b3111dadc2aa67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


---
layout: post
title: "RequestHeader"
date: 2024-10-07
categories: [general]
tags: [Java]
---


### 정의


HTTP 요청의 헤더 정보를 메서드 파라미터로 받아오는 데 사용된다


### 용도


클라이언트가 보낸 요청의 헤더에 특정 정보(ex. 인증 토큰, 언어 설정 등)가 포함되어 있을 때 이를 받아 처리한다


### 예시


```java
@GetMapping("/greet")
public ResponseEntity<String> greetUser(@RequestHeader("User-Agent") String userAgent) {
    // "User-Agent" 헤더 값을 가져옴
    return ResponseEntity.ok("User-Agent: " + userAgent);
}
```


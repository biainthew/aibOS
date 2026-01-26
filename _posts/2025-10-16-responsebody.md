---
layout: post
title: "ResponseBody"
date: 2024-10-07
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 정의


메서드에서 반환하는 값을 HTTP응답의 본문(body)에 직접 담아 클라이언트로 전송


### 용도


주로 JSON, XML 같은 형식으로 데이터를 응답할 때 사용된다 이 어노테이션이 없으면 Spring은 반환 값을 View 이름으로 간주할 수 있다


### 예시


```java
@GetMapping("/user")
@ResponseBody
public UserDTO getUser() {
    return new UserDTO("John", "Doe");
}
```


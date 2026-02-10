---
layout: post
title: "RequestBody"
date: 2024-10-07
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 정의


HTTP요청의 본문에 담긴 데이터를 메서드의 파라미터로 변환해준다


### 용도


주로 POST, PUT 요청에서 JSON, XML 등의 형식으로 데이터를 전달할 때 사용한다


클라이언트가 보낸 데이터를 특정 객체에 매핑하여 서버에서 쉽게 처리할 수 있도록 도와준다


### 예시


{% raw %}
```java
@PostMapping("/user")
public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO) {
    // userDTO는 클라이언트에서 보낸 JSON 데이터를 자동으로 매핑함
    return ResponseEntity.ok("User created");
}
```
{% endraw %}


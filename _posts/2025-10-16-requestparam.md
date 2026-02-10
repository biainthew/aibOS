---
layout: post
title: "RequestParam"
date: 2024-10-07
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 정의


쿼리 파라미터 값을 메서드 파라미터로 받아온다 주로 URL 뒤에 붙는 ?key=value 형식의 값을 처리할 때 사용된다


### 용도


검색 조건, 필터링, 페이징 등의 정보를 URL에 포함하여 보낼 때 사용한다


### 예시


{% raw %}
```java
@GetMapping("/search")
public ResponseEntity<List<UserDTO>> searchUsers(@RequestParam("name") String name) {
    // ?name=John 같은 쿼리 파라미터를 받음
    return ResponseEntity.ok(userService.searchByName(name));
}
```
{% endraw %}


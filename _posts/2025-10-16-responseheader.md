---
layout: post
title: "ResponseHeader"
date: 2024-10-07
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 정의


응답의 header에 값을 설정하기 위해 사용된다 Spring에서 직접적인 어노테이션은 없지만 `ResponseEntity`를 사용해 응답 헤더를 설정할 수 있다


### 용도


응답에서 특정 헤더 정보를 클라이언트에게 전달할 때 사용한다


### 예시


```java
@GetMapping("/download")
public ResponseEntity<byte[]> downloadFile() {
    HttpHeaders headers = new HttpHeaders();
    headers.set("Content-Type", "application/pdf");
    return new ResponseEntity<>(fileContent, headers, HttpStatus.OK);
}
```


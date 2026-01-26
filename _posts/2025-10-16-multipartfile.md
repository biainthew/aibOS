---
layout: post
title: "MultipartFile"
date: 2025-03-06
categories: [general]
tags: [Java]
excerpt_separator: ""
---



스프링 프레임워크에서 제공하는 인터페이스로 클라이언트로부터 전송된 파일 데이터를 처리하는 데 사용됨


### 주요 메서드


`String getName()` : 파라미터 이름 반환


`String getOriginalFilename()` : 원본 파일명 반환


`String getContentType()` : 컨텐츠 타입 반환


`boolean isEmpty()` : 파일이 비어있는지 확인


`long getSize()` : 파일 크기 반환


`byte[] getBytes()` : 파일 데이터를 바이트 배열로 반환


`InputStream getInputStream()` : 파일 데이터를 읽기 위한 `InputStream` 반환


`void transferTo(File dest)` : 파일을 지정된 위치로 저장


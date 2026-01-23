---
layout: post
title: "form vs AJAX"
date: 2024-10-31
categories: [general]
tags: [Javascript/Jquery]
---


## form


### 특징

1. HTML `form` 태그를 사용해 데이터를 전송
2. 주로 POST 또는 GET 방식으로 서버에 요청을 보냄
3. 페이지가 리프레시되거나 서버에서 지정한 페이지로 이동하면서 서버와의 통신이 이루어짐

### 장점

1. form 태그 내에서 입력 필드를 설정하고 submit 버튼을 누르면 서버로 전송된다 HTML 기본 기능으로 추가적인 자바스크립트 코드 없이 쉽게 구현 할 수 있다
2. GET 방식으로 데이터를 전송할 때 URL에 파라미터가 포함되므로 검색 엔진 최적화(SEO) 에 유리할 수 있다
3. 파일 업로드 시에는 `enctype=”multipart/form-data”` 를 통해 파일 데이터를 쉽게 전송할 수 있다

### 단점

1. 요청이 처리되는 동안 사용자는 전체 페이지가 새로고침 되거나 이동하는 것을 경험한다
2. 화면 일부만 업데이트 할 수 없어 간단한 데이터 전송에도 페이지 전체가 갱신된다

### 예시


```java
<form action="/submit" method="POST">
    <input type="text" name="username" />
    <input type="password" name="password" />
    <button type="submit">Submit</button>
</form>
```


## AJAX


### 특징

1. 자바스크립트를 통해 서버와 비동기적으로 데이터를 주고받는다
2. 페이지 리프레시 없이 서버에 요청을 보내고 응답을 받아 처리할 수있다
3. `XMLHttpRequest` 또는 `Fetch API`를 사용하며 jQuery의 `$.ajax()` 메서드도 자주 사용된다

### 장점

1. 전체 페이지가 아닌 특정 부분만 업데이트 할 수 있어 사용자 경험이 향상된다
2. 서버로부터 필요한 데이터만 요청하고 받아오기 때문에 데이터 전송 시 화면이 유지되고 빠르게 반응할 수 있다
3. JSON, XML, HTML 등 다양한 형식으로 데이터를 주고받을 수 있어 유연한 개발이 가능하다

### 단점

1. AJAX를 설정하고 오류를 처리하는 추가적인 자바스크립트 코드가 필요함
2. 검색 엔진은 비동기 요청을 인식하지 못하기 때문에 컨텐츠가 비동기로 로드되면 검색 엔진에 노출되지 않을 수 있음
3. 비동기 요청은 클라이언트와 서버 간에 여러 번 발생할 수 있으므로 보안 토큰이나 인증 관리가 필요

### 비교


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/688c05eb-e6a1-4440-ad99-94fcd370c638/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJT4C7D%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIDaM9uTRd1%2BLllEovhs2JmMdur8n9DiIZ61EmZSj2gVSAiBsndToXQG6O1phYZ2U3YmZm5zRvQg21qjNOy4KFTqBXSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu6nPGP%2BRHqvEuZDpKtwDRVayJIGdaidm3JtD7HqC9E%2B3Sxw1x33X6Tiw1qo5arApErfarZcxBUW4R3B4jdD4ZNDd1MjiMGkgELizibx5hK66IQpcwFHDEkXRou64Ny5BIjDQdKhyhwPD%2FQdmQr97XkyBqszBpItqJOt6C%2FhHwxOMMhYO5xm0L0YX9wV3NPteTX84sL2s%2FqjNzbw7IylHc%2FZjXsmKGhfNdwhLbINAD%2FPG0CDncS3pd4RwlwaG3HKbS4rYuSJ3I2TlJ7rj11ArzIJ6BbxpZ91RA%2FCag1AbMYZZ3VUVocBsg0mziCFtyq0OaTcbzSdOGWMU%2BEoIxJZehiSTwwDN6tRL1%2BPmdF9klDFMGjwq3ni89lnOVOEcbkI3bAxLTgMH6vcZpgLUeYDHcpXIFQwkERxCryZ3%2FGdOcvARtDq7AVY0qw8K6PpUqgjsY8CHhsede%2BdoBn3KMsNZFQIe9%2FP0hMYD5n4KFxpWY8u96gRHIYmGGAxjQ4LKk422NhjMpRJQ0ufz7A4TO8MkTd61BdQn5Hmnx%2FHAkoBlUSncTazmqlipPAaXyZsw8sVJ9WbRmGpW%2F2QNCoBVK0DdpMpWC%2FOAiJMRuz5yYDdREYvOiPorOImw%2FRdjNFchGDfdOXUgzGKqYsrdnR8w14%2FLywY6pgGB3U31LMGP5K6H9owG9lFymjtq6V0pUmDekfSmkiq%2FJHYwJ3wn0l%2FGFalqlvCBidWlduoUgX0ULPzFX7tIoX5p49v0ldSdd3DeJFW2rIfbr2i5iNxfgLbH3Hun%2F%2FHcqslOpIgrySlwp0x3LPK2aPmmIfaR1aF1yNSos3q6SHHIYNyrXyMh8hmEO14h8LTRIgdbYRRDJ%2BiBLb5FHjWpNY2f4ALEYWt9&X-Amz-Signature=aad6ba5b5f2d8836e16ca784f82babf766a93016aa2d667418ee2c816fcfcb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


요즘에는 AJAX 방식으로 대부분의 동적인 기능을 구현하고 기본적인 폼 제출이나 간단한 데이터 전송에는 form 방식을 사용하는 경우가 많다


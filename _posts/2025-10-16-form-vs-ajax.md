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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/688c05eb-e6a1-4440-ad99-94fcd370c638/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGB22AC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDdEcPyg2xHAW8eqHMldJu2G1jftLYPHbf%2Bfh7rF65SXgIhAMoPcGGmOeFDoZTk%2BuB2jRoOrrfHo3x4Nf4oxAACVY41Kv8DCDoQABoMNjM3NDIzMTgzODA1Igz8iXq%2F2osvW36w%2B0kq3AOwiV1HvDZ7S17iB43O6RNMHR1LKbQdBlF52lD1vqbv2A4ttpisySnXcOlvf0iaTv2zzu7WDHT%2F6NM0TpxAVhG4l4T0FZUkKvu0k7DeNdUt5SydMt6PRxYfwYjcLURJBYwT1pQ1%2FYC0leoCDv5DqZnqxeR9OMEJCgVUzOxFQ4Mm4w3j3kdgiaPCJjEtYtF%2Bt79bznecg%2BUT%2BlU4PKnZNaVnW52I7SgSgXjCU%2BN8mSKQ25uRJ2wRabvEogOEg7ZVJmX4hL4d5KXV6QfQYooWdADvuTujqngh9smbFs8oKDWSruc81Njbhnev2keczX9ttJ8Ssf9m4hNtE7QFGpYVM3nP84skooDzGsfJcG8BISy8xl7FS%2BmT0yEISitppYDKAakU9GchKI8wHf9a67KYE0ImkdRXiCKtVdz%2Bpn2JKmhmtmWRuaXEHFSx0cG5krNhiC50pkDSu81CX2Gaf0p3u2%2Bv%2Fs6JSdlxbrmRtGBVGEdUa6EU7fADrNgehkyJ2UtlqC%2FWdh4W2Q43ZIyUd%2BEL8T5zhjQHF9bRgE2sGxMv1MA1BdrgrtbsYJC8IxE%2FjUnQMwNEL%2FfcQlmGVKf2j77Du7YaG%2BGz6z0DewlA%2BaWvlI8bTTWZ4TLaBLEsyTxC5jCo2dzLBjqkAcFiZaWVBHMBZCkMHaepIeSGhhi1ljDSfyOUFFOZVnLCgCwMagBlgYJb4Sg%2FPFRseSmxcI0pFemBGEOico10%2FzMqBkqgjJwS1JzZri5kAwiFN9qBcyd4TopREldoHZd8wUT9AYOjuaq3AssXQLlXNpifjVx63Wjy%2FeEABsFhzpKCMXt3JiutTRLvf8x3uN%2Bb8UGZNSw%2FjapYAnlxfPmTawjOt4Ge&X-Amz-Signature=036afeb969aa432a74eb56cfa157bcfc93e5a9a9dcc5363ab71ab1a0d9923194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


요즘에는 AJAX 방식으로 대부분의 동적인 기능을 구현하고 기본적인 폼 제출이나 간단한 데이터 전송에는 form 방식을 사용하는 경우가 많다


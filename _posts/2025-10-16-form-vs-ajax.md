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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/688c05eb-e6a1-4440-ad99-94fcd370c638/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOWJLLFP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD6k1YS7mJJN4qnJmCqqTGPlex9yw%2FoB%2FxqKoCFXJKfAiEAw1%2FRS131%2B4MPxaMNkg%2F8mqCD%2BC0fssDKxHOr%2FHuemlsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWO45dxXZAH2iX62SrcA8rxSVoYpMgdqsk3K75SupfZUCxLkMgFG1kbqveSTd7OWZ0iysHAPYN7kIjje%2BcqywPfhAOstEr2zM5aXsWFQT%2BfIQS7Y8YSespSe%2FBhHPLboo95fh3gtAYrGyPtzM34fwrpBKcvmeJrM4%2Bt5JtEpOqbAjhnlMT0yNZnz0stnBjQABLKV5brKlyZW3bOQWeCkTKXDtzSIRTMx5KuGdtt6ioVw82i9augph2jcXukdfRognyI3jp39C%2BFANZplSzanZnijyMfEgtV0lPyIfEWYmBZ4jyG2lnja1XY2d2czvjpZ4wjX0FF5on5rWQLrzPKh8Ztpfor0i9d7xPAY4Ms0I7n8Q9bTiLrHtlir0ZT7TmogttbT3GkMIoAntLnhlP2czhoVhaeZarShJaCyBKGtC4o4DJWfHyyZL1tOeEGhaeD5GpO0f%2FNXNPZ2AdnaXX7wiJ1Nt3zHKQ6Q0xS%2BnjOaHAx%2Be%2F3C3IodZCl3vQbSSZ3r0RHwCREvWF3gmGCkefOwbXxW0GWKSHbRyAmn5mvmiLL3TrluoKtjvgomjsCJ6t6O9BL%2FkFMv8dn6v36e0LyfbSvjyVxLjIoA%2BufEWFpc%2FVDG1iCMtKoATbwCBuGWlmyX%2BOyWyDS4D0ym0%2BwMIrY0MoGOqUBlZv9dgpwOSQzWURmUdFNBnrag1rBY2tYvGKpcY6%2BTTkG26dmO4l1eFrHgVowtKH7auNEyJmlSv%2BgRIyUqgdZN4bS%2FXmI6K4gFUrww5%2B2hf8CcMFAROasLRWhuVFwSXh1JdNZCMMR6JBwbc3%2Fp6oP8Qd4Ul6uXp8zh2x4YgMLiYyIv5dwZkVlUAf2xUSG1V8eeI5%2BD2%2F2LqSspG9%2FekjuVj19uLow&X-Amz-Signature=984ccc6b62d4263224bcd0c8fc77e4ba91b965193bc89e3f7e25a582708af57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


요즘에는 AJAX 방식으로 대부분의 동적인 기능을 구현하고 기본적인 폼 제출이나 간단한 데이터 전송에는 form 방식을 사용하는 경우가 많다


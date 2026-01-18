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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/688c05eb-e6a1-4440-ad99-94fcd370c638/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D27NHJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp%2FInwXdnIBIY3c%2FJoAYAdfXDxCHbNV%2FFNIsf9ofACrAIgTZQPLH5Aem6FneYWSdxLr52d3WFePilmQmJRn5iZfawq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHyYhbXq8EhPC%2FYmyircA%2FamTF7DPmsSR%2FFJ2Ekn2147sYGlXFrLci4OzmcElpsGoLi6g7KrnN%2B2qF0whz1GWPZ6SG6aWVolDpUQarwHgT85l0Zn5MPt%2BQe4caozspz4XvlT8J41p%2BJD6QnHsvNlrr7u1i6J10SY0ze9cTkVTQFPUAldy34NPt84dKRCr%2BhodnRF2WCkXtRudvayEVB8EifRk0oNlpH78h2Rn9z6k39XvdSQcAmFF2ZELgKbfcR5AJwWtoyXwX1Egne7QKIYQXQs%2FT20PzZK363b1icfogEWUQFkbPPXExkGahgk21c4bl89ELKBapwRjNlTwXEfbDw8ZdTb8tiiPC3A24zQqiATThosxH4fgReQOp5MabVGu0DBZI5FphJVSLVKfVOOvkibRBiSSMA86ob%2F3UyV%2FvQbO14hpRCmFHmwo5ULIS3%2F%2BiTEhO7bJar766Wc24Z9z05fZ22I0gQQsNsSTNL4%2F9bbnwiiqROqS4tR0Ll0GLZIIZLl9wivjKpDCV%2BuHOLngx0WzGndsaiRuh%2BF0hXugRoyl9x4wD8pMif98uaj%2FTXfPM7AXzvNMOaXVVxIafDc0IbLwaelplKtIyDWLfHTIkHBJRat0TPYES5%2Fk70fiv5bEcfXFsk8tF2O7BOvMMmhsMsGOqUB2N5hp89fE%2FFhaLXvOVBIoPNv3ktEO4AO8xcQIfF2ZrHdfBXc5KlVLfb59RBSrvASpq5Q2WyNcEmaCbTuNYjXDt%2BuXQTCEE1FqXDPVjTrmQk8OkI68v5bWVJCK56tIAkotq44ok7dBvBqdVrPQpe7I8ckUT805IXccBpE8FRUWEe3IJnfk%2BDqlTP6lHcqZPg0pIp%2F8OGfbNiUuEXWqNySKjhXIJ5N&X-Amz-Signature=719299cb0186953579ce4dd6ab94565160ca1b1c49ee8d034bb5efb3982e48e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


요즘에는 AJAX 방식으로 대부분의 동적인 기능을 구현하고 기본적인 폼 제출이나 간단한 데이터 전송에는 form 방식을 사용하는 경우가 많다


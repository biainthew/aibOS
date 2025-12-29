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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/688c05eb-e6a1-4440-ad99-94fcd370c638/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6T2BMPC%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpqLdlG5TLwSULBssbdYmA1qw7c3lc1SLfh9qhGXY5UAIgcRQty5AvZbKBYKlknruApfc6po2yVMwCGWYvLHfxv0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxWLmdMr4MjR4p4YircA87ZlIl2u7CIXcWNj4LrbrI0dwkG2Q9yPZ8Ka%2FBu4cYAYt722VHnHozl8DEHrQn63X1r70iinAp8OPP6yJahF6TViq%2F1khBoJrS2krGPoSNAmAqgRnWFtpy9jYWDy%2F3%2FG3CG4BYK4ysqPRtdOvT%2F64oiBan0Rp2Hj7nYh8NNriPN%2B%2B1NG6ifHi0XroQ1%2BXcZYm1JeBjqMi8%2BtYATltJtFkaCTdyyYAjluOnJSdC91zvsmrc77Jp4OSyjXlOmIHDakA9KChWfFIYg7vX7wV1euU%2Bu7fx6W%2FqWNLH1%2BVrh82uUZDfjCg1zWbjfAxDOTxBrR3LEMSTKbp2vb0qlIVeuI5JwMO476laXUYGRlYWKScsgoPujm7xMjknp9OMIyfIklufdLxp8pF%2B1EUc6VnxeSZXeNPgr1rT%2FbR29YsZQTeAkbBGGQotVtj672Q7rkaVx5EWnzSiUphUXzYWeJotpPm2boR7x4%2FWb2liuF3lQgROEkPPV6T7rSJklbv1NE6o9iDoyh7ZNgoM01OIy4%2BI6UpyRnJpkmZA2%2BJPaAry169PucZkhW53r%2BsXcaQM3LhZAtPkAgB563T5aipjsijxo8bCHz2Eyw%2F4nXxcoivrfQVCNY%2Fip5IyUDejF90FfMLCix8oGOqUBRA66T89l6H07xVS1MuZJEagHbFmJACAOKQRo7shvwNH8M8w0%2Fj1vHBIOb2DAxAGL1%2B6033Ff3qwydrJ6Y0UMn0T%2BalQ5EAPC5mC8IzaehABm%2BWHKQ5%2FDpbXs%2BBcBZQNHKQ%2FcitonerC2Kd82ItEwEmuYC7%2FEP80hSbgPahX4FAb3QbtXYQa8PUA5KvKegJx0KdVxFE3cFtOiNok%2Fmpy%2BgeDngsBM&X-Amz-Signature=4d1f1ddd5d71c103d28ea0a1b96c25ffd2fc32f9c06dfda45f9de166ca0b2b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


요즘에는 AJAX 방식으로 대부분의 동적인 기능을 구현하고 기본적인 폼 제출이나 간단한 데이터 전송에는 form 방식을 사용하는 경우가 많다


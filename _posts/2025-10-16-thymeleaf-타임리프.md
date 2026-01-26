---
layout: post
title: "Thymeleaf 타임리프"
date: 2023-06-02
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### Thymeleaf 란 ?


: **템플릿 엔진**의 일종으로 html 태그에 속성을 추가해 동적으로 값을 추가하거나 처리할 수 있다.


### 예시


```javascript
<input type="text" value="test" th:value="${item}"
```


: `input` 태그는 `th:value` 를 통해 `item` 이라는 변수에 값이 존재하면 해당 값을 세팅해준다.


: 만약 `item` 이 존재하지 않으면 `value="test"` 를 통해 `test` 라는 문자열을 세팅해준다.


: `th:xxx` 가 붙은 부분은 서버 사이드에서 렌더링 되어 기존 것을 대체하고 `th:xxx` 이 없으면 `xxx` 속성을 그대로 사용


타임리프를 통해 렌더링 된 html 페이지를 열면 웹 브라우저는 th: 속성을 알지 못한다


### 템플릿 엔진이란 ?


: 지정된 템플릿 양식과 데이터가 합쳐져 html 문서를 출력하는 소프트웨어


: 크게 서버 템플릿 엔진과 클라이언트 템플릿 엔진으로 나뉘는데 타임리프는 전자에 해당


: 서버에서 DB 또는 API 등을 통해 가져온 데이터를 미리 정의된 템플릿에 넣어 html을 그려내 클라이언트에게 전달해준다. 즉 html 코드에서 고정적으로 사용되는 부분은 템플릿으로 만들어 두고 동적으로 생성되는 부분만 템플릿 특정 장소에 끼워넣는 방식으로 동작할 수 있게 해준다.


### 템플릿 엔진의 장점 ?

1. 코드 양 ⬇️
2. 재사용성 ⬆️
3. 유지보수에 용이

### 여러 서버 템플릿 엔진의 특징

- Jsp : 스프링 부트에서 비권장
- Velocity : 스프링 부트에서 비권장
- Freemarker : 템플릿 엔진으로서 기능이 너무 다양함, 숙련도 낮은 경우 비즈니스 로직이 추가됨
- Thymeleaf : 스프링에서 권장, 문법이 어려움
- Mustache : 심플하고 서버, 클라 모두 사용 가능

### Thymeleaf 문법


: 대부분의 html 속성을 `th:xxx` 로 변경할 수 있다.


| 표현      | 설명                                          | 예제                                                                           |
| ------- | ------------------------------------------- | ---------------------------------------------------------------------------- |
| @{ … }  | URL 링크 표현식                                  | th:href=”@{/css/bootstrap.min.css}”                                          |
| | … |   | 리터럴(백틱) 대체                                  | th:text=”|Hi ${user.name}!|”                                                 |
| ${ … }  | 변수                                          | th:text=${user.name}                                                         |
| th:each | 반복 출력                                       | <tr th:each=”item: ${items}”>
    <td th:text=”${item.price}”>100</td>
</tr> |
| *{ … }  | 선택 변수                                       | <tr th:object=”${items}”>
    <td th:text=”*{price}”>100</td>
</tr>          |
| #{ … }  | 메시지, properties 같은 외부 자원에서 코드에 해당하는 문자열 get | th:text=”#{member.register}”                                                 |


[참고](https://yeonyeon.tistory.com/153)


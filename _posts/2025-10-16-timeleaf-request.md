---
layout: post
title: "Timeleaf request"
date: 2024-10-29
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



타임리프에서 request 는 웹 요청과 관련된 정보를 가져오는 데 사용된다


이를 통해 HTTP 요청의 속성에 접근할 수 있다


### 1. `#request.getParameter("parameterName")`


**설명 :** 요청 매개변수를 가져온다.


**예시 :** `#request.getParameter("username")`는 username 이라는 이름의 요청 매개변수 값을 반환한다.


### 2. `#request.getAttribute(”attributeName”)`


설명 : 요청 속성(서블릿이나 필터에서 설정된 값)을 가져온다


예시 : `#request.getAttribute("user")` 는 user 라는 속성에 저장된 객체를 반환한다.


### 3. `#request.getSession()`


설명 : 현재 세션 객체를 가져온다 세션은 사용자와 서버 간의 상태를 유지하는 데 사용된다


예시 : `#request.getSession().getAttribute("loggedInUser")` 는 세션에서 loggedInUser 라는 속성값을 가져온다


### 4. `#request.getCookies()`


설명 : 클라이언트의 쿠키 정보를 가져온다


예시 : `#request.getCookies()` 는 쿠키 배열을 반환한다


### 5. `#request.getRequestURI()`


설명 : 요청 URI(사용자가 요청한 리소스의 경로)를 가져온다


예시 : `#request.getRequestURI()` 는 요청한 URI를 반환한다


### 6. `#request.getMethod()`


설명 : HTTP 요청 메서드(GET, POST 등)를 가져온다


예시 : `#request.getMethod()`는 요청 메서드를 반환한다


### 비슷한 개념

1. **`#session`**

    : 세션과 관련된 속성에 접근할 수 있습니다. 예를 들어, `#session.getAttribute("user")`는 세션에 저장된 사용자 정보를 가져온다

2. **`#application`**

    : 웹 애플리케이션 전역에 저장된 속성에 접근합니다. 예를 들어, `#application.getAttribute("appName")`는 애플리케이션 이름을 가져온다

3. **`#httpServletRequest`**

    : 현재 요청에 대한 `HttpServletRequest` 객체에 직접 접근할 수 있다. 이를 통해 더 많은 기능과 정보를 사용할 수 있다.


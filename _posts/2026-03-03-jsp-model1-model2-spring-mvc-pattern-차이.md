---
layout: post
title: "JSP Model1, Model2, Spring MVC pattern 차이"
date: 2026-03-03
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### Model 1 방식


![image.png](/aibOS/public/images/posts/3180a7f9-8369df5a51ec.png)

- jsp 안에 html, java 코드가 함께 존재함
- 유지보수가 어렵고 가독성이 좋지 않음

### Model 2 방식


![image.png](/aibOS/public/images/posts/3180a7f9-073143d257f8.png)

- 사용자 요청은 Servlet 이 받음

    > 💡 **Servlet**  
    > 자바로 웹을 하려고 만든 규격  
    >   
    > 1. 브라우저가 요청을 보냄  
    >   
    > 2. 톰캣이 서블릿에게 요청을 시킴  
    >   
    > 3. 서블릿은 서비스 메서드를 수행해서 html 형태 응답을 보냄

- 여전히 jsp 에 자바 코드는 남아있음

    -> EL, JSTL로 제거 가능


    > 💡 **EL (Expression Language)**  
    > JSP 내장객체를 활용해서 데이터를 출력하기 위한 문법  
    >   
    > - **request** : 브라우저가 서버쪽에 요청을 할 때 생성, 응답이 들어오면 바로 삭제됨  
    >   
    > - **session** : 브라우저가 살아있는 동안 유지  
    >   
    > - **application** : 톰캣 서버가 살아있는 동안 유지


    > 💡 **JSTL (JSP Standard Tag Library)**  
    > JSP 파일에서 if, for, switch 등과 같은 자바 코드를 대

- 컨트롤러를 개발자가 직접 구현하면 복잡하고 신뢰성이 떨어지기 때문에 프레임워크를 사용하는 것

### **Spring MVC**


![image.png](/aibOS/public/images/posts/3180a7f9-5ad4cf330f8c.png)


**Servlet Container**


: 톰캣 서버가 생성, web.xml 을 로딩


**Spring Container**


: Dispatcher Servlet 의 init() 메서드에서 생성, init-param 의 param-value.xml 을 로딩


**Dispatcher Servlet**


: 유일한 서블릿 클래스, 모든 클라이언트의 요청을 가장 먼저 처리


**Handler Mapping**


: 클라이언트의 요청을 처리한 Controller 매핑


**Controller**


: 실질적인 클라이언트의 요청 처리


**View Resolver**


: View 이름 앞에 접두사를 붙여서 실행될 화면 경로를 완성


**Forward 방식과 Redirect 방식 차이**


| **구분**     | **Forward (전달)**        | **Redirect (재요청)**         |
| ---------- | ----------------------- | -------------------------- |
| **URL 변화** | 변하지 않음 (기존 URL 유지)      | 변함 (새로운 주소로 이동)            |
| **객체 유지**  | `HttpServletRequest` 유지 | 새로운 Request 생성 (기존 데이터 소멸) |
| **주체**     | 서버 내부에서 페이지 이동          | 브라우저가 스스로 새 주소 접속          |
| **속도**     | 상대적으로 빠름 (서버 내부 이동)     | 상대적으로 느림 (네트워크 재접속 2회)     |
| **수행 주소**  | 같은 웹 컨테이너(서버) 내에서만 가능   | 타 사이트(naver.com 등)로도 이동 가능 |

- **Forward를 쓰는 경우 :** 단순 조회나 내부 로직 분기.
    - 예: `boardList.do` 요청을 받아 DB 조회 후 `list.jsp`로 화면만 보여줄 때
- **Redirect를 쓰는 경우 :** 시스템에 변화를 주는 작업(쓰기, 수정, 삭제) 후
    - 이유**:** Forward로 처리하면 사용자가 화면에서 새로고침을 눌렀을 때 동일한 결제/글쓰기 요청이 반복되어 중복 결제 등의 사고가 날 수 있음
    Redirect를 하면 새로고침 시 이동된 페이지(결제 완료 페이지 등)만 다시 불러오므로 안전함
    -> POST-REDIRECT-GET 패턴

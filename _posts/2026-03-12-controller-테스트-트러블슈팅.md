---
layout: post
title: "Controller 테스트 트러블슈팅"
date: 2026-03-12
categories: [general]
tags: [Java]
excerpt_separator: ""
---



`@WebMvcTest` 환경에서 `CustomException`이 던져졌을 때 예상한 HTTP 상태 코드가 반환되지 않고 테스트가 실패하는 문제를 해결한 과정


---


## 문제 상황


게시글 삭제 실패 - 권한 없음 테스트에서 `status().isForbidden()` (403) 을 기대했는데 `ServletException`이 발생하면서 테스트가 실패함


{% raw %}
```java
@Test
@DisplayName("게시글 삭제 실패 - 권한 없음")
@WithMockUser
void delete_fail_unauthorized() throws Exception {
    // given
    doThrow(new CustomException(ErrorCode.POST_UNAUTHORIZED))
            .when(postService).delete(any(), any());

    // when & then
    mockMvc.perform(delete("/api/posts/1").with(csrf()))
            .andExpect(status().isForbidden()); // 실패
}
```
{% endraw %}


{% raw %}
```plain text
jakarta.servlet.ServletException: Request processing failed:
aib.noticeboard.exception.CustomException: 게시글 수정/삭제 권한이 없습니다.
```
{% endraw %}


---


## 원인 분석


에러 흐름을 따라가면 세 단계로 나뉨


**1단계 - CustomException 발생**


`PostService.delete`에서 `CustomException`이 던져짐


**2단계 - GlobalExceptionHandler가 잡으려 했지만 실패**


로그에서 아래 메시지가 확인됨


{% raw %}
```plain text
ERROR : CustomException: 게시글 수정/삭제 권한이 없습니다.
WARN  : Failure in @ExceptionHandler GlobalExceptionHandler#handleCustomException(CustomException)
```
{% endraw %}


`GlobalExceptionHandler`가 `CustomException`을 잡긴 했는데 핸들러 안에서 또 에러가 발생한 것


**3단계 - ErrorResponse 직렬화 실패**


`handleCustomException`이 `ResponseEntity<ErrorResponse>`를 반환하려 했는데 `ErrorResponse`에 `@Getter`가 없어서 Jackson이 직렬화에 실패함


Jackson은 기본적으로 getter 메서드를 통해 필드 값을 읽기 때문에 getter가 없으면 직렬화할 수 있는 필드가 없어서 예외가 발생함


**전체 흐름 정리**


{% raw %}
```plain text
CustomException 발생
→ GlobalExceptionHandler.handleCustomException 실행
→ ErrorResponse 직렬화 시도
→ @Getter 없어서 Jackson 직렬화 실패
→ Failure in @ExceptionHandler 에러 발생
→ ServletException으로 감싸져서 올라옴
→ 테스트 실패
```
{% endraw %}


---


## 해결


### ErrorResponse에 @Getter 추가


{% raw %}
```java
// 수정 전
public class ErrorResponse {
    private final String message;
    private final int status;
    private final Map<String, String> errors;
    ...
}

// 수정 후
@Getter
public class ErrorResponse {
    private final String message;
    private final int status;
    private final Map<String, String> errors;
    ...
}
```
{% endraw %}


---


## 추가로 발생한 문제들


### @EnableJpaAuditing을 메인 클래스에서 분리


`@WebMvcTest`는 웹 계층만 로드하는데 메인 클래스에 `@EnableJpaAuditing`이 붙어 있으면 JPA 관련 빈을 찾지 못해서 컨텍스트 로드가 실패함


{% raw %}
```java
// 수정 전 - NoticeboardApplication.java
@EnableJpaAuditing
@EnableScheduling
@SpringBootApplication
public class NoticeboardApplication { ... }

// 수정 후 - JpaAuditingConfig.java로 분리
@Configuration
@EnableJpaAuditing
public class JpaAuditingConfig { }
```
{% endraw %}


`@WebMvcTest`를 사용할 때는 `@EnableJpaAuditing`을 별도 `@Configuration` 클래스로 분리하는 것이 정석


### doThrow 매처 문제


`eq(1L)`로 인자를 특정하면 매칭이 안 되는 경우가 있음. `any()`로 바꾸면 해결됨


{% raw %}
```java
// 매칭 안 될 수 있음
doThrow(new CustomException(ErrorCode.POST_UNAUTHORIZED))
        .when(postService).delete(any(), eq(1L));

// 안전한 방식
doThrow(new CustomException(ErrorCode.POST_UNAUTHORIZED))
        .when(postService).delete(any(), any());
```
{% endraw %}


---


## 참고


`@WebMvcTest` 환경에서 `@RestControllerAdvice`가 붙은 `GlobalExceptionHandler`는 자동으로 감지되기 때문에 `@Import`에 추가하지 않아도 됨


{% raw %}
```java
// GlobalExceptionHandler를 @Import에 추가하지 않아도 됨
@WebMvcTest(controllers = PostController.class)
@Import(SecurityConfig.class)
public class PostControllerTest { ... }
```
{% endraw %}


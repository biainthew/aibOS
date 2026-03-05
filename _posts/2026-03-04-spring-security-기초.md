---
layout: post
title: "Spring Security 기초"
date: 2026-03-04
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### Spring Boot 컨트롤러 리턴 타입 비교

1. **@Controller**

    {% raw %}
```java
    @Controller
    public class IndexController {
    	@GetMapping("/admin")
    	public String admin() {
    	    return "admin";
    	}
    }
    ```
{% endraw %}

    - 리턴값 admin 을 html 파일명으로 인식
    - 뷰 리졸버가 html 파일을 찾음
2. **@RestController**

    {% raw %}
```java
    @RestController
    public class IndexController {
    	@GetMapping("/admin")
    	public String admin() {
    	    return "admin";
    	}
    }
    ```
{% endraw %}

    - 리턴값 admin 을 순수 데이터로 취급
    - 메세지 컨버터가 데이터를 응답 본문에 넣음
3. **@Controller + @ResponseBody**

    {% raw %}
```java
    @Controller
    public class IndexController {
    	@GetMapping("/admin")
    	public @ResponseBody String admin() {
    	    return "admin";
    	}
    }
    ```
{% endraw %}

    - 리턴값 admin 을 순수 데이터로 취급

### **The bean 'delegatingApplicationListener' 에러**

1. **에러 메세지**

    {% raw %}
```bash
    The bean 'delegatingApplicationListener', defined in class path resource [com/cos/security1/config/SecurityConfig.class], could not be registered. A bean with that name has already been defined in class path resource [org/springframework/security/config/annotation/web/configuration/WebSecurityConfiguration.class] and overriding is disabled.
    ```
{% endraw %}

2. **원인**

    Spring 2.x 버전에서는 `WebSecurityConfiguration` 을 상속받아 `SecurityConfig`를 작성하고 `delegatingApplicationListener Bean` 을 수동으로 등록했음


    Spring 3.x 버전에서는 수동으로 `delegatingApplicationListener` 를 등록하는 방법이 사라짐


    그래서 `SecurityFilterChain` 을 직접 `Bean` 으로 등록하고 사용해야 함

3. **해결 방법**

    `WebSecurityConfiguration` 상속을 제거


    {% raw %}
```java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig {
    
        @Bean
        protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            http.csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(authorize -> authorize
                            .requestMatchers("/user/**").authenticated()
                            .requestMatchers("/manager/**").hasAnyRole("MANAGER", "ADMIN")
                            .requestMatchers("/admin/**").hasRole("ADMIN")
                            .anyRequest().permitAll()
                    );
    
            http.formLogin(form -> form.loginPage("/login"));
            return http.build();
        }
    }
    ```
{% endraw %}


### Spring Security 로그인 처리 구조

1. **Security Session 생성**

    로그인 인증에 성공하면 해당 사용자를 위한 Security Session 을 생성 (`SecurityContextHolder` 내부에 저장)

2. **Authentication 객체**

    세션에 들어갈 수 있는 유일한 객체 타입은 `Authentication`


    이 객체는 인증된 사용자라는 증명을 하는 역할을 하며 내부에 실제 사용자 정보를 포함해야 함

3. **UserDetails 타입**

    `Authentication` 객체 내부에 저장되는 사용자 정보 (`Principal`) 는 반드시 `UserDetails` 인터페이스를 구현한 객체여야 함


### 접근권한 설정 방법

1. **전역 설정**

    {% raw %}
```java
    @Configuration
    @EnableWebSecurity
    // 스프링 시큐리티 필터(SecurityConfig)가 스프링 필터체인에 등록이 됨
    @EnableMethodSecurity(securedEnabled = true, prePostEnabled = true)
    // Secured 어노테이션 활성화, PreAuthorize, PostAuthorize 어노테이션 활성화
    public class SecurityConfig {
    
        // 해당 메서드의 리턴되는 오브젝트를 IoC로 등록해준다
        @Bean
        public BCryptPasswordEncoder encodePwd() {
            return new BCryptPasswordEncoder();
        }
    
        @Bean
        protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            http.csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(authorize -> authorize
                            .requestMatchers("/user/**").authenticated()
                            .requestMatchers("/manager/**").hasAnyRole("MANAGER", "ADMIN")
                            .requestMatchers("/admin/**").hasRole("ADMIN")
                            .anyRequest().permitAll()
                    );
    
            // 권한이 없는 페이지 접근 시 로그인 페이지로 이동하도록 설정
            http.formLogin(form ->
                    form.loginPage("/loginForm")
                    .loginProcessingUrl("/login")
                    .defaultSuccessUrl("/")
            );
            return http.build();
        }
    }
    ```
{% endraw %}

2. **특정 메서드에 권한 한 개**

    {% raw %}
```java
    @Secured("ROLE_ADMIN")
    @GetMapping("/info")
    public @ResponseBody String info() {
        return "개인정보";
    }
    ```
{% endraw %}

3. **특정 메서드에 권한 여러 개**

    {% raw %}
```java
    @PreAuthorize("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
    @GetMapping("/data")
    public @ResponseBody String data() {
        return "데이터정보";
    }
    ```
{% endraw %}


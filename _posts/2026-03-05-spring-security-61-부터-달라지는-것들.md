---
layout: post
title: "Spring Security 6.1 부터 달라지는 것들"
date: 2026-03-05
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 기존 설정 방식


{% raw %}
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig{

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }
}
```
{% endraw %}


### 오류 내용


![image.png](/aibOS/public/images/posts/31a0a7f9-de200a3332e3.png)


![image.png](/aibOS/public/images/posts/31a0a7f9-f9a317471436.png)


`csrf()` 와 `sessionManagement()` 는 이제 지원 중단, 제거된다고 한다


### 해결 방안


대체 방법은 함수형 설정 방식으로 변경하는 것


{% raw %}
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

		@Bean
    protected void configure(HttpSecurity http) throws Exception {
        http
				        .csrf(AbstractHttpConfigurer::disable)
				        .sessionManagement((sessionManagement) ->
									        sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				        );
        return http.build();
    }
}
```
{% endraw %}


메서드 참조 방식, 람다식을 사용한다


> 💡 **메서드 참조 방식**  
> 문법 : `ClassName::methodName`  
>   
> `ClassName` : 대상을 정의하는 클래스  
>   
> `::` : 메서드 참조 연산자  
>   
> `methodName` : 실행할 메서드


> 💡 **람다식**  
> 문법 : `(parameter) → body`  
>   
> `(parameter)` : 함수에 전달되는 값  
>   
> `→` : 매개변수와 실행 로직 연결  
>   
> `body` : 실제로 실행될 코드 블록  
>   
> ❗**딱 하나의 추상 메서드만 가진 인터페이스를 구현할 때만 사용할 수 있음**


### 변환 과정

1. `http.csrf()` 메서드는 `Customizer<CsrfConfigurer<HttpSecurity>>`를 인자로 받음

    {% raw %}
```java
    public HttpSecurity csrf(Customizer<CsrfConfigurer<HttpSecurity>> csrfCustomizer) throws Exception {
        ApplicationContext context = this.getContext();
        csrfCustomizer.customize((CsrfConfigurer)this.getOrApply(new CsrfConfigurer(context)));
        return this;
    }
    ```
{% endraw %}

2. `CsrfConfigurer` 클래스는 `AbstractHttpConfigurer` 를 상속받음

    {% raw %}
```java
    public final class CsrfConfigurer<H extends HttpSecurityBuilder<H>> extends AbstractHttpConfigurer<CsrfConfigurer<H>, H> {
    		...
    }
    ```
{% endraw %}

3. `AbstractHttpConfigurer` 클래스의 `disable()` 메서드

    {% raw %}
```java
    public B disable() {
        ((HttpSecurityBuilder)this.getBuilder()).removeConfigurer(this.getClass());
        return (B)(this.getBuilder());
    }
    ```
{% endraw %}

4. `CsrfConfigurer` 는 `AbstractHttpConfigurer` 를 상속받았으니 부모 클래스에서 메서드 참조

    {% raw %}
```java
    http.csrf(AbstractHttpConfigurer::disable);
    ```
{% endraw %}


### 추가로 달라지는 것들


`.httpBasic()` → `.httpBasic(Customizer.withDefaults())`


`.formLogin()` → `.formLogin(form -> form.loginPage("/login"))`


`.authorizeRequests()` → `.authorizeHttpRequests(auth -> auth.anyRequest()...)`


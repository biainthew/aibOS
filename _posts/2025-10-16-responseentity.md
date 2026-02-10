---
layout: post
title: "ResponseEntity"
date: 2024-10-04
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 개념


ResponseEntity는 HTTP 응답을 나타내는 Spring Framework의 클래스이다


이 클래스는 요청에 대한 응답의 HttpHeader, HttpBody 및 Status Code를 포함하여 클라이언트에게 전달할 수 있는 다양한 기능을 제공한다


### 역할

1. body(본문) : 응답의 실제 데이터(ex. JSON, XML 등)
2. status(HTTP 상태 코드) : 응답의 성공 여부를 나타내는 코드(ex. 200 OK, 404 Not Found)
3. headers : 응답에 포함할 추가적인 정보(ex. Content type, Authorization 등)

### `ResponseEntity<T>`에서 `<T>`의 의미


ResponseEntity는 제네릭 클래스로 <T>는 응답의 본문에 담길 데이터의 타입을 의미한다


**<String> :** 응답의 본문이 문자열 일 때


**<User>** : 응답의 본문이 User 객체일 때


**<List<User>>** : 응답의 본문이 User 객체의 리스트 일 때


**<?>** : 와일드카드, 모든 타입이 올 수 있음


**<? extends T>** : T의 하위 클래스만 허용


**<? super T>** : T의 상위 클래스만 허용


### 주요 메서드

1. 상태 코드 설정

    {% raw %}
```java
    if (user == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // 404 반환
    }
    ```
{% endraw %}


    상태코드를 명시하지 않으면 `user`가 `null`일 때도 200 OK가 반환될 수 있음

2. 헤더 설정

    {% raw %}
```java
    HttpHeaders headers = new HttpHeaders();
    headers.set("Custom-Header", "Value");
    return new ResponseEntity<>(user, headers, HttpStatus.OK);
    ```
{% endraw %}

3. 빌더 패턴 사용

    {% raw %}
```java
    return ResponseEntity.ok(user);  // 200 OK와 함께 응답
    
    //or
    
    return ResponseEntity.status(HttpStatus.CREATED).body(user);  // 201 Created와 함께 응답
    ```
{% endraw %}


### 왜

1. HTTP 상태 코드 제어 : 응답에 대한 HTTP 상태 코드를 명시적으로 지정할 수 있다
2. 응답 본문 및 헤더 제어 : ResponseEntity를 통해 응답 본문과 헤더를 세밀하게 제어할 수 있다
3. 유연성 : 일반적인 객체 또는 커스텀 클래스를 응답으로 반환할 수 있으며 Spring 은 해당 객체를 적절한 형식으로 변환한다

### 자주 쓰이는


`HttpStatus.OK: 200 OK`


`HttpStatus.CREATED: 201 Created`


`HttpStatus.NO_CONTENT: 204 No Content`


`HttpStatus.BAD_REQUEST: 400 Bad Request`


`HttpStatus.UNAUTHORIZED: 401 Unauthorized`


`HttpStatus.FORBIDDEN: 403 Forbidden`


`HttpStatus.NOT_FOUND: 404 Not Found`


`HttpStatus.INTERNAL_SERVER_ERROR: 500 Internal Server Error`


### 예시


{% raw %}
```java
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Book book = bookService.getBookById(id);

        if (book != null) {
            return ResponseEntity.ok().body(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 나머지 메서드들
}
```
{% endraw %}


{% raw %}
```java
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
    	// 예시로 임의의 책을 반환
        Book book = new Book(id, "Sample Book", "Sample Author");
        
        // 상태 코드를 지정하여 ResponseEntity를 생성
        return ResponseEntity.status(HttpStatus.OK).body(book);
    }

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        // 예시로 생성된 책을 반환
        Book savedBook = new Book(1, book.getTitle(), book.getAuthor());

        // 상태 코드를 지정하여 ResponseEntity를 생성
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
    }

    // 나머지 메서드들
}
```
{% endraw %}


---
layout: post
title: "Controller"
date: 2024-10-02
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 역할

1. 사용자의 요청 처리
    1. 사용자가 웹 어플리케이션에 보내는 요청(GET, POST, PUT, DELETE 등)을 처리한다
    2. 요청에 맞는 데이터를 Service 계층에 전달하여 비즈니스 로직을 처리한 후 응답을 반환한다
2. Service 계층 호출
    1. 비즈니스 로직은 Controller 에서 직접 구현하지 않고 Service 계층을 호출하여 처리한다
    2. Controller는 단순히 요청을 받고 처리 결과를 반환할 뿐 비즈니스 로직이 포함되지 않도록 해야한다
3. 요청 파라미터 처리
    1. 사용자로부터 전달된 데이터를 파싱하고 이를 적절한 형식으로 변환하여 Service 계층에 전달한다 ex) URL 파라미터나 폼 데이터 추출
4. 응답 반환
    1. Service 계층에서 처리된 결과를 받아 JSON, HTML, XML과 같은 형식으로 응답을 반환
    2. 사용자에게 적절한 뷰나 데이터를 전달하기 위한 역할을 한다

### 예시


{% raw %}
```java
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // 사용자를 ID로 조회하는 엔드포인트
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 새로운 사용자 등록
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserDto userDto) {
        User user = userService.createUser(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}
```
{% endraw %}


### 장점

1. Controller 는 사용자와의 상호작용을 처리하고 비즈니스 로직을 Service 계층에 위임함으로써 역할이 명확하게 분리
2. HTTP 응답 코드(ex. 200, 404, 201 등)를 명확하게 관리할 수 있다
3. 다양한 형태의 응답(JSON, HTML 등)을 반환할 수 있으며 RESTful API를 쉽게 구현할 수 있다

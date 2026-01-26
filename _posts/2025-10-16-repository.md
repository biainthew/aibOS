---
layout: post
title: "Repository"
date: 2024-10-02
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 역할

1. 데이터베이스와의 상호작용
    1. 데이터베이스에서 데이터를 가져오거나 저장 수정 삭제하는 모든 작업을 처리
    2. SQL 쿼리 또는 ORM(Object-Relational Mapping)을 통해 수행
2. CRUD 작업
    1. CRUD(Create, Read, Update, Delete) 작업을 추상화하여 데이터에 접근하는 로직을 관리
    2. 데이터를 조회할 때 특정 조건을 추가하거나 페이징 처리 등의 기능을 제공하기도 함
3. 비즈니스 로직과 분리
    1. Repository는 단순히 데이터를 저장하거나 조회하는 역할만 하며 비즈니스 로직은 포함되지 않는다
4. Spring Data JPA를 통한 자동화
    1. Spring Framework의 Spring Data JPA를 사용하면 별도의 SQL 쿼리 작성 없이 Repository 인터페이스를 정의하기만 하면 기본적인 CRUD 작업이 자동으로 구현된다

### 예시


```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // 사용자 이름으로 조회하는 메서드
    Optional<User> findByUsername(String username);

    // 활성화된 사용자를 모두 조회
    List<User> findAllByActiveTrue();
}
```


### 장점

1. 데이터 베이스와 상호작용하는 로직을 별도의 계층으로 분리함으로써 비즈니스 로직에서 데이터베이스 세부사항을 숨길 수 있다
2. 동일한 Repository를 여러 Service에서 사용할 수 있어 코드 재사용성이 높아진다
3. Spring Data JPA를 사용하면 복잡한 SQL 쿼리를 작성하지 않고도 기본적인 CRUD 작업을 매우 간편하게 구현할 수 있다

### 흐름

1. 사용자 요청(Controller)
    1. 사용자가 브라우저에서 HTTP 요청을 보내면 Controller는 해당 요청을 처리하고 필요한 데이터를 추출하여 Service 계층으로 전달
2. 비즈니스 로직 처리(Service)
    1. Service 계층에서 비즈니스 로직을 처리하고 데이터가 필요할 경우 Repository 를 호출하여 데이터베이스와 상호작용
3. 데이터베이스 상호작용(Repository)
    1. Repository 는 데이터베이스에서 데이터를 조회하거나 수정 삭제 등의 작업을 처리
4. 응답 반환
    1. Service 에서 비즈니스 로직을 완료한 후 Controller 로 결과를 반환하고 Controller는 사용자에게 응답을 보냄

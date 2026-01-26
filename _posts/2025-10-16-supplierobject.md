---
layout: post
title: "Supplier<Object>"
date: 2025-01-17
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### Object


모든 클래스의 최상위 부모 클래스로 모든 객체가 Object 타입으로 참조될 수 있음


값 자체를 나타냄


예를들어 특정 타입의 값을 저장할 수 있는 변수나 필드를 정의할 때 사용됨


```java
Object obj = "Hello, World!";
System.out.println(obj); // 출력: Hello, World!
```


### Supplier<Object>


값을 **공급**하는 함수형 인터페이스로 `get()` 메서드를 갖고 있으며 **값을 반환**함


값 자체가 아니라 **값을 생성하거나 공급**하는 로직을 캡슐화하는 역할을 함


특정 **값을 나중에 제공**하는 용도로 사용되며 즉시 값을 제공하지 않음 대신 `get()` 메서드를 호출할 때 값이 공급됨


```java
Supplier<Object> supplier = () -> "Hello, World!"; // Supplier로 값 공급
System.out.println(supplier.get()); // 출력: Hello, World!
```


### 차이점


|        |  Object            | Supplier<Object>           |
| ------ | ------------------ | -------------------------- |
| 목적     | 값 자체를 저장하고 참조하는 용도 | 값을 생성하거나 제공하는 용도           |
| 즉시 사용  | 즉시 값 사용 가능         | get() 메서드를 호출해야 값 사용 가능    |
| 변경 가능성 | 값을 직접 저장하여 변경 가능   | 값을 생성하는 로직을 제공하는 함수형 인터페이스 |
| 용도     | 변수나 필드에 값 할당       | 지연된 값 생성 및 공급을 위한 용도       |


### 언제 사용하냐 ?

1. 값이 즉시 필요하지 않거나 값을 지연시키고 싶을 때

    값이 계산되거나 생성되는 로직을 나중에 실행할 필요가 있을 때 사용

2. 메모리 소비를 최소화, 특정 로직을 지연 실행할 수 있기 때문에 유용

### 왜 쓰냐 ?


```java
// 예시. 비용이 많이 드는 연산을 지연 실행하기 위해 Supplier 사용
Supplier<Object> supplier = () -> {
	// 매우 비용이 많이 드는 연산
	return expensiveComputation();
};

// 값이 실제로 필요할 때만 계산 시작
Object result = supplier.get();
```


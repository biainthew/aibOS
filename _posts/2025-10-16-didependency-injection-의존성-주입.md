---
layout: post
title: "DI(Dependency Injection, 의존성 주입)"
date: 2024-10-04
categories: [general]
tags: [Java]
---


객체 간의 의존 관계를 외부에서 설정하고 주입하는 방식


클래스가 필요로 하는 의존 객체를 직접 생성하지 않고 외부에서 전달받아 사용하는 방식


```java
public class Service {
    private Repository repository;

    public Service() {
        this.repository = new Repository();  // 직접 객체 생성
    }
}
```


위 코드에서는 Service 클래스가 Repository


```java
public class Service {
    private Repository repository;

    // 생성자 주입 방식
    public Service(Repository repository) {
        this.repository = repository;  // 외부에서 주입된 객체 사용
    }
}
```


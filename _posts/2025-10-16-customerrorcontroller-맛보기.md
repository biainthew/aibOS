---
layout: post
title: "CustomErrorController 맛보기"
date: 2025-04-18
categories: [general]
tags: [Java]
excerpt_separator: ""
---



```java
public class CustomErrorController extends BasicErrorController implements CustomResolveErrorView {
```


`CustomErrorController` 는 `BasicErrorController` 를 상속(확장)


-> `BasicErrorController` 가 가지고 있는 기본 에러 처리 기능을 물려받고 필요한 부분은 오버라이딩


`CustomResolveErrorView` 인터페이스를 구현


-> `CustomResolveErrorView` 안에 정의된 추상 메서드를 `CustomErrorController` 에서 반드시 구현해야 함


```java
public CustomErrorController(ErrorAttributes errorAttributes,
                             ServerProperties serverProperties,
                             MessageSource messageSource,
                             ApplicationContext applicationContext)
```


생성자 정의, 네 개의 매개변수를 받음


```java
super(errorAttributes, serverProperties.getError());
```


부모 클래스인 `BasicErrorController` 의 생성자를 호출


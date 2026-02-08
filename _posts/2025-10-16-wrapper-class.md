---
layout: post
title: "wrapper class"
date: 2024-10-02
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 특징

1. 객체로 다룰 수 있다
    1. 래퍼 클래스를 사용하면 기본 데이터 타입을 객체로 다룰 수 있다
    2. 예를 들어 컬렉션 프레임워크(ArrayList, HashMap)는 객체만 저장할 수 있기 때문에 기본 데이터 타입을 사용할 수 없다
2. 기본 데이터 타입과의 변환
    1. 예를 들어 Interger 클래스는 문자열을 정수로 변환하는 parseInt 메서드를 제공한다

        {% raw %}
```java
        String numberString = "123";
        int number = Integer.parseInt(numberString); // 문자열을 int로 변환
        ```
{% endraw %}


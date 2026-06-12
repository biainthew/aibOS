---
layout: post
title: "NullPointerException"
date: 2025-01-14
categories: [general]
tags: [Java]
excerpt_separator: ""
---



null 값을 참조하려 할 때 발생하는 런타임 에러


객체가 초기화 되지 않았거나 참조 변수에 아무것도 할당되지 않은 상태에서 메서드 호출이나 필드 접근을 시도할 때 발생


### 주요 상황

1. 객체가 초기화되지 않았을 때

   {% raw %}
   ```java
   String str = null;
   int length = str.length(); // NullPointerException 발생
   ```
   {% endraw %}

2. 배열을 선언했지만 초기화하지 않은 경우

   {% raw %}
   ```java
   int[] numbers = null;
   System.out.println(numbers.length); // NullPointerException 발생
   ```
   {% endraw %}

3. 컬렉션에서 null 요소를 참조하려고 할 때

   {% raw %}
   ```java
   List<String> list = new ArrayList<>();
   list.add(null);
   System.out.println(list.get(0).length()); // NullPointerException 발생
   ```
   {% endraw %}


    > 💡 **컬렉션** ❓  
    > 데이터의 **집합**을 다루기 위한 자바의 프레임워크로 크게 세 가지 인터페이스로 나뉨  
    >   
    > 1. **List** (순서가 있는 데이터 집합)  
    >   
    > 2. **Set** (순서가 없는 데이터 집합, 중복을 허용하지 않음)  
    >   
    > 3. **Map** (키 - 값 쌍의 집합, 키는 중복 허용 안함)

4. 메서드의 매개변수로 null이 전달되었을 때

   {% raw %}
   ```java
   public void printLength(String str) {
       System.out.println(str.length()); // NullPointerException 발생 가능
   }

   printLength(null); // null을 전달하면 발생
   ```
   {% endraw %}

5. 자동 언박싱 시 null 참조

   {% raw %}
   ```java
   Integer num = null;
   int value = num; // NullPointerException 발생
   ```
   {% endraw %}


### 방지하는 방법


null 체크를 잘 하고 기본값을 제공하고 객체를 초기화


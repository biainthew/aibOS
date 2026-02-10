---
layout: post
title: "try/catch/finally"
date: 2025-10-14
categories: [general]
tags: [Java]
excerpt_separator: ""
---



**실행 순서 정리**


{% raw %}
```java
class TwistedException {
    public static void main(String[] args) {
        try {
            System.out.print("A");
            System.out.print(method());
        } catch (Exception e) {
            System.out.print("B");
        } finally {
            System.out.print("C");
        }
    }
    public static String method() throws Exception {
        try {
            System.out.print("D");
            throw new RuntimeException("1");
        } catch (RuntimeException e) {
            System.out.print("E");
            throw new Exception("2");
        } finally {
            System.out.print("F");
            return "G";
        }
    }
}
```
{% endraw %}

1. `main()` 의 `try` 블록 내용 수행

{% raw %}
```java
class TwistedException {
    public static void main(String[] args) {
        try {
            System.out.print("A");
            System.out.print(method());
```
{% endraw %}

1. `method()` 의 `try` 블록 내용 수행

{% raw %}
```java
public static String method() throws Exception {
        try {
            System.out.print("D");
            throw new RuntimeException("1");
```
{% endraw %}

1. `RuntimeException` 발생했으므로 `method()` 의 `catch` 블록 내용 수행
`Exception` 발생 → `main()` 의 `catch` 블록 수행해야 하는데 `finally` 블록이 먼저여서 대기

{% raw %}
```java
} catch (RuntimeException e) {
            System.out.print("E");
            throw new Exception("2");
```
{% endraw %}

1. `method()` 의 `finally` 블록 수행
`return` 문이 `Exception` 을 덮음

{% raw %}
```java
} finally {
            System.out.print("F");
            return "G";
        }
```
{% endraw %}

1. `method()` 로 G가 반환되고 에러 발생 x → `catch` 블록은 수행하지 않음
`finally` 블록 수행 → 프로그램 종료

{% raw %}
```java
public static void main(String[] args) {
        try {
            System.out.print("A");
            System.out.print(method());
        } catch (Exception e) {
            System.out.print("B");
        } finally {
            System.out.print("C");
        }
    }
```
{% endraw %}


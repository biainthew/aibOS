---
layout: post
title: "로컬 스토리지(local storage)"
date: 2024-10-31
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 특징

1. 클라이언트 측에 저장
    1. 로컬스토리지 데이터는 사용자의 웹 브라우저에 저장되며 서버로 전송되지 않음
    2. 같은 도메인 내의 웹 페이지에서는 언제든 로컬 스토리지에 접근할 수 있음
2. 영구적 저장
    1. 로컬스토리지에 저장된 데이터는 사용자가 명시적으로 삭제하지 않는 한 브라우저를 종료해도 남아있음
    2. 세션이 끝나도 데이터가 유지되므로 장기적으로 사용할 데이터 (예 : 테마 설정, 사용자 이름 등)를 저장하는 데 적합함
3. 용량 제한
    1. 각 도메인마다 약 5MB 정도의 저장 용량을 제공함(브라우저마다 차이가 있을 수 있음)
4. 문자열 데이터 형식
    1. 로컬스토리지에는 문자열만 저장할 수 있음
    2. 객체나 배열을 저장하려면 JSON으로 변환한 후 문자열 형태로 저장해야 함

### 주요 메서드

1. `setItem(key, value)` : 데이터 저장

    : 특정 키에 값을 저장하고 기존에 동일한 키가 있으면 값을 덮어쓴다


    ```java
    localStorage.setItem("username", "Alice");
    ```

2. `getItem(key)` : 데이터 가져오기

    : 특정 키에 저장된 값을 가져오고 키가 없으면 null 을 반환


    ```java
    let username = localStorage.getItem("username"); // "Alice"
    ```

3. `removeItem(key)` : 데이터 삭제

    : 특정 키에 해당하는 데이터를 삭제


    ```java
    localStorage.removeItem("username");
    ```

4. `clear()` : 모든 데이터 삭제

    : 로컬스토리지에 저장된 모든 데이터를 삭제


    ```java
    localStorage.clear();
    ```

5. `length` : 저장된 데이터의 개수

    : 로컬스토리지에 저장된 키-값 쌍의 개수를 반환


    ```java
    let count = localStorage.length;
    ```

6. `key(index)` : 특정 인덱스에 있는 키 가져오기

    : 저장된 데이터의 순서를 기준으로 index 번째 키를 반환


    ```java
    let keyName = localStorage.key(0);
    ```


### 사용 예시


: 사용자가 웹사이트의 테마를 다크모드로 설정했을 때 이 설정을 로컬스토리지에 저장하여 페이지를 새로고침하거나 다음 방문 때도 다크모드가 유지되도록 할 수 있다


```java
// 다크 모드로 설정하기
localStorage.setItem("theme", "dark");

// 설정된 테마 가져오기
let theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark-mode");
}
```


### 다른 웹 저장소와의 비교

1. 세션 스토리지(Session Storage)

    : 세션 스토리지도 클라이언트에 저장되지만 세션이 종료되면 데이터가 사라진다(즉 브라우저 탭이 닫히면 삭제)

2. 쿠키

    : 쿠키는 서버와 클라이언트 간에 데이터를 주고받기 위한 목적으로 주로 사용되며 용량이 제한적이고 만료 날짜를 설정할 수 있다


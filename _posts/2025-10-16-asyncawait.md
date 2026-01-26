---
layout: post
title: "async/await"
date: 2025-03-12
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



자바스크립트의 비동기 코드를 동기적으로 보이게 작성할 수 있도록 도와주는 문법


이전에는 Promise 의 .then() 을 사용했지만 가독성이 떨어지고 코드가 복잡해지는 문제가 있었음


async/await 을 사용하면 비동기 코드를 더 직관적으로 작성할 수 있음


### 문법

1. async 키워드를 함수 앞에 붙이면 해당 함수는 항상 Promise 를 반환

    ```javascript
    async function myFunction() {
        return "Hello, Async!";
    }
    ```


    위 코드는 내부적으로 아래처럼 동작함


    ```javascript
    function myFunction() {
        return Promise.resolve("Hello, Async!");
    }
    ```

2. await 키워드는 비동기 함수(Promise) 가 완료될 때까지 기다렸다가 결과를 반환 / 반드시 async 함수 내부에서만 사용 가능

    ```javascript
    async function fetchData() {
        let result = await someAsyncFunction();
        console.log(result);
    }
    ```


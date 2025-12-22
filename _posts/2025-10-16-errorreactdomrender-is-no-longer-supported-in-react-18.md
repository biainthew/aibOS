---
layout: post
title: "[Error]ReactDOM.render is no longer supported in React 18"
date: 2023-01-17
categories: [general]
tags: [React]
---


[*관련 링크](https://7357.tistory.com/44)


🦁 리액트 시작하려는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HM4SDWH%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCDzA4SAHVACBXuDgVsGu6yqVT%2FfH67koaH9N2hx7emOwIhAMVwgJbM9du9ZbIL10WuaMR3ZksdmbkrfoEdD95qdmpQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8wTeLyUd32kGvThYq3AOXZK9gHTuLU4HIulcF3T%2BOirDQAkJwBiEKWouE%2Fc9Y7K6lQLl2Jtuch%2FX5mrgKZG2rb5DoJ9olAk9wancJzAsPhwg%2Bm3u8WEwYg4KOKZ5ZZp%2FJbuuyfzUPa3eChT6KO2jnt90EcNx7UxfPv%2BfU4rdSU8%2Bze6J1%2Bsk7qPF%2BlOBvcOMgn%2FBA%2BWub3NRAHdC6tm75GbPvrp%2B7b3MSvOOGZ4%2Bk1Da0YczkrtcfsU1Q8RSTeukcwQsKqN0xp2nUlj4UjabWhGho5Ax0L2oMFrz5nqPq9R9ySVc2%2BdKG9fuCzJu8i9nEjTLZPG1%2F4idK6s2jsxIVJAXnFzgTWF91JMN9mjpdkx1R7wnxr55h3F%2Fk6Ahlco5sCcqUOTqUNqacLkK11M4k%2BeNXWddKD%2FoLjvWnSgrGEhJgOmFsfz9NU%2BGkr6ZzPZ%2BCTf%2BcbS%2BTkMJLkKKfmYpWRP4GDLHZdwoB4Vc7N2lCXeXTPBDLCZJM8HqcCM92dYIOiwsETJSgxA4rbznmbT%2BlAt17VCcfJzI7EsuxnRr3lWTAVEzdJegQeXPFGLze71UA48bzfKQb4ROxNFhe0rLZnOZOL6No%2FWvbA1jnBoaRYUDg50q1pSLhzcrggMdqeL%2BdsXcpRj1kG3yDKzD0laTKBjqkAQ9i0QLrJ2Liv3K%2BIEwUUDAqzz%2F1Dxa7lGOlyiGfm7tqemJ%2FgDXluOSoBiXZp5aulBguvu6Xa6bvjo9CozI5wFK6Okiu5s7Y1yIdNkYzFoXzDcsRjUz5bs8Js5hyecct8m9rg%2Bp0SX5mbyx9ufUmnwtyvnzKBf4Jgn%2BFyCrgs7Pj%2F5cd2iKhiojdftOF5wTfeoEH%2Fme4gzas9SyzeE7R80QBdHla&X-Amz-Signature=3ee0376f65748c87ac33559ea6737c6700a4340d347333b97b069539cae5ad02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


ReactDOM.render를 리액트 v18부터 사용하지 않기 때문에 나타나는 경고 메세지


👇🏻 해결 방법


```javascript
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();
```


위의 코드를 붙여넣기 하면 에러가 사라짐



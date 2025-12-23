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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2G3PQV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDX51pSqSPwo20akVcPwmC19r8fSR%2F5V5WlHOJIa7VYnQIgHlJnEe6Ez4XZ%2FZOeTqo5hzZEsHfdAcfV2RxTIr%2FyzqQq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNCHfrFmAzxmNZBJdSrcA0KrXG7FxfKU212Yf2YMka4DSPAPuEvu8XbrgnByf4%2FODBkbTDZvTKIzJle9WDr6NGZM6Xi78X1UdCkTnN%2BYpkAQNjs3pxT9zIbVzIkr0rVyUVZ%2BOtpC0OxWTrycjoXuSwJFRwnT%2FZwJNYWa5%2FmZtQl5qrbeiLOuUc70oLtnKV1Dpzg%2Fie66zZcGR%2BKtkGk%2FpVHv5tZbxnWQAy5ucP2uKD4mLrqMeuPuLD9uKsqIpP8V2RaAdV%2FqwkZlE7QUnFORtozRuxkwJTZ1xFIjCA2JC1XJWWynFz1j6tphlr%2BGlgkWZo7zJK2wMgMy%2BOr%2Fb%2BcjZAi9GQk2TIUyZLcDslP3HfH9rht7g7o79bvAJirF8FGwWEjVExUSw292Qz5HIuf94Jn7iV8XmjXwCVVlum%2FP3cqQJKNQzGeJmy1WsA5xm9Wqg8fyELYUD0u3lrFKlVy7NlfeRoFwZ9A5bV9pl94bDi6rOwNrLlzaiatXAWkMPpx%2BSsLjKjiUHe6YVrITCpWUerBEH2CBweG1NaE8wPklHY0RcZBp2DTxS7r5LyoPKgH9ysJx0U61zS%2Bf4dEahRXjmyB4rLM0xMJoiX0cSrn%2FMhXndQM0XuG73JbhzwNhi9Jr8q8pOBBJkxMZjM8tMJrHp8oGOqUBf0x%2FUWzIgZNwDIUxmBF8r2cSVaPYJq%2FQEyPNBjnUKtII0dMQxNzNngeOEiYPdW1mJSeUnhgvlne7qdbGeXYwlJcA5ozH%2FjZZdl3gq44PFD4K4wkZDhHUiKM2PxPX9KXWGqVak8JcVnHXzcPZGeScevwxV8EHbxmYjqfTc99yGvj2WD4txeDHhPRUoKgk0ZfNYzNQWr7F04DeEN9l4hAc1fzVkDxi&X-Amz-Signature=0ae5dac35405926b1846efe8015c9c3659a91ea713a7d2adb0415e4ba29b4f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



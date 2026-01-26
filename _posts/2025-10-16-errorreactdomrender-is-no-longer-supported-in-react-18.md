---
layout: post
title: "[Error]ReactDOM.render is no longer supported in React 18"
date: 2023-01-17
categories: [general]
tags: [React]
excerpt_separator: ""
---



[*관련 링크](https://7357.tistory.com/44)


🦁 리액트 시작하려는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOBVTO6%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHgclXuGCySy66fmA11WUvfmIkcRac7rP%2FWQkdJPnSm9AiEAnjcrASFSqa3oeUSmEk%2BMbYe5jkQWPbo5Z0VP11i9R3wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKppMwFh2u%2FELXxZbyrcA5IVKBEOUZN1V17FzHyMg%2FA9a95WPqJrNYpEM7ole%2BgYMNICQ3IpLtfd7YlePQOcu7IXlNWBvLcVdUQhDHcV25prBJ1cYYsiXEi5Dxuyl%2B6HpM8DTKdg8jGmPkBIyXfHH5bN6wgWCz6tkxMEy8UgpW8gmqWVvlKGlGQ7gvuQ7bT8dcodfUzRzbRzGfyVa2bPpE4jrxDBrad0SdybYptcf13TxYDuBdixEn%2ByPe6x21Src9VtUsRdULb5dCPpP%2B7LiNq2qoJPtt35cBX06flJCvhYxWjAfnQatxG%2FEZ3tHKnZzmU%2BuChKTXvQ2S8tMpmdnVdyGrTDjnKrXe%2B2P5mhiv6pnXRA324MkQ2SeH5WvV%2BQPQuW2tYtvhdVfKt0%2FVd4MMUSgnX%2FMNM0s%2BZpTr%2B8Va17NroYuKDH4juPeTwdvV6eHnY3jx7JijccxyiZvJb9QLdgC%2BKqMj4yCLiuoEEiyv3Kzr6RZc%2FujelfwFhNsvT6oUJn8AutfvCcIFfP9iJOoaoZ9eXG%2BRd8h4iRoEANfHN8YuAlSnW4T5OwRcRCGAT0ymepEsLajs9D7RrQR2k%2BtJ%2F7gDqzZPqA5p%2BVmVLJ32fjfemp%2BpG2hb3LJjP88KkeGR9Y2HxDDTwrVD%2BEMO%2Ba3csGOqUBmH2ProlYD8ncxS%2FHrnAM22Fi4h2QI01xJkx%2BjsuaAe41eRaGXFZfw6IpyY15X%2BBFvD46tIWEutOySO42u4UUh3NchFMl7Jdqw0t%2FHBHE0Gm4BocycBRbJiw%2F6kU3EWPlAy%2F4n6ePBhIk12MERM%2BOmXMCzMCr1ibFnFOh9NBBZrdbLQO7ms%2FjbO9DQNwbHox6ogI%2BuGOdmN7YBbXWjFfINwGtOGtD&X-Amz-Signature=6ed9c3f4342629667503f7c086ba562344e6a0f5c6fd8878b07d0b8378a8b0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



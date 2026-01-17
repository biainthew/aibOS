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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVQRQCA%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAWg5hdZ32oN4D9Lt36U2wNemcr%2BP2KZo0Yp8eOpN2wAiEA0sKtZQghn0pEhbQLijFT6%2BHd5Ky8Zd%2BNFYtRQsp4HEYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPzCoViPurAaDRom9ircA25e8IFLyhBdI%2BdzKGKP5CZtISxWndifzHU6bbhBfJQMwg0T6mwaEZgpLz8ecT4B4Dr0ggxPKN10VR695IppPK3rSuen%2FSGcD01WoN4u4enenoryU8TwZvqe1ZTqmwJkbH91Zm5bmBoYw33n%2Fv1dbFjMocp09kgY1TqOLoITt8jzo45QEVql0ORypmtSQW5YfUr6scDvf6GDKhHEG2gMaCNVyXrt7Xsyp4aOX61sjNaddp4io%2BtxQ9%2B4lfAP7VTTeMl8zQsv3%2FlQXuCRtVNlaDqnbbnqNxUoLDr8Z5B2a8eBck54fsS1gQz9aQZiNh4DUP6L0C%2BxA6wghyBO6MTuaBG5LyaMYQccwYGRGQisXDcmDrDc%2FBRbgoI8X1Kc9nkuxcwzgr5esOcvyEs8ASBOaBIqbGcsS5bmhcENQbcZ26UVrk4kCbpaGURhS1q6WrlKn%2FuxLq3KlMIe4dUZxI8vkb3OL9Ank%2FJkuHudr3TqLhoIYUpa7IQhE0G95SmUXn0ik%2FsTT7BJ207URXG59dPX9H55HgWOrtntscgTLG%2FQsU78pKFxy67h3Id0LGQr%2BUBvpzi8Q85y8B%2Fw%2B90qxg%2FBXf0fT1QXcfWqHdlfUv0Gbt1JawUvJ8ORwcQfL4ZtMICzq8sGOqUB4sorUxMAFNlmQgEVzZ%2Bp3jILNarkvVEFLRlsTT%2BkRYpV%2B5yuDcouZqxxlqKmyjJQdo4%2BBdyt64OwSegTcC5TZKPguqeGXHJI28Zv15%2BwQDL0Ev%2F54RcTOn9ExkVzlDwxzQkb4tl82121J6fOhaujhVRq07XR0OBlBxYKePi4rtdamGK2FXwz2f1Cg6LAJmPuTGhBhMTzYcQMVvhhXOYu8OYpbET%2B&X-Amz-Signature=def326117f04c48322c7b6b3b101911651dc84669c28e399d7c16451fc1a8760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



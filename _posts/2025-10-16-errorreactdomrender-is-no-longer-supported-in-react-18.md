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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D27NHJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp%2FInwXdnIBIY3c%2FJoAYAdfXDxCHbNV%2FFNIsf9ofACrAIgTZQPLH5Aem6FneYWSdxLr52d3WFePilmQmJRn5iZfawq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHyYhbXq8EhPC%2FYmyircA%2FamTF7DPmsSR%2FFJ2Ekn2147sYGlXFrLci4OzmcElpsGoLi6g7KrnN%2B2qF0whz1GWPZ6SG6aWVolDpUQarwHgT85l0Zn5MPt%2BQe4caozspz4XvlT8J41p%2BJD6QnHsvNlrr7u1i6J10SY0ze9cTkVTQFPUAldy34NPt84dKRCr%2BhodnRF2WCkXtRudvayEVB8EifRk0oNlpH78h2Rn9z6k39XvdSQcAmFF2ZELgKbfcR5AJwWtoyXwX1Egne7QKIYQXQs%2FT20PzZK363b1icfogEWUQFkbPPXExkGahgk21c4bl89ELKBapwRjNlTwXEfbDw8ZdTb8tiiPC3A24zQqiATThosxH4fgReQOp5MabVGu0DBZI5FphJVSLVKfVOOvkibRBiSSMA86ob%2F3UyV%2FvQbO14hpRCmFHmwo5ULIS3%2F%2BiTEhO7bJar766Wc24Z9z05fZ22I0gQQsNsSTNL4%2F9bbnwiiqROqS4tR0Ll0GLZIIZLl9wivjKpDCV%2BuHOLngx0WzGndsaiRuh%2BF0hXugRoyl9x4wD8pMif98uaj%2FTXfPM7AXzvNMOaXVVxIafDc0IbLwaelplKtIyDWLfHTIkHBJRat0TPYES5%2Fk70fiv5bEcfXFsk8tF2O7BOvMMmhsMsGOqUB2N5hp89fE%2FFhaLXvOVBIoPNv3ktEO4AO8xcQIfF2ZrHdfBXc5KlVLfb59RBSrvASpq5Q2WyNcEmaCbTuNYjXDt%2BuXQTCEE1FqXDPVjTrmQk8OkI68v5bWVJCK56tIAkotq44ok7dBvBqdVrPQpe7I8ckUT805IXccBpE8FRUWEe3IJnfk%2BDqlTP6lHcqZPg0pIp%2F8OGfbNiUuEXWqNySKjhXIJ5N&X-Amz-Signature=583fa1e58efd73548ac1dfd9b528f29a48b0147e0589258ac6252e05e36eef42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



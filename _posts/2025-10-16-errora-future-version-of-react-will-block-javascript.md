---
layout: post
title: "[Error]A future version of React will block javascript:"
date: 2023-01-17
categories: [general]
tags: [React]
excerpt_separator: ""
---



[*관련 링크](https://7357.tistory.com/44)


🦁 리액트 시작할 때 뜬 오류


👇🏻 오류 코드


{% raw %}
```css
react_devtools_backend.js:4045 Warning: A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed "javascript:void(0);".
```
{% endraw %}


javascript:void(0); 를 이제 사용하지 않을거라는 뜻


👇🏻 해결 방법


{% raw %}
```javascript
<a href="#" onClick={e => e.preventDefault}>
```
{% endraw %}


대신에 저렇게 넣어주면 오류 해결



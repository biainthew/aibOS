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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7XFUGI%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T012001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB47Sav7ACKSlqyYAFIbscC4hdlDUGDy8OodYY2jxxEqAiBsCX%2B3GQUQuYAZl0%2FEphKd%2BHR7PtI4iikmsq4xLro4byqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG6bytZBXZEb7hd%2B%2BKtwDpAWHDDq22%2F5jXfYIWW6Yf8%2BS0%2BC1%2B07vRyk2xCXq07ozhcFlg1iR7OuDJZ%2BdSJ2PdJnXErBfcceiCbeBHCz9fLQENxdcCYGVkQ2axf8jIaV%2Fw0pMv%2B0H7l%2BxqyMkSbe%2F7nvjDEG3dkDHe20T0UQ6lu0IQnhRVS8CRGyVJVYONVhyrZTjSuj4E5nITE7TfbbzpXCXiakFnt4kdZIyHjNOKuKExHdsCJ1E767PJmkbUfoKqrj6lJM8qPf%2F9LZgw17GCB1Wa4K%2BNsurJSmhA0qBZ%2FPqIsizYmcJ0h1zRNuyDmeCnZhwV5YLicvz3jWTUkUWxHC0ySRNec6LTzfOBWe0%2FJP9edT855WD1rUVnLAFVqbM2wEcin3JwqDM%2Fvc62OgyU61AEB9mPks2E2Q9ov%2Fpl7h9JIP5%2Bf0AYSvk63Pmavuu7v24reRoQrsJJWhEqT7Fl980eofsulK%2FlJAPhV8fqwxLG6RZwfIha1VF7Ntxo%2FHZrUoIiRUMqOPLiq9tXQI0kAYf0QXQmofD6%2FXFdEBkg9SfPVsIn72%2BnIClkW8WbCitIc%2BoPOOHkgBJvKocowlndUi6sjjNhoOmOvUyBmbBI545AsYIqUSSFLO4Y%2BvTET8PPQvauJI3MfMLb1cw8bXAywY6pgEnt2adUzBng9YRwKAkjIpOlP%2FOxIs2qJ25sQnoPptf2Y6ZWJAeRuebNfcrKCUSSJObrtzVBwkWB1KrfzM5wveFP2lgloxVYSKY0vWOY3nv3LD95MN2ZsBlTiKagF0fYqDHO3%2FIodxNukBSDu7ENEmk8iiXEgGVHRKQ5I%2F9cSHSkMh%2BZ0YzOqoLTQGkO4GYxBlEJZ1wp0eRHLa8c0Zgoki8iRo0eiW2&X-Amz-Signature=2f952e8e65a663df4aa95b0fb7161952ae91f52e570f3bf6b33eeffd0d1ffb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



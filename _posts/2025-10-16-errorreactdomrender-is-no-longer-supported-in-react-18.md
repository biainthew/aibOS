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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUABZYZ%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYV67Y6JtG8cRgbEkdi62m31IeZgRgpSgGjMDBW%2FXSHAiEA6nGAjiWk998A555v%2BpjpCWlYQMpxH1AK3k9rcNwvfioq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDH9IYiiq%2FvzV3x3vKSrcA0weJownUbgr0ZV8jJAF0aSXBS5t4JFeHAeUwWnKK%2B1%2BXrkH%2BRvYZzVj3h7ivjLeBn20IrVrxbqJNTvwAqY7y%2FPdBAargmD3YlZ50OYudQWvtL%2F7l7nCTrECPPg5QKJOsSZy3YpPWWteX5fYYfh1ZpvInvHPxRjLbV7rNiUy0T6SjzuwGBRpsD%2FIKnmWyQYWLPndzY%2BFbewBoY5Bu5AKGW8slXKobbIzavcoqdgpCzzdJVr3lxSb1h15iHVu31r5xACoTrGAgK66XetopqRHE7uod7kLmKy3TJwl4AtsigKmA0Q3E83R8alBRkidtxSp8VoGOo%2BiejDI28H%2F2TDq%2BjI4TV%2FmSYE01gawucp1jWUC1YWPgM0c9uEuMJcJztJoENS2VP0g50X5w7jqEW7KKCVMiCT5v2CZ9ESP7Ly8huRSBrfiqEIIZEfkEAJEtO8ETQrNMiUE2XR6lkRbJhY9QNU3BRcWT2vOoDpMDav1h5yKd3uzCNucT%2BAtpTrWen%2BQwKwYdIKTtuPoUQvoQ%2Bc5zSiIYH5NhQYSXP4DAC74K25OdwC8axFRYDkCz4pijjoeLIF7U6vBnkHMpirt1gVN2oKI%2FdNTWoFSVQ%2F2CCHsg8hakUspDyeM7N%2BImL6dMKbjrMoGOqUBTBgIvI5XmMAv6j5knZ%2Fy1hJ%2B7CAyxh3aUs2jgAoHX2hLK93fenUfXoDe%2FInC7rFcdqpJ3eCphAU%2B2nTugpVgOAJFv2uPAZa2Sh%2F2MpPj19Pz1xsUKqJiUSPOu5nSnGSBrfdTY9YSY2Q6Z68G3a0TMqvmK7MFAqftRIb5Nw8txJvFqAUqvd4zZkmwQVhnBpRBHuadJmQ6UOol1%2BIAAHRNnjQt8ZAe&X-Amz-Signature=20ab38fe999deca27aa474815e05682ffde2c7668f6936cb762118cf44b63c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SG4BDP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt%2F4UGVEPaFUiNIDYI11cEHYLdy9hi6JF%2BrVIdrhfecQIhAIUNCmf1zLAyarVjq3p7ohEQqw2hQw9eqywPcNaRj5hqKv8DCHoQABoMNjM3NDIzMTgzODA1Igxf3kfN%2B4nPVwevb3Yq3AOaR21VFU%2F5F%2BGb4CU0h6zvncazR55yVAScWIGwbd4lMa8z42dYI0r6oCyAAvuJEhkeStbpqb6n1C2oIqtyp8%2FjvPdc4FJJ5wfmIEmuRJvzwvUWkETvgRE%2F3y5Ey1MwAUulMPIjrYX6%2Bqdkczf9T7xnc8%2FTKw9G61fIa5mlyT3yw2FLfBrZ1G6vx2XSmnHUDuBcahf8CZmoCos4Qw%2FZKjqzdw3fH9zxsNS3Uu1bMQ0xSUamVrfIk4Jag%2BJllDWAJSuyG2boc3fE2vfcAvUZy7y0DgwyoVdxHxEjVAwiRNDkiifIvlZdE18j05aZOHmXoteRc%2FEFwxut7xM%2Fc4BB1MRj5WqNWS9p4n5up88fuxsGAsWUy%2BA%2B3coEyJ2XIDJXgw339okkfuUVzg0eEfhcRAxpl2bkomAJuNcnn3HpKWisgNCw9v%2Bk0RFZy96eebXJ1lxUsxqTsGeO3EA6V%2FN7ekNQMH8m329BvZZktHefQf7RUOSEMig7UYNY3PtlNqmeW0J0tpzRDThTgo6tiyFLvg8Bj9yJ6KWNIQN8py3wNyQYoLYM26Ud7fhc59w2xX3NHzTtT0c7EWlyGZhsRX1qx2dAdSPxGPLYnPTUBLF09gM9RxwYWIyVnB7OjpjYnzCMh8LKBjqkAd7euRO6oGbv1d4mqaO3CFjj3nltnyUxqk2szQ63erhAzv19JIlNIbwbQ2L2%2Fw2z9ycNIsVWkSfV46kBWy%2BnGBzUiOEJ9HMhp4ct4JktUVfZetZOOZgBNnkBs3qgz%2FjmT2yecK7MTVv8gS6Q28jF1z11A4ySWzucskUMLMXlLRCWOnWau6fdYLGC%2Be4XhIugVAmC91Wk3xxoXNLHHReNrpltpo9%2B&X-Amz-Signature=03a40cec3ae59486861ab75e9ecd3a96bb9881c23036528df7e84b92344b02aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPFISJ%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvXkouPikg8VKFGuUtm6QzrWqea8SI138LwR2q28%2F5QIhAOv5N%2FgfnhE5RE1X1dVfAo%2BbuHwKIacTWX3OBualb3vhKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FEqbtnKVsUnwnNh8q3APwJKG7XMKbz1vnSh9HAzW7pWpw8ufwDob%2FmEACgWOpE%2FYtUxPjz%2BGzv5hqGo6FHki5CRwoiuzqknUscm3ZR1w6OysLi8F4WLMp7WNi9fD2O53zXMYAi3YhfjUFroZBOsNAUdnx%2FgpdamowkfDv5NbWrg6FkoHxbRld0Xlwen1y6DpVEco9GggasOHK2t7%2BHtzK15QspmfG2uFNFahzbG%2B7CAfSwB2eGqMSey34GhPG0x6rf0JwdTF6EP2rdxVuetJvQ97fHaqtBr56%2BEIhaNt%2BCu4Lxci5LppTFG9ggcjA3t2Lh1k%2F2%2FYX%2B2jDNYeS9TrGIM6frcZbLXxHSaElFQVyQThmtvW8Vcg9PqC724Q%2BsbYIkI3s4skD6ZvDgrt%2B17P4AbE0G%2FFC5o1UYjFD1kag2Q6fZIUkB9PsdcIMeGtcY1aD87fgwWR368LKR69kR12g%2F4U0vl%2FDlqVzanAGEYsg%2F03xx7MVFvj40LIcgDRfJ3uY726n4wpiC6YH%2BI%2FzjZHFKQsignoiKCOfIJYwPsh%2FV1AdHcJ6Wcgugdoy3thj560WINJ5V5oWkWvchDOiiQbc9nLieIkQExLi4sdF7EFfTo2F2FpCzR%2FEHlsjzEGTDraZlbCxJvoRRJn9GzCZ4bXLBjqkAXqE1CS0hUfSiV2X8MqzEUh6f0K6way8nTHFLeLXQR5sw5JzgCch39ulUGJyMXDnzcuBd6sB7xXl5fp14vAaxSZtFKhMuaYTHVlWvSQCvhizUZ8Rrsj1dCXGiQKE%2Bw5qHpxuEfmufLOXXcyTavnHA2lRrBjZc4X8s4zOMfi1%2FRzCkRpDQ9U%2BmgPhSkxPPCNY4c%2FY29DlVgq7i4KxvAVRlb%2BiI2d8&X-Amz-Signature=1b9f11f2efda94af918b6a1cca44dc1ad0e2987b990722dac2e7f89c4d28464b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



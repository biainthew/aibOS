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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2NFRFE%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T012045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCoEl4UUsGnOtNvyaTRRpF%2BEyOT%2BVGrkD29UQ21aSO4aAIhAPadvc1c8zphg1dU%2FGr%2FdpjpLx2kpGKMbIIwXxJtsZf5KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyev7hulW7%2FTecOtfkq3APnzB96qRQHIMqdlkpUSmkI8Y9UvUpn%2FrvmZKYELu1zH6%2FNRWY0LiugjWIqaYxiK1lTPG1UyiDGxNSAPdWfaGBL8IBfXKaHKLrbjbTlp0lbI4hTWi2Anf6Ruw%2Bq%2Bn%2BQvmBD%2BUUY1gjlVwg50v6IJxad6g2SIZMFEjW%2FYEYhoyrJSH1%2FFU0Zh3i55udX7MILSMqlcjbHJTXRedywwUBUyA1%2BOos7AzxxY1e2cQbbEpoGSYrCqqU43F5iar8AWyW3MBuTXH%2BA5Y9joWMpPc7mKxKrncBlUEC230hPXvMbjHbMR6ihylZPboWJl%2B7s2TdUA4QeNr7y6IY1Iw0ox4D5R9TqBnkCsE3bEDjj2CtJR1wH77gsZtLw6WBWBfI9nrhYUgd3w3Bnlcxj5YblULZvplzvCds%2FjPETOpyigQsqV5Is1qIdbJy5WU5p1sHpf96QoP9gdgzoIb1XVYneM5urgUtqYXGsioExzaZh2%2BQInJV15St8N0MlPMI4tbGgqX6Gq7zWkvVSn2lPZA7NV73oMp4KZTK2mvEE2%2B%2Br8VzMY8L0hi0No4Cr3qvM%2Fd%2BnTjjumWnSwds71fSj4eZxpEoJb%2BwdklA7o83QM1PGTxdGxMXYadNHsawno%2FWJ05lryTDn%2B5DLBjqkAXlQk9d1DhsGXHa4DcPcdqLjzQmzTomI9OvPC7kck5voq%2FFv0apA1uGmLADBgx9lQycqvF89eGtq6DaagDi5ivjTYqYEqTF8OhAgpLIEP2FfS3JKpOJWqG1w5EpatfcOaMJllfZuKcY00%2Ff1lNLsbKYZtY%2B19cA9EXUnx3fFjH2m%2FA374e2na%2FW5vtfl675LJUZBMSHqZyEQ4Qv5R8tYch6u0CaE&X-Amz-Signature=a1561160f98b9e2ee5de0004defb946f1830ec62f17c234951e0f774370f45d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



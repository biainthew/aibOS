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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q64BJ3V%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA2P1lilzulwtm9mffsuo4OePc0rd1PC86td0w3zr%2FwIgbITaDJF76Sz9SJ%2FmaF2GOdsOA3BLk7U80jQDNtXTjNkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLpDDZBAuBHHR1G8WircAwQ2El7UVRhYOAkQmpwoQhcclMXyNmK6xIftQ8ggywCWkehGCbxAmi1GXW1uFZNZrExpFf421nJZyrHASFfhKK34SYIg09%2BxrbQlDuG1sctQF8zyNKsvda8A9DhJAY6uVYID1K9zcoOUGDm%2FvZa805OtkN23ldxJSe%2FVEcHfa%2FWr%2FcrqTv1QD1EjHazR7wxIRYSZOqH7CN0jOvYrKMrl4efmsFReoZs9%2FeScMrYJW6OrmoEoNBXN2una1ERuTQMwRYmrvqIhx3SAhFTJb2%2BA0v3dcQpWjtlmLS5tJu3SSvSQUyCUx9WBScLL%2FgOlwOWzwHUUDRYZ9FtRviOtldDJyhHW%2BlG0IiiJBd9H2ZwU8Da%2FVS9ww1Guyf0%2F26J4uRuvLubvBbJNIMG8Wim0lADJlLYpMKG%2BVQSFEst9CUzmrN9%2BXe05gHpkVokgyjSGtH6hXV4OOpW7sENfRs0envzVXC811N%2F7bosNHclj4kFpdN6TGrn2uQzaxSkDjNAeh4HTRJ73k%2BSNRhQgiyFwj4hjvHvnBM6U5Lb1Ax3YfJtypKJBAoXMkBcIO1rnZO%2FWd9Mm9Z7X0sp%2BIpX%2F0wW8LrNRySSX6kN4PGL6aMKrAQeVVHMeoz61ZgbAwsDCVmsTMOWt8coGOqUBd%2B6qaHqAGx0es0d2WI2MtHYPru4JsAEiIs%2FhthDxCdelW8PyHERdQz%2BQEGAHo9qcD4hipKrgzRTVNZEYHK8Bdo2C%2FqQOU%2BuuOR3K%2B6frAR9xdrI8GRRUdmBhfXtzZmBGWwDlIELsJTkRj9qCh3uSi0gzmm0ZIgztzkbugb5NvtMA%2B4jktMSyDUL7UDCri9AhYhxrR4%2FBiYp0sAUTtmz14VsBOaR9&X-Amz-Signature=1022fb0fc0664fa495733f0a40b0102368b1c32cd14dbf625ee00bf8838eb67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



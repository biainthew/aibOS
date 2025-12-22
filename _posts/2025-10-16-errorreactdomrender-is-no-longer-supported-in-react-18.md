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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GUNJPX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDQxCDj8XqMK12vUBPqK4eubNQpsgrOb1GmYiKT264TdAIgERJe%2Fi47NUe9DG%2F7quHMgeOnc13TckraAKyZNW4BrCsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYf491QphAFfSIaLSrcA2rvhxKWXvYHj0Do%2F%2BuJNhMSOvaL66I5pazEZ93wg%2FvD1bCgfVHi054aBADDjtO4edCDnBln%2F6GYHiuH3yXTI6bj%2BxRiDs7oN0j2ezDOtgPIiLqDl5TJpL3m0afqy%2BJfKKATk2R3OAjQTp%2FB%2Ftwwe6Fksvt3FUy50DGIbFaJ5kC79hFZRxyQZjznhMuTKbXoO5MVweg2BypOdzPz4%2Bo%2BwsVcQqNCR2MARGCeKSwdD2aGE5P6GSZoF5jYoN4OGjE9PRnKWPWeRLLlKvXResxa6bDsYI6NHGBleImC8oeRybNgPSJvCV8xllxDC6ErGY5tI2yx8S6drKAd1gcRBHfn7k%2B8Z2FOYkMnUG3yqn85agEAI9GxXlB6ghGu1vsXagd7cMiLp9FlcV4xSsbn2vbd4qZdcnocqW1JBec%2BEQQ4u8MSIdo8iewCie%2Bec887jpqFg5fVUcxeWN7mz1bLYyrYXxfCOTFAMPXLCGBWI9MCOS5ES77OsZtNHYdxBCaFBSGxyijF5xncIidlTzSzI%2B9jMkuoqksWc4xeWFikYdFtYUsGrk1dthc%2B%2Fj3%2FTECMF7k8KvvFt9gTLCfjNwJvRLkGbyiXjy3HJFKXxhIFjfc45d7fDor%2Bh4gmDGaOXnC5MPSVpMoGOqUBphOPYFzlMH68NvFIT5pd86mU0teeoWTnMjMuMo%2BrJB2mmS17S2ENQm1I3Dk0wRB9EF%2FZHmDaHyxrhMf8TqLbj25BBt9SosFFqenRcqY7WOLUrG2ESikWfu2uB1W4e8OqjRYgnLiiZbL00VWJ0NRMDkV0byFv3A%2F4aOWql%2FtlRdSnaF7ORzBVZLyLDDUHddvWcYQ%2FJ3DwJs2i%2FX5SRAceQLoZPFKh&X-Amz-Signature=02d26b36d5b6c64fa3a4d53a4396b15d573488f33ab1016c1f6ef27b736b8462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



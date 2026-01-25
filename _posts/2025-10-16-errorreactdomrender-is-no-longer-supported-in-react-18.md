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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBWACTS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYl7T%2FUv%2B0ML7jMXa5VEiPrPFTxQOcwrONwW8DwVDJGAiEA%2BahgBDe%2FWGBQeRNaqEFMSzomfX6ZPRbtg2urfnVZRnQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGJ%2F9%2F6ZASN4Ex4YwyrcA7cKWCegcyD2Q5CgwG7ODzI44SQrdMxOYIB6vmNQPy%2Bp%2BTn25KNipDNyeYCAN4uKeaFPFeeTFu%2F66Ik2IDqPWKfqbkdqD4uOton3xh6yYiM8Gs79i1AonReUwGEiI0ckg%2F4rZY%2Fe3RxPjE4im5EMEQ%2FbqlQ9DBfQcefPLDvd%2FC60mcptwwRgQu9E5c18S38Yi5HkhaaRJx395qILY5kf1UJMz%2B0XdwLlPFLtTHsnQu%2BtT3eOePT%2BnJe8jF98mFCSKwp0e%2BDi5OEGiRaghWRUPAGVj%2BEsqBiNx8HbWw92TiVm9gFeUJm2lfh1diyLy75WJHBvEoPLHUJYVL2C%2Fvb%2FgTdk994VjXCOYaIv88Ou8z%2BdoM4oNwtOCpVq0DZ9COj3y%2FPI9JBensL0GNc3DCwpJP09KZuVDR4zKsq4Bg870YO7tn%2F5R7yB62xzAjQY7ByA6NHRlZy%2BQimpXYruBJR7Jyt%2BWOYrIAFfMpu1cc4qBFlmDnGFa7fU49qBEHJ7sxdW83prP7XcbQEUw13MSE%2BJ%2FpC5nOB1rKm1wDkiOW8qisZbOGKsGDMS5mqwf92dx18cw4aSR2OCf32PAw%2Fir2XHOFiCBivcsEjMTHBApieVgm8VsF%2BlO2py6ucD5N84MI3T1csGOqUB1yGPjSwLuhbqfVqf8NrykcRa7r8qLCEmIoQ%2BnnCXE4zXFA%2FwJ2jRHiOZRhCXbvQa%2FnYFq2zDrcz7U5zohIZPrAwCx0BZr3521DLLkVv9lBTZiMzSdXCLWdlwEbDf5c0pIZQgcGrVSmLB2n4CSuorYDFZkNMawOr%2FMABGrzYkvMRlsWlnpGW5%2BtqUW1UoNmthXo7%2B0%2F0dWb1vkpwcTVBIEI0skq8a&X-Amz-Signature=8243b813a2e4fcffede6fe0a320a2f8b35a4715a18f6f4fe38323ff4937e8d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



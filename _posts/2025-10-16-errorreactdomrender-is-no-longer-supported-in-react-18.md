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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGLBNS3%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDXaQDLSKruUUQ68LSJz2v2x0T8mI3mDxHuFKSlvM%2FQnAIhAOLlh4SFe%2FnGhTNiM2hCV0BV6glILeLXLuUDt75Wcq77Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzdrejDXfWDTg0BJFwq3AMlRzhmm7YF2sZRO3B6A%2F8xoeZO4qABhodTjShKT0txMg4TpHTx9pMacf%2BvSH18ubRyXmuPWaIFxF9godgb0dacTJXerx%2FQUi1nlmJnNGIMt0M6Topm7G8%2B343cvI4OltmBvSf312pMPLHg6IJXtsBrVjWQByOjD95p4bwD%2B3ixPMoIrCYxy26zFu4bEfHAiqqoncgzLsuRjmVxoyNRP25rb0rner21taPGfQ%2BJEPyPpficc9nnjYgu3wtjSuXiCwqvbsYbrKriqeLPufjQ1EVoCwEAz5fSG9ADa73r4kOjOEf4F7ZbJibFdx9oZVPmvQJMzX%2F%2FemaWwHuy4a55jvBOZqze1Crt3C9yNGKwePKcbvNkWOsv5ueRPgJia%2BAuHoX0A3aSGuFj9YGZ4LMUg851zEfk%2BRuhc25iJ2CUk6SAwB6onnInYD2GWRKU4ghm6MgVh8d5v2dwJHDRhAC0wE6ISTlOCdVebtKcPzIX4s0JM%2BIapnDw27hvqvs%2BjILXq3YssHaTdXSnGr0DhIixBIn9zD10YS%2FejiWccInGwU59GwC6o206J9sZr4S6R0HD3n%2FHM7%2Fb5BbDlmkrEdl0W19zlKRz%2Bp9LyHcR%2FLy0eO78lk6%2BtcogScZfbATP8jC%2Fx%2BvKBjqkAaSXIcSJa5Q%2B7AYW0LmqccxaCruX0dN6IsyrYThMUlXRZAzn%2FSL1JEbnMru14NLIpBQ6dcg1O0fZ0874mJYfvWZNguQeLJ1oO4NlnVGzELXdMDO90rM52g%2BT2Tu0KNStuHwdFJgbhoekgmyp00yOUPvRwhVjLBUx%2BPwv4fKH2dUnHTx4oG23rJXTcjjMhRkkDJVCVj3%2FQtkO8CA6B8R5ZtYk8ewz&X-Amz-Signature=c197050172d91d73779bc91dd2756b94520de92e4affabc56b8a1878ac6a7932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



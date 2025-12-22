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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRSCZMT%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCmCcdj67zsHcbK4Yw0YAKISX79gShk8Ou4iNnXqcFuFAIhAMpJq%2BI%2FjixmcaTVUzoYc%2F1SHZYxWHoeb9eQxzVJfgkMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWPVyCXOH94k01YF4q3AM%2BR9SJECjxjFdWkR91J3gtyCvtYmYG%2BGm3RFZuobQsdOOd69UPiUStKcg8Sq5nFX6QUDc4yTybwoLaIRiaY4VmEWUz2QlyLSkYQ6uJqqTP9yT5VaqE2wnns7kHSxR7Zn8VZmoqHCZpPzjTxthwOUT16yiiAt2v%2B507ns1bSJ9iqESnEUSB6GnCfo31CTBvrXDQnpBovHg3%2BBXsTF3%2Fslis9bSSY3%2B04CTKqlwSPB4djs%2BTCVRdoUXZ94Y4a94w6n%2BdrQW1BE2qcyVaykIsdb6%2BVV4NeXF%2BA9gnX%2Fdk7Adx1ytP4HFTtxJKYk6W7ETsFGY7zntLJZKNuVZmo53vWlKmX4Bmr3wG%2BgCgWrUvgFCpGx54VKXTRKzU2Wclt3CXbijo1HiCpJajkRlfUx%2BZWZFPZUWIaZb%2BjZZ558HiHwk%2BQajKPolwE9qV3wCL035K04k4u6M8i26tS2WT%2FrpngRLWvJlN81foc3YsgCP%2BbSON%2F0TONoqSoYjYdzL3JW%2BiMWlnUkeXmRejUxD1W92%2B9ur%2BymaIN0BNKt6zA3n4zBtcKPTaVBPvfFV5jx464sXAw%2FSm%2Bvb1bmaJxuZMJ4TdwOxPydcPoAIit6bq4%2BUSnM%2FTLodhovjLXBHxgKJm4jD0laTKBjqkAapsGK4TujyZBSnsIh4aSXOrfzhC7K3dt92MzhkWeWGicSg%2BtVODo3qV3n7GURJ7GKsbPRU8QlgCrioLet7HLO8eab7sKGPz3ogfEZ3BHcBgxheza5p7zM%2Fs18EIDFw1emGKxHiWCF1s4cVZ%2B%2B0gNOu3BwjgLTFP4RjadGUJauZeBCs0FUjK5LdDzdf4t9OWSo9DQnytcPWsmfZVcJWAetXmGF2k&X-Amz-Signature=2e0d7122d7f12757b2ae58b0ecab90748b2e8eab545c4124599f4bcfc96d4fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



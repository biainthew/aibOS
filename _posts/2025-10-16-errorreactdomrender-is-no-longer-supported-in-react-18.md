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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTS34UQN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJ%2F6d6YHGz%2FrNafkRpUE%2BjtP%2FK703QJwYchCOEcTmwIgRCm3IeRVr9F%2F%2FRn3ygfGO7ddAV5f4Wg4kxYnXjkNiwoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhnvSXKZ3IkDnVaUircA1JaNgLoxdmvmCQH%2Fs%2F%2FoNkkLfL4xOLkCqIkv2xCK%2FTPhorpB0EBe4KiaZpCsN32sI6XPp06C8HV%2BJV%2Blscq0bbmt2x6HEs9%2FxUf0pV20LkRw56lmjX8MDlnloK4%2B4E2TYNv%2FmpTbWhuAgL%2F%2BWiwDf1UQzyZvV8BwRCPE%2FtWRX9KuiriKRaiG%2BJ91RZ%2BxgW5WMVzEgbv88FY3r9JAM3C9fIn2RySA8YfjP3yPZeANQNH3cFJlr9s3vU1e8p91J%2FHtCjXcQoNP9RCLwvibozFHjmnh2wQ%2BoL5J6GpQpPt8lFwQN%2FOH7ohuSfeepKZIs%2BJL73wwTr6qfymq86J9jaXvYFP85cznVY110KpCdka1sNxtWYUHUIWH%2BWGuYGaXOynK17eL86mvYQ2%2FPXcZUtBZaPXjqJsn5xVYtfwu1Ny2rVmsAG9IvQ%2FmiKalgFLlbj9TwF3NgksJ9%2BhYcZ%2FHeBUaQsAwxRK9JXghIL%2BwGd0Hr%2BkgFkfv1BPwdJrVWRf7zUjB9NAOTA5UoxuVdJTOW%2Fk%2FOFyNKatcxysCrbZxe3lgFAI2V%2BVtbBmGlsDE6APMbRZ5ERRWAoCx761xNObKtkajG6rvN56BLz8vdoEptYwkqRow9mZSCghTeeRYVc2MOXT0MoGOqUByXvB4a5BVFkr74IgcEgPav%2FZuI8I6uvYiqwDoYMs2vrjDTuuCiJ6ntbQ4fxwupD0ZjNBq1JqVgqxYFq8xTgiEyp2MkeR5B%2BnuInMlBXXeRwQY%2FKTQfIUVBYQGj19gW6ELr4TJ1m0aEHjvDBIFjrq4zQ%2FL4TO5STBwI1e%2BRLdWTtJeinXpinIEb133uIt5g%2FBSrZr%2FzSYfk2WKS0Gtnl4HSZICLd9&X-Amz-Signature=12761d77860ae16bb23e53c3570ea9cd72fabbd2de73ed60b523ec7be9145ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



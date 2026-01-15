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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHCASW5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICLUPZL89E1ncnIT3hPinzcFV2Od68XPzJQ7jt428zxAAiATjOM%2BEAKwxR66W4fzLRGDzfJEulk%2FgCGgzuacjnNonyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMGk7IRwp%2BSfrIYI9cKtwD8ngl%2FAS1nMYqhkyqx4KidrrKzKAshJwZtaiaJeTevFpoiV4%2BwJa4f8Ekv7xpGkZEVgZU4PREAwIyxuFbz5OXH6RP4tz%2BIW7BJnFX3vHKEcoe90fcNCt7hIzCDpAndB5OYIc5DnXuxnp3tYDeazIjdY2JxkN5O%2BNG1vKYOYxJGlBEwgdzOc8BsNrDUesEbJXK6JCticrBIvbfdxxD1jA1BEPHIM9XPYqBS4AOp8akN0bLKp6W73C%2Fg3KbjrNSPwuQGuFLt9TS44QQhaWxh9wOlhGMuzXZSAMN%2F%2BCdTQYvWhAUTZvPB2HS4aCBdURIPtw7N0k9brO8vle%2BI0LEtyu7kO8d4fe1W%2BY40%2BGDHmEzsTUP%2Bdq8tq33KM5AQBgqlUJxcPkUUQsiw0kcOaTkp40zjenrgiXeBjZXvYpPlVyvQFXRAqlPVGxBo7uByY%2F1UBHWkPoBx%2Fh%2B9Eq06M%2FRcvyXmsTqXsobboQD8UHKO0yqqpIkLDuVxmTEAZ3xTgh4oVl0Mmd75pDikwHYT%2B7m47HAUpUDwA2ShZh8CHhRX1vYmTsf%2FhP0hg6fmASSieIoz%2FS%2BI2VUVcacaVAkU1gBmBt%2F19E4FLqRxndVee%2F42o1vmnvCCe7hrHelCVFDy7swzuSgywY6pgExdJQjwW4lIpTh4Gs%2Fjxrd0OJ9G23ugcsYZKrObQghCdbQ5H7P4PtB6JQ2LN1X7cDkHEZlTxqzh9TrpLVWfr6EwkxJQVw9xH3fRjTUdKY4pn%2FlimW24f81ux6VZc2XxcPYvKIneBfrI8e6Qemg0DkpGccpVftkERWsbZd5%2Bj%2F9kQYceE1zhfaL7E%2B%2F%2B%2Bsydab7uqYq6ez%2BYxdAcBFhDrKQPI9ebYDN&X-Amz-Signature=8de4d22a7e017078db4937fe0b1640a5063a69173c6c7cb13b8c6242e7f04de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



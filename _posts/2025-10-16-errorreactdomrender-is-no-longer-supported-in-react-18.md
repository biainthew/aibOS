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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6D7R375%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFwubTwm%2BvqflXdQVEps4fHBTDgDEuNk5TuSy3rpkv3gIhAPmNat4pJHrXjtr%2FacfScm546TR38l4E%2F6FXdgR7NNrxKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx44iVgitiqZAgLcoq3AOjuEOXHeICU4TEaV5mc%2BpmJ6%2BbrzNXpCGlq9c%2FQOeIVmlvf8JTiH8FMVOUC3JQZ4UHHVHvDlyPELPKGXQWRy%2Bd5iHfmlzVRLSMMZeg3uy%2FpVooFmODC7%2B6EOnP7WPrPS%2FwW4UdiGoq%2BWldUnf64PlgjYDs4pvAtE%2FB5XMKPXMhJThxlvU24tEC04Sl09iLw9ud6YGD6uwIaGkvetBY9Klh5EGfYM8Shksw987WyKaMA937wECe8qHDH%2FouNPTVyDBWNmJhnChuLr7my91lqs7TetO0sZOhF5pRGSmMPxPwMF%2FWgwU8C3KE9MggCYn5QRw22E0lrbhpS2oHDSnv%2BMqXGd9De2vt0VgItAkC1k4K%2BmSixi0vCNgLpskL%2BXcjV2M3zL5LzOkkvBUqYYrihBVmMLXQnxa0lHx1c%2FHnRTLAgMiEEqglqq5BcYA%2FTXJNc7iNiAulKCaLKfqZtN4za53RL4QmzOrGgsMO6Nl6gSdIjH%2Fs2L5zhyXg8Cp86%2B3DFbEJETqSKyu6H5InnNGhtjTh7nQw5wYgZVlENHclnv7to0saAZlWJOpoAE2LdhiAx0aL34gZb3svJpeW3j9E%2BUpRJcK16E48nmH50I8MwrrFpq22PpDlyiWmX3mmgjD8%2BKPKBjqkAUR0%2Ft2b%2BKD4MOhjykv%2FJfWKmrxWTQkRT%2FBF3YXDNHVu05sB1SJu38AnkXXQS8SPHOQ9Hysn5SBoHSc%2BME8Hd8xnRNiys0y9zEQpLJrN10hsaYf0eIBw7xPP4u9%2BUNxFHJcuaqhqRJt75VdG%2FhMrV58lt4%2FQqz80DzWwf80uLJyn%2FY1zy323SFD%2BMfSXiLVcoo3koVctezsmh2EA5jSjPpfaZUdc&X-Amz-Signature=5f91d13f58ed880c0387ae48166ca8dba3e7530201f168fa8bb24a4136e7739f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



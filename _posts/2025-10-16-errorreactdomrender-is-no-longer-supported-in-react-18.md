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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HEK74P%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC2fXZ4GUky6FPWJe%2F%2BjpjUQX2GoBmx0CXhDZ0xQ%2BaqbgIhAN72zfTAyV5GGbX55RvSMVXlcC1FwmodR9VdZMfhlGdGKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxa7nk2l4tvU7jy78q3APVsAR2%2Fg2lpCX62MC1WFJzKaWgneEftPtZyWjtEkINzAyb4T4hUgEWUf7nmAVEdhPbqRy3EYLrDUkoCVb%2Ffgm5XuJLX3n%2F1Q8uWUG1rwleK9WEquZSHt0iiWyokRryV7XJlbGZ4CoA5PDJp8MobFUDqR8wJbn5wyH38eh2A%2Bij%2BnHA1fU7J%2FWyblfJsSYTmzxoYvOUg7P6pTbBpalZJqRNSXA%2BTJQQedF8L6PWuebZ5rWore2bSnjNxqexnf1VlWQ9D2%2FHNJa7yDc7SLhIT1gTBTFRfCFzTOfaTzf6vboShbcYkT1cAZXmQxydIXszex6CSlJxUzEx7yixdtaAp7gA0vr%2F7642%2BrSZ%2B73%2BysIcXKgHxSZ4CqTqfwI2yaZvVegtJh9kXKm5IFHCu55JCtSkPtMBKCLAdbCR7M0gDfjCCJgsGP0OOeMedxBHi4rxvwj5LbJ4AojEAjYoJhLK4SLcmaSRqNqcd%2F10wIdF4c1kk8DRFK2HdYcDb8JRZUBX39nMYl6iel69hTWWaAewR27Q6TrIdy7SwYAwBBa%2BvURAOqXcCBsW8NgVIQmeP33PKiL%2F%2BlN0VAgEl7%2F9mtkezSFPmAr0swcWOCYbFT%2F%2FlM7AtnsUNp0oFktiy5LULjDnmNzKBjqkAfQF53kVb%2FJB%2BqiVzfdg0ytDqdWgdnv%2FTe84MoKULjiZTvNLm3qMqSnpoZ0w0X7nmBt%2FZy%2Fx2sQUocApOlXRc0PUec%2BwEhTdEaEnF%2FLD%2FbGYotpADvnMO9dbClTRi4PlJC8ehEMd%2FghYnM07mjq5YRV53kESsnP8B2MaAJbpjecCgMdALEXXd%2FRs0N6Suc7UssAE7MxPyKK6l146frmaZjaIarUJ&X-Amz-Signature=cbc24efd90ef29ec8cba4328590d57defbb4bd895f0848289f4c9731113e011a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



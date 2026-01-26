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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBSTL4W%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDcjykVKeBTSc3XZJWVvHUmKW4JSObpeXiULgGa%2B9lDYQIhAJQxN5UNy7l3rqy9Jg88NfjZ3t3163BVdQxEFcAEUSl9Kv8DCC8QABoMNjM3NDIzMTgzODA1Igz8LrHqNMMnYmTE7w4q3APsI2W4A8XeP9FfSYf4zeOSkgwxWned2j89DrtRp63J%2BRJJYoKjJDrTsUX5CDZ9MKetU3a6ca8v5eCEyjKVp4GwUO%2B8FR17%2BAOe%2F12wVjT%2BBPxcwsr28sB32cMFBLY6QP7qvo0QbZJ6itytHcUqAwtEK0hqGz3UgSiI8DOnXnS2uwAbwOgbR61Eo3aC3KU9Jtt6LkbW%2F3cNEOcIOZCjd9o0xbpH3Z73llJJB9TCdb1gyf0j0AzG1iBuC0GAMZ2IlfPBD223j3X6wXhI6UIRLpPG8kX1YZOX%2FYOfNHrNLjhvkIU6rFdqlKNl3tOpkVVgNK3yG%2BKt4LiTKEoz5b2hqWR1BOQb8tMRZ2T9JVln2zjT4tBlqxmGnCMSAMy7nKvmCLKmm8Z%2Fi48Mknf07vgaiIEAb7YEdMwd0bJ17%2B51v0LeyOXDJq8YNLbmZ9Xp%2BbMG9XPzF0MYVv1ZwDmy%2FIm%2Fw37iW5J3qVIR8ytRlcwuJ6mG%2FpF%2BtAZLoKvQTvsi%2FqecZHiZzJswKK71j0m632cwAFYu8XZTliUxwmtdoDELyArAJVHvfAva0JvT7p%2FFTS%2B9nvaW85o7QrZ8eZA6VAyAKq%2BI1C23Zpd90vTYVoIqYvTsRdqYfyiILscPaY1lZDDrl9rLBjqkAZATivMHqS6y700WBI1XazzNMtWX723yoS5MeQZGvje%2FnMlZfQjNrrdRCfVo0gSWXEx%2FBHyKXqEJ%2Blc3v2ZYw1A%2BoRdzsW7WZgP80YGAZrk0lCNHsQKImTilyHprJhJitKvtGwKdi5%2FpJVmCwpO4efzn%2FjqAmfAiKHMVgp4sFHHRQpQqyoNZy3wYNpJEB%2BHCQTsO%2B0z%2B%2BKMmmW8CJ88GN2LgI89p&X-Amz-Signature=83d6513b1a1f425031c2967b3fd1ebd3a022d2f175f8e00df10b2debd64ddca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



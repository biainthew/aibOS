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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLHEIFT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsXXZ099cMw10NS8VSLH1zs31B5tQZmGwgzoXODpLIVAiEAomAHUxFQlXVvDw35e0Hn7ruCwSXObYlrl6drqnZ24YEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXKzEk5r82VxfSOTyrcA%2FgBga12FIB030uRh5K45z6rY3X7J4o6gJ4rO5CqyVAB%2BsNIFJBzpcJktttAM8d8EAfhKhXn00COfBTozft8%2Fkr0H3Df8JEqwMGdPZWp3EA%2B2hqjbXGBkrsdfkulKCFE86F1g9pOfSM1KXpYwywVUkkPI6Hp1yldHbKZ%2B2OviawTJ0e0kyM5FW6IJ7PntQ6j8PmN3G%2Ff%2BnzJh4%2FCtgSFpW%2B32mcDGWTAO7HUGkTD1bN2gdOGX16jXd34FYrkma3%2BMyb4oOnQ9IyufuY%2BgOkt6UdvymjjuJZeHLhEYvCjX11quxGMi2KitcCE9Jvi5KuCFSs261lJByaI6Ku9MEp6ZgBusEV6gposstxkVI46HpPaK1bf5fm4DOj%2FwgkqQJQss34okSUELc9I7bA7m%2BhKKZbAKe8Z6sLDDb7%2FetcGq1h33nC08U%2F3rby%2FsMqnhUt9u1xuceSKSgJLjbs3VHT74pPM9i9csz1A5tc%2BCRI2mkUOoxM2CbHOhYVMMeLVzShLzy0j5HDhVjTNGpmI9XPR2l1LZSGHds7jLVAz1PV9t0qX35SchISZtVgU8K%2B5l3kJ5TYGw9r%2FT8BuOUAby7SHs5sH9EBhK%2BogObzBcEnpr6cJnjG0JvrqLlmzEBuJMNCmgcsGOqUBMWnsqaGtXmOd9NkDTMIUl86cpPnVHgJ%2FrCRJV5DbsmBc9OgJ%2BUJ7ZIBwGomRb7SOIUyEPv5IZQc3H%2Fhmw9LX63ukjnKCR6klTn82pD4D1JJxZSZq4zWpl4olkvzEBjbWl3bav4IiVwapxifCmP%2FdOnQj08XpqZmisBSTRBAFtymThAt2N4oyMrvoVgbLhIYwRXB7ngzznoEQQlNllSJN7Dkfudka&X-Amz-Signature=6a50dd5f16a6384481d78bcc682de9ef9223d1de7b6f4e21b5bb7c3eb37d32ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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



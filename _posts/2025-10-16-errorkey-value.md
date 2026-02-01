---
layout: post
title: "[Error]key value"
date: 2023-01-23
categories: [general]
tags: [React]
excerpt_separator: ""
---



🦁 key 값 주기


👇🏻 오류 코드


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-25_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.22.53.png](/aibOS/public/images/posts/28e0a7f9-c80c4ed2d0d1.png)


반복되는 요소들에는 고유한 key 값을 줘야 함 ex)index


👇🏻 해결 방법


```javascript
const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const name = names.map((name, index)=>{
        return(
            <li key={index}>{name}</li>
        )
    })
    return(
        <ul>{name}</ul>
    )
};
export default IterationSample;
```


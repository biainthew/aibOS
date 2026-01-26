---
layout: post
title: "[Error]key value"
date: 2023-01-23
categories: [general]
tags: [React]
---


🦁 key 값 주기


👇🏻 오류 코드


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-25_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.22.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/60561232-f615-4597-8088-fe3526088cbd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-25_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.22.53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWUIQWXU%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC14GskDilalUs%2BzLwvxccOhPDLe5EZ4bizW7OVdBZfRQIhAN6i3QDxbkLX884hBZ0mo3njBCJW%2BpQhagjOVuR3ml6rKv8DCDoQABoMNjM3NDIzMTgzODA1IgxriUKI9Ln%2BubyyJBIq3APSZmS7cgbCW8lw9pQWQAx5iMri577JmYOZw9CaGk5B4zyFq2yr7nNIs%2FxIv0tVSKKTT7gyvBVB14wWiboA1QF5Ib%2BRXZvBPh9MD8iD%2BW6uGNLAyn%2Fwryn8aDR4N1xTO2BQ9ShUFG0ZVWV6K8ZljC5u7pHUw1gDWPdzbbBqfUCrnwHMT%2FHwVXZ313ePR%2BVvURIsHjdqTrOXPekkQkHvQ4gOo6Npg2%2BAXLcqHezHm56Itu58knOSJTJHXKYQCYP5Izg8zV%2FUaonZh4gc%2FTeZj2lY5eds6cERztt55vmgR0gSWilw3ks1ftZ7nOjLEb3ZN1MuHVQNdHbxkhNzqZ%2FXc6YrWcDxWKWUjxJ5Dy2VZJe025TTW7u5wDfGSbJNMPcQnxRr2KLgmui%2FwxpM0cM9DjqSRCCP30sO0i4p8uGB%2BY4le21YahLHFpDapL0YbMiVNEBN17kAUlMIfhM05hpMlqh%2BWsII5q5%2Fe1TvyHa6bJ7fHhSGiqA0ZVOfDQLhHqy3jxopVsOMIrr1jHEGz3FEh0f9fop70kM2qb428EOAFi%2FItZIAl%2BC%2BWk7pVn%2BXSd2BN0ySKv2BN%2F1t8IaJJWFMAM%2FTumqGwcwAZ0575FBfuomEs%2FkUadWNbHZ5CRz2dzCn2NzLBjqkAewXjibmUYAPDpu1wt69lfvcwUol2zSNunGTI9tqhIp%2FOYgLUPPOrT19WqjlQRM10VAeRxEpBQirHh5A6lRFqoJiFgiuoyufbweanW9iZpP%2FEQ6aK7hnicJQdO4aa9gK0WNLj7VGOzkA0BzyPZvSvcW7MbeW01iL0PDFomWQ1btSoNfTm9Ij4oauZZGefbaVuWamf83k2sIyswbuCAS7bb29DPwp&X-Amz-Signature=55acbdf9236afca2421b996487f4ca215f63fee628be2cc9ca8b6a9fd90dbc4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


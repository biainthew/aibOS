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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-25_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.22.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/60561232-f615-4597-8088-fe3526088cbd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-25_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.22.53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5SQL5P%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHk2AssJY6NW2KpfL3ngNnHkDMNHchW1E%2BYzSB3bX0oxAiEAgIqIXiGn73JLEbk%2FuJDcEmocPzKJEGvHGhDlZJYGt8Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAuAGFA4Y%2BsbjGnDsSrcA8AByS21a%2Brgfwu7IM55eC2D%2FqXti343QS%2FnCW0xWQEbw3BRgSitUKy6sbuOYFzpmO34r9Z32fim0Y9YCPqWc7cw%2B8SSisF0iFRL%2BX25pXSoL88KIUy3rOPrvLKvb%2FrmZdtZWN96c2ZJnHao0ot0T2PHjKGFKwWDNl1ncOqMGhPICXOEUm8iWFv3UgiFVHFKfxeLG%2BYfc4AdH6YwgS6QW6mu%2FpXWWpuZMW67Oy2mTWcYzCqf3BTeobJfodJ7P3Xb6RuOZiXK6nR%2BceGisbeddPAHDXGls0r0HIi960bE71xM428CTHbBbj2j8KTssPFvkfzaY%2Fe%2FIGGxyxAXQiQBN8bKNHc%2BgLJkDzp%2F%2FIf97vv0Tfy511VeWDxrg02B%2F55aQ0aPGEDPAiDEo5Efmx3wEsZh9oxcmSaOCB4zETMPbCfIJbBoBzp4ZMQmlEvKiIDUbOe7FYnsf4JIGYBiA8qsgeGlBUbSX%2BvRkK4n0GOdKOlZtoUyzwxyg4yhUX4RUICKCtX5lehLXYfMFEX5yElnFI0F%2FQINA9BqvW9sQ2%2Bja4YpzN4sXZLo%2FGmPs%2FCU3cxXD7brsQj0rsU9%2F9aCY2oqGpOW8PBJhPl0JeEA5cY1y1iW0oSVUIE0SWTM%2F%2FbdMLD73MsGOqUBgHV0tdlTjXv9Jl5vTVofHTGQx6wWadkklX%2BaPeXzd5PXYKJYbpjTglF2C14Vp8ZbXd%2FZGU4HaeW3zT%2Bgz%2FbegRT1swCVzPR8FIQWswtZfthOoDdHvpPZPoB6%2Bt0gw3IyI82yLoz5FjkDD97sjYR0dpO5%2Fs2rfyaYy8r9j284KbxOYZiF6W6f7zdsMabkVpIRtUjcNAVdyhA9qojvU0h9osy0RFiK&X-Amz-Signature=9226752d6af8edb76283973e6c65a74011f44b876c079b5b7541f6e4c10c4aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


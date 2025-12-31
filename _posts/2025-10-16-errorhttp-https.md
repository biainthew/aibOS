---
layout: post
title: "[Error]Http Https"
date: 2023-02-20
categories: [general]
tags: [Work]
---


[: 참고 문서](https://velog.io/@shin6949/HTTPS%EC%97%90%EC%84%9C-HTTP-%EC%9A%94%EC%B2%AD-%EB%B8%94%EB%9D%BD-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)


🦁 axios 로 api 받아와서 깃에 배포하려는데 http 라고 오류 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKEQQUC%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGms8NaHeLO0coNSCE0wSQuOD3Li2dE42QjVL0zg9TmAiAa3B2aww1fQXu%2BFUVVL4I6oltlJ75IRVxuYs6QHebJyyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2Fhs6Oa5OINJnfejKtwDTBVCuZJcKx%2FJk9f7ZU9uP%2FOip8rgB5HGGNWDnglbrEXSu%2B4DF3xf433aCM8Ti7j5vrlmupVh5RXs1Z2SlbMhUeLLk8Ju%2FnexuydHT%2FZgpb2wkfad3G1pBdc4oWEfoTkaJOC0R0CNnJmO%2FwBAHC72obYAj7CrGbdUYKxDmkDau5fVrw83Hvr1%2FDrElQ%2BdysMwwjmA6Gr60%2BIF3elcGCx%2FHQqWBrlozrVXicsYaPBU9%2B%2FDxvJpmNzRwUihLEwxkeVsINONsTOkzOz3XatweBw7N0RJn%2BsuFqK%2BLQJv3W1HmWSMSRSifUUNmA4hz2vnqRzyE6hZTVo4e%2B%2BBah3yraoPOevf1SXw3AgVKZp%2FDlCJMBVon%2BGXixwPSiXdRImvYtEuchwL2HCdkpmHr5mLMhpzDMXyQexki6bAb74XxfHEUnUfeJJ9OmAyEh1qQDk%2FZZU0shpB8yaCKaI6F1fOokwwN1DZA42GmUfH3tmQXFiD0ssIlZdLi02X89ODjkI%2FhzgkMvVSFOoBumEylMdippnR9Myi3mXNtIsOFPj%2B7Xk0KLDrf619qP91gs8q6fMHXYtnb5mxR0O%2BfBvLQ0hJ0rwrODRq%2BGXym0u4NLJjJNf0LkhXGWW5bmlS3vxqyewwh%2B7RygY6pgEpocZnMq%2BZKBQG%2BJPOT7bS5rG5Gid3R6BUCqRXZ8KSlXk1cR9V3kxGN5h1Csr7KlWQfJ%2FQH96ii%2F9aoILMS%2Bke8tYTtADLWaycz6KWFoWEjL4j%2Bf7dQMin1WGu0Xc%2FQkjcBeJP5%2Fg6%2B1ltmrq2nUU69hA3aC4aNmzZsJUbpfvep5AC0bgDc8YOnM7%2BpD0voOnxhCXqgqGvuuRllhKakdag2AF5bvkA&X-Amz-Signature=bae602fd117b7ae905aaee35fcdb0f9056b0ef6aff07b698f5004ab0cdf14649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


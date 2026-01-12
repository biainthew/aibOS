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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZ3WJ2Q%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGmNm%2BSA3%2FasZlgP6QhvmlZZqp9Y4q6SsU4kopa%2FUGGIAiA9HymOpxPpL57adf5xkUmMLs0ffy%2Fqgm190YzCjB89ryqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qww2MtCb681CuSeKtwDhcaF9zB1utqEOBW%2FkstvZheHDvxqPkCvl9uF%2FyhQ1imlvudhv5TwvrtGh7IxCakMCJt%2F%2B%2Fh%2BqcHQnQEUjswrZ6umOBq%2BGdTwoD%2Fvfam3e45QaJ9ca%2BPr7JqpQ5CvH4xjcZZjY5t4RUSiMPPtHWcjial5HUsXvC%2BBmtIKVm8xLxu9lN1Ymrx0vF1Ey%2B0YJ2x5lBDRuNhQYzjRhW6DcQBveTNDbm7OFwcuDEmNK244XaIuB2Am3v29rEeipx41WiuVpGYfywgFter82t01rHL%2FlE5Xu4OKwW9Wd50BcYWSn%2F3WQMNGnlhR9KGZAT%2BDyI8QL3ZOH5d2QUcV2NlwQG9x2fXrOikdBp%2FTGleMrISACeVrCnNlFdnRTf3vyQ7Bpi%2F6rY4ZML2iQS3975CjRevIOFD5l2FIaRsVnKiRai%2B5Woh1Je3lyOgL2rY85yKAvw4anGp0vGumk4HpRq6sTxm2hcwP%2BdUpNeKBpzgynDZgl1wZfg16aj7EwaTjIiH1Hzw083OfS2F%2BjCM0%2FlDysCnGU2on%2Bm151EXKFNvz8Zxi%2BOi86RyHm9k6EqNVFPQcBFO%2FbiqFxupipR5AdEG%2FnA841zMbiVaOJ6USDC68wBnjKCd8R%2Bv6%2BlpFEGDYKIkw6PuQywY6pgEF4GMQewhAlTu%2BYnbz7jOwHQ8f%2B95vARIndQuOx3FsnS3k5DLE%2FJjAAfI%2BxMDiKykNVIUWvJeijdlNtC7tnGM8qS38UdhNnT3wAaYdkDvvEo%2Bz08Ps4VQNjlXbemTh8vd%2FnKCucGDSHZh0bILZk%2Fcznv8u7HCHg8soOPgYvJvrPt6%2BAdKa2N4sh8Kw8RiFMcbppljwv9F4kFEbd3vfc7WigdnRpZPh&X-Amz-Signature=2afdaa093e9f0408655e8ed7a97e8862f807651be1169094016610f03a697374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


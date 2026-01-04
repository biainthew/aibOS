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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F44TY7%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID5NX04%2FKr5%2BG9VQ201XajebzlZkPaHG969bBkIk2GJ0AiEAs%2F7Nwj4ADlBgpvFudJD7goCTcXpEiPXxESDGrShwdJMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEeb8k1bKOelU6fIMSrcA%2FZKmdCejmETULVsMFXr4qyJCjQXrzNGB12CCpKQvSjr1tlQPwUZniaDFVc6clv01o0v0cGqZRQful5zoUa6MCY5SAQTBKM%2Fw%2BXaVyqp5azZJy89AdEsXuwAnap%2BO1JHgasj0Gc6eJCrMkUZSKPXJLCvk7JoRYcG2jSe8x1O8HeFgq8gXD72GWOXJdpy6HR5sGFKr1v9hjhFTRBKq5tKMorul%2BF7hLVw6haPQXOxU7a4wIrbSgHMXG2MlFonJ%2B4crdFIMxQSGTpnmhBDsGlcAxl4%2FmFo6ZJIGZdRxqG8vI%2Fgk41QlucLHLAOWxbLqqHr%2FLyz%2FHz%2F63sa10ut%2Ba0DD2AVR6qT6NbWeYm5OcEfd0Q6jwMkcX72yiRiBst2rrTh7%2FnZc8vGz3y%2BiVesEGX%2FHJJu0Ugs5z1GhQsSOuC4G6bhDnd8pE9KxwFZ%2FD2j0fgmPHXZ6c6tx2AwlVtP6Fr6Vv3Cmg%2FMcG5nwqNuz965%2FmshsyYjSaGwd9xIxu5t8Evs5P2YrsAonhq3SU4v4ghksFNBwBVNy7N%2FW79SBUvqAQirsqoFzbX8iKWYobOX1RCP5vqNSZMDqKvEe9JsSCxxcfx1jM4XG2uOPOVrzdDxtSOVfnMa8xyoFBn%2FoiViMMGe5soGOqUBVT3vzXEN15HdHQ7J0i6Y%2B8cMPQ7ju60hPMTPiggWR%2BMNYHkorisVyHF3rUBGNpp7YrwgJdYtoY3NByP3W6phkD6%2FSiJkGM%2BEBErRb6h1zeAgf7jrUSjUnOQOAsUpe7rtI2e6OoSM40RhoYpwXLyyzKaX2Hghu8zjiLXtd3VXMEyqT%2BPELknFcoSsk8Zsrbkm%2F8F2ynNBOREtzIgxF%2Bw2HZi%2FtnpM&X-Amz-Signature=5ac2bea07c2f4acc24b4163b107155fe5728908cc5b348f959bb25f11dec1c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


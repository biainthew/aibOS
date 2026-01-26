---
layout: post
title: "[Error]unable to resolve dependency tree"
date: 2023-02-01
categories: [general]
tags: [React]
---


[: 참고 문서](https://tesseractjh.tistory.com/234)


🦁 npm install 하려는 와중에 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0ef7b857-3c47-40d9-a73f-41e2b02e3289/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFGQMSO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvL3zNO3s0%2Bn49LjyYDHv4EEOkCXJf2OUs5gnsADutJQIhAOXWGk1YLcDHUTKDBQZz%2Bo6dQJbTNNCxb0vHJ7yj2Cy8Kv8DCDoQABoMNjM3NDIzMTgzODA1Igyny6j3XYfGIxEUYHkq3AMZqppZxTy7ExvPjo7iQh74KnXhpT15%2F1ILE0naRQ2qb4tb2JMcOuwif6z8pKq2MmuAd4LYe%2Bfe4ZUto1vWD6T8MRyiSXOb5fMKY6%2Bp8%2F7a0tLzqQXrJYKm5GGUApzpWrS11I%2FzFHyjUqUpO8xGQWVyI5G9CaOyNpxDHtQvHEFAM1S7XXh6hPXGYmHZPZnmWexNwmzRu6px5DyGm1fU8ChBHSUFcSNs7HMzgE9yHaX%2F4CSwY9w55IuY%2FvMSCNV5qecZl8A9QJxfKr8lhtrsqPjPTIup5YgKo9L40UXl19o0T8Bd%2FWyZqAv9ygD5DXPTZS3YwfW8w1cE%2BqFzrLupf9L7wNuIep15%2B0tAAN1bUdDvBMb%2ByiTTBMohAZT3Ak0OIVMifKEodk%2BPesSm%2F1MsfrvHkwgiGMTkGSrf3Q62cselpIScHVyd04GVBPjl%2FfMPY3hllN9cKkAI4C7mD79kdg8UXJXmlRz%2FKtuzVC%2F6txWxn5pcWhNH3K%2B7wv4aw7RmH18AkMSYIugY7%2Fn87M%2FYjvI2WBlwsQJPyCIqA4O%2BGQX%2BFlHZuIkTw38Oob%2FTO5GbWPmfvLBQr99Nz94Zudx%2FNlMzMcF9szRg60zbSt58pxLKyFCMPqKVlw52wmIm4jC%2B2NzLBjqkARGHr%2FsJ62%2F64mtq1Nnrk%2F1JqaRa1uqzY035%2BxuwkIGangcbz5eG5ctqeOV3IkkIVxqtnzzJ4IEpctB%2FMA1u0nbSxfj5GNaNo0fnV4nuEooI%2FTBE73SF0Uq8cdWR9N0GGjUnPzDb27VN8qDsR0Pwr4%2FzBd0ioGXBzXz8C7Pg7QpYRmSfB%2FAaKEZK76kA54u6yj%2Fzi62UqZRseI5NLZoX%2BT54jveX&X-Amz-Signature=54bedafd9a7a7c93b4d69a4cbf124cb8c47855ce53e04897e6e52c2c3b001287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


원인은 2021년 2월 출시된 npm 7버전부터 추가된 **peerDependencies를 자동으로 설치하는 기능** 때문이라고 한다. peerDependencies를 자동으로 설치할 때, 이미 설치되어 있는 의존성(direct dependencies of the root project)과 동일하지만 버전이 다른 peerDependencies가 존재하면 충돌이 일어나서 위와 같은 에러가 나게 된다.


👇🏻 해결 방법


```javascript
npm install --legacy-peer-deps
npm install --force
```


둘 중 하나를 뒤에 붙여주면 된다


위에는 peerDependencies를 자동으로 설치하지 않도록 설정하는 것


밑에는 있는걸 무시하고 강제로 설치하도록 하는 것


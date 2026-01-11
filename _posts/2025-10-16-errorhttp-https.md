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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOJ4B2D%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ%2FXkr28FklU5xj09ylxzuLMAUtjPjPizyOCSJVgMcuQIhALOYPDxp81vn6v585i%2FaDTf%2F9MtqIWWe7zTuZ%2BlhYSgCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGr6I1Hhg071oO5Bsq3AOaITU4%2FrKYunqHf59CYV0twc%2F%2BqZBK%2F8BcgcJBEZZ1chgpTdisMCeE%2BsvSrQgdCfX0RRhtt8Jm%2FdvmtCtxenZtwnsWl%2B9tYrrod92CaU%2Brrq%2F%2FWYCLNq4bKy2iXjiJIMcGW%2BA%2FtwSrY1Dfbx%2F8d1VrnUPN%2BnRCW4Wvc%2FURP2dTWY2Y5f0KjouEOs0t25uwvbLURwkLfiSdbAzbVanQCyJomxocoDyMWUIW0mqcql35Uyu222FOZzhU5jakYGRpyyXfpgMP6rzDpt6%2FMQidiOrAAFHxrzqSm6qlYsdTVXDEVIhmZwE3ORLDRpmKeGxQRO7jz0uHAxVj%2FUxKY4mRWHtraymOnkvLy86ig1oFCPXU1Hn4t8xRvmrirXH93%2Brc6Jy%2BW9FgUnQW%2F0iy5iTZvZ%2Bgfag3cBWYwQaoOrVytfqdxD3Xia5gAJlgBncWbIjAlnj0QUNjACWn1pz5Ax%2FNTHmhL%2FRKL7ZHSViIj%2Bfv%2BkGvYsHFCcJIBA9QDK%2B1sjTrFSh4HoLlOjR8zqnhMIg%2FZSj7%2FGzRN7o9cAnO%2ByJn8OdiKUbRYfJcFBagyO%2FB9LemwemO9WjKf84g%2BkCHhaC7b04ZrmoEs2YBcih4r9RwJaUFN%2FAD0SbGyNUEfiLxQzDd4IrLBjqkAbBNWfUJyZuty0yP3a9rdi%2FXgSmM0tuoUYG0UjtbL8RBsL%2BIYrGj%2FpMMEi%2Fb%2FLZgaAJBHzZqpMoKYqmYgHXLRs9FQ75M8qkKzzR9TmGkfuduq8qqJ%2F%2Ba5gEUMOWwky2a%2FPhU5h8J3QcEozcGjDPeGUW3L5sB%2B%2FVKIO27swG3ON6Y9n458Dzg2YfvAmzKzO0EgH%2FjwFBXT37SWua8Bw0LSPorvB5M&X-Amz-Signature=bfce779f63b9c5774b30a502c70762b5cfa62d255ccc41940f0e0d6e879debf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


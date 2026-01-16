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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDTRVAA%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBdaMKp0KoAWY%2Bh1Ez92W7Na96mRocPOlO%2BC1iOSm0euAiB2MIRLBqgqHio4P5XgXsFI%2BMt3bjvYB6xk8wHptooehCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMyn1LfBZ55Fl5XzoVKtwDmTp7Thcp9Lxmvh9udE8cQulbaHpDEKIsUYAK9zHHTXN06KqNH7vX77snUsID8XtoXMj2Fv63iJ5iIP%2FB%2Fr0Cwr9F2PK6KY0Sg9gsLwWshgvzXk61l5eBE80Q0eBbXt%2FaSreYLgzp4x9wmykwU6Ef4doyDtFuWUlVFgJdaKpT1zN%2FEfky69mpvZ7Rv4JI0oSjtYm%2FmRv%2BiX4WR%2FexHK2bnZ3QKDukmRPPbMwth3GBQXctAY10U9f%2Bt4HsgdE1rpgqaow%2BVMrfLSFymhqr8FZztiVD0bjDptLx1flzCwg9H56qlrXso9IJdLEq4V3LGdcg9NZSPy2RiykL9Duy153UJJYnX5gnRUnxM1AttJzYSb1xy22uTlGqyBF9fGCuAZJOV38PngJtykWEaCXQ0uT%2By%2FGJJzcgjzOGR5I4QNQEROlXnogUaGp1fLrP4BF5H%2BdiLbpFMtxqm4csSc7hyZhWqgRmTOvOxfshYxQ7%2B1XZIjbXYmv%2FU7ZHCDOxMImIoLtYN1Fwi7fNrhGh4Jw4ah1s0iF0EW7xJA1vQnS7v3lbVSYtmncXyp1N9hwHHusUmojXAmAOk1%2FwX3hbioULyZzZfb4TQBS2zUj92tNkzbl9whX1hoEZZ3XBCqFbZwgwhp2mywY6pgH6WZmQlnMADFn8fvf7UHZIaCSAjGblIhBs9W%2FKTXABdjU9WHkxfUtK2sgCS3X9857tYurwAUxLX3xM%2BC5ZGVhMluaeMVof3Pe3urQWP5aCA0SnY4ZkLQYwkh6r51O%2BQG9nbCHjfoh9HXq0CX53MFH8OTt1swz8C7fuZ8X7E6wmIrkrAVXNDn3IxBQT3sW4DV8D%2F5E6sG6FyiY55%2F1dHMG2TRybIZwu&X-Amz-Signature=4c5445c2aef552520772312e0f4b312ef344fee9dea537efd1dacc8c2984afdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


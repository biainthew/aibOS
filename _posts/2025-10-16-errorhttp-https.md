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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625N4JFCM%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQC0jKmTduYq9uzmbo3gOO35a37IK2dpL43ZvRJ%2BymtvTgIhAJ8YbMIy%2BOBxiWV8UVITM6nnhKukiG4GLGKBR19w3reSKv8DCAIQABoMNjM3NDIzMTgzODA1IgyP%2Bx6rWXFhcL98nMcq3APEm3LvgLJ1oOFMGqQG0MJUqves5rn3D6IGRWnTBpJfJodjeAqFS9BTTT1HC0ohSBjyMCvy3ji0zG5fHBljQ8d5YedeQrdCGquCTfAVaEPYDn81QhVvoCepbF6GQTNq%2F9EiMrfwmL6oX3iwDGB%2FAstGritmfFq%2BOrd8g%2BhcUA3F4pbYW6WLl09VpXV0NP8vjm3vCfhncFsw7vilrMsLIidYURDpzbE2DImt9yq5k8Z%2FQ1Oa3gaFpY2xj1cTvIall35G1lV1c6KEA%2BSSm6xvVDYAeKqhpb9MJtAUIqmEBiNwGL0nmYK0RWEPW0aH%2FAxw1LrOnPI1gvFq3k3zzZRRoJXU6OnR19qbkdHu5Cd%2B8BwjfmQmYCD9Q%2BUcxteBGM0ikcXSceCciPblrlindSQ2rxAKrhShkRugXSHUscGt2wbVyNhkT0bB83EYm00f5BKU4ftlqk1Gc33vmcle2ZIvyFq9H9udUwneegrvIf18RMKOdLBZdAvp%2F11Kql3O7LXQ6G%2BvUX%2BEX2akpXMV5YIT4hLXZ8eOCEZPP8dY4iXBn8ynw8TvInOdrnNZBMhGan1CsXQ6zNknPJbjmnl56HsZ9UgXPVI%2FeHNXDjY1ric6BA%2BOXehulrvdmZHwZ5bSSTCdx6fKBjqkAQnGQSeXnP87%2BPJJeRk3GZh70kCsFABr5v4gg3gc0YG5mMBvucaEl%2Fi2GSGd1km0q3jCQgVFNlK2irA7l3QRYZM2TsRUnOKhMrOwjwquSstpCJ4suKdx6k0cJah5u75r%2FKdBW4xMvVYAYgMemdPn6qeiB3RrH4cWBHVJWDVpGS45dgwo90IiVw%2FKPyVa%2F5DgbCQPR2RRZms5eghb%2BX6AEk6xaCFW&X-Amz-Signature=d23e9ac89675243b88b03742d827aa6292d1ee78d3d2f89c0ad1a75c7f275efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLB3TFK6%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIByxDEQpZ6nPfK9t%2FSepT9f%2BRp%2BOi9dqclAsXePt3UF2AiEAuiD9%2FQmw1Myki8K0d4MndYWvY3dQeFrxm%2BYwfSYCGCkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDH6ZhbSSRbeR9m2PircA%2BoMVKS37c7IJW3MLoRRTWauqwA7dIdfpk3qWxlOgxu2NbTiATtOPZXp%2FXZYib2wOkXUxIccLlQfEkT4ZxvdM8BdlYferowbGwI%2Fhy9sAB1lZaa%2BlWSZ1p86iWDItyu87GLe6d9rfjHLd53HEsVhJIQriUGcaQItyFuKCOl%2BMCO%2BEp8Moo8vcaGDerK6aM9Qg6XbONo1qe1jXU37aeG0gfaHp2ofJxt6Zm1y%2FImsotdYl73nX9FwpwPE7qBmDtHSVkdEWgH7r%2F%2B8TLBadqiMVSG2Su50vzyY585lGuklVhoAnwUaVhjNjpPm%2F6htAfBMlodr%2BZMGVaoR0xLw4J29l76hKCAlCAcT%2F8hBERRPzzi7tzsZgP0L4%2BL%2Fk7x6nrRSjuVoQwyMfe5iCwiXiSXxtsFM4%2FKtEg2fpmiJ5uKXMfgwoRtTlmLr%2FQl6dWrcfZzFGw3UmtGsRGTVMro611FwrUtvu61%2B0rzf4sIzZ891WySSPjzooE6PB0fOJJUwU%2BIUYV3h7R8FLWv5wWqd18k3su%2B%2BiUL1CjTLbIdrm5mt4AvzzpqVrEEJRz3g%2BCisky9PiJ%2B0%2Bqd5VS0RkzmTOHrLLif9k4nK%2Bp3os9Ikf4npp3vT2tD1OwS1fcfI4%2BK9MMmw0MsGOqUB%2F0flu1%2BWv%2FOO9Ay8QJtez%2FeHPiBg24ja5TvyX3SpA3oEw%2Bww3Ja8fWVCv3aIszvPIuI7iaoo6AMBmvw13CTnu9YpPBmxcIm0I6QS0GXuQIoKRnYCZN1NfCDbvgpSvn3kpacU6sZIqD8iRP1jsz1JIgveU3pcD2iwfzICLcJNmA5oh4Omzbq9JAUCP0WJ1clFrf4Qgt%2FoxC0sJECqFbDB9sX1v8wO&X-Amz-Signature=c63d90293cbf9a0f87ca9a8a35119dd58fcc6057c674fcd76c73c2a8cb7e98f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


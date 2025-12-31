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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVH3X44%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVco6n2D4KZW71bk%2F76l8PLdJf1%2BSR11nvPJX1JaAygAiBMttaw%2B5XcjSJ8XZ4UA2KhLMJHH1AvJMlvtuAigj14aSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoi33%2BQrC4whEO%2BK2KtwDZ0c9TnkAQ9491RO9%2BPkFwtXZN8fq4TjNpM%2FwPkgiYz3mp8IFlAaPbFuvG6nSuyYNaWbUTqmyUW2LiGAvnv61CCbAe1jSoKSf2Ka4iEoxc7eJ0JW3SY9IWJJaqACmPWl8nwl4DFN62LZsflNBRRS7LS3Cct2xcQjUFt%2F0Xdat58iaKCekzUK11wEI4gg2PhcWx1X%2BJcd%2FTEnkQcLM%2BCUl%2FxoxsGi5FSXv9iXqauoveFmuXeGNGA12WbGxU5OpbS3pRPrBkXuXFV91BW3Ajw3hQgJgknCClgGVrzrwOqwBh79Jtlp9VhOj2UkRbaRHvPyf7JYHMXl5EZMihLSKTVD%2F4ugpWUc9QFaC3O7QqbbtK6uMvMXM1auXAMUQqLf%2FsGxWkiOnHnVF7CJ4mDvI9d6ux%2FEbiLFOpo4aSaPgwqE3IdHqnhQC%2FAx3kXv%2Bm8FSx1lKaj%2Fz6dRm%2FSrbh%2B8YB%2BcRaHBIlQa11%2BHE1lu9gPOl4DCMj%2BGGsm6pDAEbxdAwoRK%2BDkItJljCoNAFG6S%2FjlwkE0bgpdiPofMZuwaPrdvb5fCfbQwqOesz9nyOjtSQOeoAs9jQInCX%2FtwSxOb5dkZInU5gkz6tffW3mwy8xlOmKUfxISKBi0zbGCk9YnAw5dPQygY6pgFBGJW8KC%2FMmg%2BhIz2RDNUXCXimcSP7zlcIrmsLnRyHpp36mKFKbt21QDzlI4%2B%2BEU820nkXyu%2FEhMn4uTjDmqBfYKoTCGu4zDrFOPS6BhA0J%2But290QQmL1%2Ffp91WSAKEoku0pIh6v6JsaRozKkOok4bNEgUAHLtM7ufUeeUiVyO%2BPJaciw6qz7lvy85b%2FfwDhTvLjneOVg8c%2FVqNrqGsX%2BTh%2BkjbrD&X-Amz-Signature=4c92d873b079b43dc40f9009f12af67951f623c49645c685a12f0ffb778d2ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


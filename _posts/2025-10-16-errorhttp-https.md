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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXKDJA2%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqkfyOxX5hq9BUHHIb01Bi9ZM0aZTlXX%2F%2FpwKbNzSAwAiEA5DF8%2FtV7r55GdoQ3Y%2BQgJDBF3ike9UnK1yF8f%2BC3ZzsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEdUO%2B0Z%2FqZ%2BDX2BSrcAyWp3y3z1c9scFRmrakYM0hGVvaSqg7Y323KxQ7HUYgUi5f6sgnS%2B4shL4MtWLIhdfyn9t31aTpgOmpF7%2BvDtcHgnc%2FaanNWMXhuwQqNx6HytARZrU5KbhTOJNfMUykKsfu04L1OqrH0wJfVd%2BO1wjGZ4W3DlNEE5UO6GA157ebnA5snWUo9iWmBsAE%2F9vsu8xGlGBDMNYgLKaV4V%2Bb%2F8bNHTofm75lH4teP8LBE9r77JqTbohnp8%2BRXPl9NA6Q%2BjMibZKzqSqZGyu%2B3Eq9fcASdN4vqvla9TCHEn3KpLfXyexZHGqSSSYQsr3IVovpXK3bzRL2xi2E2LmypHfmSel6lgZOGYy4dN6OnpeZD7ZrG%2B%2BRGgCGfjrPT%2BC5O4N6QVEN9E3ZJZfDcB4sIGc146JtpQuVarNG%2FQEF0Seqoj%2FQzoM4zPSPeL6Ssk5cKg9yZsVJEPQynJP08qZaIW%2BnKwKCkKNLecnQPL6Pm9ot8GpYXCpGdh9alqvFYkzxCqw7FRYuxm816GUb3guuRMwj6wiT2vSul9jpeGK2qzLG9r%2FM9coeSEP4nLs1hQfKrXWM8pYUzElZygvSTCxOIWxJBr15iRn%2F7vOMTQ3ofZI2HllRlv1yqT5x3rh%2Frgi0QMO%2B1wMsGOqUBVeWRs1DhRWwhKTIxAqdyNvcr%2FdqkWWTVdjAfa34ynX%2Bh1A1LwBMIZW2DuhqY2W%2F5vbsMWWTTKkApmqqQjij6iDFXCooL7vmaYwzMlXPI%2Bk6DmG4AOmCXHf3shXD6b%2FLOjCKEhJrWQJnJXx1DsCKKP%2Bqf0YiqTx%2BkMT52A%2BXpmZT47GMlWYp51a%2BpTzgKKECNTMWQyPj1frtURvCdXj545d1Q51Az&X-Amz-Signature=85dd105ef64fccd2fb47f7eedd5d46f7a966388b9ecbedc4e2e47d9dd4c3a1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


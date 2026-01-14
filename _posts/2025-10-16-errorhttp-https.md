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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW3WC3V%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDXkOa7PrujTkNN9BjckY73cuKvBizOGPDHRnsuVMBNVgIgN2gObMwXHKMnNiTiQus1Thg1xVVzPNhAheK7nLDDuygq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLICNJhxnSTgvzrGyircA%2FDGyLngUdbCECMpMKdXsptOXueOgyTt4AUkDy7VhsiCt%2F5A1mxgug8q6o3vUSlv8MqkyfXh4%2FtvTZpDnaM%2B4HuRnxUjXpGq5STs3sNhn0Bf1KDKdmWTNKZWS89JozVV%2FAVI1KeCQF1XP3noC2SairqPpwYEQSj6kI1QhEMnh0BcSDZphcqENeGLmOYiT4lGnfuTgkt9ANvBGh1Pb%2BcVn2IRhNWUVDsoNEOytoqsVZP2l183u6mUz0Ac8BzwpO%2BLbs2Lhp9hckJdZ%2BWC%2BlivKGYoFVV6TEq0bioH7rf7llIF6HpRkTcd%2BxCjPAh3M3qLTTVfMtat3NajQODVOOCNgYYwbMe%2Bq6AjOlE2ioD%2B5HmfX63359cHmi9uW5cyHMD55FmqBgySFDUBIhaX9sGX5eennx79sX677WDKq9LrDR7KaOwluRG80s3HUTAMylp9W07nO2gKVEfHT6z8r%2FogvcrmCkBCE4ziwmVfR2JoyUIZWQBFrPK%2B6YIxuKTxc6u1cWZMib7OJ%2BzroP8FEeVlbju%2Fy6kkYtipV%2FlxKPJl9%2FK2h%2FDIYUM1ZY2Ej58DCu%2Bb2kFvpQ9KSlL5s%2BRJtiXJeo9ZXrwMMTRulgmJPm48gYbHQb8ZiXAe%2Bfhbm8biML7Qm8sGOqUBIvI8RpEKs%2F7Lv8w37O4F9i3AJJJmfqw%2BKRk09wKd%2Fg1CjqwBOy3VQQH7AgsAANUsl%2Feqx9LfCDf0pmcg3mm%2BdIFMtP93zeW9Eje4tSHPkYFIlYfe6%2FbM7ThHb5evRS8PHCgxTsacC9TlacLZv%2FA8klrWeRTetaniGaCJrTGg%2BHYc7z6iMXJp3trqbPcI%2FG6svcBT3h19ypKMHtNfzkyl69g9dLa4&X-Amz-Signature=0d199112dad2437bd45fd2256a6e4bfa65433c1f62f57f227f67b0f2cfccf35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


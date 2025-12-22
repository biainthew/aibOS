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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRACHZEE%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC%2FYr1j3jyLCEacUkRhnxSZ%2FLxvbhrLaDrBi%2BWwsXR0DgIhAJ6pZ9fqsnD%2FmWbUB9pIt%2Fb7so7fbjnHk4I4c7jfzZjlKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLf2pEr1%2B4vLt7mjwq3AO8Oeh2S%2FrSFo1eHjZWbQgWAqmZVk13tjq31BXwQ31WIqVJZXjWrt1rHU%2F6e1jfslR0osunoODxkc3kLfdmP67emwedg0HIaxDgDDgyz7k%2BiAEPd3c9L6NHChLYrKX88iGz5ZvJ3cIXrK7vMy0wRCGxDLYUluroHfVsKPbnEPPtxtLaJUI6sgq1ydtuNA%2Bwl6pu%2FwMSaE2G9jX3cKEhYeL%2FBZYkL7VPg7q%2FRFY66A5HAQ8ojKaKRU%2FmFISN07nARH8gH172IGaeabCkHcwauY3gLEtBr%2FTx3SeMzJQ4MTR8hPhxw%2BVfasovE%2F0X4ZKQ1OJOQGR3alLm4f6%2FDiO045NYUMnOAbMpPniuFYyWEjYsgwoTLzvWbHZuFvNt2DVRnegbisaXvY4uAlkxiKD1uh%2F9x9TWS2WCSy%2FWcRNc%2BUQclvlr1DAnFWrhmcNws4ddRqiFsHzNfgWpgIm1xdXF3jG7hzAk%2F3JStBSyu1DiB0yslIHud%2BS7m085UZyq7RqUZXKlqAJkgOQgxN7XuNlQZGnYBnZX%2B9JXQytZrLYhcXAbq%2F2qeAlmatSv3C8XB79bvvpCEo7cCPT%2F0L0Qpi2bCWpY%2Fjv7ZqDls3Vezm1StLwValV6QJ4gLfyqt%2B7AzTD0laTKBjqkAebFbKJGhRy0KbsL10hl%2Bb6CWce%2Bebdhh96GILR7bO3Xd7rp668AUPkqtaUk7JksXwcKb3aeUxHz6Hkj7CBVoPYZ0jzC98u6u%2BTc1AaVD7g03oT24ipeZZCvgzH5owMBeVQ2Pzcd7te3Pv%2B2qUCJ%2FWh4YS8UIxqxYmi3rjmkjm3DA8YMWQMRWgEIawFiMRyhqIaElC7Dc0ntcs6wL1WXwIkZIpd%2B&X-Amz-Signature=f590a3b8345bff8d84b2817f655674ef1e6c714eafe60691d851c25e09db9c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


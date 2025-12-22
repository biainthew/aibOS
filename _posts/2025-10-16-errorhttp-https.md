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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YFXLMI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFmtwvHJUod7ojwdvFuyVlVdQCVAq5XsL92lnO5I8E5yAiEAqqxqQ%2FbC8Fx6%2B4BYTXOvk%2B3nLfayPUJmN0y0RD7fs64qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEts6F9CgkuwVWZNvSrcAwPLbBa%2FNA90RdsYwr9Ke1zOawFJAbWh4NPQHearPmGdPNs6d1B8VZTsdUAXjh1x4zbMGE2B5H%2Bh0HU2iFEDt9OxWKwd36wbOf0Qnz8%2BjFZ2vMVs4v4vqL4CRh9%2FJfNQHjp4LpFne4EbXlq%2FsqS7g2LM5mAUJrDmWhcnvwqift0CkGcf4J4MrVGM5jCT8J1Fd7XsRy6CARo9pHW4M%2FcMPO04SekTzhFm%2BHJ2CDnvfSKODvZ1zZA7gNRpi%2FdP9iOlhzMNDJO2E0H%2FXsjiDzQAk0LlXxdxe00CgZLgXSFDmhC97rOCuuk8MungJPG6cUggd02%2FaA4t23EY%2B%2Frinel%2By%2FQYeZCBomqKeS%2BbebJ%2BRaHRPGkEJd0ytGdljd17%2FJY0M5xwPkelMo7Mi2K9qTCPpiH6VKV4GUo5kDee41PMD%2BtnP5VsCKgKB1YiaseCZ%2BD%2FomDPlYATNll86MxOmz8UqqniG8Iivpi4Ue44ppL7iOSD0CsKaeHWkscpl9uhOoojzu4J%2Bd1A4zDPlo4cItMgR1Bsd%2BUdohuqvqUt8hvJLDLOyXNZcKC2Zym3V%2F5qDSDyiy9ZoNPuRCxOlX7%2ByylZvMCHXyyNgf4%2F6OblcErFmq8z1rpbf1gmEKsa9xgcMMv5o8oGOqUBF%2FU9Chw1XkuYTxNYvs5pjVpo5f%2FgQmQZMVu4%2FWWVvBIqXlb5OIzqEmaW%2BUtDP6xm%2FymA4d305bFkbjq9H%2F4HBXAr%2F3ZADxGCC%2FsMnhze%2BEBlEpHyiwOvGmH75q5hjS5kcmNrHx7ZD7f%2FYboGegYFBT5JGitYdnR6C1jTrYXidGLrbpJ0u55Vv6eCiSD9%2Feoy4So4ED9DhGA%2FKTRcl5FUvs%2FDuYME&X-Amz-Signature=eaec65817c01f04e3f52dd9dc3987d4aa5f2f6d77bdc71a2391dc99ee24dcf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


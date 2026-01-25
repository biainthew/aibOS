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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSBRYKU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGD9ZiJkMEI7Pk18YmK5dXB%2FTC6mDQOG2I86FCbhb97KAiAVRv1tlgwovQGO512Xhhed%2Bk8OEMRGyvxP2eN2D0hFDir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMGTRVu904zTr38qk5KtwDsReEXiR2OAK0uhWep0HznjWt9rUalziP2iVAtcwIDiWPj4dLwSAlJf9qqrOIpv8Q99cd%2BnttKHZoFmIU6pGCEBVhXmVohNc5cpuuXAqlM6Nthj0R0Pe3P9sPSW%2FcUlQjB3saxW7Awy3eXgcqWwE%2BYFCyfugRYDAmrws26dsBIqnt59e19vdvAU8RE6cFeo4pEYJNCSw0fuYpBEKpNm2gK8BXWLtgDbhzS2j3C0GbjYfET44Yv3wAoTTqyt6map5AH%2FG6cLiZaiL8s2J8RxorRafQNSfOwNc4t6f9cUiNE7ogvgC62JDaOOfOoo2B1Qy8p7h%2FoTLSqpeNcnrivO8qyA3oPJseAOQgUczMuiyfq2wlGwqNozC1aHkccMsztYchwCMknhV5V9PmofzYP%2BHs6SZmvBc0wBTjsEwT4dvfFniINWStWKgjYHEVtbx6lQXAniQa42NiV0A9hNAWecOv94hvn8nvCy8aR93hW%2BosNnhIX4DsuCseE5bFBXtmhub2WTHaeEfDVQq9XFS7gWOEZbVOcV02p7kOv1e%2BykD8uzE8GaPgSvWvVunxznVzYKL7%2BlZRN%2BjoafFBvxae6ibh%2B8LkYwN6dxohr%2BR2StUfSp43bDlLSh2UGdyVJ%2B0wjNPVywY6pgGtK1lWW5qqrk8j%2B4Rlp6xTQxbSdp8tauOTa6LDfInNAwwJsm9%2FnM%2BwUXr3PTd1mK8hXLgMflf2hYejILB6c2tUmszr2o4mbrBB%2FruiBSRvBCQOhZKTMCVqO2fBmJKxdQogSt8In4A%2Fb3uIuc31csj3sGe9PfQIOauXP0gleiCaQBZmMFn6lZwFMknL%2F8qeyexyZlb7CX1aS%2Fa52f%2FFxIKuM5qINcJy&X-Amz-Signature=abee7d784b33c577865ebde4c465095609288d6a2c373fc4d2afa1c5edb0cebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


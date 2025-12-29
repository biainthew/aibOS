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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJBSJ5J%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSqx1J8bUgO5WgWWbKRs1UaYOuwV96QaoKci23akdyDAiBUZN0ALtJy%2FSu0N31pftGOTPc0KKbH%2B3NBseSPJhudACqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2B6jjiY2bnlId3c%2BKtwD3GWe%2BTNsepx8k5mpjwUTTd2KDzI9yQcnuh3HJhcEuMopC%2B2mRQr31XCLRussmE%2BlEIlWdRpg8NxywfV5BQw9mCjruntkUc0yNw6WfTDJyZCnoEWZ%2FDYSjJk4ZuP4HicSxqCEnK7XonRZ5zD4wW9CIv0P6ajjcy%2BidJDMT2P4SdP11%2Bh8nP7i0zOpBCo4YE4K%2FE0ZJ%2FI%2FXUqelyKccXrUwetkthcakh9XYakvpx%2Fh2paYciv8oWi%2BqWFUX%2Fqg6ATNYU3O5N0HGtAQSn3N08T%2FoFhy3Qo7FrgV5PEJro3LAWDM2MOiGIQaYvfSg%2FJjACJ4dJ91IXN0cFhonPcpIgfZSbUaCPIDV6OJPal3cBBf9igIqF%2BxK3SUGBgKoe41iO8%2Bpb8ovOe15dsU49aV7B%2FUv4GAx9u7bGxLgzck7unxWZY3VHu3wQVSwlbZnvEXHw9ojZUPjNg7FciGsICcVxyxGRn%2FghmGkgjgtg3uwtQkrIH9q94Y9HQBZBuV676aS%2Bcmj5xU3ZYlMSA9pA6xXdFsHtlHrprWlDB86rzvo3XxSIICbQmy85vnYxL9kEtDb%2Fj60Xau7lCUZpTGM4A1zl5YvOklIZrxI5O9tMgNFJ3j2vz9QdMt5G9QWMPZJnAwgpnHygY6pgHyIX%2BXzjLV%2FcBCVGw4TnNeTKvq8QU%2BrATJsr7GRRvSRqo6mt%2Fj6DNJv%2BiRxyXcAflvsRXknaVxXuWYm8vyUrSUwzVmb%2FyA690V865fHjs8Lea4mwVbibcaokXBIcUO6YpC7wryOSNwdSrGUteUI2LF38f7iNIrAwIhEbfzgo1tL2%2B6jc1bv%2FIumrssDl25vwyCqeMk%2BttDFCmXrEmlb3FWsrrx7geM&X-Amz-Signature=b9c1b14f8b7ee3c3fbd990f83e2e26534e53416e6e4337261d5fb954ce7395c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


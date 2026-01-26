---
layout: post
title: "[Error]Port 5000 already in use"
date: 2023-02-13
categories: [general]
tags: [React]
---


: [참고링크](https://mytory.net/archives/13123)


🦁 구글에서 pid 를 찾아서 죽이라는데 죽여도 죽여도 계속 살아나서 이게 뭐지 ..? 하던 중 해답 발견 ..


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/25d0ba87-420d-4830-a8ac-72d52506b04c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLJ55C2%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDXIujnXxMwPs2j2EeBvT7qtHcNgYDCqGeEJtMJJLMkdwIgFFTrmqNMxFkIui35TxoRV2SH4e68OsVVSllXeJu7Q0gq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKeTaxgG9wNXg%2F7hBSrcA5%2F%2BLsB9dxAsDopMLZxK6bD%2FPvNipz2Nv5CHHKGI0sSwXzQcSBkCNO%2BU739bIwg3CbDMqpBkJ3lbTR494MkeFCYPKLD9yRopIKz8yxoK%2Bzc5BGD96gevw8t5h4fPkqaQW6prerfLQbATP7dpkYloT7Sx62dK0QTDZf5vPn3c5GfRUbOcVB2U6%2BexuYTlyL1Bf9FIICS4p6TtLVrngRupV4OvjHoUU%2BcABdnxXT18DMQ%2F2Kcbq4nyu3M0CaLysb3bsPoiUSU79eA3cxs61ZNWY5JOXuyNfbWl1aF6zXwk2Q4wnWuWNWwYytoB5ZPeZ5FrXdV5Xlac1mgsbqBTwi2ps6HVBsLnblSFwLgUfIPawrvUcf95PErFcOFkZ6PELp09%2FFFlLIOfxfGqUuk99ndDibGPLp5n2yrSG9jMGrwOrf5SDqu32r%2BQNtzYAfvnSiwQxG7NzE2WS44yb53QJTst6zMpEgd5P7FuHWQ%2FKP8MAgd%2B28gsLB3C%2BWV00b9uizunbFQ%2F94mYihuBe92LGZYNUFbeViBJLlIcqAPwVhLna14nlJupmWgp%2FDXpcSLlnznsp0Xt%2BF7vnWQ6I2LqO5nTGqdHjbil4TnuCAbDIt6UAsKo9kdZKkoGcze5GZPFMKfZ3MsGOqUBTV5haNYnYI1R9usuer%2FpV00xIgTqyYPJTwrLLSDSYMf9%2Bpd9t9a9%2FS%2FdWkyzaHm%2Bg9YN8yvLzZe7jhuwqZGzVs98%2FoOBU5Jv5HdPOEOr0a9YboEycomNmkVaTcv3whMlrx51ag9oDoZ6kny2esh5bcTlZoF9sq%2FCb8cJHl%2BBPBUx93XUxgluEYPS5WZ%2F6CrEmGDgTjZmlWlx16vVF5wUt%2BQgLJw0&X-Amz-Signature=d11c8d5be7f9c51948af45839ef20c5a961f9b7759cc9eedd6de7d69ed71f972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


어이없게도 맥의 Airplay 가 문제였다 걔가 5000 포트를 사용한다고 한다


그래서 시스템 설정 → Airdrop 및 handoff → AirPlay 수신모드 를 꺼주면 된다


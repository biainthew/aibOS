---
layout: post
title: "[Error]Port 5000 already in use"
date: 2023-02-13
categories: [general]
tags: [React]
excerpt_separator: ""
---



: [참고링크](https://mytory.net/archives/13123)


🦁 구글에서 pid 를 찾아서 죽이라는데 죽여도 죽여도 계속 살아나서 이게 뭐지 ..? 하던 중 해답 발견 ..


👇🏻 오류 코드


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-c8e0219be1fc.png)


👇🏻 해결 방법


어이없게도 맥의 Airplay 가 문제였다 걔가 5000 포트를 사용한다고 한다


그래서 시스템 설정 → Airdrop 및 handoff → AirPlay 수신모드 를 꺼주면 된다


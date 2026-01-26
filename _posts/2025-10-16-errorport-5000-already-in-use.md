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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/25d0ba87-420d-4830-a8ac-72d52506b04c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GCWX7CO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDwbHZhlYb2FRMarBRJLxEkUDSUfa%2F0uZPaWRIc6jeHsAiB41eEJ8CK5mRs3TvSPCYFKiMKUAMqN5s9b5M8B1HdNOSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BICc%2BHk5oVDalLh5KtwDuWLQrrWD7YNPLYXDd3g%2BwJ7eD%2FPUFHKl%2B%2B%2B1KpIMYAv4k4%2BZy6a7qEJuWV2LEEMfnCIktXJwsiwzeN8ZqwTmyOwVGkNwrRS%2F8YYHueiq0ZyuVck%2FQgb0NJJz3HcGNe%2F8hhmhYeFEPeeq5LfC%2B9aQvJrxxFRt2iUUjtnZ1z3Q6zG%2FhKTa79j950sxY7P6IyI4c6TDE0Q2%2Bjh%2Fcot5NKsCcCeTL%2FR4%2FsWUs0xKxFWAJ7YooHcUu6pxuAInf9CquGvlBVpzy4aYJcKfWx%2F2XCVXQ2SVWXVGINLv0XyDwitwbVJXvQAj4RoQmdwkDaeHtcs1A4%2F1rDoIkafrDaFMMtkLNHczPYLEo7niuxTKumlMmKsJ2uwTm9TxHV0TUqUumN90GHvlj8mTYfvxY4Lr1s5l9XuZ9uXEQTPo%2BNwtZB9TRW1eWid5d5CTUhV3qgmUyc94pWIEqBsn4606qlRis74tlXN7xRefZxlKEfb5JiD883nvp8vYCorrlQoDaJQwdI80tu%2Bp0fvPxSV%2BPpjEyO6NmVSKSlK5XSNKMLge6fqBt93v1s5kKu3auItZ%2FlyBaP0%2BnFaabriKdzja%2BuK%2BTUb2gi9BL7P898USJ4JDkbUxtNsVtNCImtYDMm8Dc2cwr%2FvcywY6pgH19pEdwJbdngZZuPp97%2BgZrMIWDT7Qyj72Kys%2BQfGn0UpTtfxQRVYfs7baehDp9zbpK5TNQmDLREFLzyEZ1NZAlpSyT0XtxUSwcXsGeWKh5jg2zxiGCagBAGbUf0paIAxn0paa5803YLy%2FcPAqLOkbWLQorFihfIjIxarg1jh%2FriiOiV3Uqo%2B9lmFbxrjnI53oUL9FzFEdYXfT9AXpdYRkzOxHVBhZ&X-Amz-Signature=713f3e06859ee8f165ed3c7dcf0eee5655152bfbee21370735d778de6a5fdc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


어이없게도 맥의 Airplay 가 문제였다 걔가 5000 포트를 사용한다고 한다


그래서 시스템 설정 → Airdrop 및 handoff → AirPlay 수신모드 를 꺼주면 된다


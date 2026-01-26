---
layout: post
title: "코딩애플JS Part1-31 stack queue"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
---


### 웹 브라우저란


서버에서 받아온 HTML CSS JS 를 실행시켜주는 프로그램


브라우저는 C++ 로 코드가 짜여져 있음


실행해야 할 자바스크립트 코드를 발견하면 C++ 언어로 만들어둔 스택에 넣고 돌림


스택이란 ? 그냥 다 집어넣고 맨 윗줄부터 하나하나 실행시키는 공간


### 처리가 오래 걸리는 코드를 만나면


서버로의 ajax요청, 이벤트리스너, setTimeout 이런 코드들은 처리하기까지 시간이 오래 걸림


ajax 요청은 서버에서 응답을 받기까지 시간이 오래 걸리고 버튼 이벤트 리스너는 사용자가 버튼을 누르기까지 시간이 오래걸림


그래서 그런건 스택에 쌓아서 실행하지 않고 잠깐 보류해뒀다가 완료가 되는 시점에 스택으로 보냄


근데 스택은 항상 존나게 바쁘기 때문에 스택이 텅 빈 시점에 집어넣게 되어있음


그래서 오래걸리는 코드들이 실행준비가 되면 큐에 집어넣고 큐에 있던 코드는 스택으로 옮겨서 실행해주는데 스택이 비어있을 때만 차례로 집어넣어서 실행해줌


(큐는 들어온 순서대로 차례차례 스택으로 옮겨줌)


### 그래서 코드 짤 때 스택을 바쁘게 하면 웹사이트가 버벅일거라는걸 생각하고 짜야됨


### 반복문을 100억번 돌리긴 해야하는데 어쩔까 ?

1. setTimeout 을 이용
2. Web worker 를 이용

![codingapple.com_course-status__%289%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/438c576f-5974-41c7-9c32-0ed4afa53a46/codingapple.com_course-status__%289%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGB22AC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDdEcPyg2xHAW8eqHMldJu2G1jftLYPHbf%2Bfh7rF65SXgIhAMoPcGGmOeFDoZTk%2BuB2jRoOrrfHo3x4Nf4oxAACVY41Kv8DCDoQABoMNjM3NDIzMTgzODA1Igz8iXq%2F2osvW36w%2B0kq3AOwiV1HvDZ7S17iB43O6RNMHR1LKbQdBlF52lD1vqbv2A4ttpisySnXcOlvf0iaTv2zzu7WDHT%2F6NM0TpxAVhG4l4T0FZUkKvu0k7DeNdUt5SydMt6PRxYfwYjcLURJBYwT1pQ1%2FYC0leoCDv5DqZnqxeR9OMEJCgVUzOxFQ4Mm4w3j3kdgiaPCJjEtYtF%2Bt79bznecg%2BUT%2BlU4PKnZNaVnW52I7SgSgXjCU%2BN8mSKQ25uRJ2wRabvEogOEg7ZVJmX4hL4d5KXV6QfQYooWdADvuTujqngh9smbFs8oKDWSruc81Njbhnev2keczX9ttJ8Ssf9m4hNtE7QFGpYVM3nP84skooDzGsfJcG8BISy8xl7FS%2BmT0yEISitppYDKAakU9GchKI8wHf9a67KYE0ImkdRXiCKtVdz%2Bpn2JKmhmtmWRuaXEHFSx0cG5krNhiC50pkDSu81CX2Gaf0p3u2%2Bv%2Fs6JSdlxbrmRtGBVGEdUa6EU7fADrNgehkyJ2UtlqC%2FWdh4W2Q43ZIyUd%2BEL8T5zhjQHF9bRgE2sGxMv1MA1BdrgrtbsYJC8IxE%2FjUnQMwNEL%2FfcQlmGVKf2j77Du7YaG%2BGz6z0DewlA%2BaWvlI8bTTWZ4TLaBLEsyTxC5jCo2dzLBjqkAcFiZaWVBHMBZCkMHaepIeSGhhi1ljDSfyOUFFOZVnLCgCwMagBlgYJb4Sg%2FPFRseSmxcI0pFemBGEOico10%2FzMqBkqgjJwS1JzZri5kAwiFN9qBcyd4TopREldoHZd8wUT9AYOjuaq3AssXQLlXNpifjVx63Wjy%2FeEABsFhzpKCMXt3JiutTRLvf8x3uN%2Bb8UGZNSw%2FjapYAnlxfPmTawjOt4Ge&X-Amz-Signature=8fe77aeb2a02609a7200cd3dc89bc78f53f64412ceafbc181ff4cfcbaf9a9e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


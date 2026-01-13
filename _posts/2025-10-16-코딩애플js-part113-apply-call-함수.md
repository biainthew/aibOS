---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMPGJZP%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDrdU3k%2BmKO2m41qIb1YvkNubZlcEr2Hhda5jcWVpZaXAiBDDy6enYDnOjyN8mSwIGZUNPnP5TkacQICKQEs%2FrrgPSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD11%2FuEz1W87LyX69KtwDSz2RV7jOjtnh%2FhBBP6W%2BgEeoHJKLg0tIwg99NCEwZKlzGlCVisE5NipezRC5TsdzhOrY67yvivexR9m%2BRtj23IjU29L7d%2F2RhqTjVBcAlU%2B8CEAt8fOVIBTWxPHxIpbIhGmvOOY6cNTVMr8pp8t16AAlr2mXKWHwUau4A2FJnqKx2TSCgZKLH6BPPWzKX2kXvXsoQSbNi98%2FFfIj6bTQUzGAbeBQrUab3WBLclInP9xjcVCzp9qb0iJErnjh%2B9fYvar%2B1Lq2IUEg%2F5mBffN5q88YGnX1s6Mkk%2FbaWWH%2FTDeEy0De7PeQudUVN2osR7sWCBS5HeBBw9PXv%2B2ABcmHuY6MEVQP8fCe%2FX2TphqYD9F06ewuZoaAAizi6Q6bmL90sdzdFDkge1r7Yo9urNfWhr2b8J1fgxXa43wCsj2lLchESlQvK4NHOekJ1puVYMeIJf1jkwWg%2BsAcWyRkvOJR5CqK%2B67BxR2xYVEfvh125sb71AAOIlPUeEbp%2F3SWhummff2ZUtuqmrNKd0QN%2Fc71jaSAdlk81pGdAQ%2Fc2UWgOTVY6yS%2BymC%2FE6bBjreJ5jh5toMZskpkr2v2EZO42uHad2fMie%2FDPVSSMqCSoFcplEZCZdnnbi6XVDAtLjYwmq2WywY6pgEnGs4rCIIB54rQvilpaxbPtMt3yKOm5XQviN00nHxTx7iwfxdyD2J77JUBSURnc7UWCxXTKedC2CMxd62V7d8D%2BGrDmSjTINKpIYG2KJL%2FlwbEnXJQwVt%2FMurtEvt1aoOTKiYEGOtIYna2lSpA52uo%2FEvW0WjaWaZmV3n63fn3GfLePEYqo%2BT0qvwsbC3Orq1blCLYQqWdiOABdjMs4mIOlABE04jy&X-Amz-Signature=d25ad37821892f36205cd4a667118a3c1e9e1673cde4bcb2f27308a47b09fec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


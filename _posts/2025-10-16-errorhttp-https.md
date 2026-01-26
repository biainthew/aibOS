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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KWHD2Y%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICw%2F4g%2BRG50ZJ5g7s%2B1E%2BhHonOrzK%2BJU7Umrph5Rgp7zAiEAhbyPP7mjvZTrH%2FrPlnK%2B8DIACPKoIMPU3Ni2a0xDqCcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIQdGF7S6Vh2nOy%2FnyrcAwAoXh6FDy9eI9RmZOlhgaE7bY9C%2BOXWwLvWXI3nvveEaLC%2BtkduFp6nE10WrSPRie9lpSZ3GmAjPOI2wyydsmxvbopQ15LfcJFgqxm%2B8twesnYqw2FAs2NwpQJ2%2Fu5rZoWuyurTn88FZZORPmWBCWvbhR3MnTwPnI%2BFZj5YYpr6rV7ry2PATox19j90wsJf9PrheHtE4b%2BbUEd2mQDNHaio8C%2B1X4MfdRyHCeweKnLqNSAp98Bk%2F7rgKzd%2FQnPSZJLkmQ5y%2BLJJY322e5xnZtfJelcqxbtlR9YHnNXp2zspw5boMHeugy%2F45uwJC07tbZVbqxR4GVjqQxglfSw3TM0Hd1T3GKTsB6CvaF1MAqIcTRwXusuDNdj%2FHeK%2FHn1X%2Fm5VMAsqiPidT8DjsR2wU%2FuBkmcqGn8wd%2FPNHKiKcUA%2F6K4VxcKhbMFRf9ZBLOeFmP1hCBOhh44LyBf6Ddii3dlbk1asTfbvWpT0K1GvQ6YhmV9xsckbI%2FN3iuLntSbnSzes0MQyySpGARxHKXlRWeepftpKJS5Lby5oVoKZdZtUraQ2Znsbwy%2FOPmMeCQlx%2B8mAKABtKwA%2B3o7XhCEhjXg%2FHZIyKNd4NneqkywO7NOAs00%2FeJI6AoniQ1nvMIq33MsGOqUBdAhoutR7ZdrIiFRxmwIfajC116y4uwqZmeBR6P9acvUy%2FOuM2iXzE%2FlfBmqMruaSPosh81K8u2%2B1o4rX2pu07VkN5mZokhj7frragU%2Bf2ROtdcXL4a8ufDKEixTIzklLmFO4mHXTdTtHdnZGOwo0ZWDyGQvt8ft4URLnPQv%2Fi2%2BEb5rf3PMyM%2BPiTaElT05KExJvdgbWJUiIdjbDItLgqkb58w0Z&X-Amz-Signature=9d51a6bf848df83cce08c8af34534eb76e756943c6908f354dcfe495b319ebed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


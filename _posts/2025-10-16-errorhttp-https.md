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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO5D2K2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICZa30GMz8cOTqJ8TtAMAId4qFDjtM5KVR%2F6OUJKgdEbAiEAgyIDcQ07YQW%2BKtewfWVrv9c3d%2Fsru4njV1O%2FOXU3M1QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZS%2FOZN4uiePkKsyrcA%2B%2FV78LF5%2BXeK4AwwnIdIN5Vqo88g8uuZYzT%2Ft0e9Uch1DcPDn%2BrkOwx2nwl48esxkL0ehcZeNDNbyfurAFo1GgKl6cxOmlLPY9Rdow9xOw%2BaoD5Ld5oBRdWIx%2FT%2FW4u%2Bw9iYEQByw6A52XL%2FzJrPG54sd%2BvVbdOaLZrFl1j%2BLzEfY6htxRZbIoc8C5GVQXFQJ3AdFkql%2BAMUNqei7q7QIWUnVaqgAxyLjJaeWaL98nhCncPmLI6p1AO%2BBHc2aYuRRk0If6255uEqG%2FU2HAgOLGpuqnrM0b2tKopuECqPB8IfqIfvdURTpACLMdy%2FXvQTPbyYSllwW9yVVNOsevzg%2BuZJuDiqqaaCz%2B9ExHhG5LEAfp0Nt7WLseswLor2VtP369xcgpz7Y2uu6R1PAKK0GaFLriTOK%2FiiXt%2FcK34fg8tHcyh3Foi9%2FuFXf3Tejl4miE9PrsXtL6KeSkX%2BClubyTkI7NfzqKRvzSQAuwzgt29AI09QrjrTfwGQlvgMfVYfgPXAR9q7tN6k3jnmz198UBrGxsYzfm6hvvreEg%2BtIHoVK1de1FNbojQs4SsMt%2FTlmwtbSLLp9TW9I%2Fu5oqS7Zbv8lS%2FRjRz8G14Vj6tmAxBxw2Ji%2BDoftehezBtMNOVpMoGOqUBu8b1G1yXZyndaz0jwnn5AJmO%2FrSpivutTVjKIe5199D%2FkjlfmblQjR3gKLTO5174kPZkvYnZu89Ndt7m%2B826uTiSwSRFpCmfTWPax032BVP6ykaJW1L2iJ3ymNlj%2B3xzldPH0km%2F10z5sNiieJz9wNgW18Zbde6WCjgUNr9nBauFaYpt8TWFup8n5nj1y1zJfiV5kvt6RBUnBHKHvmKpnjORsB6r&X-Amz-Signature=ca0649aedc8dfa239a3bc9515e854700f74f12cc7c432ac41fd64a1ac6e3b269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


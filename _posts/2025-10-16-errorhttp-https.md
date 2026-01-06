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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EIF4YN%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFaR%2FlZOKIg3p%2B1rfW7SWA3i6g%2B9oOsJhG6v0bNJu0gAiEAgBqJOvPe30WSBo4bpCa3qHj6FzJDze%2B1aTr%2B8jzR3vwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDMMNo8s6Rktjbv1DCrcA3NcrHghZBx%2FkXjR%2FDRRdXrTlOdW8TszO0cvtffRGN39%2BXlQ3oiVJ0rWI%2FbCEc4tTLak5nxaHOkdkbd%2F%2FFUAxSMBALO2sBJeoAJ6BoCqW7aYpUHg2iNlF1r5bQJ1SwrrkLvGT7JxFXhyQbLeSOFHNH7g9RuWqiSyONLKv2w3puyqS60clRqK2urBHdafPWB%2B1IUTozVHGmoPpHY2t0vzR3sWOaImc76o2IPSNL%2BomX63Pu1saybvzCtA7VAEkub2fUtQ1kxP4sndFTR6taR%2FcAEkQ349bEBGCRnAGfNzj1cNYuQipSUV2B37aLcVwDNqe4%2Bzkxgh5K0pMO4I08qnZtk1TN6XdkHpnQF%2BJ5bn5dqCHc9MaUU%2FeMeqO085d%2Bu0ZtLuxHCnqk%2FqtG4Hz7uHpg%2BkVsx18iZgmnc96NbcftXIUW6qfPvQJhleqCYO6Jbt0smuWPiGuSRcXrp8gbXqW37%2B6dPGrBV%2Fk1qpTha6JQswn%2FtVJwtNvK1MovqS2z1HH%2FR5lz5llCQ8xTdMd061RckG5kAsN4jQu3pTTqIoFIhbu6oUql3zOLrlBEtOxkP17NSFTONOyn0E3RA7rPLYYWn8f2QdZkaHBklWv8Ct7oVZLuQiKgP3rW%2BiR5%2FXMOSt8coGOqUB4q4ZMnhvhTb3OAXJ2RMkQ%2BROEWMK%2F5L9o9fMIA%2BAapC0Xsb6o9bNq%2Fl4CRDdW2%2BuGJqpfrRfuknp%2BgMmN4Jbd8cMpdiLO7m5nIbEBIJ6%2FstA2mYBs82%2FzIy5eiyR24qZF4iq5%2Fz3S%2B9w5Yco7SUQCa6CBmgAj77CkNDx4yDZFJY%2FqdmH9rNAUHZJoPAAiIc32Y24AsrAIrsQmJ1%2BNpQgfhKeJETP&X-Amz-Signature=6520386108d28e38caae4e024301aaf71dfc22686e1db346c83e31598b470d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


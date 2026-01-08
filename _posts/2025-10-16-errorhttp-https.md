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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNKZ5IA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBj7ZJWa8uf0dtYyQwY1f5VpNpIuc5Z%2BFeGwGO6rkPAGAiEAu%2BYVdwaFSSrP9D4vibtPuzNz8ENTZuKiaKbzAJBi8RUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhM7Sa9sp0Fd5QQFircA4%2FxkZvJkSlRywiUezRa2LEOvObNscCjS%2BUW%2FSMrQzyoQrRAMEFur3dCu9yiXXypVA39aAA%2B8nSNhsKmVgc74WNLeyzoUG9UckoVJfDQBn7F6pbEebUPTKJqKBez4zpKYp%2BMucKKm1MjGkqau2%2Fg5Txt3SxaCn5IR8ptKtWlXP0Sh50sdCEXSXTfHYB6LpyyqAGLCc%2Bz4eI9zgdZxV9RO2sgVL3HRynlOyaTEAK5djz%2FxABh8Zxol1ty9d84tq%2Fib7sD2jhQVZJJCdILhU0QkWR6bnUhhef%2FZ0Nw%2FXK6QBOmQXmCnyH%2BL6BKgVAcEbS2e8jHEKg%2FtY4WqLjyJtm8U2mn6t9scyiHzpPB27qisaOTIUbKsOhg6IEXyCuS8XzWg9ECc1d7aDnjwjEd5%2F8VE3Bx7dMiN6XqwzpiYA6f66GGUtbnYSrPPz1QJp3RDWuByQX0hfiuB250rMciTaVn6peswt2XMQMWW9KURnHtz40zTsLzYe%2FTnHcHLh3jNz1dfd5lJZYkhaQk08VUhMaJmmSdOTp2sWGnuZYaIT5libLJAn2ZOtsezRwo2LFDgv4twIRFKXIDG0b8M7pg9tqaOexFk7%2B8ur3kEDGfEIDcOTfJ6xRhBwLlrXU8jZ%2F8MJz0%2B8oGOqUBQJsW6Z6LZI9drhNb8TE8NlRu%2BJFLSOFjuqPxWznW4hDNuNYew2HWs3K1i2YHRL5oG2bJJynknAFmDbkZz49mXmlUU%2F50ce6wAL0PQZFbB9RuCiGEY7N2%2B%2BLbxq35uiINe96xlmf%2B%2B%2FYzUREbrcSL%2BdZqQswTqQ0aU%2FRC5trO63M3rmREGIktOOKHpw0%2BR0kf4%2Fuhcz4WUceccdLnG97dYeV9v9Sn&X-Amz-Signature=3d7a5cfaf44b51c8ff42071229abfa8f34cd72855cb300ae39de09085441a530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


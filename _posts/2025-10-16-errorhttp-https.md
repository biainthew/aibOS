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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7V7KZE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFci%2Ft9KPFl2KAhqiIujOaZZjYmtiYtUQmmfjPjfF%2F1vAiA136HGRDeYO3TekVmu%2F65mWxuQR5AiWPClAgCFlbwHnCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIYMb1qCC5eKZnJ3jKtwDYuomG%2FiKQxQN%2Fofi%2F5U2uQcnG7a%2BKzqvHPTfZ28tdZ%2FJ%2BJj1ypghFTmc714VeZvCopRbiIiVquXcCFPuNBK5xSmfp5AMITrbPxS6N4dGHtpUW%2FtBuTrNc2XOvyzjAD1E4VLMpIkgP8VkeNP2Hhpl7Wqa%2FwzXcQCkU%2B9yLrkWDCeym5ApT%2FENII20PnrRUDvnhKhqtdI%2BEf%2BLrySOGvOVwOB8dtEkwVmuQIKoSQ%2BaAVgV6bdxC9F6vcJnAx0JeYJnmT%2FyRyaqODItmVs%2BCEOjZhHDfNxX%2Fmf9pi7AAtmVVqilgJgxb5354%2B%2FsRRxZAOg1Rxp4EJy%2FMtgqTxuaHBVLcH%2Fns0DkZVMAta7xPw4XGRXAtXbBKRy1CvGQM06dqz9jT3rkSjxsQk5ab26iaadybA39NSvl382VavLLxWF1itQgnrxaVFB2QUCxKp3Dyjk31RNDsEq5sMgMP%2B4WeoqvIHFX5e%2B%2FHxGJ1msYJHZwo8RZGGNwwYDgGbZJQ%2ByeJnX5WbWeYScM7qcjNrVLJv595bn864h1v1EKcxXRG1WtoDT0aHVJ%2F3O2n9Y2B7FoPSTlSRmQEjY1HYW4PZgN2vtbVEDguQU0pfgx7I7paOWp%2FLQ8jwNknJ3dW9Y5Noow0o%2FLywY6pgFFukw%2BApGDpVCI5Ek%2FXQDzi0S1K9z1oXNUhxVK6hQCgI5dG7SEWmP3NrzoMAYTk0uUd8w0G%2FZDDq2GL1CL5dT%2Bj33nkXWVgJ9qxr%2FDQTvOPPAmZlIydxadub3%2BP%2FTodEB%2FwXvOdIr%2FmSfPsBtCz9BO2yHcdlprL9eyg5VZjG%2B6Omo%2BeCpYCH7HaZOYA6x%2BGzwNKanKl03fVqyCh%2BLA1EO9PwrFJn3%2F&X-Amz-Signature=aff6fdd61a7f8fe01fe58da2553b3395a0629c9e0c15000c388b0894c9cc8256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


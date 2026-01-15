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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSD5NTNF%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDpJTujSQAdsIWWS4oTPiO4kwLJvVynqT8cELVDmvPhbAIgCVl%2FjqzZKH0IxgtZR2O8mhkH697Dnn%2FK%2BRiBGi%2BmmZIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDN%2FBAkscNe2kLOBlKSrcAywQnJekat8uCILrIwE5EIHJ%2BhYebwg%2BEm1LMZus4hyfMNeI%2Fh%2BvvCWCXpRuN2SqcuXrle0PEFAmDtkkeJm2P9In8R%2FBrLBdGEx6xDLWjdT%2BZcPfVqNEqb0J%2BrJiuX3a%2FOiM8UNzda9yX0gpg27SbCxZFo4Uxi0kyAsczj%2FgdLQyVSeLriEyiqzIU7oqNbIcaHQB72LL5mXAEVz7qpl1%2B4W0jLZM4bORvWMp558G7KAOPGNFu%2FA1mr%2FfrH9%2Fev8ThBoQNr8cnZldIayfnItXZSY%2Bk1neCoreicltIhhkTdRrPjFsZyUXnsePllXWE8Ua2q00xbD794rSRksC7NufBHNKpn%2BRdX7WMTxkXlR8AYK0BsAeW8XjwRFQ%2FUul%2FZliCDHur2dBVm4ZXKiXgY1xTeSlOlyhrgnSsxstGa2x12%2BhLcHa5qXJ71K89qx8h9OqE3R%2BJM8afesEMH40fnqiUWOFZ3vfVuj28SzQE9su6ZlaBgnNX8KQENFpTfLKkPhfVEXTWlfXn4iIolRyhZla1zfmwsNxEpCi9wuW7NljVqfigNi9tv8TzUuQmIKzpbfYl0m5%2BmEoujyHAVlA6e%2FZ7hZnOG6uMb2Eodizma0GUQr%2BwjZxgwDy4OHoy2sJMNDkoMsGOqUBIkMEIvAXsI4h2XKKpY7NOXDxieT1hWofeZe4SKU4LmPLQ9D8MkDG%2FvrrLY%2BHjjozHO57yj7rRnsaNK1D0R5mVE6VNsWdr3MAZApYwcJoLDksTguYBJwML1k0uP%2FSBIJh3OoTixFCP%2BXd9b3tEEnc82kk4IxZqRnv0p8mTBd4lRYl8CXh4CV0Vfu1VD739sa%2BoxNH0N4Exqubxjfans8xVAi2MBhE&X-Amz-Signature=83a05981416be389cc40e76f9d5b81e9b7a0c854735277d7c494738940978547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


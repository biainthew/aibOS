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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE22X2KD%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7bkhppgpoh5GnOO%2BMZee0tAEjwhJkPGm%2BOM1XLgI4iwIhAPTRcPYKJI%2Fjr8fujNdxqirR80Frg%2FASEJxCbfFjMQmbKv8DCHoQABoMNjM3NDIzMTgzODA1IgzH%2BBlcONEiTSk7j3Mq3ANDIwsszGOWko76ygcJ4lTmsrxnp7eozURaOy4uynE7lBjBaNAijrWT0wCb3lEVnmok1jN9rDbDIRKhFdYS1E5ey8LNDMAhhvI5basPW58vxbaM65J8XRIH4enIGvFV5zZ%2FlS4r1tfEYyDUd4qVIkWHacPpVPR4TbU5RBrb56VInjXZPAUKdhtwKJtj161%2Bwy2XYijuQU5Jyxx75Fd%2FVIGJBIiKymXjXTKGcqzgkf7hs4EyF5KnguMdohHQZWuw4KyUYaA3IYHy3VlaKyOBjMpU69hDi9mZAomNWKyUlDhx%2FB9GeW2jsn3KyWIn9F8%2Bs4Q8nuw%2FDIq%2Bcx2js9YEAuudowVcspd2eXH6stIlUK%2FN5ChPBxenstjw0Ss8NpAO1kJtOC2JGJx6o%2Fi6rf9vQdTfIF2oxSgdjEngHqjhIi8lx9hLcVckWQq94D3%2BrMHY2R9x51b1U%2FIpzWRbIU5DYLSWg0ITEAtnttH3uXyiiw%2FZoa7JTGiNKr75T9Du4CvsVLimKcvI%2BKO2p5BqzN5MstAW4fxkzlUtKB5jWkXGeP45Vg8htV3AjGQLccqKcd5x300YIsGr%2F%2F6OQ79hzfaEJUApQ3HxZVK%2F1FrI2zAZ7W%2FT%2BF3ig3UP6mOZZ%2FWqiDDQhMLKBjqkAXgIizp9vXK9%2BgcgbVq6H9GkhaYlP9vfuhEdHmDxZwGqeXDUaQvAReROrbAPa9nUIuyaGHFGM6vNniRhwnEgxlAS62O5n0Ct6DsO0vvU83ocKpmDBjQ8KCOekK%2FcIbKW22ZoqNxSo%2FqHm0e3t%2Fa3yCjEsq3TG6asN2ySsYGp2oHO%2BGEhuk1wOnv5cE1V9r9qThKcdbJa07W2ZQzBzf%2FhLm2x6ZQo&X-Amz-Signature=0f727746bab4d5d7d62bc6d2bc1a47126146012a4e80cd3ecd7fafb335c99c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


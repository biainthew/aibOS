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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZ7M4M4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T090256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDw%2FDy26nYY5shFiADVQf4z41Xbd4GB53SzqepbVaah0gIhAOO2QdtBs0ZiaMKx5K%2F1oBjWAiMFHD5zpYG5qyJQrAC4KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzakHkbMc0UFLVDBIq3ANwQ08SHSHQHGoo1cRqD4Mn3LEezhSClKpOO%2Bi%2B6c4MnxxET3KSjFrYCw9KYOyu1fr7uagZO7RUw44F0iFaAiwv3eaUEES2ymBUSjhsltL5BwO0K1XBoR7DgXQvhwHvjy5epgWGgRG%2FN4NyvbYWx2ADi8WLRSeqNpkdbZ60HEKXVv8YZcDqYtgZRt%2FT%2BKDckt9z87qc4rmNUMJZioMX%2Fl8w5Ej3UZSI%2BZl1qObAj7%2FjumBBZeJm5NjElU1%2FDgCzGCKmtfpTPjsy6R1dpUvd%2BtcgMICxSgMjjMM97R1YrSmqFmy3ET6i3h2%2FNZf8rFx2BegqCe53ibokqkAyEfsIlj1OxqSvaYQv8fYFHjNIsah%2BndKXcIhbxK8lFPWTAKhFDOo6Mfe6E5GFEahx%2FQd9k9fkn1ocGmFFhEiPE1p6CZZhEOAIkDQscuW4HeJ1QpV6Rn%2BiizxqfoHpfde36M3ItMf26yI4335zG%2FUDOJfzzlTAdT2iAgx11iQX8Jh47dnhKsYWON%2BQEqF3ji7xI5N4W15hOQ5Pxog10O79S1Kv0aV94csmc0bcJTlsGa6mnmdkKRH38jI4T3b0VObvK7IJHfszQQhUkZJgNwk7DfwZWyzPjouPDafD%2Fwi4jY%2F3NDDL%2BaPKBjqkAXZ7lg5yzS7tSorXxuAC87ZJZPW6N49iC85q994SaM8GkMiaDO%2FKili2BO29UG4rtSTwKgGBjriketR54Ce4UAilwvTqvu1ds2Q4cCfg5lQowHJLJmCT7SU3aTFRnoZGzwfyLKxJuZmEht8mt2mpfYbWiztenX6ms6%2B6mLnI6jaYlZ%2F0uCcnrsNyFwbe2yvOxZGC5suevj1Movva%2F%2FrsmGgfNk1k&X-Amz-Signature=f709bc6820a82f0ef76a54a5a72fbc1bd05131d0f1ad769171be733e60ea7983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


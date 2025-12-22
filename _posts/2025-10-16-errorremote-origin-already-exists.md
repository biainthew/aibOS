---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
---


[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU3YA477%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T090341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCHyXbiZaXpnzoIBBTGGZvr5s4GwcHD5DEVgklmojBZvcCIQDMb%2B3R1L9YMN5GPAhaw9a%2BM14s3QjeqxpyFNOJDpUPviqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMyiBdcabSsGQZO8IKtwDKb%2B4u7aDq22HQiiTlKeX0IzoDIHxDkfnWAs5qEmUH%2FcEliJ2FbxRYulPQTlh6JfLGqzBEaL0g4B590J5eGTDZWLRtB43rhAexjeC%2BQqVxASPbAHsKpZjLFe0aEF1wPnDcfQTwbINvuCBgBjz%2BR%2Fk1%2BqDbQtUtQxaWRR5PT%2FHOue%2BOMccfeey7x2lxB5JKVWN%2FD8on7snGcB2FBRQrYVZ83yQAPdHIMDkkicDS8wNGMGgjOTdVV5VL6zCFiH47i%2Bw1vvXL0HC1RnJlqdZzlBR4H81dzVdkjjqD1komXTfxRjuxknOzcTqvyga1KZYtosCybLkJhOZaWA89W8VnDirOo%2FuJGJGobUOwaP6HZVlfJCwnGRPz4qn1Oic87UDqIQR6aTEt60sKOOTPOGPK7nbgtgCecTxVr2GMH6G3yEx8jxoFzZEPUr8rQSqioGOCjPJgsvXEz%2F26y2hgFv7rjpB%2Be%2FaMWhTh6OKzZv8W%2BgKQj8CvEp897dNyHSt0qOaA7HUeS6gu5t8GBma9g6KS0lxBoWATLFajtRuFa3RMwP7788WW64S34HK2iFTz54qkyzJpIgKXHY6dTpzZIbNTUtnZ3Ugzyufbt7lx%2B0k5YzyoPO7huHSNODIb5NufCowy%2FmjygY6pgGoXUa45YnIwZee2VpIK0IgOGyMqMkrA5INydx7H1%2FZPZUEBpP9w2%2BjHa8uq%2FMkFIk4WGxNWXGi4lPWvfiMWJEvb5BQvTR1QNnVeuJNimOfzQBI9sJdaYmagKJUVQSdX9ihJgnTzU3R2AXqAQc3D60wB%2FoMQNKj60it10FBbflcv8Riinzl7%2BERNhA70gKX%2BuZZeEy34sUhYriB%2FuVPZD98vajiYncp&X-Amz-Signature=7cd645e12e99a27319e70e35654d40930aa2e353e561e6500407dd08ca337e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


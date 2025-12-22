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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAUWUPM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGzaKCjaB0UkLPoA5%2BP22dmA4YlED9mw06ZVag4YHdibAiBYXv7FDZ52lvYVku4yTRJiEy94nfHVZBEj54EMgS5MECqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZ9zIGisjWg%2BnbkHKtwDcb5PoaWVP5xv%2FTeFsX17sSeHPkIYrfqsmiu%2ByH2lOX8SoomZvEtgBLibw8tXGSRSDEYnvssZV6ye0TE2%2Fk0U%2Bn3k2Vr%2Fp1kcq71QvXOnejoCq5%2Fd9xMu9hqCJWreiabR1Uad9MAgDsFDm%2Fwr%2F5TDxgi4TLmWZbArGKuhwdoQqa8j7WR%2F9X0QEsBsP5PThhRol%2BGHxGGjnRRNynJoAMKAAUbm%2FfcnJK2rDcH2u1RjJceRtlCyZyihvgcA8DFaUeErg4C7pQUPJz3lexw2o6vMPud5FftMAGlDkXRRxCLaABbQe7vM45xkpa%2Bod%2FnPb1w7EkvQINOBLaLi93omaM0zk0p8FBpebKk3OCQ3StpxDDZ0OO2GLMj%2BkemkjAFLYl6TbNuV057OrCIBhAutA4YiMA21yQiX2ocZvM6jS1cYbIU659tcEnocdw6CvkQfvPLCxc8jZbu5H1JGa%2BQO%2BRzGUB%2FiIeZ7ph7uTvedq4EfEP6Jm8nBGuJFM57jGkHUi8tL3OWvDVS0NqHnqJe2JbZz%2F4wUFj5WxHsPpOlKmrT6s0OP5%2Bl0DuxrCtsLB5NPLciqVJ4vaKIKVcX58L7By3103B5zzFAhVFRx4qDf1oKsFVKoSOTccLns4AkwNv4w9JWkygY6pgEC0%2BqSdn%2FUuaEjBo9iKRpQH%2BA4dH9fGvCfFkKfv5t14T8Rz9LHKHGxeAHDs9dzt%2FcMOdvO36b90TedQ4jKvku4WSlTDpTMobyihRgmSqwGFz6zKk64fJuBKYOk%2B5RGNtm5n09hDGvuaTvPvMqduyalw%2BHxnNzkHgq9TzYRtNuAkAK4QehKn0ikXQB%2FkJ1eyDzUJQV4Knz6yQXhc0cgLIpzyRge2btA&X-Amz-Signature=af530fd68522db53f9153f243f97d7935512160473f18b7bac03df477cf831e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


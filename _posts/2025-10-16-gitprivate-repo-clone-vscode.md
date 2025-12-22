---
layout: post
title: "[Git]private repo clone vscode"
date: 2023-06-01
categories: [general]
tags: [Work]
---


> 💡 private repository 는 ssh 기반 인증방식을 사용해야 한다고 함  
> 내가 어제 만든 개인 key 는 무쓸모였던 것 ,,


### 1. private repository 에 invite 를 받고 받은 계정으로 vscode 에서 로그인


### 2. ssh key 생성하기 (git bash 내장 명령어여서 깔려 있어야 함)

1. 터미널에 아래 명령어 입력

    입력하면 id_rsa(개인키) 와 id_rsa.pub(공개키) 이렇게 두가지를 생성해준다


```javascript
ssh-keygen
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAUWUPM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGzaKCjaB0UkLPoA5%2BP22dmA4YlED9mw06ZVag4YHdibAiBYXv7FDZ52lvYVku4yTRJiEy94nfHVZBEj54EMgS5MECqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZ9zIGisjWg%2BnbkHKtwDcb5PoaWVP5xv%2FTeFsX17sSeHPkIYrfqsmiu%2ByH2lOX8SoomZvEtgBLibw8tXGSRSDEYnvssZV6ye0TE2%2Fk0U%2Bn3k2Vr%2Fp1kcq71QvXOnejoCq5%2Fd9xMu9hqCJWreiabR1Uad9MAgDsFDm%2Fwr%2F5TDxgi4TLmWZbArGKuhwdoQqa8j7WR%2F9X0QEsBsP5PThhRol%2BGHxGGjnRRNynJoAMKAAUbm%2FfcnJK2rDcH2u1RjJceRtlCyZyihvgcA8DFaUeErg4C7pQUPJz3lexw2o6vMPud5FftMAGlDkXRRxCLaABbQe7vM45xkpa%2Bod%2FnPb1w7EkvQINOBLaLi93omaM0zk0p8FBpebKk3OCQ3StpxDDZ0OO2GLMj%2BkemkjAFLYl6TbNuV057OrCIBhAutA4YiMA21yQiX2ocZvM6jS1cYbIU659tcEnocdw6CvkQfvPLCxc8jZbu5H1JGa%2BQO%2BRzGUB%2FiIeZ7ph7uTvedq4EfEP6Jm8nBGuJFM57jGkHUi8tL3OWvDVS0NqHnqJe2JbZz%2F4wUFj5WxHsPpOlKmrT6s0OP5%2Bl0DuxrCtsLB5NPLciqVJ4vaKIKVcX58L7By3103B5zzFAhVFRx4qDf1oKsFVKoSOTccLns4AkwNv4w9JWkygY6pgEC0%2BqSdn%2FUuaEjBo9iKRpQH%2BA4dH9fGvCfFkKfv5t14T8Rz9LHKHGxeAHDs9dzt%2FcMOdvO36b90TedQ4jKvku4WSlTDpTMobyihRgmSqwGFz6zKk64fJuBKYOk%2B5RGNtm5n09hDGvuaTvPvMqduyalw%2BHxnNzkHgq9TzYRtNuAkAK4QehKn0ikXQB%2FkJ1eyDzUJQV4Knz6yQXhc0cgLIpzyRge2btA&X-Amz-Signature=1834ee2e40055600ac6f0777343b1f8a82e76d632194089879f2061dc781c9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAUWUPM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGzaKCjaB0UkLPoA5%2BP22dmA4YlED9mw06ZVag4YHdibAiBYXv7FDZ52lvYVku4yTRJiEy94nfHVZBEj54EMgS5MECqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZ9zIGisjWg%2BnbkHKtwDcb5PoaWVP5xv%2FTeFsX17sSeHPkIYrfqsmiu%2ByH2lOX8SoomZvEtgBLibw8tXGSRSDEYnvssZV6ye0TE2%2Fk0U%2Bn3k2Vr%2Fp1kcq71QvXOnejoCq5%2Fd9xMu9hqCJWreiabR1Uad9MAgDsFDm%2Fwr%2F5TDxgi4TLmWZbArGKuhwdoQqa8j7WR%2F9X0QEsBsP5PThhRol%2BGHxGGjnRRNynJoAMKAAUbm%2FfcnJK2rDcH2u1RjJceRtlCyZyihvgcA8DFaUeErg4C7pQUPJz3lexw2o6vMPud5FftMAGlDkXRRxCLaABbQe7vM45xkpa%2Bod%2FnPb1w7EkvQINOBLaLi93omaM0zk0p8FBpebKk3OCQ3StpxDDZ0OO2GLMj%2BkemkjAFLYl6TbNuV057OrCIBhAutA4YiMA21yQiX2ocZvM6jS1cYbIU659tcEnocdw6CvkQfvPLCxc8jZbu5H1JGa%2BQO%2BRzGUB%2FiIeZ7ph7uTvedq4EfEP6Jm8nBGuJFM57jGkHUi8tL3OWvDVS0NqHnqJe2JbZz%2F4wUFj5WxHsPpOlKmrT6s0OP5%2Bl0DuxrCtsLB5NPLciqVJ4vaKIKVcX58L7By3103B5zzFAhVFRx4qDf1oKsFVKoSOTccLns4AkwNv4w9JWkygY6pgEC0%2BqSdn%2FUuaEjBo9iKRpQH%2BA4dH9fGvCfFkKfv5t14T8Rz9LHKHGxeAHDs9dzt%2FcMOdvO36b90TedQ4jKvku4WSlTDpTMobyihRgmSqwGFz6zKk64fJuBKYOk%2B5RGNtm5n09hDGvuaTvPvMqduyalw%2BHxnNzkHgq9TzYRtNuAkAK4QehKn0ikXQB%2FkJ1eyDzUJQV4Knz6yQXhc0cgLIpzyRge2btA&X-Amz-Signature=7f9a4f118b87b327ceb55bd02cb37a8c14cb9bcb6662a5ea9b4a238e8027ec88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAUWUPM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGzaKCjaB0UkLPoA5%2BP22dmA4YlED9mw06ZVag4YHdibAiBYXv7FDZ52lvYVku4yTRJiEy94nfHVZBEj54EMgS5MECqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZ9zIGisjWg%2BnbkHKtwDcb5PoaWVP5xv%2FTeFsX17sSeHPkIYrfqsmiu%2ByH2lOX8SoomZvEtgBLibw8tXGSRSDEYnvssZV6ye0TE2%2Fk0U%2Bn3k2Vr%2Fp1kcq71QvXOnejoCq5%2Fd9xMu9hqCJWreiabR1Uad9MAgDsFDm%2Fwr%2F5TDxgi4TLmWZbArGKuhwdoQqa8j7WR%2F9X0QEsBsP5PThhRol%2BGHxGGjnRRNynJoAMKAAUbm%2FfcnJK2rDcH2u1RjJceRtlCyZyihvgcA8DFaUeErg4C7pQUPJz3lexw2o6vMPud5FftMAGlDkXRRxCLaABbQe7vM45xkpa%2Bod%2FnPb1w7EkvQINOBLaLi93omaM0zk0p8FBpebKk3OCQ3StpxDDZ0OO2GLMj%2BkemkjAFLYl6TbNuV057OrCIBhAutA4YiMA21yQiX2ocZvM6jS1cYbIU659tcEnocdw6CvkQfvPLCxc8jZbu5H1JGa%2BQO%2BRzGUB%2FiIeZ7ph7uTvedq4EfEP6Jm8nBGuJFM57jGkHUi8tL3OWvDVS0NqHnqJe2JbZz%2F4wUFj5WxHsPpOlKmrT6s0OP5%2Bl0DuxrCtsLB5NPLciqVJ4vaKIKVcX58L7By3103B5zzFAhVFRx4qDf1oKsFVKoSOTccLns4AkwNv4w9JWkygY6pgEC0%2BqSdn%2FUuaEjBo9iKRpQH%2BA4dH9fGvCfFkKfv5t14T8Rz9LHKHGxeAHDs9dzt%2FcMOdvO36b90TedQ4jKvku4WSlTDpTMobyihRgmSqwGFz6zKk64fJuBKYOk%2B5RGNtm5n09hDGvuaTvPvMqduyalw%2BHxnNzkHgq9TzYRtNuAkAK4QehKn0ikXQB%2FkJ1eyDzUJQV4Knz6yQXhc0cgLIpzyRge2btA&X-Amz-Signature=5db5c5095cd03e7327791b67135391838b2a13124b93aafab8685e1f7de2591e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAUWUPM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGzaKCjaB0UkLPoA5%2BP22dmA4YlED9mw06ZVag4YHdibAiBYXv7FDZ52lvYVku4yTRJiEy94nfHVZBEj54EMgS5MECqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZ9zIGisjWg%2BnbkHKtwDcb5PoaWVP5xv%2FTeFsX17sSeHPkIYrfqsmiu%2ByH2lOX8SoomZvEtgBLibw8tXGSRSDEYnvssZV6ye0TE2%2Fk0U%2Bn3k2Vr%2Fp1kcq71QvXOnejoCq5%2Fd9xMu9hqCJWreiabR1Uad9MAgDsFDm%2Fwr%2F5TDxgi4TLmWZbArGKuhwdoQqa8j7WR%2F9X0QEsBsP5PThhRol%2BGHxGGjnRRNynJoAMKAAUbm%2FfcnJK2rDcH2u1RjJceRtlCyZyihvgcA8DFaUeErg4C7pQUPJz3lexw2o6vMPud5FftMAGlDkXRRxCLaABbQe7vM45xkpa%2Bod%2FnPb1w7EkvQINOBLaLi93omaM0zk0p8FBpebKk3OCQ3StpxDDZ0OO2GLMj%2BkemkjAFLYl6TbNuV057OrCIBhAutA4YiMA21yQiX2ocZvM6jS1cYbIU659tcEnocdw6CvkQfvPLCxc8jZbu5H1JGa%2BQO%2BRzGUB%2FiIeZ7ph7uTvedq4EfEP6Jm8nBGuJFM57jGkHUi8tL3OWvDVS0NqHnqJe2JbZz%2F4wUFj5WxHsPpOlKmrT6s0OP5%2Bl0DuxrCtsLB5NPLciqVJ4vaKIKVcX58L7By3103B5zzFAhVFRx4qDf1oKsFVKoSOTccLns4AkwNv4w9JWkygY6pgEC0%2BqSdn%2FUuaEjBo9iKRpQH%2BA4dH9fGvCfFkKfv5t14T8Rz9LHKHGxeAHDs9dzt%2FcMOdvO36b90TedQ4jKvku4WSlTDpTMobyihRgmSqwGFz6zKk64fJuBKYOk%2B5RGNtm5n09hDGvuaTvPvMqduyalw%2BHxnNzkHgq9TzYRtNuAkAK4QehKn0ikXQB%2FkJ1eyDzUJQV4Knz6yQXhc0cgLIpzyRge2btA&X-Amz-Signature=cc2330b448628aeebe9cef93c8643ff3eb9af07d0d15fe6ffd6c2a6162acaf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


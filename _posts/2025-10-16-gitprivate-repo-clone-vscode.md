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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KKUCDV%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnipyHMVHNagmKwRoaNjib4IvLLz%2FJPDafyOckQNnB6AiAwDsebo3WwlyXFQYr3COPSExmNi%2BxGgJ7uCMTRXwyfhiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDalrWgqtblcSRo2RKtwD3mqcQFFl5Ms0Di1vQ1zP7637pd4s17n7VVmFi1u2hJA%2BkytUMvOsNvqiUiSmuAq2AuPr7B8agIULfSkjC33L0FdH7NLbqxGa4XOBLpxC%2FKyl0runZTuPRCgQUATpyTIEO40tLrMF9FJ9jDzXTgUhhc9vJLGtkApO1qbwLntAtHsotBE3h7XDZWppTwlAvuuuLY1j7UZhfHh9WSLyVtzCN9OKOpqZ%2BTj9YOzzUV4k%2F6HndYEIlPLJ48DuncdJ%2BTgGjc9QQ%2Fh7znUSuEqmizT2fzGKYrjyF6oUKovre3Iksfx30VXcQCEKoL06KcQwdzRCj6bGnbdfBAev%2F1nFThG3C0ZJp66Owqy3wkALtZ3BIGVoeQzz%2BO5V%2FuMoOkOvuWWcmou07pwGUu5Re4ng65VfaFp2SqKb%2BiyroU31KmgGTpFNNUUsUTjXNdA3E4e12xLp2mM%2FKcA0K%2FFsvLKQcgJwtOPyV8QymwDN51zA8fg7aWgokYAlfED%2BqL8py%2FpbNstoeynOqFFWe92GX%2Ffx6tJFMIQx7ohyuwQk8fnBUHtheN9i1pvDO6%2BXey7jnd7U5TjLe1ctqAVGz9IEznhX9aH7%2BUIewoGR0MD7gNVR%2BTQGtbd0x1GWhz%2B7t3VwLxMwm%2FT7ygY6pgEC%2F5wzXqGyklJwPGwvZu9tM0PKdMFcydV9tzyoYXkVsEL9P%2BmD52uzgo0UGzP16MuymFDcpDzr%2FXrvhebZNFOcn7QkQ8gM%2BMI5%2BKtcDrjL19VHJK0sLpQCwams72IDTj5VfeQ3FAsiGKUIpm5E2KJZZaGL44rDSvxlNrfDJsY%2FO5UTVKszSeBfEB5tkKt6C508vyhw1H%2BvVlHLSlity3BpnR6AJXOB&X-Amz-Signature=7518ea3d797898b891ef26554ea9ad6abfee4484052682b40bdcecbc23689a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KKUCDV%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnipyHMVHNagmKwRoaNjib4IvLLz%2FJPDafyOckQNnB6AiAwDsebo3WwlyXFQYr3COPSExmNi%2BxGgJ7uCMTRXwyfhiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDalrWgqtblcSRo2RKtwD3mqcQFFl5Ms0Di1vQ1zP7637pd4s17n7VVmFi1u2hJA%2BkytUMvOsNvqiUiSmuAq2AuPr7B8agIULfSkjC33L0FdH7NLbqxGa4XOBLpxC%2FKyl0runZTuPRCgQUATpyTIEO40tLrMF9FJ9jDzXTgUhhc9vJLGtkApO1qbwLntAtHsotBE3h7XDZWppTwlAvuuuLY1j7UZhfHh9WSLyVtzCN9OKOpqZ%2BTj9YOzzUV4k%2F6HndYEIlPLJ48DuncdJ%2BTgGjc9QQ%2Fh7znUSuEqmizT2fzGKYrjyF6oUKovre3Iksfx30VXcQCEKoL06KcQwdzRCj6bGnbdfBAev%2F1nFThG3C0ZJp66Owqy3wkALtZ3BIGVoeQzz%2BO5V%2FuMoOkOvuWWcmou07pwGUu5Re4ng65VfaFp2SqKb%2BiyroU31KmgGTpFNNUUsUTjXNdA3E4e12xLp2mM%2FKcA0K%2FFsvLKQcgJwtOPyV8QymwDN51zA8fg7aWgokYAlfED%2BqL8py%2FpbNstoeynOqFFWe92GX%2Ffx6tJFMIQx7ohyuwQk8fnBUHtheN9i1pvDO6%2BXey7jnd7U5TjLe1ctqAVGz9IEznhX9aH7%2BUIewoGR0MD7gNVR%2BTQGtbd0x1GWhz%2B7t3VwLxMwm%2FT7ygY6pgEC%2F5wzXqGyklJwPGwvZu9tM0PKdMFcydV9tzyoYXkVsEL9P%2BmD52uzgo0UGzP16MuymFDcpDzr%2FXrvhebZNFOcn7QkQ8gM%2BMI5%2BKtcDrjL19VHJK0sLpQCwams72IDTj5VfeQ3FAsiGKUIpm5E2KJZZaGL44rDSvxlNrfDJsY%2FO5UTVKszSeBfEB5tkKt6C508vyhw1H%2BvVlHLSlity3BpnR6AJXOB&X-Amz-Signature=150ba5f5762e81b7a614182fe962a06c7fc48b692ed8e0685207d0cb47f3f124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KKUCDV%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnipyHMVHNagmKwRoaNjib4IvLLz%2FJPDafyOckQNnB6AiAwDsebo3WwlyXFQYr3COPSExmNi%2BxGgJ7uCMTRXwyfhiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDalrWgqtblcSRo2RKtwD3mqcQFFl5Ms0Di1vQ1zP7637pd4s17n7VVmFi1u2hJA%2BkytUMvOsNvqiUiSmuAq2AuPr7B8agIULfSkjC33L0FdH7NLbqxGa4XOBLpxC%2FKyl0runZTuPRCgQUATpyTIEO40tLrMF9FJ9jDzXTgUhhc9vJLGtkApO1qbwLntAtHsotBE3h7XDZWppTwlAvuuuLY1j7UZhfHh9WSLyVtzCN9OKOpqZ%2BTj9YOzzUV4k%2F6HndYEIlPLJ48DuncdJ%2BTgGjc9QQ%2Fh7znUSuEqmizT2fzGKYrjyF6oUKovre3Iksfx30VXcQCEKoL06KcQwdzRCj6bGnbdfBAev%2F1nFThG3C0ZJp66Owqy3wkALtZ3BIGVoeQzz%2BO5V%2FuMoOkOvuWWcmou07pwGUu5Re4ng65VfaFp2SqKb%2BiyroU31KmgGTpFNNUUsUTjXNdA3E4e12xLp2mM%2FKcA0K%2FFsvLKQcgJwtOPyV8QymwDN51zA8fg7aWgokYAlfED%2BqL8py%2FpbNstoeynOqFFWe92GX%2Ffx6tJFMIQx7ohyuwQk8fnBUHtheN9i1pvDO6%2BXey7jnd7U5TjLe1ctqAVGz9IEznhX9aH7%2BUIewoGR0MD7gNVR%2BTQGtbd0x1GWhz%2B7t3VwLxMwm%2FT7ygY6pgEC%2F5wzXqGyklJwPGwvZu9tM0PKdMFcydV9tzyoYXkVsEL9P%2BmD52uzgo0UGzP16MuymFDcpDzr%2FXrvhebZNFOcn7QkQ8gM%2BMI5%2BKtcDrjL19VHJK0sLpQCwams72IDTj5VfeQ3FAsiGKUIpm5E2KJZZaGL44rDSvxlNrfDJsY%2FO5UTVKszSeBfEB5tkKt6C508vyhw1H%2BvVlHLSlity3BpnR6AJXOB&X-Amz-Signature=b651535f95765782dfe780aca24bd2a5dc802754e7d1597e0456fa8cad11e709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KKUCDV%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnipyHMVHNagmKwRoaNjib4IvLLz%2FJPDafyOckQNnB6AiAwDsebo3WwlyXFQYr3COPSExmNi%2BxGgJ7uCMTRXwyfhiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDalrWgqtblcSRo2RKtwD3mqcQFFl5Ms0Di1vQ1zP7637pd4s17n7VVmFi1u2hJA%2BkytUMvOsNvqiUiSmuAq2AuPr7B8agIULfSkjC33L0FdH7NLbqxGa4XOBLpxC%2FKyl0runZTuPRCgQUATpyTIEO40tLrMF9FJ9jDzXTgUhhc9vJLGtkApO1qbwLntAtHsotBE3h7XDZWppTwlAvuuuLY1j7UZhfHh9WSLyVtzCN9OKOpqZ%2BTj9YOzzUV4k%2F6HndYEIlPLJ48DuncdJ%2BTgGjc9QQ%2Fh7znUSuEqmizT2fzGKYrjyF6oUKovre3Iksfx30VXcQCEKoL06KcQwdzRCj6bGnbdfBAev%2F1nFThG3C0ZJp66Owqy3wkALtZ3BIGVoeQzz%2BO5V%2FuMoOkOvuWWcmou07pwGUu5Re4ng65VfaFp2SqKb%2BiyroU31KmgGTpFNNUUsUTjXNdA3E4e12xLp2mM%2FKcA0K%2FFsvLKQcgJwtOPyV8QymwDN51zA8fg7aWgokYAlfED%2BqL8py%2FpbNstoeynOqFFWe92GX%2Ffx6tJFMIQx7ohyuwQk8fnBUHtheN9i1pvDO6%2BXey7jnd7U5TjLe1ctqAVGz9IEznhX9aH7%2BUIewoGR0MD7gNVR%2BTQGtbd0x1GWhz%2B7t3VwLxMwm%2FT7ygY6pgEC%2F5wzXqGyklJwPGwvZu9tM0PKdMFcydV9tzyoYXkVsEL9P%2BmD52uzgo0UGzP16MuymFDcpDzr%2FXrvhebZNFOcn7QkQ8gM%2BMI5%2BKtcDrjL19VHJK0sLpQCwams72IDTj5VfeQ3FAsiGKUIpm5E2KJZZaGL44rDSvxlNrfDJsY%2FO5UTVKszSeBfEB5tkKt6C508vyhw1H%2BvVlHLSlity3BpnR6AJXOB&X-Amz-Signature=77c44fa1eaa1bffc6ad52959fdb051e9cfdc67c46682467575a415de1b79f3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


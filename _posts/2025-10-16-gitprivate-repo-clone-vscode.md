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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5KIAJK%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnh7lFIvrKM7ngeoEUMcfmLBKGQ3tb5ey6u%2BO3NrUs3AiEAsNX9n%2F1l0%2FXYrT9ZhuJ2tlRxjZogr%2FGPpW0PYwf0MIUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqcpJCwymBwsrHsLSrcA9Se0z86TGHA4Ukcol3IOwe%2ByLOEl0Duv74hTNA2yKD%2F97nk4TWok0pQUuhq8GUb8Uzc86nhqOBJKeOcDKumUUtHGFXZ%2FT8OCsb8lyUSXG8Fg%2Bm5tshPwSBJTyBsSweMu1z8T838BfKQQ4cIKJXeIdQtA%2FTu0pFpDVNG3rhNG6DXNzVMKXw%2Bh3DeMw1L8c5h1l3IfxDE2HdNdUU1Jxynd%2Bzg901RZJ403reFTagtKtYJblePPwuAFxsSOV4lftlUC8Vcde4xB0laS8QV3ebVT5fNBZHyTRXANtM6QlN85y3C8jl7NlVwfdT%2Ff4tfUM0Ya484xuQBKr2ohJsZPx3rgZ21w8B8XAw%2Fa67n3GOgTh3xEfTyn574I6ILiQ4tmG25UMIai1owP6KKp0kJrBbXGbfmdEEWlhm9j8WngaoKEQuLJWnED4sVYApkBT2%2BMNjrZhPgoi%2B0ZyS%2F5MgmGG91coAqdBcQhGi3utEYXLwoL8C3pQPBQrJ6PH35IIXFnaE0w7fECIgd2Gqbpp3GWLalC0MhgQZyFnpr9WM%2BEgZ6cxTJU3FdHQG0iJYXHC%2BiFlNOvZMwlduwfuqJ3b%2FoPuyZTm%2Fqxv18lo7sFnfIyHKwMa7QeqwnlL0bEc9TGWGVMMq4y8oGOqUB8PGeRdxQva5nRa1rdHwxSNIzB%2BzTQPXXKQ8sNVGpR0Zbo8dBi44gCdFTVZ8l3YQHB91oD5VNToTk6zotJhEwEyIG2ywFSG80laPj7BAoTnrJJoNHCOLDaFAQu8KrRfD7T1aKQ5x1ughMIagHxcuSe2bdSQMlauYTX071l2QWSBYsWaZcF9xSCYzHe61zixSOVNnvsVFIzih0qqmLgj66Xp9s%2FZe5&X-Amz-Signature=17e079f01c8ed0dae16abd6bdf6a5bb967edd4d34b2946c4f7280fbb490ef51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5KIAJK%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnh7lFIvrKM7ngeoEUMcfmLBKGQ3tb5ey6u%2BO3NrUs3AiEAsNX9n%2F1l0%2FXYrT9ZhuJ2tlRxjZogr%2FGPpW0PYwf0MIUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqcpJCwymBwsrHsLSrcA9Se0z86TGHA4Ukcol3IOwe%2ByLOEl0Duv74hTNA2yKD%2F97nk4TWok0pQUuhq8GUb8Uzc86nhqOBJKeOcDKumUUtHGFXZ%2FT8OCsb8lyUSXG8Fg%2Bm5tshPwSBJTyBsSweMu1z8T838BfKQQ4cIKJXeIdQtA%2FTu0pFpDVNG3rhNG6DXNzVMKXw%2Bh3DeMw1L8c5h1l3IfxDE2HdNdUU1Jxynd%2Bzg901RZJ403reFTagtKtYJblePPwuAFxsSOV4lftlUC8Vcde4xB0laS8QV3ebVT5fNBZHyTRXANtM6QlN85y3C8jl7NlVwfdT%2Ff4tfUM0Ya484xuQBKr2ohJsZPx3rgZ21w8B8XAw%2Fa67n3GOgTh3xEfTyn574I6ILiQ4tmG25UMIai1owP6KKp0kJrBbXGbfmdEEWlhm9j8WngaoKEQuLJWnED4sVYApkBT2%2BMNjrZhPgoi%2B0ZyS%2F5MgmGG91coAqdBcQhGi3utEYXLwoL8C3pQPBQrJ6PH35IIXFnaE0w7fECIgd2Gqbpp3GWLalC0MhgQZyFnpr9WM%2BEgZ6cxTJU3FdHQG0iJYXHC%2BiFlNOvZMwlduwfuqJ3b%2FoPuyZTm%2Fqxv18lo7sFnfIyHKwMa7QeqwnlL0bEc9TGWGVMMq4y8oGOqUB8PGeRdxQva5nRa1rdHwxSNIzB%2BzTQPXXKQ8sNVGpR0Zbo8dBi44gCdFTVZ8l3YQHB91oD5VNToTk6zotJhEwEyIG2ywFSG80laPj7BAoTnrJJoNHCOLDaFAQu8KrRfD7T1aKQ5x1ughMIagHxcuSe2bdSQMlauYTX071l2QWSBYsWaZcF9xSCYzHe61zixSOVNnvsVFIzih0qqmLgj66Xp9s%2FZe5&X-Amz-Signature=2ae5b6d8c37ab3dcec2bce83729c1f37b447240167da09fc36862e8754cdbba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5KIAJK%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnh7lFIvrKM7ngeoEUMcfmLBKGQ3tb5ey6u%2BO3NrUs3AiEAsNX9n%2F1l0%2FXYrT9ZhuJ2tlRxjZogr%2FGPpW0PYwf0MIUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqcpJCwymBwsrHsLSrcA9Se0z86TGHA4Ukcol3IOwe%2ByLOEl0Duv74hTNA2yKD%2F97nk4TWok0pQUuhq8GUb8Uzc86nhqOBJKeOcDKumUUtHGFXZ%2FT8OCsb8lyUSXG8Fg%2Bm5tshPwSBJTyBsSweMu1z8T838BfKQQ4cIKJXeIdQtA%2FTu0pFpDVNG3rhNG6DXNzVMKXw%2Bh3DeMw1L8c5h1l3IfxDE2HdNdUU1Jxynd%2Bzg901RZJ403reFTagtKtYJblePPwuAFxsSOV4lftlUC8Vcde4xB0laS8QV3ebVT5fNBZHyTRXANtM6QlN85y3C8jl7NlVwfdT%2Ff4tfUM0Ya484xuQBKr2ohJsZPx3rgZ21w8B8XAw%2Fa67n3GOgTh3xEfTyn574I6ILiQ4tmG25UMIai1owP6KKp0kJrBbXGbfmdEEWlhm9j8WngaoKEQuLJWnED4sVYApkBT2%2BMNjrZhPgoi%2B0ZyS%2F5MgmGG91coAqdBcQhGi3utEYXLwoL8C3pQPBQrJ6PH35IIXFnaE0w7fECIgd2Gqbpp3GWLalC0MhgQZyFnpr9WM%2BEgZ6cxTJU3FdHQG0iJYXHC%2BiFlNOvZMwlduwfuqJ3b%2FoPuyZTm%2Fqxv18lo7sFnfIyHKwMa7QeqwnlL0bEc9TGWGVMMq4y8oGOqUB8PGeRdxQva5nRa1rdHwxSNIzB%2BzTQPXXKQ8sNVGpR0Zbo8dBi44gCdFTVZ8l3YQHB91oD5VNToTk6zotJhEwEyIG2ywFSG80laPj7BAoTnrJJoNHCOLDaFAQu8KrRfD7T1aKQ5x1ughMIagHxcuSe2bdSQMlauYTX071l2QWSBYsWaZcF9xSCYzHe61zixSOVNnvsVFIzih0qqmLgj66Xp9s%2FZe5&X-Amz-Signature=c90efd3cf0f91e08dadfeee4ede24d435664730389f0746d5922e25fdc5614da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5KIAJK%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnh7lFIvrKM7ngeoEUMcfmLBKGQ3tb5ey6u%2BO3NrUs3AiEAsNX9n%2F1l0%2FXYrT9ZhuJ2tlRxjZogr%2FGPpW0PYwf0MIUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqcpJCwymBwsrHsLSrcA9Se0z86TGHA4Ukcol3IOwe%2ByLOEl0Duv74hTNA2yKD%2F97nk4TWok0pQUuhq8GUb8Uzc86nhqOBJKeOcDKumUUtHGFXZ%2FT8OCsb8lyUSXG8Fg%2Bm5tshPwSBJTyBsSweMu1z8T838BfKQQ4cIKJXeIdQtA%2FTu0pFpDVNG3rhNG6DXNzVMKXw%2Bh3DeMw1L8c5h1l3IfxDE2HdNdUU1Jxynd%2Bzg901RZJ403reFTagtKtYJblePPwuAFxsSOV4lftlUC8Vcde4xB0laS8QV3ebVT5fNBZHyTRXANtM6QlN85y3C8jl7NlVwfdT%2Ff4tfUM0Ya484xuQBKr2ohJsZPx3rgZ21w8B8XAw%2Fa67n3GOgTh3xEfTyn574I6ILiQ4tmG25UMIai1owP6KKp0kJrBbXGbfmdEEWlhm9j8WngaoKEQuLJWnED4sVYApkBT2%2BMNjrZhPgoi%2B0ZyS%2F5MgmGG91coAqdBcQhGi3utEYXLwoL8C3pQPBQrJ6PH35IIXFnaE0w7fECIgd2Gqbpp3GWLalC0MhgQZyFnpr9WM%2BEgZ6cxTJU3FdHQG0iJYXHC%2BiFlNOvZMwlduwfuqJ3b%2FoPuyZTm%2Fqxv18lo7sFnfIyHKwMa7QeqwnlL0bEc9TGWGVMMq4y8oGOqUB8PGeRdxQva5nRa1rdHwxSNIzB%2BzTQPXXKQ8sNVGpR0Zbo8dBi44gCdFTVZ8l3YQHB91oD5VNToTk6zotJhEwEyIG2ywFSG80laPj7BAoTnrJJoNHCOLDaFAQu8KrRfD7T1aKQ5x1ughMIagHxcuSe2bdSQMlauYTX071l2QWSBYsWaZcF9xSCYzHe61zixSOVNnvsVFIzih0qqmLgj66Xp9s%2FZe5&X-Amz-Signature=71ccf2e4cd5989c1f4aa77e8d005ae08fd6a342a807bd1ff8c314ae97a1f61f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


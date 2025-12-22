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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2ICNII%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICjVC9pptPUDcrS1TKnkcxHEHVHaTkuj1RYXm9mv7vTxAiEA2XNi7p4zTdvIGMI%2FMMCa10J%2FrU0M%2F%2FZE47FG5RAQpDIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJtPom%2BsQdYEviPyrcA92ocfUn7tNqyrb3Ny1LCHm7lkmY80NRa0tmwvIsRZ3cx9tOpOMpqn9Hk%2Br9eIDXXqGD3ZPdK0ZuXj1EqZg%2FGKkiBmtN%2FK8yyiDfFmgZ6%2B7qF9U9MXNfYZ7sx80Khc7ha3thxaEq5CG4jHS1nvOpdCUivvOH23FXdDjNUUXDDDPXRBisu14cVh0tOKF31DW5P1%2FN3xYG88V929udqmkLs8wa76QShf7nuiUGm78V20XvysXjgfZtl3G40iTaWUva8aJhm%2Feb8LVRPGoseKYDCNck8YFuOGb2nT%2BqP3tZ16AywKXG8PuFR3fS4%2BkkR%2FEy7I7nFviicODzU2Mqu4skfeOxbq4BHtGiMK%2BQdbnCHwBl7bPta02b8BbYa%2FdJnBvH7r93zH1RYy0H7Nx0YdI7im4s6%2Fbbfl3N4tmfmV5NnzIULEHebYDh3GLBQSG0vneGXUQGaTAmLsIJnT7QMCCq3m36c8Ur%2FMQ8Z%2B353QfkbeNTzvjve6UKJEQ3OucoYAMdPtY1l9uCKu1wzrmsMe15jLvMESTkU4elqkV%2FE%2Fhw6KHP2jQ8s2fy28Na%2B3uTXdfYAAB%2BeY8yjQ6mIIw6CbmbXPLRh7d77toIbikb87oCEcobovn0i8BUoI6%2FOOAIMPOVpMoGOqUB2XAkRXmRtLGPCa5bPQ238%2FrReIG3YKZlrLBOQUjrSFSvSj6c4iudOWmhQ2jV%2F%2BA9BW2Gpm7ZdcguE1Sv8M78b3lAQkjW1QRoWwdDmO%2BFUwWaUybQ0%2Bv%2FQvr7Ht3aR%2BRUum6rTU2%2B4n7GXagoesSe16IcjriXM0EKun7W3X1e3iF9HR8UaBi6eRXBLpkrZOBdu%2BMThQ%2BeYJlivdnCVIFyEJmffMyp&X-Amz-Signature=76dc2a2bd0cd57510daa3a6945ac38276860a6034a1a42d058006beeb2d31338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2ICNII%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICjVC9pptPUDcrS1TKnkcxHEHVHaTkuj1RYXm9mv7vTxAiEA2XNi7p4zTdvIGMI%2FMMCa10J%2FrU0M%2F%2FZE47FG5RAQpDIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJtPom%2BsQdYEviPyrcA92ocfUn7tNqyrb3Ny1LCHm7lkmY80NRa0tmwvIsRZ3cx9tOpOMpqn9Hk%2Br9eIDXXqGD3ZPdK0ZuXj1EqZg%2FGKkiBmtN%2FK8yyiDfFmgZ6%2B7qF9U9MXNfYZ7sx80Khc7ha3thxaEq5CG4jHS1nvOpdCUivvOH23FXdDjNUUXDDDPXRBisu14cVh0tOKF31DW5P1%2FN3xYG88V929udqmkLs8wa76QShf7nuiUGm78V20XvysXjgfZtl3G40iTaWUva8aJhm%2Feb8LVRPGoseKYDCNck8YFuOGb2nT%2BqP3tZ16AywKXG8PuFR3fS4%2BkkR%2FEy7I7nFviicODzU2Mqu4skfeOxbq4BHtGiMK%2BQdbnCHwBl7bPta02b8BbYa%2FdJnBvH7r93zH1RYy0H7Nx0YdI7im4s6%2Fbbfl3N4tmfmV5NnzIULEHebYDh3GLBQSG0vneGXUQGaTAmLsIJnT7QMCCq3m36c8Ur%2FMQ8Z%2B353QfkbeNTzvjve6UKJEQ3OucoYAMdPtY1l9uCKu1wzrmsMe15jLvMESTkU4elqkV%2FE%2Fhw6KHP2jQ8s2fy28Na%2B3uTXdfYAAB%2BeY8yjQ6mIIw6CbmbXPLRh7d77toIbikb87oCEcobovn0i8BUoI6%2FOOAIMPOVpMoGOqUB2XAkRXmRtLGPCa5bPQ238%2FrReIG3YKZlrLBOQUjrSFSvSj6c4iudOWmhQ2jV%2F%2BA9BW2Gpm7ZdcguE1Sv8M78b3lAQkjW1QRoWwdDmO%2BFUwWaUybQ0%2Bv%2FQvr7Ht3aR%2BRUum6rTU2%2B4n7GXagoesSe16IcjriXM0EKun7W3X1e3iF9HR8UaBi6eRXBLpkrZOBdu%2BMThQ%2BeYJlivdnCVIFyEJmffMyp&X-Amz-Signature=57b53b2abe476d5ced38f66df5f0fa4969df63216d518d895e3de19bd83a75da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2ICNII%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICjVC9pptPUDcrS1TKnkcxHEHVHaTkuj1RYXm9mv7vTxAiEA2XNi7p4zTdvIGMI%2FMMCa10J%2FrU0M%2F%2FZE47FG5RAQpDIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJtPom%2BsQdYEviPyrcA92ocfUn7tNqyrb3Ny1LCHm7lkmY80NRa0tmwvIsRZ3cx9tOpOMpqn9Hk%2Br9eIDXXqGD3ZPdK0ZuXj1EqZg%2FGKkiBmtN%2FK8yyiDfFmgZ6%2B7qF9U9MXNfYZ7sx80Khc7ha3thxaEq5CG4jHS1nvOpdCUivvOH23FXdDjNUUXDDDPXRBisu14cVh0tOKF31DW5P1%2FN3xYG88V929udqmkLs8wa76QShf7nuiUGm78V20XvysXjgfZtl3G40iTaWUva8aJhm%2Feb8LVRPGoseKYDCNck8YFuOGb2nT%2BqP3tZ16AywKXG8PuFR3fS4%2BkkR%2FEy7I7nFviicODzU2Mqu4skfeOxbq4BHtGiMK%2BQdbnCHwBl7bPta02b8BbYa%2FdJnBvH7r93zH1RYy0H7Nx0YdI7im4s6%2Fbbfl3N4tmfmV5NnzIULEHebYDh3GLBQSG0vneGXUQGaTAmLsIJnT7QMCCq3m36c8Ur%2FMQ8Z%2B353QfkbeNTzvjve6UKJEQ3OucoYAMdPtY1l9uCKu1wzrmsMe15jLvMESTkU4elqkV%2FE%2Fhw6KHP2jQ8s2fy28Na%2B3uTXdfYAAB%2BeY8yjQ6mIIw6CbmbXPLRh7d77toIbikb87oCEcobovn0i8BUoI6%2FOOAIMPOVpMoGOqUB2XAkRXmRtLGPCa5bPQ238%2FrReIG3YKZlrLBOQUjrSFSvSj6c4iudOWmhQ2jV%2F%2BA9BW2Gpm7ZdcguE1Sv8M78b3lAQkjW1QRoWwdDmO%2BFUwWaUybQ0%2Bv%2FQvr7Ht3aR%2BRUum6rTU2%2B4n7GXagoesSe16IcjriXM0EKun7W3X1e3iF9HR8UaBi6eRXBLpkrZOBdu%2BMThQ%2BeYJlivdnCVIFyEJmffMyp&X-Amz-Signature=f4b6da67a87e5682cb42aea636bc98abb37023bdd705001493c3e8c319b20852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2ICNII%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICjVC9pptPUDcrS1TKnkcxHEHVHaTkuj1RYXm9mv7vTxAiEA2XNi7p4zTdvIGMI%2FMMCa10J%2FrU0M%2F%2FZE47FG5RAQpDIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJtPom%2BsQdYEviPyrcA92ocfUn7tNqyrb3Ny1LCHm7lkmY80NRa0tmwvIsRZ3cx9tOpOMpqn9Hk%2Br9eIDXXqGD3ZPdK0ZuXj1EqZg%2FGKkiBmtN%2FK8yyiDfFmgZ6%2B7qF9U9MXNfYZ7sx80Khc7ha3thxaEq5CG4jHS1nvOpdCUivvOH23FXdDjNUUXDDDPXRBisu14cVh0tOKF31DW5P1%2FN3xYG88V929udqmkLs8wa76QShf7nuiUGm78V20XvysXjgfZtl3G40iTaWUva8aJhm%2Feb8LVRPGoseKYDCNck8YFuOGb2nT%2BqP3tZ16AywKXG8PuFR3fS4%2BkkR%2FEy7I7nFviicODzU2Mqu4skfeOxbq4BHtGiMK%2BQdbnCHwBl7bPta02b8BbYa%2FdJnBvH7r93zH1RYy0H7Nx0YdI7im4s6%2Fbbfl3N4tmfmV5NnzIULEHebYDh3GLBQSG0vneGXUQGaTAmLsIJnT7QMCCq3m36c8Ur%2FMQ8Z%2B353QfkbeNTzvjve6UKJEQ3OucoYAMdPtY1l9uCKu1wzrmsMe15jLvMESTkU4elqkV%2FE%2Fhw6KHP2jQ8s2fy28Na%2B3uTXdfYAAB%2BeY8yjQ6mIIw6CbmbXPLRh7d77toIbikb87oCEcobovn0i8BUoI6%2FOOAIMPOVpMoGOqUB2XAkRXmRtLGPCa5bPQ238%2FrReIG3YKZlrLBOQUjrSFSvSj6c4iudOWmhQ2jV%2F%2BA9BW2Gpm7ZdcguE1Sv8M78b3lAQkjW1QRoWwdDmO%2BFUwWaUybQ0%2Bv%2FQvr7Ht3aR%2BRUum6rTU2%2B4n7GXagoesSe16IcjriXM0EKun7W3X1e3iF9HR8UaBi6eRXBLpkrZOBdu%2BMThQ%2BeYJlivdnCVIFyEJmffMyp&X-Amz-Signature=2ec510cda130a45b6ca0bc716ae33e91551ed4e793fba4efc02e8aafe3ffd11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


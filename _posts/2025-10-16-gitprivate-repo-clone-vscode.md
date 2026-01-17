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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633C6YL5A%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzWpm7AzjUTH5TTk9LMpXNZQdEW7tn6PcDzJnwfpQFuAiBADVq2jt8VwDdIh41oW7BfqDuReQ4hVMKEvgjghg5KjCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMyhzy5LbkIKyLTtenKtwDC5j2h94QceFi5V2MEKZ6dL4zt6aAMQGKeUccosLHjSvrvfzvfxANKrw0z1cueiwoVCCxAW9%2FJF7%2F2RNYZNfzcDv%2FHT8yK9OC286B0ofBzFHz1NpgY9weR4A4VLC%2FRmyXQnF3%2BcdIUtjW4at69riuJsYQ5J3IuIjSDmhQBc2oesJrjEcAz7gkGM9vdSJG7246Yc6iXsJS92he%2BOSQWo%2FlBMtNI%2FFbqSwEXySHjCWiPJELEaoBWqKXobOdMpGNYh0Aa8lfBjrvs44bRHMv8vS6ChOxROH%2BKgfMFKbObh8aYdnaqJ%2BudUIdOtN%2FDOR9Pvz%2B%2BGMjlnzhRHi%2FtXGkzlEgVG6c%2F9vOnpA2Og11HQMDpI7kM6QpGKYEpQs29TZ6UIked5e2uhEkPP315YKRFBxOFYzglJbx4opOQWzy5K%2B9uVIDeX19W3HsmBEOlFnb%2FKNics29K9fhf0x9tveZ%2FCPvTeKRXPO8yCZVLus5fB1Z1D3t8N9J5BLodfbRoyaUqUgHF4SORYJW86pans2INZd2Jh%2B0a0her2ae%2FPZezIivJgFiB617igBm10Z%2Fab9ylx8%2Fqk3P2wAlSX5w7j26x64rDP7xmm6Njv%2FbUl5FSw2o8negbBnJCrLSXVUSr0gwgbOrywY6pgGMmz7SFCR%2B3SOxe7Xusr1zaLJV0PFa13JNA55453mPiWEtVZ0eCCwgThLs132j7uD9Ypuab1J48vrTRXK475SWkxbU22I6IZsmydqNhGy0YZ77qG0GgyNgJJ5%2BJUNgz0iLxiVCUIJOC9CNP6GOGYLmDpt0ZdiKS3tXmzWLHs5ETy0HRJ8GILZgG0pE1kiYwrcLAuK5ZxTwGrId3yGzYSdkO6rmWyVF&X-Amz-Signature=ca7d9f6f2b1e39318230e2c31328a853e520e56b6b2c0c46e98605219bdf877c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633C6YL5A%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzWpm7AzjUTH5TTk9LMpXNZQdEW7tn6PcDzJnwfpQFuAiBADVq2jt8VwDdIh41oW7BfqDuReQ4hVMKEvgjghg5KjCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMyhzy5LbkIKyLTtenKtwDC5j2h94QceFi5V2MEKZ6dL4zt6aAMQGKeUccosLHjSvrvfzvfxANKrw0z1cueiwoVCCxAW9%2FJF7%2F2RNYZNfzcDv%2FHT8yK9OC286B0ofBzFHz1NpgY9weR4A4VLC%2FRmyXQnF3%2BcdIUtjW4at69riuJsYQ5J3IuIjSDmhQBc2oesJrjEcAz7gkGM9vdSJG7246Yc6iXsJS92he%2BOSQWo%2FlBMtNI%2FFbqSwEXySHjCWiPJELEaoBWqKXobOdMpGNYh0Aa8lfBjrvs44bRHMv8vS6ChOxROH%2BKgfMFKbObh8aYdnaqJ%2BudUIdOtN%2FDOR9Pvz%2B%2BGMjlnzhRHi%2FtXGkzlEgVG6c%2F9vOnpA2Og11HQMDpI7kM6QpGKYEpQs29TZ6UIked5e2uhEkPP315YKRFBxOFYzglJbx4opOQWzy5K%2B9uVIDeX19W3HsmBEOlFnb%2FKNics29K9fhf0x9tveZ%2FCPvTeKRXPO8yCZVLus5fB1Z1D3t8N9J5BLodfbRoyaUqUgHF4SORYJW86pans2INZd2Jh%2B0a0her2ae%2FPZezIivJgFiB617igBm10Z%2Fab9ylx8%2Fqk3P2wAlSX5w7j26x64rDP7xmm6Njv%2FbUl5FSw2o8negbBnJCrLSXVUSr0gwgbOrywY6pgGMmz7SFCR%2B3SOxe7Xusr1zaLJV0PFa13JNA55453mPiWEtVZ0eCCwgThLs132j7uD9Ypuab1J48vrTRXK475SWkxbU22I6IZsmydqNhGy0YZ77qG0GgyNgJJ5%2BJUNgz0iLxiVCUIJOC9CNP6GOGYLmDpt0ZdiKS3tXmzWLHs5ETy0HRJ8GILZgG0pE1kiYwrcLAuK5ZxTwGrId3yGzYSdkO6rmWyVF&X-Amz-Signature=d8bd5060e76faae04aeff691188b93410fabdf88f7191e201cba98d5ef77f6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633C6YL5A%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzWpm7AzjUTH5TTk9LMpXNZQdEW7tn6PcDzJnwfpQFuAiBADVq2jt8VwDdIh41oW7BfqDuReQ4hVMKEvgjghg5KjCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMyhzy5LbkIKyLTtenKtwDC5j2h94QceFi5V2MEKZ6dL4zt6aAMQGKeUccosLHjSvrvfzvfxANKrw0z1cueiwoVCCxAW9%2FJF7%2F2RNYZNfzcDv%2FHT8yK9OC286B0ofBzFHz1NpgY9weR4A4VLC%2FRmyXQnF3%2BcdIUtjW4at69riuJsYQ5J3IuIjSDmhQBc2oesJrjEcAz7gkGM9vdSJG7246Yc6iXsJS92he%2BOSQWo%2FlBMtNI%2FFbqSwEXySHjCWiPJELEaoBWqKXobOdMpGNYh0Aa8lfBjrvs44bRHMv8vS6ChOxROH%2BKgfMFKbObh8aYdnaqJ%2BudUIdOtN%2FDOR9Pvz%2B%2BGMjlnzhRHi%2FtXGkzlEgVG6c%2F9vOnpA2Og11HQMDpI7kM6QpGKYEpQs29TZ6UIked5e2uhEkPP315YKRFBxOFYzglJbx4opOQWzy5K%2B9uVIDeX19W3HsmBEOlFnb%2FKNics29K9fhf0x9tveZ%2FCPvTeKRXPO8yCZVLus5fB1Z1D3t8N9J5BLodfbRoyaUqUgHF4SORYJW86pans2INZd2Jh%2B0a0her2ae%2FPZezIivJgFiB617igBm10Z%2Fab9ylx8%2Fqk3P2wAlSX5w7j26x64rDP7xmm6Njv%2FbUl5FSw2o8negbBnJCrLSXVUSr0gwgbOrywY6pgGMmz7SFCR%2B3SOxe7Xusr1zaLJV0PFa13JNA55453mPiWEtVZ0eCCwgThLs132j7uD9Ypuab1J48vrTRXK475SWkxbU22I6IZsmydqNhGy0YZ77qG0GgyNgJJ5%2BJUNgz0iLxiVCUIJOC9CNP6GOGYLmDpt0ZdiKS3tXmzWLHs5ETy0HRJ8GILZgG0pE1kiYwrcLAuK5ZxTwGrId3yGzYSdkO6rmWyVF&X-Amz-Signature=281b932720e4d669ec3fb3a387d432000fd0a14d360f844c119b2a4990c4ca55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633C6YL5A%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzWpm7AzjUTH5TTk9LMpXNZQdEW7tn6PcDzJnwfpQFuAiBADVq2jt8VwDdIh41oW7BfqDuReQ4hVMKEvgjghg5KjCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMyhzy5LbkIKyLTtenKtwDC5j2h94QceFi5V2MEKZ6dL4zt6aAMQGKeUccosLHjSvrvfzvfxANKrw0z1cueiwoVCCxAW9%2FJF7%2F2RNYZNfzcDv%2FHT8yK9OC286B0ofBzFHz1NpgY9weR4A4VLC%2FRmyXQnF3%2BcdIUtjW4at69riuJsYQ5J3IuIjSDmhQBc2oesJrjEcAz7gkGM9vdSJG7246Yc6iXsJS92he%2BOSQWo%2FlBMtNI%2FFbqSwEXySHjCWiPJELEaoBWqKXobOdMpGNYh0Aa8lfBjrvs44bRHMv8vS6ChOxROH%2BKgfMFKbObh8aYdnaqJ%2BudUIdOtN%2FDOR9Pvz%2B%2BGMjlnzhRHi%2FtXGkzlEgVG6c%2F9vOnpA2Og11HQMDpI7kM6QpGKYEpQs29TZ6UIked5e2uhEkPP315YKRFBxOFYzglJbx4opOQWzy5K%2B9uVIDeX19W3HsmBEOlFnb%2FKNics29K9fhf0x9tveZ%2FCPvTeKRXPO8yCZVLus5fB1Z1D3t8N9J5BLodfbRoyaUqUgHF4SORYJW86pans2INZd2Jh%2B0a0her2ae%2FPZezIivJgFiB617igBm10Z%2Fab9ylx8%2Fqk3P2wAlSX5w7j26x64rDP7xmm6Njv%2FbUl5FSw2o8negbBnJCrLSXVUSr0gwgbOrywY6pgGMmz7SFCR%2B3SOxe7Xusr1zaLJV0PFa13JNA55453mPiWEtVZ0eCCwgThLs132j7uD9Ypuab1J48vrTRXK475SWkxbU22I6IZsmydqNhGy0YZ77qG0GgyNgJJ5%2BJUNgz0iLxiVCUIJOC9CNP6GOGYLmDpt0ZdiKS3tXmzWLHs5ETy0HRJ8GILZgG0pE1kiYwrcLAuK5ZxTwGrId3yGzYSdkO6rmWyVF&X-Amz-Signature=2c95ec61272b96d528afeb64d517bb142a56d23113869dde5fbadd75dcab29e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


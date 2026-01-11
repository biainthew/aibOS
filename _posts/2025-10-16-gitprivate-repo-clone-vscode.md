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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZORXJ24%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW8%2FOKvyCZkIXrndeXakZ4DKhsB0NStZjSZnG3sLpv5AiEAx2NNbprsP%2BKkrIQVfDKq2XQK8P7AQjIh4UzwLhB2Wy4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2JLRIFSWx0%2BGxm9CrcA6%2BqyT82vrk93foUlgDFeuu27ylSBZ34aQqCArOX3DVOkV5P1xuqH36AsOsaa9FshDIv%2BkwB6EaYFJ5YIf%2BqRCaTxzIWyPnutJFxoU5acotyYHf%2FcPIbwIe%2F%2BnYfQEzh%2B8HGUTtmcGd3Nd%2FchGKkRmeJcMRzLcPPLdGSfA9LkeOTv43STvBtvcL%2B5v5gVfZ7C5xBCPK9fcqnaj%2FoJGRkly6U09QQACGwq4acSXx9eKuL8NyMJUzmQIu0ab4GublBGN%2FXfUqit7bJR3WPx8YXasU2FR9RihcTTOcKURzKvVBosQL4m5imzbaWju5cq%2Bi%2FukuuBf3fA0cv7RRqOKhoJ2X10x7RKqxdQYE1I1hjLUSxC%2BBE68ylW57Z0EP7pOJASvCoKxj8dxWiF3qIVtMZpDywgjeimWg4G9tyoBDWY080fy%2BBSwYMFjEfiN5lPuIV%2Fz5qaIpOYFLJUBbonkVRdpGJ2wAxasRjltUuvfPQgl8h4pnESBQDvNxWprV%2B1CBRWWyQhS0PZr6SlE9JjfJGH%2BcbFF1RSWKdF9Mr1C3Qpkvk1BwXGxO6TbOYvy64phBxyRW%2BeIHMHRCg8zKL44j0N8k4rhpGke7FTW0aiHZYBmuimD7VZeveRNtyiLUNMO%2Bxi8sGOqUBoNsgTjuEEwU%2FqrRVD6fKLPpv%2BXZjh2WtQXz7HKec8HiexLT2k2WVbKSF9D3dqNEcMJTvRfdpy1Y4ixcHAmaezktLJSKWzhjmgHRgtHn2yzsLwUkkY%2F0AKjMlU66p5ax%2BEuqoEjpgJDRCcOk17nhIS7j8m%2Bmv0Y9GTfd4kdZuFrogrlrD2Vbxrpo3vyj1jTW%2BzsHAK70nb1oQTxOzaqRScuVCtnkY&X-Amz-Signature=ab04e506926a894dd0cb32c653bc20971cf12e46cfb29cd9f6c1af9d2c9d3ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZORXJ24%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW8%2FOKvyCZkIXrndeXakZ4DKhsB0NStZjSZnG3sLpv5AiEAx2NNbprsP%2BKkrIQVfDKq2XQK8P7AQjIh4UzwLhB2Wy4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2JLRIFSWx0%2BGxm9CrcA6%2BqyT82vrk93foUlgDFeuu27ylSBZ34aQqCArOX3DVOkV5P1xuqH36AsOsaa9FshDIv%2BkwB6EaYFJ5YIf%2BqRCaTxzIWyPnutJFxoU5acotyYHf%2FcPIbwIe%2F%2BnYfQEzh%2B8HGUTtmcGd3Nd%2FchGKkRmeJcMRzLcPPLdGSfA9LkeOTv43STvBtvcL%2B5v5gVfZ7C5xBCPK9fcqnaj%2FoJGRkly6U09QQACGwq4acSXx9eKuL8NyMJUzmQIu0ab4GublBGN%2FXfUqit7bJR3WPx8YXasU2FR9RihcTTOcKURzKvVBosQL4m5imzbaWju5cq%2Bi%2FukuuBf3fA0cv7RRqOKhoJ2X10x7RKqxdQYE1I1hjLUSxC%2BBE68ylW57Z0EP7pOJASvCoKxj8dxWiF3qIVtMZpDywgjeimWg4G9tyoBDWY080fy%2BBSwYMFjEfiN5lPuIV%2Fz5qaIpOYFLJUBbonkVRdpGJ2wAxasRjltUuvfPQgl8h4pnESBQDvNxWprV%2B1CBRWWyQhS0PZr6SlE9JjfJGH%2BcbFF1RSWKdF9Mr1C3Qpkvk1BwXGxO6TbOYvy64phBxyRW%2BeIHMHRCg8zKL44j0N8k4rhpGke7FTW0aiHZYBmuimD7VZeveRNtyiLUNMO%2Bxi8sGOqUBoNsgTjuEEwU%2FqrRVD6fKLPpv%2BXZjh2WtQXz7HKec8HiexLT2k2WVbKSF9D3dqNEcMJTvRfdpy1Y4ixcHAmaezktLJSKWzhjmgHRgtHn2yzsLwUkkY%2F0AKjMlU66p5ax%2BEuqoEjpgJDRCcOk17nhIS7j8m%2Bmv0Y9GTfd4kdZuFrogrlrD2Vbxrpo3vyj1jTW%2BzsHAK70nb1oQTxOzaqRScuVCtnkY&X-Amz-Signature=aa8f3e4efdc3062aa2b9ed24b3a52d879d97ba36ea3e73b9b6099f4c96d0b479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZORXJ24%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW8%2FOKvyCZkIXrndeXakZ4DKhsB0NStZjSZnG3sLpv5AiEAx2NNbprsP%2BKkrIQVfDKq2XQK8P7AQjIh4UzwLhB2Wy4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2JLRIFSWx0%2BGxm9CrcA6%2BqyT82vrk93foUlgDFeuu27ylSBZ34aQqCArOX3DVOkV5P1xuqH36AsOsaa9FshDIv%2BkwB6EaYFJ5YIf%2BqRCaTxzIWyPnutJFxoU5acotyYHf%2FcPIbwIe%2F%2BnYfQEzh%2B8HGUTtmcGd3Nd%2FchGKkRmeJcMRzLcPPLdGSfA9LkeOTv43STvBtvcL%2B5v5gVfZ7C5xBCPK9fcqnaj%2FoJGRkly6U09QQACGwq4acSXx9eKuL8NyMJUzmQIu0ab4GublBGN%2FXfUqit7bJR3WPx8YXasU2FR9RihcTTOcKURzKvVBosQL4m5imzbaWju5cq%2Bi%2FukuuBf3fA0cv7RRqOKhoJ2X10x7RKqxdQYE1I1hjLUSxC%2BBE68ylW57Z0EP7pOJASvCoKxj8dxWiF3qIVtMZpDywgjeimWg4G9tyoBDWY080fy%2BBSwYMFjEfiN5lPuIV%2Fz5qaIpOYFLJUBbonkVRdpGJ2wAxasRjltUuvfPQgl8h4pnESBQDvNxWprV%2B1CBRWWyQhS0PZr6SlE9JjfJGH%2BcbFF1RSWKdF9Mr1C3Qpkvk1BwXGxO6TbOYvy64phBxyRW%2BeIHMHRCg8zKL44j0N8k4rhpGke7FTW0aiHZYBmuimD7VZeveRNtyiLUNMO%2Bxi8sGOqUBoNsgTjuEEwU%2FqrRVD6fKLPpv%2BXZjh2WtQXz7HKec8HiexLT2k2WVbKSF9D3dqNEcMJTvRfdpy1Y4ixcHAmaezktLJSKWzhjmgHRgtHn2yzsLwUkkY%2F0AKjMlU66p5ax%2BEuqoEjpgJDRCcOk17nhIS7j8m%2Bmv0Y9GTfd4kdZuFrogrlrD2Vbxrpo3vyj1jTW%2BzsHAK70nb1oQTxOzaqRScuVCtnkY&X-Amz-Signature=d801e0e6d78a0ae62bef2a128823097312118052db6eb74839be0b00613eb97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZORXJ24%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW8%2FOKvyCZkIXrndeXakZ4DKhsB0NStZjSZnG3sLpv5AiEAx2NNbprsP%2BKkrIQVfDKq2XQK8P7AQjIh4UzwLhB2Wy4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2JLRIFSWx0%2BGxm9CrcA6%2BqyT82vrk93foUlgDFeuu27ylSBZ34aQqCArOX3DVOkV5P1xuqH36AsOsaa9FshDIv%2BkwB6EaYFJ5YIf%2BqRCaTxzIWyPnutJFxoU5acotyYHf%2FcPIbwIe%2F%2BnYfQEzh%2B8HGUTtmcGd3Nd%2FchGKkRmeJcMRzLcPPLdGSfA9LkeOTv43STvBtvcL%2B5v5gVfZ7C5xBCPK9fcqnaj%2FoJGRkly6U09QQACGwq4acSXx9eKuL8NyMJUzmQIu0ab4GublBGN%2FXfUqit7bJR3WPx8YXasU2FR9RihcTTOcKURzKvVBosQL4m5imzbaWju5cq%2Bi%2FukuuBf3fA0cv7RRqOKhoJ2X10x7RKqxdQYE1I1hjLUSxC%2BBE68ylW57Z0EP7pOJASvCoKxj8dxWiF3qIVtMZpDywgjeimWg4G9tyoBDWY080fy%2BBSwYMFjEfiN5lPuIV%2Fz5qaIpOYFLJUBbonkVRdpGJ2wAxasRjltUuvfPQgl8h4pnESBQDvNxWprV%2B1CBRWWyQhS0PZr6SlE9JjfJGH%2BcbFF1RSWKdF9Mr1C3Qpkvk1BwXGxO6TbOYvy64phBxyRW%2BeIHMHRCg8zKL44j0N8k4rhpGke7FTW0aiHZYBmuimD7VZeveRNtyiLUNMO%2Bxi8sGOqUBoNsgTjuEEwU%2FqrRVD6fKLPpv%2BXZjh2WtQXz7HKec8HiexLT2k2WVbKSF9D3dqNEcMJTvRfdpy1Y4ixcHAmaezktLJSKWzhjmgHRgtHn2yzsLwUkkY%2F0AKjMlU66p5ax%2BEuqoEjpgJDRCcOk17nhIS7j8m%2Bmv0Y9GTfd4kdZuFrogrlrD2Vbxrpo3vyj1jTW%2BzsHAK70nb1oQTxOzaqRScuVCtnkY&X-Amz-Signature=ab48f423a73d9dab4e12a986562679b68585f0c0310c6aaace4d05500f5e0701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


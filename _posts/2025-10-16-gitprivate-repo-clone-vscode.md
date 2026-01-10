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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILEJZGE%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5ABTINaRRgOXHgHq3sFTojLgb8giA%2FNbQoN0cOaHH9AiBhtRyHy77kzlWU%2BDI0mmFDvN0BWYESf1Q%2FBwsBRzLb7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcBLNdM9r1Qj7%2FBwdKtwDkL6dSdBHtRKSQL%2FNkZBzMSz0bHoeToEHGALDLviEUvBVifHK5zs9u%2F1Zd5mXVKiu6qFH6miyXJyEhuqcvCOQ5HyydFQKlSPsihI0Dy9lO4cg%2BC5DcejQgFOrP4g10uZtFEqNF3erLvzu7T3Zd5lyZt%2FdYlZeWJrOLKyOOUmlHZ53yYVn0T2OLGT6TN2GnbmNov27Ap3qdNQnVRd920mRzy9hrbmBjGK%2BywHrdMpOVA1EzQoeKG0x%2FG%2FWrnpnpuHfTs1O1pFOvFtfQBDkoTIx5X4%2B2C1Bva1lCOeFEzv6xvm4OQXRdypdQzRmCBUT4O5jEBJorBaBsPy2n3kpmrpIk259AX9idllH6cEeM7y44hELOv75gTOdcvJhVBfi2028kc2jgBjk9alObvarD1QP3xxRSKSx0JYreDps%2BLKdG4W8o%2BWMg9nB10xyzPFigsKOE1aCQ9XV9k2BDUpFeXaHTnOuz53P%2Bm1fEVK4EjUk%2B0AL%2FRful7gNKlGM7awikrEMlW4W4CY6jW%2BBbgV%2BWLWITQHNGl7uOSwntOp1daIbg5QaEzGnudzzXlmsfb7X1OoOMy7rB6tWRnSW3sNqNPRlRCqXow%2BWkV9i%2Fi3Yu9V9yNLe2cOwBWxqpZxToNYwoMOGywY6pgHhLZIx%2FZ4FS3EIWxgVPcGSN6Qe46nlYOrQSp4vU5yNCTx9o0RIMH%2Bw9jnBQttmsjPS1iGNVrBOtpQV3lSKFwPmkjFE4iN1ArZI39P%2FjnZgPzGIzL6UV8xI7mUDgRRld473EPSC2m2ykwOjJUFGkEbVB%2BH41wNrwxp9syA2faEeZGzLyWEzwXrDUEmQMYfkDfKKVmySi0CiPV0mPoELi6LDdrt2VTb7&X-Amz-Signature=c933cf46e784cf52050efc135b3af9054630d7e56e816a350151e1f2710f4ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILEJZGE%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5ABTINaRRgOXHgHq3sFTojLgb8giA%2FNbQoN0cOaHH9AiBhtRyHy77kzlWU%2BDI0mmFDvN0BWYESf1Q%2FBwsBRzLb7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcBLNdM9r1Qj7%2FBwdKtwDkL6dSdBHtRKSQL%2FNkZBzMSz0bHoeToEHGALDLviEUvBVifHK5zs9u%2F1Zd5mXVKiu6qFH6miyXJyEhuqcvCOQ5HyydFQKlSPsihI0Dy9lO4cg%2BC5DcejQgFOrP4g10uZtFEqNF3erLvzu7T3Zd5lyZt%2FdYlZeWJrOLKyOOUmlHZ53yYVn0T2OLGT6TN2GnbmNov27Ap3qdNQnVRd920mRzy9hrbmBjGK%2BywHrdMpOVA1EzQoeKG0x%2FG%2FWrnpnpuHfTs1O1pFOvFtfQBDkoTIx5X4%2B2C1Bva1lCOeFEzv6xvm4OQXRdypdQzRmCBUT4O5jEBJorBaBsPy2n3kpmrpIk259AX9idllH6cEeM7y44hELOv75gTOdcvJhVBfi2028kc2jgBjk9alObvarD1QP3xxRSKSx0JYreDps%2BLKdG4W8o%2BWMg9nB10xyzPFigsKOE1aCQ9XV9k2BDUpFeXaHTnOuz53P%2Bm1fEVK4EjUk%2B0AL%2FRful7gNKlGM7awikrEMlW4W4CY6jW%2BBbgV%2BWLWITQHNGl7uOSwntOp1daIbg5QaEzGnudzzXlmsfb7X1OoOMy7rB6tWRnSW3sNqNPRlRCqXow%2BWkV9i%2Fi3Yu9V9yNLe2cOwBWxqpZxToNYwoMOGywY6pgHhLZIx%2FZ4FS3EIWxgVPcGSN6Qe46nlYOrQSp4vU5yNCTx9o0RIMH%2Bw9jnBQttmsjPS1iGNVrBOtpQV3lSKFwPmkjFE4iN1ArZI39P%2FjnZgPzGIzL6UV8xI7mUDgRRld473EPSC2m2ykwOjJUFGkEbVB%2BH41wNrwxp9syA2faEeZGzLyWEzwXrDUEmQMYfkDfKKVmySi0CiPV0mPoELi6LDdrt2VTb7&X-Amz-Signature=85dcb4c99ce98216fc79ee0ff6e66c66891edab8be0334c281b33f1bcbf27fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILEJZGE%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5ABTINaRRgOXHgHq3sFTojLgb8giA%2FNbQoN0cOaHH9AiBhtRyHy77kzlWU%2BDI0mmFDvN0BWYESf1Q%2FBwsBRzLb7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcBLNdM9r1Qj7%2FBwdKtwDkL6dSdBHtRKSQL%2FNkZBzMSz0bHoeToEHGALDLviEUvBVifHK5zs9u%2F1Zd5mXVKiu6qFH6miyXJyEhuqcvCOQ5HyydFQKlSPsihI0Dy9lO4cg%2BC5DcejQgFOrP4g10uZtFEqNF3erLvzu7T3Zd5lyZt%2FdYlZeWJrOLKyOOUmlHZ53yYVn0T2OLGT6TN2GnbmNov27Ap3qdNQnVRd920mRzy9hrbmBjGK%2BywHrdMpOVA1EzQoeKG0x%2FG%2FWrnpnpuHfTs1O1pFOvFtfQBDkoTIx5X4%2B2C1Bva1lCOeFEzv6xvm4OQXRdypdQzRmCBUT4O5jEBJorBaBsPy2n3kpmrpIk259AX9idllH6cEeM7y44hELOv75gTOdcvJhVBfi2028kc2jgBjk9alObvarD1QP3xxRSKSx0JYreDps%2BLKdG4W8o%2BWMg9nB10xyzPFigsKOE1aCQ9XV9k2BDUpFeXaHTnOuz53P%2Bm1fEVK4EjUk%2B0AL%2FRful7gNKlGM7awikrEMlW4W4CY6jW%2BBbgV%2BWLWITQHNGl7uOSwntOp1daIbg5QaEzGnudzzXlmsfb7X1OoOMy7rB6tWRnSW3sNqNPRlRCqXow%2BWkV9i%2Fi3Yu9V9yNLe2cOwBWxqpZxToNYwoMOGywY6pgHhLZIx%2FZ4FS3EIWxgVPcGSN6Qe46nlYOrQSp4vU5yNCTx9o0RIMH%2Bw9jnBQttmsjPS1iGNVrBOtpQV3lSKFwPmkjFE4iN1ArZI39P%2FjnZgPzGIzL6UV8xI7mUDgRRld473EPSC2m2ykwOjJUFGkEbVB%2BH41wNrwxp9syA2faEeZGzLyWEzwXrDUEmQMYfkDfKKVmySi0CiPV0mPoELi6LDdrt2VTb7&X-Amz-Signature=799bb70340d583d2b6878cf3967b832f5b2b4eade04a6ec3f5ec0d960c79f2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILEJZGE%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5ABTINaRRgOXHgHq3sFTojLgb8giA%2FNbQoN0cOaHH9AiBhtRyHy77kzlWU%2BDI0mmFDvN0BWYESf1Q%2FBwsBRzLb7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcBLNdM9r1Qj7%2FBwdKtwDkL6dSdBHtRKSQL%2FNkZBzMSz0bHoeToEHGALDLviEUvBVifHK5zs9u%2F1Zd5mXVKiu6qFH6miyXJyEhuqcvCOQ5HyydFQKlSPsihI0Dy9lO4cg%2BC5DcejQgFOrP4g10uZtFEqNF3erLvzu7T3Zd5lyZt%2FdYlZeWJrOLKyOOUmlHZ53yYVn0T2OLGT6TN2GnbmNov27Ap3qdNQnVRd920mRzy9hrbmBjGK%2BywHrdMpOVA1EzQoeKG0x%2FG%2FWrnpnpuHfTs1O1pFOvFtfQBDkoTIx5X4%2B2C1Bva1lCOeFEzv6xvm4OQXRdypdQzRmCBUT4O5jEBJorBaBsPy2n3kpmrpIk259AX9idllH6cEeM7y44hELOv75gTOdcvJhVBfi2028kc2jgBjk9alObvarD1QP3xxRSKSx0JYreDps%2BLKdG4W8o%2BWMg9nB10xyzPFigsKOE1aCQ9XV9k2BDUpFeXaHTnOuz53P%2Bm1fEVK4EjUk%2B0AL%2FRful7gNKlGM7awikrEMlW4W4CY6jW%2BBbgV%2BWLWITQHNGl7uOSwntOp1daIbg5QaEzGnudzzXlmsfb7X1OoOMy7rB6tWRnSW3sNqNPRlRCqXow%2BWkV9i%2Fi3Yu9V9yNLe2cOwBWxqpZxToNYwoMOGywY6pgHhLZIx%2FZ4FS3EIWxgVPcGSN6Qe46nlYOrQSp4vU5yNCTx9o0RIMH%2Bw9jnBQttmsjPS1iGNVrBOtpQV3lSKFwPmkjFE4iN1ArZI39P%2FjnZgPzGIzL6UV8xI7mUDgRRld473EPSC2m2ykwOjJUFGkEbVB%2BH41wNrwxp9syA2faEeZGzLyWEzwXrDUEmQMYfkDfKKVmySi0CiPV0mPoELi6LDdrt2VTb7&X-Amz-Signature=84359ea4fceef9f27f7eaccd9f98334344b3043cb20c9e76dbb3466e650d7345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


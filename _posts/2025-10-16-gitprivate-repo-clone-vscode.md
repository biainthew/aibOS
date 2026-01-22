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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRQ5GKP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD31I7bldwAutcw5XLigwJ3eAjfkJsF9L542dtuyokz8wIgM%2F7vTwne05koZ9X7Tp7wz8FgzxKIUbT1XLtpKs9nRDwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyrxOiHz7LX00dyYSrcA%2BWwrgunlddpFJq4jhbmk4zmqrZma1pVX3jSdLBSZVM8ms4yoxY5jCQDydPh8jsDhIq1RyQpEDEtITvIS5kwKQcScpDvJae1ShW8adND5cOu0jTp0jLuQy2KrELD%2BcVFRRK0WpIIdeh2HCKtvrQEcZzIwvdqz6pOn9waWJhYBkmn9LlA7q%2FA1uf0Ap3CaJlIBlBaUqbsUZPr%2FIm%2FU0mB1PXKfpJkCJoUrSV0RYV6qOmO1rm3cj%2BCsaLd4h%2BlvshDUJkEIL1SrQB2KscQ09eeFf0cttttxf6mHV5wrd7DcrbimDxVf9kzgsXarjHHU6FRESILyYPF%2BxLcAsB7e1rNPIiXJXdoWWFInxdFx5kkiXCb9y7eZ4oTXUIuXQSgdTVEkzvaCNuypMpPtQtx4Kbt0pRudCIuolwl3wCwlSmMuIIs64Ic%2FOjsrSUV5qsmBxo7hZugh63CKRGodqibtP6ZwCcLz2cNuo%2FgqafRUT7LKxFwSZrIMQ44q%2BVPMlJeTYQn7D7L5ySnTyW9QNEAdsy%2F4buNPTE2KMMkgL0uVGHMmMDPQG54famc1ABXSFBrlTLBf6eV6oqQ7IZ9N%2F4Y4G9IZDnohn0TsIjQS6v8ivBaV6%2Bv5LKJso90JMhrzMugMJ3cxcsGOqUBZ%2BzeE6%2B7JH54W4PQgNwTBk9h9jV6oOP3joYxd%2FxulX8c7w4fR2bNO96bbufZnJY4oqb2kZQKrKHxDkAMNQfHCBr0SzZHeZ5APPN8zrOQYiXCEcH9tn0EN952uhNmRwKzVGZpYfzy0hpSywBGiMSU%2FODNB%2BVVx48d1vVR8tFF4r8cMaDMhif5kD6xjAwrwdDauGn1pvZ4%2FUlklP7wFK19lprBQX2h&X-Amz-Signature=313d719798514f956f0a09ad092e9c186ddc476f336d5579c6cc7bddbd8356ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRQ5GKP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD31I7bldwAutcw5XLigwJ3eAjfkJsF9L542dtuyokz8wIgM%2F7vTwne05koZ9X7Tp7wz8FgzxKIUbT1XLtpKs9nRDwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyrxOiHz7LX00dyYSrcA%2BWwrgunlddpFJq4jhbmk4zmqrZma1pVX3jSdLBSZVM8ms4yoxY5jCQDydPh8jsDhIq1RyQpEDEtITvIS5kwKQcScpDvJae1ShW8adND5cOu0jTp0jLuQy2KrELD%2BcVFRRK0WpIIdeh2HCKtvrQEcZzIwvdqz6pOn9waWJhYBkmn9LlA7q%2FA1uf0Ap3CaJlIBlBaUqbsUZPr%2FIm%2FU0mB1PXKfpJkCJoUrSV0RYV6qOmO1rm3cj%2BCsaLd4h%2BlvshDUJkEIL1SrQB2KscQ09eeFf0cttttxf6mHV5wrd7DcrbimDxVf9kzgsXarjHHU6FRESILyYPF%2BxLcAsB7e1rNPIiXJXdoWWFInxdFx5kkiXCb9y7eZ4oTXUIuXQSgdTVEkzvaCNuypMpPtQtx4Kbt0pRudCIuolwl3wCwlSmMuIIs64Ic%2FOjsrSUV5qsmBxo7hZugh63CKRGodqibtP6ZwCcLz2cNuo%2FgqafRUT7LKxFwSZrIMQ44q%2BVPMlJeTYQn7D7L5ySnTyW9QNEAdsy%2F4buNPTE2KMMkgL0uVGHMmMDPQG54famc1ABXSFBrlTLBf6eV6oqQ7IZ9N%2F4Y4G9IZDnohn0TsIjQS6v8ivBaV6%2Bv5LKJso90JMhrzMugMJ3cxcsGOqUBZ%2BzeE6%2B7JH54W4PQgNwTBk9h9jV6oOP3joYxd%2FxulX8c7w4fR2bNO96bbufZnJY4oqb2kZQKrKHxDkAMNQfHCBr0SzZHeZ5APPN8zrOQYiXCEcH9tn0EN952uhNmRwKzVGZpYfzy0hpSywBGiMSU%2FODNB%2BVVx48d1vVR8tFF4r8cMaDMhif5kD6xjAwrwdDauGn1pvZ4%2FUlklP7wFK19lprBQX2h&X-Amz-Signature=f8d75980bd97f63e297b03d2d9005847392116479733d101303cdf904849cd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRQ5GKP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD31I7bldwAutcw5XLigwJ3eAjfkJsF9L542dtuyokz8wIgM%2F7vTwne05koZ9X7Tp7wz8FgzxKIUbT1XLtpKs9nRDwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyrxOiHz7LX00dyYSrcA%2BWwrgunlddpFJq4jhbmk4zmqrZma1pVX3jSdLBSZVM8ms4yoxY5jCQDydPh8jsDhIq1RyQpEDEtITvIS5kwKQcScpDvJae1ShW8adND5cOu0jTp0jLuQy2KrELD%2BcVFRRK0WpIIdeh2HCKtvrQEcZzIwvdqz6pOn9waWJhYBkmn9LlA7q%2FA1uf0Ap3CaJlIBlBaUqbsUZPr%2FIm%2FU0mB1PXKfpJkCJoUrSV0RYV6qOmO1rm3cj%2BCsaLd4h%2BlvshDUJkEIL1SrQB2KscQ09eeFf0cttttxf6mHV5wrd7DcrbimDxVf9kzgsXarjHHU6FRESILyYPF%2BxLcAsB7e1rNPIiXJXdoWWFInxdFx5kkiXCb9y7eZ4oTXUIuXQSgdTVEkzvaCNuypMpPtQtx4Kbt0pRudCIuolwl3wCwlSmMuIIs64Ic%2FOjsrSUV5qsmBxo7hZugh63CKRGodqibtP6ZwCcLz2cNuo%2FgqafRUT7LKxFwSZrIMQ44q%2BVPMlJeTYQn7D7L5ySnTyW9QNEAdsy%2F4buNPTE2KMMkgL0uVGHMmMDPQG54famc1ABXSFBrlTLBf6eV6oqQ7IZ9N%2F4Y4G9IZDnohn0TsIjQS6v8ivBaV6%2Bv5LKJso90JMhrzMugMJ3cxcsGOqUBZ%2BzeE6%2B7JH54W4PQgNwTBk9h9jV6oOP3joYxd%2FxulX8c7w4fR2bNO96bbufZnJY4oqb2kZQKrKHxDkAMNQfHCBr0SzZHeZ5APPN8zrOQYiXCEcH9tn0EN952uhNmRwKzVGZpYfzy0hpSywBGiMSU%2FODNB%2BVVx48d1vVR8tFF4r8cMaDMhif5kD6xjAwrwdDauGn1pvZ4%2FUlklP7wFK19lprBQX2h&X-Amz-Signature=3ef370f9b570b41567aa1208e198f6987ce3ac675297e0f25c4d7b2177ced94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRQ5GKP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD31I7bldwAutcw5XLigwJ3eAjfkJsF9L542dtuyokz8wIgM%2F7vTwne05koZ9X7Tp7wz8FgzxKIUbT1XLtpKs9nRDwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyrxOiHz7LX00dyYSrcA%2BWwrgunlddpFJq4jhbmk4zmqrZma1pVX3jSdLBSZVM8ms4yoxY5jCQDydPh8jsDhIq1RyQpEDEtITvIS5kwKQcScpDvJae1ShW8adND5cOu0jTp0jLuQy2KrELD%2BcVFRRK0WpIIdeh2HCKtvrQEcZzIwvdqz6pOn9waWJhYBkmn9LlA7q%2FA1uf0Ap3CaJlIBlBaUqbsUZPr%2FIm%2FU0mB1PXKfpJkCJoUrSV0RYV6qOmO1rm3cj%2BCsaLd4h%2BlvshDUJkEIL1SrQB2KscQ09eeFf0cttttxf6mHV5wrd7DcrbimDxVf9kzgsXarjHHU6FRESILyYPF%2BxLcAsB7e1rNPIiXJXdoWWFInxdFx5kkiXCb9y7eZ4oTXUIuXQSgdTVEkzvaCNuypMpPtQtx4Kbt0pRudCIuolwl3wCwlSmMuIIs64Ic%2FOjsrSUV5qsmBxo7hZugh63CKRGodqibtP6ZwCcLz2cNuo%2FgqafRUT7LKxFwSZrIMQ44q%2BVPMlJeTYQn7D7L5ySnTyW9QNEAdsy%2F4buNPTE2KMMkgL0uVGHMmMDPQG54famc1ABXSFBrlTLBf6eV6oqQ7IZ9N%2F4Y4G9IZDnohn0TsIjQS6v8ivBaV6%2Bv5LKJso90JMhrzMugMJ3cxcsGOqUBZ%2BzeE6%2B7JH54W4PQgNwTBk9h9jV6oOP3joYxd%2FxulX8c7w4fR2bNO96bbufZnJY4oqb2kZQKrKHxDkAMNQfHCBr0SzZHeZ5APPN8zrOQYiXCEcH9tn0EN952uhNmRwKzVGZpYfzy0hpSywBGiMSU%2FODNB%2BVVx48d1vVR8tFF4r8cMaDMhif5kD6xjAwrwdDauGn1pvZ4%2FUlklP7wFK19lprBQX2h&X-Amz-Signature=a8fb4f3862a069dc4ba85fbeeb3f5d560d61f183755db3fdfc014e00872aa93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZCC2PK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FjXEPeoergXLe6jVUj6eF8bnY3uxT0v5QufueazFg8wIhAO96FW5c5akysoFhZc6m07GJ9azvic3xijxDrhyLrElIKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKiLlf3CmLVaosOOsq3ANyEDcLmxYe87i71jJIJCHhQ1%2Fplc%2BNTLbTfULds7%2F7QA5DoJWJ6ZRWg0qqs04nS7BdrGzw8DIjTIOqJEmNjkpePmamwS3q2D6XhMTF%2FR5uxBM1s84CtN1q7NBgxa5nLRqnX5GICJOYdQYnLF2vFopABGEyZYQebm9JvFlQNm3DCoaVsRYXxyKQM68TiKfv%2FLCRx3Ny0iCo3cVmTCyj0W%2F8wTwezOrJKxE1vSzbMMeEa21GmZ4Rf1VkaK4eSCG2XeSBzJHfd83pO7M5zaM2hjZENW9MKuASDaYGrTVpHtCYppnugVVaKs0WaeT6rBEh59bYWx7VCdE72dSMult%2Byivwl1i08XMoESIONJJoCVC1SH5g0J9oK1uYUBIyo5UM63DcC0SxEtWXPn0tjpp11YP%2Bqlt0yRwwlesP6yp4CjXfas4AZznf7haXeZobELvCys88SJqnHezg6gsKR6GoRCVESfhT5bprSbQEBTdB0nE9UuFZdrLXlVy%2Bn4JWNWgbSlYmlESkLCOCpdYsoIfm9cbOTnpTXXif4Qi0kZtrX91rbEFnIECobNP1u3aVCFeka309n66yj%2Fg3rT6p%2FMbNmAgTW0YerW9XxQZnwVf9oukO1fB3pNs9eo2RqpcigTDe%2BaPKBjqkAeZquTUIGDypNNyVjmEmaVqLVVPvlXHGs8q4YUEyJaw4JguKnrNsHC9YAKyUeWYd3AF%2BhNhXVKxUYeENPdKBG0s9DdScSs0JOIbuJSkoM1DXHAd0PkQ0X3mq6VtSGxwgJYWroDHhkua7ufV4ju%2B7G%2Fo8US8ULrlH8g1fLThVpFdNQH8MpQctbbSsei3PzlE5%2F2oh6eiVLL5ib4cn520VPbxB2wOz&X-Amz-Signature=aa4fc11bca9f96a0dd0a61d699978886898a22b2a15f7e4b06a2618ef8c7a6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZCC2PK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FjXEPeoergXLe6jVUj6eF8bnY3uxT0v5QufueazFg8wIhAO96FW5c5akysoFhZc6m07GJ9azvic3xijxDrhyLrElIKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKiLlf3CmLVaosOOsq3ANyEDcLmxYe87i71jJIJCHhQ1%2Fplc%2BNTLbTfULds7%2F7QA5DoJWJ6ZRWg0qqs04nS7BdrGzw8DIjTIOqJEmNjkpePmamwS3q2D6XhMTF%2FR5uxBM1s84CtN1q7NBgxa5nLRqnX5GICJOYdQYnLF2vFopABGEyZYQebm9JvFlQNm3DCoaVsRYXxyKQM68TiKfv%2FLCRx3Ny0iCo3cVmTCyj0W%2F8wTwezOrJKxE1vSzbMMeEa21GmZ4Rf1VkaK4eSCG2XeSBzJHfd83pO7M5zaM2hjZENW9MKuASDaYGrTVpHtCYppnugVVaKs0WaeT6rBEh59bYWx7VCdE72dSMult%2Byivwl1i08XMoESIONJJoCVC1SH5g0J9oK1uYUBIyo5UM63DcC0SxEtWXPn0tjpp11YP%2Bqlt0yRwwlesP6yp4CjXfas4AZznf7haXeZobELvCys88SJqnHezg6gsKR6GoRCVESfhT5bprSbQEBTdB0nE9UuFZdrLXlVy%2Bn4JWNWgbSlYmlESkLCOCpdYsoIfm9cbOTnpTXXif4Qi0kZtrX91rbEFnIECobNP1u3aVCFeka309n66yj%2Fg3rT6p%2FMbNmAgTW0YerW9XxQZnwVf9oukO1fB3pNs9eo2RqpcigTDe%2BaPKBjqkAeZquTUIGDypNNyVjmEmaVqLVVPvlXHGs8q4YUEyJaw4JguKnrNsHC9YAKyUeWYd3AF%2BhNhXVKxUYeENPdKBG0s9DdScSs0JOIbuJSkoM1DXHAd0PkQ0X3mq6VtSGxwgJYWroDHhkua7ufV4ju%2B7G%2Fo8US8ULrlH8g1fLThVpFdNQH8MpQctbbSsei3PzlE5%2F2oh6eiVLL5ib4cn520VPbxB2wOz&X-Amz-Signature=d64fff5994a94865be0c681955b61762642ab39522270af9ce11334138ad4172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZCC2PK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FjXEPeoergXLe6jVUj6eF8bnY3uxT0v5QufueazFg8wIhAO96FW5c5akysoFhZc6m07GJ9azvic3xijxDrhyLrElIKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKiLlf3CmLVaosOOsq3ANyEDcLmxYe87i71jJIJCHhQ1%2Fplc%2BNTLbTfULds7%2F7QA5DoJWJ6ZRWg0qqs04nS7BdrGzw8DIjTIOqJEmNjkpePmamwS3q2D6XhMTF%2FR5uxBM1s84CtN1q7NBgxa5nLRqnX5GICJOYdQYnLF2vFopABGEyZYQebm9JvFlQNm3DCoaVsRYXxyKQM68TiKfv%2FLCRx3Ny0iCo3cVmTCyj0W%2F8wTwezOrJKxE1vSzbMMeEa21GmZ4Rf1VkaK4eSCG2XeSBzJHfd83pO7M5zaM2hjZENW9MKuASDaYGrTVpHtCYppnugVVaKs0WaeT6rBEh59bYWx7VCdE72dSMult%2Byivwl1i08XMoESIONJJoCVC1SH5g0J9oK1uYUBIyo5UM63DcC0SxEtWXPn0tjpp11YP%2Bqlt0yRwwlesP6yp4CjXfas4AZznf7haXeZobELvCys88SJqnHezg6gsKR6GoRCVESfhT5bprSbQEBTdB0nE9UuFZdrLXlVy%2Bn4JWNWgbSlYmlESkLCOCpdYsoIfm9cbOTnpTXXif4Qi0kZtrX91rbEFnIECobNP1u3aVCFeka309n66yj%2Fg3rT6p%2FMbNmAgTW0YerW9XxQZnwVf9oukO1fB3pNs9eo2RqpcigTDe%2BaPKBjqkAeZquTUIGDypNNyVjmEmaVqLVVPvlXHGs8q4YUEyJaw4JguKnrNsHC9YAKyUeWYd3AF%2BhNhXVKxUYeENPdKBG0s9DdScSs0JOIbuJSkoM1DXHAd0PkQ0X3mq6VtSGxwgJYWroDHhkua7ufV4ju%2B7G%2Fo8US8ULrlH8g1fLThVpFdNQH8MpQctbbSsei3PzlE5%2F2oh6eiVLL5ib4cn520VPbxB2wOz&X-Amz-Signature=8fd93408aa244ca76897bf6bab694cdb54c3803b07aebb43b845dd4b9776911a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZCC2PK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FjXEPeoergXLe6jVUj6eF8bnY3uxT0v5QufueazFg8wIhAO96FW5c5akysoFhZc6m07GJ9azvic3xijxDrhyLrElIKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKiLlf3CmLVaosOOsq3ANyEDcLmxYe87i71jJIJCHhQ1%2Fplc%2BNTLbTfULds7%2F7QA5DoJWJ6ZRWg0qqs04nS7BdrGzw8DIjTIOqJEmNjkpePmamwS3q2D6XhMTF%2FR5uxBM1s84CtN1q7NBgxa5nLRqnX5GICJOYdQYnLF2vFopABGEyZYQebm9JvFlQNm3DCoaVsRYXxyKQM68TiKfv%2FLCRx3Ny0iCo3cVmTCyj0W%2F8wTwezOrJKxE1vSzbMMeEa21GmZ4Rf1VkaK4eSCG2XeSBzJHfd83pO7M5zaM2hjZENW9MKuASDaYGrTVpHtCYppnugVVaKs0WaeT6rBEh59bYWx7VCdE72dSMult%2Byivwl1i08XMoESIONJJoCVC1SH5g0J9oK1uYUBIyo5UM63DcC0SxEtWXPn0tjpp11YP%2Bqlt0yRwwlesP6yp4CjXfas4AZznf7haXeZobELvCys88SJqnHezg6gsKR6GoRCVESfhT5bprSbQEBTdB0nE9UuFZdrLXlVy%2Bn4JWNWgbSlYmlESkLCOCpdYsoIfm9cbOTnpTXXif4Qi0kZtrX91rbEFnIECobNP1u3aVCFeka309n66yj%2Fg3rT6p%2FMbNmAgTW0YerW9XxQZnwVf9oukO1fB3pNs9eo2RqpcigTDe%2BaPKBjqkAeZquTUIGDypNNyVjmEmaVqLVVPvlXHGs8q4YUEyJaw4JguKnrNsHC9YAKyUeWYd3AF%2BhNhXVKxUYeENPdKBG0s9DdScSs0JOIbuJSkoM1DXHAd0PkQ0X3mq6VtSGxwgJYWroDHhkua7ufV4ju%2B7G%2Fo8US8ULrlH8g1fLThVpFdNQH8MpQctbbSsei3PzlE5%2F2oh6eiVLL5ib4cn520VPbxB2wOz&X-Amz-Signature=d6130925847f4dad6889b3b0b995927b717466a44dc663f3b509b4b298a182df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


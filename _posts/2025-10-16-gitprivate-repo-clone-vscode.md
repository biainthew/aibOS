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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI63DW7%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFhtY5KWyeFiZa63nk5KXNZyS2f5Gw9rfI3HI32yB9iPAiAnodrvGOLuloPLYedNN6AdlpTVlULK%2FFB0ae%2F54hF9sSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo5scaxxusAPFV9bYKtwDWtJTYoBszHaJTwa4Esp0gXOovrS3ETmynqeRjm5hVXHv3SVtUxme%2BzsO3p3mSGj%2BsrAtnqWvaSygfcv%2FMy1rA1i9xRANbJZUsXjIkaZImYBiMti9YQz%2B5v7EX8aWdKCupmMXzUcjMqsS3t5qiXJ9ORquDkEUuRU%2BFKGeioxTRMtVutdz5AcOJWiiLk4GQSA7z6NTj0xruGfh84qOwmpOxmfTCfRsnGJkP9AM4ZXazKlBYZk2FZ%2F8KvWlvlakr%2B7rTQ%2FFGqm4ZfqmWWAVeAVD1%2FBGRJ%2FHAzl9xdW5jFcyzr%2BljO%2FlzYHAfBeFQbJMXDjkaT6zp5TZxhd2RQuWFbuHy1l8mHJAXGhJL2sOtOhmxfcpoNfKk0DwJZ%2FTxX8aIxGlw53cu%2FwXb4nwzBNbbPoDu%2B6hAVcoWlWmy1uS7n0p3qDPJqO4%2FUMJfe1EPYXWbPe7TDCc%2F84r264igwC5SwtLArW2b%2FbZghUDz2QFSmy4v1uopN8uI7Y3726TQSKSrVbuc8J7MOmri1%2BWhubUPqvpxVabNA9d2yfFr7iQtpNmcNBcxI5DlMQSHMMAaKnxAGgYCNfn%2For69arygsIWDpTDRkWzIvP5Ecu40Ag9MEoqsSprKDqwo%2F7PxFrKpusw6pfaywY6pgH2TK9ilH8oBiUz4iVebNHJ6snP3qXq6yaMkJBviB0m9%2FPa25qh9Qj3zHTAuzjVfNZUSKtKMFxFKyCADw5ofgjzbzRR0U0Nv7P1J%2BGKizyUNRO8prq2fhr19ejN0BJe6pVwBAHldM4twONJYAvbLmwIiMOB0mjA1flxBvogjyJhrz4ocjSawoFCucB2TRkcr%2FO73Hja%2FrJZs9m1s9gUeKj3bakIXN0u&X-Amz-Signature=5ac580dbc8b0e5812de7afc89bf7ff81190bee76d566a298dd78b36b19e5c480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI63DW7%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFhtY5KWyeFiZa63nk5KXNZyS2f5Gw9rfI3HI32yB9iPAiAnodrvGOLuloPLYedNN6AdlpTVlULK%2FFB0ae%2F54hF9sSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo5scaxxusAPFV9bYKtwDWtJTYoBszHaJTwa4Esp0gXOovrS3ETmynqeRjm5hVXHv3SVtUxme%2BzsO3p3mSGj%2BsrAtnqWvaSygfcv%2FMy1rA1i9xRANbJZUsXjIkaZImYBiMti9YQz%2B5v7EX8aWdKCupmMXzUcjMqsS3t5qiXJ9ORquDkEUuRU%2BFKGeioxTRMtVutdz5AcOJWiiLk4GQSA7z6NTj0xruGfh84qOwmpOxmfTCfRsnGJkP9AM4ZXazKlBYZk2FZ%2F8KvWlvlakr%2B7rTQ%2FFGqm4ZfqmWWAVeAVD1%2FBGRJ%2FHAzl9xdW5jFcyzr%2BljO%2FlzYHAfBeFQbJMXDjkaT6zp5TZxhd2RQuWFbuHy1l8mHJAXGhJL2sOtOhmxfcpoNfKk0DwJZ%2FTxX8aIxGlw53cu%2FwXb4nwzBNbbPoDu%2B6hAVcoWlWmy1uS7n0p3qDPJqO4%2FUMJfe1EPYXWbPe7TDCc%2F84r264igwC5SwtLArW2b%2FbZghUDz2QFSmy4v1uopN8uI7Y3726TQSKSrVbuc8J7MOmri1%2BWhubUPqvpxVabNA9d2yfFr7iQtpNmcNBcxI5DlMQSHMMAaKnxAGgYCNfn%2For69arygsIWDpTDRkWzIvP5Ecu40Ag9MEoqsSprKDqwo%2F7PxFrKpusw6pfaywY6pgH2TK9ilH8oBiUz4iVebNHJ6snP3qXq6yaMkJBviB0m9%2FPa25qh9Qj3zHTAuzjVfNZUSKtKMFxFKyCADw5ofgjzbzRR0U0Nv7P1J%2BGKizyUNRO8prq2fhr19ejN0BJe6pVwBAHldM4twONJYAvbLmwIiMOB0mjA1flxBvogjyJhrz4ocjSawoFCucB2TRkcr%2FO73Hja%2FrJZs9m1s9gUeKj3bakIXN0u&X-Amz-Signature=a504fc8d1ba4f351bffb92c1e1693f0e2cc508304434710f65590e6cf5cbb2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI63DW7%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFhtY5KWyeFiZa63nk5KXNZyS2f5Gw9rfI3HI32yB9iPAiAnodrvGOLuloPLYedNN6AdlpTVlULK%2FFB0ae%2F54hF9sSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo5scaxxusAPFV9bYKtwDWtJTYoBszHaJTwa4Esp0gXOovrS3ETmynqeRjm5hVXHv3SVtUxme%2BzsO3p3mSGj%2BsrAtnqWvaSygfcv%2FMy1rA1i9xRANbJZUsXjIkaZImYBiMti9YQz%2B5v7EX8aWdKCupmMXzUcjMqsS3t5qiXJ9ORquDkEUuRU%2BFKGeioxTRMtVutdz5AcOJWiiLk4GQSA7z6NTj0xruGfh84qOwmpOxmfTCfRsnGJkP9AM4ZXazKlBYZk2FZ%2F8KvWlvlakr%2B7rTQ%2FFGqm4ZfqmWWAVeAVD1%2FBGRJ%2FHAzl9xdW5jFcyzr%2BljO%2FlzYHAfBeFQbJMXDjkaT6zp5TZxhd2RQuWFbuHy1l8mHJAXGhJL2sOtOhmxfcpoNfKk0DwJZ%2FTxX8aIxGlw53cu%2FwXb4nwzBNbbPoDu%2B6hAVcoWlWmy1uS7n0p3qDPJqO4%2FUMJfe1EPYXWbPe7TDCc%2F84r264igwC5SwtLArW2b%2FbZghUDz2QFSmy4v1uopN8uI7Y3726TQSKSrVbuc8J7MOmri1%2BWhubUPqvpxVabNA9d2yfFr7iQtpNmcNBcxI5DlMQSHMMAaKnxAGgYCNfn%2For69arygsIWDpTDRkWzIvP5Ecu40Ag9MEoqsSprKDqwo%2F7PxFrKpusw6pfaywY6pgH2TK9ilH8oBiUz4iVebNHJ6snP3qXq6yaMkJBviB0m9%2FPa25qh9Qj3zHTAuzjVfNZUSKtKMFxFKyCADw5ofgjzbzRR0U0Nv7P1J%2BGKizyUNRO8prq2fhr19ejN0BJe6pVwBAHldM4twONJYAvbLmwIiMOB0mjA1flxBvogjyJhrz4ocjSawoFCucB2TRkcr%2FO73Hja%2FrJZs9m1s9gUeKj3bakIXN0u&X-Amz-Signature=f9891c02a931d3b52db72771453615899317404cb947b06cbd2eec7b36bcc3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI63DW7%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFhtY5KWyeFiZa63nk5KXNZyS2f5Gw9rfI3HI32yB9iPAiAnodrvGOLuloPLYedNN6AdlpTVlULK%2FFB0ae%2F54hF9sSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo5scaxxusAPFV9bYKtwDWtJTYoBszHaJTwa4Esp0gXOovrS3ETmynqeRjm5hVXHv3SVtUxme%2BzsO3p3mSGj%2BsrAtnqWvaSygfcv%2FMy1rA1i9xRANbJZUsXjIkaZImYBiMti9YQz%2B5v7EX8aWdKCupmMXzUcjMqsS3t5qiXJ9ORquDkEUuRU%2BFKGeioxTRMtVutdz5AcOJWiiLk4GQSA7z6NTj0xruGfh84qOwmpOxmfTCfRsnGJkP9AM4ZXazKlBYZk2FZ%2F8KvWlvlakr%2B7rTQ%2FFGqm4ZfqmWWAVeAVD1%2FBGRJ%2FHAzl9xdW5jFcyzr%2BljO%2FlzYHAfBeFQbJMXDjkaT6zp5TZxhd2RQuWFbuHy1l8mHJAXGhJL2sOtOhmxfcpoNfKk0DwJZ%2FTxX8aIxGlw53cu%2FwXb4nwzBNbbPoDu%2B6hAVcoWlWmy1uS7n0p3qDPJqO4%2FUMJfe1EPYXWbPe7TDCc%2F84r264igwC5SwtLArW2b%2FbZghUDz2QFSmy4v1uopN8uI7Y3726TQSKSrVbuc8J7MOmri1%2BWhubUPqvpxVabNA9d2yfFr7iQtpNmcNBcxI5DlMQSHMMAaKnxAGgYCNfn%2For69arygsIWDpTDRkWzIvP5Ecu40Ag9MEoqsSprKDqwo%2F7PxFrKpusw6pfaywY6pgH2TK9ilH8oBiUz4iVebNHJ6snP3qXq6yaMkJBviB0m9%2FPa25qh9Qj3zHTAuzjVfNZUSKtKMFxFKyCADw5ofgjzbzRR0U0Nv7P1J%2BGKizyUNRO8prq2fhr19ejN0BJe6pVwBAHldM4twONJYAvbLmwIiMOB0mjA1flxBvogjyJhrz4ocjSawoFCucB2TRkcr%2FO73Hja%2FrJZs9m1s9gUeKj3bakIXN0u&X-Amz-Signature=f1b019219f76b00df165eca2d8b4aa68e66c1d9eb21f0cfa2866c23834408e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


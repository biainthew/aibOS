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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5YDMNJ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCB32JuxGFb54QAWmXdE6lv5uOzDW3rIzgTR%2BKug%2BGsZgIhAObHFcOXAepJqBIn8xyYND11A9O%2Bx1hllScHpJ%2Fuc1Z8Kv8DCDUQABoMNjM3NDIzMTgzODA1IgyXrQGuG42sOdCbY38q3APwTnYWEa3XzVUuVGhVroaxL7yi6Smgy1vrE9%2BgrqNUrn%2FazldYqEnJ%2FFlemn4s8nZpJPFdNbueP2K2h6zT1r2YOEU0dZlmn6PVUAZH8fQzL%2Fr6AwyOkNioPblXZ3FqccbTPD2pInmKx4M8yWARVNVKJujolIgccTuwjF3LpxU7fiYIvtTVOcIAaMWjdnjnEppwoBOuNiJq9N9kEzHHqtbly5BiDHFEvTINMPKF70LdYptbSrXlZ9183XDmqSMIrCDtNTGuWbL464vbSTWGhB9vfSqSEH6hD32dcYYwB2iuXUFPGPHi8qe%2B8iSoQE5wtefLj8G7GMpWI5bQr8c%2FAYpLZe3fBb8qzxqNLWn4h%2BnDKbgh31dtZob3dYBlu%2BEDLRiHnwkDmhYAU3%2FIH2J4g2IMjgU%2BtEquWm27lJNmKi4pcn%2FliJiRrJqBAYgpTCBoyrJz3Z0t9JyAUp91j4kJ2r908q05hncWjp942FMcyJ%2F8r39y9m4jaqsA75JY7kpg%2Fe3srpGA4JOpumR%2B6XW%2Bi1rLFQEP2cTH5XJ5Q7unhuxJIb5Jk4ph%2FUHNoarfPW%2F4gYd2JKWQO5N8UW4A1HF8k4%2BCVuYlnkDWT%2BC7g%2FQL92f2b0wocQztrbnoHeoLyTCbluvKBjqkAfKU1g5hUurAx%2B%2FHzbi3b59OKzfZfa1eigR%2B3Q%2FL%2FjgWlifpEI7pXIz5gDUFQJ4ynRN9%2BuUHn4qIIbWQvcrg6WdH0tnFpuiezJXKxG2rrepO81Y%2B8M7IEmv7Qt9OzP3zbatGE%2FFmu8FUq2iyW1rk%2BFkPTxw9fcu9kTj7lO%2F4JbIKAt%2Fkx8lj1OFxa2lLSWPcvbczE5xt5NyfdA%2BAkkthcztn0zW7&X-Amz-Signature=32e50667f429a608320466eecd5b2dfc7cf4d009e7740555bec281c979d23c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5YDMNJ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCB32JuxGFb54QAWmXdE6lv5uOzDW3rIzgTR%2BKug%2BGsZgIhAObHFcOXAepJqBIn8xyYND11A9O%2Bx1hllScHpJ%2Fuc1Z8Kv8DCDUQABoMNjM3NDIzMTgzODA1IgyXrQGuG42sOdCbY38q3APwTnYWEa3XzVUuVGhVroaxL7yi6Smgy1vrE9%2BgrqNUrn%2FazldYqEnJ%2FFlemn4s8nZpJPFdNbueP2K2h6zT1r2YOEU0dZlmn6PVUAZH8fQzL%2Fr6AwyOkNioPblXZ3FqccbTPD2pInmKx4M8yWARVNVKJujolIgccTuwjF3LpxU7fiYIvtTVOcIAaMWjdnjnEppwoBOuNiJq9N9kEzHHqtbly5BiDHFEvTINMPKF70LdYptbSrXlZ9183XDmqSMIrCDtNTGuWbL464vbSTWGhB9vfSqSEH6hD32dcYYwB2iuXUFPGPHi8qe%2B8iSoQE5wtefLj8G7GMpWI5bQr8c%2FAYpLZe3fBb8qzxqNLWn4h%2BnDKbgh31dtZob3dYBlu%2BEDLRiHnwkDmhYAU3%2FIH2J4g2IMjgU%2BtEquWm27lJNmKi4pcn%2FliJiRrJqBAYgpTCBoyrJz3Z0t9JyAUp91j4kJ2r908q05hncWjp942FMcyJ%2F8r39y9m4jaqsA75JY7kpg%2Fe3srpGA4JOpumR%2B6XW%2Bi1rLFQEP2cTH5XJ5Q7unhuxJIb5Jk4ph%2FUHNoarfPW%2F4gYd2JKWQO5N8UW4A1HF8k4%2BCVuYlnkDWT%2BC7g%2FQL92f2b0wocQztrbnoHeoLyTCbluvKBjqkAfKU1g5hUurAx%2B%2FHzbi3b59OKzfZfa1eigR%2B3Q%2FL%2FjgWlifpEI7pXIz5gDUFQJ4ynRN9%2BuUHn4qIIbWQvcrg6WdH0tnFpuiezJXKxG2rrepO81Y%2B8M7IEmv7Qt9OzP3zbatGE%2FFmu8FUq2iyW1rk%2BFkPTxw9fcu9kTj7lO%2F4JbIKAt%2Fkx8lj1OFxa2lLSWPcvbczE5xt5NyfdA%2BAkkthcztn0zW7&X-Amz-Signature=646e9e8103d5fd57c1f7a4d09721b922e85afeb0724c297ac8b9099bf4c5b814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5YDMNJ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCB32JuxGFb54QAWmXdE6lv5uOzDW3rIzgTR%2BKug%2BGsZgIhAObHFcOXAepJqBIn8xyYND11A9O%2Bx1hllScHpJ%2Fuc1Z8Kv8DCDUQABoMNjM3NDIzMTgzODA1IgyXrQGuG42sOdCbY38q3APwTnYWEa3XzVUuVGhVroaxL7yi6Smgy1vrE9%2BgrqNUrn%2FazldYqEnJ%2FFlemn4s8nZpJPFdNbueP2K2h6zT1r2YOEU0dZlmn6PVUAZH8fQzL%2Fr6AwyOkNioPblXZ3FqccbTPD2pInmKx4M8yWARVNVKJujolIgccTuwjF3LpxU7fiYIvtTVOcIAaMWjdnjnEppwoBOuNiJq9N9kEzHHqtbly5BiDHFEvTINMPKF70LdYptbSrXlZ9183XDmqSMIrCDtNTGuWbL464vbSTWGhB9vfSqSEH6hD32dcYYwB2iuXUFPGPHi8qe%2B8iSoQE5wtefLj8G7GMpWI5bQr8c%2FAYpLZe3fBb8qzxqNLWn4h%2BnDKbgh31dtZob3dYBlu%2BEDLRiHnwkDmhYAU3%2FIH2J4g2IMjgU%2BtEquWm27lJNmKi4pcn%2FliJiRrJqBAYgpTCBoyrJz3Z0t9JyAUp91j4kJ2r908q05hncWjp942FMcyJ%2F8r39y9m4jaqsA75JY7kpg%2Fe3srpGA4JOpumR%2B6XW%2Bi1rLFQEP2cTH5XJ5Q7unhuxJIb5Jk4ph%2FUHNoarfPW%2F4gYd2JKWQO5N8UW4A1HF8k4%2BCVuYlnkDWT%2BC7g%2FQL92f2b0wocQztrbnoHeoLyTCbluvKBjqkAfKU1g5hUurAx%2B%2FHzbi3b59OKzfZfa1eigR%2B3Q%2FL%2FjgWlifpEI7pXIz5gDUFQJ4ynRN9%2BuUHn4qIIbWQvcrg6WdH0tnFpuiezJXKxG2rrepO81Y%2B8M7IEmv7Qt9OzP3zbatGE%2FFmu8FUq2iyW1rk%2BFkPTxw9fcu9kTj7lO%2F4JbIKAt%2Fkx8lj1OFxa2lLSWPcvbczE5xt5NyfdA%2BAkkthcztn0zW7&X-Amz-Signature=22e38efd163621dab6217ca3395df6a1d01fe10f3663eb833d22136585f91099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5YDMNJ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCB32JuxGFb54QAWmXdE6lv5uOzDW3rIzgTR%2BKug%2BGsZgIhAObHFcOXAepJqBIn8xyYND11A9O%2Bx1hllScHpJ%2Fuc1Z8Kv8DCDUQABoMNjM3NDIzMTgzODA1IgyXrQGuG42sOdCbY38q3APwTnYWEa3XzVUuVGhVroaxL7yi6Smgy1vrE9%2BgrqNUrn%2FazldYqEnJ%2FFlemn4s8nZpJPFdNbueP2K2h6zT1r2YOEU0dZlmn6PVUAZH8fQzL%2Fr6AwyOkNioPblXZ3FqccbTPD2pInmKx4M8yWARVNVKJujolIgccTuwjF3LpxU7fiYIvtTVOcIAaMWjdnjnEppwoBOuNiJq9N9kEzHHqtbly5BiDHFEvTINMPKF70LdYptbSrXlZ9183XDmqSMIrCDtNTGuWbL464vbSTWGhB9vfSqSEH6hD32dcYYwB2iuXUFPGPHi8qe%2B8iSoQE5wtefLj8G7GMpWI5bQr8c%2FAYpLZe3fBb8qzxqNLWn4h%2BnDKbgh31dtZob3dYBlu%2BEDLRiHnwkDmhYAU3%2FIH2J4g2IMjgU%2BtEquWm27lJNmKi4pcn%2FliJiRrJqBAYgpTCBoyrJz3Z0t9JyAUp91j4kJ2r908q05hncWjp942FMcyJ%2F8r39y9m4jaqsA75JY7kpg%2Fe3srpGA4JOpumR%2B6XW%2Bi1rLFQEP2cTH5XJ5Q7unhuxJIb5Jk4ph%2FUHNoarfPW%2F4gYd2JKWQO5N8UW4A1HF8k4%2BCVuYlnkDWT%2BC7g%2FQL92f2b0wocQztrbnoHeoLyTCbluvKBjqkAfKU1g5hUurAx%2B%2FHzbi3b59OKzfZfa1eigR%2B3Q%2FL%2FjgWlifpEI7pXIz5gDUFQJ4ynRN9%2BuUHn4qIIbWQvcrg6WdH0tnFpuiezJXKxG2rrepO81Y%2B8M7IEmv7Qt9OzP3zbatGE%2FFmu8FUq2iyW1rk%2BFkPTxw9fcu9kTj7lO%2F4JbIKAt%2Fkx8lj1OFxa2lLSWPcvbczE5xt5NyfdA%2BAkkthcztn0zW7&X-Amz-Signature=d127a23f20c438947ff2d4772565dd323849f75a6a948ef57d6627350ad047c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


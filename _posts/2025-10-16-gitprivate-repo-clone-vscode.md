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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTQPSUJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRDinCNJ2ssK%2B0uHiQViph%2Bc1%2BtCT%2BL%2B2IxKoWvpjkAiBCRXzcYmRbOatcLsf34fYtUOtSc%2FpYSCdYECtZIJXv2yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMl3LWFd7REKgDMRh1KtwDTWZ92ZRH4slfGjB5INje1urTpZoJpsxMcqrChn6Mi8eUwwnl4uNgcDX%2BWtj%2FJuQjisWlJYWC2DFRn%2BwTW0Bxeh8VdeIMBiru9O7NjO1yCUiWjjpfLCvYqvK5qnAy1TU9w4VM3VL%2FqsgAPT0M91CXtrBRWuHPrIAPfGNW1NkuGPTOl7iLzmQUHjhRVX%2FlE8juabGcrr%2By%2Fe9nI9GOctmLeHvrFOxNrKEAZpqXT4HFOE3nt4K4k4b1wXmpHpEDqmZWzQWFmRwcQ9ZuMD5CW2kDWB%2FD3v%2FWo5HjRpnnjlVL%2BtXUzLcAuPRJpWiymo0r4McEX9KxUc45C%2BOc5ySvBdyljJcQ7%2FqSAHwG1V8VuScQh1s8rB2iuwz%2F%2B1KbeQzrx%2FsPcxUqOpiMV25%2BxNKAMS7ZiR0xLt8dhmS02%2FRzbi%2F2jvufk1pTaDaupWFfVSvCKpuHnZGbZA%2F43w7G9nhpVPMMNx9x1RcQQzHaEvfyTfVRiUTD1cSkGrCMwNEjnGULd9g9TnaPR6Ezmpmc66OPMS9xUjBpGKoxbOm6J9taUUWy35E9XKNHO%2BssuM0K5ssq0GDLtSn8mkoKRT1mTlKmSiGPFLG2ahO0RgNiusz8IViT59olDJo1jTcfLh45u40wgcq7ygY6pgFASZ5koU7GyMeg1NTc3%2B59vaNxKe8fyq9dU8NDhfy48WApI5qCkrflHOC3isFUgPMcDzRzJavXxD1zkaEMTc6N%2B7K3QPJiXIyWnfnKiXvpNiQcAjj3ThMf7kHttR%2BOlwdHwiXHOHFstaWr669FrOnpPGbhRVWOhyV7bREURdIPR8ZOuI0EOR6mXCS4KkACfs0u2JrqqX6WxT0RKBJEFWId0LSwISZ2&X-Amz-Signature=8e09c8d2e91c143dc25b190fb636c03fcce44241bf15c98839ba4a665379644d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTQPSUJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRDinCNJ2ssK%2B0uHiQViph%2Bc1%2BtCT%2BL%2B2IxKoWvpjkAiBCRXzcYmRbOatcLsf34fYtUOtSc%2FpYSCdYECtZIJXv2yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMl3LWFd7REKgDMRh1KtwDTWZ92ZRH4slfGjB5INje1urTpZoJpsxMcqrChn6Mi8eUwwnl4uNgcDX%2BWtj%2FJuQjisWlJYWC2DFRn%2BwTW0Bxeh8VdeIMBiru9O7NjO1yCUiWjjpfLCvYqvK5qnAy1TU9w4VM3VL%2FqsgAPT0M91CXtrBRWuHPrIAPfGNW1NkuGPTOl7iLzmQUHjhRVX%2FlE8juabGcrr%2By%2Fe9nI9GOctmLeHvrFOxNrKEAZpqXT4HFOE3nt4K4k4b1wXmpHpEDqmZWzQWFmRwcQ9ZuMD5CW2kDWB%2FD3v%2FWo5HjRpnnjlVL%2BtXUzLcAuPRJpWiymo0r4McEX9KxUc45C%2BOc5ySvBdyljJcQ7%2FqSAHwG1V8VuScQh1s8rB2iuwz%2F%2B1KbeQzrx%2FsPcxUqOpiMV25%2BxNKAMS7ZiR0xLt8dhmS02%2FRzbi%2F2jvufk1pTaDaupWFfVSvCKpuHnZGbZA%2F43w7G9nhpVPMMNx9x1RcQQzHaEvfyTfVRiUTD1cSkGrCMwNEjnGULd9g9TnaPR6Ezmpmc66OPMS9xUjBpGKoxbOm6J9taUUWy35E9XKNHO%2BssuM0K5ssq0GDLtSn8mkoKRT1mTlKmSiGPFLG2ahO0RgNiusz8IViT59olDJo1jTcfLh45u40wgcq7ygY6pgFASZ5koU7GyMeg1NTc3%2B59vaNxKe8fyq9dU8NDhfy48WApI5qCkrflHOC3isFUgPMcDzRzJavXxD1zkaEMTc6N%2B7K3QPJiXIyWnfnKiXvpNiQcAjj3ThMf7kHttR%2BOlwdHwiXHOHFstaWr669FrOnpPGbhRVWOhyV7bREURdIPR8ZOuI0EOR6mXCS4KkACfs0u2JrqqX6WxT0RKBJEFWId0LSwISZ2&X-Amz-Signature=ec47896f49a07a5d360953a5e5bb51e990e44dda7e338d2a77f99dc9685bdfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTQPSUJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRDinCNJ2ssK%2B0uHiQViph%2Bc1%2BtCT%2BL%2B2IxKoWvpjkAiBCRXzcYmRbOatcLsf34fYtUOtSc%2FpYSCdYECtZIJXv2yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMl3LWFd7REKgDMRh1KtwDTWZ92ZRH4slfGjB5INje1urTpZoJpsxMcqrChn6Mi8eUwwnl4uNgcDX%2BWtj%2FJuQjisWlJYWC2DFRn%2BwTW0Bxeh8VdeIMBiru9O7NjO1yCUiWjjpfLCvYqvK5qnAy1TU9w4VM3VL%2FqsgAPT0M91CXtrBRWuHPrIAPfGNW1NkuGPTOl7iLzmQUHjhRVX%2FlE8juabGcrr%2By%2Fe9nI9GOctmLeHvrFOxNrKEAZpqXT4HFOE3nt4K4k4b1wXmpHpEDqmZWzQWFmRwcQ9ZuMD5CW2kDWB%2FD3v%2FWo5HjRpnnjlVL%2BtXUzLcAuPRJpWiymo0r4McEX9KxUc45C%2BOc5ySvBdyljJcQ7%2FqSAHwG1V8VuScQh1s8rB2iuwz%2F%2B1KbeQzrx%2FsPcxUqOpiMV25%2BxNKAMS7ZiR0xLt8dhmS02%2FRzbi%2F2jvufk1pTaDaupWFfVSvCKpuHnZGbZA%2F43w7G9nhpVPMMNx9x1RcQQzHaEvfyTfVRiUTD1cSkGrCMwNEjnGULd9g9TnaPR6Ezmpmc66OPMS9xUjBpGKoxbOm6J9taUUWy35E9XKNHO%2BssuM0K5ssq0GDLtSn8mkoKRT1mTlKmSiGPFLG2ahO0RgNiusz8IViT59olDJo1jTcfLh45u40wgcq7ygY6pgFASZ5koU7GyMeg1NTc3%2B59vaNxKe8fyq9dU8NDhfy48WApI5qCkrflHOC3isFUgPMcDzRzJavXxD1zkaEMTc6N%2B7K3QPJiXIyWnfnKiXvpNiQcAjj3ThMf7kHttR%2BOlwdHwiXHOHFstaWr669FrOnpPGbhRVWOhyV7bREURdIPR8ZOuI0EOR6mXCS4KkACfs0u2JrqqX6WxT0RKBJEFWId0LSwISZ2&X-Amz-Signature=44b8ad2323b61ab9fd9dd073e47ba1b87a4e2e6dc708f1c5a8105ce65e151ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTQPSUJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRDinCNJ2ssK%2B0uHiQViph%2Bc1%2BtCT%2BL%2B2IxKoWvpjkAiBCRXzcYmRbOatcLsf34fYtUOtSc%2FpYSCdYECtZIJXv2yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMl3LWFd7REKgDMRh1KtwDTWZ92ZRH4slfGjB5INje1urTpZoJpsxMcqrChn6Mi8eUwwnl4uNgcDX%2BWtj%2FJuQjisWlJYWC2DFRn%2BwTW0Bxeh8VdeIMBiru9O7NjO1yCUiWjjpfLCvYqvK5qnAy1TU9w4VM3VL%2FqsgAPT0M91CXtrBRWuHPrIAPfGNW1NkuGPTOl7iLzmQUHjhRVX%2FlE8juabGcrr%2By%2Fe9nI9GOctmLeHvrFOxNrKEAZpqXT4HFOE3nt4K4k4b1wXmpHpEDqmZWzQWFmRwcQ9ZuMD5CW2kDWB%2FD3v%2FWo5HjRpnnjlVL%2BtXUzLcAuPRJpWiymo0r4McEX9KxUc45C%2BOc5ySvBdyljJcQ7%2FqSAHwG1V8VuScQh1s8rB2iuwz%2F%2B1KbeQzrx%2FsPcxUqOpiMV25%2BxNKAMS7ZiR0xLt8dhmS02%2FRzbi%2F2jvufk1pTaDaupWFfVSvCKpuHnZGbZA%2F43w7G9nhpVPMMNx9x1RcQQzHaEvfyTfVRiUTD1cSkGrCMwNEjnGULd9g9TnaPR6Ezmpmc66OPMS9xUjBpGKoxbOm6J9taUUWy35E9XKNHO%2BssuM0K5ssq0GDLtSn8mkoKRT1mTlKmSiGPFLG2ahO0RgNiusz8IViT59olDJo1jTcfLh45u40wgcq7ygY6pgFASZ5koU7GyMeg1NTc3%2B59vaNxKe8fyq9dU8NDhfy48WApI5qCkrflHOC3isFUgPMcDzRzJavXxD1zkaEMTc6N%2B7K3QPJiXIyWnfnKiXvpNiQcAjj3ThMf7kHttR%2BOlwdHwiXHOHFstaWr669FrOnpPGbhRVWOhyV7bREURdIPR8ZOuI0EOR6mXCS4KkACfs0u2JrqqX6WxT0RKBJEFWId0LSwISZ2&X-Amz-Signature=5f31218aac61277db48ca61583607ccc9ef0cfebc53faffe12713515ef4f43e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


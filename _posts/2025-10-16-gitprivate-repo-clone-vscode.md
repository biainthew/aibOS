---
layout: post
title: "[Git]private repo clone vscode"
date: 2023-06-01
categories: [general]
tags: [Work]
excerpt_separator: ""
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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYT7RXX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAIB%2FVrtyfgLsPywquWnaXDrs3S2gQv43OmOt7NwR8MqAiEAzH8CZVep9kcnpNdw2IJTJZwupEb9gJp8SFhrpGurobQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNO4%2BA%2FLKeafdIxWfCrcA7ds8cccnZxunHiSWXQNJSIw%2BdK4ilT6U795mrIv%2BX4kyAe2RIhmdhhb%2FbKxZ2nV8xcF%2F%2B5eyD%2Bt4sodNHNKypoZiG%2FpCvy%2FVHtqnYBf1mOYSPLBdzcrM7ZCQeE3JnnA2kuJu4E1o6wfP31fbpY8SYShDYBLxlIm3sSg%2BaLEhVAZS0Yod0FqX1wGoMIXliSxusCAnczFdxJRzI5aG9QAjnfB08LvnfalgQ%2F52A7rv6tujzLXxHQ6hQlT55NN32ZxRG8Dbw0sNTgwrdT7El1y6LP9hki%2BcEhHB5oIg7PJ91XR7mVnZJ%2BO66QMv1np%2FhB2w8VB6S4tK4PsDIQ%2BlBNVxpBWUNxUvDQJ5dUciTPiuTMyGjvIPta59jhgW3fDe18T6PzRKCl1kXGDkxB1%2BI8SACLaJyzvmzeZQuzUUlEyFxHPe8NAa8YaScmjW0D6aXlITC1aKKZz%2BbDOO8CvKK3mEPeGzbTREHgM46Dob9nePKapdOe25%2Bc%2BCbi6LNelPc6Ruel6O46GjuxHkqdieHYaqAo4myD8S5XcllHT2TgoUV2Kswd3CfzanTvURc%2BSu2gKNFbgOdyWx7pnN9TEDPSfy19vu%2BiYVORzCzyIHzStZafVpKGxuWHeVrmjFvVlMJCb3csGOqUBwTU24GgtInRpW0e5sHyu0ifSE1wurSMYxfqHT6UBw%2Fl60NfkxepKRbC9DjV5FEqZXP7i9SMgEIrewcJ3tjbzPPX5iFIBoxZjxU7Bx%2FjTdqehK6fUaZLRiOTjURpMZJL5fS33jfQmgZySexFci%2BrfIYiD6IXfBqu1WssQjlpedFwntyFVnf3zu4sjdDkQYRTp%2BJ1nsPna6O5NpDng2QJf6au1mVlu&X-Amz-Signature=e2f802aa8b6fa399ffde1ec3dbcce1c91032682b4259d8891fa902586e91ded9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYT7RXX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAIB%2FVrtyfgLsPywquWnaXDrs3S2gQv43OmOt7NwR8MqAiEAzH8CZVep9kcnpNdw2IJTJZwupEb9gJp8SFhrpGurobQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNO4%2BA%2FLKeafdIxWfCrcA7ds8cccnZxunHiSWXQNJSIw%2BdK4ilT6U795mrIv%2BX4kyAe2RIhmdhhb%2FbKxZ2nV8xcF%2F%2B5eyD%2Bt4sodNHNKypoZiG%2FpCvy%2FVHtqnYBf1mOYSPLBdzcrM7ZCQeE3JnnA2kuJu4E1o6wfP31fbpY8SYShDYBLxlIm3sSg%2BaLEhVAZS0Yod0FqX1wGoMIXliSxusCAnczFdxJRzI5aG9QAjnfB08LvnfalgQ%2F52A7rv6tujzLXxHQ6hQlT55NN32ZxRG8Dbw0sNTgwrdT7El1y6LP9hki%2BcEhHB5oIg7PJ91XR7mVnZJ%2BO66QMv1np%2FhB2w8VB6S4tK4PsDIQ%2BlBNVxpBWUNxUvDQJ5dUciTPiuTMyGjvIPta59jhgW3fDe18T6PzRKCl1kXGDkxB1%2BI8SACLaJyzvmzeZQuzUUlEyFxHPe8NAa8YaScmjW0D6aXlITC1aKKZz%2BbDOO8CvKK3mEPeGzbTREHgM46Dob9nePKapdOe25%2Bc%2BCbi6LNelPc6Ruel6O46GjuxHkqdieHYaqAo4myD8S5XcllHT2TgoUV2Kswd3CfzanTvURc%2BSu2gKNFbgOdyWx7pnN9TEDPSfy19vu%2BiYVORzCzyIHzStZafVpKGxuWHeVrmjFvVlMJCb3csGOqUBwTU24GgtInRpW0e5sHyu0ifSE1wurSMYxfqHT6UBw%2Fl60NfkxepKRbC9DjV5FEqZXP7i9SMgEIrewcJ3tjbzPPX5iFIBoxZjxU7Bx%2FjTdqehK6fUaZLRiOTjURpMZJL5fS33jfQmgZySexFci%2BrfIYiD6IXfBqu1WssQjlpedFwntyFVnf3zu4sjdDkQYRTp%2BJ1nsPna6O5NpDng2QJf6au1mVlu&X-Amz-Signature=75fbf10a1da7db74f068ba07541106b9f5b8afffeab1611cf1d9fd4b1574e8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYT7RXX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAIB%2FVrtyfgLsPywquWnaXDrs3S2gQv43OmOt7NwR8MqAiEAzH8CZVep9kcnpNdw2IJTJZwupEb9gJp8SFhrpGurobQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNO4%2BA%2FLKeafdIxWfCrcA7ds8cccnZxunHiSWXQNJSIw%2BdK4ilT6U795mrIv%2BX4kyAe2RIhmdhhb%2FbKxZ2nV8xcF%2F%2B5eyD%2Bt4sodNHNKypoZiG%2FpCvy%2FVHtqnYBf1mOYSPLBdzcrM7ZCQeE3JnnA2kuJu4E1o6wfP31fbpY8SYShDYBLxlIm3sSg%2BaLEhVAZS0Yod0FqX1wGoMIXliSxusCAnczFdxJRzI5aG9QAjnfB08LvnfalgQ%2F52A7rv6tujzLXxHQ6hQlT55NN32ZxRG8Dbw0sNTgwrdT7El1y6LP9hki%2BcEhHB5oIg7PJ91XR7mVnZJ%2BO66QMv1np%2FhB2w8VB6S4tK4PsDIQ%2BlBNVxpBWUNxUvDQJ5dUciTPiuTMyGjvIPta59jhgW3fDe18T6PzRKCl1kXGDkxB1%2BI8SACLaJyzvmzeZQuzUUlEyFxHPe8NAa8YaScmjW0D6aXlITC1aKKZz%2BbDOO8CvKK3mEPeGzbTREHgM46Dob9nePKapdOe25%2Bc%2BCbi6LNelPc6Ruel6O46GjuxHkqdieHYaqAo4myD8S5XcllHT2TgoUV2Kswd3CfzanTvURc%2BSu2gKNFbgOdyWx7pnN9TEDPSfy19vu%2BiYVORzCzyIHzStZafVpKGxuWHeVrmjFvVlMJCb3csGOqUBwTU24GgtInRpW0e5sHyu0ifSE1wurSMYxfqHT6UBw%2Fl60NfkxepKRbC9DjV5FEqZXP7i9SMgEIrewcJ3tjbzPPX5iFIBoxZjxU7Bx%2FjTdqehK6fUaZLRiOTjURpMZJL5fS33jfQmgZySexFci%2BrfIYiD6IXfBqu1WssQjlpedFwntyFVnf3zu4sjdDkQYRTp%2BJ1nsPna6O5NpDng2QJf6au1mVlu&X-Amz-Signature=3c574107be8a1643ff37fec4656800b5eb108cfc34939f2e4892da7b7bafce8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYT7RXX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAIB%2FVrtyfgLsPywquWnaXDrs3S2gQv43OmOt7NwR8MqAiEAzH8CZVep9kcnpNdw2IJTJZwupEb9gJp8SFhrpGurobQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNO4%2BA%2FLKeafdIxWfCrcA7ds8cccnZxunHiSWXQNJSIw%2BdK4ilT6U795mrIv%2BX4kyAe2RIhmdhhb%2FbKxZ2nV8xcF%2F%2B5eyD%2Bt4sodNHNKypoZiG%2FpCvy%2FVHtqnYBf1mOYSPLBdzcrM7ZCQeE3JnnA2kuJu4E1o6wfP31fbpY8SYShDYBLxlIm3sSg%2BaLEhVAZS0Yod0FqX1wGoMIXliSxusCAnczFdxJRzI5aG9QAjnfB08LvnfalgQ%2F52A7rv6tujzLXxHQ6hQlT55NN32ZxRG8Dbw0sNTgwrdT7El1y6LP9hki%2BcEhHB5oIg7PJ91XR7mVnZJ%2BO66QMv1np%2FhB2w8VB6S4tK4PsDIQ%2BlBNVxpBWUNxUvDQJ5dUciTPiuTMyGjvIPta59jhgW3fDe18T6PzRKCl1kXGDkxB1%2BI8SACLaJyzvmzeZQuzUUlEyFxHPe8NAa8YaScmjW0D6aXlITC1aKKZz%2BbDOO8CvKK3mEPeGzbTREHgM46Dob9nePKapdOe25%2Bc%2BCbi6LNelPc6Ruel6O46GjuxHkqdieHYaqAo4myD8S5XcllHT2TgoUV2Kswd3CfzanTvURc%2BSu2gKNFbgOdyWx7pnN9TEDPSfy19vu%2BiYVORzCzyIHzStZafVpKGxuWHeVrmjFvVlMJCb3csGOqUBwTU24GgtInRpW0e5sHyu0ifSE1wurSMYxfqHT6UBw%2Fl60NfkxepKRbC9DjV5FEqZXP7i9SMgEIrewcJ3tjbzPPX5iFIBoxZjxU7Bx%2FjTdqehK6fUaZLRiOTjURpMZJL5fS33jfQmgZySexFci%2BrfIYiD6IXfBqu1WssQjlpedFwntyFVnf3zu4sjdDkQYRTp%2BJ1nsPna6O5NpDng2QJf6au1mVlu&X-Amz-Signature=8c4eaaf6387bd5c513e6f01189b8a3bf29c4416ca097542c771c7937784059e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


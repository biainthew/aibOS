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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVONHGUG%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNDcpD7NUcMl1ZkpikmOwo8sUCizOc457NuK%2F%2FnM0mYAiEAlRzpTA%2FwKiwlPZlvi7z861%2FUfWJKgyACpyp0EmkwtkUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ9%2BYnFZ5I0wCUsBCrcA73Lk1vArMoaPUQG52roCDwg4Co%2FeLCJ11k9UQNMioojDi202pBrD9c9Cear%2BirybtHw%2FBUqdLjMrhkmHHqOtW3YLa%2B3cc%2Fc5QmHDN1hbH4LbXK%2Fa%2FB7Yp3QIF%2FvifOOu3fpbrJJWg8tdSzknQVP4N%2FTUhEBp27YlT2w9h%2Bih7z4VQXdyFIgVO62IdAuz01o34wyW%2Bz06cAcdF1ejc56dtYwH300Jwl9%2B7HW13WosPRudThcnftT3p1je3fEFi%2FxyD7S%2B%2B4672GBBKvu1okEwUN7nBUqTy1hhykJkD9fSRC5oZgqfgPYwp4a%2BCz8W6x7j4x%2FE1AddzEOLfoafEvGLF4m0kqjCaM3rxYIj3ziyfzU2GFIrmpF3XUlxsLabIm8iisrpuaImhXS70wtOrlWvWfUuNRTuGm6q3l1BGpBLZNEIb8TPd0VXjp1T7hzTAEqtne%2FaiMHZfTkbb8JcaFpj0xNvoRcqaVfOIXvO3x9iR2szEd5P2Ui7kQrl8qvks18vbhoVSvHKE8KMC9VrmChwWZ0iRtFTJnoOQv2nvbxn9wCKob8hi0FOcyR2Cde0CkJU142Rue90zeVLufrCiEIkjXwDZ4l7Z%2Fej01BruJTruJhFMDFvshYgRnncczUMNvS0MoGOqUB10Cbnyyem%2Bn6XoqOhrEZnGV5L5qiKa4X4VgQ1aJfPitBX7b30XWCDOzUgvKqYVTdrFIRrO%2B0sGsqnbn2XcsCDmYIBAwLWiGuVHbzWQfTS0j0yiP%2FSTAL3WYU5VGrVn5ha60sjwCXS3z8wqeJLCStdOIKLc3qziX%2FUzcuFRFE3R4WSiaUvdOYAIlWOJ15WJwvXVbnU5kcVH1p3vccDguAaYhm%2B6eU&X-Amz-Signature=f2d4677b446e77a1c45efba8b32648f0328f6947ae7ce380f67593a4b2b836f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVONHGUG%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNDcpD7NUcMl1ZkpikmOwo8sUCizOc457NuK%2F%2FnM0mYAiEAlRzpTA%2FwKiwlPZlvi7z861%2FUfWJKgyACpyp0EmkwtkUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ9%2BYnFZ5I0wCUsBCrcA73Lk1vArMoaPUQG52roCDwg4Co%2FeLCJ11k9UQNMioojDi202pBrD9c9Cear%2BirybtHw%2FBUqdLjMrhkmHHqOtW3YLa%2B3cc%2Fc5QmHDN1hbH4LbXK%2Fa%2FB7Yp3QIF%2FvifOOu3fpbrJJWg8tdSzknQVP4N%2FTUhEBp27YlT2w9h%2Bih7z4VQXdyFIgVO62IdAuz01o34wyW%2Bz06cAcdF1ejc56dtYwH300Jwl9%2B7HW13WosPRudThcnftT3p1je3fEFi%2FxyD7S%2B%2B4672GBBKvu1okEwUN7nBUqTy1hhykJkD9fSRC5oZgqfgPYwp4a%2BCz8W6x7j4x%2FE1AddzEOLfoafEvGLF4m0kqjCaM3rxYIj3ziyfzU2GFIrmpF3XUlxsLabIm8iisrpuaImhXS70wtOrlWvWfUuNRTuGm6q3l1BGpBLZNEIb8TPd0VXjp1T7hzTAEqtne%2FaiMHZfTkbb8JcaFpj0xNvoRcqaVfOIXvO3x9iR2szEd5P2Ui7kQrl8qvks18vbhoVSvHKE8KMC9VrmChwWZ0iRtFTJnoOQv2nvbxn9wCKob8hi0FOcyR2Cde0CkJU142Rue90zeVLufrCiEIkjXwDZ4l7Z%2Fej01BruJTruJhFMDFvshYgRnncczUMNvS0MoGOqUB10Cbnyyem%2Bn6XoqOhrEZnGV5L5qiKa4X4VgQ1aJfPitBX7b30XWCDOzUgvKqYVTdrFIRrO%2B0sGsqnbn2XcsCDmYIBAwLWiGuVHbzWQfTS0j0yiP%2FSTAL3WYU5VGrVn5ha60sjwCXS3z8wqeJLCStdOIKLc3qziX%2FUzcuFRFE3R4WSiaUvdOYAIlWOJ15WJwvXVbnU5kcVH1p3vccDguAaYhm%2B6eU&X-Amz-Signature=5ff6df797e38f842168f91f7c52c01fffcceb37440aed796f9a6677fae45ff4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVONHGUG%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNDcpD7NUcMl1ZkpikmOwo8sUCizOc457NuK%2F%2FnM0mYAiEAlRzpTA%2FwKiwlPZlvi7z861%2FUfWJKgyACpyp0EmkwtkUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ9%2BYnFZ5I0wCUsBCrcA73Lk1vArMoaPUQG52roCDwg4Co%2FeLCJ11k9UQNMioojDi202pBrD9c9Cear%2BirybtHw%2FBUqdLjMrhkmHHqOtW3YLa%2B3cc%2Fc5QmHDN1hbH4LbXK%2Fa%2FB7Yp3QIF%2FvifOOu3fpbrJJWg8tdSzknQVP4N%2FTUhEBp27YlT2w9h%2Bih7z4VQXdyFIgVO62IdAuz01o34wyW%2Bz06cAcdF1ejc56dtYwH300Jwl9%2B7HW13WosPRudThcnftT3p1je3fEFi%2FxyD7S%2B%2B4672GBBKvu1okEwUN7nBUqTy1hhykJkD9fSRC5oZgqfgPYwp4a%2BCz8W6x7j4x%2FE1AddzEOLfoafEvGLF4m0kqjCaM3rxYIj3ziyfzU2GFIrmpF3XUlxsLabIm8iisrpuaImhXS70wtOrlWvWfUuNRTuGm6q3l1BGpBLZNEIb8TPd0VXjp1T7hzTAEqtne%2FaiMHZfTkbb8JcaFpj0xNvoRcqaVfOIXvO3x9iR2szEd5P2Ui7kQrl8qvks18vbhoVSvHKE8KMC9VrmChwWZ0iRtFTJnoOQv2nvbxn9wCKob8hi0FOcyR2Cde0CkJU142Rue90zeVLufrCiEIkjXwDZ4l7Z%2Fej01BruJTruJhFMDFvshYgRnncczUMNvS0MoGOqUB10Cbnyyem%2Bn6XoqOhrEZnGV5L5qiKa4X4VgQ1aJfPitBX7b30XWCDOzUgvKqYVTdrFIRrO%2B0sGsqnbn2XcsCDmYIBAwLWiGuVHbzWQfTS0j0yiP%2FSTAL3WYU5VGrVn5ha60sjwCXS3z8wqeJLCStdOIKLc3qziX%2FUzcuFRFE3R4WSiaUvdOYAIlWOJ15WJwvXVbnU5kcVH1p3vccDguAaYhm%2B6eU&X-Amz-Signature=6eb4fb02248c126175b352d802f5f3b0fb0cb97b8c86660d600fd6643355e43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVONHGUG%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNDcpD7NUcMl1ZkpikmOwo8sUCizOc457NuK%2F%2FnM0mYAiEAlRzpTA%2FwKiwlPZlvi7z861%2FUfWJKgyACpyp0EmkwtkUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ9%2BYnFZ5I0wCUsBCrcA73Lk1vArMoaPUQG52roCDwg4Co%2FeLCJ11k9UQNMioojDi202pBrD9c9Cear%2BirybtHw%2FBUqdLjMrhkmHHqOtW3YLa%2B3cc%2Fc5QmHDN1hbH4LbXK%2Fa%2FB7Yp3QIF%2FvifOOu3fpbrJJWg8tdSzknQVP4N%2FTUhEBp27YlT2w9h%2Bih7z4VQXdyFIgVO62IdAuz01o34wyW%2Bz06cAcdF1ejc56dtYwH300Jwl9%2B7HW13WosPRudThcnftT3p1je3fEFi%2FxyD7S%2B%2B4672GBBKvu1okEwUN7nBUqTy1hhykJkD9fSRC5oZgqfgPYwp4a%2BCz8W6x7j4x%2FE1AddzEOLfoafEvGLF4m0kqjCaM3rxYIj3ziyfzU2GFIrmpF3XUlxsLabIm8iisrpuaImhXS70wtOrlWvWfUuNRTuGm6q3l1BGpBLZNEIb8TPd0VXjp1T7hzTAEqtne%2FaiMHZfTkbb8JcaFpj0xNvoRcqaVfOIXvO3x9iR2szEd5P2Ui7kQrl8qvks18vbhoVSvHKE8KMC9VrmChwWZ0iRtFTJnoOQv2nvbxn9wCKob8hi0FOcyR2Cde0CkJU142Rue90zeVLufrCiEIkjXwDZ4l7Z%2Fej01BruJTruJhFMDFvshYgRnncczUMNvS0MoGOqUB10Cbnyyem%2Bn6XoqOhrEZnGV5L5qiKa4X4VgQ1aJfPitBX7b30XWCDOzUgvKqYVTdrFIRrO%2B0sGsqnbn2XcsCDmYIBAwLWiGuVHbzWQfTS0j0yiP%2FSTAL3WYU5VGrVn5ha60sjwCXS3z8wqeJLCStdOIKLc3qziX%2FUzcuFRFE3R4WSiaUvdOYAIlWOJ15WJwvXVbnU5kcVH1p3vccDguAaYhm%2B6eU&X-Amz-Signature=7114c94c583782c1ad5eabc9ccf6925545eee9b3113aaea879e4d5aa70299f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


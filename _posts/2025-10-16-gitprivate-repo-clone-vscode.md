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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4J4H6DF%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIEz49VCGOhIs3bg85AhDd98Tpx%2Fvq4VBfou9DBAsf0wIhAJK%2B2fqVRVeKK6k4Rk51HlgokbdMOm2VIsiY5KrvwUtKKv8DCHAQABoMNjM3NDIzMTgzODA1Igyz3GsF19Jki5MnQ6wq3AMG41UJKRWcDlLkBJmRGg8pWDHInNVTKuLc0FLqJadoiHMG65YeUFiBn1DkbT0TKW178ZDIwmx8cWhCOIsS2kAC48hLMhPdu8bEpnolvNtdMg7s3udJJ%2BxWt9D%2Fr7eUzgFgFCBj2tBpSfyTC7UT%2FT1WXY7l5KCBGxaA1SjhXqi0qotIYd6mQSADRg0nW%2Bzl2nsch0wcQbvTr2IK%2FBcGqR17tuhn7Cw8tVp6qTubEWLkBlg1nLHHC26vwfSg9KbriWn8zKr5aEadiNVbRNrQgqfXU85U5NGag8KUc0xTAbbZWyHlTtr0Zsca%2FoTHmlEuZhzdbut%2FiDydPV6QMphhelj1jyvlbhLyu0jzs%2BW2rN%2F2xR7EegAkIe7ztGgCg8Xf7Oavpf4aX9Cjt89uhFQ1EcsCoOIvi4xDNLFCe0PJAGs03lXpsnWqDxVqggS63ViGqysZTkPMtZ0ytsIuCu72UY%2BZAFPK%2BdEWSEutoJZVXO0H%2BesXDFlpBFxcV7bu9WVOZtltxGw5GndR2cxh5Pl6rDkBJjUHXA%2BE33b%2F%2B9h%2BJ6x8AuP02tZkWCXXSKuFoXTzwi0EkZ0i10vUtV55Kvt2MUVo8kuiR1vds7krhiTITT2pcp2BVhrYje65gQaMmzDIobDLBjqkAUC5sQex8O00hKzi0F7OmIY15kj8q4ToX%2FOeZFMYSHZUCMq59yld2SF92FmfUZF%2Bp%2Feoj%2BSD5P%2FHUuTIaw0pfeSDAJiaqmZ0raUjL2H2gT1QP1aMoQOE5yLe%2F1sj9PCxSxoAQsqo%2BRiuvVvNjDwSfFcmx%2FtoxdYscNjPN84DR0Yi2ICyEVA8utR5B9OjtNtQtjKHrC9I%2B4MnoHkSQ5YoMZMWlhsC&X-Amz-Signature=ed5e707d8dd01a5851cf8bcc9ab81c5e18e867519d530a9976f26292bb2ac53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4J4H6DF%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIEz49VCGOhIs3bg85AhDd98Tpx%2Fvq4VBfou9DBAsf0wIhAJK%2B2fqVRVeKK6k4Rk51HlgokbdMOm2VIsiY5KrvwUtKKv8DCHAQABoMNjM3NDIzMTgzODA1Igyz3GsF19Jki5MnQ6wq3AMG41UJKRWcDlLkBJmRGg8pWDHInNVTKuLc0FLqJadoiHMG65YeUFiBn1DkbT0TKW178ZDIwmx8cWhCOIsS2kAC48hLMhPdu8bEpnolvNtdMg7s3udJJ%2BxWt9D%2Fr7eUzgFgFCBj2tBpSfyTC7UT%2FT1WXY7l5KCBGxaA1SjhXqi0qotIYd6mQSADRg0nW%2Bzl2nsch0wcQbvTr2IK%2FBcGqR17tuhn7Cw8tVp6qTubEWLkBlg1nLHHC26vwfSg9KbriWn8zKr5aEadiNVbRNrQgqfXU85U5NGag8KUc0xTAbbZWyHlTtr0Zsca%2FoTHmlEuZhzdbut%2FiDydPV6QMphhelj1jyvlbhLyu0jzs%2BW2rN%2F2xR7EegAkIe7ztGgCg8Xf7Oavpf4aX9Cjt89uhFQ1EcsCoOIvi4xDNLFCe0PJAGs03lXpsnWqDxVqggS63ViGqysZTkPMtZ0ytsIuCu72UY%2BZAFPK%2BdEWSEutoJZVXO0H%2BesXDFlpBFxcV7bu9WVOZtltxGw5GndR2cxh5Pl6rDkBJjUHXA%2BE33b%2F%2B9h%2BJ6x8AuP02tZkWCXXSKuFoXTzwi0EkZ0i10vUtV55Kvt2MUVo8kuiR1vds7krhiTITT2pcp2BVhrYje65gQaMmzDIobDLBjqkAUC5sQex8O00hKzi0F7OmIY15kj8q4ToX%2FOeZFMYSHZUCMq59yld2SF92FmfUZF%2Bp%2Feoj%2BSD5P%2FHUuTIaw0pfeSDAJiaqmZ0raUjL2H2gT1QP1aMoQOE5yLe%2F1sj9PCxSxoAQsqo%2BRiuvVvNjDwSfFcmx%2FtoxdYscNjPN84DR0Yi2ICyEVA8utR5B9OjtNtQtjKHrC9I%2B4MnoHkSQ5YoMZMWlhsC&X-Amz-Signature=f9f4673a71714d96d01d338e4ecb9eed66a7d11cba3022aabf68a9416a9fe6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4J4H6DF%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIEz49VCGOhIs3bg85AhDd98Tpx%2Fvq4VBfou9DBAsf0wIhAJK%2B2fqVRVeKK6k4Rk51HlgokbdMOm2VIsiY5KrvwUtKKv8DCHAQABoMNjM3NDIzMTgzODA1Igyz3GsF19Jki5MnQ6wq3AMG41UJKRWcDlLkBJmRGg8pWDHInNVTKuLc0FLqJadoiHMG65YeUFiBn1DkbT0TKW178ZDIwmx8cWhCOIsS2kAC48hLMhPdu8bEpnolvNtdMg7s3udJJ%2BxWt9D%2Fr7eUzgFgFCBj2tBpSfyTC7UT%2FT1WXY7l5KCBGxaA1SjhXqi0qotIYd6mQSADRg0nW%2Bzl2nsch0wcQbvTr2IK%2FBcGqR17tuhn7Cw8tVp6qTubEWLkBlg1nLHHC26vwfSg9KbriWn8zKr5aEadiNVbRNrQgqfXU85U5NGag8KUc0xTAbbZWyHlTtr0Zsca%2FoTHmlEuZhzdbut%2FiDydPV6QMphhelj1jyvlbhLyu0jzs%2BW2rN%2F2xR7EegAkIe7ztGgCg8Xf7Oavpf4aX9Cjt89uhFQ1EcsCoOIvi4xDNLFCe0PJAGs03lXpsnWqDxVqggS63ViGqysZTkPMtZ0ytsIuCu72UY%2BZAFPK%2BdEWSEutoJZVXO0H%2BesXDFlpBFxcV7bu9WVOZtltxGw5GndR2cxh5Pl6rDkBJjUHXA%2BE33b%2F%2B9h%2BJ6x8AuP02tZkWCXXSKuFoXTzwi0EkZ0i10vUtV55Kvt2MUVo8kuiR1vds7krhiTITT2pcp2BVhrYje65gQaMmzDIobDLBjqkAUC5sQex8O00hKzi0F7OmIY15kj8q4ToX%2FOeZFMYSHZUCMq59yld2SF92FmfUZF%2Bp%2Feoj%2BSD5P%2FHUuTIaw0pfeSDAJiaqmZ0raUjL2H2gT1QP1aMoQOE5yLe%2F1sj9PCxSxoAQsqo%2BRiuvVvNjDwSfFcmx%2FtoxdYscNjPN84DR0Yi2ICyEVA8utR5B9OjtNtQtjKHrC9I%2B4MnoHkSQ5YoMZMWlhsC&X-Amz-Signature=65da5797fa38f0a4cbbaf456093a42d500d490042c1d1168896a0b74e7914357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4J4H6DF%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIEz49VCGOhIs3bg85AhDd98Tpx%2Fvq4VBfou9DBAsf0wIhAJK%2B2fqVRVeKK6k4Rk51HlgokbdMOm2VIsiY5KrvwUtKKv8DCHAQABoMNjM3NDIzMTgzODA1Igyz3GsF19Jki5MnQ6wq3AMG41UJKRWcDlLkBJmRGg8pWDHInNVTKuLc0FLqJadoiHMG65YeUFiBn1DkbT0TKW178ZDIwmx8cWhCOIsS2kAC48hLMhPdu8bEpnolvNtdMg7s3udJJ%2BxWt9D%2Fr7eUzgFgFCBj2tBpSfyTC7UT%2FT1WXY7l5KCBGxaA1SjhXqi0qotIYd6mQSADRg0nW%2Bzl2nsch0wcQbvTr2IK%2FBcGqR17tuhn7Cw8tVp6qTubEWLkBlg1nLHHC26vwfSg9KbriWn8zKr5aEadiNVbRNrQgqfXU85U5NGag8KUc0xTAbbZWyHlTtr0Zsca%2FoTHmlEuZhzdbut%2FiDydPV6QMphhelj1jyvlbhLyu0jzs%2BW2rN%2F2xR7EegAkIe7ztGgCg8Xf7Oavpf4aX9Cjt89uhFQ1EcsCoOIvi4xDNLFCe0PJAGs03lXpsnWqDxVqggS63ViGqysZTkPMtZ0ytsIuCu72UY%2BZAFPK%2BdEWSEutoJZVXO0H%2BesXDFlpBFxcV7bu9WVOZtltxGw5GndR2cxh5Pl6rDkBJjUHXA%2BE33b%2F%2B9h%2BJ6x8AuP02tZkWCXXSKuFoXTzwi0EkZ0i10vUtV55Kvt2MUVo8kuiR1vds7krhiTITT2pcp2BVhrYje65gQaMmzDIobDLBjqkAUC5sQex8O00hKzi0F7OmIY15kj8q4ToX%2FOeZFMYSHZUCMq59yld2SF92FmfUZF%2Bp%2Feoj%2BSD5P%2FHUuTIaw0pfeSDAJiaqmZ0raUjL2H2gT1QP1aMoQOE5yLe%2F1sj9PCxSxoAQsqo%2BRiuvVvNjDwSfFcmx%2FtoxdYscNjPN84DR0Yi2ICyEVA8utR5B9OjtNtQtjKHrC9I%2B4MnoHkSQ5YoMZMWlhsC&X-Amz-Signature=dd9c32b91d3008f8cc7f5bab096540d5b2e78720a00f2c490004e10f6e753b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


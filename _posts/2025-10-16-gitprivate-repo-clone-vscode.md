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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQX5AADG%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICd%2BWXrnsIeuOGCg5YAwLFqicvia36iI%2FVlfF76cTBlmAiAUOajy4CW7710KJ0ptV0rnzSYbLkXQh%2BHJ14YGbVcXrir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMVpRTD6ECXQyIu%2BZQKtwDGwiMLbszAGjDGQnH%2BBP1dHOchhWhYttaFnz5uOYKz6f07R7xy%2BZ%2Bc9Jzdpcyx9YtlQrPHcE9W%2BeH7Ub5tHoAT5q%2BDCp6lzhMfBdR%2FJ4LQcxqkIDEPZc%2BxNbG4UFE%2FdeLxvAj1H3mxWaehgaYnlDXw%2FazguvwGwPyQfOMDsU5t3GiDaF63pp90Mymbr04l2ZU3OSp9PVfatosHzGMpO1gYna8fJMy3dEfK3WevnMfXBS0%2BHfyW2%2BXEq6XtYdGGhx9%2BicCdN%2F9E0dJs%2FAR8IcUgGeGgtTMC411OOxfJZC8u0oyiLf3OnaIHjIqDRXWm%2FlY0pCFDNO1%2FOuv%2FmXdPQNG7V9K2SsVAR%2FNxDW5YV%2Ff3Itgy72kXOuy3rE8GSY69SXXm6jOA7qpX7ND3Jyri%2FEE8CtV0CgJe1WvAn2wZyj86ndjGPP0DuNORWNAztaf80UsFWLW4roK5M31BNFs3rEKqAsieOYkhmibZZJZYkskZ7TJIlFgcrDC9zjvag9hwP8swZMRo05WvbOkoOHayTAtk7SMn%2FJCLouU%2BThETWUc%2BM9tAyu2S%2BoCkSABQfPjYPIsA24ckPMrlC1DS99iaGIlIW%2BzOqHgYwZx5Z2WdlZP4KIG80%2BvMTyK7rRo83wwyLDQywY6pgH%2FBu1YXtmELZKNFPIw7bYi2t9CXTnjBZvtf52xg0WtWS3B1adM8jcfmV6It%2F5Eq5uch%2B%2FQKitHVtFv%2FMTN9eym5HvacE5RYcA7Me%2FhhJHmVW%2FEl9i2VDtAar3ZUEDCy3299JWX9GJ91ngEmwHAAPn9rhOg7lWbggHhZTu5Eaf7mOulLTPJcPvbveQpXMGnSV8xRIyAHCh9o1yoAWcp5mNLPVNBNz2W&X-Amz-Signature=bea86df197b133ab8e1de442285f390e28803e2886c0c5a5356e951d70ee3eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQX5AADG%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICd%2BWXrnsIeuOGCg5YAwLFqicvia36iI%2FVlfF76cTBlmAiAUOajy4CW7710KJ0ptV0rnzSYbLkXQh%2BHJ14YGbVcXrir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMVpRTD6ECXQyIu%2BZQKtwDGwiMLbszAGjDGQnH%2BBP1dHOchhWhYttaFnz5uOYKz6f07R7xy%2BZ%2Bc9Jzdpcyx9YtlQrPHcE9W%2BeH7Ub5tHoAT5q%2BDCp6lzhMfBdR%2FJ4LQcxqkIDEPZc%2BxNbG4UFE%2FdeLxvAj1H3mxWaehgaYnlDXw%2FazguvwGwPyQfOMDsU5t3GiDaF63pp90Mymbr04l2ZU3OSp9PVfatosHzGMpO1gYna8fJMy3dEfK3WevnMfXBS0%2BHfyW2%2BXEq6XtYdGGhx9%2BicCdN%2F9E0dJs%2FAR8IcUgGeGgtTMC411OOxfJZC8u0oyiLf3OnaIHjIqDRXWm%2FlY0pCFDNO1%2FOuv%2FmXdPQNG7V9K2SsVAR%2FNxDW5YV%2Ff3Itgy72kXOuy3rE8GSY69SXXm6jOA7qpX7ND3Jyri%2FEE8CtV0CgJe1WvAn2wZyj86ndjGPP0DuNORWNAztaf80UsFWLW4roK5M31BNFs3rEKqAsieOYkhmibZZJZYkskZ7TJIlFgcrDC9zjvag9hwP8swZMRo05WvbOkoOHayTAtk7SMn%2FJCLouU%2BThETWUc%2BM9tAyu2S%2BoCkSABQfPjYPIsA24ckPMrlC1DS99iaGIlIW%2BzOqHgYwZx5Z2WdlZP4KIG80%2BvMTyK7rRo83wwyLDQywY6pgH%2FBu1YXtmELZKNFPIw7bYi2t9CXTnjBZvtf52xg0WtWS3B1adM8jcfmV6It%2F5Eq5uch%2B%2FQKitHVtFv%2FMTN9eym5HvacE5RYcA7Me%2FhhJHmVW%2FEl9i2VDtAar3ZUEDCy3299JWX9GJ91ngEmwHAAPn9rhOg7lWbggHhZTu5Eaf7mOulLTPJcPvbveQpXMGnSV8xRIyAHCh9o1yoAWcp5mNLPVNBNz2W&X-Amz-Signature=e6b7838c024a1106ded69f0b45a2c310f956ba01c8f7e4ddad574d99b8f10303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQX5AADG%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICd%2BWXrnsIeuOGCg5YAwLFqicvia36iI%2FVlfF76cTBlmAiAUOajy4CW7710KJ0ptV0rnzSYbLkXQh%2BHJ14YGbVcXrir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMVpRTD6ECXQyIu%2BZQKtwDGwiMLbszAGjDGQnH%2BBP1dHOchhWhYttaFnz5uOYKz6f07R7xy%2BZ%2Bc9Jzdpcyx9YtlQrPHcE9W%2BeH7Ub5tHoAT5q%2BDCp6lzhMfBdR%2FJ4LQcxqkIDEPZc%2BxNbG4UFE%2FdeLxvAj1H3mxWaehgaYnlDXw%2FazguvwGwPyQfOMDsU5t3GiDaF63pp90Mymbr04l2ZU3OSp9PVfatosHzGMpO1gYna8fJMy3dEfK3WevnMfXBS0%2BHfyW2%2BXEq6XtYdGGhx9%2BicCdN%2F9E0dJs%2FAR8IcUgGeGgtTMC411OOxfJZC8u0oyiLf3OnaIHjIqDRXWm%2FlY0pCFDNO1%2FOuv%2FmXdPQNG7V9K2SsVAR%2FNxDW5YV%2Ff3Itgy72kXOuy3rE8GSY69SXXm6jOA7qpX7ND3Jyri%2FEE8CtV0CgJe1WvAn2wZyj86ndjGPP0DuNORWNAztaf80UsFWLW4roK5M31BNFs3rEKqAsieOYkhmibZZJZYkskZ7TJIlFgcrDC9zjvag9hwP8swZMRo05WvbOkoOHayTAtk7SMn%2FJCLouU%2BThETWUc%2BM9tAyu2S%2BoCkSABQfPjYPIsA24ckPMrlC1DS99iaGIlIW%2BzOqHgYwZx5Z2WdlZP4KIG80%2BvMTyK7rRo83wwyLDQywY6pgH%2FBu1YXtmELZKNFPIw7bYi2t9CXTnjBZvtf52xg0WtWS3B1adM8jcfmV6It%2F5Eq5uch%2B%2FQKitHVtFv%2FMTN9eym5HvacE5RYcA7Me%2FhhJHmVW%2FEl9i2VDtAar3ZUEDCy3299JWX9GJ91ngEmwHAAPn9rhOg7lWbggHhZTu5Eaf7mOulLTPJcPvbveQpXMGnSV8xRIyAHCh9o1yoAWcp5mNLPVNBNz2W&X-Amz-Signature=3e65689e88b48e0b834e4467d20b37687d8bb452bcbb26619baa0d78813fe6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQX5AADG%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICd%2BWXrnsIeuOGCg5YAwLFqicvia36iI%2FVlfF76cTBlmAiAUOajy4CW7710KJ0ptV0rnzSYbLkXQh%2BHJ14YGbVcXrir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMVpRTD6ECXQyIu%2BZQKtwDGwiMLbszAGjDGQnH%2BBP1dHOchhWhYttaFnz5uOYKz6f07R7xy%2BZ%2Bc9Jzdpcyx9YtlQrPHcE9W%2BeH7Ub5tHoAT5q%2BDCp6lzhMfBdR%2FJ4LQcxqkIDEPZc%2BxNbG4UFE%2FdeLxvAj1H3mxWaehgaYnlDXw%2FazguvwGwPyQfOMDsU5t3GiDaF63pp90Mymbr04l2ZU3OSp9PVfatosHzGMpO1gYna8fJMy3dEfK3WevnMfXBS0%2BHfyW2%2BXEq6XtYdGGhx9%2BicCdN%2F9E0dJs%2FAR8IcUgGeGgtTMC411OOxfJZC8u0oyiLf3OnaIHjIqDRXWm%2FlY0pCFDNO1%2FOuv%2FmXdPQNG7V9K2SsVAR%2FNxDW5YV%2Ff3Itgy72kXOuy3rE8GSY69SXXm6jOA7qpX7ND3Jyri%2FEE8CtV0CgJe1WvAn2wZyj86ndjGPP0DuNORWNAztaf80UsFWLW4roK5M31BNFs3rEKqAsieOYkhmibZZJZYkskZ7TJIlFgcrDC9zjvag9hwP8swZMRo05WvbOkoOHayTAtk7SMn%2FJCLouU%2BThETWUc%2BM9tAyu2S%2BoCkSABQfPjYPIsA24ckPMrlC1DS99iaGIlIW%2BzOqHgYwZx5Z2WdlZP4KIG80%2BvMTyK7rRo83wwyLDQywY6pgH%2FBu1YXtmELZKNFPIw7bYi2t9CXTnjBZvtf52xg0WtWS3B1adM8jcfmV6It%2F5Eq5uch%2B%2FQKitHVtFv%2FMTN9eym5HvacE5RYcA7Me%2FhhJHmVW%2FEl9i2VDtAar3ZUEDCy3299JWX9GJ91ngEmwHAAPn9rhOg7lWbggHhZTu5Eaf7mOulLTPJcPvbveQpXMGnSV8xRIyAHCh9o1yoAWcp5mNLPVNBNz2W&X-Amz-Signature=0ab7008cffff6dfb0a37658dc1c6b1cbeb0365aa07b16cd3e50ec92e59f4b15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


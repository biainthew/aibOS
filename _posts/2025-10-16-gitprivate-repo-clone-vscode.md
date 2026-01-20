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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWUYJDK%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyfTnPAwKxhMLdZ9wE6Au4yvIo2bSktd2ol%2FU3pxTotAiEA%2B4tLPprfCxhTFYrKvPS9cSVxfKIN%2BaupHM%2BbEawhqaYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2bCCMf26KIuHQzfCrcA0NEqtmqtXhoTfRnNmHeFI%2B6kIrDcsXkaBZ%2Btk%2Bm9rd0C2MCeQH4xE733BZJlSnG76Ms%2F0B8nRNPlLavzQCN%2FZlc%2BHcewfcyc8ysH03EjCfC%2BV4MFa8crEIdJ%2F4xbjMz9aoHEDIxpRWMaaU%2B8vBpByDznS4xeIxudV2uGYp%2BWGMmEiNkDkmKKdPihg7cNvmYnL5EzLaCqSnImVVLQUGUe%2B2iPY4DIzboMJV8ouLiGqaBBXi5s3dPzyTtfwKU7ORUnfyBv9UdPta8XoUe3uRecrpuBCY7qFod%2FDiXQYj2%2F60VhZJnOMSKvarI83Dy3q%2B4zrYyL7Ay%2BxLLKV3%2BV1gWk6BpATJHkvGFx4wL3ZlccbN7v5%2FnMwqlyUQT4ShKwe7Ilh%2Fizo%2FDilYIceQX5WO0ttafDCWa5ErwFT4Lc8qetMbYUPLBwQflatNmBCJgObsnI7BnV%2Fsel5cJmYlpi%2FBG0GF%2BAmqlDi68pHxaRDb%2FsZRM2t6wTx3npWrH3CH4cigib488pBoHmHJCQ95mr3XXWYZ1MV8eVQy2bHS1OyrnpemMcHJ1un37JQ8onGjBUZllSFgeXbM7Tc%2B2x983dqVGyLkBiQMfpZALP%2F3H9LdRHCh1Xi4veppb5g1Qat%2BDMKr5ussGOqUBezfb3iUpm4h99j0CZ8kHE4amyigYPCDf7vvrX2uUb3OX9DKu%2FifVaGhqh%2BgpIACWPh7QFgZTjnXOl0okMrD2J1%2FkfILkL%2FtHYMw0m9ZxtMgxJCiFixotKQ63ikqT2BBY%2FUQmaAD%2Bdah5rHUR9Qgsd069hOHq%2FAeUC4NTnwwZ7PC50nP0aRiTJqnjoaBJIpsGmJdLOTLbacS%2Fq0rWe%2FxALh57yrX7&X-Amz-Signature=2dde239cd07a1cf25ee6069c3f5856cfd9229e62222e0cbddfe625357bb08850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWUYJDK%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyfTnPAwKxhMLdZ9wE6Au4yvIo2bSktd2ol%2FU3pxTotAiEA%2B4tLPprfCxhTFYrKvPS9cSVxfKIN%2BaupHM%2BbEawhqaYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2bCCMf26KIuHQzfCrcA0NEqtmqtXhoTfRnNmHeFI%2B6kIrDcsXkaBZ%2Btk%2Bm9rd0C2MCeQH4xE733BZJlSnG76Ms%2F0B8nRNPlLavzQCN%2FZlc%2BHcewfcyc8ysH03EjCfC%2BV4MFa8crEIdJ%2F4xbjMz9aoHEDIxpRWMaaU%2B8vBpByDznS4xeIxudV2uGYp%2BWGMmEiNkDkmKKdPihg7cNvmYnL5EzLaCqSnImVVLQUGUe%2B2iPY4DIzboMJV8ouLiGqaBBXi5s3dPzyTtfwKU7ORUnfyBv9UdPta8XoUe3uRecrpuBCY7qFod%2FDiXQYj2%2F60VhZJnOMSKvarI83Dy3q%2B4zrYyL7Ay%2BxLLKV3%2BV1gWk6BpATJHkvGFx4wL3ZlccbN7v5%2FnMwqlyUQT4ShKwe7Ilh%2Fizo%2FDilYIceQX5WO0ttafDCWa5ErwFT4Lc8qetMbYUPLBwQflatNmBCJgObsnI7BnV%2Fsel5cJmYlpi%2FBG0GF%2BAmqlDi68pHxaRDb%2FsZRM2t6wTx3npWrH3CH4cigib488pBoHmHJCQ95mr3XXWYZ1MV8eVQy2bHS1OyrnpemMcHJ1un37JQ8onGjBUZllSFgeXbM7Tc%2B2x983dqVGyLkBiQMfpZALP%2F3H9LdRHCh1Xi4veppb5g1Qat%2BDMKr5ussGOqUBezfb3iUpm4h99j0CZ8kHE4amyigYPCDf7vvrX2uUb3OX9DKu%2FifVaGhqh%2BgpIACWPh7QFgZTjnXOl0okMrD2J1%2FkfILkL%2FtHYMw0m9ZxtMgxJCiFixotKQ63ikqT2BBY%2FUQmaAD%2Bdah5rHUR9Qgsd069hOHq%2FAeUC4NTnwwZ7PC50nP0aRiTJqnjoaBJIpsGmJdLOTLbacS%2Fq0rWe%2FxALh57yrX7&X-Amz-Signature=b50a2f8914078bff47fdec18c389d79cc40b1948b91ed96e424b2127838380ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWUYJDK%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyfTnPAwKxhMLdZ9wE6Au4yvIo2bSktd2ol%2FU3pxTotAiEA%2B4tLPprfCxhTFYrKvPS9cSVxfKIN%2BaupHM%2BbEawhqaYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2bCCMf26KIuHQzfCrcA0NEqtmqtXhoTfRnNmHeFI%2B6kIrDcsXkaBZ%2Btk%2Bm9rd0C2MCeQH4xE733BZJlSnG76Ms%2F0B8nRNPlLavzQCN%2FZlc%2BHcewfcyc8ysH03EjCfC%2BV4MFa8crEIdJ%2F4xbjMz9aoHEDIxpRWMaaU%2B8vBpByDznS4xeIxudV2uGYp%2BWGMmEiNkDkmKKdPihg7cNvmYnL5EzLaCqSnImVVLQUGUe%2B2iPY4DIzboMJV8ouLiGqaBBXi5s3dPzyTtfwKU7ORUnfyBv9UdPta8XoUe3uRecrpuBCY7qFod%2FDiXQYj2%2F60VhZJnOMSKvarI83Dy3q%2B4zrYyL7Ay%2BxLLKV3%2BV1gWk6BpATJHkvGFx4wL3ZlccbN7v5%2FnMwqlyUQT4ShKwe7Ilh%2Fizo%2FDilYIceQX5WO0ttafDCWa5ErwFT4Lc8qetMbYUPLBwQflatNmBCJgObsnI7BnV%2Fsel5cJmYlpi%2FBG0GF%2BAmqlDi68pHxaRDb%2FsZRM2t6wTx3npWrH3CH4cigib488pBoHmHJCQ95mr3XXWYZ1MV8eVQy2bHS1OyrnpemMcHJ1un37JQ8onGjBUZllSFgeXbM7Tc%2B2x983dqVGyLkBiQMfpZALP%2F3H9LdRHCh1Xi4veppb5g1Qat%2BDMKr5ussGOqUBezfb3iUpm4h99j0CZ8kHE4amyigYPCDf7vvrX2uUb3OX9DKu%2FifVaGhqh%2BgpIACWPh7QFgZTjnXOl0okMrD2J1%2FkfILkL%2FtHYMw0m9ZxtMgxJCiFixotKQ63ikqT2BBY%2FUQmaAD%2Bdah5rHUR9Qgsd069hOHq%2FAeUC4NTnwwZ7PC50nP0aRiTJqnjoaBJIpsGmJdLOTLbacS%2Fq0rWe%2FxALh57yrX7&X-Amz-Signature=f87810df68a1c97e83a22e9b18f28643049a41ae307d003feb22a52c9b81fe6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWUYJDK%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyfTnPAwKxhMLdZ9wE6Au4yvIo2bSktd2ol%2FU3pxTotAiEA%2B4tLPprfCxhTFYrKvPS9cSVxfKIN%2BaupHM%2BbEawhqaYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2bCCMf26KIuHQzfCrcA0NEqtmqtXhoTfRnNmHeFI%2B6kIrDcsXkaBZ%2Btk%2Bm9rd0C2MCeQH4xE733BZJlSnG76Ms%2F0B8nRNPlLavzQCN%2FZlc%2BHcewfcyc8ysH03EjCfC%2BV4MFa8crEIdJ%2F4xbjMz9aoHEDIxpRWMaaU%2B8vBpByDznS4xeIxudV2uGYp%2BWGMmEiNkDkmKKdPihg7cNvmYnL5EzLaCqSnImVVLQUGUe%2B2iPY4DIzboMJV8ouLiGqaBBXi5s3dPzyTtfwKU7ORUnfyBv9UdPta8XoUe3uRecrpuBCY7qFod%2FDiXQYj2%2F60VhZJnOMSKvarI83Dy3q%2B4zrYyL7Ay%2BxLLKV3%2BV1gWk6BpATJHkvGFx4wL3ZlccbN7v5%2FnMwqlyUQT4ShKwe7Ilh%2Fizo%2FDilYIceQX5WO0ttafDCWa5ErwFT4Lc8qetMbYUPLBwQflatNmBCJgObsnI7BnV%2Fsel5cJmYlpi%2FBG0GF%2BAmqlDi68pHxaRDb%2FsZRM2t6wTx3npWrH3CH4cigib488pBoHmHJCQ95mr3XXWYZ1MV8eVQy2bHS1OyrnpemMcHJ1un37JQ8onGjBUZllSFgeXbM7Tc%2B2x983dqVGyLkBiQMfpZALP%2F3H9LdRHCh1Xi4veppb5g1Qat%2BDMKr5ussGOqUBezfb3iUpm4h99j0CZ8kHE4amyigYPCDf7vvrX2uUb3OX9DKu%2FifVaGhqh%2BgpIACWPh7QFgZTjnXOl0okMrD2J1%2FkfILkL%2FtHYMw0m9ZxtMgxJCiFixotKQ63ikqT2BBY%2FUQmaAD%2Bdah5rHUR9Qgsd069hOHq%2FAeUC4NTnwwZ7PC50nP0aRiTJqnjoaBJIpsGmJdLOTLbacS%2Fq0rWe%2FxALh57yrX7&X-Amz-Signature=a9931fdb200613892e7634a3ae8d6d16ae50a5f954306021917583df328c02a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


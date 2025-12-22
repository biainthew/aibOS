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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JRC5M2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFG7%2FiNSIhN5varn8fq66O2JKjGBcZj5Ayd%2BZoTRVEJKAiEAgyuxMkZFAmw7sSIZUM8THwyrBSImZq%2BZVE7XY7tmUeEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6T3puSPU8U51Y%2FxyrcA5HpKTLspkk6lOZk%2BEsTNfWHFrU7wrazB0MAe3r%2Fzw6BhMO1OIUwfQ6guqC4VyXsfdl%2BFSHRSd7b3CU6EUmsFkFENoyyDMqmmwoMEwKSXYrtJAVRifjJIHSZ%2Fa7cNSHNhMm6XfcSPUaI2s8Nsmr37G5hucaSJEDEOYDmce8YWeYh40n6ZvKtPmEgvwF9Cnb%2BKAWPjvxK0wB49ULJwyiVSEHjp2W2FKiOPuLJDlTfc0S1hMzyRNt9PYuepY21lFq%2BHkAPryD1VRDEqaVnH5xy7wY3Zjxi5zldb5R%2FLe8PNXzZNv9KrTRRZLMC7Ukc9x2ZrMRQ02upPkIco2L4dMMr6sBwhHegUCdaGWgabe2trghD4iBP7UZeuwWWvgJQA0NWQyE2MHauAzb2BDX1bojM6Mbp%2F%2Fywln9KQMLmrOmP5%2F5gncpd7rQaziOqva2%2F%2F8TW3gEhbwIIJRG5EoU2erucOjVENpxlEguEIeB16yh5Sg6x1IxTrXQ0NRCLvXpdbbordFwpuXOYLOcAEFuBSdrrsVRZ%2B%2BTagD0h46MuiXwY9WJWZFa115X5OhjMYEiM710GL7QEWMcIPxNBhXvprw9k8sXQmRKiCpx8%2FkAyyT6mruoyVHj8Wg7eGb65s2K8MNT5o8oGOqUBZOc1tzwmBGnPUua8W0t7kbUHh%2BFrXLeIbC9G9g%2FcQZwppRjvfrgxl%2B9kzabLbf79FcSINuY2mdyVX9%2FLeWCDwz4HqFgvHeuOMxlxoy%2F2yRKIpa16mJnrDeazPdVeKy0jQPzARmBDDhtqvAoEFYUqjGUFqiVXLZ817HrmpvoROGlh%2BqI%2FuZKRBO%2FjG5LfgSAzARmctu9ogcEFVdX72nwNSiM5zWeY&X-Amz-Signature=f6079ce19412199034058682fb81c4191cc9544f3296271251d49ef7be662405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JRC5M2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFG7%2FiNSIhN5varn8fq66O2JKjGBcZj5Ayd%2BZoTRVEJKAiEAgyuxMkZFAmw7sSIZUM8THwyrBSImZq%2BZVE7XY7tmUeEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6T3puSPU8U51Y%2FxyrcA5HpKTLspkk6lOZk%2BEsTNfWHFrU7wrazB0MAe3r%2Fzw6BhMO1OIUwfQ6guqC4VyXsfdl%2BFSHRSd7b3CU6EUmsFkFENoyyDMqmmwoMEwKSXYrtJAVRifjJIHSZ%2Fa7cNSHNhMm6XfcSPUaI2s8Nsmr37G5hucaSJEDEOYDmce8YWeYh40n6ZvKtPmEgvwF9Cnb%2BKAWPjvxK0wB49ULJwyiVSEHjp2W2FKiOPuLJDlTfc0S1hMzyRNt9PYuepY21lFq%2BHkAPryD1VRDEqaVnH5xy7wY3Zjxi5zldb5R%2FLe8PNXzZNv9KrTRRZLMC7Ukc9x2ZrMRQ02upPkIco2L4dMMr6sBwhHegUCdaGWgabe2trghD4iBP7UZeuwWWvgJQA0NWQyE2MHauAzb2BDX1bojM6Mbp%2F%2Fywln9KQMLmrOmP5%2F5gncpd7rQaziOqva2%2F%2F8TW3gEhbwIIJRG5EoU2erucOjVENpxlEguEIeB16yh5Sg6x1IxTrXQ0NRCLvXpdbbordFwpuXOYLOcAEFuBSdrrsVRZ%2B%2BTagD0h46MuiXwY9WJWZFa115X5OhjMYEiM710GL7QEWMcIPxNBhXvprw9k8sXQmRKiCpx8%2FkAyyT6mruoyVHj8Wg7eGb65s2K8MNT5o8oGOqUBZOc1tzwmBGnPUua8W0t7kbUHh%2BFrXLeIbC9G9g%2FcQZwppRjvfrgxl%2B9kzabLbf79FcSINuY2mdyVX9%2FLeWCDwz4HqFgvHeuOMxlxoy%2F2yRKIpa16mJnrDeazPdVeKy0jQPzARmBDDhtqvAoEFYUqjGUFqiVXLZ817HrmpvoROGlh%2BqI%2FuZKRBO%2FjG5LfgSAzARmctu9ogcEFVdX72nwNSiM5zWeY&X-Amz-Signature=95758434dc1caac0bcc8d7029d5827b78183a77ce05c92897c47bbad433d0424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JRC5M2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFG7%2FiNSIhN5varn8fq66O2JKjGBcZj5Ayd%2BZoTRVEJKAiEAgyuxMkZFAmw7sSIZUM8THwyrBSImZq%2BZVE7XY7tmUeEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6T3puSPU8U51Y%2FxyrcA5HpKTLspkk6lOZk%2BEsTNfWHFrU7wrazB0MAe3r%2Fzw6BhMO1OIUwfQ6guqC4VyXsfdl%2BFSHRSd7b3CU6EUmsFkFENoyyDMqmmwoMEwKSXYrtJAVRifjJIHSZ%2Fa7cNSHNhMm6XfcSPUaI2s8Nsmr37G5hucaSJEDEOYDmce8YWeYh40n6ZvKtPmEgvwF9Cnb%2BKAWPjvxK0wB49ULJwyiVSEHjp2W2FKiOPuLJDlTfc0S1hMzyRNt9PYuepY21lFq%2BHkAPryD1VRDEqaVnH5xy7wY3Zjxi5zldb5R%2FLe8PNXzZNv9KrTRRZLMC7Ukc9x2ZrMRQ02upPkIco2L4dMMr6sBwhHegUCdaGWgabe2trghD4iBP7UZeuwWWvgJQA0NWQyE2MHauAzb2BDX1bojM6Mbp%2F%2Fywln9KQMLmrOmP5%2F5gncpd7rQaziOqva2%2F%2F8TW3gEhbwIIJRG5EoU2erucOjVENpxlEguEIeB16yh5Sg6x1IxTrXQ0NRCLvXpdbbordFwpuXOYLOcAEFuBSdrrsVRZ%2B%2BTagD0h46MuiXwY9WJWZFa115X5OhjMYEiM710GL7QEWMcIPxNBhXvprw9k8sXQmRKiCpx8%2FkAyyT6mruoyVHj8Wg7eGb65s2K8MNT5o8oGOqUBZOc1tzwmBGnPUua8W0t7kbUHh%2BFrXLeIbC9G9g%2FcQZwppRjvfrgxl%2B9kzabLbf79FcSINuY2mdyVX9%2FLeWCDwz4HqFgvHeuOMxlxoy%2F2yRKIpa16mJnrDeazPdVeKy0jQPzARmBDDhtqvAoEFYUqjGUFqiVXLZ817HrmpvoROGlh%2BqI%2FuZKRBO%2FjG5LfgSAzARmctu9ogcEFVdX72nwNSiM5zWeY&X-Amz-Signature=ae400a074f8f69ecf523007ee46ce282122cbdbc8d266138b3b0228963a38cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JRC5M2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFG7%2FiNSIhN5varn8fq66O2JKjGBcZj5Ayd%2BZoTRVEJKAiEAgyuxMkZFAmw7sSIZUM8THwyrBSImZq%2BZVE7XY7tmUeEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6T3puSPU8U51Y%2FxyrcA5HpKTLspkk6lOZk%2BEsTNfWHFrU7wrazB0MAe3r%2Fzw6BhMO1OIUwfQ6guqC4VyXsfdl%2BFSHRSd7b3CU6EUmsFkFENoyyDMqmmwoMEwKSXYrtJAVRifjJIHSZ%2Fa7cNSHNhMm6XfcSPUaI2s8Nsmr37G5hucaSJEDEOYDmce8YWeYh40n6ZvKtPmEgvwF9Cnb%2BKAWPjvxK0wB49ULJwyiVSEHjp2W2FKiOPuLJDlTfc0S1hMzyRNt9PYuepY21lFq%2BHkAPryD1VRDEqaVnH5xy7wY3Zjxi5zldb5R%2FLe8PNXzZNv9KrTRRZLMC7Ukc9x2ZrMRQ02upPkIco2L4dMMr6sBwhHegUCdaGWgabe2trghD4iBP7UZeuwWWvgJQA0NWQyE2MHauAzb2BDX1bojM6Mbp%2F%2Fywln9KQMLmrOmP5%2F5gncpd7rQaziOqva2%2F%2F8TW3gEhbwIIJRG5EoU2erucOjVENpxlEguEIeB16yh5Sg6x1IxTrXQ0NRCLvXpdbbordFwpuXOYLOcAEFuBSdrrsVRZ%2B%2BTagD0h46MuiXwY9WJWZFa115X5OhjMYEiM710GL7QEWMcIPxNBhXvprw9k8sXQmRKiCpx8%2FkAyyT6mruoyVHj8Wg7eGb65s2K8MNT5o8oGOqUBZOc1tzwmBGnPUua8W0t7kbUHh%2BFrXLeIbC9G9g%2FcQZwppRjvfrgxl%2B9kzabLbf79FcSINuY2mdyVX9%2FLeWCDwz4HqFgvHeuOMxlxoy%2F2yRKIpa16mJnrDeazPdVeKy0jQPzARmBDDhtqvAoEFYUqjGUFqiVXLZ817HrmpvoROGlh%2BqI%2FuZKRBO%2FjG5LfgSAzARmctu9ogcEFVdX72nwNSiM5zWeY&X-Amz-Signature=33bee1d7e96e21808e2050668fdc4883e39cc289caebc553460011c30c132a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


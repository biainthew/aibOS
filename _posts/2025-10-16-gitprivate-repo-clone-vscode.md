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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUBTTKG%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIA2BHz969hf3n9yGtkEZZvwrNC5JJ09I%2FlcLaFT9aau4AiEA27zmaCdnpbf%2B%2FHO%2FFXTAPHZvXs8ULfTpCyfjgZWwqsUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPG0RaA5SzRcH2NZ4ircAzHJ7fRtLL68pk%2FWYzUJBdGKZb7wr2Rk1gZJKJ6zxpViRIwGTNVImjeIy5PS1EXyvHfq8S6JKPaxYiJ73q6VbVq9whfp7ozHbUTsFCMORrrbikyACTQCiKYy4dwTyFVJwtlLfCIcUEXx8KPijauzCKNwcOYLr7lofPcIm0VHJxitllia%2BOMJPJfyZT%2F3FAy4cKXvVFT6165K9Zc0Bucy2%2Fx%2B9ov%2FqyUlkct6gSxErXLIn1d%2BNsR0drFhwtU1p6GJmw7o%2BEeGANFP7wNaIn4OS0nUsIrGWou1icQxwfOFu2mnKmGrNULsMrCN%2BlCtnGru9PP5bH13uolhjG7n6bC5RDUPIooAtM2363%2FhwB6iUw7r%2FaK7pPcG3QJnWPtkWYjjRSfgLXLq2nxIcoZeBevKbbkcm8r3LhsW8Bd6j34ALPPojEvOLzxADPL8Efut8CZHp9VezqNw4Tw2RWSwl%2Bm53IcA86Wgb872fTHGR0ZBfju%2BnW9f0%2FAHNtxzYmC7%2FvFWo3%2Bxe1Kllnf302HfbyuhxkPliENw4AbMF%2FRzqz%2FKrZp0yo%2FqpyTrimHUALUlDwiOJ09SRd5SNa76aoh34R9XsgdI1hXvx5ZyDp6b10KQnQjrcMZhS2uMH2n0jgnZML%2BEscoGOqUBGCIWZLSrRZbF2g3OEIy7VfKrjYj1RPn396YovlucX%2FtQ6UgShPLK7hrWnBpLarGiIoGwRwnhfFFH4UZwWIXfH1ia2YVsTGY20j0IFQLYaUqz5ynJPYsldlPObfu4FONefGBVN8T4hWHHRn0pTTUmr%2Bz%2B5mCSm%2B0hq3H1ZgRc81oGGmI9FNAy49Y199vNj89nE1lkYJjFc5B9PLywMBxJbWJVi4zs&X-Amz-Signature=b61326c9efb947b836a35ce3a638c8338b6071685bf82f0b3bdad5610c1bd4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUBTTKG%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIA2BHz969hf3n9yGtkEZZvwrNC5JJ09I%2FlcLaFT9aau4AiEA27zmaCdnpbf%2B%2FHO%2FFXTAPHZvXs8ULfTpCyfjgZWwqsUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPG0RaA5SzRcH2NZ4ircAzHJ7fRtLL68pk%2FWYzUJBdGKZb7wr2Rk1gZJKJ6zxpViRIwGTNVImjeIy5PS1EXyvHfq8S6JKPaxYiJ73q6VbVq9whfp7ozHbUTsFCMORrrbikyACTQCiKYy4dwTyFVJwtlLfCIcUEXx8KPijauzCKNwcOYLr7lofPcIm0VHJxitllia%2BOMJPJfyZT%2F3FAy4cKXvVFT6165K9Zc0Bucy2%2Fx%2B9ov%2FqyUlkct6gSxErXLIn1d%2BNsR0drFhwtU1p6GJmw7o%2BEeGANFP7wNaIn4OS0nUsIrGWou1icQxwfOFu2mnKmGrNULsMrCN%2BlCtnGru9PP5bH13uolhjG7n6bC5RDUPIooAtM2363%2FhwB6iUw7r%2FaK7pPcG3QJnWPtkWYjjRSfgLXLq2nxIcoZeBevKbbkcm8r3LhsW8Bd6j34ALPPojEvOLzxADPL8Efut8CZHp9VezqNw4Tw2RWSwl%2Bm53IcA86Wgb872fTHGR0ZBfju%2BnW9f0%2FAHNtxzYmC7%2FvFWo3%2Bxe1Kllnf302HfbyuhxkPliENw4AbMF%2FRzqz%2FKrZp0yo%2FqpyTrimHUALUlDwiOJ09SRd5SNa76aoh34R9XsgdI1hXvx5ZyDp6b10KQnQjrcMZhS2uMH2n0jgnZML%2BEscoGOqUBGCIWZLSrRZbF2g3OEIy7VfKrjYj1RPn396YovlucX%2FtQ6UgShPLK7hrWnBpLarGiIoGwRwnhfFFH4UZwWIXfH1ia2YVsTGY20j0IFQLYaUqz5ynJPYsldlPObfu4FONefGBVN8T4hWHHRn0pTTUmr%2Bz%2B5mCSm%2B0hq3H1ZgRc81oGGmI9FNAy49Y199vNj89nE1lkYJjFc5B9PLywMBxJbWJVi4zs&X-Amz-Signature=42f50ce22f5ede10b77168b1b4afacb26cd2957263a453698aa166821cb58dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUBTTKG%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIA2BHz969hf3n9yGtkEZZvwrNC5JJ09I%2FlcLaFT9aau4AiEA27zmaCdnpbf%2B%2FHO%2FFXTAPHZvXs8ULfTpCyfjgZWwqsUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPG0RaA5SzRcH2NZ4ircAzHJ7fRtLL68pk%2FWYzUJBdGKZb7wr2Rk1gZJKJ6zxpViRIwGTNVImjeIy5PS1EXyvHfq8S6JKPaxYiJ73q6VbVq9whfp7ozHbUTsFCMORrrbikyACTQCiKYy4dwTyFVJwtlLfCIcUEXx8KPijauzCKNwcOYLr7lofPcIm0VHJxitllia%2BOMJPJfyZT%2F3FAy4cKXvVFT6165K9Zc0Bucy2%2Fx%2B9ov%2FqyUlkct6gSxErXLIn1d%2BNsR0drFhwtU1p6GJmw7o%2BEeGANFP7wNaIn4OS0nUsIrGWou1icQxwfOFu2mnKmGrNULsMrCN%2BlCtnGru9PP5bH13uolhjG7n6bC5RDUPIooAtM2363%2FhwB6iUw7r%2FaK7pPcG3QJnWPtkWYjjRSfgLXLq2nxIcoZeBevKbbkcm8r3LhsW8Bd6j34ALPPojEvOLzxADPL8Efut8CZHp9VezqNw4Tw2RWSwl%2Bm53IcA86Wgb872fTHGR0ZBfju%2BnW9f0%2FAHNtxzYmC7%2FvFWo3%2Bxe1Kllnf302HfbyuhxkPliENw4AbMF%2FRzqz%2FKrZp0yo%2FqpyTrimHUALUlDwiOJ09SRd5SNa76aoh34R9XsgdI1hXvx5ZyDp6b10KQnQjrcMZhS2uMH2n0jgnZML%2BEscoGOqUBGCIWZLSrRZbF2g3OEIy7VfKrjYj1RPn396YovlucX%2FtQ6UgShPLK7hrWnBpLarGiIoGwRwnhfFFH4UZwWIXfH1ia2YVsTGY20j0IFQLYaUqz5ynJPYsldlPObfu4FONefGBVN8T4hWHHRn0pTTUmr%2Bz%2B5mCSm%2B0hq3H1ZgRc81oGGmI9FNAy49Y199vNj89nE1lkYJjFc5B9PLywMBxJbWJVi4zs&X-Amz-Signature=76424e0124607163cc35efcd148892c32279daec2e8f756aada92c563446a6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUBTTKG%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIA2BHz969hf3n9yGtkEZZvwrNC5JJ09I%2FlcLaFT9aau4AiEA27zmaCdnpbf%2B%2FHO%2FFXTAPHZvXs8ULfTpCyfjgZWwqsUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPG0RaA5SzRcH2NZ4ircAzHJ7fRtLL68pk%2FWYzUJBdGKZb7wr2Rk1gZJKJ6zxpViRIwGTNVImjeIy5PS1EXyvHfq8S6JKPaxYiJ73q6VbVq9whfp7ozHbUTsFCMORrrbikyACTQCiKYy4dwTyFVJwtlLfCIcUEXx8KPijauzCKNwcOYLr7lofPcIm0VHJxitllia%2BOMJPJfyZT%2F3FAy4cKXvVFT6165K9Zc0Bucy2%2Fx%2B9ov%2FqyUlkct6gSxErXLIn1d%2BNsR0drFhwtU1p6GJmw7o%2BEeGANFP7wNaIn4OS0nUsIrGWou1icQxwfOFu2mnKmGrNULsMrCN%2BlCtnGru9PP5bH13uolhjG7n6bC5RDUPIooAtM2363%2FhwB6iUw7r%2FaK7pPcG3QJnWPtkWYjjRSfgLXLq2nxIcoZeBevKbbkcm8r3LhsW8Bd6j34ALPPojEvOLzxADPL8Efut8CZHp9VezqNw4Tw2RWSwl%2Bm53IcA86Wgb872fTHGR0ZBfju%2BnW9f0%2FAHNtxzYmC7%2FvFWo3%2Bxe1Kllnf302HfbyuhxkPliENw4AbMF%2FRzqz%2FKrZp0yo%2FqpyTrimHUALUlDwiOJ09SRd5SNa76aoh34R9XsgdI1hXvx5ZyDp6b10KQnQjrcMZhS2uMH2n0jgnZML%2BEscoGOqUBGCIWZLSrRZbF2g3OEIy7VfKrjYj1RPn396YovlucX%2FtQ6UgShPLK7hrWnBpLarGiIoGwRwnhfFFH4UZwWIXfH1ia2YVsTGY20j0IFQLYaUqz5ynJPYsldlPObfu4FONefGBVN8T4hWHHRn0pTTUmr%2Bz%2B5mCSm%2B0hq3H1ZgRc81oGGmI9FNAy49Y199vNj89nE1lkYJjFc5B9PLywMBxJbWJVi4zs&X-Amz-Signature=6335ba11efc696390c4b342adf92719ffd4cabf68ad67368160fa462dbc51789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHDY4MD%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FaiYI%2BZ7Cxc%2FknV1jGqh%2BhTtKn0IqQZ4YZEsw1znFvAiEA5dbDiOdrBp7HvNnng1g8Fa0NuEfJM8CbAoGWwg%2F8kz4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1FBMdh0%2FsWGHaN3yrcA0WxwbFkq3jk%2FuqCydTkRli6SG9UY%2FyEPiAqGh0kZtN7c7d5zcQyqEw9CfgXbgGFniGSDH6Spsf6JtxnSeDAPcyHem3rULmBZaMw81nasC%2BYo5MjMsQAvKVMv5SaS83V06h8uTWsyqeZgrOH3gffDBTTegUZ38kbhn0Plk0Lk9AhtF%2FNz%2FuerYX5fXEx%2F%2BcXJqUo2GIPZEWgMvpRw9mktUtcm5Z5kNT2JkNIshENERO8a5%2FgzgDO7I7Tk3viyWRi5WYxXF%2BDpP8ATBZCMlixxHtPpUj81uxtJNHgszmcx1zStSnIt%2F6rL2XWkrFxh%2Fruteo6svX8xTvI2FHfRdPDzUEvQX5UevPzxi4ybKG04gAiZXIoqtB183yHdOMxXXKHzWb6Jv%2FZwrhLEofhWH0CCJLN1qGxOY1GeOy3wnvMGrtCvOx1rsab72QuSyr8kih3IkqqWz18J39A%2Fngcj81tGxhA1R5CxwAt22Fe3RNRH8%2F5wVjZLynHrmKr3WgWwgJetA%2BPA%2FMZ5df0R96r5KF8iwoDV9aEaH%2Fbesjx4JzJwjNiUQlkczZJG%2Fp1QzyMqyqCOY4%2BU4Pkvr0aC5K4xgomRxCPThpT6r8Yd0YOlLLgSPmDGBhvPlD4IDCs0jqsMOSt8coGOqUB9g2%2B0%2BVSPz9IccVj9FUP1lRQdRumWozefWlj5VncF4BeSpAEWdNmDkQnT958X92ZbO%2B023%2BSBtYNYCRSjfsjNdzpVKy7J21o0cMPf4dLT02Ov%2BhhMPSQw1RgfMC%2BEXb58gLwwdMdYseeuo2mSQGmiOeNyx14kQwdMEaJBRwPuKyp0XpOn5jntWwcHpapL60YEmOY97kaqrw0e9%2FEKb7KgyeM5%2FA6&X-Amz-Signature=5091495a442b26811b34880ff17d0d33c0c1f1cbbf9714d1269e2a114cc9cc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHDY4MD%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FaiYI%2BZ7Cxc%2FknV1jGqh%2BhTtKn0IqQZ4YZEsw1znFvAiEA5dbDiOdrBp7HvNnng1g8Fa0NuEfJM8CbAoGWwg%2F8kz4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1FBMdh0%2FsWGHaN3yrcA0WxwbFkq3jk%2FuqCydTkRli6SG9UY%2FyEPiAqGh0kZtN7c7d5zcQyqEw9CfgXbgGFniGSDH6Spsf6JtxnSeDAPcyHem3rULmBZaMw81nasC%2BYo5MjMsQAvKVMv5SaS83V06h8uTWsyqeZgrOH3gffDBTTegUZ38kbhn0Plk0Lk9AhtF%2FNz%2FuerYX5fXEx%2F%2BcXJqUo2GIPZEWgMvpRw9mktUtcm5Z5kNT2JkNIshENERO8a5%2FgzgDO7I7Tk3viyWRi5WYxXF%2BDpP8ATBZCMlixxHtPpUj81uxtJNHgszmcx1zStSnIt%2F6rL2XWkrFxh%2Fruteo6svX8xTvI2FHfRdPDzUEvQX5UevPzxi4ybKG04gAiZXIoqtB183yHdOMxXXKHzWb6Jv%2FZwrhLEofhWH0CCJLN1qGxOY1GeOy3wnvMGrtCvOx1rsab72QuSyr8kih3IkqqWz18J39A%2Fngcj81tGxhA1R5CxwAt22Fe3RNRH8%2F5wVjZLynHrmKr3WgWwgJetA%2BPA%2FMZ5df0R96r5KF8iwoDV9aEaH%2Fbesjx4JzJwjNiUQlkczZJG%2Fp1QzyMqyqCOY4%2BU4Pkvr0aC5K4xgomRxCPThpT6r8Yd0YOlLLgSPmDGBhvPlD4IDCs0jqsMOSt8coGOqUB9g2%2B0%2BVSPz9IccVj9FUP1lRQdRumWozefWlj5VncF4BeSpAEWdNmDkQnT958X92ZbO%2B023%2BSBtYNYCRSjfsjNdzpVKy7J21o0cMPf4dLT02Ov%2BhhMPSQw1RgfMC%2BEXb58gLwwdMdYseeuo2mSQGmiOeNyx14kQwdMEaJBRwPuKyp0XpOn5jntWwcHpapL60YEmOY97kaqrw0e9%2FEKb7KgyeM5%2FA6&X-Amz-Signature=b09afb09054ac0bbf20fa946389893b96edb74a7b8caa5847daa97214474efef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHDY4MD%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FaiYI%2BZ7Cxc%2FknV1jGqh%2BhTtKn0IqQZ4YZEsw1znFvAiEA5dbDiOdrBp7HvNnng1g8Fa0NuEfJM8CbAoGWwg%2F8kz4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1FBMdh0%2FsWGHaN3yrcA0WxwbFkq3jk%2FuqCydTkRli6SG9UY%2FyEPiAqGh0kZtN7c7d5zcQyqEw9CfgXbgGFniGSDH6Spsf6JtxnSeDAPcyHem3rULmBZaMw81nasC%2BYo5MjMsQAvKVMv5SaS83V06h8uTWsyqeZgrOH3gffDBTTegUZ38kbhn0Plk0Lk9AhtF%2FNz%2FuerYX5fXEx%2F%2BcXJqUo2GIPZEWgMvpRw9mktUtcm5Z5kNT2JkNIshENERO8a5%2FgzgDO7I7Tk3viyWRi5WYxXF%2BDpP8ATBZCMlixxHtPpUj81uxtJNHgszmcx1zStSnIt%2F6rL2XWkrFxh%2Fruteo6svX8xTvI2FHfRdPDzUEvQX5UevPzxi4ybKG04gAiZXIoqtB183yHdOMxXXKHzWb6Jv%2FZwrhLEofhWH0CCJLN1qGxOY1GeOy3wnvMGrtCvOx1rsab72QuSyr8kih3IkqqWz18J39A%2Fngcj81tGxhA1R5CxwAt22Fe3RNRH8%2F5wVjZLynHrmKr3WgWwgJetA%2BPA%2FMZ5df0R96r5KF8iwoDV9aEaH%2Fbesjx4JzJwjNiUQlkczZJG%2Fp1QzyMqyqCOY4%2BU4Pkvr0aC5K4xgomRxCPThpT6r8Yd0YOlLLgSPmDGBhvPlD4IDCs0jqsMOSt8coGOqUB9g2%2B0%2BVSPz9IccVj9FUP1lRQdRumWozefWlj5VncF4BeSpAEWdNmDkQnT958X92ZbO%2B023%2BSBtYNYCRSjfsjNdzpVKy7J21o0cMPf4dLT02Ov%2BhhMPSQw1RgfMC%2BEXb58gLwwdMdYseeuo2mSQGmiOeNyx14kQwdMEaJBRwPuKyp0XpOn5jntWwcHpapL60YEmOY97kaqrw0e9%2FEKb7KgyeM5%2FA6&X-Amz-Signature=6524273605649d206ee4d190d33e1baa2e6a8859b2bfd35475394dd3ec8dbcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHDY4MD%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T011634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FaiYI%2BZ7Cxc%2FknV1jGqh%2BhTtKn0IqQZ4YZEsw1znFvAiEA5dbDiOdrBp7HvNnng1g8Fa0NuEfJM8CbAoGWwg%2F8kz4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1FBMdh0%2FsWGHaN3yrcA0WxwbFkq3jk%2FuqCydTkRli6SG9UY%2FyEPiAqGh0kZtN7c7d5zcQyqEw9CfgXbgGFniGSDH6Spsf6JtxnSeDAPcyHem3rULmBZaMw81nasC%2BYo5MjMsQAvKVMv5SaS83V06h8uTWsyqeZgrOH3gffDBTTegUZ38kbhn0Plk0Lk9AhtF%2FNz%2FuerYX5fXEx%2F%2BcXJqUo2GIPZEWgMvpRw9mktUtcm5Z5kNT2JkNIshENERO8a5%2FgzgDO7I7Tk3viyWRi5WYxXF%2BDpP8ATBZCMlixxHtPpUj81uxtJNHgszmcx1zStSnIt%2F6rL2XWkrFxh%2Fruteo6svX8xTvI2FHfRdPDzUEvQX5UevPzxi4ybKG04gAiZXIoqtB183yHdOMxXXKHzWb6Jv%2FZwrhLEofhWH0CCJLN1qGxOY1GeOy3wnvMGrtCvOx1rsab72QuSyr8kih3IkqqWz18J39A%2Fngcj81tGxhA1R5CxwAt22Fe3RNRH8%2F5wVjZLynHrmKr3WgWwgJetA%2BPA%2FMZ5df0R96r5KF8iwoDV9aEaH%2Fbesjx4JzJwjNiUQlkczZJG%2Fp1QzyMqyqCOY4%2BU4Pkvr0aC5K4xgomRxCPThpT6r8Yd0YOlLLgSPmDGBhvPlD4IDCs0jqsMOSt8coGOqUB9g2%2B0%2BVSPz9IccVj9FUP1lRQdRumWozefWlj5VncF4BeSpAEWdNmDkQnT958X92ZbO%2B023%2BSBtYNYCRSjfsjNdzpVKy7J21o0cMPf4dLT02Ov%2BhhMPSQw1RgfMC%2BEXb58gLwwdMdYseeuo2mSQGmiOeNyx14kQwdMEaJBRwPuKyp0XpOn5jntWwcHpapL60YEmOY97kaqrw0e9%2FEKb7KgyeM5%2FA6&X-Amz-Signature=e9c5b8e4a96f56f441324b4852a7aaf33b1f594305cde88263b220d7ad892d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TWNKII%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC16vSEBdUXBODsXvlKJH7LNLdJ%2Btc3AeuI5uQ%2Fh4bR2AIgNH9kGG5GZ5Ooh63DsY%2Bmy48HMD%2FB2Veo2N1NBViN9NMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuNmS6z3OZre4wcNCrcAxTLubh%2Fmqut3yEbzkvDafIaZ43YGFi3By3XbjfMZxiWCrl8eOJnmAoipZOgYNoWlCfXMQzvzQctqD%2FZnQMSnEI2dxWrdHNs%2BiTeWVz2DWxZ3waejqt2BeuZ89d4AaqbO%2Fo%2FTb199POAO8sUoZLEpTk%2FCQwzzH4RfWf5sWl9xXGKXOhgnJM%2BPoCqlnDJFHCJZ9xCRV5aDGJHkQGNwq8RbGFJFGXyErLvFwvGx452QprBExmAZ1m4%2BDvZlP8yW660eLjTGp%2FCdf8DU4rAiWMsLJ23x4YCiwZT3urqFuj1twS6lp5HbPO8t8N4Lx9sdQZV3XSXQux9%2BmPQ530oCdJmi8atosSchX5bx1ZZLK0M5xajAFqTGUhJaD71pyj7Hq0SihP9BW1b3smWj4HVuf9tYv8wRdHcaOgUrP%2BgYXfAwLMYnIu%2BoBpTw%2BSB4cc8CTpaaBzv3gCKbjeuREflwfQoq2B32j1qaibYWAESDeZmdQad4q%2FAEBRunJ7cV3tX5iHNqWB%2F0kWcVPGpwV7EiDaS1l9d490wFLbSnm943oT7AnDtCWPR9sDrMJfn76JiaNMntAob0dX72O2pWXzI5zLLq1wOr%2BmMJxByYNvgNWvOpwzCDKPECSPIHnYTP85MMJ2kx8oGOqUB58OF7wGO1D2Od1lTcKkJMzsHTkSt68kDiZUPzun99x0qgYnCBx5i6C3s7OdUvIEojO9zV%2B2A%2FVcnv5hPFhgH0jfovh7dKx3xEE4EmnyaTPQ7Q%2FaC%2FMW4UbkYtw32aPKjF9zvlcncsun3YHt56JVnCYfi1l3YEdatGvIVEYtUZ9lqhZvRjtnRbIrVbzlQHpEeOhJh7rbMw5Hcq0vd5oBQH7X7y9xQ&X-Amz-Signature=0db5a8307267a0f51b4d06824225534343647468bb0e96878364e4de4df32436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TWNKII%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC16vSEBdUXBODsXvlKJH7LNLdJ%2Btc3AeuI5uQ%2Fh4bR2AIgNH9kGG5GZ5Ooh63DsY%2Bmy48HMD%2FB2Veo2N1NBViN9NMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuNmS6z3OZre4wcNCrcAxTLubh%2Fmqut3yEbzkvDafIaZ43YGFi3By3XbjfMZxiWCrl8eOJnmAoipZOgYNoWlCfXMQzvzQctqD%2FZnQMSnEI2dxWrdHNs%2BiTeWVz2DWxZ3waejqt2BeuZ89d4AaqbO%2Fo%2FTb199POAO8sUoZLEpTk%2FCQwzzH4RfWf5sWl9xXGKXOhgnJM%2BPoCqlnDJFHCJZ9xCRV5aDGJHkQGNwq8RbGFJFGXyErLvFwvGx452QprBExmAZ1m4%2BDvZlP8yW660eLjTGp%2FCdf8DU4rAiWMsLJ23x4YCiwZT3urqFuj1twS6lp5HbPO8t8N4Lx9sdQZV3XSXQux9%2BmPQ530oCdJmi8atosSchX5bx1ZZLK0M5xajAFqTGUhJaD71pyj7Hq0SihP9BW1b3smWj4HVuf9tYv8wRdHcaOgUrP%2BgYXfAwLMYnIu%2BoBpTw%2BSB4cc8CTpaaBzv3gCKbjeuREflwfQoq2B32j1qaibYWAESDeZmdQad4q%2FAEBRunJ7cV3tX5iHNqWB%2F0kWcVPGpwV7EiDaS1l9d490wFLbSnm943oT7AnDtCWPR9sDrMJfn76JiaNMntAob0dX72O2pWXzI5zLLq1wOr%2BmMJxByYNvgNWvOpwzCDKPECSPIHnYTP85MMJ2kx8oGOqUB58OF7wGO1D2Od1lTcKkJMzsHTkSt68kDiZUPzun99x0qgYnCBx5i6C3s7OdUvIEojO9zV%2B2A%2FVcnv5hPFhgH0jfovh7dKx3xEE4EmnyaTPQ7Q%2FaC%2FMW4UbkYtw32aPKjF9zvlcncsun3YHt56JVnCYfi1l3YEdatGvIVEYtUZ9lqhZvRjtnRbIrVbzlQHpEeOhJh7rbMw5Hcq0vd5oBQH7X7y9xQ&X-Amz-Signature=e904e793bf6a3b1d8dee130551c482fc916609cd2b496c02e719fde6833aaa88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TWNKII%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC16vSEBdUXBODsXvlKJH7LNLdJ%2Btc3AeuI5uQ%2Fh4bR2AIgNH9kGG5GZ5Ooh63DsY%2Bmy48HMD%2FB2Veo2N1NBViN9NMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuNmS6z3OZre4wcNCrcAxTLubh%2Fmqut3yEbzkvDafIaZ43YGFi3By3XbjfMZxiWCrl8eOJnmAoipZOgYNoWlCfXMQzvzQctqD%2FZnQMSnEI2dxWrdHNs%2BiTeWVz2DWxZ3waejqt2BeuZ89d4AaqbO%2Fo%2FTb199POAO8sUoZLEpTk%2FCQwzzH4RfWf5sWl9xXGKXOhgnJM%2BPoCqlnDJFHCJZ9xCRV5aDGJHkQGNwq8RbGFJFGXyErLvFwvGx452QprBExmAZ1m4%2BDvZlP8yW660eLjTGp%2FCdf8DU4rAiWMsLJ23x4YCiwZT3urqFuj1twS6lp5HbPO8t8N4Lx9sdQZV3XSXQux9%2BmPQ530oCdJmi8atosSchX5bx1ZZLK0M5xajAFqTGUhJaD71pyj7Hq0SihP9BW1b3smWj4HVuf9tYv8wRdHcaOgUrP%2BgYXfAwLMYnIu%2BoBpTw%2BSB4cc8CTpaaBzv3gCKbjeuREflwfQoq2B32j1qaibYWAESDeZmdQad4q%2FAEBRunJ7cV3tX5iHNqWB%2F0kWcVPGpwV7EiDaS1l9d490wFLbSnm943oT7AnDtCWPR9sDrMJfn76JiaNMntAob0dX72O2pWXzI5zLLq1wOr%2BmMJxByYNvgNWvOpwzCDKPECSPIHnYTP85MMJ2kx8oGOqUB58OF7wGO1D2Od1lTcKkJMzsHTkSt68kDiZUPzun99x0qgYnCBx5i6C3s7OdUvIEojO9zV%2B2A%2FVcnv5hPFhgH0jfovh7dKx3xEE4EmnyaTPQ7Q%2FaC%2FMW4UbkYtw32aPKjF9zvlcncsun3YHt56JVnCYfi1l3YEdatGvIVEYtUZ9lqhZvRjtnRbIrVbzlQHpEeOhJh7rbMw5Hcq0vd5oBQH7X7y9xQ&X-Amz-Signature=3e27bac8500bcef5d803fb0eefd3ea84c53019711580af21028ca5cd48ac4cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TWNKII%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC16vSEBdUXBODsXvlKJH7LNLdJ%2Btc3AeuI5uQ%2Fh4bR2AIgNH9kGG5GZ5Ooh63DsY%2Bmy48HMD%2FB2Veo2N1NBViN9NMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuNmS6z3OZre4wcNCrcAxTLubh%2Fmqut3yEbzkvDafIaZ43YGFi3By3XbjfMZxiWCrl8eOJnmAoipZOgYNoWlCfXMQzvzQctqD%2FZnQMSnEI2dxWrdHNs%2BiTeWVz2DWxZ3waejqt2BeuZ89d4AaqbO%2Fo%2FTb199POAO8sUoZLEpTk%2FCQwzzH4RfWf5sWl9xXGKXOhgnJM%2BPoCqlnDJFHCJZ9xCRV5aDGJHkQGNwq8RbGFJFGXyErLvFwvGx452QprBExmAZ1m4%2BDvZlP8yW660eLjTGp%2FCdf8DU4rAiWMsLJ23x4YCiwZT3urqFuj1twS6lp5HbPO8t8N4Lx9sdQZV3XSXQux9%2BmPQ530oCdJmi8atosSchX5bx1ZZLK0M5xajAFqTGUhJaD71pyj7Hq0SihP9BW1b3smWj4HVuf9tYv8wRdHcaOgUrP%2BgYXfAwLMYnIu%2BoBpTw%2BSB4cc8CTpaaBzv3gCKbjeuREflwfQoq2B32j1qaibYWAESDeZmdQad4q%2FAEBRunJ7cV3tX5iHNqWB%2F0kWcVPGpwV7EiDaS1l9d490wFLbSnm943oT7AnDtCWPR9sDrMJfn76JiaNMntAob0dX72O2pWXzI5zLLq1wOr%2BmMJxByYNvgNWvOpwzCDKPECSPIHnYTP85MMJ2kx8oGOqUB58OF7wGO1D2Od1lTcKkJMzsHTkSt68kDiZUPzun99x0qgYnCBx5i6C3s7OdUvIEojO9zV%2B2A%2FVcnv5hPFhgH0jfovh7dKx3xEE4EmnyaTPQ7Q%2FaC%2FMW4UbkYtw32aPKjF9zvlcncsun3YHt56JVnCYfi1l3YEdatGvIVEYtUZ9lqhZvRjtnRbIrVbzlQHpEeOhJh7rbMw5Hcq0vd5oBQH7X7y9xQ&X-Amz-Signature=e1cfcc3c41207c3906971be520b75ea273380b664885b81fa350a1db7340c110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MBTZ4H%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPIX08O%2FUi806Jh5jn0qcZiJ2OxsMzMDHtX4aagj7F9wIgEnC4mOzdV2XjpaJrPyS6sTxU6mfXBTg3KY%2Bi%2FrOLaDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjEvshwkyQ%2BneXPECrcA6gOHryhB8cZT4CrX5bYhlSTNJjChkNW0fVeoUL3qWtV5iu0GFZ6bCyw77WU4fMwNbg6oda22n%2FGUkKGt5kUGlrglyYq%2FsyOaC%2FEcumC%2FnB03Xw8cHVdikOGHyNCZd6P88SBK2RzESA%2BolmwSm6q8cRhfNf86pBZg85BiqD6%2BHGg5lA1VjwxY1l1zr2yREdGBMmCscmnsfXO1yuZZoNA12VzCiNv9xflo0xOA5iZySnrUeWs4aoLjVLp57tb85UXT2cgExT2hMcpphcHWgoNj8XRGNKBzD1%2BgHg4i1gopIE%2BUhgfDF17SzmI4Iu1uh95ozATMpQDK06JM%2FssjE7fQwZ6iM%2BDghnKjGOutQizs8tOUv0%2FQpb8bma8MXFgS%2FwVOfkwvYTBQqCMPtPkFvV13aiZnqp1XToThDpk6bBCC5%2BP27mm3WOHFdvOmjH2oXGr2o5I07o%2FSopXi%2BEg8fMYiHZHmyuYezlcIr7oei6ink5ULZh6K%2BVypypS4WLUVJcEoZp0KLf%2BHbEhhl%2Bei8OcsivnVO0CaBnHGrOeebm34PDnS6vQVFG62RxtZqjMr2b6NTGTzINxvRuEo7jTqJSguqGbQ2mxqvs1%2BVT00UmZAglhhG2HPrRNgNZAmrTDMNGmgcsGOqUB0pPLzHa7y54SFTWNkYox0q6glqL5xUrWb3JjqclRw2xR7Dhfh5UrHD2TUpb59vXUP1N838P4C17upqeh1poRqgNnLMKBwmfCowsG%2BdZRYPU6d7nAn83G0okBvnULPLkyi0Vy8BzafPwHu3vvUJOe7sbvCLJyFumFIaW%2BnjVC3FYgGOYi4PswU6yeIA25xMgH9UkLdnllBOuDMyrdr4r3v%2BigVRw7&X-Amz-Signature=805f0d1bc710278126192c67c988a4e7014272e6c0e600c308a5cc4800086b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MBTZ4H%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPIX08O%2FUi806Jh5jn0qcZiJ2OxsMzMDHtX4aagj7F9wIgEnC4mOzdV2XjpaJrPyS6sTxU6mfXBTg3KY%2Bi%2FrOLaDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjEvshwkyQ%2BneXPECrcA6gOHryhB8cZT4CrX5bYhlSTNJjChkNW0fVeoUL3qWtV5iu0GFZ6bCyw77WU4fMwNbg6oda22n%2FGUkKGt5kUGlrglyYq%2FsyOaC%2FEcumC%2FnB03Xw8cHVdikOGHyNCZd6P88SBK2RzESA%2BolmwSm6q8cRhfNf86pBZg85BiqD6%2BHGg5lA1VjwxY1l1zr2yREdGBMmCscmnsfXO1yuZZoNA12VzCiNv9xflo0xOA5iZySnrUeWs4aoLjVLp57tb85UXT2cgExT2hMcpphcHWgoNj8XRGNKBzD1%2BgHg4i1gopIE%2BUhgfDF17SzmI4Iu1uh95ozATMpQDK06JM%2FssjE7fQwZ6iM%2BDghnKjGOutQizs8tOUv0%2FQpb8bma8MXFgS%2FwVOfkwvYTBQqCMPtPkFvV13aiZnqp1XToThDpk6bBCC5%2BP27mm3WOHFdvOmjH2oXGr2o5I07o%2FSopXi%2BEg8fMYiHZHmyuYezlcIr7oei6ink5ULZh6K%2BVypypS4WLUVJcEoZp0KLf%2BHbEhhl%2Bei8OcsivnVO0CaBnHGrOeebm34PDnS6vQVFG62RxtZqjMr2b6NTGTzINxvRuEo7jTqJSguqGbQ2mxqvs1%2BVT00UmZAglhhG2HPrRNgNZAmrTDMNGmgcsGOqUB0pPLzHa7y54SFTWNkYox0q6glqL5xUrWb3JjqclRw2xR7Dhfh5UrHD2TUpb59vXUP1N838P4C17upqeh1poRqgNnLMKBwmfCowsG%2BdZRYPU6d7nAn83G0okBvnULPLkyi0Vy8BzafPwHu3vvUJOe7sbvCLJyFumFIaW%2BnjVC3FYgGOYi4PswU6yeIA25xMgH9UkLdnllBOuDMyrdr4r3v%2BigVRw7&X-Amz-Signature=47dd576fd00625b239b04cac7e4ffc174d8bed7699c42f312c1c3ab5d00a386e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MBTZ4H%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPIX08O%2FUi806Jh5jn0qcZiJ2OxsMzMDHtX4aagj7F9wIgEnC4mOzdV2XjpaJrPyS6sTxU6mfXBTg3KY%2Bi%2FrOLaDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjEvshwkyQ%2BneXPECrcA6gOHryhB8cZT4CrX5bYhlSTNJjChkNW0fVeoUL3qWtV5iu0GFZ6bCyw77WU4fMwNbg6oda22n%2FGUkKGt5kUGlrglyYq%2FsyOaC%2FEcumC%2FnB03Xw8cHVdikOGHyNCZd6P88SBK2RzESA%2BolmwSm6q8cRhfNf86pBZg85BiqD6%2BHGg5lA1VjwxY1l1zr2yREdGBMmCscmnsfXO1yuZZoNA12VzCiNv9xflo0xOA5iZySnrUeWs4aoLjVLp57tb85UXT2cgExT2hMcpphcHWgoNj8XRGNKBzD1%2BgHg4i1gopIE%2BUhgfDF17SzmI4Iu1uh95ozATMpQDK06JM%2FssjE7fQwZ6iM%2BDghnKjGOutQizs8tOUv0%2FQpb8bma8MXFgS%2FwVOfkwvYTBQqCMPtPkFvV13aiZnqp1XToThDpk6bBCC5%2BP27mm3WOHFdvOmjH2oXGr2o5I07o%2FSopXi%2BEg8fMYiHZHmyuYezlcIr7oei6ink5ULZh6K%2BVypypS4WLUVJcEoZp0KLf%2BHbEhhl%2Bei8OcsivnVO0CaBnHGrOeebm34PDnS6vQVFG62RxtZqjMr2b6NTGTzINxvRuEo7jTqJSguqGbQ2mxqvs1%2BVT00UmZAglhhG2HPrRNgNZAmrTDMNGmgcsGOqUB0pPLzHa7y54SFTWNkYox0q6glqL5xUrWb3JjqclRw2xR7Dhfh5UrHD2TUpb59vXUP1N838P4C17upqeh1poRqgNnLMKBwmfCowsG%2BdZRYPU6d7nAn83G0okBvnULPLkyi0Vy8BzafPwHu3vvUJOe7sbvCLJyFumFIaW%2BnjVC3FYgGOYi4PswU6yeIA25xMgH9UkLdnllBOuDMyrdr4r3v%2BigVRw7&X-Amz-Signature=0b6c97ecabc9907a0f9064359583cfe9b87cfd770336153a8d56b1043f5272a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MBTZ4H%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPIX08O%2FUi806Jh5jn0qcZiJ2OxsMzMDHtX4aagj7F9wIgEnC4mOzdV2XjpaJrPyS6sTxU6mfXBTg3KY%2Bi%2FrOLaDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjEvshwkyQ%2BneXPECrcA6gOHryhB8cZT4CrX5bYhlSTNJjChkNW0fVeoUL3qWtV5iu0GFZ6bCyw77WU4fMwNbg6oda22n%2FGUkKGt5kUGlrglyYq%2FsyOaC%2FEcumC%2FnB03Xw8cHVdikOGHyNCZd6P88SBK2RzESA%2BolmwSm6q8cRhfNf86pBZg85BiqD6%2BHGg5lA1VjwxY1l1zr2yREdGBMmCscmnsfXO1yuZZoNA12VzCiNv9xflo0xOA5iZySnrUeWs4aoLjVLp57tb85UXT2cgExT2hMcpphcHWgoNj8XRGNKBzD1%2BgHg4i1gopIE%2BUhgfDF17SzmI4Iu1uh95ozATMpQDK06JM%2FssjE7fQwZ6iM%2BDghnKjGOutQizs8tOUv0%2FQpb8bma8MXFgS%2FwVOfkwvYTBQqCMPtPkFvV13aiZnqp1XToThDpk6bBCC5%2BP27mm3WOHFdvOmjH2oXGr2o5I07o%2FSopXi%2BEg8fMYiHZHmyuYezlcIr7oei6ink5ULZh6K%2BVypypS4WLUVJcEoZp0KLf%2BHbEhhl%2Bei8OcsivnVO0CaBnHGrOeebm34PDnS6vQVFG62RxtZqjMr2b6NTGTzINxvRuEo7jTqJSguqGbQ2mxqvs1%2BVT00UmZAglhhG2HPrRNgNZAmrTDMNGmgcsGOqUB0pPLzHa7y54SFTWNkYox0q6glqL5xUrWb3JjqclRw2xR7Dhfh5UrHD2TUpb59vXUP1N838P4C17upqeh1poRqgNnLMKBwmfCowsG%2BdZRYPU6d7nAn83G0okBvnULPLkyi0Vy8BzafPwHu3vvUJOe7sbvCLJyFumFIaW%2BnjVC3FYgGOYi4PswU6yeIA25xMgH9UkLdnllBOuDMyrdr4r3v%2BigVRw7&X-Amz-Signature=f226fb091256dd387e125135ec4cf91c110972bed04565421e3b8a5546316e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


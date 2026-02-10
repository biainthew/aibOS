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


{% raw %}
```javascript
ssh-keygen
```
{% endraw %}


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-b59d8a7147fa.png)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](/aibOS/public/images/posts/28e0a7f9-1b45fbf4812c.png)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](/aibOS/public/images/posts/28e0a7f9-41a56e7aab19.png)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-5fbd80ee0187.png)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


{% raw %}
```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```
{% endraw %}


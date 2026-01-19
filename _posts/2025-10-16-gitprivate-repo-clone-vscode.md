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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D47HE26%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOg0Jj9njwe7T%2Bg4vA1IN8R%2FD9HvrCdPvVMg7qXznm7AIgPRduM%2Bj610z1s5aJFmPrTfCQFOof7Clkg46HRLKw6qQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8PbTYEvKQF55MK7CrcA9jKS5xuMNG0a4WiGMFe2c1b3ED13%2FEc59TXvJHmOB2KBbL8tMQzGrvi6vygjpAKGtOBG52G165YJ6DHAWAFthskNXwErowjs6AqWazBeVUanUkTQ7g0O2h2lRHJCYlc%2FPf1VUd7hkHC1NWuK24jbNJRHp%2BI5sNfAwqDuurhpMJiTeK%2B8ee0oqWwCHVsdBo8%2BLvW8pu4rBiy5Pvg9%2FwAkySM0uKvTACyLrzTqfPuHVDjSGwxzXzI%2F8sB296dyyUglqKEaZj9g9ISB7pPCkuQ4Z%2B%2Bc4HOhPo0LyCxu1aprdVnmZN2STTV4EPNswdBZNHoZmneRiDWuNTUkaOmOcKDCrFklrkpToihTwEdhgxRmstQmeP%2F8wZerG5EnhJvmttnv%2FHFczAiSAA1dHTF%2FzxwMwvPXPfbzS0hbg6W3qky1wEsmQUNDmRhouPeNqZOuVzJire2cveKON1NjBJsnqdCGheTYdxZggz%2B0RPXOPB3UTNNFb1HTIOcpPGgoArIjraWfvh0KOW4BoDPihvNDF%2Bh5cAf%2Fj4%2BpynIKsSaXEOcmNWhHf9FEhB%2FWxZq0%2Buy8Jpf6USvDijuoB8CdzXxSF4%2Bwi5sqn7%2B3ZB3Yy1hf8TGpUIA4iG7JRVedirfGHsdMJrhtcsGOqUBHrB0cncZNEqX6Fg6V7ozJD%2F%2F5IBmk8TGRj8wd1Qd06iX0Cq6Lgqoi%2BcOcb6xQOIzQZU1emRhQP7Sruaee7nPlGtDtSGj41Wi%2F6ty3C4InFiIt0fClqhTmQTUBuqMbO%2BGkcfZs89Degbu9Skp1Zb5osmUE3IwprPOmkMYz278RtqXzxMUoDT4TvbKMN%2BJ1SAXsPyzGHk5sxFnxwNOWrGqfn%2F%2BWkaF&X-Amz-Signature=8252fe73cf093c2354ef523c77a218c45180e5895ccc1865d97218cc0a435d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D47HE26%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOg0Jj9njwe7T%2Bg4vA1IN8R%2FD9HvrCdPvVMg7qXznm7AIgPRduM%2Bj610z1s5aJFmPrTfCQFOof7Clkg46HRLKw6qQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8PbTYEvKQF55MK7CrcA9jKS5xuMNG0a4WiGMFe2c1b3ED13%2FEc59TXvJHmOB2KBbL8tMQzGrvi6vygjpAKGtOBG52G165YJ6DHAWAFthskNXwErowjs6AqWazBeVUanUkTQ7g0O2h2lRHJCYlc%2FPf1VUd7hkHC1NWuK24jbNJRHp%2BI5sNfAwqDuurhpMJiTeK%2B8ee0oqWwCHVsdBo8%2BLvW8pu4rBiy5Pvg9%2FwAkySM0uKvTACyLrzTqfPuHVDjSGwxzXzI%2F8sB296dyyUglqKEaZj9g9ISB7pPCkuQ4Z%2B%2Bc4HOhPo0LyCxu1aprdVnmZN2STTV4EPNswdBZNHoZmneRiDWuNTUkaOmOcKDCrFklrkpToihTwEdhgxRmstQmeP%2F8wZerG5EnhJvmttnv%2FHFczAiSAA1dHTF%2FzxwMwvPXPfbzS0hbg6W3qky1wEsmQUNDmRhouPeNqZOuVzJire2cveKON1NjBJsnqdCGheTYdxZggz%2B0RPXOPB3UTNNFb1HTIOcpPGgoArIjraWfvh0KOW4BoDPihvNDF%2Bh5cAf%2Fj4%2BpynIKsSaXEOcmNWhHf9FEhB%2FWxZq0%2Buy8Jpf6USvDijuoB8CdzXxSF4%2Bwi5sqn7%2B3ZB3Yy1hf8TGpUIA4iG7JRVedirfGHsdMJrhtcsGOqUBHrB0cncZNEqX6Fg6V7ozJD%2F%2F5IBmk8TGRj8wd1Qd06iX0Cq6Lgqoi%2BcOcb6xQOIzQZU1emRhQP7Sruaee7nPlGtDtSGj41Wi%2F6ty3C4InFiIt0fClqhTmQTUBuqMbO%2BGkcfZs89Degbu9Skp1Zb5osmUE3IwprPOmkMYz278RtqXzxMUoDT4TvbKMN%2BJ1SAXsPyzGHk5sxFnxwNOWrGqfn%2F%2BWkaF&X-Amz-Signature=618834665dd7292cd9f5befd65881d8468e0008373180cb2e73cab1182dfde7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D47HE26%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOg0Jj9njwe7T%2Bg4vA1IN8R%2FD9HvrCdPvVMg7qXznm7AIgPRduM%2Bj610z1s5aJFmPrTfCQFOof7Clkg46HRLKw6qQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8PbTYEvKQF55MK7CrcA9jKS5xuMNG0a4WiGMFe2c1b3ED13%2FEc59TXvJHmOB2KBbL8tMQzGrvi6vygjpAKGtOBG52G165YJ6DHAWAFthskNXwErowjs6AqWazBeVUanUkTQ7g0O2h2lRHJCYlc%2FPf1VUd7hkHC1NWuK24jbNJRHp%2BI5sNfAwqDuurhpMJiTeK%2B8ee0oqWwCHVsdBo8%2BLvW8pu4rBiy5Pvg9%2FwAkySM0uKvTACyLrzTqfPuHVDjSGwxzXzI%2F8sB296dyyUglqKEaZj9g9ISB7pPCkuQ4Z%2B%2Bc4HOhPo0LyCxu1aprdVnmZN2STTV4EPNswdBZNHoZmneRiDWuNTUkaOmOcKDCrFklrkpToihTwEdhgxRmstQmeP%2F8wZerG5EnhJvmttnv%2FHFczAiSAA1dHTF%2FzxwMwvPXPfbzS0hbg6W3qky1wEsmQUNDmRhouPeNqZOuVzJire2cveKON1NjBJsnqdCGheTYdxZggz%2B0RPXOPB3UTNNFb1HTIOcpPGgoArIjraWfvh0KOW4BoDPihvNDF%2Bh5cAf%2Fj4%2BpynIKsSaXEOcmNWhHf9FEhB%2FWxZq0%2Buy8Jpf6USvDijuoB8CdzXxSF4%2Bwi5sqn7%2B3ZB3Yy1hf8TGpUIA4iG7JRVedirfGHsdMJrhtcsGOqUBHrB0cncZNEqX6Fg6V7ozJD%2F%2F5IBmk8TGRj8wd1Qd06iX0Cq6Lgqoi%2BcOcb6xQOIzQZU1emRhQP7Sruaee7nPlGtDtSGj41Wi%2F6ty3C4InFiIt0fClqhTmQTUBuqMbO%2BGkcfZs89Degbu9Skp1Zb5osmUE3IwprPOmkMYz278RtqXzxMUoDT4TvbKMN%2BJ1SAXsPyzGHk5sxFnxwNOWrGqfn%2F%2BWkaF&X-Amz-Signature=6c60e800daef6ef8f908165159188e6dbacee1daeaae158fb89dcb64b8a22773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D47HE26%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOg0Jj9njwe7T%2Bg4vA1IN8R%2FD9HvrCdPvVMg7qXznm7AIgPRduM%2Bj610z1s5aJFmPrTfCQFOof7Clkg46HRLKw6qQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8PbTYEvKQF55MK7CrcA9jKS5xuMNG0a4WiGMFe2c1b3ED13%2FEc59TXvJHmOB2KBbL8tMQzGrvi6vygjpAKGtOBG52G165YJ6DHAWAFthskNXwErowjs6AqWazBeVUanUkTQ7g0O2h2lRHJCYlc%2FPf1VUd7hkHC1NWuK24jbNJRHp%2BI5sNfAwqDuurhpMJiTeK%2B8ee0oqWwCHVsdBo8%2BLvW8pu4rBiy5Pvg9%2FwAkySM0uKvTACyLrzTqfPuHVDjSGwxzXzI%2F8sB296dyyUglqKEaZj9g9ISB7pPCkuQ4Z%2B%2Bc4HOhPo0LyCxu1aprdVnmZN2STTV4EPNswdBZNHoZmneRiDWuNTUkaOmOcKDCrFklrkpToihTwEdhgxRmstQmeP%2F8wZerG5EnhJvmttnv%2FHFczAiSAA1dHTF%2FzxwMwvPXPfbzS0hbg6W3qky1wEsmQUNDmRhouPeNqZOuVzJire2cveKON1NjBJsnqdCGheTYdxZggz%2B0RPXOPB3UTNNFb1HTIOcpPGgoArIjraWfvh0KOW4BoDPihvNDF%2Bh5cAf%2Fj4%2BpynIKsSaXEOcmNWhHf9FEhB%2FWxZq0%2Buy8Jpf6USvDijuoB8CdzXxSF4%2Bwi5sqn7%2B3ZB3Yy1hf8TGpUIA4iG7JRVedirfGHsdMJrhtcsGOqUBHrB0cncZNEqX6Fg6V7ozJD%2F%2F5IBmk8TGRj8wd1Qd06iX0Cq6Lgqoi%2BcOcb6xQOIzQZU1emRhQP7Sruaee7nPlGtDtSGj41Wi%2F6ty3C4InFiIt0fClqhTmQTUBuqMbO%2BGkcfZs89Degbu9Skp1Zb5osmUE3IwprPOmkMYz278RtqXzxMUoDT4TvbKMN%2BJ1SAXsPyzGHk5sxFnxwNOWrGqfn%2F%2BWkaF&X-Amz-Signature=d5c4961a7351208ec80ea7ed61db9918eb979afa9e56d6c602815a13f80030ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YKYVHAV%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCpe2luU%2FpEBDxLo%2BdyUJYk1QpelJgmmPlxnn96Z9iwBAIhAPKeKXyzCY4Z%2BEBArIKFhyIRdCsd%2BXCtBEke6JFzOmW8Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx5lsTJgZYc%2F8eKItMq3AMZVWzQ6Ikj8NxIx%2B1WVVTIGm5SIR1K0aZ9BLr4T58%2FufNFSd1Tr6F5K3miBf%2BfjI8Deunc44qgTvSNzLpmSVHHTONil7tF92i8tPicNCPq1h9VES1xe1jOagaVlifO1oq6jsILpHQt%2FZukPw0mh1SStM8uLX8LrSKc8o%2BxF486rOKSQOYceOTx%2BIi9lst%2F3Q9r3Jn3JQafsUCEiFHtQ1WX9gLAz6sJyORbChbF9EV4eWjQ57PVc0kyp7cKifirvrg%2FC754Mv5JXeTcPtK9DTqWfAwU6%2F%2FPannTl7ywtBLVOj%2FomVyppfQuK9E9XnW%2F78G9w%2FmMDOIyYK9xSRkYYqQVyo6fhYNKWfNCh150QNEML34WFCq%2BYt%2FUvZCeRcolQGeN9P2ajVcbwQuM1NQY%2FMYiynTXDfg8s3xAKjU80wSIGWhIMLXqVBYQU2kABvmGx0h2kdh%2F0LBkSVpXxLGGwLRFUMLn4EvTAC6IIQo46Elofe3jZUx%2BGXYg%2FbGdgD97hpKQkxtv1VQuLCI2uddCgD2I0ABfrDG6uzjmiQw1DbuNGIbdsIjnH%2FnIhWB6yCCtwIwrRJFNaZAqedE2997d8nWQOutDWy9S%2B7bPQ6eg55vysH4fUfaQKiUkqiJ1JDDyy%2BDKBjqkAW9Kk6woerjZGgX7%2BGF8iF9GacibaEt7CftuvuQ1TftWLJmtX3xq4HB3T2qScfLL1zu1kZwi3Xk0wrcjYvUenCFstoD95xjfkDoolC6DJEPMyniz%2BnEGEewGJv4WCVbbibw4ykQLa6iQlZtLeDHZdQ2sZR0YdqhVrVuxM3PQ5wmznzDPFFnXtmipP1Em4O2KNlbPC4cgAXtCMNMPtXZD9%2BRTrOhf&X-Amz-Signature=929633452c4ca1d1128c526cb75807a3e97bc8b19fa980b6f9798a26229da2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YKYVHAV%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCpe2luU%2FpEBDxLo%2BdyUJYk1QpelJgmmPlxnn96Z9iwBAIhAPKeKXyzCY4Z%2BEBArIKFhyIRdCsd%2BXCtBEke6JFzOmW8Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx5lsTJgZYc%2F8eKItMq3AMZVWzQ6Ikj8NxIx%2B1WVVTIGm5SIR1K0aZ9BLr4T58%2FufNFSd1Tr6F5K3miBf%2BfjI8Deunc44qgTvSNzLpmSVHHTONil7tF92i8tPicNCPq1h9VES1xe1jOagaVlifO1oq6jsILpHQt%2FZukPw0mh1SStM8uLX8LrSKc8o%2BxF486rOKSQOYceOTx%2BIi9lst%2F3Q9r3Jn3JQafsUCEiFHtQ1WX9gLAz6sJyORbChbF9EV4eWjQ57PVc0kyp7cKifirvrg%2FC754Mv5JXeTcPtK9DTqWfAwU6%2F%2FPannTl7ywtBLVOj%2FomVyppfQuK9E9XnW%2F78G9w%2FmMDOIyYK9xSRkYYqQVyo6fhYNKWfNCh150QNEML34WFCq%2BYt%2FUvZCeRcolQGeN9P2ajVcbwQuM1NQY%2FMYiynTXDfg8s3xAKjU80wSIGWhIMLXqVBYQU2kABvmGx0h2kdh%2F0LBkSVpXxLGGwLRFUMLn4EvTAC6IIQo46Elofe3jZUx%2BGXYg%2FbGdgD97hpKQkxtv1VQuLCI2uddCgD2I0ABfrDG6uzjmiQw1DbuNGIbdsIjnH%2FnIhWB6yCCtwIwrRJFNaZAqedE2997d8nWQOutDWy9S%2B7bPQ6eg55vysH4fUfaQKiUkqiJ1JDDyy%2BDKBjqkAW9Kk6woerjZGgX7%2BGF8iF9GacibaEt7CftuvuQ1TftWLJmtX3xq4HB3T2qScfLL1zu1kZwi3Xk0wrcjYvUenCFstoD95xjfkDoolC6DJEPMyniz%2BnEGEewGJv4WCVbbibw4ykQLa6iQlZtLeDHZdQ2sZR0YdqhVrVuxM3PQ5wmznzDPFFnXtmipP1Em4O2KNlbPC4cgAXtCMNMPtXZD9%2BRTrOhf&X-Amz-Signature=03e5f9abf422efa92f1275d75731d4950166b9215eafa94bc679b4c9011398e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YKYVHAV%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCpe2luU%2FpEBDxLo%2BdyUJYk1QpelJgmmPlxnn96Z9iwBAIhAPKeKXyzCY4Z%2BEBArIKFhyIRdCsd%2BXCtBEke6JFzOmW8Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx5lsTJgZYc%2F8eKItMq3AMZVWzQ6Ikj8NxIx%2B1WVVTIGm5SIR1K0aZ9BLr4T58%2FufNFSd1Tr6F5K3miBf%2BfjI8Deunc44qgTvSNzLpmSVHHTONil7tF92i8tPicNCPq1h9VES1xe1jOagaVlifO1oq6jsILpHQt%2FZukPw0mh1SStM8uLX8LrSKc8o%2BxF486rOKSQOYceOTx%2BIi9lst%2F3Q9r3Jn3JQafsUCEiFHtQ1WX9gLAz6sJyORbChbF9EV4eWjQ57PVc0kyp7cKifirvrg%2FC754Mv5JXeTcPtK9DTqWfAwU6%2F%2FPannTl7ywtBLVOj%2FomVyppfQuK9E9XnW%2F78G9w%2FmMDOIyYK9xSRkYYqQVyo6fhYNKWfNCh150QNEML34WFCq%2BYt%2FUvZCeRcolQGeN9P2ajVcbwQuM1NQY%2FMYiynTXDfg8s3xAKjU80wSIGWhIMLXqVBYQU2kABvmGx0h2kdh%2F0LBkSVpXxLGGwLRFUMLn4EvTAC6IIQo46Elofe3jZUx%2BGXYg%2FbGdgD97hpKQkxtv1VQuLCI2uddCgD2I0ABfrDG6uzjmiQw1DbuNGIbdsIjnH%2FnIhWB6yCCtwIwrRJFNaZAqedE2997d8nWQOutDWy9S%2B7bPQ6eg55vysH4fUfaQKiUkqiJ1JDDyy%2BDKBjqkAW9Kk6woerjZGgX7%2BGF8iF9GacibaEt7CftuvuQ1TftWLJmtX3xq4HB3T2qScfLL1zu1kZwi3Xk0wrcjYvUenCFstoD95xjfkDoolC6DJEPMyniz%2BnEGEewGJv4WCVbbibw4ykQLa6iQlZtLeDHZdQ2sZR0YdqhVrVuxM3PQ5wmznzDPFFnXtmipP1Em4O2KNlbPC4cgAXtCMNMPtXZD9%2BRTrOhf&X-Amz-Signature=ca9ea3023b98839a36cdd0181a07383035e137c333cde965ba94c3b89cc5069b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YKYVHAV%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCpe2luU%2FpEBDxLo%2BdyUJYk1QpelJgmmPlxnn96Z9iwBAIhAPKeKXyzCY4Z%2BEBArIKFhyIRdCsd%2BXCtBEke6JFzOmW8Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx5lsTJgZYc%2F8eKItMq3AMZVWzQ6Ikj8NxIx%2B1WVVTIGm5SIR1K0aZ9BLr4T58%2FufNFSd1Tr6F5K3miBf%2BfjI8Deunc44qgTvSNzLpmSVHHTONil7tF92i8tPicNCPq1h9VES1xe1jOagaVlifO1oq6jsILpHQt%2FZukPw0mh1SStM8uLX8LrSKc8o%2BxF486rOKSQOYceOTx%2BIi9lst%2F3Q9r3Jn3JQafsUCEiFHtQ1WX9gLAz6sJyORbChbF9EV4eWjQ57PVc0kyp7cKifirvrg%2FC754Mv5JXeTcPtK9DTqWfAwU6%2F%2FPannTl7ywtBLVOj%2FomVyppfQuK9E9XnW%2F78G9w%2FmMDOIyYK9xSRkYYqQVyo6fhYNKWfNCh150QNEML34WFCq%2BYt%2FUvZCeRcolQGeN9P2ajVcbwQuM1NQY%2FMYiynTXDfg8s3xAKjU80wSIGWhIMLXqVBYQU2kABvmGx0h2kdh%2F0LBkSVpXxLGGwLRFUMLn4EvTAC6IIQo46Elofe3jZUx%2BGXYg%2FbGdgD97hpKQkxtv1VQuLCI2uddCgD2I0ABfrDG6uzjmiQw1DbuNGIbdsIjnH%2FnIhWB6yCCtwIwrRJFNaZAqedE2997d8nWQOutDWy9S%2B7bPQ6eg55vysH4fUfaQKiUkqiJ1JDDyy%2BDKBjqkAW9Kk6woerjZGgX7%2BGF8iF9GacibaEt7CftuvuQ1TftWLJmtX3xq4HB3T2qScfLL1zu1kZwi3Xk0wrcjYvUenCFstoD95xjfkDoolC6DJEPMyniz%2BnEGEewGJv4WCVbbibw4ykQLa6iQlZtLeDHZdQ2sZR0YdqhVrVuxM3PQ5wmznzDPFFnXtmipP1Em4O2KNlbPC4cgAXtCMNMPtXZD9%2BRTrOhf&X-Amz-Signature=01025401c07f85d85efb55786a4c38fe101b6d39bf63228b3867e67527031eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


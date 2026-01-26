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


```javascript
ssh-keygen
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HKZIGQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCWv68mcCW%2FvPVGsdwsmUhJ2T1MIXbW3xImQ17eSWx0hgIhANwJ7a4lAkKYmjJe44oVkAmUM5mhfuz34KKKhONT%2Bt3bKv8DCDsQABoMNjM3NDIzMTgzODA1Igy78%2FowvfsyzsH%2F4ecq3AM%2FnawsBqZYA%2BLhIPg96rNPI1OZSCGULufZZq0udXx%2BtaJMIgYa%2Bcwa1jjRmsjaqI%2BWKVgOq80Mv45%2F%2BHLqUb39M30iwgTbOlAeTz04cV0EXUB%2BGxVypNDPKg%2BFQ%2Bte5m6bMKl%2BUWh3Tm6JtptWDmIJ99EVgPH0l6BGaGtWnhl5AXKHccafOjetKdDc52%2BafoRSUJGD1q7MsSi4d8MQu6OjDDO5LhJN4mXNiyGS8sQQS5soHD5UueeBF8ej9oTx9Du%2FTUizzCY2d7otIhL1RNtcjfuFkixfBspcOx2wP0QQe5uHkntfVBhCL38myZQztizzbGJCK8G1IE0%2BKFyUcCkjwP4Qdmx6uR1Gw7MLF6TFA1jVFLbbVfFr2ZRo1OmB1IuXOYyDCgDB4fdOAb66G0wNMsLNo7fF%2FYTWaM3JZVqPiZEzGYe6I8QGRPetbdjX9fOQzSeezJWg31Y6IAcOZr3HatZZkjBEPuapH4vkDNmkuSWtLHbdEV4oNQc3uSWl%2BQ6pwdGPIjaXw9OHvjl9WPMVFDbf3JpCB5GYJQkJAo%2Beyl9do97NJd2JwWB8RaaMAevMtdAZF54DfYIgv7JNrX5vzVPpRrcHYEsxcgnosrYgid7ZlEURI%2Bux09RAJjCQ%2B9zLBjqkAUCbEy7b8QX5chbs%2BI7nnUeot8RRu2o2NidOTW%2F%2BeRcZZkmtESWfHvA%2FIylhrSeXbCLvBmVlPr1smanUgwpOx%2BmD8aGMbJiUm8b8rOY5EslE%2BvvlzvUkSgIz6XgjA5eunD3ODbALuEQuokyHE5cbnqZ7zAmQq4UR4N6mru8QnqwozYdKG%2BYGPEioYFIP0wx4jTAxgipYCTQpUKxceAPCZmUFSbHZ&X-Amz-Signature=e246baff62a4e4cc56cbb281956dbb2c1af2ac790647428543aff4db1f7b2a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HKZIGQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCWv68mcCW%2FvPVGsdwsmUhJ2T1MIXbW3xImQ17eSWx0hgIhANwJ7a4lAkKYmjJe44oVkAmUM5mhfuz34KKKhONT%2Bt3bKv8DCDsQABoMNjM3NDIzMTgzODA1Igy78%2FowvfsyzsH%2F4ecq3AM%2FnawsBqZYA%2BLhIPg96rNPI1OZSCGULufZZq0udXx%2BtaJMIgYa%2Bcwa1jjRmsjaqI%2BWKVgOq80Mv45%2F%2BHLqUb39M30iwgTbOlAeTz04cV0EXUB%2BGxVypNDPKg%2BFQ%2Bte5m6bMKl%2BUWh3Tm6JtptWDmIJ99EVgPH0l6BGaGtWnhl5AXKHccafOjetKdDc52%2BafoRSUJGD1q7MsSi4d8MQu6OjDDO5LhJN4mXNiyGS8sQQS5soHD5UueeBF8ej9oTx9Du%2FTUizzCY2d7otIhL1RNtcjfuFkixfBspcOx2wP0QQe5uHkntfVBhCL38myZQztizzbGJCK8G1IE0%2BKFyUcCkjwP4Qdmx6uR1Gw7MLF6TFA1jVFLbbVfFr2ZRo1OmB1IuXOYyDCgDB4fdOAb66G0wNMsLNo7fF%2FYTWaM3JZVqPiZEzGYe6I8QGRPetbdjX9fOQzSeezJWg31Y6IAcOZr3HatZZkjBEPuapH4vkDNmkuSWtLHbdEV4oNQc3uSWl%2BQ6pwdGPIjaXw9OHvjl9WPMVFDbf3JpCB5GYJQkJAo%2Beyl9do97NJd2JwWB8RaaMAevMtdAZF54DfYIgv7JNrX5vzVPpRrcHYEsxcgnosrYgid7ZlEURI%2Bux09RAJjCQ%2B9zLBjqkAUCbEy7b8QX5chbs%2BI7nnUeot8RRu2o2NidOTW%2F%2BeRcZZkmtESWfHvA%2FIylhrSeXbCLvBmVlPr1smanUgwpOx%2BmD8aGMbJiUm8b8rOY5EslE%2BvvlzvUkSgIz6XgjA5eunD3ODbALuEQuokyHE5cbnqZ7zAmQq4UR4N6mru8QnqwozYdKG%2BYGPEioYFIP0wx4jTAxgipYCTQpUKxceAPCZmUFSbHZ&X-Amz-Signature=9d15242e9ea9527b63b76489417d52f0c1e0e30c10e53002b3988791e2f863bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HKZIGQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCWv68mcCW%2FvPVGsdwsmUhJ2T1MIXbW3xImQ17eSWx0hgIhANwJ7a4lAkKYmjJe44oVkAmUM5mhfuz34KKKhONT%2Bt3bKv8DCDsQABoMNjM3NDIzMTgzODA1Igy78%2FowvfsyzsH%2F4ecq3AM%2FnawsBqZYA%2BLhIPg96rNPI1OZSCGULufZZq0udXx%2BtaJMIgYa%2Bcwa1jjRmsjaqI%2BWKVgOq80Mv45%2F%2BHLqUb39M30iwgTbOlAeTz04cV0EXUB%2BGxVypNDPKg%2BFQ%2Bte5m6bMKl%2BUWh3Tm6JtptWDmIJ99EVgPH0l6BGaGtWnhl5AXKHccafOjetKdDc52%2BafoRSUJGD1q7MsSi4d8MQu6OjDDO5LhJN4mXNiyGS8sQQS5soHD5UueeBF8ej9oTx9Du%2FTUizzCY2d7otIhL1RNtcjfuFkixfBspcOx2wP0QQe5uHkntfVBhCL38myZQztizzbGJCK8G1IE0%2BKFyUcCkjwP4Qdmx6uR1Gw7MLF6TFA1jVFLbbVfFr2ZRo1OmB1IuXOYyDCgDB4fdOAb66G0wNMsLNo7fF%2FYTWaM3JZVqPiZEzGYe6I8QGRPetbdjX9fOQzSeezJWg31Y6IAcOZr3HatZZkjBEPuapH4vkDNmkuSWtLHbdEV4oNQc3uSWl%2BQ6pwdGPIjaXw9OHvjl9WPMVFDbf3JpCB5GYJQkJAo%2Beyl9do97NJd2JwWB8RaaMAevMtdAZF54DfYIgv7JNrX5vzVPpRrcHYEsxcgnosrYgid7ZlEURI%2Bux09RAJjCQ%2B9zLBjqkAUCbEy7b8QX5chbs%2BI7nnUeot8RRu2o2NidOTW%2F%2BeRcZZkmtESWfHvA%2FIylhrSeXbCLvBmVlPr1smanUgwpOx%2BmD8aGMbJiUm8b8rOY5EslE%2BvvlzvUkSgIz6XgjA5eunD3ODbALuEQuokyHE5cbnqZ7zAmQq4UR4N6mru8QnqwozYdKG%2BYGPEioYFIP0wx4jTAxgipYCTQpUKxceAPCZmUFSbHZ&X-Amz-Signature=61f60357bc37224c261c5ebef8279bc69d0c775f067646ccbf701188aab9692d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HKZIGQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCWv68mcCW%2FvPVGsdwsmUhJ2T1MIXbW3xImQ17eSWx0hgIhANwJ7a4lAkKYmjJe44oVkAmUM5mhfuz34KKKhONT%2Bt3bKv8DCDsQABoMNjM3NDIzMTgzODA1Igy78%2FowvfsyzsH%2F4ecq3AM%2FnawsBqZYA%2BLhIPg96rNPI1OZSCGULufZZq0udXx%2BtaJMIgYa%2Bcwa1jjRmsjaqI%2BWKVgOq80Mv45%2F%2BHLqUb39M30iwgTbOlAeTz04cV0EXUB%2BGxVypNDPKg%2BFQ%2Bte5m6bMKl%2BUWh3Tm6JtptWDmIJ99EVgPH0l6BGaGtWnhl5AXKHccafOjetKdDc52%2BafoRSUJGD1q7MsSi4d8MQu6OjDDO5LhJN4mXNiyGS8sQQS5soHD5UueeBF8ej9oTx9Du%2FTUizzCY2d7otIhL1RNtcjfuFkixfBspcOx2wP0QQe5uHkntfVBhCL38myZQztizzbGJCK8G1IE0%2BKFyUcCkjwP4Qdmx6uR1Gw7MLF6TFA1jVFLbbVfFr2ZRo1OmB1IuXOYyDCgDB4fdOAb66G0wNMsLNo7fF%2FYTWaM3JZVqPiZEzGYe6I8QGRPetbdjX9fOQzSeezJWg31Y6IAcOZr3HatZZkjBEPuapH4vkDNmkuSWtLHbdEV4oNQc3uSWl%2BQ6pwdGPIjaXw9OHvjl9WPMVFDbf3JpCB5GYJQkJAo%2Beyl9do97NJd2JwWB8RaaMAevMtdAZF54DfYIgv7JNrX5vzVPpRrcHYEsxcgnosrYgid7ZlEURI%2Bux09RAJjCQ%2B9zLBjqkAUCbEy7b8QX5chbs%2BI7nnUeot8RRu2o2NidOTW%2F%2BeRcZZkmtESWfHvA%2FIylhrSeXbCLvBmVlPr1smanUgwpOx%2BmD8aGMbJiUm8b8rOY5EslE%2BvvlzvUkSgIz6XgjA5eunD3ODbALuEQuokyHE5cbnqZ7zAmQq4UR4N6mru8QnqwozYdKG%2BYGPEioYFIP0wx4jTAxgipYCTQpUKxceAPCZmUFSbHZ&X-Amz-Signature=92ebaee05349c514627db2a12900f1988c2e9c5a4a67e89a711e08d83c8fb282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


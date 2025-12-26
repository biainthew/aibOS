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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBOW4XL%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAkIq9oUhODeOwGefWEdItBuCZkumHqXGgx1swOIGAsqAiBr107PRLDc41Qw21LQUOJfCVHCM4c64agya2xBlpzb3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtQUy39arUvjqsWwTKtwDuBaHLlxC5WAkp9R44a0NlyqWImxLA0EOEz3A43MunZVoAluiZK2zlc%2FtDZ1ogx8n7P2wfVm1CJQNZoSsaospyLeWTHMH05M5zuUCfdzklWhfvke5s3LuHoKhXQ7%2FXKIEVuTclNogkJLIkdQU5O3mSe0A%2FsvQXnAsDQ%2F5FSAsRmshN1W7cjmc5%2Bu1R8o39W%2F2hf1gDu%2FeeFRfMendz7rZyXDnl8HlPEW2KNLYJFbD5pnQJfhcDzI9lQkZ6vyXcxa%2B40SGgGhufiWRRm2qWhbfW9VNtNe%2Bg2CfsmeS7PMZoKYBUFajlmqSzIhCxQK3qt30sKlru%2BYzheOAG1bqDDVv4afmYXu5CnjhxkZ%2BdsPWYODpN13JBOLZJr6Wat194zqR3sHx1WUnQFEwuA46yVLI3xphXvvRoh2ctiSlLZsWaXz4m3GvWE%2FBWV%2B3cxtm073wikO%2FQyS6k6xNYPYUyIJGpDHF2dPKiC9iU7L30JGwgzX9vIsE9Lb2wgB%2F%2BBkG1Fje0DvuUPtX4I8YoXr2wpXnNS9Twe4URLPZ9W61XPYJG11KIGH1dZzMvafdPsyZbFNppRvnjkWsUzS0OXm%2B%2BIicr%2B7yuPfq14E5XDlXCoVSmL2i2hlhIa429z5nGwYw3ui2ygY6pgEa9ovvMTS3mbYl21Bs%2BNA3wUdm8qlpA9tkh0X9Pr4Jn5PHTDcZ7G6Up1%2FBHPn6PRS9AYzhwoDfa9voVL2XGgWsXIq1W44FiBSdEIt2hY8oeWAIKsrpVKgV84r%2FMOpzFk%2BWrkDzFs81nbZYQm99b32xyEfyrEEjI1Jw9XC7ix24oLpPNQ8AsrHI%2FX5Mt%2Bvq7HZlfF%2B5Ma4iBj9Q82FGVQEBrKobHCN6&X-Amz-Signature=183a432e5884768999e3b8caa724db800def5c8e2f4b666f91634ded9a164e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBOW4XL%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAkIq9oUhODeOwGefWEdItBuCZkumHqXGgx1swOIGAsqAiBr107PRLDc41Qw21LQUOJfCVHCM4c64agya2xBlpzb3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtQUy39arUvjqsWwTKtwDuBaHLlxC5WAkp9R44a0NlyqWImxLA0EOEz3A43MunZVoAluiZK2zlc%2FtDZ1ogx8n7P2wfVm1CJQNZoSsaospyLeWTHMH05M5zuUCfdzklWhfvke5s3LuHoKhXQ7%2FXKIEVuTclNogkJLIkdQU5O3mSe0A%2FsvQXnAsDQ%2F5FSAsRmshN1W7cjmc5%2Bu1R8o39W%2F2hf1gDu%2FeeFRfMendz7rZyXDnl8HlPEW2KNLYJFbD5pnQJfhcDzI9lQkZ6vyXcxa%2B40SGgGhufiWRRm2qWhbfW9VNtNe%2Bg2CfsmeS7PMZoKYBUFajlmqSzIhCxQK3qt30sKlru%2BYzheOAG1bqDDVv4afmYXu5CnjhxkZ%2BdsPWYODpN13JBOLZJr6Wat194zqR3sHx1WUnQFEwuA46yVLI3xphXvvRoh2ctiSlLZsWaXz4m3GvWE%2FBWV%2B3cxtm073wikO%2FQyS6k6xNYPYUyIJGpDHF2dPKiC9iU7L30JGwgzX9vIsE9Lb2wgB%2F%2BBkG1Fje0DvuUPtX4I8YoXr2wpXnNS9Twe4URLPZ9W61XPYJG11KIGH1dZzMvafdPsyZbFNppRvnjkWsUzS0OXm%2B%2BIicr%2B7yuPfq14E5XDlXCoVSmL2i2hlhIa429z5nGwYw3ui2ygY6pgEa9ovvMTS3mbYl21Bs%2BNA3wUdm8qlpA9tkh0X9Pr4Jn5PHTDcZ7G6Up1%2FBHPn6PRS9AYzhwoDfa9voVL2XGgWsXIq1W44FiBSdEIt2hY8oeWAIKsrpVKgV84r%2FMOpzFk%2BWrkDzFs81nbZYQm99b32xyEfyrEEjI1Jw9XC7ix24oLpPNQ8AsrHI%2FX5Mt%2Bvq7HZlfF%2B5Ma4iBj9Q82FGVQEBrKobHCN6&X-Amz-Signature=867294c17199c89a1173a07ba6205651368b7bafc88eb8a4242dd8d1c79a9aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBOW4XL%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAkIq9oUhODeOwGefWEdItBuCZkumHqXGgx1swOIGAsqAiBr107PRLDc41Qw21LQUOJfCVHCM4c64agya2xBlpzb3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtQUy39arUvjqsWwTKtwDuBaHLlxC5WAkp9R44a0NlyqWImxLA0EOEz3A43MunZVoAluiZK2zlc%2FtDZ1ogx8n7P2wfVm1CJQNZoSsaospyLeWTHMH05M5zuUCfdzklWhfvke5s3LuHoKhXQ7%2FXKIEVuTclNogkJLIkdQU5O3mSe0A%2FsvQXnAsDQ%2F5FSAsRmshN1W7cjmc5%2Bu1R8o39W%2F2hf1gDu%2FeeFRfMendz7rZyXDnl8HlPEW2KNLYJFbD5pnQJfhcDzI9lQkZ6vyXcxa%2B40SGgGhufiWRRm2qWhbfW9VNtNe%2Bg2CfsmeS7PMZoKYBUFajlmqSzIhCxQK3qt30sKlru%2BYzheOAG1bqDDVv4afmYXu5CnjhxkZ%2BdsPWYODpN13JBOLZJr6Wat194zqR3sHx1WUnQFEwuA46yVLI3xphXvvRoh2ctiSlLZsWaXz4m3GvWE%2FBWV%2B3cxtm073wikO%2FQyS6k6xNYPYUyIJGpDHF2dPKiC9iU7L30JGwgzX9vIsE9Lb2wgB%2F%2BBkG1Fje0DvuUPtX4I8YoXr2wpXnNS9Twe4URLPZ9W61XPYJG11KIGH1dZzMvafdPsyZbFNppRvnjkWsUzS0OXm%2B%2BIicr%2B7yuPfq14E5XDlXCoVSmL2i2hlhIa429z5nGwYw3ui2ygY6pgEa9ovvMTS3mbYl21Bs%2BNA3wUdm8qlpA9tkh0X9Pr4Jn5PHTDcZ7G6Up1%2FBHPn6PRS9AYzhwoDfa9voVL2XGgWsXIq1W44FiBSdEIt2hY8oeWAIKsrpVKgV84r%2FMOpzFk%2BWrkDzFs81nbZYQm99b32xyEfyrEEjI1Jw9XC7ix24oLpPNQ8AsrHI%2FX5Mt%2Bvq7HZlfF%2B5Ma4iBj9Q82FGVQEBrKobHCN6&X-Amz-Signature=43cff87b5bde62c8868257c756777b95290bc955d30cadb9c6cb62bdf85bd4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBOW4XL%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAkIq9oUhODeOwGefWEdItBuCZkumHqXGgx1swOIGAsqAiBr107PRLDc41Qw21LQUOJfCVHCM4c64agya2xBlpzb3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtQUy39arUvjqsWwTKtwDuBaHLlxC5WAkp9R44a0NlyqWImxLA0EOEz3A43MunZVoAluiZK2zlc%2FtDZ1ogx8n7P2wfVm1CJQNZoSsaospyLeWTHMH05M5zuUCfdzklWhfvke5s3LuHoKhXQ7%2FXKIEVuTclNogkJLIkdQU5O3mSe0A%2FsvQXnAsDQ%2F5FSAsRmshN1W7cjmc5%2Bu1R8o39W%2F2hf1gDu%2FeeFRfMendz7rZyXDnl8HlPEW2KNLYJFbD5pnQJfhcDzI9lQkZ6vyXcxa%2B40SGgGhufiWRRm2qWhbfW9VNtNe%2Bg2CfsmeS7PMZoKYBUFajlmqSzIhCxQK3qt30sKlru%2BYzheOAG1bqDDVv4afmYXu5CnjhxkZ%2BdsPWYODpN13JBOLZJr6Wat194zqR3sHx1WUnQFEwuA46yVLI3xphXvvRoh2ctiSlLZsWaXz4m3GvWE%2FBWV%2B3cxtm073wikO%2FQyS6k6xNYPYUyIJGpDHF2dPKiC9iU7L30JGwgzX9vIsE9Lb2wgB%2F%2BBkG1Fje0DvuUPtX4I8YoXr2wpXnNS9Twe4URLPZ9W61XPYJG11KIGH1dZzMvafdPsyZbFNppRvnjkWsUzS0OXm%2B%2BIicr%2B7yuPfq14E5XDlXCoVSmL2i2hlhIa429z5nGwYw3ui2ygY6pgEa9ovvMTS3mbYl21Bs%2BNA3wUdm8qlpA9tkh0X9Pr4Jn5PHTDcZ7G6Up1%2FBHPn6PRS9AYzhwoDfa9voVL2XGgWsXIq1W44FiBSdEIt2hY8oeWAIKsrpVKgV84r%2FMOpzFk%2BWrkDzFs81nbZYQm99b32xyEfyrEEjI1Jw9XC7ix24oLpPNQ8AsrHI%2FX5Mt%2Bvq7HZlfF%2B5Ma4iBj9Q82FGVQEBrKobHCN6&X-Amz-Signature=a668bd6dc98b8589485b9416c8dcdb84fd7848d3c435921e3dd23ad564e59ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMTBPPB%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T012013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIELZVY2J%2BWC1jSN1nvDc2dprWmMdQODvopErhp5mrtgbAiALyd4wcAzmPRqStWd0du%2FMeuW4QWBK%2F8wZG0tp8e1J%2ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJromPuBO7HC0UQjOKtwD%2F97T2k8FRFG6u%2BhF%2BB3xaQK%2FC1DxeMNJbXqpEs3cNhcqjtAs8VX6Dp1IZlFam8OtBxqrZzrwCcNheJOeKTDS9j9r%2FgJQUBxCa4%2BstPflCs8PIBat8zDbmir87Sran5wUyFyGUZvt5%2BGYGL959OX6oK7%2F0hBSwCvMxByI9K4irP72uw8pl5DMQZ9HRc583shd%2Fpoe%2Fba5VAOR4Hg7e5OPIoZKJt5ooRLPxO%2BPzug%2F9djrTVADqtT1JFyTtC98%2FwbNBaI579HrRNu4OkGQOwlvzKQ%2BFcUr1bKsD4GYCFcJRHNkZYJddWTLJgT87sYFnbf6NzMuGo422JQcOWtiCKxStWaQspGZz4O%2Fpmhw7gt55DInXNBfukFPUCSHWpj7a1RpnFgfq5hAvUWUdTVsRhfv4C6%2FTY3YgogNRtRf6uYc5jE7rUaQBx6N3KPJ9JPcKVvhmb0LW0gUy0OEq5661Z125uM9nvM80nmOUPcqB8%2BPzhvENUG65irSx%2Ft9I%2Fx7ecXOIpBhILhIcSTF3N%2B%2B20f2tlkIL5p6CQZNTTm%2FVfbZsV%2Ff02gCEo9vn4zdgykXnJ0451zqsCAc3JNpgYoywshgxNr6gZmxCd5ZAUqS%2Bk6K8OkShhL8Quu7qsuU5Dsw5%2FuQywY6pgF9XHOKbViT4mfK8CKrPAkE8xc7yn2yevss6lHdyfEg%2FQr7aXbElFBFSMzOrSKwiONFyWv43LXUyCqWEcEsGAjAgZs%2FdMN5BaksUPseIanSFYsqUhKO8Bm%2FY4luZtNSz%2FfiRfmauF%2Bx9V1hqFUYlCSa7wnudGGT8N9eZrnVe7A3hH%2F8A8RY6DeOcfGgMo0cShqgSjCNg5kZ8L7%2FdFp%2B%2Bsgya5pP6Nls&X-Amz-Signature=8588d90596fe8a0caab3808ce3ca14577cb5b1c97b28453433970e5638feebcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMTBPPB%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T012013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIELZVY2J%2BWC1jSN1nvDc2dprWmMdQODvopErhp5mrtgbAiALyd4wcAzmPRqStWd0du%2FMeuW4QWBK%2F8wZG0tp8e1J%2ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJromPuBO7HC0UQjOKtwD%2F97T2k8FRFG6u%2BhF%2BB3xaQK%2FC1DxeMNJbXqpEs3cNhcqjtAs8VX6Dp1IZlFam8OtBxqrZzrwCcNheJOeKTDS9j9r%2FgJQUBxCa4%2BstPflCs8PIBat8zDbmir87Sran5wUyFyGUZvt5%2BGYGL959OX6oK7%2F0hBSwCvMxByI9K4irP72uw8pl5DMQZ9HRc583shd%2Fpoe%2Fba5VAOR4Hg7e5OPIoZKJt5ooRLPxO%2BPzug%2F9djrTVADqtT1JFyTtC98%2FwbNBaI579HrRNu4OkGQOwlvzKQ%2BFcUr1bKsD4GYCFcJRHNkZYJddWTLJgT87sYFnbf6NzMuGo422JQcOWtiCKxStWaQspGZz4O%2Fpmhw7gt55DInXNBfukFPUCSHWpj7a1RpnFgfq5hAvUWUdTVsRhfv4C6%2FTY3YgogNRtRf6uYc5jE7rUaQBx6N3KPJ9JPcKVvhmb0LW0gUy0OEq5661Z125uM9nvM80nmOUPcqB8%2BPzhvENUG65irSx%2Ft9I%2Fx7ecXOIpBhILhIcSTF3N%2B%2B20f2tlkIL5p6CQZNTTm%2FVfbZsV%2Ff02gCEo9vn4zdgykXnJ0451zqsCAc3JNpgYoywshgxNr6gZmxCd5ZAUqS%2Bk6K8OkShhL8Quu7qsuU5Dsw5%2FuQywY6pgF9XHOKbViT4mfK8CKrPAkE8xc7yn2yevss6lHdyfEg%2FQr7aXbElFBFSMzOrSKwiONFyWv43LXUyCqWEcEsGAjAgZs%2FdMN5BaksUPseIanSFYsqUhKO8Bm%2FY4luZtNSz%2FfiRfmauF%2Bx9V1hqFUYlCSa7wnudGGT8N9eZrnVe7A3hH%2F8A8RY6DeOcfGgMo0cShqgSjCNg5kZ8L7%2FdFp%2B%2Bsgya5pP6Nls&X-Amz-Signature=2570706abfd4fbe8ece4b112e68fe68d11af00ef2d70441c5be8c3e027956437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMTBPPB%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T012013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIELZVY2J%2BWC1jSN1nvDc2dprWmMdQODvopErhp5mrtgbAiALyd4wcAzmPRqStWd0du%2FMeuW4QWBK%2F8wZG0tp8e1J%2ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJromPuBO7HC0UQjOKtwD%2F97T2k8FRFG6u%2BhF%2BB3xaQK%2FC1DxeMNJbXqpEs3cNhcqjtAs8VX6Dp1IZlFam8OtBxqrZzrwCcNheJOeKTDS9j9r%2FgJQUBxCa4%2BstPflCs8PIBat8zDbmir87Sran5wUyFyGUZvt5%2BGYGL959OX6oK7%2F0hBSwCvMxByI9K4irP72uw8pl5DMQZ9HRc583shd%2Fpoe%2Fba5VAOR4Hg7e5OPIoZKJt5ooRLPxO%2BPzug%2F9djrTVADqtT1JFyTtC98%2FwbNBaI579HrRNu4OkGQOwlvzKQ%2BFcUr1bKsD4GYCFcJRHNkZYJddWTLJgT87sYFnbf6NzMuGo422JQcOWtiCKxStWaQspGZz4O%2Fpmhw7gt55DInXNBfukFPUCSHWpj7a1RpnFgfq5hAvUWUdTVsRhfv4C6%2FTY3YgogNRtRf6uYc5jE7rUaQBx6N3KPJ9JPcKVvhmb0LW0gUy0OEq5661Z125uM9nvM80nmOUPcqB8%2BPzhvENUG65irSx%2Ft9I%2Fx7ecXOIpBhILhIcSTF3N%2B%2B20f2tlkIL5p6CQZNTTm%2FVfbZsV%2Ff02gCEo9vn4zdgykXnJ0451zqsCAc3JNpgYoywshgxNr6gZmxCd5ZAUqS%2Bk6K8OkShhL8Quu7qsuU5Dsw5%2FuQywY6pgF9XHOKbViT4mfK8CKrPAkE8xc7yn2yevss6lHdyfEg%2FQr7aXbElFBFSMzOrSKwiONFyWv43LXUyCqWEcEsGAjAgZs%2FdMN5BaksUPseIanSFYsqUhKO8Bm%2FY4luZtNSz%2FfiRfmauF%2Bx9V1hqFUYlCSa7wnudGGT8N9eZrnVe7A3hH%2F8A8RY6DeOcfGgMo0cShqgSjCNg5kZ8L7%2FdFp%2B%2Bsgya5pP6Nls&X-Amz-Signature=d670157324be79329e6cc79fdd82acf206ed5f09e8fb582fc9e6764215421045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMTBPPB%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T012013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIELZVY2J%2BWC1jSN1nvDc2dprWmMdQODvopErhp5mrtgbAiALyd4wcAzmPRqStWd0du%2FMeuW4QWBK%2F8wZG0tp8e1J%2ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJromPuBO7HC0UQjOKtwD%2F97T2k8FRFG6u%2BhF%2BB3xaQK%2FC1DxeMNJbXqpEs3cNhcqjtAs8VX6Dp1IZlFam8OtBxqrZzrwCcNheJOeKTDS9j9r%2FgJQUBxCa4%2BstPflCs8PIBat8zDbmir87Sran5wUyFyGUZvt5%2BGYGL959OX6oK7%2F0hBSwCvMxByI9K4irP72uw8pl5DMQZ9HRc583shd%2Fpoe%2Fba5VAOR4Hg7e5OPIoZKJt5ooRLPxO%2BPzug%2F9djrTVADqtT1JFyTtC98%2FwbNBaI579HrRNu4OkGQOwlvzKQ%2BFcUr1bKsD4GYCFcJRHNkZYJddWTLJgT87sYFnbf6NzMuGo422JQcOWtiCKxStWaQspGZz4O%2Fpmhw7gt55DInXNBfukFPUCSHWpj7a1RpnFgfq5hAvUWUdTVsRhfv4C6%2FTY3YgogNRtRf6uYc5jE7rUaQBx6N3KPJ9JPcKVvhmb0LW0gUy0OEq5661Z125uM9nvM80nmOUPcqB8%2BPzhvENUG65irSx%2Ft9I%2Fx7ecXOIpBhILhIcSTF3N%2B%2B20f2tlkIL5p6CQZNTTm%2FVfbZsV%2Ff02gCEo9vn4zdgykXnJ0451zqsCAc3JNpgYoywshgxNr6gZmxCd5ZAUqS%2Bk6K8OkShhL8Quu7qsuU5Dsw5%2FuQywY6pgF9XHOKbViT4mfK8CKrPAkE8xc7yn2yevss6lHdyfEg%2FQr7aXbElFBFSMzOrSKwiONFyWv43LXUyCqWEcEsGAjAgZs%2FdMN5BaksUPseIanSFYsqUhKO8Bm%2FY4luZtNSz%2FfiRfmauF%2Bx9V1hqFUYlCSa7wnudGGT8N9eZrnVe7A3hH%2F8A8RY6DeOcfGgMo0cShqgSjCNg5kZ8L7%2FdFp%2B%2Bsgya5pP6Nls&X-Amz-Signature=189cfffc716263aa6f80413bc659c972a66f9a903c644c9afb85ba9264af9b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


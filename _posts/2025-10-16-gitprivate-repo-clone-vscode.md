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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3UFQ32%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqTwTWiZML5vXFpN4fvZAuMixbQAhiD1nR2aI6XqFCGAiBmsFHsGHLmLxFGa6tH%2BoDaIN6iJX9brswQsl0O9lGO8Sr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpGSNWnOq2PZefq7TKtwDN4TRJackn0nRal6chjNHHKZ3h%2Fx25fGG6ZmkES8e%2FCkh9xNmCBd1IexYA9J4rw5ua4WrQAtjNGY7LAI%2BT7zWVOCsmGnn%2FJVl12WHkT7KAov%2BtCy5OzR7PQ2wgPe0VqfAufP2iMMkGuDmaArFdIAz4Pc2HgQaUR3VBTXnca%2FWpMvMXN7rOUV7%2BgscK6pWVl4q2VkYDEu0YvqgneqJBB%2BzRsCLTcoaeoHY%2FEFEYuFnKyNe6hfmdNahm4BMJW6Al4KjGlS5b4N8AuKXgggfFfvZvSj5WsiEnYQpZNsjz1m7QKWUAOy9FneN5BX7NbCqQi2Q1TjshDEIDbzUSjmgp9%2BMsh07QaDlZvI6ixeTuOK3PPS9PLJzJy6yhMExgse4CPoPHoIjjlDK%2BhedtQGePcUoBVEeN%2BhcO%2FVk0nsNNK5gYVAVcfJWaZwqUReDmPlcye5PTQSfglH3mky01FlA99YaCuHXMr8HHXS1WQi2VSTZ%2FWmOG8Em7RKJvKNMtvyPNrkqn4A%2Fn6DmAcs%2FFhqSJS3wlHCELve5J%2Bn74oOBEVitoMj1BEwIA0zULWQqT8EwPyTFpweN468R8TuSiVpDHpSjfhIsQX6d4SCbrEzCnJKMum0XbPbESY%2BQfqb02BEwvtn2ygY6pgFLfLn2GVErznGbazxlVfn%2Fxtx0%2BtPx0T6vHb1MlAOwWTaipXU1X%2Fv5vEZYMxaO8T9aGHZtu6A1Nxe20uK1lXnM7st%2Fhx33o7nc%2BiTa%2Bgx71YGwAd3ngj0obtX%2BeY0Y72WXVO7VHJAFuxem8upCFi5PgPPYW7d2nMBAW%2F4r%2F0xbgB%2Bg7%2BBhikyhXSLHtIQmj3ZW88AY2VIKamAvnZMNQG2FXb0HWRHE&X-Amz-Signature=43e9c9128993f232d828eee71e94bd66037631af8941aafdbfd5cd8d40912bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3UFQ32%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqTwTWiZML5vXFpN4fvZAuMixbQAhiD1nR2aI6XqFCGAiBmsFHsGHLmLxFGa6tH%2BoDaIN6iJX9brswQsl0O9lGO8Sr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpGSNWnOq2PZefq7TKtwDN4TRJackn0nRal6chjNHHKZ3h%2Fx25fGG6ZmkES8e%2FCkh9xNmCBd1IexYA9J4rw5ua4WrQAtjNGY7LAI%2BT7zWVOCsmGnn%2FJVl12WHkT7KAov%2BtCy5OzR7PQ2wgPe0VqfAufP2iMMkGuDmaArFdIAz4Pc2HgQaUR3VBTXnca%2FWpMvMXN7rOUV7%2BgscK6pWVl4q2VkYDEu0YvqgneqJBB%2BzRsCLTcoaeoHY%2FEFEYuFnKyNe6hfmdNahm4BMJW6Al4KjGlS5b4N8AuKXgggfFfvZvSj5WsiEnYQpZNsjz1m7QKWUAOy9FneN5BX7NbCqQi2Q1TjshDEIDbzUSjmgp9%2BMsh07QaDlZvI6ixeTuOK3PPS9PLJzJy6yhMExgse4CPoPHoIjjlDK%2BhedtQGePcUoBVEeN%2BhcO%2FVk0nsNNK5gYVAVcfJWaZwqUReDmPlcye5PTQSfglH3mky01FlA99YaCuHXMr8HHXS1WQi2VSTZ%2FWmOG8Em7RKJvKNMtvyPNrkqn4A%2Fn6DmAcs%2FFhqSJS3wlHCELve5J%2Bn74oOBEVitoMj1BEwIA0zULWQqT8EwPyTFpweN468R8TuSiVpDHpSjfhIsQX6d4SCbrEzCnJKMum0XbPbESY%2BQfqb02BEwvtn2ygY6pgFLfLn2GVErznGbazxlVfn%2Fxtx0%2BtPx0T6vHb1MlAOwWTaipXU1X%2Fv5vEZYMxaO8T9aGHZtu6A1Nxe20uK1lXnM7st%2Fhx33o7nc%2BiTa%2Bgx71YGwAd3ngj0obtX%2BeY0Y72WXVO7VHJAFuxem8upCFi5PgPPYW7d2nMBAW%2F4r%2F0xbgB%2Bg7%2BBhikyhXSLHtIQmj3ZW88AY2VIKamAvnZMNQG2FXb0HWRHE&X-Amz-Signature=76a85fa301afbad8df66808ea429755283cc694448fa78a51cb5500763ebfad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3UFQ32%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqTwTWiZML5vXFpN4fvZAuMixbQAhiD1nR2aI6XqFCGAiBmsFHsGHLmLxFGa6tH%2BoDaIN6iJX9brswQsl0O9lGO8Sr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpGSNWnOq2PZefq7TKtwDN4TRJackn0nRal6chjNHHKZ3h%2Fx25fGG6ZmkES8e%2FCkh9xNmCBd1IexYA9J4rw5ua4WrQAtjNGY7LAI%2BT7zWVOCsmGnn%2FJVl12WHkT7KAov%2BtCy5OzR7PQ2wgPe0VqfAufP2iMMkGuDmaArFdIAz4Pc2HgQaUR3VBTXnca%2FWpMvMXN7rOUV7%2BgscK6pWVl4q2VkYDEu0YvqgneqJBB%2BzRsCLTcoaeoHY%2FEFEYuFnKyNe6hfmdNahm4BMJW6Al4KjGlS5b4N8AuKXgggfFfvZvSj5WsiEnYQpZNsjz1m7QKWUAOy9FneN5BX7NbCqQi2Q1TjshDEIDbzUSjmgp9%2BMsh07QaDlZvI6ixeTuOK3PPS9PLJzJy6yhMExgse4CPoPHoIjjlDK%2BhedtQGePcUoBVEeN%2BhcO%2FVk0nsNNK5gYVAVcfJWaZwqUReDmPlcye5PTQSfglH3mky01FlA99YaCuHXMr8HHXS1WQi2VSTZ%2FWmOG8Em7RKJvKNMtvyPNrkqn4A%2Fn6DmAcs%2FFhqSJS3wlHCELve5J%2Bn74oOBEVitoMj1BEwIA0zULWQqT8EwPyTFpweN468R8TuSiVpDHpSjfhIsQX6d4SCbrEzCnJKMum0XbPbESY%2BQfqb02BEwvtn2ygY6pgFLfLn2GVErznGbazxlVfn%2Fxtx0%2BtPx0T6vHb1MlAOwWTaipXU1X%2Fv5vEZYMxaO8T9aGHZtu6A1Nxe20uK1lXnM7st%2Fhx33o7nc%2BiTa%2Bgx71YGwAd3ngj0obtX%2BeY0Y72WXVO7VHJAFuxem8upCFi5PgPPYW7d2nMBAW%2F4r%2F0xbgB%2Bg7%2BBhikyhXSLHtIQmj3ZW88AY2VIKamAvnZMNQG2FXb0HWRHE&X-Amz-Signature=1d64ce31c4ac4c2092fc0bee1f325a47c73957737bd7ec14900cc0b0718c0a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3UFQ32%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqTwTWiZML5vXFpN4fvZAuMixbQAhiD1nR2aI6XqFCGAiBmsFHsGHLmLxFGa6tH%2BoDaIN6iJX9brswQsl0O9lGO8Sr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpGSNWnOq2PZefq7TKtwDN4TRJackn0nRal6chjNHHKZ3h%2Fx25fGG6ZmkES8e%2FCkh9xNmCBd1IexYA9J4rw5ua4WrQAtjNGY7LAI%2BT7zWVOCsmGnn%2FJVl12WHkT7KAov%2BtCy5OzR7PQ2wgPe0VqfAufP2iMMkGuDmaArFdIAz4Pc2HgQaUR3VBTXnca%2FWpMvMXN7rOUV7%2BgscK6pWVl4q2VkYDEu0YvqgneqJBB%2BzRsCLTcoaeoHY%2FEFEYuFnKyNe6hfmdNahm4BMJW6Al4KjGlS5b4N8AuKXgggfFfvZvSj5WsiEnYQpZNsjz1m7QKWUAOy9FneN5BX7NbCqQi2Q1TjshDEIDbzUSjmgp9%2BMsh07QaDlZvI6ixeTuOK3PPS9PLJzJy6yhMExgse4CPoPHoIjjlDK%2BhedtQGePcUoBVEeN%2BhcO%2FVk0nsNNK5gYVAVcfJWaZwqUReDmPlcye5PTQSfglH3mky01FlA99YaCuHXMr8HHXS1WQi2VSTZ%2FWmOG8Em7RKJvKNMtvyPNrkqn4A%2Fn6DmAcs%2FFhqSJS3wlHCELve5J%2Bn74oOBEVitoMj1BEwIA0zULWQqT8EwPyTFpweN468R8TuSiVpDHpSjfhIsQX6d4SCbrEzCnJKMum0XbPbESY%2BQfqb02BEwvtn2ygY6pgFLfLn2GVErznGbazxlVfn%2Fxtx0%2BtPx0T6vHb1MlAOwWTaipXU1X%2Fv5vEZYMxaO8T9aGHZtu6A1Nxe20uK1lXnM7st%2Fhx33o7nc%2BiTa%2Bgx71YGwAd3ngj0obtX%2BeY0Y72WXVO7VHJAFuxem8upCFi5PgPPYW7d2nMBAW%2F4r%2F0xbgB%2Bg7%2BBhikyhXSLHtIQmj3ZW88AY2VIKamAvnZMNQG2FXb0HWRHE&X-Amz-Signature=c5af4be0986fed292e5f68ac9d67fd60db8f64e4aad9c24b7da6be4af670585f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


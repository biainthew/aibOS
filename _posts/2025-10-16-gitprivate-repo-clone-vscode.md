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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFGQMSO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvL3zNO3s0%2Bn49LjyYDHv4EEOkCXJf2OUs5gnsADutJQIhAOXWGk1YLcDHUTKDBQZz%2Bo6dQJbTNNCxb0vHJ7yj2Cy8Kv8DCDoQABoMNjM3NDIzMTgzODA1Igyny6j3XYfGIxEUYHkq3AMZqppZxTy7ExvPjo7iQh74KnXhpT15%2F1ILE0naRQ2qb4tb2JMcOuwif6z8pKq2MmuAd4LYe%2Bfe4ZUto1vWD6T8MRyiSXOb5fMKY6%2Bp8%2F7a0tLzqQXrJYKm5GGUApzpWrS11I%2FzFHyjUqUpO8xGQWVyI5G9CaOyNpxDHtQvHEFAM1S7XXh6hPXGYmHZPZnmWexNwmzRu6px5DyGm1fU8ChBHSUFcSNs7HMzgE9yHaX%2F4CSwY9w55IuY%2FvMSCNV5qecZl8A9QJxfKr8lhtrsqPjPTIup5YgKo9L40UXl19o0T8Bd%2FWyZqAv9ygD5DXPTZS3YwfW8w1cE%2BqFzrLupf9L7wNuIep15%2B0tAAN1bUdDvBMb%2ByiTTBMohAZT3Ak0OIVMifKEodk%2BPesSm%2F1MsfrvHkwgiGMTkGSrf3Q62cselpIScHVyd04GVBPjl%2FfMPY3hllN9cKkAI4C7mD79kdg8UXJXmlRz%2FKtuzVC%2F6txWxn5pcWhNH3K%2B7wv4aw7RmH18AkMSYIugY7%2Fn87M%2FYjvI2WBlwsQJPyCIqA4O%2BGQX%2BFlHZuIkTw38Oob%2FTO5GbWPmfvLBQr99Nz94Zudx%2FNlMzMcF9szRg60zbSt58pxLKyFCMPqKVlw52wmIm4jC%2B2NzLBjqkARGHr%2FsJ62%2F64mtq1Nnrk%2F1JqaRa1uqzY035%2BxuwkIGangcbz5eG5ctqeOV3IkkIVxqtnzzJ4IEpctB%2FMA1u0nbSxfj5GNaNo0fnV4nuEooI%2FTBE73SF0Uq8cdWR9N0GGjUnPzDb27VN8qDsR0Pwr4%2FzBd0ioGXBzXz8C7Pg7QpYRmSfB%2FAaKEZK76kA54u6yj%2Fzi62UqZRseI5NLZoX%2BT54jveX&X-Amz-Signature=07fdc6aec46fcefc96033ff4447cf56e73b49638b8ac2fa9e7de627fdffd297c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFGQMSO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvL3zNO3s0%2Bn49LjyYDHv4EEOkCXJf2OUs5gnsADutJQIhAOXWGk1YLcDHUTKDBQZz%2Bo6dQJbTNNCxb0vHJ7yj2Cy8Kv8DCDoQABoMNjM3NDIzMTgzODA1Igyny6j3XYfGIxEUYHkq3AMZqppZxTy7ExvPjo7iQh74KnXhpT15%2F1ILE0naRQ2qb4tb2JMcOuwif6z8pKq2MmuAd4LYe%2Bfe4ZUto1vWD6T8MRyiSXOb5fMKY6%2Bp8%2F7a0tLzqQXrJYKm5GGUApzpWrS11I%2FzFHyjUqUpO8xGQWVyI5G9CaOyNpxDHtQvHEFAM1S7XXh6hPXGYmHZPZnmWexNwmzRu6px5DyGm1fU8ChBHSUFcSNs7HMzgE9yHaX%2F4CSwY9w55IuY%2FvMSCNV5qecZl8A9QJxfKr8lhtrsqPjPTIup5YgKo9L40UXl19o0T8Bd%2FWyZqAv9ygD5DXPTZS3YwfW8w1cE%2BqFzrLupf9L7wNuIep15%2B0tAAN1bUdDvBMb%2ByiTTBMohAZT3Ak0OIVMifKEodk%2BPesSm%2F1MsfrvHkwgiGMTkGSrf3Q62cselpIScHVyd04GVBPjl%2FfMPY3hllN9cKkAI4C7mD79kdg8UXJXmlRz%2FKtuzVC%2F6txWxn5pcWhNH3K%2B7wv4aw7RmH18AkMSYIugY7%2Fn87M%2FYjvI2WBlwsQJPyCIqA4O%2BGQX%2BFlHZuIkTw38Oob%2FTO5GbWPmfvLBQr99Nz94Zudx%2FNlMzMcF9szRg60zbSt58pxLKyFCMPqKVlw52wmIm4jC%2B2NzLBjqkARGHr%2FsJ62%2F64mtq1Nnrk%2F1JqaRa1uqzY035%2BxuwkIGangcbz5eG5ctqeOV3IkkIVxqtnzzJ4IEpctB%2FMA1u0nbSxfj5GNaNo0fnV4nuEooI%2FTBE73SF0Uq8cdWR9N0GGjUnPzDb27VN8qDsR0Pwr4%2FzBd0ioGXBzXz8C7Pg7QpYRmSfB%2FAaKEZK76kA54u6yj%2Fzi62UqZRseI5NLZoX%2BT54jveX&X-Amz-Signature=b14ede3a600b62bc1afa76913f2192916577d94c61e03d79c7c1d9da26028a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFGQMSO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvL3zNO3s0%2Bn49LjyYDHv4EEOkCXJf2OUs5gnsADutJQIhAOXWGk1YLcDHUTKDBQZz%2Bo6dQJbTNNCxb0vHJ7yj2Cy8Kv8DCDoQABoMNjM3NDIzMTgzODA1Igyny6j3XYfGIxEUYHkq3AMZqppZxTy7ExvPjo7iQh74KnXhpT15%2F1ILE0naRQ2qb4tb2JMcOuwif6z8pKq2MmuAd4LYe%2Bfe4ZUto1vWD6T8MRyiSXOb5fMKY6%2Bp8%2F7a0tLzqQXrJYKm5GGUApzpWrS11I%2FzFHyjUqUpO8xGQWVyI5G9CaOyNpxDHtQvHEFAM1S7XXh6hPXGYmHZPZnmWexNwmzRu6px5DyGm1fU8ChBHSUFcSNs7HMzgE9yHaX%2F4CSwY9w55IuY%2FvMSCNV5qecZl8A9QJxfKr8lhtrsqPjPTIup5YgKo9L40UXl19o0T8Bd%2FWyZqAv9ygD5DXPTZS3YwfW8w1cE%2BqFzrLupf9L7wNuIep15%2B0tAAN1bUdDvBMb%2ByiTTBMohAZT3Ak0OIVMifKEodk%2BPesSm%2F1MsfrvHkwgiGMTkGSrf3Q62cselpIScHVyd04GVBPjl%2FfMPY3hllN9cKkAI4C7mD79kdg8UXJXmlRz%2FKtuzVC%2F6txWxn5pcWhNH3K%2B7wv4aw7RmH18AkMSYIugY7%2Fn87M%2FYjvI2WBlwsQJPyCIqA4O%2BGQX%2BFlHZuIkTw38Oob%2FTO5GbWPmfvLBQr99Nz94Zudx%2FNlMzMcF9szRg60zbSt58pxLKyFCMPqKVlw52wmIm4jC%2B2NzLBjqkARGHr%2FsJ62%2F64mtq1Nnrk%2F1JqaRa1uqzY035%2BxuwkIGangcbz5eG5ctqeOV3IkkIVxqtnzzJ4IEpctB%2FMA1u0nbSxfj5GNaNo0fnV4nuEooI%2FTBE73SF0Uq8cdWR9N0GGjUnPzDb27VN8qDsR0Pwr4%2FzBd0ioGXBzXz8C7Pg7QpYRmSfB%2FAaKEZK76kA54u6yj%2Fzi62UqZRseI5NLZoX%2BT54jveX&X-Amz-Signature=c32bee2ab89a76cfac32fa949693f582d776e920e631587d0279e20ef2681aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFGQMSO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvL3zNO3s0%2Bn49LjyYDHv4EEOkCXJf2OUs5gnsADutJQIhAOXWGk1YLcDHUTKDBQZz%2Bo6dQJbTNNCxb0vHJ7yj2Cy8Kv8DCDoQABoMNjM3NDIzMTgzODA1Igyny6j3XYfGIxEUYHkq3AMZqppZxTy7ExvPjo7iQh74KnXhpT15%2F1ILE0naRQ2qb4tb2JMcOuwif6z8pKq2MmuAd4LYe%2Bfe4ZUto1vWD6T8MRyiSXOb5fMKY6%2Bp8%2F7a0tLzqQXrJYKm5GGUApzpWrS11I%2FzFHyjUqUpO8xGQWVyI5G9CaOyNpxDHtQvHEFAM1S7XXh6hPXGYmHZPZnmWexNwmzRu6px5DyGm1fU8ChBHSUFcSNs7HMzgE9yHaX%2F4CSwY9w55IuY%2FvMSCNV5qecZl8A9QJxfKr8lhtrsqPjPTIup5YgKo9L40UXl19o0T8Bd%2FWyZqAv9ygD5DXPTZS3YwfW8w1cE%2BqFzrLupf9L7wNuIep15%2B0tAAN1bUdDvBMb%2ByiTTBMohAZT3Ak0OIVMifKEodk%2BPesSm%2F1MsfrvHkwgiGMTkGSrf3Q62cselpIScHVyd04GVBPjl%2FfMPY3hllN9cKkAI4C7mD79kdg8UXJXmlRz%2FKtuzVC%2F6txWxn5pcWhNH3K%2B7wv4aw7RmH18AkMSYIugY7%2Fn87M%2FYjvI2WBlwsQJPyCIqA4O%2BGQX%2BFlHZuIkTw38Oob%2FTO5GbWPmfvLBQr99Nz94Zudx%2FNlMzMcF9szRg60zbSt58pxLKyFCMPqKVlw52wmIm4jC%2B2NzLBjqkARGHr%2FsJ62%2F64mtq1Nnrk%2F1JqaRa1uqzY035%2BxuwkIGangcbz5eG5ctqeOV3IkkIVxqtnzzJ4IEpctB%2FMA1u0nbSxfj5GNaNo0fnV4nuEooI%2FTBE73SF0Uq8cdWR9N0GGjUnPzDb27VN8qDsR0Pwr4%2FzBd0ioGXBzXz8C7Pg7QpYRmSfB%2FAaKEZK76kA54u6yj%2Fzi62UqZRseI5NLZoX%2BT54jveX&X-Amz-Signature=b8a9da77aa539e68deb8430592f9fe84815c5a1423125c01ca559d8f2b78ec8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


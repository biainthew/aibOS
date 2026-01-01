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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZFXSLL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCVH2ygQRp9DnFE46KjuDmiVkkxhPBiTTNDakJq04Q7%2BAIgRwlbpU41Ouqbq5am%2BrZikGudHKess59%2FoSV9zQlmLBEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ULHn1NqHs2ZytZSrcA3ZID0xKeLgOzpX3Kv%2B5oSeHHmVQvwVhXGHrNF4QFcnwl8wCbgWH9JT0BSPIM97nkLJEMKCtTxgzUTHBRMxSQTMAVN09xanPPFVPIl2UeJw%2BnaRUl6VYBcWWOEpsSUW4GHfeqH%2BF6Jg4UCB5rJp201e1Pop31CggieQOBFgvSeLDQ1HpJYTuWm7eqPIat%2FvH6DhJEyiGBo2AXadrB5oyyu9eoxJM25aeaJH0Yrf2P0z71kNQdhJfUvcwbKXT9NpsNGo8A%2BmlhGBFQm0SbZBxs4jHCplMqrfO5w9TgfMnIh2khu6EDLMgPkK0JeGdb35NWqGNSVr406pkVToNGxdxy18dtvkPPqtt7rgUPJJfE31pq%2F7u8yFiYTUYd%2BQYDbrcV33BL4%2BOzuwOHn%2FLfPTsBz9obS%2FtYGspdkl8DrFJMxLuIEuVWHS1%2BVCLbyO1Th9%2FI%2BSGLRWYBK7vn3KnX2vi3NdGrFIc2lmrKWuoCESyN%2FZALq99wVhpAxXHggH3ALLFJahTZHfa0sBdHYlF%2FaXtJtrcAaoCvaL%2FLpllQL%2B3CsU0McNVmmSXBvg3NJWGCLWD9JrtINS7ouG6QaT3DdXmcRSdz3iMJAXqAZOphjjraDrIcT6RaTGyCimByd6JMO7%2B1coGOqUByOevIo3PfYaIIVme88%2Fznd%2BeSB3cwxXwgxqFSDeFvRZl7FT4e8ntAkkzfomeGAFEq3R8MHHuIAl2jMjYeiwG3KUi33Z6BHPDWYm0e8GacEA2AHqmC8hK85H%2BKTXLuvUyabv56%2FJJOWvUQE2w3U%2FI0V6efZwZEcpkdfIxvW5Trw2L5FmBHZ8VH%2Bat3GVSBfLyXaAR8HSiMWQkqD3LnfE9Nd4I1O%2Bk&X-Amz-Signature=ea9a5c8e9012914f9f669858f7fe9bb4e8b9de4d15b33272db32825f8b2ea951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZFXSLL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCVH2ygQRp9DnFE46KjuDmiVkkxhPBiTTNDakJq04Q7%2BAIgRwlbpU41Ouqbq5am%2BrZikGudHKess59%2FoSV9zQlmLBEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ULHn1NqHs2ZytZSrcA3ZID0xKeLgOzpX3Kv%2B5oSeHHmVQvwVhXGHrNF4QFcnwl8wCbgWH9JT0BSPIM97nkLJEMKCtTxgzUTHBRMxSQTMAVN09xanPPFVPIl2UeJw%2BnaRUl6VYBcWWOEpsSUW4GHfeqH%2BF6Jg4UCB5rJp201e1Pop31CggieQOBFgvSeLDQ1HpJYTuWm7eqPIat%2FvH6DhJEyiGBo2AXadrB5oyyu9eoxJM25aeaJH0Yrf2P0z71kNQdhJfUvcwbKXT9NpsNGo8A%2BmlhGBFQm0SbZBxs4jHCplMqrfO5w9TgfMnIh2khu6EDLMgPkK0JeGdb35NWqGNSVr406pkVToNGxdxy18dtvkPPqtt7rgUPJJfE31pq%2F7u8yFiYTUYd%2BQYDbrcV33BL4%2BOzuwOHn%2FLfPTsBz9obS%2FtYGspdkl8DrFJMxLuIEuVWHS1%2BVCLbyO1Th9%2FI%2BSGLRWYBK7vn3KnX2vi3NdGrFIc2lmrKWuoCESyN%2FZALq99wVhpAxXHggH3ALLFJahTZHfa0sBdHYlF%2FaXtJtrcAaoCvaL%2FLpllQL%2B3CsU0McNVmmSXBvg3NJWGCLWD9JrtINS7ouG6QaT3DdXmcRSdz3iMJAXqAZOphjjraDrIcT6RaTGyCimByd6JMO7%2B1coGOqUByOevIo3PfYaIIVme88%2Fznd%2BeSB3cwxXwgxqFSDeFvRZl7FT4e8ntAkkzfomeGAFEq3R8MHHuIAl2jMjYeiwG3KUi33Z6BHPDWYm0e8GacEA2AHqmC8hK85H%2BKTXLuvUyabv56%2FJJOWvUQE2w3U%2FI0V6efZwZEcpkdfIxvW5Trw2L5FmBHZ8VH%2Bat3GVSBfLyXaAR8HSiMWQkqD3LnfE9Nd4I1O%2Bk&X-Amz-Signature=59a9eb304233f2919469eb75978660fe54dc8aa10c404f234f874304b5c70bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZFXSLL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCVH2ygQRp9DnFE46KjuDmiVkkxhPBiTTNDakJq04Q7%2BAIgRwlbpU41Ouqbq5am%2BrZikGudHKess59%2FoSV9zQlmLBEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ULHn1NqHs2ZytZSrcA3ZID0xKeLgOzpX3Kv%2B5oSeHHmVQvwVhXGHrNF4QFcnwl8wCbgWH9JT0BSPIM97nkLJEMKCtTxgzUTHBRMxSQTMAVN09xanPPFVPIl2UeJw%2BnaRUl6VYBcWWOEpsSUW4GHfeqH%2BF6Jg4UCB5rJp201e1Pop31CggieQOBFgvSeLDQ1HpJYTuWm7eqPIat%2FvH6DhJEyiGBo2AXadrB5oyyu9eoxJM25aeaJH0Yrf2P0z71kNQdhJfUvcwbKXT9NpsNGo8A%2BmlhGBFQm0SbZBxs4jHCplMqrfO5w9TgfMnIh2khu6EDLMgPkK0JeGdb35NWqGNSVr406pkVToNGxdxy18dtvkPPqtt7rgUPJJfE31pq%2F7u8yFiYTUYd%2BQYDbrcV33BL4%2BOzuwOHn%2FLfPTsBz9obS%2FtYGspdkl8DrFJMxLuIEuVWHS1%2BVCLbyO1Th9%2FI%2BSGLRWYBK7vn3KnX2vi3NdGrFIc2lmrKWuoCESyN%2FZALq99wVhpAxXHggH3ALLFJahTZHfa0sBdHYlF%2FaXtJtrcAaoCvaL%2FLpllQL%2B3CsU0McNVmmSXBvg3NJWGCLWD9JrtINS7ouG6QaT3DdXmcRSdz3iMJAXqAZOphjjraDrIcT6RaTGyCimByd6JMO7%2B1coGOqUByOevIo3PfYaIIVme88%2Fznd%2BeSB3cwxXwgxqFSDeFvRZl7FT4e8ntAkkzfomeGAFEq3R8MHHuIAl2jMjYeiwG3KUi33Z6BHPDWYm0e8GacEA2AHqmC8hK85H%2BKTXLuvUyabv56%2FJJOWvUQE2w3U%2FI0V6efZwZEcpkdfIxvW5Trw2L5FmBHZ8VH%2Bat3GVSBfLyXaAR8HSiMWQkqD3LnfE9Nd4I1O%2Bk&X-Amz-Signature=991a26288502696e410e690e73abf52c9bc9e1e9bd16da720d7706f9841753aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZFXSLL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCVH2ygQRp9DnFE46KjuDmiVkkxhPBiTTNDakJq04Q7%2BAIgRwlbpU41Ouqbq5am%2BrZikGudHKess59%2FoSV9zQlmLBEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ULHn1NqHs2ZytZSrcA3ZID0xKeLgOzpX3Kv%2B5oSeHHmVQvwVhXGHrNF4QFcnwl8wCbgWH9JT0BSPIM97nkLJEMKCtTxgzUTHBRMxSQTMAVN09xanPPFVPIl2UeJw%2BnaRUl6VYBcWWOEpsSUW4GHfeqH%2BF6Jg4UCB5rJp201e1Pop31CggieQOBFgvSeLDQ1HpJYTuWm7eqPIat%2FvH6DhJEyiGBo2AXadrB5oyyu9eoxJM25aeaJH0Yrf2P0z71kNQdhJfUvcwbKXT9NpsNGo8A%2BmlhGBFQm0SbZBxs4jHCplMqrfO5w9TgfMnIh2khu6EDLMgPkK0JeGdb35NWqGNSVr406pkVToNGxdxy18dtvkPPqtt7rgUPJJfE31pq%2F7u8yFiYTUYd%2BQYDbrcV33BL4%2BOzuwOHn%2FLfPTsBz9obS%2FtYGspdkl8DrFJMxLuIEuVWHS1%2BVCLbyO1Th9%2FI%2BSGLRWYBK7vn3KnX2vi3NdGrFIc2lmrKWuoCESyN%2FZALq99wVhpAxXHggH3ALLFJahTZHfa0sBdHYlF%2FaXtJtrcAaoCvaL%2FLpllQL%2B3CsU0McNVmmSXBvg3NJWGCLWD9JrtINS7ouG6QaT3DdXmcRSdz3iMJAXqAZOphjjraDrIcT6RaTGyCimByd6JMO7%2B1coGOqUByOevIo3PfYaIIVme88%2Fznd%2BeSB3cwxXwgxqFSDeFvRZl7FT4e8ntAkkzfomeGAFEq3R8MHHuIAl2jMjYeiwG3KUi33Z6BHPDWYm0e8GacEA2AHqmC8hK85H%2BKTXLuvUyabv56%2FJJOWvUQE2w3U%2FI0V6efZwZEcpkdfIxvW5Trw2L5FmBHZ8VH%2Bat3GVSBfLyXaAR8HSiMWQkqD3LnfE9Nd4I1O%2Bk&X-Amz-Signature=b8bee36a82e6029ec13a6bf580cda3bf14737a00c6b3637943b140394ee764a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


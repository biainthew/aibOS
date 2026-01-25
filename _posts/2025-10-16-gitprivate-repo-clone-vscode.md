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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHS466M%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICTc3JEG%2FzCZV8HWQ3Ke95LO2iCUZQ%2Fn8HG2uA91ma55AiALEXGeKsbL8kmZmvtqeStiRRDWjO5no1iGPbrzHNg6qyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMN3t2zMWEyXDsAgsRKtwDvBNk7vPWc2sHfSAEnsVGG2vEWxtO%2Bo2rSKmekVVsRznat5EJhIOPOJ2zjubZR7Q8RI5K7HTfWj42N5BNSzYw7iPPHkvsUZ%2B4t7IpqMrlF0fABN6L2j8mvA5DsvcpI6QTzlxh93kLxm0HSORTsUIZolOC8%2B8AXPX%2FVAi7vYYlrsIzNRkC3VEQQPhoY8PDojHYoSEn6NrAFpv4Gu0KkQFlcye0IfFh6nkMOlYCpnWmUYtndD3ccGA1asaQZ3NCTOxfiw5yPi6BaSlaUPTCdHejdZft7Zjr2ZiRF4QBnobV%2FMsgKXOAwzv%2B6pHK%2FkmtTRC6hIX7T0UeJyV5CylWZG3jUN70%2BX8wEeEKU7WKakUx5MHI0TyQUH26SscVmUFpAbxaibH1nAeqbBOTXCovWPzrL%2FzpFFKcUFTV5rBKfCuI0wK4RkG1vT5aCQdhZf5u9YI6UzZ69S80LH%2BtjlzwXIjkXAjWM1rmrFOmFQ%2Bvj6WMDLml4bkeKXuNgEuQbTEnv2oLYZMxFQvVT1yhAFqMAfEIwyOh%2BSlqnWbPQfWQ%2F0W9pN7LN17Bxa1Br3JUVshdGwfKGMlej503zIqdBmm4OB1nQi8Tdg9tnYrIHkY8N5kO3D1yyQOivrMpbSFhB5kwjNPVywY6pgG2hgNfIZGjFtVml168pvjnEl7BkAu4nOPxaSAviwhwVdAqiM8gBOKqqKZerOTdGG2RkVDkYlAI%2Bht4A31OygEJymrFD06R1q7usZwdjeKC27SDqbU%2FDFMQ5092jbrMeVsV2lYrsn4JWLunhhGVigP8Do6PYHG4JO1rJjGa9uw%2F6W5IOrQa3QCgtyBCwkjQjSJF1H89a00b1xvNqWBc00RAWqC9VCeW&X-Amz-Signature=30d19e97fb8302beaa93dbee883402b23951ce82e5ecf73eb08aad233b2d19e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHS466M%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICTc3JEG%2FzCZV8HWQ3Ke95LO2iCUZQ%2Fn8HG2uA91ma55AiALEXGeKsbL8kmZmvtqeStiRRDWjO5no1iGPbrzHNg6qyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMN3t2zMWEyXDsAgsRKtwDvBNk7vPWc2sHfSAEnsVGG2vEWxtO%2Bo2rSKmekVVsRznat5EJhIOPOJ2zjubZR7Q8RI5K7HTfWj42N5BNSzYw7iPPHkvsUZ%2B4t7IpqMrlF0fABN6L2j8mvA5DsvcpI6QTzlxh93kLxm0HSORTsUIZolOC8%2B8AXPX%2FVAi7vYYlrsIzNRkC3VEQQPhoY8PDojHYoSEn6NrAFpv4Gu0KkQFlcye0IfFh6nkMOlYCpnWmUYtndD3ccGA1asaQZ3NCTOxfiw5yPi6BaSlaUPTCdHejdZft7Zjr2ZiRF4QBnobV%2FMsgKXOAwzv%2B6pHK%2FkmtTRC6hIX7T0UeJyV5CylWZG3jUN70%2BX8wEeEKU7WKakUx5MHI0TyQUH26SscVmUFpAbxaibH1nAeqbBOTXCovWPzrL%2FzpFFKcUFTV5rBKfCuI0wK4RkG1vT5aCQdhZf5u9YI6UzZ69S80LH%2BtjlzwXIjkXAjWM1rmrFOmFQ%2Bvj6WMDLml4bkeKXuNgEuQbTEnv2oLYZMxFQvVT1yhAFqMAfEIwyOh%2BSlqnWbPQfWQ%2F0W9pN7LN17Bxa1Br3JUVshdGwfKGMlej503zIqdBmm4OB1nQi8Tdg9tnYrIHkY8N5kO3D1yyQOivrMpbSFhB5kwjNPVywY6pgG2hgNfIZGjFtVml168pvjnEl7BkAu4nOPxaSAviwhwVdAqiM8gBOKqqKZerOTdGG2RkVDkYlAI%2Bht4A31OygEJymrFD06R1q7usZwdjeKC27SDqbU%2FDFMQ5092jbrMeVsV2lYrsn4JWLunhhGVigP8Do6PYHG4JO1rJjGa9uw%2F6W5IOrQa3QCgtyBCwkjQjSJF1H89a00b1xvNqWBc00RAWqC9VCeW&X-Amz-Signature=8088e64e757976b774680e1e91af1d289568716c84213b59fd2620e6d68d6f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHS466M%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICTc3JEG%2FzCZV8HWQ3Ke95LO2iCUZQ%2Fn8HG2uA91ma55AiALEXGeKsbL8kmZmvtqeStiRRDWjO5no1iGPbrzHNg6qyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMN3t2zMWEyXDsAgsRKtwDvBNk7vPWc2sHfSAEnsVGG2vEWxtO%2Bo2rSKmekVVsRznat5EJhIOPOJ2zjubZR7Q8RI5K7HTfWj42N5BNSzYw7iPPHkvsUZ%2B4t7IpqMrlF0fABN6L2j8mvA5DsvcpI6QTzlxh93kLxm0HSORTsUIZolOC8%2B8AXPX%2FVAi7vYYlrsIzNRkC3VEQQPhoY8PDojHYoSEn6NrAFpv4Gu0KkQFlcye0IfFh6nkMOlYCpnWmUYtndD3ccGA1asaQZ3NCTOxfiw5yPi6BaSlaUPTCdHejdZft7Zjr2ZiRF4QBnobV%2FMsgKXOAwzv%2B6pHK%2FkmtTRC6hIX7T0UeJyV5CylWZG3jUN70%2BX8wEeEKU7WKakUx5MHI0TyQUH26SscVmUFpAbxaibH1nAeqbBOTXCovWPzrL%2FzpFFKcUFTV5rBKfCuI0wK4RkG1vT5aCQdhZf5u9YI6UzZ69S80LH%2BtjlzwXIjkXAjWM1rmrFOmFQ%2Bvj6WMDLml4bkeKXuNgEuQbTEnv2oLYZMxFQvVT1yhAFqMAfEIwyOh%2BSlqnWbPQfWQ%2F0W9pN7LN17Bxa1Br3JUVshdGwfKGMlej503zIqdBmm4OB1nQi8Tdg9tnYrIHkY8N5kO3D1yyQOivrMpbSFhB5kwjNPVywY6pgG2hgNfIZGjFtVml168pvjnEl7BkAu4nOPxaSAviwhwVdAqiM8gBOKqqKZerOTdGG2RkVDkYlAI%2Bht4A31OygEJymrFD06R1q7usZwdjeKC27SDqbU%2FDFMQ5092jbrMeVsV2lYrsn4JWLunhhGVigP8Do6PYHG4JO1rJjGa9uw%2F6W5IOrQa3QCgtyBCwkjQjSJF1H89a00b1xvNqWBc00RAWqC9VCeW&X-Amz-Signature=cf7b38ed84af16d255956c75305c5c2bf0d72cc742f1970b7d0e4da42e0e3477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHS466M%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICTc3JEG%2FzCZV8HWQ3Ke95LO2iCUZQ%2Fn8HG2uA91ma55AiALEXGeKsbL8kmZmvtqeStiRRDWjO5no1iGPbrzHNg6qyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMN3t2zMWEyXDsAgsRKtwDvBNk7vPWc2sHfSAEnsVGG2vEWxtO%2Bo2rSKmekVVsRznat5EJhIOPOJ2zjubZR7Q8RI5K7HTfWj42N5BNSzYw7iPPHkvsUZ%2B4t7IpqMrlF0fABN6L2j8mvA5DsvcpI6QTzlxh93kLxm0HSORTsUIZolOC8%2B8AXPX%2FVAi7vYYlrsIzNRkC3VEQQPhoY8PDojHYoSEn6NrAFpv4Gu0KkQFlcye0IfFh6nkMOlYCpnWmUYtndD3ccGA1asaQZ3NCTOxfiw5yPi6BaSlaUPTCdHejdZft7Zjr2ZiRF4QBnobV%2FMsgKXOAwzv%2B6pHK%2FkmtTRC6hIX7T0UeJyV5CylWZG3jUN70%2BX8wEeEKU7WKakUx5MHI0TyQUH26SscVmUFpAbxaibH1nAeqbBOTXCovWPzrL%2FzpFFKcUFTV5rBKfCuI0wK4RkG1vT5aCQdhZf5u9YI6UzZ69S80LH%2BtjlzwXIjkXAjWM1rmrFOmFQ%2Bvj6WMDLml4bkeKXuNgEuQbTEnv2oLYZMxFQvVT1yhAFqMAfEIwyOh%2BSlqnWbPQfWQ%2F0W9pN7LN17Bxa1Br3JUVshdGwfKGMlej503zIqdBmm4OB1nQi8Tdg9tnYrIHkY8N5kO3D1yyQOivrMpbSFhB5kwjNPVywY6pgG2hgNfIZGjFtVml168pvjnEl7BkAu4nOPxaSAviwhwVdAqiM8gBOKqqKZerOTdGG2RkVDkYlAI%2Bht4A31OygEJymrFD06R1q7usZwdjeKC27SDqbU%2FDFMQ5092jbrMeVsV2lYrsn4JWLunhhGVigP8Do6PYHG4JO1rJjGa9uw%2F6W5IOrQa3QCgtyBCwkjQjSJF1H89a00b1xvNqWBc00RAWqC9VCeW&X-Amz-Signature=e90244954f5faa9999ee4720e52a706e4510f73834493aef0e64fa99a768ec4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


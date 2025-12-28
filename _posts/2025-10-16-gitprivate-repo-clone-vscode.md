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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMHFGIG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu6%2BD9LyXKN6mNWreh%2B0CebfIzKPFEcDAllXgEMUv7HwIhAMyksHZLqsRwTAo9VJGH6fWjmWwtQDhYfFSz8e4RsOW4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgxBs7MADxIHa0YIO8kq3AMGlH4YMiSQvEg%2BPj2KoHki%2BA4V0iPx3uFVmN4XYZ67IbrA7s5SLx7mZZrhsiz2zJi7ObbjurY0KpDGALL1QMQItgj1VOAYhjSyd0db%2B%2FZsZwQAYFcg6WVBp5M4xGB3%2BunBF1dbxM1MkWhDoxrih0dfmF7YE5JJtXzs%2FqvrDY2sD1uTcxg0AeKKVOSoctXLJrleBHMDEXKcN1utoUYnxKY02iAufKrQZVDKoceb3%2FCXC3vDQjFqRgsIXmRpT6n1HsoM%2Fx7Bbpux9bp7MvC0Q9JqNfm3FCZzeQgemMWAkWYoglprsCKNbU%2FCBTPiFQphk3ixAU%2BT3WqqfYxc5Cto2UuNWeE70leC8PJ1PP60qHm%2FUzLhfF617WkUj2%2Fs%2BRO9%2FpD%2F0UdLhCVsd1jI2cBmz1%2B3IQY46XiBbAtp6jsYiYd0ABqd11WmmGkiuY%2FHaNd9OA6frcavkguVXFI2SAFotzVwInwjNpr5kE25vkks%2F0Od79BJ73z7v3E47GysN0mFnSk6i9WL1lDQ%2BjqSGo3Sk%2F6f2YstnCW2Zgdu4W03hbBKhTilzmzdJYdM3mNMPQSDMt7KT%2BpP9s8eKHbnXO6C%2FuQIldTBIFck4Ql75K%2BrIBzLKKz8fL3ygy1aHYTD9DCU3cHKBjqkAZHnR8GS%2FlH9MOldsuRxu7ltHxDuS3Cw%2FF2TSIxCXLtE65lWGNylObgw6sC1WNFBhrSyx2tYNY0QR17CKLtMDGjkh84gACq2cWFboeh6DdMjBuENjI%2BJqtwbY2c0kU9S6S%2BZ3rrIZA0UAb4RNGlxIECLGtRL4blDuPD4b0uN0Fh5QOghnEuTCEsr01IvJprU3LQ1Yn70JAqmqYvjORK4pYWSNJqD&X-Amz-Signature=e9fb84be232f2c58eba9bf53122dbee934477912258ba75918f4db3c90e8f90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMHFGIG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu6%2BD9LyXKN6mNWreh%2B0CebfIzKPFEcDAllXgEMUv7HwIhAMyksHZLqsRwTAo9VJGH6fWjmWwtQDhYfFSz8e4RsOW4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgxBs7MADxIHa0YIO8kq3AMGlH4YMiSQvEg%2BPj2KoHki%2BA4V0iPx3uFVmN4XYZ67IbrA7s5SLx7mZZrhsiz2zJi7ObbjurY0KpDGALL1QMQItgj1VOAYhjSyd0db%2B%2FZsZwQAYFcg6WVBp5M4xGB3%2BunBF1dbxM1MkWhDoxrih0dfmF7YE5JJtXzs%2FqvrDY2sD1uTcxg0AeKKVOSoctXLJrleBHMDEXKcN1utoUYnxKY02iAufKrQZVDKoceb3%2FCXC3vDQjFqRgsIXmRpT6n1HsoM%2Fx7Bbpux9bp7MvC0Q9JqNfm3FCZzeQgemMWAkWYoglprsCKNbU%2FCBTPiFQphk3ixAU%2BT3WqqfYxc5Cto2UuNWeE70leC8PJ1PP60qHm%2FUzLhfF617WkUj2%2Fs%2BRO9%2FpD%2F0UdLhCVsd1jI2cBmz1%2B3IQY46XiBbAtp6jsYiYd0ABqd11WmmGkiuY%2FHaNd9OA6frcavkguVXFI2SAFotzVwInwjNpr5kE25vkks%2F0Od79BJ73z7v3E47GysN0mFnSk6i9WL1lDQ%2BjqSGo3Sk%2F6f2YstnCW2Zgdu4W03hbBKhTilzmzdJYdM3mNMPQSDMt7KT%2BpP9s8eKHbnXO6C%2FuQIldTBIFck4Ql75K%2BrIBzLKKz8fL3ygy1aHYTD9DCU3cHKBjqkAZHnR8GS%2FlH9MOldsuRxu7ltHxDuS3Cw%2FF2TSIxCXLtE65lWGNylObgw6sC1WNFBhrSyx2tYNY0QR17CKLtMDGjkh84gACq2cWFboeh6DdMjBuENjI%2BJqtwbY2c0kU9S6S%2BZ3rrIZA0UAb4RNGlxIECLGtRL4blDuPD4b0uN0Fh5QOghnEuTCEsr01IvJprU3LQ1Yn70JAqmqYvjORK4pYWSNJqD&X-Amz-Signature=5e70df222949c12c24b0fb22491c1ebc6f79327fe94b075f54672f90b535fb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMHFGIG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu6%2BD9LyXKN6mNWreh%2B0CebfIzKPFEcDAllXgEMUv7HwIhAMyksHZLqsRwTAo9VJGH6fWjmWwtQDhYfFSz8e4RsOW4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgxBs7MADxIHa0YIO8kq3AMGlH4YMiSQvEg%2BPj2KoHki%2BA4V0iPx3uFVmN4XYZ67IbrA7s5SLx7mZZrhsiz2zJi7ObbjurY0KpDGALL1QMQItgj1VOAYhjSyd0db%2B%2FZsZwQAYFcg6WVBp5M4xGB3%2BunBF1dbxM1MkWhDoxrih0dfmF7YE5JJtXzs%2FqvrDY2sD1uTcxg0AeKKVOSoctXLJrleBHMDEXKcN1utoUYnxKY02iAufKrQZVDKoceb3%2FCXC3vDQjFqRgsIXmRpT6n1HsoM%2Fx7Bbpux9bp7MvC0Q9JqNfm3FCZzeQgemMWAkWYoglprsCKNbU%2FCBTPiFQphk3ixAU%2BT3WqqfYxc5Cto2UuNWeE70leC8PJ1PP60qHm%2FUzLhfF617WkUj2%2Fs%2BRO9%2FpD%2F0UdLhCVsd1jI2cBmz1%2B3IQY46XiBbAtp6jsYiYd0ABqd11WmmGkiuY%2FHaNd9OA6frcavkguVXFI2SAFotzVwInwjNpr5kE25vkks%2F0Od79BJ73z7v3E47GysN0mFnSk6i9WL1lDQ%2BjqSGo3Sk%2F6f2YstnCW2Zgdu4W03hbBKhTilzmzdJYdM3mNMPQSDMt7KT%2BpP9s8eKHbnXO6C%2FuQIldTBIFck4Ql75K%2BrIBzLKKz8fL3ygy1aHYTD9DCU3cHKBjqkAZHnR8GS%2FlH9MOldsuRxu7ltHxDuS3Cw%2FF2TSIxCXLtE65lWGNylObgw6sC1WNFBhrSyx2tYNY0QR17CKLtMDGjkh84gACq2cWFboeh6DdMjBuENjI%2BJqtwbY2c0kU9S6S%2BZ3rrIZA0UAb4RNGlxIECLGtRL4blDuPD4b0uN0Fh5QOghnEuTCEsr01IvJprU3LQ1Yn70JAqmqYvjORK4pYWSNJqD&X-Amz-Signature=df117945ca7adff1abd41a1603115ee9dbca8c0f33647157e0565a1f11725427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMHFGIG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu6%2BD9LyXKN6mNWreh%2B0CebfIzKPFEcDAllXgEMUv7HwIhAMyksHZLqsRwTAo9VJGH6fWjmWwtQDhYfFSz8e4RsOW4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgxBs7MADxIHa0YIO8kq3AMGlH4YMiSQvEg%2BPj2KoHki%2BA4V0iPx3uFVmN4XYZ67IbrA7s5SLx7mZZrhsiz2zJi7ObbjurY0KpDGALL1QMQItgj1VOAYhjSyd0db%2B%2FZsZwQAYFcg6WVBp5M4xGB3%2BunBF1dbxM1MkWhDoxrih0dfmF7YE5JJtXzs%2FqvrDY2sD1uTcxg0AeKKVOSoctXLJrleBHMDEXKcN1utoUYnxKY02iAufKrQZVDKoceb3%2FCXC3vDQjFqRgsIXmRpT6n1HsoM%2Fx7Bbpux9bp7MvC0Q9JqNfm3FCZzeQgemMWAkWYoglprsCKNbU%2FCBTPiFQphk3ixAU%2BT3WqqfYxc5Cto2UuNWeE70leC8PJ1PP60qHm%2FUzLhfF617WkUj2%2Fs%2BRO9%2FpD%2F0UdLhCVsd1jI2cBmz1%2B3IQY46XiBbAtp6jsYiYd0ABqd11WmmGkiuY%2FHaNd9OA6frcavkguVXFI2SAFotzVwInwjNpr5kE25vkks%2F0Od79BJ73z7v3E47GysN0mFnSk6i9WL1lDQ%2BjqSGo3Sk%2F6f2YstnCW2Zgdu4W03hbBKhTilzmzdJYdM3mNMPQSDMt7KT%2BpP9s8eKHbnXO6C%2FuQIldTBIFck4Ql75K%2BrIBzLKKz8fL3ygy1aHYTD9DCU3cHKBjqkAZHnR8GS%2FlH9MOldsuRxu7ltHxDuS3Cw%2FF2TSIxCXLtE65lWGNylObgw6sC1WNFBhrSyx2tYNY0QR17CKLtMDGjkh84gACq2cWFboeh6DdMjBuENjI%2BJqtwbY2c0kU9S6S%2BZ3rrIZA0UAb4RNGlxIECLGtRL4blDuPD4b0uN0Fh5QOghnEuTCEsr01IvJprU3LQ1Yn70JAqmqYvjORK4pYWSNJqD&X-Amz-Signature=450d7cd1f5171381e89578ea2ffac2abfe6ef120ddde677e72883b42fb6bc9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


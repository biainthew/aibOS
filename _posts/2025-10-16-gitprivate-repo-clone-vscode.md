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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJJHI22%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFWHRz1WyGYD0szwGLj2C06NoHE7rdYvwwkX1yxCUJS8AiEA3PgGTuDFrGW0rM6ZgJIfg6QMwtB17aX8Mx%2FClLskdhoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFEs%2BStV5LE7asHrUSrcAztlO11cdcanrKv8FaJfX9WkEc3Dxs2v0814aUR%2FfaU%2B6Ua9AYLGc6hji1MVNio3OBlSgDeStitIqHo2Oqzi%2B7Q9C0jfuMw8Fcl4ufXeD8B46UUrSm9ScQG01%2F3DYnOrea6V301NHjPKUJ9fcRahgLi4HZjLG9mm3sHgQMFr5HeSWFVgg0LSULAvGdFCRuFKpSiuaqzxa0wXHJUkUvCQYFe8zDqZIAx65gnJcM%2FKFcQRt%2FBCtqnUzEMer53Cd%2BCHfLXpOpBGNtYRzlq5LUwXxH7UC5G9E3mQHIIy89FE4Ae9KeLSr4dvwzNlMEFUPIpF4lF%2F%2BrcBmnB%2FH3aMjwgLlI5UDGAagVfWbkfjZG68eIXrIo%2Bho%2FW9UmPW0ptGtpcj6px%2Fj3LfpYTcHAnnulHC1fGFM%2FsWlnhbI2Jhx%2BcnIeSDQqBayMI%2FsWZ5VLGA%2Bb4gDT%2FqyZlcex3v%2B1abCoydGyTLPRj5loP2BVsXgsmUnnCX1K1wNSst%2BcQxK8matORXAEuB%2Fbb%2FVJ4JKfTeBw9iujfHv%2Fnb74cbYTn5zX%2BV92HNHjcFDMdwaFc%2Fy63Qju8g9NkLOwBDxe%2B9UX%2BkFDlK0tIvH8rU9Ac6G0X2sMPYO5co%2Fh9%2FKnPNr8S5XbhvMIe33MsGOqUB5PPE3DU4l2OSxx%2FLNrqHVPdNcY1XQ5HxmF%2FPrJEj75%2F%2Fxd3eiuLbEl88JkGH7Lt1njLL3rlJBt%2FiZFoafjfQ2b9ZohROvxI5ya5mXh51mZR1ROFWhVJ6Mepk%2B60Xuqvte%2FAPAgxlmk1xEQxQ73m2pC9rudi0L3B7bXxtIZHzIA925bQsxVnY2iZPDR8dA7PUvnsWl0kf1VhYFApYLw5wavgkjvek&X-Amz-Signature=ebb78d4e71bbf2dfdc792efb8218c49a140acc3360590840eca84fbbe7d1d4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJJHI22%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFWHRz1WyGYD0szwGLj2C06NoHE7rdYvwwkX1yxCUJS8AiEA3PgGTuDFrGW0rM6ZgJIfg6QMwtB17aX8Mx%2FClLskdhoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFEs%2BStV5LE7asHrUSrcAztlO11cdcanrKv8FaJfX9WkEc3Dxs2v0814aUR%2FfaU%2B6Ua9AYLGc6hji1MVNio3OBlSgDeStitIqHo2Oqzi%2B7Q9C0jfuMw8Fcl4ufXeD8B46UUrSm9ScQG01%2F3DYnOrea6V301NHjPKUJ9fcRahgLi4HZjLG9mm3sHgQMFr5HeSWFVgg0LSULAvGdFCRuFKpSiuaqzxa0wXHJUkUvCQYFe8zDqZIAx65gnJcM%2FKFcQRt%2FBCtqnUzEMer53Cd%2BCHfLXpOpBGNtYRzlq5LUwXxH7UC5G9E3mQHIIy89FE4Ae9KeLSr4dvwzNlMEFUPIpF4lF%2F%2BrcBmnB%2FH3aMjwgLlI5UDGAagVfWbkfjZG68eIXrIo%2Bho%2FW9UmPW0ptGtpcj6px%2Fj3LfpYTcHAnnulHC1fGFM%2FsWlnhbI2Jhx%2BcnIeSDQqBayMI%2FsWZ5VLGA%2Bb4gDT%2FqyZlcex3v%2B1abCoydGyTLPRj5loP2BVsXgsmUnnCX1K1wNSst%2BcQxK8matORXAEuB%2Fbb%2FVJ4JKfTeBw9iujfHv%2Fnb74cbYTn5zX%2BV92HNHjcFDMdwaFc%2Fy63Qju8g9NkLOwBDxe%2B9UX%2BkFDlK0tIvH8rU9Ac6G0X2sMPYO5co%2Fh9%2FKnPNr8S5XbhvMIe33MsGOqUB5PPE3DU4l2OSxx%2FLNrqHVPdNcY1XQ5HxmF%2FPrJEj75%2F%2Fxd3eiuLbEl88JkGH7Lt1njLL3rlJBt%2FiZFoafjfQ2b9ZohROvxI5ya5mXh51mZR1ROFWhVJ6Mepk%2B60Xuqvte%2FAPAgxlmk1xEQxQ73m2pC9rudi0L3B7bXxtIZHzIA925bQsxVnY2iZPDR8dA7PUvnsWl0kf1VhYFApYLw5wavgkjvek&X-Amz-Signature=13b1e46dae596f730b891762739b800760aefc8e4c7842c8537aadcfb24833f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJJHI22%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFWHRz1WyGYD0szwGLj2C06NoHE7rdYvwwkX1yxCUJS8AiEA3PgGTuDFrGW0rM6ZgJIfg6QMwtB17aX8Mx%2FClLskdhoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFEs%2BStV5LE7asHrUSrcAztlO11cdcanrKv8FaJfX9WkEc3Dxs2v0814aUR%2FfaU%2B6Ua9AYLGc6hji1MVNio3OBlSgDeStitIqHo2Oqzi%2B7Q9C0jfuMw8Fcl4ufXeD8B46UUrSm9ScQG01%2F3DYnOrea6V301NHjPKUJ9fcRahgLi4HZjLG9mm3sHgQMFr5HeSWFVgg0LSULAvGdFCRuFKpSiuaqzxa0wXHJUkUvCQYFe8zDqZIAx65gnJcM%2FKFcQRt%2FBCtqnUzEMer53Cd%2BCHfLXpOpBGNtYRzlq5LUwXxH7UC5G9E3mQHIIy89FE4Ae9KeLSr4dvwzNlMEFUPIpF4lF%2F%2BrcBmnB%2FH3aMjwgLlI5UDGAagVfWbkfjZG68eIXrIo%2Bho%2FW9UmPW0ptGtpcj6px%2Fj3LfpYTcHAnnulHC1fGFM%2FsWlnhbI2Jhx%2BcnIeSDQqBayMI%2FsWZ5VLGA%2Bb4gDT%2FqyZlcex3v%2B1abCoydGyTLPRj5loP2BVsXgsmUnnCX1K1wNSst%2BcQxK8matORXAEuB%2Fbb%2FVJ4JKfTeBw9iujfHv%2Fnb74cbYTn5zX%2BV92HNHjcFDMdwaFc%2Fy63Qju8g9NkLOwBDxe%2B9UX%2BkFDlK0tIvH8rU9Ac6G0X2sMPYO5co%2Fh9%2FKnPNr8S5XbhvMIe33MsGOqUB5PPE3DU4l2OSxx%2FLNrqHVPdNcY1XQ5HxmF%2FPrJEj75%2F%2Fxd3eiuLbEl88JkGH7Lt1njLL3rlJBt%2FiZFoafjfQ2b9ZohROvxI5ya5mXh51mZR1ROFWhVJ6Mepk%2B60Xuqvte%2FAPAgxlmk1xEQxQ73m2pC9rudi0L3B7bXxtIZHzIA925bQsxVnY2iZPDR8dA7PUvnsWl0kf1VhYFApYLw5wavgkjvek&X-Amz-Signature=b8c80700c40b81d7cd621ebf744c196d3a7c17b5f3a8ffc1a3d4b41a15e3f139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJJHI22%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFWHRz1WyGYD0szwGLj2C06NoHE7rdYvwwkX1yxCUJS8AiEA3PgGTuDFrGW0rM6ZgJIfg6QMwtB17aX8Mx%2FClLskdhoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFEs%2BStV5LE7asHrUSrcAztlO11cdcanrKv8FaJfX9WkEc3Dxs2v0814aUR%2FfaU%2B6Ua9AYLGc6hji1MVNio3OBlSgDeStitIqHo2Oqzi%2B7Q9C0jfuMw8Fcl4ufXeD8B46UUrSm9ScQG01%2F3DYnOrea6V301NHjPKUJ9fcRahgLi4HZjLG9mm3sHgQMFr5HeSWFVgg0LSULAvGdFCRuFKpSiuaqzxa0wXHJUkUvCQYFe8zDqZIAx65gnJcM%2FKFcQRt%2FBCtqnUzEMer53Cd%2BCHfLXpOpBGNtYRzlq5LUwXxH7UC5G9E3mQHIIy89FE4Ae9KeLSr4dvwzNlMEFUPIpF4lF%2F%2BrcBmnB%2FH3aMjwgLlI5UDGAagVfWbkfjZG68eIXrIo%2Bho%2FW9UmPW0ptGtpcj6px%2Fj3LfpYTcHAnnulHC1fGFM%2FsWlnhbI2Jhx%2BcnIeSDQqBayMI%2FsWZ5VLGA%2Bb4gDT%2FqyZlcex3v%2B1abCoydGyTLPRj5loP2BVsXgsmUnnCX1K1wNSst%2BcQxK8matORXAEuB%2Fbb%2FVJ4JKfTeBw9iujfHv%2Fnb74cbYTn5zX%2BV92HNHjcFDMdwaFc%2Fy63Qju8g9NkLOwBDxe%2B9UX%2BkFDlK0tIvH8rU9Ac6G0X2sMPYO5co%2Fh9%2FKnPNr8S5XbhvMIe33MsGOqUB5PPE3DU4l2OSxx%2FLNrqHVPdNcY1XQ5HxmF%2FPrJEj75%2F%2Fxd3eiuLbEl88JkGH7Lt1njLL3rlJBt%2FiZFoafjfQ2b9ZohROvxI5ya5mXh51mZR1ROFWhVJ6Mepk%2B60Xuqvte%2FAPAgxlmk1xEQxQ73m2pC9rudi0L3B7bXxtIZHzIA925bQsxVnY2iZPDR8dA7PUvnsWl0kf1VhYFApYLw5wavgkjvek&X-Amz-Signature=d320c3930873585b4227573b8510d947aefde9ea3d9e158a0a0fb50cc52ebaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


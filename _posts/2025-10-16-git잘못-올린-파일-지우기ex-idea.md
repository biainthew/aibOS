---
layout: post
title: "[Git]잘못 올린 파일 지우기(ex. .idea)"
date: 2024-06-04
categories: [general]
tags: [Work]
excerpt_separator: ""
---



### 1. .idea 폴더와 같은 위치에 .gitignore 파일 생성 후 아래 코드 추가


```javascript
### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr
out/
!**/src/main/**/out/
!**/src/test/**/out/
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/dd9ced26-ff22-43fa-8b7a-87f8c3a2aa0b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKPPHQH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCHPUY2oJWFFFnlePsfIaQo6SESGfmuW%2FF3S%2BU24CX0XAIhAK9pp7oigni%2FNCLslYl0dyzdIEFHA3JU3InNWUbhbENhKv8DCDsQABoMNjM3NDIzMTgzODA1IgyryeGMswm4YNUYoGkq3AMfPZ13wi7%2Fu%2BixIhJDsck5VjbjUrAK4CgmJSR26411%2BFyDheCoqoiUwOmpgCsk7UAEuVQiffuk9GjaVzT8vsDwPh9h0WeA2I5%2F9WpeNfQO4AHa2B0%2FwTfM8ExKtbDyl%2FAYgAm0E6BTRRd0ra6ySTPP0t0Q2OjGnPnWk7ZpXR5vypcYQXC5A9UUp9fjdLr7r4I6uuJCAoaP8%2BQ8vnu24KNY8%2FfmadmT913IoR1IFJVOQ25KoT43bYBh2cuIb8ujLmGqpksqLQSCEcU2weql7jZKKjHh6r4boBisO7YWNCzehIRkNcW%2FgRb0%2FPPwWq1Xqr%2BC9ExqhfqBoy67e%2F2NWW18HplNoRqmp6vMuhpqmJFyFGOLibIUqdyzTy6yjMxzWu2aF4irPaAsGHo7SEHtNxLcF2PDcM%2ByPgnpd0WJBgA55Oicri3oUROjbrtYcbG%2BY7SpOC8%2F3C2Fa3D8Ji2MAx6jM5aVHOazsiiDAy33zHK8vAFbrAXP9B3oFNaWwsKas8TOX5sbN54LgsJAyKQ%2F8CKmlicWwKcPsX3i1XJ%2FGikpaxEi3T8EVJkg1k5dg74qKryrR3S%2FMEWn1Gh4eu0hvCVFFVMP%2Fuyu6ruBk0hfNNqaCyXLgERsPqwhhfYrxTCx%2B9zLBjqkAbaShjZKwtAUhkKxBG4pBSgGQjs%2B0m3%2FMCYKvAZXxSZTKQ4q%2B0aMxVDwyho6nZjwaR0wSESOsrnbVzws%2Fc%2BeJlOtZ1TUy4QNb8RxGZahl5jA9MKieVqGBYGmLET2%2FRsgaWArFmp0spgDlAEHyL7dxNS2G7Gg3vfZM0jhi0qUiH38pVxKtoknLiR%2B4VXDzayeSRn5raTPq8QPaP5zIhAEoeNFfXrx&X-Amz-Signature=bae32f444f3f1dbb788b8d5865de4eb20034f782517ef55bb5ab1daf318c65be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/7e8f340f-f716-47bf-8c94-84cb3f045685/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKPPHQH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCHPUY2oJWFFFnlePsfIaQo6SESGfmuW%2FF3S%2BU24CX0XAIhAK9pp7oigni%2FNCLslYl0dyzdIEFHA3JU3InNWUbhbENhKv8DCDsQABoMNjM3NDIzMTgzODA1IgyryeGMswm4YNUYoGkq3AMfPZ13wi7%2Fu%2BixIhJDsck5VjbjUrAK4CgmJSR26411%2BFyDheCoqoiUwOmpgCsk7UAEuVQiffuk9GjaVzT8vsDwPh9h0WeA2I5%2F9WpeNfQO4AHa2B0%2FwTfM8ExKtbDyl%2FAYgAm0E6BTRRd0ra6ySTPP0t0Q2OjGnPnWk7ZpXR5vypcYQXC5A9UUp9fjdLr7r4I6uuJCAoaP8%2BQ8vnu24KNY8%2FfmadmT913IoR1IFJVOQ25KoT43bYBh2cuIb8ujLmGqpksqLQSCEcU2weql7jZKKjHh6r4boBisO7YWNCzehIRkNcW%2FgRb0%2FPPwWq1Xqr%2BC9ExqhfqBoy67e%2F2NWW18HplNoRqmp6vMuhpqmJFyFGOLibIUqdyzTy6yjMxzWu2aF4irPaAsGHo7SEHtNxLcF2PDcM%2ByPgnpd0WJBgA55Oicri3oUROjbrtYcbG%2BY7SpOC8%2F3C2Fa3D8Ji2MAx6jM5aVHOazsiiDAy33zHK8vAFbrAXP9B3oFNaWwsKas8TOX5sbN54LgsJAyKQ%2F8CKmlicWwKcPsX3i1XJ%2FGikpaxEi3T8EVJkg1k5dg74qKryrR3S%2FMEWn1Gh4eu0hvCVFFVMP%2Fuyu6ruBk0hfNNqaCyXLgERsPqwhhfYrxTCx%2B9zLBjqkAbaShjZKwtAUhkKxBG4pBSgGQjs%2B0m3%2FMCYKvAZXxSZTKQ4q%2B0aMxVDwyho6nZjwaR0wSESOsrnbVzws%2Fc%2BeJlOtZ1TUy4QNb8RxGZahl5jA9MKieVqGBYGmLET2%2FRsgaWArFmp0spgDlAEHyL7dxNS2G7Gg3vfZM0jhi0qUiH38pVxKtoknLiR%2B4VXDzayeSRn5raTPq8QPaP5zIhAEoeNFfXrx&X-Amz-Signature=1fd5130e795cfaec4536d09e88f92ff11c64447da89fdd1635137d14ca2acdf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 2. 레포에서도 파일 지우기 + push


```javascript
git rm --cashed -r .idea/
```


⇒ .idea 는 로컬에는 존재하고 레포에는 존재하면 안되므로 —cached 옵션 사용해서 삭제 후 push


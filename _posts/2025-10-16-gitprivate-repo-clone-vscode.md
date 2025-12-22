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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4HYTEK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICERW3OPzftkqx5BKvVCmOGotfVC6VsRbzMU5XXx8CgJAiEAmTe3Gb%2FwlH6nP3AkpaUNQ7uIJpg3RyHCQWq9n2S8I2EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4j7esDHSv3cS%2F0YCrcAwouJ2mJrad%2BR2NE5pXI8OnnuGaRgnJVRRw%2FRc4Xr46uY9DrJzK07uUBEqjrIo9I8J6SZ%2FFVURWZel8%2Bq7neRZNpGF4i7U1o%2F3EtTwOhEDAua%2BPTzB9WnL9Q%2Bs5fGI7ZWQ%2B6Vy5CRvywmQPmICzj%2BNfmQAdkOr1uzoOLl2cIXZuIgue%2FESfgqXx%2FBa8NqkIjH%2FWrw61vIruQrglauykkjBaBH6CAx22D8ZsQRPkNs%2BzZT4CdaznOxL2sY2OmIvO%2FAwNQew6ZpVFpe1qLJpyLsf3R8DY4cR%2BXBgKWGIV6e0alm4jHHzE5kNVzEZoKcvAmtWX9mXO%2B2rz%2Fpuqvc%2FknGCh53mP1wZOqdfEnETfd1uJFnORPIyiG09xqM4QDDE7rNNnX4a5fgH71iDXCbEJhlkbZ1q44S4Cxz5yhfz%2BJ%2FX4deHt%2FWnyc3xtHLaULbY1q%2FBtBo43aVqJXuIDuh0IvBachmg5bJ1qF7wiW4ftlWmC1j1ZEk3skNZL3mA02XPOrPXUhlBkZ9M140OQCQGwg0BDXVQOx5BzScZDXw7tmNAYL%2BreMVdLYmaABv%2Fbgrp2TSjbxnS580yyAJih7q4eMoDEdl8HaydV90G2EiTCIQTY7JXKNhMGFUH9aplMcMNeVpMoGOqUB8PHixkhA2fDjS3Bi4LymsXST6Y2j7R2Oc32ryH8Um3jnjM88AtjiPmlNPdlzHnk4HFFwylCpVKBb%2Bxv2BoWmqQkvnsT9KCGUnbKSBwET6SG2Cukb050uFpR0MwKewrv7poCRdetCViMKaipxRy6SJ2OuqqWDwcZ9Qies2vWY2N0q2iIGbxj7ahluC0JIn55ZXXp9N90zbpVoEWmDAgkcQkR6g%2Fdl&X-Amz-Signature=bd8e1bc52903077896ba98c3315d0d3895834f5c2d6e85cef02795093653a9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4HYTEK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICERW3OPzftkqx5BKvVCmOGotfVC6VsRbzMU5XXx8CgJAiEAmTe3Gb%2FwlH6nP3AkpaUNQ7uIJpg3RyHCQWq9n2S8I2EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4j7esDHSv3cS%2F0YCrcAwouJ2mJrad%2BR2NE5pXI8OnnuGaRgnJVRRw%2FRc4Xr46uY9DrJzK07uUBEqjrIo9I8J6SZ%2FFVURWZel8%2Bq7neRZNpGF4i7U1o%2F3EtTwOhEDAua%2BPTzB9WnL9Q%2Bs5fGI7ZWQ%2B6Vy5CRvywmQPmICzj%2BNfmQAdkOr1uzoOLl2cIXZuIgue%2FESfgqXx%2FBa8NqkIjH%2FWrw61vIruQrglauykkjBaBH6CAx22D8ZsQRPkNs%2BzZT4CdaznOxL2sY2OmIvO%2FAwNQew6ZpVFpe1qLJpyLsf3R8DY4cR%2BXBgKWGIV6e0alm4jHHzE5kNVzEZoKcvAmtWX9mXO%2B2rz%2Fpuqvc%2FknGCh53mP1wZOqdfEnETfd1uJFnORPIyiG09xqM4QDDE7rNNnX4a5fgH71iDXCbEJhlkbZ1q44S4Cxz5yhfz%2BJ%2FX4deHt%2FWnyc3xtHLaULbY1q%2FBtBo43aVqJXuIDuh0IvBachmg5bJ1qF7wiW4ftlWmC1j1ZEk3skNZL3mA02XPOrPXUhlBkZ9M140OQCQGwg0BDXVQOx5BzScZDXw7tmNAYL%2BreMVdLYmaABv%2Fbgrp2TSjbxnS580yyAJih7q4eMoDEdl8HaydV90G2EiTCIQTY7JXKNhMGFUH9aplMcMNeVpMoGOqUB8PHixkhA2fDjS3Bi4LymsXST6Y2j7R2Oc32ryH8Um3jnjM88AtjiPmlNPdlzHnk4HFFwylCpVKBb%2Bxv2BoWmqQkvnsT9KCGUnbKSBwET6SG2Cukb050uFpR0MwKewrv7poCRdetCViMKaipxRy6SJ2OuqqWDwcZ9Qies2vWY2N0q2iIGbxj7ahluC0JIn55ZXXp9N90zbpVoEWmDAgkcQkR6g%2Fdl&X-Amz-Signature=4fbd19ff760028d05260baab9e50b9c9d9ba8235984bb364db12a74d58c581a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4HYTEK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICERW3OPzftkqx5BKvVCmOGotfVC6VsRbzMU5XXx8CgJAiEAmTe3Gb%2FwlH6nP3AkpaUNQ7uIJpg3RyHCQWq9n2S8I2EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4j7esDHSv3cS%2F0YCrcAwouJ2mJrad%2BR2NE5pXI8OnnuGaRgnJVRRw%2FRc4Xr46uY9DrJzK07uUBEqjrIo9I8J6SZ%2FFVURWZel8%2Bq7neRZNpGF4i7U1o%2F3EtTwOhEDAua%2BPTzB9WnL9Q%2Bs5fGI7ZWQ%2B6Vy5CRvywmQPmICzj%2BNfmQAdkOr1uzoOLl2cIXZuIgue%2FESfgqXx%2FBa8NqkIjH%2FWrw61vIruQrglauykkjBaBH6CAx22D8ZsQRPkNs%2BzZT4CdaznOxL2sY2OmIvO%2FAwNQew6ZpVFpe1qLJpyLsf3R8DY4cR%2BXBgKWGIV6e0alm4jHHzE5kNVzEZoKcvAmtWX9mXO%2B2rz%2Fpuqvc%2FknGCh53mP1wZOqdfEnETfd1uJFnORPIyiG09xqM4QDDE7rNNnX4a5fgH71iDXCbEJhlkbZ1q44S4Cxz5yhfz%2BJ%2FX4deHt%2FWnyc3xtHLaULbY1q%2FBtBo43aVqJXuIDuh0IvBachmg5bJ1qF7wiW4ftlWmC1j1ZEk3skNZL3mA02XPOrPXUhlBkZ9M140OQCQGwg0BDXVQOx5BzScZDXw7tmNAYL%2BreMVdLYmaABv%2Fbgrp2TSjbxnS580yyAJih7q4eMoDEdl8HaydV90G2EiTCIQTY7JXKNhMGFUH9aplMcMNeVpMoGOqUB8PHixkhA2fDjS3Bi4LymsXST6Y2j7R2Oc32ryH8Um3jnjM88AtjiPmlNPdlzHnk4HFFwylCpVKBb%2Bxv2BoWmqQkvnsT9KCGUnbKSBwET6SG2Cukb050uFpR0MwKewrv7poCRdetCViMKaipxRy6SJ2OuqqWDwcZ9Qies2vWY2N0q2iIGbxj7ahluC0JIn55ZXXp9N90zbpVoEWmDAgkcQkR6g%2Fdl&X-Amz-Signature=e6dd2e18e90addea2ad087e47c914cfc51ee1716450c65f847bcf3d82ed5f67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4HYTEK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICERW3OPzftkqx5BKvVCmOGotfVC6VsRbzMU5XXx8CgJAiEAmTe3Gb%2FwlH6nP3AkpaUNQ7uIJpg3RyHCQWq9n2S8I2EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4j7esDHSv3cS%2F0YCrcAwouJ2mJrad%2BR2NE5pXI8OnnuGaRgnJVRRw%2FRc4Xr46uY9DrJzK07uUBEqjrIo9I8J6SZ%2FFVURWZel8%2Bq7neRZNpGF4i7U1o%2F3EtTwOhEDAua%2BPTzB9WnL9Q%2Bs5fGI7ZWQ%2B6Vy5CRvywmQPmICzj%2BNfmQAdkOr1uzoOLl2cIXZuIgue%2FESfgqXx%2FBa8NqkIjH%2FWrw61vIruQrglauykkjBaBH6CAx22D8ZsQRPkNs%2BzZT4CdaznOxL2sY2OmIvO%2FAwNQew6ZpVFpe1qLJpyLsf3R8DY4cR%2BXBgKWGIV6e0alm4jHHzE5kNVzEZoKcvAmtWX9mXO%2B2rz%2Fpuqvc%2FknGCh53mP1wZOqdfEnETfd1uJFnORPIyiG09xqM4QDDE7rNNnX4a5fgH71iDXCbEJhlkbZ1q44S4Cxz5yhfz%2BJ%2FX4deHt%2FWnyc3xtHLaULbY1q%2FBtBo43aVqJXuIDuh0IvBachmg5bJ1qF7wiW4ftlWmC1j1ZEk3skNZL3mA02XPOrPXUhlBkZ9M140OQCQGwg0BDXVQOx5BzScZDXw7tmNAYL%2BreMVdLYmaABv%2Fbgrp2TSjbxnS580yyAJih7q4eMoDEdl8HaydV90G2EiTCIQTY7JXKNhMGFUH9aplMcMNeVpMoGOqUB8PHixkhA2fDjS3Bi4LymsXST6Y2j7R2Oc32ryH8Um3jnjM88AtjiPmlNPdlzHnk4HFFwylCpVKBb%2Bxv2BoWmqQkvnsT9KCGUnbKSBwET6SG2Cukb050uFpR0MwKewrv7poCRdetCViMKaipxRy6SJ2OuqqWDwcZ9Qies2vWY2N0q2iIGbxj7ahluC0JIn55ZXXp9N90zbpVoEWmDAgkcQkR6g%2Fdl&X-Amz-Signature=191e20e064bc1eb46a3996a7b73ddf626f26156e132d5d7238a476554fdd949c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


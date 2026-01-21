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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFJ7LTR%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFwBRAqHrc24BOB2u1rjPOmzKi%2F6%2Bh7R96Q0JIkhcpLAiBxE6WHZpP%2Bbw0Bz8M%2Flj5uKATca2gp4SMhaTs71i97YCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4RSLZGSE96TKU5%2FKtwDMtIRmeAumIR%2BtJ9a9OEPm8KbxwWKs%2BUHVRVRtm3Y%2Byj3qdQANtv0H34a4GRvGiyopsjRKt%2FWXyqKQHH77UBEKDbmB9fkzPl31qPnQV9sjvZEJIZXM3zIvcuJEPiu7I6Qc6nfkURj2jLGGl29hUT96uxtsVP21K2gUz26vbyOIPW8KAKh9aAI8Z7KsybrnYknLAWuQuE9SNP1aGKyxh2tEOlYm1zxTDFQJ%2BMdDbPz2c0bJQPVqLlLFEpgm527Wx3h6xvmWWd5a0f5IKbBX6aw54IHYmQA3oNaexO3BiVRAX5Xo2H054o9xjxCdZGi%2BzDV%2BUCIFiDGqDGHY7Bp6Sf0bpHZY2RBSolydvE3%2FePgHMXJBnk2qcpq7Iqz03Ocxk5xRQA2e%2FR%2BEcgVNWW9msBtGU2t1xrVhSRfObyTqZGeJHYzkMNUnXnEedAiTUsHCkVH7pVmPaAVRmLrm%2F3hTonwN7GzP0mqI%2FOiBoLbFU5UQ%2BNoM2gTBagaTbD5vVU49EF%2FgR%2BGMMLdt94mdee1ZDoyyGvuwvpNn9Zl1Fy44Tdv7yp2aTED73ATNHH0LpOTzWTMzj5gTk6RjAKCGMANQay68d%2FsSFTBjUXs5xNw5w%2FpxLwo9W4bEZ1Rz6%2FfYAkw8LXAywY6pgG3B3Zvhkzbrwy2dz1khGpSJfBNgcJUOljmek3Na6NOL3Q4KDJ0FiPWkZBnLpCk0wptmibqhKxKxISyR%2BHntTt4VMTFaquTEVllhd1VuwptqjEoiAEH8Xwoe25HEGrANC0lJ3ldFTF9ztBO3H21SuKuui1oaG6CqAv23foWSEknRw0ld%2FbEg9MLHaAPXBTuG8PruzoWnM%2FBRQcTwleF7AriuXgtON28&X-Amz-Signature=b0b13b7095f30bbfac82ae449abb4c397f5dc41ecfd6810482e236a57a673d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFJ7LTR%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFwBRAqHrc24BOB2u1rjPOmzKi%2F6%2Bh7R96Q0JIkhcpLAiBxE6WHZpP%2Bbw0Bz8M%2Flj5uKATca2gp4SMhaTs71i97YCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4RSLZGSE96TKU5%2FKtwDMtIRmeAumIR%2BtJ9a9OEPm8KbxwWKs%2BUHVRVRtm3Y%2Byj3qdQANtv0H34a4GRvGiyopsjRKt%2FWXyqKQHH77UBEKDbmB9fkzPl31qPnQV9sjvZEJIZXM3zIvcuJEPiu7I6Qc6nfkURj2jLGGl29hUT96uxtsVP21K2gUz26vbyOIPW8KAKh9aAI8Z7KsybrnYknLAWuQuE9SNP1aGKyxh2tEOlYm1zxTDFQJ%2BMdDbPz2c0bJQPVqLlLFEpgm527Wx3h6xvmWWd5a0f5IKbBX6aw54IHYmQA3oNaexO3BiVRAX5Xo2H054o9xjxCdZGi%2BzDV%2BUCIFiDGqDGHY7Bp6Sf0bpHZY2RBSolydvE3%2FePgHMXJBnk2qcpq7Iqz03Ocxk5xRQA2e%2FR%2BEcgVNWW9msBtGU2t1xrVhSRfObyTqZGeJHYzkMNUnXnEedAiTUsHCkVH7pVmPaAVRmLrm%2F3hTonwN7GzP0mqI%2FOiBoLbFU5UQ%2BNoM2gTBagaTbD5vVU49EF%2FgR%2BGMMLdt94mdee1ZDoyyGvuwvpNn9Zl1Fy44Tdv7yp2aTED73ATNHH0LpOTzWTMzj5gTk6RjAKCGMANQay68d%2FsSFTBjUXs5xNw5w%2FpxLwo9W4bEZ1Rz6%2FfYAkw8LXAywY6pgG3B3Zvhkzbrwy2dz1khGpSJfBNgcJUOljmek3Na6NOL3Q4KDJ0FiPWkZBnLpCk0wptmibqhKxKxISyR%2BHntTt4VMTFaquTEVllhd1VuwptqjEoiAEH8Xwoe25HEGrANC0lJ3ldFTF9ztBO3H21SuKuui1oaG6CqAv23foWSEknRw0ld%2FbEg9MLHaAPXBTuG8PruzoWnM%2FBRQcTwleF7AriuXgtON28&X-Amz-Signature=db93b497a10799ca44033bac61b9e7c7f770efe2e3f555962db1cdeceba39886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFJ7LTR%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFwBRAqHrc24BOB2u1rjPOmzKi%2F6%2Bh7R96Q0JIkhcpLAiBxE6WHZpP%2Bbw0Bz8M%2Flj5uKATca2gp4SMhaTs71i97YCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4RSLZGSE96TKU5%2FKtwDMtIRmeAumIR%2BtJ9a9OEPm8KbxwWKs%2BUHVRVRtm3Y%2Byj3qdQANtv0H34a4GRvGiyopsjRKt%2FWXyqKQHH77UBEKDbmB9fkzPl31qPnQV9sjvZEJIZXM3zIvcuJEPiu7I6Qc6nfkURj2jLGGl29hUT96uxtsVP21K2gUz26vbyOIPW8KAKh9aAI8Z7KsybrnYknLAWuQuE9SNP1aGKyxh2tEOlYm1zxTDFQJ%2BMdDbPz2c0bJQPVqLlLFEpgm527Wx3h6xvmWWd5a0f5IKbBX6aw54IHYmQA3oNaexO3BiVRAX5Xo2H054o9xjxCdZGi%2BzDV%2BUCIFiDGqDGHY7Bp6Sf0bpHZY2RBSolydvE3%2FePgHMXJBnk2qcpq7Iqz03Ocxk5xRQA2e%2FR%2BEcgVNWW9msBtGU2t1xrVhSRfObyTqZGeJHYzkMNUnXnEedAiTUsHCkVH7pVmPaAVRmLrm%2F3hTonwN7GzP0mqI%2FOiBoLbFU5UQ%2BNoM2gTBagaTbD5vVU49EF%2FgR%2BGMMLdt94mdee1ZDoyyGvuwvpNn9Zl1Fy44Tdv7yp2aTED73ATNHH0LpOTzWTMzj5gTk6RjAKCGMANQay68d%2FsSFTBjUXs5xNw5w%2FpxLwo9W4bEZ1Rz6%2FfYAkw8LXAywY6pgG3B3Zvhkzbrwy2dz1khGpSJfBNgcJUOljmek3Na6NOL3Q4KDJ0FiPWkZBnLpCk0wptmibqhKxKxISyR%2BHntTt4VMTFaquTEVllhd1VuwptqjEoiAEH8Xwoe25HEGrANC0lJ3ldFTF9ztBO3H21SuKuui1oaG6CqAv23foWSEknRw0ld%2FbEg9MLHaAPXBTuG8PruzoWnM%2FBRQcTwleF7AriuXgtON28&X-Amz-Signature=958ee7d9dce378779bede3a28d5415fb45ae9da738f3276c12efa741fcd0dbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFJ7LTR%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFwBRAqHrc24BOB2u1rjPOmzKi%2F6%2Bh7R96Q0JIkhcpLAiBxE6WHZpP%2Bbw0Bz8M%2Flj5uKATca2gp4SMhaTs71i97YCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4RSLZGSE96TKU5%2FKtwDMtIRmeAumIR%2BtJ9a9OEPm8KbxwWKs%2BUHVRVRtm3Y%2Byj3qdQANtv0H34a4GRvGiyopsjRKt%2FWXyqKQHH77UBEKDbmB9fkzPl31qPnQV9sjvZEJIZXM3zIvcuJEPiu7I6Qc6nfkURj2jLGGl29hUT96uxtsVP21K2gUz26vbyOIPW8KAKh9aAI8Z7KsybrnYknLAWuQuE9SNP1aGKyxh2tEOlYm1zxTDFQJ%2BMdDbPz2c0bJQPVqLlLFEpgm527Wx3h6xvmWWd5a0f5IKbBX6aw54IHYmQA3oNaexO3BiVRAX5Xo2H054o9xjxCdZGi%2BzDV%2BUCIFiDGqDGHY7Bp6Sf0bpHZY2RBSolydvE3%2FePgHMXJBnk2qcpq7Iqz03Ocxk5xRQA2e%2FR%2BEcgVNWW9msBtGU2t1xrVhSRfObyTqZGeJHYzkMNUnXnEedAiTUsHCkVH7pVmPaAVRmLrm%2F3hTonwN7GzP0mqI%2FOiBoLbFU5UQ%2BNoM2gTBagaTbD5vVU49EF%2FgR%2BGMMLdt94mdee1ZDoyyGvuwvpNn9Zl1Fy44Tdv7yp2aTED73ATNHH0LpOTzWTMzj5gTk6RjAKCGMANQay68d%2FsSFTBjUXs5xNw5w%2FpxLwo9W4bEZ1Rz6%2FfYAkw8LXAywY6pgG3B3Zvhkzbrwy2dz1khGpSJfBNgcJUOljmek3Na6NOL3Q4KDJ0FiPWkZBnLpCk0wptmibqhKxKxISyR%2BHntTt4VMTFaquTEVllhd1VuwptqjEoiAEH8Xwoe25HEGrANC0lJ3ldFTF9ztBO3H21SuKuui1oaG6CqAv23foWSEknRw0ld%2FbEg9MLHaAPXBTuG8PruzoWnM%2FBRQcTwleF7AriuXgtON28&X-Amz-Signature=337a77773427152cbf137d9b859cfbd3b1fc46e003af9fa628000f1b4f38f7f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


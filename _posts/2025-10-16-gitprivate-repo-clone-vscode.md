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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2ID3SP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCFoSrPc395LmJ6bH9L2dc9MhUvyIzknlLZbxLaAgy2%2BQIhAJGoNkO5QvuImsgD%2FoRAtHvYrLu0suSTGtQGqjjj3Af3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsxIY%2FSqtK7GKrFLEq3ANMj7y6S%2BtvZxchMhO8rJk049MEGIuqziD7t20l%2FDnra79S8lWDwPubzga0F9pNkQzo4wciVbqSPaQEncScUqagNI99RAOf6i5hVuVkzHBJBPsW2x8N1Mtb%2B4hC%2BruNUqlr673aZsAh%2FBsYpQrZophinFoq%2F7hOo3AV3uSOrewTY%2FUpF4zlR2cYsVHhEwtXT7kEUJlZsE8Dpeb6KvZ1ydjVa2J7Y6XSvSmOh%2FUTDh1%2F2yWpLk3oonpfyK%2F7Lni8R46mAZsecdeDosDl5%2B%2Fkhdx7FNjtoyMciH16Q%2FswqtkFBpGW6jjxjvfUaoX1C9a7qllRPnwmHzmUiG4s6Tvtd4pzP3LXVe5EpNtNuyeWFwSDqhjIFjEJaNTsLWZ0hd9Z0Zl2CBWSk%2FYtTHOYYlSUPZq%2FMhP9z7oC1ZIPk5IXZma1n4Ljw3eGNo2QkovWHwqrO3XM%2BQf3ds%2Bp3QvHxR9B22lCQOzFoBIZkMoyZLoLiYb0YsvAdtXpn2ZxLjYRsaRlUvcxEMJ8hjqxvhJiDgX%2BgteeMYF7MHBh%2FwieAR3hOi4rGeThfOt0A84zCURhpqhS9RI7xQuXkNlTa9VF3MLI010OVGB0f67eJzFAXP%2Fg%2B0%2Ft9Tiodpwt%2BdYgPysVNTD1laTKBjqkAVGaOSt5WNuurNDjvm7OKNfOXTQ%2FmLyttca2g9%2BWwz%2FyX1OX3Bhe6tJ3TKKE3ey20tQh8R4DRjdohcNnwxY114PW1rI4fIPStec6yUV1vNJ17WjESnGyONWBA6Pk6T9XNMDP44Iv6SBVn4mBlI1OgGjhh7x3ia74DpMlYEySQVEe9KlpHR6P3Qv55uQsn3%2FGjLnJkra7fYb3GXpMh1m%2FtrFCdJ9f&X-Amz-Signature=e9c9950b19f78a1366061e7241bc735540eb9344486525a361eecce85235dadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2ID3SP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCFoSrPc395LmJ6bH9L2dc9MhUvyIzknlLZbxLaAgy2%2BQIhAJGoNkO5QvuImsgD%2FoRAtHvYrLu0suSTGtQGqjjj3Af3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsxIY%2FSqtK7GKrFLEq3ANMj7y6S%2BtvZxchMhO8rJk049MEGIuqziD7t20l%2FDnra79S8lWDwPubzga0F9pNkQzo4wciVbqSPaQEncScUqagNI99RAOf6i5hVuVkzHBJBPsW2x8N1Mtb%2B4hC%2BruNUqlr673aZsAh%2FBsYpQrZophinFoq%2F7hOo3AV3uSOrewTY%2FUpF4zlR2cYsVHhEwtXT7kEUJlZsE8Dpeb6KvZ1ydjVa2J7Y6XSvSmOh%2FUTDh1%2F2yWpLk3oonpfyK%2F7Lni8R46mAZsecdeDosDl5%2B%2Fkhdx7FNjtoyMciH16Q%2FswqtkFBpGW6jjxjvfUaoX1C9a7qllRPnwmHzmUiG4s6Tvtd4pzP3LXVe5EpNtNuyeWFwSDqhjIFjEJaNTsLWZ0hd9Z0Zl2CBWSk%2FYtTHOYYlSUPZq%2FMhP9z7oC1ZIPk5IXZma1n4Ljw3eGNo2QkovWHwqrO3XM%2BQf3ds%2Bp3QvHxR9B22lCQOzFoBIZkMoyZLoLiYb0YsvAdtXpn2ZxLjYRsaRlUvcxEMJ8hjqxvhJiDgX%2BgteeMYF7MHBh%2FwieAR3hOi4rGeThfOt0A84zCURhpqhS9RI7xQuXkNlTa9VF3MLI010OVGB0f67eJzFAXP%2Fg%2B0%2Ft9Tiodpwt%2BdYgPysVNTD1laTKBjqkAVGaOSt5WNuurNDjvm7OKNfOXTQ%2FmLyttca2g9%2BWwz%2FyX1OX3Bhe6tJ3TKKE3ey20tQh8R4DRjdohcNnwxY114PW1rI4fIPStec6yUV1vNJ17WjESnGyONWBA6Pk6T9XNMDP44Iv6SBVn4mBlI1OgGjhh7x3ia74DpMlYEySQVEe9KlpHR6P3Qv55uQsn3%2FGjLnJkra7fYb3GXpMh1m%2FtrFCdJ9f&X-Amz-Signature=2af6e497c7e5bd0c3f0124e04db6c8b6bb84caf0cf545d295bb2de0c3ada020a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2ID3SP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCFoSrPc395LmJ6bH9L2dc9MhUvyIzknlLZbxLaAgy2%2BQIhAJGoNkO5QvuImsgD%2FoRAtHvYrLu0suSTGtQGqjjj3Af3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsxIY%2FSqtK7GKrFLEq3ANMj7y6S%2BtvZxchMhO8rJk049MEGIuqziD7t20l%2FDnra79S8lWDwPubzga0F9pNkQzo4wciVbqSPaQEncScUqagNI99RAOf6i5hVuVkzHBJBPsW2x8N1Mtb%2B4hC%2BruNUqlr673aZsAh%2FBsYpQrZophinFoq%2F7hOo3AV3uSOrewTY%2FUpF4zlR2cYsVHhEwtXT7kEUJlZsE8Dpeb6KvZ1ydjVa2J7Y6XSvSmOh%2FUTDh1%2F2yWpLk3oonpfyK%2F7Lni8R46mAZsecdeDosDl5%2B%2Fkhdx7FNjtoyMciH16Q%2FswqtkFBpGW6jjxjvfUaoX1C9a7qllRPnwmHzmUiG4s6Tvtd4pzP3LXVe5EpNtNuyeWFwSDqhjIFjEJaNTsLWZ0hd9Z0Zl2CBWSk%2FYtTHOYYlSUPZq%2FMhP9z7oC1ZIPk5IXZma1n4Ljw3eGNo2QkovWHwqrO3XM%2BQf3ds%2Bp3QvHxR9B22lCQOzFoBIZkMoyZLoLiYb0YsvAdtXpn2ZxLjYRsaRlUvcxEMJ8hjqxvhJiDgX%2BgteeMYF7MHBh%2FwieAR3hOi4rGeThfOt0A84zCURhpqhS9RI7xQuXkNlTa9VF3MLI010OVGB0f67eJzFAXP%2Fg%2B0%2Ft9Tiodpwt%2BdYgPysVNTD1laTKBjqkAVGaOSt5WNuurNDjvm7OKNfOXTQ%2FmLyttca2g9%2BWwz%2FyX1OX3Bhe6tJ3TKKE3ey20tQh8R4DRjdohcNnwxY114PW1rI4fIPStec6yUV1vNJ17WjESnGyONWBA6Pk6T9XNMDP44Iv6SBVn4mBlI1OgGjhh7x3ia74DpMlYEySQVEe9KlpHR6P3Qv55uQsn3%2FGjLnJkra7fYb3GXpMh1m%2FtrFCdJ9f&X-Amz-Signature=32ca4940c927b42e06530f8c4c377b87e6f65d283f6c0e536461c038a4ebf886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2ID3SP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCFoSrPc395LmJ6bH9L2dc9MhUvyIzknlLZbxLaAgy2%2BQIhAJGoNkO5QvuImsgD%2FoRAtHvYrLu0suSTGtQGqjjj3Af3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsxIY%2FSqtK7GKrFLEq3ANMj7y6S%2BtvZxchMhO8rJk049MEGIuqziD7t20l%2FDnra79S8lWDwPubzga0F9pNkQzo4wciVbqSPaQEncScUqagNI99RAOf6i5hVuVkzHBJBPsW2x8N1Mtb%2B4hC%2BruNUqlr673aZsAh%2FBsYpQrZophinFoq%2F7hOo3AV3uSOrewTY%2FUpF4zlR2cYsVHhEwtXT7kEUJlZsE8Dpeb6KvZ1ydjVa2J7Y6XSvSmOh%2FUTDh1%2F2yWpLk3oonpfyK%2F7Lni8R46mAZsecdeDosDl5%2B%2Fkhdx7FNjtoyMciH16Q%2FswqtkFBpGW6jjxjvfUaoX1C9a7qllRPnwmHzmUiG4s6Tvtd4pzP3LXVe5EpNtNuyeWFwSDqhjIFjEJaNTsLWZ0hd9Z0Zl2CBWSk%2FYtTHOYYlSUPZq%2FMhP9z7oC1ZIPk5IXZma1n4Ljw3eGNo2QkovWHwqrO3XM%2BQf3ds%2Bp3QvHxR9B22lCQOzFoBIZkMoyZLoLiYb0YsvAdtXpn2ZxLjYRsaRlUvcxEMJ8hjqxvhJiDgX%2BgteeMYF7MHBh%2FwieAR3hOi4rGeThfOt0A84zCURhpqhS9RI7xQuXkNlTa9VF3MLI010OVGB0f67eJzFAXP%2Fg%2B0%2Ft9Tiodpwt%2BdYgPysVNTD1laTKBjqkAVGaOSt5WNuurNDjvm7OKNfOXTQ%2FmLyttca2g9%2BWwz%2FyX1OX3Bhe6tJ3TKKE3ey20tQh8R4DRjdohcNnwxY114PW1rI4fIPStec6yUV1vNJ17WjESnGyONWBA6Pk6T9XNMDP44Iv6SBVn4mBlI1OgGjhh7x3ia74DpMlYEySQVEe9KlpHR6P3Qv55uQsn3%2FGjLnJkra7fYb3GXpMh1m%2FtrFCdJ9f&X-Amz-Signature=ce38d7e15cf04ff582fa97d1d3bd7942cb91608b58caee965639e56e1ecf489d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


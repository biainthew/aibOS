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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SNGMYZ%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC7JCGM1Qxbz0LIICxeuuEUquV2wKLgLqSZTq98YgzO1AIhAOPOq%2FmGrqCgXVgSLf6nSReAIkW9DVgp0kiL9ArkRCv0Kv8DCB8QABoMNjM3NDIzMTgzODA1IgwMFKMR7P%2BUHECproUq3APujojzbTam1h7RAD7fxuFmri8Cya%2F0BC1vcmi5eztRuFBXdRvEaKbsYL6bPBkzzOamZENSNGjZnS0Ft5wC4tTUkX3VP4IiA7x5c1n890Um%2BH%2BmBBfz%2FfzCyd6XUH72WUKa9Oavmi7FeJHxs9TdQ%2BxboRdl7HxlNlrCtLpTj9BRvycfbmfS7dTbZLu6KGOsrp4Mu0y%2FUM6vlNaCCYo3bgEc%2FmPX5oMedY4ieXYngur9oDckCT7khSUPl5LrnXBffHSxPzRk6oS50bMost%2BALzAa%2FcbS9I6plBQqcFcLivjC3vqAskRx%2BuyI0f5r4a%2FUhhnEV203EjoJjNprAeis%2F%2B6q85isqmRZFCfoxVsfTe6vpZMxIzZMkq2MppCejfg%2FAc4WhkH3fK0FthiYgi9hIyJ%2FRM4ZSbYpyVBStMNkBS%2BPyqD1Tn%2FA%2Fr0rkajb93XHUMxJI%2FNIZwubgfcIhS85pf3N5wH5xitIQifnUGfiSoGpbZKzvaEfdFZTKqoemgNX4TfRoSYcsXqL2ITyk6OxzSGgWXVDKx%2BW7qHZWYNxJFKw2T2CSKPF6h%2FJzT98wYSahdAGNqCriysocCZ8tmSEzzbdIcpHtWO4M%2B%2F8hEg81UPImrYFTuP9WDc8LFafJzCCk%2BbKBjqkASBN6HTv0ivkk%2BBZ628i9IbXiby3fq%2FueGWKuIKIpFmTiLe04ybiAT3a5ixhEn7LnfMjrSUS%2FQFUd6sl1oDEiaa4JrDoVzlHoIpOPVZcMw6aIfb9LzgHUEmT57KdI50s5YAb22OGxRvQwyC5cPb%2Bh6vv3uM6KUMvSxbwT0qhBxlPRLaSHqPN0p%2Fb22IQJMa1sdIz4Jq7hRfPd6o6ZMYhBmxeRL2L&X-Amz-Signature=58ec718d36744d7d61e564bde836adb7f2e33c5e4f05d56eb07434b88934ccf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SNGMYZ%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC7JCGM1Qxbz0LIICxeuuEUquV2wKLgLqSZTq98YgzO1AIhAOPOq%2FmGrqCgXVgSLf6nSReAIkW9DVgp0kiL9ArkRCv0Kv8DCB8QABoMNjM3NDIzMTgzODA1IgwMFKMR7P%2BUHECproUq3APujojzbTam1h7RAD7fxuFmri8Cya%2F0BC1vcmi5eztRuFBXdRvEaKbsYL6bPBkzzOamZENSNGjZnS0Ft5wC4tTUkX3VP4IiA7x5c1n890Um%2BH%2BmBBfz%2FfzCyd6XUH72WUKa9Oavmi7FeJHxs9TdQ%2BxboRdl7HxlNlrCtLpTj9BRvycfbmfS7dTbZLu6KGOsrp4Mu0y%2FUM6vlNaCCYo3bgEc%2FmPX5oMedY4ieXYngur9oDckCT7khSUPl5LrnXBffHSxPzRk6oS50bMost%2BALzAa%2FcbS9I6plBQqcFcLivjC3vqAskRx%2BuyI0f5r4a%2FUhhnEV203EjoJjNprAeis%2F%2B6q85isqmRZFCfoxVsfTe6vpZMxIzZMkq2MppCejfg%2FAc4WhkH3fK0FthiYgi9hIyJ%2FRM4ZSbYpyVBStMNkBS%2BPyqD1Tn%2FA%2Fr0rkajb93XHUMxJI%2FNIZwubgfcIhS85pf3N5wH5xitIQifnUGfiSoGpbZKzvaEfdFZTKqoemgNX4TfRoSYcsXqL2ITyk6OxzSGgWXVDKx%2BW7qHZWYNxJFKw2T2CSKPF6h%2FJzT98wYSahdAGNqCriysocCZ8tmSEzzbdIcpHtWO4M%2B%2F8hEg81UPImrYFTuP9WDc8LFafJzCCk%2BbKBjqkASBN6HTv0ivkk%2BBZ628i9IbXiby3fq%2FueGWKuIKIpFmTiLe04ybiAT3a5ixhEn7LnfMjrSUS%2FQFUd6sl1oDEiaa4JrDoVzlHoIpOPVZcMw6aIfb9LzgHUEmT57KdI50s5YAb22OGxRvQwyC5cPb%2Bh6vv3uM6KUMvSxbwT0qhBxlPRLaSHqPN0p%2Fb22IQJMa1sdIz4Jq7hRfPd6o6ZMYhBmxeRL2L&X-Amz-Signature=6ea40b4ebc21a28f15fed273b2767c328e9d35ce72a3a6ff3490a582d4b77f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SNGMYZ%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC7JCGM1Qxbz0LIICxeuuEUquV2wKLgLqSZTq98YgzO1AIhAOPOq%2FmGrqCgXVgSLf6nSReAIkW9DVgp0kiL9ArkRCv0Kv8DCB8QABoMNjM3NDIzMTgzODA1IgwMFKMR7P%2BUHECproUq3APujojzbTam1h7RAD7fxuFmri8Cya%2F0BC1vcmi5eztRuFBXdRvEaKbsYL6bPBkzzOamZENSNGjZnS0Ft5wC4tTUkX3VP4IiA7x5c1n890Um%2BH%2BmBBfz%2FfzCyd6XUH72WUKa9Oavmi7FeJHxs9TdQ%2BxboRdl7HxlNlrCtLpTj9BRvycfbmfS7dTbZLu6KGOsrp4Mu0y%2FUM6vlNaCCYo3bgEc%2FmPX5oMedY4ieXYngur9oDckCT7khSUPl5LrnXBffHSxPzRk6oS50bMost%2BALzAa%2FcbS9I6plBQqcFcLivjC3vqAskRx%2BuyI0f5r4a%2FUhhnEV203EjoJjNprAeis%2F%2B6q85isqmRZFCfoxVsfTe6vpZMxIzZMkq2MppCejfg%2FAc4WhkH3fK0FthiYgi9hIyJ%2FRM4ZSbYpyVBStMNkBS%2BPyqD1Tn%2FA%2Fr0rkajb93XHUMxJI%2FNIZwubgfcIhS85pf3N5wH5xitIQifnUGfiSoGpbZKzvaEfdFZTKqoemgNX4TfRoSYcsXqL2ITyk6OxzSGgWXVDKx%2BW7qHZWYNxJFKw2T2CSKPF6h%2FJzT98wYSahdAGNqCriysocCZ8tmSEzzbdIcpHtWO4M%2B%2F8hEg81UPImrYFTuP9WDc8LFafJzCCk%2BbKBjqkASBN6HTv0ivkk%2BBZ628i9IbXiby3fq%2FueGWKuIKIpFmTiLe04ybiAT3a5ixhEn7LnfMjrSUS%2FQFUd6sl1oDEiaa4JrDoVzlHoIpOPVZcMw6aIfb9LzgHUEmT57KdI50s5YAb22OGxRvQwyC5cPb%2Bh6vv3uM6KUMvSxbwT0qhBxlPRLaSHqPN0p%2Fb22IQJMa1sdIz4Jq7hRfPd6o6ZMYhBmxeRL2L&X-Amz-Signature=7f7fba0e82e627ab50912514ade3a2bcef120b3a358a444644a16bd16a6f9a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SNGMYZ%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC7JCGM1Qxbz0LIICxeuuEUquV2wKLgLqSZTq98YgzO1AIhAOPOq%2FmGrqCgXVgSLf6nSReAIkW9DVgp0kiL9ArkRCv0Kv8DCB8QABoMNjM3NDIzMTgzODA1IgwMFKMR7P%2BUHECproUq3APujojzbTam1h7RAD7fxuFmri8Cya%2F0BC1vcmi5eztRuFBXdRvEaKbsYL6bPBkzzOamZENSNGjZnS0Ft5wC4tTUkX3VP4IiA7x5c1n890Um%2BH%2BmBBfz%2FfzCyd6XUH72WUKa9Oavmi7FeJHxs9TdQ%2BxboRdl7HxlNlrCtLpTj9BRvycfbmfS7dTbZLu6KGOsrp4Mu0y%2FUM6vlNaCCYo3bgEc%2FmPX5oMedY4ieXYngur9oDckCT7khSUPl5LrnXBffHSxPzRk6oS50bMost%2BALzAa%2FcbS9I6plBQqcFcLivjC3vqAskRx%2BuyI0f5r4a%2FUhhnEV203EjoJjNprAeis%2F%2B6q85isqmRZFCfoxVsfTe6vpZMxIzZMkq2MppCejfg%2FAc4WhkH3fK0FthiYgi9hIyJ%2FRM4ZSbYpyVBStMNkBS%2BPyqD1Tn%2FA%2Fr0rkajb93XHUMxJI%2FNIZwubgfcIhS85pf3N5wH5xitIQifnUGfiSoGpbZKzvaEfdFZTKqoemgNX4TfRoSYcsXqL2ITyk6OxzSGgWXVDKx%2BW7qHZWYNxJFKw2T2CSKPF6h%2FJzT98wYSahdAGNqCriysocCZ8tmSEzzbdIcpHtWO4M%2B%2F8hEg81UPImrYFTuP9WDc8LFafJzCCk%2BbKBjqkASBN6HTv0ivkk%2BBZ628i9IbXiby3fq%2FueGWKuIKIpFmTiLe04ybiAT3a5ixhEn7LnfMjrSUS%2FQFUd6sl1oDEiaa4JrDoVzlHoIpOPVZcMw6aIfb9LzgHUEmT57KdI50s5YAb22OGxRvQwyC5cPb%2Bh6vv3uM6KUMvSxbwT0qhBxlPRLaSHqPN0p%2Fb22IQJMa1sdIz4Jq7hRfPd6o6ZMYhBmxeRL2L&X-Amz-Signature=70b261c8172343d6cc03e06facb3e749ec47b91de4e11e439f70378c400b40d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


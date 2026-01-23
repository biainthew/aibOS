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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYLRGNB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICMwPQcuFgXfQXiXx%2Fi9aHGS7JIFrSwjxFVUUQAO1%2B6SAiB4WT0Kg9VkJCc%2BnAYBr74D0IoZ8L5PgRZXW5UIyoNJciqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSkugoxJp8tx79Y9KtwDRJ0q%2F71tI9tXVVNZAnlkIabXEiqpRN1dZnPAlmxigJuMvRKf44trSA8j%2Bed1q0LWU1a1ZDEa0FtyJyQ0tNm1pCRpI1gDU5hsDIwT0g3bg3u39vUaDBhGxxg4GGS5SIYUzluvfJ6HYTfLe%2Bp%2B%2BT7XwredHftCvWAalHgJhP%2BjPT9NUKM9sAEJrOI9%2BYfvuuc4uaHk5ZqvSXGNM5kibhe4LhUa6%2Byy8LTz638%2B3KwbqR34%2BLjuRs2LCi5CHmd7PC6az8IuIRKh3eB4VjGls1eGltvqHr5WHfAsijbsQTwu18WmeW1%2FRsvqXEYRGwp0fmAOhbaNOdlV9hg%2B4QDPteofakaqqSo0PlnrTG2%2Bn6%2B8LdgwJJ2jBHNxK80xURCjmHHBu8gR9kyDhiR7vKE%2F85C%2F0YoDgu1BGN%2BWCX%2Fj0tdmq2t0hDR44KQy01i9fc6YgitXQyjUft2EUuZqxDZyMHYhrkx0YZ8srVR81v%2BcI1d3c%2F9ogYk%2F52VqpflK0rJOvcToKj7%2BBotM5YrTjDkK4h58DllM2w7tCmgk8W8pJW0STtVeJxFW53QnzTT5KhjZkzWUwTnKYB2PNHS%2Fobsemxy2aOrLnd%2B9GVNI1LAN3U6i1XiqxvpdsT8ypun2MTww9Y%2FLywY6pgHPWjlanW2gvoOb9Vv7PPZ6ELlbSwCjtrYGvHpbSOOqDlQjq8EG5lh3KHYK0bPuEoYr7D2%2Fng2cB4QDw16DAzG2jWkL12wbN%2FmyM%2BgfIy%2FpbZnWbsiTYiO8Ad1fPzEYZvSkcNco6MprXd4C0B%2BQF4AaSwWg4AtWdJ3Y%2Bn0j%2FtElX%2BS02f3iskcoL5ssfZI9OB8PMvbZnUI6l2ZhhDj4x7gZdAetuUq4&X-Amz-Signature=f213d7ac9c5fba1f8a256fcce79cc24a4e9b206c08aff6016452d4da42bebff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYLRGNB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICMwPQcuFgXfQXiXx%2Fi9aHGS7JIFrSwjxFVUUQAO1%2B6SAiB4WT0Kg9VkJCc%2BnAYBr74D0IoZ8L5PgRZXW5UIyoNJciqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSkugoxJp8tx79Y9KtwDRJ0q%2F71tI9tXVVNZAnlkIabXEiqpRN1dZnPAlmxigJuMvRKf44trSA8j%2Bed1q0LWU1a1ZDEa0FtyJyQ0tNm1pCRpI1gDU5hsDIwT0g3bg3u39vUaDBhGxxg4GGS5SIYUzluvfJ6HYTfLe%2Bp%2B%2BT7XwredHftCvWAalHgJhP%2BjPT9NUKM9sAEJrOI9%2BYfvuuc4uaHk5ZqvSXGNM5kibhe4LhUa6%2Byy8LTz638%2B3KwbqR34%2BLjuRs2LCi5CHmd7PC6az8IuIRKh3eB4VjGls1eGltvqHr5WHfAsijbsQTwu18WmeW1%2FRsvqXEYRGwp0fmAOhbaNOdlV9hg%2B4QDPteofakaqqSo0PlnrTG2%2Bn6%2B8LdgwJJ2jBHNxK80xURCjmHHBu8gR9kyDhiR7vKE%2F85C%2F0YoDgu1BGN%2BWCX%2Fj0tdmq2t0hDR44KQy01i9fc6YgitXQyjUft2EUuZqxDZyMHYhrkx0YZ8srVR81v%2BcI1d3c%2F9ogYk%2F52VqpflK0rJOvcToKj7%2BBotM5YrTjDkK4h58DllM2w7tCmgk8W8pJW0STtVeJxFW53QnzTT5KhjZkzWUwTnKYB2PNHS%2Fobsemxy2aOrLnd%2B9GVNI1LAN3U6i1XiqxvpdsT8ypun2MTww9Y%2FLywY6pgHPWjlanW2gvoOb9Vv7PPZ6ELlbSwCjtrYGvHpbSOOqDlQjq8EG5lh3KHYK0bPuEoYr7D2%2Fng2cB4QDw16DAzG2jWkL12wbN%2FmyM%2BgfIy%2FpbZnWbsiTYiO8Ad1fPzEYZvSkcNco6MprXd4C0B%2BQF4AaSwWg4AtWdJ3Y%2Bn0j%2FtElX%2BS02f3iskcoL5ssfZI9OB8PMvbZnUI6l2ZhhDj4x7gZdAetuUq4&X-Amz-Signature=18cec5ac3ff44e8534eaba890dd2ac5a33d93c0f531b1b205465a2aed23c1063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYLRGNB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICMwPQcuFgXfQXiXx%2Fi9aHGS7JIFrSwjxFVUUQAO1%2B6SAiB4WT0Kg9VkJCc%2BnAYBr74D0IoZ8L5PgRZXW5UIyoNJciqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSkugoxJp8tx79Y9KtwDRJ0q%2F71tI9tXVVNZAnlkIabXEiqpRN1dZnPAlmxigJuMvRKf44trSA8j%2Bed1q0LWU1a1ZDEa0FtyJyQ0tNm1pCRpI1gDU5hsDIwT0g3bg3u39vUaDBhGxxg4GGS5SIYUzluvfJ6HYTfLe%2Bp%2B%2BT7XwredHftCvWAalHgJhP%2BjPT9NUKM9sAEJrOI9%2BYfvuuc4uaHk5ZqvSXGNM5kibhe4LhUa6%2Byy8LTz638%2B3KwbqR34%2BLjuRs2LCi5CHmd7PC6az8IuIRKh3eB4VjGls1eGltvqHr5WHfAsijbsQTwu18WmeW1%2FRsvqXEYRGwp0fmAOhbaNOdlV9hg%2B4QDPteofakaqqSo0PlnrTG2%2Bn6%2B8LdgwJJ2jBHNxK80xURCjmHHBu8gR9kyDhiR7vKE%2F85C%2F0YoDgu1BGN%2BWCX%2Fj0tdmq2t0hDR44KQy01i9fc6YgitXQyjUft2EUuZqxDZyMHYhrkx0YZ8srVR81v%2BcI1d3c%2F9ogYk%2F52VqpflK0rJOvcToKj7%2BBotM5YrTjDkK4h58DllM2w7tCmgk8W8pJW0STtVeJxFW53QnzTT5KhjZkzWUwTnKYB2PNHS%2Fobsemxy2aOrLnd%2B9GVNI1LAN3U6i1XiqxvpdsT8ypun2MTww9Y%2FLywY6pgHPWjlanW2gvoOb9Vv7PPZ6ELlbSwCjtrYGvHpbSOOqDlQjq8EG5lh3KHYK0bPuEoYr7D2%2Fng2cB4QDw16DAzG2jWkL12wbN%2FmyM%2BgfIy%2FpbZnWbsiTYiO8Ad1fPzEYZvSkcNco6MprXd4C0B%2BQF4AaSwWg4AtWdJ3Y%2Bn0j%2FtElX%2BS02f3iskcoL5ssfZI9OB8PMvbZnUI6l2ZhhDj4x7gZdAetuUq4&X-Amz-Signature=3930ef77b8f5464a43448aca6109770fbd3d55847c7ba0329e1aff783d1ba942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYLRGNB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICMwPQcuFgXfQXiXx%2Fi9aHGS7JIFrSwjxFVUUQAO1%2B6SAiB4WT0Kg9VkJCc%2BnAYBr74D0IoZ8L5PgRZXW5UIyoNJciqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSkugoxJp8tx79Y9KtwDRJ0q%2F71tI9tXVVNZAnlkIabXEiqpRN1dZnPAlmxigJuMvRKf44trSA8j%2Bed1q0LWU1a1ZDEa0FtyJyQ0tNm1pCRpI1gDU5hsDIwT0g3bg3u39vUaDBhGxxg4GGS5SIYUzluvfJ6HYTfLe%2Bp%2B%2BT7XwredHftCvWAalHgJhP%2BjPT9NUKM9sAEJrOI9%2BYfvuuc4uaHk5ZqvSXGNM5kibhe4LhUa6%2Byy8LTz638%2B3KwbqR34%2BLjuRs2LCi5CHmd7PC6az8IuIRKh3eB4VjGls1eGltvqHr5WHfAsijbsQTwu18WmeW1%2FRsvqXEYRGwp0fmAOhbaNOdlV9hg%2B4QDPteofakaqqSo0PlnrTG2%2Bn6%2B8LdgwJJ2jBHNxK80xURCjmHHBu8gR9kyDhiR7vKE%2F85C%2F0YoDgu1BGN%2BWCX%2Fj0tdmq2t0hDR44KQy01i9fc6YgitXQyjUft2EUuZqxDZyMHYhrkx0YZ8srVR81v%2BcI1d3c%2F9ogYk%2F52VqpflK0rJOvcToKj7%2BBotM5YrTjDkK4h58DllM2w7tCmgk8W8pJW0STtVeJxFW53QnzTT5KhjZkzWUwTnKYB2PNHS%2Fobsemxy2aOrLnd%2B9GVNI1LAN3U6i1XiqxvpdsT8ypun2MTww9Y%2FLywY6pgHPWjlanW2gvoOb9Vv7PPZ6ELlbSwCjtrYGvHpbSOOqDlQjq8EG5lh3KHYK0bPuEoYr7D2%2Fng2cB4QDw16DAzG2jWkL12wbN%2FmyM%2BgfIy%2FpbZnWbsiTYiO8Ad1fPzEYZvSkcNco6MprXd4C0B%2BQF4AaSwWg4AtWdJ3Y%2Bn0j%2FtElX%2BS02f3iskcoL5ssfZI9OB8PMvbZnUI6l2ZhhDj4x7gZdAetuUq4&X-Amz-Signature=7b2be53d7c5d0e21d60073442e99a14f95184124e91492f5ff0711699825371b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


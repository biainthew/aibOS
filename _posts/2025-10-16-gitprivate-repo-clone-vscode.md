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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HM4SDWH%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCDzA4SAHVACBXuDgVsGu6yqVT%2FfH67koaH9N2hx7emOwIhAMVwgJbM9du9ZbIL10WuaMR3ZksdmbkrfoEdD95qdmpQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8wTeLyUd32kGvThYq3AOXZK9gHTuLU4HIulcF3T%2BOirDQAkJwBiEKWouE%2Fc9Y7K6lQLl2Jtuch%2FX5mrgKZG2rb5DoJ9olAk9wancJzAsPhwg%2Bm3u8WEwYg4KOKZ5ZZp%2FJbuuyfzUPa3eChT6KO2jnt90EcNx7UxfPv%2BfU4rdSU8%2Bze6J1%2Bsk7qPF%2BlOBvcOMgn%2FBA%2BWub3NRAHdC6tm75GbPvrp%2B7b3MSvOOGZ4%2Bk1Da0YczkrtcfsU1Q8RSTeukcwQsKqN0xp2nUlj4UjabWhGho5Ax0L2oMFrz5nqPq9R9ySVc2%2BdKG9fuCzJu8i9nEjTLZPG1%2F4idK6s2jsxIVJAXnFzgTWF91JMN9mjpdkx1R7wnxr55h3F%2Fk6Ahlco5sCcqUOTqUNqacLkK11M4k%2BeNXWddKD%2FoLjvWnSgrGEhJgOmFsfz9NU%2BGkr6ZzPZ%2BCTf%2BcbS%2BTkMJLkKKfmYpWRP4GDLHZdwoB4Vc7N2lCXeXTPBDLCZJM8HqcCM92dYIOiwsETJSgxA4rbznmbT%2BlAt17VCcfJzI7EsuxnRr3lWTAVEzdJegQeXPFGLze71UA48bzfKQb4ROxNFhe0rLZnOZOL6No%2FWvbA1jnBoaRYUDg50q1pSLhzcrggMdqeL%2BdsXcpRj1kG3yDKzD0laTKBjqkAQ9i0QLrJ2Liv3K%2BIEwUUDAqzz%2F1Dxa7lGOlyiGfm7tqemJ%2FgDXluOSoBiXZp5aulBguvu6Xa6bvjo9CozI5wFK6Okiu5s7Y1yIdNkYzFoXzDcsRjUz5bs8Js5hyecct8m9rg%2Bp0SX5mbyx9ufUmnwtyvnzKBf4Jgn%2BFyCrgs7Pj%2F5cd2iKhiojdftOF5wTfeoEH%2Fme4gzas9SyzeE7R80QBdHla&X-Amz-Signature=afa84fca885d8701ea6959895f5b915baeb0c895f28f29fd510b5d38dc40c28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HM4SDWH%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCDzA4SAHVACBXuDgVsGu6yqVT%2FfH67koaH9N2hx7emOwIhAMVwgJbM9du9ZbIL10WuaMR3ZksdmbkrfoEdD95qdmpQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8wTeLyUd32kGvThYq3AOXZK9gHTuLU4HIulcF3T%2BOirDQAkJwBiEKWouE%2Fc9Y7K6lQLl2Jtuch%2FX5mrgKZG2rb5DoJ9olAk9wancJzAsPhwg%2Bm3u8WEwYg4KOKZ5ZZp%2FJbuuyfzUPa3eChT6KO2jnt90EcNx7UxfPv%2BfU4rdSU8%2Bze6J1%2Bsk7qPF%2BlOBvcOMgn%2FBA%2BWub3NRAHdC6tm75GbPvrp%2B7b3MSvOOGZ4%2Bk1Da0YczkrtcfsU1Q8RSTeukcwQsKqN0xp2nUlj4UjabWhGho5Ax0L2oMFrz5nqPq9R9ySVc2%2BdKG9fuCzJu8i9nEjTLZPG1%2F4idK6s2jsxIVJAXnFzgTWF91JMN9mjpdkx1R7wnxr55h3F%2Fk6Ahlco5sCcqUOTqUNqacLkK11M4k%2BeNXWddKD%2FoLjvWnSgrGEhJgOmFsfz9NU%2BGkr6ZzPZ%2BCTf%2BcbS%2BTkMJLkKKfmYpWRP4GDLHZdwoB4Vc7N2lCXeXTPBDLCZJM8HqcCM92dYIOiwsETJSgxA4rbznmbT%2BlAt17VCcfJzI7EsuxnRr3lWTAVEzdJegQeXPFGLze71UA48bzfKQb4ROxNFhe0rLZnOZOL6No%2FWvbA1jnBoaRYUDg50q1pSLhzcrggMdqeL%2BdsXcpRj1kG3yDKzD0laTKBjqkAQ9i0QLrJ2Liv3K%2BIEwUUDAqzz%2F1Dxa7lGOlyiGfm7tqemJ%2FgDXluOSoBiXZp5aulBguvu6Xa6bvjo9CozI5wFK6Okiu5s7Y1yIdNkYzFoXzDcsRjUz5bs8Js5hyecct8m9rg%2Bp0SX5mbyx9ufUmnwtyvnzKBf4Jgn%2BFyCrgs7Pj%2F5cd2iKhiojdftOF5wTfeoEH%2Fme4gzas9SyzeE7R80QBdHla&X-Amz-Signature=a481c5c305d6e9e19d84546fddd42e7b2e3d888ef915a5dd71beac9c04d5a286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HM4SDWH%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCDzA4SAHVACBXuDgVsGu6yqVT%2FfH67koaH9N2hx7emOwIhAMVwgJbM9du9ZbIL10WuaMR3ZksdmbkrfoEdD95qdmpQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8wTeLyUd32kGvThYq3AOXZK9gHTuLU4HIulcF3T%2BOirDQAkJwBiEKWouE%2Fc9Y7K6lQLl2Jtuch%2FX5mrgKZG2rb5DoJ9olAk9wancJzAsPhwg%2Bm3u8WEwYg4KOKZ5ZZp%2FJbuuyfzUPa3eChT6KO2jnt90EcNx7UxfPv%2BfU4rdSU8%2Bze6J1%2Bsk7qPF%2BlOBvcOMgn%2FBA%2BWub3NRAHdC6tm75GbPvrp%2B7b3MSvOOGZ4%2Bk1Da0YczkrtcfsU1Q8RSTeukcwQsKqN0xp2nUlj4UjabWhGho5Ax0L2oMFrz5nqPq9R9ySVc2%2BdKG9fuCzJu8i9nEjTLZPG1%2F4idK6s2jsxIVJAXnFzgTWF91JMN9mjpdkx1R7wnxr55h3F%2Fk6Ahlco5sCcqUOTqUNqacLkK11M4k%2BeNXWddKD%2FoLjvWnSgrGEhJgOmFsfz9NU%2BGkr6ZzPZ%2BCTf%2BcbS%2BTkMJLkKKfmYpWRP4GDLHZdwoB4Vc7N2lCXeXTPBDLCZJM8HqcCM92dYIOiwsETJSgxA4rbznmbT%2BlAt17VCcfJzI7EsuxnRr3lWTAVEzdJegQeXPFGLze71UA48bzfKQb4ROxNFhe0rLZnOZOL6No%2FWvbA1jnBoaRYUDg50q1pSLhzcrggMdqeL%2BdsXcpRj1kG3yDKzD0laTKBjqkAQ9i0QLrJ2Liv3K%2BIEwUUDAqzz%2F1Dxa7lGOlyiGfm7tqemJ%2FgDXluOSoBiXZp5aulBguvu6Xa6bvjo9CozI5wFK6Okiu5s7Y1yIdNkYzFoXzDcsRjUz5bs8Js5hyecct8m9rg%2Bp0SX5mbyx9ufUmnwtyvnzKBf4Jgn%2BFyCrgs7Pj%2F5cd2iKhiojdftOF5wTfeoEH%2Fme4gzas9SyzeE7R80QBdHla&X-Amz-Signature=556265dec4b7a1d3d8b829ed7eb5290fcac10d9fcfd30a5a9a9aa612e5bb0be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HM4SDWH%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCDzA4SAHVACBXuDgVsGu6yqVT%2FfH67koaH9N2hx7emOwIhAMVwgJbM9du9ZbIL10WuaMR3ZksdmbkrfoEdD95qdmpQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8wTeLyUd32kGvThYq3AOXZK9gHTuLU4HIulcF3T%2BOirDQAkJwBiEKWouE%2Fc9Y7K6lQLl2Jtuch%2FX5mrgKZG2rb5DoJ9olAk9wancJzAsPhwg%2Bm3u8WEwYg4KOKZ5ZZp%2FJbuuyfzUPa3eChT6KO2jnt90EcNx7UxfPv%2BfU4rdSU8%2Bze6J1%2Bsk7qPF%2BlOBvcOMgn%2FBA%2BWub3NRAHdC6tm75GbPvrp%2B7b3MSvOOGZ4%2Bk1Da0YczkrtcfsU1Q8RSTeukcwQsKqN0xp2nUlj4UjabWhGho5Ax0L2oMFrz5nqPq9R9ySVc2%2BdKG9fuCzJu8i9nEjTLZPG1%2F4idK6s2jsxIVJAXnFzgTWF91JMN9mjpdkx1R7wnxr55h3F%2Fk6Ahlco5sCcqUOTqUNqacLkK11M4k%2BeNXWddKD%2FoLjvWnSgrGEhJgOmFsfz9NU%2BGkr6ZzPZ%2BCTf%2BcbS%2BTkMJLkKKfmYpWRP4GDLHZdwoB4Vc7N2lCXeXTPBDLCZJM8HqcCM92dYIOiwsETJSgxA4rbznmbT%2BlAt17VCcfJzI7EsuxnRr3lWTAVEzdJegQeXPFGLze71UA48bzfKQb4ROxNFhe0rLZnOZOL6No%2FWvbA1jnBoaRYUDg50q1pSLhzcrggMdqeL%2BdsXcpRj1kG3yDKzD0laTKBjqkAQ9i0QLrJ2Liv3K%2BIEwUUDAqzz%2F1Dxa7lGOlyiGfm7tqemJ%2FgDXluOSoBiXZp5aulBguvu6Xa6bvjo9CozI5wFK6Okiu5s7Y1yIdNkYzFoXzDcsRjUz5bs8Js5hyecct8m9rg%2Bp0SX5mbyx9ufUmnwtyvnzKBf4Jgn%2BFyCrgs7Pj%2F5cd2iKhiojdftOF5wTfeoEH%2Fme4gzas9SyzeE7R80QBdHla&X-Amz-Signature=21bc7021b6808fef6e1c3d4b11194b90f2a3db25e1f6ba93938aa91b928a18d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


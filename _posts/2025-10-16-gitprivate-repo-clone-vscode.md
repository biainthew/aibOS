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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHJESZK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE5tsRycuv0pO6cYwOBnpObVUzgjMC1KZlxcYjJyH0SnAiEA227UmHu1k9apTjHNrZZuBC0A1hL%2BpWBytLBgpmWx9zAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ty9LERynlHxtE7CrcA%2BnW0SnDXZj6ETBszyPcpE48gt88RGM8IOOK7OH0olGtWd4pPx2q0FS79qiEI9vU7%2FdWlPaGdpK5aHS212B87dKn%2B4oG%2FS2BcB1iFSgzb8lvO75ORAR2y0yOEnArbOsjFheuLNZwxO9BpVWt2ZQ%2FVxm3ScnIk9YMh2NRUAQDngxy6e6LeTh%2BJ498pNgtYwIHo1qSzjfT06P87bFBuIbkTpx6%2FMfKqzNq3sdq0qQVqjCnZxdvzO7x5K4JB%2FdqLdNzk0qDyMwCNlTUEfXeQuKQaZQCwMLxM0UUtoQ%2FFFXB0askz%2Bq86Va9ldeS48Kyq6islgW8T51jZY5lw5rqt3P6jSrHxbfZoBoMPaPd4l5PKQma98b0CP9wOH3BJlU3IDeaHtO6AB6ZivKX7lRtCq2IvH4eoL8C6Uh8%2B4BDgvKb%2Fr9S5P9unJFvhNZMDidJv9WlnptGoAA2r%2Fkj%2BCs1ElWARqeHiYnK01bbTXaBNaioOp4NMM%2BhYFksewELKZ1B0%2BsgORzPJIrt%2BnOa%2F2ZkO%2F%2B6JLbCct3S10m%2FJ3A9AXxaJ%2FwQWSIXosHhcWwjNhoPVrxRQcSLn45xmDadgArUIAxnDDGnHrRZtzBtCBj01lM%2Bw6AJ3D6x%2FD%2Fr23XbdClnMMv5o8oGOqUBFnv%2BAAaZiHiUgxS%2Bh8zEuVvNo1vq9Opx7mXxKiFr7xyA7KaQbQBSjaRQKEM%2BDq%2F8kzaSbqXeVtd7IYNAteD0oom%2BHC7brrxiN%2F9Qb8z8X8Z3bqOT4Ox2TQJGriDwzKhv1pBAfx%2BPMdtVZgoZ63ian0yw%2BRcYiedsBYXrgB6dPHGQOdEi4ZdvXy0J8s8TYsqe%2BvbxYdvYDfWWJa2Z2nEcbPk41zDo&X-Amz-Signature=6321e4c370b4cb38921643c087e4d8f8184482f35ea03009df77b54b76f0c34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHJESZK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE5tsRycuv0pO6cYwOBnpObVUzgjMC1KZlxcYjJyH0SnAiEA227UmHu1k9apTjHNrZZuBC0A1hL%2BpWBytLBgpmWx9zAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ty9LERynlHxtE7CrcA%2BnW0SnDXZj6ETBszyPcpE48gt88RGM8IOOK7OH0olGtWd4pPx2q0FS79qiEI9vU7%2FdWlPaGdpK5aHS212B87dKn%2B4oG%2FS2BcB1iFSgzb8lvO75ORAR2y0yOEnArbOsjFheuLNZwxO9BpVWt2ZQ%2FVxm3ScnIk9YMh2NRUAQDngxy6e6LeTh%2BJ498pNgtYwIHo1qSzjfT06P87bFBuIbkTpx6%2FMfKqzNq3sdq0qQVqjCnZxdvzO7x5K4JB%2FdqLdNzk0qDyMwCNlTUEfXeQuKQaZQCwMLxM0UUtoQ%2FFFXB0askz%2Bq86Va9ldeS48Kyq6islgW8T51jZY5lw5rqt3P6jSrHxbfZoBoMPaPd4l5PKQma98b0CP9wOH3BJlU3IDeaHtO6AB6ZivKX7lRtCq2IvH4eoL8C6Uh8%2B4BDgvKb%2Fr9S5P9unJFvhNZMDidJv9WlnptGoAA2r%2Fkj%2BCs1ElWARqeHiYnK01bbTXaBNaioOp4NMM%2BhYFksewELKZ1B0%2BsgORzPJIrt%2BnOa%2F2ZkO%2F%2B6JLbCct3S10m%2FJ3A9AXxaJ%2FwQWSIXosHhcWwjNhoPVrxRQcSLn45xmDadgArUIAxnDDGnHrRZtzBtCBj01lM%2Bw6AJ3D6x%2FD%2Fr23XbdClnMMv5o8oGOqUBFnv%2BAAaZiHiUgxS%2Bh8zEuVvNo1vq9Opx7mXxKiFr7xyA7KaQbQBSjaRQKEM%2BDq%2F8kzaSbqXeVtd7IYNAteD0oom%2BHC7brrxiN%2F9Qb8z8X8Z3bqOT4Ox2TQJGriDwzKhv1pBAfx%2BPMdtVZgoZ63ian0yw%2BRcYiedsBYXrgB6dPHGQOdEi4ZdvXy0J8s8TYsqe%2BvbxYdvYDfWWJa2Z2nEcbPk41zDo&X-Amz-Signature=8d36f697a5cf90090bbffe9b7ec9c8c1bed0b6cb0e6cc2c0981736a8adeb22a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHJESZK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE5tsRycuv0pO6cYwOBnpObVUzgjMC1KZlxcYjJyH0SnAiEA227UmHu1k9apTjHNrZZuBC0A1hL%2BpWBytLBgpmWx9zAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ty9LERynlHxtE7CrcA%2BnW0SnDXZj6ETBszyPcpE48gt88RGM8IOOK7OH0olGtWd4pPx2q0FS79qiEI9vU7%2FdWlPaGdpK5aHS212B87dKn%2B4oG%2FS2BcB1iFSgzb8lvO75ORAR2y0yOEnArbOsjFheuLNZwxO9BpVWt2ZQ%2FVxm3ScnIk9YMh2NRUAQDngxy6e6LeTh%2BJ498pNgtYwIHo1qSzjfT06P87bFBuIbkTpx6%2FMfKqzNq3sdq0qQVqjCnZxdvzO7x5K4JB%2FdqLdNzk0qDyMwCNlTUEfXeQuKQaZQCwMLxM0UUtoQ%2FFFXB0askz%2Bq86Va9ldeS48Kyq6islgW8T51jZY5lw5rqt3P6jSrHxbfZoBoMPaPd4l5PKQma98b0CP9wOH3BJlU3IDeaHtO6AB6ZivKX7lRtCq2IvH4eoL8C6Uh8%2B4BDgvKb%2Fr9S5P9unJFvhNZMDidJv9WlnptGoAA2r%2Fkj%2BCs1ElWARqeHiYnK01bbTXaBNaioOp4NMM%2BhYFksewELKZ1B0%2BsgORzPJIrt%2BnOa%2F2ZkO%2F%2B6JLbCct3S10m%2FJ3A9AXxaJ%2FwQWSIXosHhcWwjNhoPVrxRQcSLn45xmDadgArUIAxnDDGnHrRZtzBtCBj01lM%2Bw6AJ3D6x%2FD%2Fr23XbdClnMMv5o8oGOqUBFnv%2BAAaZiHiUgxS%2Bh8zEuVvNo1vq9Opx7mXxKiFr7xyA7KaQbQBSjaRQKEM%2BDq%2F8kzaSbqXeVtd7IYNAteD0oom%2BHC7brrxiN%2F9Qb8z8X8Z3bqOT4Ox2TQJGriDwzKhv1pBAfx%2BPMdtVZgoZ63ian0yw%2BRcYiedsBYXrgB6dPHGQOdEi4ZdvXy0J8s8TYsqe%2BvbxYdvYDfWWJa2Z2nEcbPk41zDo&X-Amz-Signature=99ca12e8d4cf6772efc15920dad8270e4fde5e190fc4136e3e02d5372ec2100a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHJESZK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE5tsRycuv0pO6cYwOBnpObVUzgjMC1KZlxcYjJyH0SnAiEA227UmHu1k9apTjHNrZZuBC0A1hL%2BpWBytLBgpmWx9zAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ty9LERynlHxtE7CrcA%2BnW0SnDXZj6ETBszyPcpE48gt88RGM8IOOK7OH0olGtWd4pPx2q0FS79qiEI9vU7%2FdWlPaGdpK5aHS212B87dKn%2B4oG%2FS2BcB1iFSgzb8lvO75ORAR2y0yOEnArbOsjFheuLNZwxO9BpVWt2ZQ%2FVxm3ScnIk9YMh2NRUAQDngxy6e6LeTh%2BJ498pNgtYwIHo1qSzjfT06P87bFBuIbkTpx6%2FMfKqzNq3sdq0qQVqjCnZxdvzO7x5K4JB%2FdqLdNzk0qDyMwCNlTUEfXeQuKQaZQCwMLxM0UUtoQ%2FFFXB0askz%2Bq86Va9ldeS48Kyq6islgW8T51jZY5lw5rqt3P6jSrHxbfZoBoMPaPd4l5PKQma98b0CP9wOH3BJlU3IDeaHtO6AB6ZivKX7lRtCq2IvH4eoL8C6Uh8%2B4BDgvKb%2Fr9S5P9unJFvhNZMDidJv9WlnptGoAA2r%2Fkj%2BCs1ElWARqeHiYnK01bbTXaBNaioOp4NMM%2BhYFksewELKZ1B0%2BsgORzPJIrt%2BnOa%2F2ZkO%2F%2B6JLbCct3S10m%2FJ3A9AXxaJ%2FwQWSIXosHhcWwjNhoPVrxRQcSLn45xmDadgArUIAxnDDGnHrRZtzBtCBj01lM%2Bw6AJ3D6x%2FD%2Fr23XbdClnMMv5o8oGOqUBFnv%2BAAaZiHiUgxS%2Bh8zEuVvNo1vq9Opx7mXxKiFr7xyA7KaQbQBSjaRQKEM%2BDq%2F8kzaSbqXeVtd7IYNAteD0oom%2BHC7brrxiN%2F9Qb8z8X8Z3bqOT4Ox2TQJGriDwzKhv1pBAfx%2BPMdtVZgoZ63ian0yw%2BRcYiedsBYXrgB6dPHGQOdEi4ZdvXy0J8s8TYsqe%2BvbxYdvYDfWWJa2Z2nEcbPk41zDo&X-Amz-Signature=a9d49f07c29ea845476fcf086d91bfc1cf5eb876d59577ce5b549f8a2866c0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


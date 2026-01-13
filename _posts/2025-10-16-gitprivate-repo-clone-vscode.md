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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F5BVZR%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf5jrR8hU2Urx%2FI0CPubtWLg9SeAmIaT%2FQuDEJI24%2FhgIga9IL4oHEYpCRH0DFW2YKYRAE3batI90y%2FHqnthp68SgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWsJQ8o6vygviZ2aircA8P0O%2B%2BChL%2FmH6aTWTHBikBgb9HPHb7I3sQ5s7bmB9ag8g5ltL9sJtg0HW0U3bJ3zLczhvW6okQL7m4rRyupFZpa6WCbavxY1fJbfkp0InK3KT4qj6bQ7y6WZWEnRZMFCTMpv39PQDsrUFfGErQI5KlfjXlM9ltRyMsiM7vRh1jXPDVIVv%2B41K2lyAEYQ9LjlNhfAxDxxVFwf0xVUT8ujz2vllraM1d7THqBCxR9R7ig1WCIiI65iY3JlFsM5GHPTVcMKkY08RyU6NgJL0NwocUoI9QUYefwG2ZyMOzCeLNy3Jr9nIbr7B2QxQDUaX5fDAv5zEucOSVxUzPB8QrbbOaQWXPe8IUXWoV%2BYxHuvKlzQymGSaCvb0FJP613t3gtFFsIPB19vVCl18VXowzfQAGPwfBGyGtzvqSo399mjx0dpdiovbIkPYpF%2FctltvWDLXqJmYFM3q7KBil29TdVZsvTPklnunzeWvJFaFO7GdItjJ7NN3RGDLOg6sVEUnsJc8zh8K90EodBKaqHkMh02GDDs1%2BdeV0VNYabvKTZC32QYjfJQiplDwczqoiGrRU4KXEOX6hVggbhMO31p9iJbSsz%2B93FODVBI09Dt3nSwwG5bOTy%2BXorTO%2B9GiGTMJetlssGOqUBO4rw4CPbR0XBEW0mCOgIV0uR4iheCFgaXdYlWw5s0QW8dEdHT1apMV%2F31QRI88hkd3OS82b7QkedXrpYvqtbd0Id9kwnzGK3j7BxU02JhxIaUDiZYRQiyqm8xNHULxkc6wHG5TZ48Qid1sAZurZcfo5pM6SK20DQayW7J8V84jUwplVTJwK%2BOlu2xmYEzL1T0A%2Fba8ZHm7XX5fIbIprzhdYimaU9&X-Amz-Signature=3befbd296019dd505da61e1fe9c32aadf0afc10528e5a24aea0456bb55b563f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F5BVZR%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf5jrR8hU2Urx%2FI0CPubtWLg9SeAmIaT%2FQuDEJI24%2FhgIga9IL4oHEYpCRH0DFW2YKYRAE3batI90y%2FHqnthp68SgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWsJQ8o6vygviZ2aircA8P0O%2B%2BChL%2FmH6aTWTHBikBgb9HPHb7I3sQ5s7bmB9ag8g5ltL9sJtg0HW0U3bJ3zLczhvW6okQL7m4rRyupFZpa6WCbavxY1fJbfkp0InK3KT4qj6bQ7y6WZWEnRZMFCTMpv39PQDsrUFfGErQI5KlfjXlM9ltRyMsiM7vRh1jXPDVIVv%2B41K2lyAEYQ9LjlNhfAxDxxVFwf0xVUT8ujz2vllraM1d7THqBCxR9R7ig1WCIiI65iY3JlFsM5GHPTVcMKkY08RyU6NgJL0NwocUoI9QUYefwG2ZyMOzCeLNy3Jr9nIbr7B2QxQDUaX5fDAv5zEucOSVxUzPB8QrbbOaQWXPe8IUXWoV%2BYxHuvKlzQymGSaCvb0FJP613t3gtFFsIPB19vVCl18VXowzfQAGPwfBGyGtzvqSo399mjx0dpdiovbIkPYpF%2FctltvWDLXqJmYFM3q7KBil29TdVZsvTPklnunzeWvJFaFO7GdItjJ7NN3RGDLOg6sVEUnsJc8zh8K90EodBKaqHkMh02GDDs1%2BdeV0VNYabvKTZC32QYjfJQiplDwczqoiGrRU4KXEOX6hVggbhMO31p9iJbSsz%2B93FODVBI09Dt3nSwwG5bOTy%2BXorTO%2B9GiGTMJetlssGOqUBO4rw4CPbR0XBEW0mCOgIV0uR4iheCFgaXdYlWw5s0QW8dEdHT1apMV%2F31QRI88hkd3OS82b7QkedXrpYvqtbd0Id9kwnzGK3j7BxU02JhxIaUDiZYRQiyqm8xNHULxkc6wHG5TZ48Qid1sAZurZcfo5pM6SK20DQayW7J8V84jUwplVTJwK%2BOlu2xmYEzL1T0A%2Fba8ZHm7XX5fIbIprzhdYimaU9&X-Amz-Signature=eca48ccf8c303b53a35503da37c30ce1ef456c2731dd98f8de3e7ada31077fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F5BVZR%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf5jrR8hU2Urx%2FI0CPubtWLg9SeAmIaT%2FQuDEJI24%2FhgIga9IL4oHEYpCRH0DFW2YKYRAE3batI90y%2FHqnthp68SgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWsJQ8o6vygviZ2aircA8P0O%2B%2BChL%2FmH6aTWTHBikBgb9HPHb7I3sQ5s7bmB9ag8g5ltL9sJtg0HW0U3bJ3zLczhvW6okQL7m4rRyupFZpa6WCbavxY1fJbfkp0InK3KT4qj6bQ7y6WZWEnRZMFCTMpv39PQDsrUFfGErQI5KlfjXlM9ltRyMsiM7vRh1jXPDVIVv%2B41K2lyAEYQ9LjlNhfAxDxxVFwf0xVUT8ujz2vllraM1d7THqBCxR9R7ig1WCIiI65iY3JlFsM5GHPTVcMKkY08RyU6NgJL0NwocUoI9QUYefwG2ZyMOzCeLNy3Jr9nIbr7B2QxQDUaX5fDAv5zEucOSVxUzPB8QrbbOaQWXPe8IUXWoV%2BYxHuvKlzQymGSaCvb0FJP613t3gtFFsIPB19vVCl18VXowzfQAGPwfBGyGtzvqSo399mjx0dpdiovbIkPYpF%2FctltvWDLXqJmYFM3q7KBil29TdVZsvTPklnunzeWvJFaFO7GdItjJ7NN3RGDLOg6sVEUnsJc8zh8K90EodBKaqHkMh02GDDs1%2BdeV0VNYabvKTZC32QYjfJQiplDwczqoiGrRU4KXEOX6hVggbhMO31p9iJbSsz%2B93FODVBI09Dt3nSwwG5bOTy%2BXorTO%2B9GiGTMJetlssGOqUBO4rw4CPbR0XBEW0mCOgIV0uR4iheCFgaXdYlWw5s0QW8dEdHT1apMV%2F31QRI88hkd3OS82b7QkedXrpYvqtbd0Id9kwnzGK3j7BxU02JhxIaUDiZYRQiyqm8xNHULxkc6wHG5TZ48Qid1sAZurZcfo5pM6SK20DQayW7J8V84jUwplVTJwK%2BOlu2xmYEzL1T0A%2Fba8ZHm7XX5fIbIprzhdYimaU9&X-Amz-Signature=b0340b4fdcf247979992b7f9211d516bbbf423237b400c91f36043302161db0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F5BVZR%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T011352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf5jrR8hU2Urx%2FI0CPubtWLg9SeAmIaT%2FQuDEJI24%2FhgIga9IL4oHEYpCRH0DFW2YKYRAE3batI90y%2FHqnthp68SgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWsJQ8o6vygviZ2aircA8P0O%2B%2BChL%2FmH6aTWTHBikBgb9HPHb7I3sQ5s7bmB9ag8g5ltL9sJtg0HW0U3bJ3zLczhvW6okQL7m4rRyupFZpa6WCbavxY1fJbfkp0InK3KT4qj6bQ7y6WZWEnRZMFCTMpv39PQDsrUFfGErQI5KlfjXlM9ltRyMsiM7vRh1jXPDVIVv%2B41K2lyAEYQ9LjlNhfAxDxxVFwf0xVUT8ujz2vllraM1d7THqBCxR9R7ig1WCIiI65iY3JlFsM5GHPTVcMKkY08RyU6NgJL0NwocUoI9QUYefwG2ZyMOzCeLNy3Jr9nIbr7B2QxQDUaX5fDAv5zEucOSVxUzPB8QrbbOaQWXPe8IUXWoV%2BYxHuvKlzQymGSaCvb0FJP613t3gtFFsIPB19vVCl18VXowzfQAGPwfBGyGtzvqSo399mjx0dpdiovbIkPYpF%2FctltvWDLXqJmYFM3q7KBil29TdVZsvTPklnunzeWvJFaFO7GdItjJ7NN3RGDLOg6sVEUnsJc8zh8K90EodBKaqHkMh02GDDs1%2BdeV0VNYabvKTZC32QYjfJQiplDwczqoiGrRU4KXEOX6hVggbhMO31p9iJbSsz%2B93FODVBI09Dt3nSwwG5bOTy%2BXorTO%2B9GiGTMJetlssGOqUBO4rw4CPbR0XBEW0mCOgIV0uR4iheCFgaXdYlWw5s0QW8dEdHT1apMV%2F31QRI88hkd3OS82b7QkedXrpYvqtbd0Id9kwnzGK3j7BxU02JhxIaUDiZYRQiyqm8xNHULxkc6wHG5TZ48Qid1sAZurZcfo5pM6SK20DQayW7J8V84jUwplVTJwK%2BOlu2xmYEzL1T0A%2Fba8ZHm7XX5fIbIprzhdYimaU9&X-Amz-Signature=4cf1e2ef7d544a85d3fa80493112d22df5fdbd9ceea3a9c74ba07feb0b8d9968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


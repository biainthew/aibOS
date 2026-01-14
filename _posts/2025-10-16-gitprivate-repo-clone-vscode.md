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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUCUUYT%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCHGtjsQZ6F7mCkIlx0bhBOk2MPWO4aRmppxxVjlgA5BQIhAINAe%2FcTNlTdxMyuMjp%2BRSgAFwm%2FcLzGKiT2nVaMTadVKv8DCBIQABoMNjM3NDIzMTgzODA1Igx94xc%2F%2FlDUcq%2BATGUq3ANRndQ5dHy8HfURFzJiPOC%2FBzSE3E90FBe6LBNUPhafPdkU%2Bp7%2BLF0rBkZuPLE8nGShVNGYrYYRyYvTYeylbUTY3iIiKG2FiPBt3pU44g8UoNQCr61d6vNnUo2dZ4g%2FD0DFq3wMtHtP8T1xj%2BiYMozuikDjxF8vnnTOrhYblN8BEplAuH3cVCtkTwqTH4%2B3ozn8thHuBP5zkMFYIZKGBaWpqp447B7pbBtHZ2OpY5fRhfIfSCm5IqFcd9y3l6%2Fhfoy%2BqOUKxVWPPFqq0wfFvwYPRy3EXQfnVXSZJ6zNLze%2BiAUZrM2X8j6lYzCjHNbQTLHR1JO2nmVAAA5Gs5drK8B5mRzo17LiEEi%2BINAoPhRLaoUr7QTSlz282Qd89w9oD3kPYI7493DWd8l0B%2FPPn4jg5yNkMUyC6fODb3drPy0q8Y8JKLfEN016%2FG94sFFimRBf7SNa0WxPJgN1KwmSB4EGi1thbOVjGfw%2FrVrFa%2F3M7R%2BmeDNADxoHFpyf1%2FWNTBBpd4rSgr431RrlQD6kiCNwpOAd8kuXsclotlogKBwxQ7bet1gTY%2BmOIBif4SqHnCl9AXeLoK9ljk5IDfUFnnkR%2Fzthj0og0LQVkpfETtEXNbuCSKUHVfeC%2BgxM0jDA0JvLBjqkASQs7hXpuub%2BbLXuas7%2BYJJtIoIZXThASJqXF3fUL%2F%2Blnp6ypryl%2BgnizgPG9CFe83sMw%2F%2BZxvXoY%2F4DssfJrNUghNeWzWnkDjfKaeU%2FirRpRxcDGXjE2EZoXORamjIqnVuo1m5PkOtvgiUjrfEXi0YSlREuqxwARlhKr3WV14iYOXF%2BrAmXRiFkOSgW5IBtPWkpRIJdA7PE7f6isGumTWEalSHu&X-Amz-Signature=76981ba76c9cc1bf4bc43170e5bb41c9a77c318cfe72bc4ad76f40808822de1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUCUUYT%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCHGtjsQZ6F7mCkIlx0bhBOk2MPWO4aRmppxxVjlgA5BQIhAINAe%2FcTNlTdxMyuMjp%2BRSgAFwm%2FcLzGKiT2nVaMTadVKv8DCBIQABoMNjM3NDIzMTgzODA1Igx94xc%2F%2FlDUcq%2BATGUq3ANRndQ5dHy8HfURFzJiPOC%2FBzSE3E90FBe6LBNUPhafPdkU%2Bp7%2BLF0rBkZuPLE8nGShVNGYrYYRyYvTYeylbUTY3iIiKG2FiPBt3pU44g8UoNQCr61d6vNnUo2dZ4g%2FD0DFq3wMtHtP8T1xj%2BiYMozuikDjxF8vnnTOrhYblN8BEplAuH3cVCtkTwqTH4%2B3ozn8thHuBP5zkMFYIZKGBaWpqp447B7pbBtHZ2OpY5fRhfIfSCm5IqFcd9y3l6%2Fhfoy%2BqOUKxVWPPFqq0wfFvwYPRy3EXQfnVXSZJ6zNLze%2BiAUZrM2X8j6lYzCjHNbQTLHR1JO2nmVAAA5Gs5drK8B5mRzo17LiEEi%2BINAoPhRLaoUr7QTSlz282Qd89w9oD3kPYI7493DWd8l0B%2FPPn4jg5yNkMUyC6fODb3drPy0q8Y8JKLfEN016%2FG94sFFimRBf7SNa0WxPJgN1KwmSB4EGi1thbOVjGfw%2FrVrFa%2F3M7R%2BmeDNADxoHFpyf1%2FWNTBBpd4rSgr431RrlQD6kiCNwpOAd8kuXsclotlogKBwxQ7bet1gTY%2BmOIBif4SqHnCl9AXeLoK9ljk5IDfUFnnkR%2Fzthj0og0LQVkpfETtEXNbuCSKUHVfeC%2BgxM0jDA0JvLBjqkASQs7hXpuub%2BbLXuas7%2BYJJtIoIZXThASJqXF3fUL%2F%2Blnp6ypryl%2BgnizgPG9CFe83sMw%2F%2BZxvXoY%2F4DssfJrNUghNeWzWnkDjfKaeU%2FirRpRxcDGXjE2EZoXORamjIqnVuo1m5PkOtvgiUjrfEXi0YSlREuqxwARlhKr3WV14iYOXF%2BrAmXRiFkOSgW5IBtPWkpRIJdA7PE7f6isGumTWEalSHu&X-Amz-Signature=a153ce180da667109c6dc05e1e7761dada377cfa46ac1341d710ae2c5b36bd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUCUUYT%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCHGtjsQZ6F7mCkIlx0bhBOk2MPWO4aRmppxxVjlgA5BQIhAINAe%2FcTNlTdxMyuMjp%2BRSgAFwm%2FcLzGKiT2nVaMTadVKv8DCBIQABoMNjM3NDIzMTgzODA1Igx94xc%2F%2FlDUcq%2BATGUq3ANRndQ5dHy8HfURFzJiPOC%2FBzSE3E90FBe6LBNUPhafPdkU%2Bp7%2BLF0rBkZuPLE8nGShVNGYrYYRyYvTYeylbUTY3iIiKG2FiPBt3pU44g8UoNQCr61d6vNnUo2dZ4g%2FD0DFq3wMtHtP8T1xj%2BiYMozuikDjxF8vnnTOrhYblN8BEplAuH3cVCtkTwqTH4%2B3ozn8thHuBP5zkMFYIZKGBaWpqp447B7pbBtHZ2OpY5fRhfIfSCm5IqFcd9y3l6%2Fhfoy%2BqOUKxVWPPFqq0wfFvwYPRy3EXQfnVXSZJ6zNLze%2BiAUZrM2X8j6lYzCjHNbQTLHR1JO2nmVAAA5Gs5drK8B5mRzo17LiEEi%2BINAoPhRLaoUr7QTSlz282Qd89w9oD3kPYI7493DWd8l0B%2FPPn4jg5yNkMUyC6fODb3drPy0q8Y8JKLfEN016%2FG94sFFimRBf7SNa0WxPJgN1KwmSB4EGi1thbOVjGfw%2FrVrFa%2F3M7R%2BmeDNADxoHFpyf1%2FWNTBBpd4rSgr431RrlQD6kiCNwpOAd8kuXsclotlogKBwxQ7bet1gTY%2BmOIBif4SqHnCl9AXeLoK9ljk5IDfUFnnkR%2Fzthj0og0LQVkpfETtEXNbuCSKUHVfeC%2BgxM0jDA0JvLBjqkASQs7hXpuub%2BbLXuas7%2BYJJtIoIZXThASJqXF3fUL%2F%2Blnp6ypryl%2BgnizgPG9CFe83sMw%2F%2BZxvXoY%2F4DssfJrNUghNeWzWnkDjfKaeU%2FirRpRxcDGXjE2EZoXORamjIqnVuo1m5PkOtvgiUjrfEXi0YSlREuqxwARlhKr3WV14iYOXF%2BrAmXRiFkOSgW5IBtPWkpRIJdA7PE7f6isGumTWEalSHu&X-Amz-Signature=012b354ef2af744a8bfd3e743bdeb60ffe0d1a2004ac243f3a5cffb9e24ae5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUCUUYT%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCHGtjsQZ6F7mCkIlx0bhBOk2MPWO4aRmppxxVjlgA5BQIhAINAe%2FcTNlTdxMyuMjp%2BRSgAFwm%2FcLzGKiT2nVaMTadVKv8DCBIQABoMNjM3NDIzMTgzODA1Igx94xc%2F%2FlDUcq%2BATGUq3ANRndQ5dHy8HfURFzJiPOC%2FBzSE3E90FBe6LBNUPhafPdkU%2Bp7%2BLF0rBkZuPLE8nGShVNGYrYYRyYvTYeylbUTY3iIiKG2FiPBt3pU44g8UoNQCr61d6vNnUo2dZ4g%2FD0DFq3wMtHtP8T1xj%2BiYMozuikDjxF8vnnTOrhYblN8BEplAuH3cVCtkTwqTH4%2B3ozn8thHuBP5zkMFYIZKGBaWpqp447B7pbBtHZ2OpY5fRhfIfSCm5IqFcd9y3l6%2Fhfoy%2BqOUKxVWPPFqq0wfFvwYPRy3EXQfnVXSZJ6zNLze%2BiAUZrM2X8j6lYzCjHNbQTLHR1JO2nmVAAA5Gs5drK8B5mRzo17LiEEi%2BINAoPhRLaoUr7QTSlz282Qd89w9oD3kPYI7493DWd8l0B%2FPPn4jg5yNkMUyC6fODb3drPy0q8Y8JKLfEN016%2FG94sFFimRBf7SNa0WxPJgN1KwmSB4EGi1thbOVjGfw%2FrVrFa%2F3M7R%2BmeDNADxoHFpyf1%2FWNTBBpd4rSgr431RrlQD6kiCNwpOAd8kuXsclotlogKBwxQ7bet1gTY%2BmOIBif4SqHnCl9AXeLoK9ljk5IDfUFnnkR%2Fzthj0og0LQVkpfETtEXNbuCSKUHVfeC%2BgxM0jDA0JvLBjqkASQs7hXpuub%2BbLXuas7%2BYJJtIoIZXThASJqXF3fUL%2F%2Blnp6ypryl%2BgnizgPG9CFe83sMw%2F%2BZxvXoY%2F4DssfJrNUghNeWzWnkDjfKaeU%2FirRpRxcDGXjE2EZoXORamjIqnVuo1m5PkOtvgiUjrfEXi0YSlREuqxwARlhKr3WV14iYOXF%2BrAmXRiFkOSgW5IBtPWkpRIJdA7PE7f6isGumTWEalSHu&X-Amz-Signature=a2512b0509fa723b7435453b8a0210fc0a57d7f149b72c4fab1c643611af983f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


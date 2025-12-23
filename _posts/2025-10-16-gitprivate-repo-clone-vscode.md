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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7IDZQO%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAVrb3HgVR5EuecvbAnvo%2BAVaUUNA%2BweQjLD1ywiNNxAAiEA9eh0YO8t%2FrMGUD3GWhwjbxIaqT3qhkE6QtyYzr%2B0P54q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDE4Ksa8F70mFexCKCCrcA%2BC9xDR9jJrS026rpQ3garWp4YJ4IW6lRYt4lJ3bRHYpqv1OsyEHZPXwSenFZBrbRxNYPyE18q%2F0KQbFa4GueyKLg9NNGaxyvp6KvPUUBOC%2Fc7Br5GwXhNEnm0rkdy5uUnI644o33rpzpq83CCtTAMwiSWzTNIra4cKqb3eYM5lptFpEK1oBdeyP6fogl4s1Q2I%2FdlL34ewrTdj5%2FFyshKaTx76nDUPKnH5PluMugrsGhczxHa8gdPQvtIr8RntlwAzoxCIi3emGSKX8GRua8sDSOqnChQSaiGRtG7394sx5Qst5HwdvWVcKPnafekX85ehiqeCS5tn8N55MQaKDskBxKR5I0mDQz%2FUxBbeQ8d%2BiO22q2Oz2OlFmWtME%2FY%2BXasAmTSz66iTSxZRg9mIF0Y2QTJ2IywUlhW6%2BS8QRy0hU2C3BFk%2F9Lw79FPjWtjmGK6l0S2TBrqVgwDBgjco2kdVFdXqB24TxS9mlo16vLfpiST7%2F81GcaTB7Lw8m%2FUW4lzV7lg1XO9ChyF7HzcDTPkW%2B72FEBskGEdz49cZKBZDAZ9jNrfKwBUNlld2fcAMg5o%2FuXpjTYEr5UdqH0JbCjfC7CfLdP56vUp5aMk2Er%2BSlhcfUhiViBmTpXCqlMJzHp8oGOqUBQr7jIdERVjqF4LgMral0AAtIAagsKftWrmGk9oERJYzlqx2BxFmBcg%2F8FunEeGFy3bqBSfFSL3Nw9N68ZsOdRD5e96sg%2Fpypccb%2Bp07svE21lRdxjQ4tAnermvcYzlsqV4inLAVUbuE0ukULlOm7aAhdP1DM6VUlzkOoqHFcGHPnqKl9U2J4f1Y%2BDCrpcjdU%2FmxsqJJhKqcyR%2FIllzxVyO6Pc%2BzN&X-Amz-Signature=2d95b236ea5ae6dfbe8f875f4506f2661ffaa82aba14b25bc54d1c20c22978cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7IDZQO%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAVrb3HgVR5EuecvbAnvo%2BAVaUUNA%2BweQjLD1ywiNNxAAiEA9eh0YO8t%2FrMGUD3GWhwjbxIaqT3qhkE6QtyYzr%2B0P54q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDE4Ksa8F70mFexCKCCrcA%2BC9xDR9jJrS026rpQ3garWp4YJ4IW6lRYt4lJ3bRHYpqv1OsyEHZPXwSenFZBrbRxNYPyE18q%2F0KQbFa4GueyKLg9NNGaxyvp6KvPUUBOC%2Fc7Br5GwXhNEnm0rkdy5uUnI644o33rpzpq83CCtTAMwiSWzTNIra4cKqb3eYM5lptFpEK1oBdeyP6fogl4s1Q2I%2FdlL34ewrTdj5%2FFyshKaTx76nDUPKnH5PluMugrsGhczxHa8gdPQvtIr8RntlwAzoxCIi3emGSKX8GRua8sDSOqnChQSaiGRtG7394sx5Qst5HwdvWVcKPnafekX85ehiqeCS5tn8N55MQaKDskBxKR5I0mDQz%2FUxBbeQ8d%2BiO22q2Oz2OlFmWtME%2FY%2BXasAmTSz66iTSxZRg9mIF0Y2QTJ2IywUlhW6%2BS8QRy0hU2C3BFk%2F9Lw79FPjWtjmGK6l0S2TBrqVgwDBgjco2kdVFdXqB24TxS9mlo16vLfpiST7%2F81GcaTB7Lw8m%2FUW4lzV7lg1XO9ChyF7HzcDTPkW%2B72FEBskGEdz49cZKBZDAZ9jNrfKwBUNlld2fcAMg5o%2FuXpjTYEr5UdqH0JbCjfC7CfLdP56vUp5aMk2Er%2BSlhcfUhiViBmTpXCqlMJzHp8oGOqUBQr7jIdERVjqF4LgMral0AAtIAagsKftWrmGk9oERJYzlqx2BxFmBcg%2F8FunEeGFy3bqBSfFSL3Nw9N68ZsOdRD5e96sg%2Fpypccb%2Bp07svE21lRdxjQ4tAnermvcYzlsqV4inLAVUbuE0ukULlOm7aAhdP1DM6VUlzkOoqHFcGHPnqKl9U2J4f1Y%2BDCrpcjdU%2FmxsqJJhKqcyR%2FIllzxVyO6Pc%2BzN&X-Amz-Signature=791ada08817042090174b6544e1b06f434ac405a7f3b30a77bb17408ed4d8781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7IDZQO%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAVrb3HgVR5EuecvbAnvo%2BAVaUUNA%2BweQjLD1ywiNNxAAiEA9eh0YO8t%2FrMGUD3GWhwjbxIaqT3qhkE6QtyYzr%2B0P54q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDE4Ksa8F70mFexCKCCrcA%2BC9xDR9jJrS026rpQ3garWp4YJ4IW6lRYt4lJ3bRHYpqv1OsyEHZPXwSenFZBrbRxNYPyE18q%2F0KQbFa4GueyKLg9NNGaxyvp6KvPUUBOC%2Fc7Br5GwXhNEnm0rkdy5uUnI644o33rpzpq83CCtTAMwiSWzTNIra4cKqb3eYM5lptFpEK1oBdeyP6fogl4s1Q2I%2FdlL34ewrTdj5%2FFyshKaTx76nDUPKnH5PluMugrsGhczxHa8gdPQvtIr8RntlwAzoxCIi3emGSKX8GRua8sDSOqnChQSaiGRtG7394sx5Qst5HwdvWVcKPnafekX85ehiqeCS5tn8N55MQaKDskBxKR5I0mDQz%2FUxBbeQ8d%2BiO22q2Oz2OlFmWtME%2FY%2BXasAmTSz66iTSxZRg9mIF0Y2QTJ2IywUlhW6%2BS8QRy0hU2C3BFk%2F9Lw79FPjWtjmGK6l0S2TBrqVgwDBgjco2kdVFdXqB24TxS9mlo16vLfpiST7%2F81GcaTB7Lw8m%2FUW4lzV7lg1XO9ChyF7HzcDTPkW%2B72FEBskGEdz49cZKBZDAZ9jNrfKwBUNlld2fcAMg5o%2FuXpjTYEr5UdqH0JbCjfC7CfLdP56vUp5aMk2Er%2BSlhcfUhiViBmTpXCqlMJzHp8oGOqUBQr7jIdERVjqF4LgMral0AAtIAagsKftWrmGk9oERJYzlqx2BxFmBcg%2F8FunEeGFy3bqBSfFSL3Nw9N68ZsOdRD5e96sg%2Fpypccb%2Bp07svE21lRdxjQ4tAnermvcYzlsqV4inLAVUbuE0ukULlOm7aAhdP1DM6VUlzkOoqHFcGHPnqKl9U2J4f1Y%2BDCrpcjdU%2FmxsqJJhKqcyR%2FIllzxVyO6Pc%2BzN&X-Amz-Signature=40c52a04be377a80ce45880af4ef6cd00b6b27b82735fa6f89e324976ba5a1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7IDZQO%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAVrb3HgVR5EuecvbAnvo%2BAVaUUNA%2BweQjLD1ywiNNxAAiEA9eh0YO8t%2FrMGUD3GWhwjbxIaqT3qhkE6QtyYzr%2B0P54q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDE4Ksa8F70mFexCKCCrcA%2BC9xDR9jJrS026rpQ3garWp4YJ4IW6lRYt4lJ3bRHYpqv1OsyEHZPXwSenFZBrbRxNYPyE18q%2F0KQbFa4GueyKLg9NNGaxyvp6KvPUUBOC%2Fc7Br5GwXhNEnm0rkdy5uUnI644o33rpzpq83CCtTAMwiSWzTNIra4cKqb3eYM5lptFpEK1oBdeyP6fogl4s1Q2I%2FdlL34ewrTdj5%2FFyshKaTx76nDUPKnH5PluMugrsGhczxHa8gdPQvtIr8RntlwAzoxCIi3emGSKX8GRua8sDSOqnChQSaiGRtG7394sx5Qst5HwdvWVcKPnafekX85ehiqeCS5tn8N55MQaKDskBxKR5I0mDQz%2FUxBbeQ8d%2BiO22q2Oz2OlFmWtME%2FY%2BXasAmTSz66iTSxZRg9mIF0Y2QTJ2IywUlhW6%2BS8QRy0hU2C3BFk%2F9Lw79FPjWtjmGK6l0S2TBrqVgwDBgjco2kdVFdXqB24TxS9mlo16vLfpiST7%2F81GcaTB7Lw8m%2FUW4lzV7lg1XO9ChyF7HzcDTPkW%2B72FEBskGEdz49cZKBZDAZ9jNrfKwBUNlld2fcAMg5o%2FuXpjTYEr5UdqH0JbCjfC7CfLdP56vUp5aMk2Er%2BSlhcfUhiViBmTpXCqlMJzHp8oGOqUBQr7jIdERVjqF4LgMral0AAtIAagsKftWrmGk9oERJYzlqx2BxFmBcg%2F8FunEeGFy3bqBSfFSL3Nw9N68ZsOdRD5e96sg%2Fpypccb%2Bp07svE21lRdxjQ4tAnermvcYzlsqV4inLAVUbuE0ukULlOm7aAhdP1DM6VUlzkOoqHFcGHPnqKl9U2J4f1Y%2BDCrpcjdU%2FmxsqJJhKqcyR%2FIllzxVyO6Pc%2BzN&X-Amz-Signature=78b960051a0487a425793ea077c4d17a020660b6634225aebaea7a955773b97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


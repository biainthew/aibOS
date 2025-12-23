---
layout: post
title: "코딩애플JS Part1-5 arrow function"
date: 2023-06-30
categories: [general]
tags: [Javascript/Jquery]
---


## Arrow function 을 쓰는 이유


### 1. 함수 본연의 기능(입출력 기능) 을 잘 표현하는 문법임


> 💡 **프로그래밍 할 때 function 문법을 사용하는 이유**  
> 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용 할 때)  
> 2. 입출력 기능을 만들 때


### 2. 소괄호 생략 가능


파라미터가 하나일 때


### 3. 중괄호와 return 생략 가능


중괄호 안에 return 한 줄 뿐이라면


---


### arrow function 쓰면 내부에서 this 값을 쓸 때 밖에 있던 this 값을 그대로 사용


**쓰는 핵심 이유**


일반 function 과 용도가 완전히 같지는 않기 때문에 일반 function 을 항상 대체할 수 있는 문법은 아님 주의하기


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7IDZQO%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAVrb3HgVR5EuecvbAnvo%2BAVaUUNA%2BweQjLD1ywiNNxAAiEA9eh0YO8t%2FrMGUD3GWhwjbxIaqT3qhkE6QtyYzr%2B0P54q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDE4Ksa8F70mFexCKCCrcA%2BC9xDR9jJrS026rpQ3garWp4YJ4IW6lRYt4lJ3bRHYpqv1OsyEHZPXwSenFZBrbRxNYPyE18q%2F0KQbFa4GueyKLg9NNGaxyvp6KvPUUBOC%2Fc7Br5GwXhNEnm0rkdy5uUnI644o33rpzpq83CCtTAMwiSWzTNIra4cKqb3eYM5lptFpEK1oBdeyP6fogl4s1Q2I%2FdlL34ewrTdj5%2FFyshKaTx76nDUPKnH5PluMugrsGhczxHa8gdPQvtIr8RntlwAzoxCIi3emGSKX8GRua8sDSOqnChQSaiGRtG7394sx5Qst5HwdvWVcKPnafekX85ehiqeCS5tn8N55MQaKDskBxKR5I0mDQz%2FUxBbeQ8d%2BiO22q2Oz2OlFmWtME%2FY%2BXasAmTSz66iTSxZRg9mIF0Y2QTJ2IywUlhW6%2BS8QRy0hU2C3BFk%2F9Lw79FPjWtjmGK6l0S2TBrqVgwDBgjco2kdVFdXqB24TxS9mlo16vLfpiST7%2F81GcaTB7Lw8m%2FUW4lzV7lg1XO9ChyF7HzcDTPkW%2B72FEBskGEdz49cZKBZDAZ9jNrfKwBUNlld2fcAMg5o%2FuXpjTYEr5UdqH0JbCjfC7CfLdP56vUp5aMk2Er%2BSlhcfUhiViBmTpXCqlMJzHp8oGOqUBQr7jIdERVjqF4LgMral0AAtIAagsKftWrmGk9oERJYzlqx2BxFmBcg%2F8FunEeGFy3bqBSfFSL3Nw9N68ZsOdRD5e96sg%2Fpypccb%2Bp07svE21lRdxjQ4tAnermvcYzlsqV4inLAVUbuE0ukULlOm7aAhdP1DM6VUlzkOoqHFcGHPnqKl9U2J4f1Y%2BDCrpcjdU%2FmxsqJJhKqcyR%2FIllzxVyO6Pc%2BzN&X-Amz-Signature=010c82acb7b3d45235810168a83f1b8ace8be59412633fe0c2d1766f56ce1d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


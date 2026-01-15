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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWY3DSJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCrd%2FfBAuIQt%2Fs4Lev%2BV4zbrl6O0Fqc%2FY1HyHmgiyO1fwIhAObs3yH%2BZrKTuJ7zZixE9kx3kdIwjOrs3OIg5yFhz1vIKv8DCCkQABoMNjM3NDIzMTgzODA1IgzTcT6GrdIsUhR1hacq3AOqWRufvf9GGUiPj08fnToncH7EBcdqYmScuyCGwHeiN5Jlh9Kkqto2EJXu7jTaZh6rBbmWdMja%2B9SX%2BteHBwzV9R1Dss4L6LxGjGoB9P0Iazomc0KrjFKPJ626Cr2JqHhHd30OOhrMgkB6MWzv%2FneNwX4y0yzxHNubIzZFH4KlBcnIuJ76p77%2F0lKUS%2FDY075FDfDSj%2FPpQ%2F4%2FxqVmfr%2BSb1WNZ86CXjEFvemSxDTaSEG%2FPclyXdkGXWixEHo8E9ef3tpoblxmHqOf6jFXjILTtdLvPtjOYbQZ9S%2BSHBFw93AqVgGtksHCqCjgN2lCCdhs5C54tWiZU1eULIFDNfNrBw8B1uO1KrVYBKK0aFFANmj0bm36f1utLBDeZEpLc%2Fbj9Ppwv4JBRXXiq7Rvn5Y1ltF4qyws7pL49thQbcfGO6th2wDmHEwAvuqATexruz49imn4jb4oBqfGisRSO%2BIU1zWkDJiEU47qPKffxNal7mecHxrLwJ7bpItN34zmuuh4A8jUBSnaPHajk%2BsueyjjLFxN7qs2IKm5X3abnjN8XXAnduHuFaJH2zMGc3Km%2Bir1zUJWvW4b34SqMoy%2FXLP26otUjqa8bnzXAxRJstrcstD%2FpS0nAudB9kZszTDO5KDLBjqkAYKzseA8pnQ59UofA2ldsOWSAiJWwUYQkSYxfE%2FrbT1EUD9AOUJLNnu0FOhFsBdZSq0vtrpfaBg1T9Jl99mamBBc4lquyI6JKM%2BEXKaRZZ9rg%2BaKnCbsuDk%2BqLPbVVk5RBGe5VP2X5xZmI%2BTdIpCKBadTA4Rv4XyOdVFMIEvEYFSl9SafOQ4N%2BFGDOkAoPWuR%2BL1OM5jFQ52YrZL%2BPcBtaqQqTcE&X-Amz-Signature=40bc4743438c1c42f6fc172c47c3f0b6af007c06c3c4429c3068af0169fa9ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWY3DSJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCrd%2FfBAuIQt%2Fs4Lev%2BV4zbrl6O0Fqc%2FY1HyHmgiyO1fwIhAObs3yH%2BZrKTuJ7zZixE9kx3kdIwjOrs3OIg5yFhz1vIKv8DCCkQABoMNjM3NDIzMTgzODA1IgzTcT6GrdIsUhR1hacq3AOqWRufvf9GGUiPj08fnToncH7EBcdqYmScuyCGwHeiN5Jlh9Kkqto2EJXu7jTaZh6rBbmWdMja%2B9SX%2BteHBwzV9R1Dss4L6LxGjGoB9P0Iazomc0KrjFKPJ626Cr2JqHhHd30OOhrMgkB6MWzv%2FneNwX4y0yzxHNubIzZFH4KlBcnIuJ76p77%2F0lKUS%2FDY075FDfDSj%2FPpQ%2F4%2FxqVmfr%2BSb1WNZ86CXjEFvemSxDTaSEG%2FPclyXdkGXWixEHo8E9ef3tpoblxmHqOf6jFXjILTtdLvPtjOYbQZ9S%2BSHBFw93AqVgGtksHCqCjgN2lCCdhs5C54tWiZU1eULIFDNfNrBw8B1uO1KrVYBKK0aFFANmj0bm36f1utLBDeZEpLc%2Fbj9Ppwv4JBRXXiq7Rvn5Y1ltF4qyws7pL49thQbcfGO6th2wDmHEwAvuqATexruz49imn4jb4oBqfGisRSO%2BIU1zWkDJiEU47qPKffxNal7mecHxrLwJ7bpItN34zmuuh4A8jUBSnaPHajk%2BsueyjjLFxN7qs2IKm5X3abnjN8XXAnduHuFaJH2zMGc3Km%2Bir1zUJWvW4b34SqMoy%2FXLP26otUjqa8bnzXAxRJstrcstD%2FpS0nAudB9kZszTDO5KDLBjqkAYKzseA8pnQ59UofA2ldsOWSAiJWwUYQkSYxfE%2FrbT1EUD9AOUJLNnu0FOhFsBdZSq0vtrpfaBg1T9Jl99mamBBc4lquyI6JKM%2BEXKaRZZ9rg%2BaKnCbsuDk%2BqLPbVVk5RBGe5VP2X5xZmI%2BTdIpCKBadTA4Rv4XyOdVFMIEvEYFSl9SafOQ4N%2BFGDOkAoPWuR%2BL1OM5jFQ52YrZL%2BPcBtaqQqTcE&X-Amz-Signature=0ef79b93e916ceb2da154143ff43b94aa336f5cb9b35fe7fdb9d6ce091bc24a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWY3DSJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCrd%2FfBAuIQt%2Fs4Lev%2BV4zbrl6O0Fqc%2FY1HyHmgiyO1fwIhAObs3yH%2BZrKTuJ7zZixE9kx3kdIwjOrs3OIg5yFhz1vIKv8DCCkQABoMNjM3NDIzMTgzODA1IgzTcT6GrdIsUhR1hacq3AOqWRufvf9GGUiPj08fnToncH7EBcdqYmScuyCGwHeiN5Jlh9Kkqto2EJXu7jTaZh6rBbmWdMja%2B9SX%2BteHBwzV9R1Dss4L6LxGjGoB9P0Iazomc0KrjFKPJ626Cr2JqHhHd30OOhrMgkB6MWzv%2FneNwX4y0yzxHNubIzZFH4KlBcnIuJ76p77%2F0lKUS%2FDY075FDfDSj%2FPpQ%2F4%2FxqVmfr%2BSb1WNZ86CXjEFvemSxDTaSEG%2FPclyXdkGXWixEHo8E9ef3tpoblxmHqOf6jFXjILTtdLvPtjOYbQZ9S%2BSHBFw93AqVgGtksHCqCjgN2lCCdhs5C54tWiZU1eULIFDNfNrBw8B1uO1KrVYBKK0aFFANmj0bm36f1utLBDeZEpLc%2Fbj9Ppwv4JBRXXiq7Rvn5Y1ltF4qyws7pL49thQbcfGO6th2wDmHEwAvuqATexruz49imn4jb4oBqfGisRSO%2BIU1zWkDJiEU47qPKffxNal7mecHxrLwJ7bpItN34zmuuh4A8jUBSnaPHajk%2BsueyjjLFxN7qs2IKm5X3abnjN8XXAnduHuFaJH2zMGc3Km%2Bir1zUJWvW4b34SqMoy%2FXLP26otUjqa8bnzXAxRJstrcstD%2FpS0nAudB9kZszTDO5KDLBjqkAYKzseA8pnQ59UofA2ldsOWSAiJWwUYQkSYxfE%2FrbT1EUD9AOUJLNnu0FOhFsBdZSq0vtrpfaBg1T9Jl99mamBBc4lquyI6JKM%2BEXKaRZZ9rg%2BaKnCbsuDk%2BqLPbVVk5RBGe5VP2X5xZmI%2BTdIpCKBadTA4Rv4XyOdVFMIEvEYFSl9SafOQ4N%2BFGDOkAoPWuR%2BL1OM5jFQ52YrZL%2BPcBtaqQqTcE&X-Amz-Signature=21d726b545fbf5583920f42c1848fadd70b237e5f871ef3e412a735186ff202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWY3DSJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCrd%2FfBAuIQt%2Fs4Lev%2BV4zbrl6O0Fqc%2FY1HyHmgiyO1fwIhAObs3yH%2BZrKTuJ7zZixE9kx3kdIwjOrs3OIg5yFhz1vIKv8DCCkQABoMNjM3NDIzMTgzODA1IgzTcT6GrdIsUhR1hacq3AOqWRufvf9GGUiPj08fnToncH7EBcdqYmScuyCGwHeiN5Jlh9Kkqto2EJXu7jTaZh6rBbmWdMja%2B9SX%2BteHBwzV9R1Dss4L6LxGjGoB9P0Iazomc0KrjFKPJ626Cr2JqHhHd30OOhrMgkB6MWzv%2FneNwX4y0yzxHNubIzZFH4KlBcnIuJ76p77%2F0lKUS%2FDY075FDfDSj%2FPpQ%2F4%2FxqVmfr%2BSb1WNZ86CXjEFvemSxDTaSEG%2FPclyXdkGXWixEHo8E9ef3tpoblxmHqOf6jFXjILTtdLvPtjOYbQZ9S%2BSHBFw93AqVgGtksHCqCjgN2lCCdhs5C54tWiZU1eULIFDNfNrBw8B1uO1KrVYBKK0aFFANmj0bm36f1utLBDeZEpLc%2Fbj9Ppwv4JBRXXiq7Rvn5Y1ltF4qyws7pL49thQbcfGO6th2wDmHEwAvuqATexruz49imn4jb4oBqfGisRSO%2BIU1zWkDJiEU47qPKffxNal7mecHxrLwJ7bpItN34zmuuh4A8jUBSnaPHajk%2BsueyjjLFxN7qs2IKm5X3abnjN8XXAnduHuFaJH2zMGc3Km%2Bir1zUJWvW4b34SqMoy%2FXLP26otUjqa8bnzXAxRJstrcstD%2FpS0nAudB9kZszTDO5KDLBjqkAYKzseA8pnQ59UofA2ldsOWSAiJWwUYQkSYxfE%2FrbT1EUD9AOUJLNnu0FOhFsBdZSq0vtrpfaBg1T9Jl99mamBBc4lquyI6JKM%2BEXKaRZZ9rg%2BaKnCbsuDk%2BqLPbVVk5RBGe5VP2X5xZmI%2BTdIpCKBadTA4Rv4XyOdVFMIEvEYFSl9SafOQ4N%2BFGDOkAoPWuR%2BL1OM5jFQ52YrZL%2BPcBtaqQqTcE&X-Amz-Signature=6bfc7f43480942db5b9165e5f09f109058d23e32a536fbbdf0813dc45fa6fcba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


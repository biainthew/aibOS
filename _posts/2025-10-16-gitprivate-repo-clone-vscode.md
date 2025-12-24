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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWO5C5G%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDzwtO%2FkDL%2BCjVOCeiPpElrTOmDCoB%2F3%2B9duvV5SESZOAIhAOkkFy7QtOvDlSQQTlMlmiMRft38uRcMSFIFqOK%2B4aXcKv8DCBkQABoMNjM3NDIzMTgzODA1IgyKRwFmXrSW9nyMNXwq3ANYCY2pko25KpOLIcn380ZxAXAd1IAP0U44qBnUjea6RC5f1Atjlhk9ZnBQfsbZKqjDgXBfKErCr%2B0Rtn%2FksqUj3L%2B28kHDPn%2FuyPxvyaIzpZMdYcHUgQL9gBPowLhtbWlhhH98d8lP1yACtRTfTJI3bEDKoX6IFbJVlK8bxWiy0pmEGwLzMzKLb5SX9cAND9oV3nbSeLpja%2FDMG8ATES7C2jNM%2FQ6cW1g%2F3822yWq9LLjLui69hJXjvicwdgcdU1dcpnWiLDH84UTsLLI4XCVhcn2pXzznAVp%2FHrpXm74KCEJM9wqBZVj6yqN%2FZnG%2B3Gtnk1S1dlO2ckDuN4OgQlp%2FFL%2F7wT8yp6L439qAp1%2B%2B6aMuNp0PUhkcgZ8f4VJ4ryjsxdU224XmBtOEgs6784qR1pvWJt2%2Bv3hHJrnETrQwohSbXPEw%2F%2FisGgqEP1lAJtkzoWeKrd35KmWsekcB8ia%2FgH4GmdBf1QOyoYoivCuzwyfnpK%2FmF6NiYaEtuoTut3UyCSyuv5rqE0qNjoHAhc1h73dEQKP1AsG3%2B5ZueFDpM8gI4qUqYlb2zZZCr4OQNgYI3DhuF4qAGxTtdufU5FyHEsrOqEqHzWb8NdD6eVVb2910D%2FO0dpYZD9LdijCk46zKBjqkAa3NyMJfc9g1XiELgniPgOzQPwy7zi7ncTfhPuUV1%2BVGv4icQg7V%2F%2Bg%2FNwC5VWa1j4avug%2BKtTgdLw3xyBcK6wAlF3mRRijFfBuF%2F627AUHp35JwCDKTaePw9gr%2BmtJ6%2B67j0fHfNkH58t15M8B%2FnOLlGtcdWzkDGvVxRy4LI0qnuHLd1%2BJIS2FNQPvUixpG9KoaB6ku4WtmKyTIepjzYDMTL9ML&X-Amz-Signature=71056b62a21b78acc5a41b41614359c4d6237eafc4cabad6846d2e0d4df37940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWO5C5G%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDzwtO%2FkDL%2BCjVOCeiPpElrTOmDCoB%2F3%2B9duvV5SESZOAIhAOkkFy7QtOvDlSQQTlMlmiMRft38uRcMSFIFqOK%2B4aXcKv8DCBkQABoMNjM3NDIzMTgzODA1IgyKRwFmXrSW9nyMNXwq3ANYCY2pko25KpOLIcn380ZxAXAd1IAP0U44qBnUjea6RC5f1Atjlhk9ZnBQfsbZKqjDgXBfKErCr%2B0Rtn%2FksqUj3L%2B28kHDPn%2FuyPxvyaIzpZMdYcHUgQL9gBPowLhtbWlhhH98d8lP1yACtRTfTJI3bEDKoX6IFbJVlK8bxWiy0pmEGwLzMzKLb5SX9cAND9oV3nbSeLpja%2FDMG8ATES7C2jNM%2FQ6cW1g%2F3822yWq9LLjLui69hJXjvicwdgcdU1dcpnWiLDH84UTsLLI4XCVhcn2pXzznAVp%2FHrpXm74KCEJM9wqBZVj6yqN%2FZnG%2B3Gtnk1S1dlO2ckDuN4OgQlp%2FFL%2F7wT8yp6L439qAp1%2B%2B6aMuNp0PUhkcgZ8f4VJ4ryjsxdU224XmBtOEgs6784qR1pvWJt2%2Bv3hHJrnETrQwohSbXPEw%2F%2FisGgqEP1lAJtkzoWeKrd35KmWsekcB8ia%2FgH4GmdBf1QOyoYoivCuzwyfnpK%2FmF6NiYaEtuoTut3UyCSyuv5rqE0qNjoHAhc1h73dEQKP1AsG3%2B5ZueFDpM8gI4qUqYlb2zZZCr4OQNgYI3DhuF4qAGxTtdufU5FyHEsrOqEqHzWb8NdD6eVVb2910D%2FO0dpYZD9LdijCk46zKBjqkAa3NyMJfc9g1XiELgniPgOzQPwy7zi7ncTfhPuUV1%2BVGv4icQg7V%2F%2Bg%2FNwC5VWa1j4avug%2BKtTgdLw3xyBcK6wAlF3mRRijFfBuF%2F627AUHp35JwCDKTaePw9gr%2BmtJ6%2B67j0fHfNkH58t15M8B%2FnOLlGtcdWzkDGvVxRy4LI0qnuHLd1%2BJIS2FNQPvUixpG9KoaB6ku4WtmKyTIepjzYDMTL9ML&X-Amz-Signature=e84f8f2e6f7320005c3f46de432143aebbaf8750175c395057999a7f96147d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWO5C5G%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDzwtO%2FkDL%2BCjVOCeiPpElrTOmDCoB%2F3%2B9duvV5SESZOAIhAOkkFy7QtOvDlSQQTlMlmiMRft38uRcMSFIFqOK%2B4aXcKv8DCBkQABoMNjM3NDIzMTgzODA1IgyKRwFmXrSW9nyMNXwq3ANYCY2pko25KpOLIcn380ZxAXAd1IAP0U44qBnUjea6RC5f1Atjlhk9ZnBQfsbZKqjDgXBfKErCr%2B0Rtn%2FksqUj3L%2B28kHDPn%2FuyPxvyaIzpZMdYcHUgQL9gBPowLhtbWlhhH98d8lP1yACtRTfTJI3bEDKoX6IFbJVlK8bxWiy0pmEGwLzMzKLb5SX9cAND9oV3nbSeLpja%2FDMG8ATES7C2jNM%2FQ6cW1g%2F3822yWq9LLjLui69hJXjvicwdgcdU1dcpnWiLDH84UTsLLI4XCVhcn2pXzznAVp%2FHrpXm74KCEJM9wqBZVj6yqN%2FZnG%2B3Gtnk1S1dlO2ckDuN4OgQlp%2FFL%2F7wT8yp6L439qAp1%2B%2B6aMuNp0PUhkcgZ8f4VJ4ryjsxdU224XmBtOEgs6784qR1pvWJt2%2Bv3hHJrnETrQwohSbXPEw%2F%2FisGgqEP1lAJtkzoWeKrd35KmWsekcB8ia%2FgH4GmdBf1QOyoYoivCuzwyfnpK%2FmF6NiYaEtuoTut3UyCSyuv5rqE0qNjoHAhc1h73dEQKP1AsG3%2B5ZueFDpM8gI4qUqYlb2zZZCr4OQNgYI3DhuF4qAGxTtdufU5FyHEsrOqEqHzWb8NdD6eVVb2910D%2FO0dpYZD9LdijCk46zKBjqkAa3NyMJfc9g1XiELgniPgOzQPwy7zi7ncTfhPuUV1%2BVGv4icQg7V%2F%2Bg%2FNwC5VWa1j4avug%2BKtTgdLw3xyBcK6wAlF3mRRijFfBuF%2F627AUHp35JwCDKTaePw9gr%2BmtJ6%2B67j0fHfNkH58t15M8B%2FnOLlGtcdWzkDGvVxRy4LI0qnuHLd1%2BJIS2FNQPvUixpG9KoaB6ku4WtmKyTIepjzYDMTL9ML&X-Amz-Signature=708c6afd2b77ac7848dfe95eb95a97b994538ac85b056a3edefd3142bad37cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWO5C5G%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDzwtO%2FkDL%2BCjVOCeiPpElrTOmDCoB%2F3%2B9duvV5SESZOAIhAOkkFy7QtOvDlSQQTlMlmiMRft38uRcMSFIFqOK%2B4aXcKv8DCBkQABoMNjM3NDIzMTgzODA1IgyKRwFmXrSW9nyMNXwq3ANYCY2pko25KpOLIcn380ZxAXAd1IAP0U44qBnUjea6RC5f1Atjlhk9ZnBQfsbZKqjDgXBfKErCr%2B0Rtn%2FksqUj3L%2B28kHDPn%2FuyPxvyaIzpZMdYcHUgQL9gBPowLhtbWlhhH98d8lP1yACtRTfTJI3bEDKoX6IFbJVlK8bxWiy0pmEGwLzMzKLb5SX9cAND9oV3nbSeLpja%2FDMG8ATES7C2jNM%2FQ6cW1g%2F3822yWq9LLjLui69hJXjvicwdgcdU1dcpnWiLDH84UTsLLI4XCVhcn2pXzznAVp%2FHrpXm74KCEJM9wqBZVj6yqN%2FZnG%2B3Gtnk1S1dlO2ckDuN4OgQlp%2FFL%2F7wT8yp6L439qAp1%2B%2B6aMuNp0PUhkcgZ8f4VJ4ryjsxdU224XmBtOEgs6784qR1pvWJt2%2Bv3hHJrnETrQwohSbXPEw%2F%2FisGgqEP1lAJtkzoWeKrd35KmWsekcB8ia%2FgH4GmdBf1QOyoYoivCuzwyfnpK%2FmF6NiYaEtuoTut3UyCSyuv5rqE0qNjoHAhc1h73dEQKP1AsG3%2B5ZueFDpM8gI4qUqYlb2zZZCr4OQNgYI3DhuF4qAGxTtdufU5FyHEsrOqEqHzWb8NdD6eVVb2910D%2FO0dpYZD9LdijCk46zKBjqkAa3NyMJfc9g1XiELgniPgOzQPwy7zi7ncTfhPuUV1%2BVGv4icQg7V%2F%2Bg%2FNwC5VWa1j4avug%2BKtTgdLw3xyBcK6wAlF3mRRijFfBuF%2F627AUHp35JwCDKTaePw9gr%2BmtJ6%2B67j0fHfNkH58t15M8B%2FnOLlGtcdWzkDGvVxRy4LI0qnuHLd1%2BJIS2FNQPvUixpG9KoaB6ku4WtmKyTIepjzYDMTL9ML&X-Amz-Signature=cde076f8b254b099b54810c840d4d3733a45cb4cf38ff0e27d1c30c2c2a4c24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


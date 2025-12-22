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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3SVWM5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQC2qA7Cb2%2BsDNAD8C6uNh2%2Bz4fOlOo4MzEX1dosIoez0wIgL8pM25FMFs%2FiRMSJnvPhXW5G41B0QljJ1IliTGykXbEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpSl0LB%2FXJ29%2B7kiSrcA4TLLeBWfEpqSGU2TGlbGC9rpCaYut2LzVdPnuPHQnaOxxW1b%2B1wSpHUkUhiQqqpMT8fcnI9kqkF7l131AODYfaISUwpov56SrfyeBv2sJRpjkbg6ZLeokZkRbPGKpJz1H4MnsUCCe%2FUIrUQSmOKPVymn8uFqgDTGZBmvFujc7X%2FNQ749jfPmHhZrMrGi3psa8bqgSDcNLs9kJc7Gaa%2B%2BCqgZ%2FCBt%2BeAO%2F5o4swglJ2CQTZzwOJXcXjiHifecz85l%2Bp%2Fzz3LOD%2BSTuN7gY9ogkEhFJH7%2BwavbfnZhlonQcnEUMI35OtpGx1uLPb5Jk7XVKpllBhDY1r0mZ%2BGcc3mU7Vov92JQDi7uCwFDUu3mo5ppqZSlrXv%2FxM0OudN3Z4Rwm1VaAlMi%2BLVUvEssrkQTh7rX%2BDcghOJKdzkf5Av9ZWrjGaUbaDBnjcZdyUM2QOd9ZQpycMADcd%2Fm7uu4nL7wPjPNatrpQdP%2Fj3sv008OyAyiUxK14MNIpuEwzadkPjYXzEGZq7Ay5C5BbOZG98xfKlEZ%2BDHDTWwZU3R74DXB%2FxvZLFUi4XRrTvIFb6A2VQEtJxgiUPwGkaNNHeNEm7j%2Fd2yrXYGT6E7AeGZeulbrJXGGeo0HXkofFMVt3AFMNKVpMoGOqUBDeC0QaaSyBkaUv97bBdRBJamY3%2BZfVh4x64OxrL3tQBUHdYikrPhobtoQ0q3eRzGWfDKYQRCtDDgOJOfzKUyvBsyl16XK1%2FgzbEIca4oDVwy%2F4tuhyVU0qflXTXcspKIuojeC1vDiZuIszFr5aKmnqDpracL4%2F1BRaQThG3ZwAO8oLg4Uh3ErL26xfoEsAYEZ%2F9f%2Bz%2FPlIe%2FBwrwZ8eA62FrsdxD&X-Amz-Signature=e95902f900fb5fc7096e3f46553f62f11199a3cba866370334e9e10905b71bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


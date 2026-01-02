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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHR63NZH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIA%2Fp%2BAlcWq9PW2qtgjUlq3Gh6RDb%2B4hb5%2FKVxerEr4U4AiEApcLWO%2FkNflNLmk8FrTz%2F9NQKO8Z0x0KGduCwYmTx8pIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJTdc98Lb9Mx2px%2FyrcAy17dVT4FKsTB2x6EzittUVGJ5kcrSaySU0r1206HgKKyjXqBAd5AxL7ZPQ%2Biwm3pnG4%2FzIfMJ%2BdbzCCJzRUFiHxNa5gNwaXMq%2Bx2M%2Fa5%2BYAEVpMU4wPF5GSzAGPTv7ue2hXH1KJDKovrmq2PYHkGxszxR%2FEox4u9%2BID715L9ptHoARFDs%2F3diiDkTVaKhQp4FPf6%2FHPcYZwFD9IEFbiTxBis1CRR1wHPUhholXqWAoPWtRUxr2WL2SfnFtIh6RyZSx%2FvRcTs2ySLlvK9oivBIeXXEnYQz1w1gzw%2BUe32WMupF1zBP4JTaZPs0GD%2Fxu5XOFRFEyIDL%2FnVxPY4m6j9giEvLLIY63dXbHZxppBMw3IeOj5Z2ACxD7hyQLE3ZgtZt4ltJ%2BMYIxmSMbfVzVJPwzrsQXrvCgjx0J7KbxBdT%2B3BlreTlBnsP18aBHB6jpHf%2BenMC%2FQnpufLlRaVAkeZ1keUSmoeooRv3o1TOtV5DhYD4LnuZRLT1kPTsBPL7qAncIkHNAbV2exbE%2FqPH3S8NYtwtSKgqqPH8s3NTsWBIyli1bF5qet4xfQA7IOQ6Wv4YrgJHPonaxDNpKXiTq5BRf0rWHeAniLpbTZbIBbm3HfuMnx5IoZPoJZw4F3MIKb28oGOqUBJOw4sOBszvB21VucJ4xvIvSorVhUYoMQi0eConqmMjsh8K7Ygj%2BMq21R31RGRtk1iBoxRRRhv3lTH0eNNxhutEHYHkklk3Wty3sZOusxhLzD%2BiNXfKGXv7qksF5Klo%2BsWetQgxlgZ1c0IkYEAT5cSHQocv59yiPSAdZDQX%2BbLtT%2Bp9onkESg9JYiF71NsSxhE1K7xMm6JjPvF7MK6Cn1jvQxYuC5&X-Amz-Signature=dfe54d97290b57eca52f9befa4867c27de17615b7bbdff3a4adfeaf2b3f3c744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


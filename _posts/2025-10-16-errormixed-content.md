---
layout: post
title: "[Error]Mixed Content"
date: 2025-02-03
categories: [general]
tags: [Css]
excerpt_separator: ""
---



**에러**


![image.png](/aibOS/public/images/posts/28e0a7f9-441626754bc9.png)


**왜 났는지 ?**

- 결론적으로는 `${csPath}` 를 안 쓰고 style 태그 안 import문에 `/static` 이런 식으로 경로를 써서 그게 `http://scrm.hdel.co.kr/pc` 로 리다이렉트 됨(302)
- 근데 https로 로드된 페이지에서 http로 css를 요청했다고 에러 발생
- 그럼 리다이렉트 경로가 잘못된 거 아닌지 ??? 약간 의문

![image.png](/aibOS/public/images/posts/28e0a7f9-8c5568748880.png)


**해결**


`${csPath}` 를 넣어줌


![image.png](/aibOS/public/images/posts/28e0a7f9-328190856da8.png)


**결론**


import문을 쓸 때는 안전하게 `${csPath}` 를 넣자


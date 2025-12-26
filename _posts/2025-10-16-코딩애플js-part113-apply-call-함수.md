---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGETHR3%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBv5RrVy0VGHi0m0p2bFInYcdmmHjSzDiWNB7VltNWpzAiBDnACIQ0WnsKIlUKUeQ8vXPqKfFd5xwRd3DHbUpWK67Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2BpMU%2FE0F0eCcZU0MKtwD78AnloHbVacuArymcsDT8jSh4mfMGK0Hth%2F%2FPObzCsBOp5S5oFCViW1QIFrnJDx59Nvtz88khbS%2BFMHBR4XrS%2B34mWWXJezqtGS%2F%2B0IJXpxhiTh9Hh31oz4XdzR1cK%2BfUXaYm5feH4TRHiVQF6FX0SXGqgtkIQSQSp3iwt0RoaZYa452sVoySYur7PoKU1rnGdq%2BD9ItP92Rl3qoPZK7zoCZC7IqvIeHgCPlntYsJqKiexC12wTzw5pcJcULEasLmN03RaCITOOyjiPYvZfXZct%2BSWxmrPn79d1zNsKySOjga0G6ROY24JtUcXiL%2FuY7XuWC906bNWe375zXoZn9AGaL45HNkG8ijK9zMHpMAFMYkO4DBLSgTc0fHHqxWygoLp3c1LiELxDOByIxXcUJFZOQfbaT72hAIUeQ7pKjcsY%2B0eCsuxHKhnntvKCNXG89oLmj0IJFNeUhRs%2FHyBCO6sh7c0MHP5I%2BWBLXFNLiQ8JXFuxT0LxeGBH4CfT%2F%2FLbVBvYCEcJ2k9%2Bd9Cy5kapABTIavt8c2Oh4VzIJ%2FSQnZWLDelVdGvrLd2OxrxkXKLsI64otYrsXQ8tj%2Bdm9rYsu%2BQuLDpe9b%2FCKT4Yaha%2FNtWDcmYCAUdAcfmrZMg8w0rS2ygY6pgECEZs7418ug%2BrseXKf%2F7Y2J8xDxWx9RUAjK%2BZEXBzq2dqW3jtN2Mz0Q30OpQuTTzlVHrIaq6Av0X5Fy5gR3IT5Nh7Se%2Fxwkj8CABezET0%2FINqXgLTfOUpQrT7sTEVFwCUug%2Fxqk2QqRT8EVCkQJQyf08bHgL1EYDtouUczHQhwBzC4iPCxNzmh5RiqtBQ2baBzJXQ0lTccciw%2FBXlBkOnt13AGH%2FZd&X-Amz-Signature=0ed1271574ba4a6962509ce0abc20d50d4f64f56791050e12ff2cf973c4e757c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


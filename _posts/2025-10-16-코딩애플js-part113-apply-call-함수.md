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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FYPFC2K%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDH%2BEk0T%2FBZh%2FQEYHSGh06eWtoZrU2Zyqiku7SPKqb%2BCAIhAMIbJ66Lp65a74TJUfR1RSzWkQrNOY3C5jaaEc%2FCIiHeKv8DCC0QABoMNjM3NDIzMTgzODA1Igy1Sdi4s6qd9WhIJDcq3APBgA7CctRHmIKu5SJ5Am0JxTD9v%2BvBEwZb3CrDZLlezmCA59jFkHnQwKijcuj37OY%2BpaSJBSGIsGwVEzsqzOwF15BbmwaFUsWjrLmQs%2B4BdK8O3vrIRhcjd0Xom4tvCWLQAIMaqC11nTVa%2BEOPulSrXZha2u3QYRir8OZiSxVrNhu2ymjpNMYFtNUNo%2BhnbnTYEu%2FDAXAbZV2DVr0Qz5q1ItEsJrua%2BOtdkeXMJhSuh%2FE%2FGSkrqKDrv0bpsw7g%2BJvFGOy5krJyV5A64fcvj6r6t67mkl1c6yV%2BKIKs0BZaZpCFDL9x3iHtCtTUrWOsdtYOF70ABb41UDSqaQVwK8SVJgYbjHbaXFY4HLjefmqMx8CWEJ5kYhiUFVk8cfP4x3lcIflk58yopD4rpnqUGxzt9IROx6bfJ7P4DD9OpNXLnlTPzx9ia%2B9%2BCOfDLwipl%2BIhjUThQxLMl%2B1LmIq975A0MIG3NVPHF1QCUSONoRmRB%2BbsaKjsJwvUv%2FFqtkMIkvpxPvCf8rusENyHyAWSpJ%2FvROk1JwY0j%2Bdx%2Bb%2FoLJ6BXdjVfyv47YzLKFbGZbey0S4WBrXO0fRBt14oFsrDMWJ%2BmLaVwchdj%2F12IJ7tV2HE4mYrWeAnS7q24fIDGTDXg7HKBjqkAd2%2B%2BEpMuX1i6QgX0TTSI%2Fhw4UZMlGzyZVdO%2BezuJM6aYviYjT%2B3t6bsNqsBas0MQowZSaS9nKwyum4UfhVdeom57cgtLn%2Bqwnu31orLLs3SlpFfaQwVkQY%2Bj0gDSxtvTmrQO6o0DpSCTDmBpK9ZDR00SHeH2LSmRJ7hg1KhxGeLvTRTQeW0qIHnVdEW6rSUq2x8gAHBLRZj8LVtIo%2B4ujMERpCT&X-Amz-Signature=432e8553675b09f401f5ca8aad6b08a9f4f6b230f7cab55c6ea18a43cc7b74ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


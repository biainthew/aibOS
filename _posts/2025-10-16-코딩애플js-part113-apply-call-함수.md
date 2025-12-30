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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSW2L5J%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1L42nz2ZecqVsqFYOKpk6N%2FFc5XAqTUTWxe0GS0QhWQIhAIMNYTp3bh%2BTTkM8Bih1YE6NtXe98%2Fc3jhfhGISRWrUFKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm9rljLkerTTXMN%2FAq3AO%2BRWYxE8BeIyZ2Q%2F03nDOXqO9eMpmmz5A88yEAIqyz9a3m7Vqr4LepywJ1%2BqHzoaPiEBBO7mXDUjKRfz%2BsZCR5%2FdkmdJ9Db1KpzOp6xTGVknPFHPRS2CtTIBlGj%2BsyxlUJtZFTQgHbG8qk2zf06a8lD%2FmjG5JQUyyAcAtNYJj6Tg0Em%2B15RMcxqObXcoB6a2rD66HaEtYYez%2BUvmj7DFQjd%2B%2B2uDYNJ4k0mgubyAfkeQOKGCInfG5Wv1ze3Iz%2FP7iWvi3ciWW3y%2FxTUgHoHQpm7G4AARd69XFv9jSzh12gNvySZd5GS7KLpTG2V72%2F04d1sXPDV0n7a9cC6hrnytog3J6EiCDGRC0wyQVQqmReyINZ0GCdmKC3z86TpceBB56rYOhHGQObhMY%2BpN7k%2FKeXpb%2F%2FxCPVCNyZm1bNNDgcQ%2BUvLGcdPPRKr5ltp%2Bb4rAFlsglsT%2B6JTQxbJMOyYjQ8S2AnnFS92NDCK0y9LkgL2O9ow1RAIniqDRo8sHD4eEm%2BZ%2BqQ11TH%2FG%2FR6ZiXUH3Dgx6%2BlzoHh0T%2B7CBGo0dVL38393nmJ45XldxQv8iU9uZDW6600DsfE9QRQHlUpqrupClLRgZJLV2THj8oWgzRV6yqGzP4MuaVRr2CijDQusvKBjqkAfLVsdFjleg5yGvRRiE8Of%2FNxYLVX2NCmdbHP01MiEDWwkC3J8K573%2FEfVMaFxbCMICrHiCxzhecWjbnakU2mguZfjc6la3cjeLIYtdmhm%2BAKQu9mqerWxTIJ0D8qQFxzCas1ah3MgZBHu%2F999Ue7ccIP4dfJdUeTcVLm7GqE%2Ft3EEV2iAp60R9RPAuwtYPYnFRMfp5ctOJjhcBGkFFbVh7bzOEe&X-Amz-Signature=ce5d58cd90708666fa6d7f8f26ac42ddfd788b3ba60790efe2b49b035b440130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


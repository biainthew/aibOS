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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUN2BIS%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDjg3qNIN%2FhxX%2FH0uUhzNVNEQw99uUtuAOYZZNCSSKSwwIhAJ6IuzzTvtAdpbUrwLLjisOxKK%2Frn3OktpyK14MxhWW5Kv8DCDkQABoMNjM3NDIzMTgzODA1IgzGkXK7jzkdmTGe65Iq3AMW6bOB0CBodBL5nAvcLYd1DHpyUzccDLqY42G6%2BGgHN%2FVaLkafwPdCymu6NEb%2FTnQvetuFYi2km6UEn%2BgJ1Dxp4s%2FTOP7ojSGHfKMnZBe0Qt3vDL5EEPu8I%2BXwCbX02Bff7sBP02Ok0P0p7bdsruag9fpMO11nWelpB3NBm3SE4Z6ggR6XBoIv8r5OsboPLEAaVzvuTc743i7qrxl7Prlgg9C3Hu2bzgP8D5Nrc7k7LJvpqPpUHVT9NXiZcnCFLooFUwtmagBbGBblPzb3eiyMl%2B5EqX%2FiS9VjPXPrQojUPLWpXNND0u%2B6pKHVkIZKuAjYMCIJdFZaiiSMTueXIGDRJXYF8pGharCOmYv%2F4oGrjBa73Umx04j4bZIw2ZvFKIqpM3MHf7M1%2FhVOgfiLU%2BXRWrzsFm9QK%2FPpLuWylrQPLHN%2Bqr9Yf5oCoonZoc2FI4pv83wCoW68MkPAfdZL5kxpCn%2FurHycEA1i7HvvsbEdZ4FY9E3WjgtmSy0m7HCYzpNLUQVTeZjk5R5Xd%2BZveXE08r43QLrSlll5oWfV47CJG%2Fqtwoyieroj0ORpGgiulNJPhff39p7EsgymgK4owAdDBZWi4jkvgLD7j5jC2EhbQTIMSmNcSX0OPibUVTDHt9zLBjqkAazOkJW96iwTFhb5USeK3UPMplXo%2BoeUs6zEI5iZG8LBhKFIYpqOnceVphEPKEnrYd5Mks%2F8JOvBcg1y1L1Yby%2BpdKzu0T1K%2BtRXSWwxs34C%2BGIxUawuvgkDAltCJPcdJMDx%2BqGSGcO%2FDjSW8Efnk2Abx4Y4u%2BURg4tquoXIfKWWHmvm6jExpQBisX7Dnfc8ZZCgHeJSjV2emHDMXHqKxpPNiAdV&X-Amz-Signature=dd3e3939a21bfb029b62c05a2388d3739cbb57d7e7b0b790d2e6de2ba7365bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


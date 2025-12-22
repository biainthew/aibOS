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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVSHXXT%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD0ja9mdEy0kGWSwMhc8xn1rCRuQ86%2BNDY1%2Bt1j7QY%2FrwIgXL0YHLmOTxSqFu6AprUr%2FP6CdQh9v3HEMnpqjB9QcYoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlbcgs7NXq0nXT0BSrcA1BJTy%2FVIVDSJBQIrrYXOpZ1zfI0ci5l73TdmvPT9tRIDMe74%2Fx3ZmctVvAb3ZkR9MTtbIEsLB3emSvxraUZZVkg2z274ef8zdO3WNpsX88xym24yccEcTbXFufaeFlVTcKaCLOlEVM7tcHD4H9%2BtU2LMOGlhTFy7dpqxfynYRGbQcMZsbEnKeFOTe0UHzM9mxuyGz7zZz1Cl1Bza%2BQNRK%2FMEc7m0NiLLKt5PzFlqCDJ6TZPCio5LiBwyvHj9hNx8YF%2BxlgrTo2VWjxoBrsELMmUP9JNXebBWpwnWsQ0tdp1Tih3h4wLKP4rmcgMsRCxJckJz6hL%2F5iGeZQ095IYAjuvhm6K%2FjOSgZNEVqm3mvHhsrEdWBLMdTMgoyJwKwotywemmvZ3RRSpcVlEfaRivxhGc6S8u0ojfUXQisKf5LqaSAofct7xwmsa8PCBfza6Eg2lg9ik0ujuNA%2FSwThT9coMI5sXTL2vPopnFHBlxTb8OnsOZSY3pMLsI09biCRJ76jiNFF1pTmeiE4EO5V8Xq8NyWrCQ%2B0JeIXElCGgSVtgKhRD5oXw4fEEB8VPwvt34WuYtAorHz1nmwCrFelzLg9J1rJxyKNS1PGl%2Fw3W2r0HCQLgUDLzcJzKjGpfMNKVpMoGOqUBVclBHNwikM6PsDzt84pnQVLl%2BA1PPQ7H9DnDHiEFhs2aQx3zwx13zN1J%2BwcGlzHnwW8Hwtkbq2dxNfUgF8AxDr%2FtPvDPX6%2F2b436fUEkZZW6zmLWjR3%2FIOgtc8TOsbwMMp5NUwUh%2FbzV%2BZSuoYrFDc1I8fWRebFVqThqSlqLIevctrAscpvzHLxHr0pClIvT69EvbeWI%2BilaZtRnjkYp5JDwHpNt&X-Amz-Signature=81dd02fdcac390cb8a49b49dbe9e8aaf4a33d535adcdd8e76074558dc2081fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


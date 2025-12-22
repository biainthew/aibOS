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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2ICNII%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICjVC9pptPUDcrS1TKnkcxHEHVHaTkuj1RYXm9mv7vTxAiEA2XNi7p4zTdvIGMI%2FMMCa10J%2FrU0M%2F%2FZE47FG5RAQpDIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJtPom%2BsQdYEviPyrcA92ocfUn7tNqyrb3Ny1LCHm7lkmY80NRa0tmwvIsRZ3cx9tOpOMpqn9Hk%2Br9eIDXXqGD3ZPdK0ZuXj1EqZg%2FGKkiBmtN%2FK8yyiDfFmgZ6%2B7qF9U9MXNfYZ7sx80Khc7ha3thxaEq5CG4jHS1nvOpdCUivvOH23FXdDjNUUXDDDPXRBisu14cVh0tOKF31DW5P1%2FN3xYG88V929udqmkLs8wa76QShf7nuiUGm78V20XvysXjgfZtl3G40iTaWUva8aJhm%2Feb8LVRPGoseKYDCNck8YFuOGb2nT%2BqP3tZ16AywKXG8PuFR3fS4%2BkkR%2FEy7I7nFviicODzU2Mqu4skfeOxbq4BHtGiMK%2BQdbnCHwBl7bPta02b8BbYa%2FdJnBvH7r93zH1RYy0H7Nx0YdI7im4s6%2Fbbfl3N4tmfmV5NnzIULEHebYDh3GLBQSG0vneGXUQGaTAmLsIJnT7QMCCq3m36c8Ur%2FMQ8Z%2B353QfkbeNTzvjve6UKJEQ3OucoYAMdPtY1l9uCKu1wzrmsMe15jLvMESTkU4elqkV%2FE%2Fhw6KHP2jQ8s2fy28Na%2B3uTXdfYAAB%2BeY8yjQ6mIIw6CbmbXPLRh7d77toIbikb87oCEcobovn0i8BUoI6%2FOOAIMPOVpMoGOqUB2XAkRXmRtLGPCa5bPQ238%2FrReIG3YKZlrLBOQUjrSFSvSj6c4iudOWmhQ2jV%2F%2BA9BW2Gpm7ZdcguE1Sv8M78b3lAQkjW1QRoWwdDmO%2BFUwWaUybQ0%2Bv%2FQvr7Ht3aR%2BRUum6rTU2%2B4n7GXagoesSe16IcjriXM0EKun7W3X1e3iF9HR8UaBi6eRXBLpkrZOBdu%2BMThQ%2BeYJlivdnCVIFyEJmffMyp&X-Amz-Signature=3b12e856e7388f1923586f95442e2177835697937a3cceb1c76a88d429737778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


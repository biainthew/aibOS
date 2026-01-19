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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMXTSGU%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgtcV8WnWZZA71LAZQUQ6s7Qk2L2%2BgkRuAr6kt2W8npAiEA3hvWgE9elYDNzuLOpFs2j0yloVkbDl6GA%2BAnZPraMdwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdxQBaSoC9fAvYnMircA8d9qqdLPZdHsa1h9SK%2FL%2FLrgYzpmTeY4DjEqlAt2OxrptcVwQvEI7GwGKixa%2Flq9leDwYqGwHkw6YhaLE%2BkdAj1dctJsHqpen3pl1POWtOtnWQyUcyu0SmRR%2BH8Frw4rxMDcerRWhzv6WASf1tibb4GaB353VbMnVUcXYJtDKSsGhyHAI3ObCz%2BkdorsKZgs2umbNDkYvLca%2BSmbVSXOi3Bcj7pkxX3o7t96XZl8D88t5kYx05HIdfbnhZteuTWpAanRieM02uh9qpAAK5HDZQIM5tmwfLJgYFfmItuYiRbHxnNkVGDAGQI0N%2BpNuQx1yr5v9vbVG9DzPDGsJqg7968EHbEIc219Fx1hktaL8jCVT6fLm12FNZTEV0G%2BQvpGvfM7Nd1SxuBYQV4rEptjvHKXC6gIDbEOSoPYyjEE3%2FSBnhpXfScB%2Bu92KRHoz33aHwD7wfMYxrlUWyxFlR%2BSxMY3WQ1pXti3aX3VXg2YG%2FRPRwJe%2BsDyU7AhX35Eba%2BknlictXGumS9Uirgfo1ROprQhRmIh3rkNAcFxisTmeVLIuq1Z4BfEsm%2Bsu7XXCY%2F%2FgQfnTb14dXBtxVkCXmFItkTuq8ABFJbKIlyJzNNP86a9nkpkDMJqpupJ2HvMJnhtcsGOqUBlrumUnbRA4m2bWHeiPqT9k0Fb4pv4mXj7xWa5PEh5IZWlEupmoD4YG7otJT%2BPFBPFZIQJ9RPV%2F%2FHNoMZWD%2FsE0v4eV%2F7Z14fo9X7VNEJvFQG3snFfRpy9abkScfVvZ1mqASl9pAFg7gACFxaRiBAmERM%2BPRP%2Bz8u8kvZD%2FqTwnGxaZzxmqr6HUJ6F1okHlaaYoyrmwERtmhrWCeakKJkn81JLSRK&X-Amz-Signature=5bc1b3d320ab6d6fcd877e987239bd42d79370e3e7a68975a40c4ef8348a2705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


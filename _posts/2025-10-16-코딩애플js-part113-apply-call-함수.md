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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRLJO7J%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEcNvOgxiazPGzUcsSPYGgjtcBF3Y8rvywMrO2s6WYuZAiEAsDPIEAcaTw2gxhnKAEP06sLuMswnX5qM4rzU5ROUCeQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B%2Fgkog3DykPCZ%2ByyrcA6CXLuYn7XSLEoj21cGOFgUifKX9%2FJWcFU%2Fh%2BwotrleXdLhhr4FOydnHdp8%2BEzfhLHiF4HaRzT37bXOBZZCn2inico6rD3nfNV3V11zxGDWqbgmimq%2BqaPaHmdVWJ8KiKTlFR0t91%2BbfjvQOyE%2BlxHE4wXGt6AFa1PWP78kVVu3io51bI%2Bmc7GPiQBzqSePusKvEj%2FTzjvAIhMzBc8Xw%2Bz5Dw%2F%2F0FGvG9ZvWoBL2gSzNf7nXgaJKaCkMWvsKm1EYdWRGoAHqLZb29xxB%2BDYgy%2BWmwnZX4mh9rVCEy%2BkesrFxDssAtWLdmn%2FGtvJgWu%2F2OSt9AV%2BjwaxyqY6eA8cWlzGXpY8fDwQ7jxVMIl3ibMzqNpAswqlc9w8zYPn9ynShgZ%2BE0UaCA33bT2LPVFjxB0JVty6qd1IaB6pRpwtaBUCDnm6RVpqd9yZwx9a5U62QkKjDrSfGC3%2BSI5l5ZezRm4%2Bx17OMCkIKcV2yeb0E2NaBEP7HpUKlHVhUEc1KBWPxHz2EL8NyojT%2FjQ8PEuW0uAI3ZaRPpsTmk8nsShOgOCg84aNE6RMORB3xsxoedfvsiBoIDEMLPTSUQbXN7%2FFXk365wYubfXfrH%2BzbWVG5detH6bLbN3i%2FS%2FSmqk6UMKDcxcsGOqUBZBHINewDOsoB4l0DNgUnns1ookUfmQfLQUAg6G%2Bvi%2BARNy3L6hkbFDkaHI%2FGbR%2Fv%2BFlbnmw%2F5oDtGkBeCdx8QCZY%2BRZZEVTQ%2FoNmWmCEhl2k2hkRWcHWwG5wI0TMOo1dW4j7RloBckXqpRWmnvEp2d5HnAihZioIE4dBSVKM2DT68Oej8wHrGF6dG1Up%2FX3lpyYDqey9rbSNt1Ze8KC8F9Wcm5rW&X-Amz-Signature=ae4af5f266d852a3d7d43c29e5a3d5b7be553dc4c5d27b76a7b10bc948403cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


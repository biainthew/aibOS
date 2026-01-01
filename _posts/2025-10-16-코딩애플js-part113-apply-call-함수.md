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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPTD5YS%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBeXvoTZ9BGFe6IDzm7mt%2BwN7s9JhmHq9ZRp%2FNSmxEqNAiEA2L2201QY9cDtATuAxpw7aadcAC7%2BpBBuQ7S%2B3BO4FpwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfhqoUO%2Bj%2F2JwA1ZyrcA5SNiXr1hTLMMUDJdLX8K%2F%2FU3HAi4%2BvjJRclTomsMxOt7H%2F3pSIFJY1VrQi%2B1AptCvnOHeXJNz8gIMYfDedILiBDxNchU92ydKyV%2Buk52rwQu77VMXWgphefS%2FchvcRaYJTBd0rkE0ye2gh4zLZ80YiJZ0Y4Jpj0LcEKU5cVmQ8Agsr763flzoMTmJ7WP6kP7l83xz6pY3JtnoCG9gWTQyX31ya8mSfW0eYe4H%2B3T4uvyAyKJlIzoJ%2Bf4VwPJUlOXlY8PGpY%2F3mf7E%2FYPJJXDfTWC0BsVfCBw9n5pMtowZA8rEDgox27y0jE6EYUmPrPCZamSla8n0hiRjZzx6cHqEVKL9hPuAflT5XZTweB4b6p1g8wzPXYmxNY0MtabljCZX4TAE3uuyuXfe0DLMa2uDKmvaFTSMlj7pDJ5rg872krQQLZ0C18NVL2X%2BYu2zoCBRzyiiPsERLHR570895FMKXrlNL7t57NYUc%2FqEOn7LYRPtbN%2B2kvLTPwQ714BFx1%2FRdsHCq%2BLl7AUrouXL6H90yUaavgFjZrsr6qWy1g0dLS8In4LRqRBuki72o3eblCwUcivW0zecVxji0dvOKUiV7ImHlnN5L2okeQ65E6wRsa8S2LJJxanP8q3L%2F3MPyv1soGOqUB6ECnrueb9iazL9nBtOKiMR4In7VpSJIr1Um7lnKnSdS4AKZ%2FL%2FIQwPL7VQg8zgYV59zpO1mDmwLQgaDkWvTC1kzyZi6kcldJpQzR%2FSzwaZlGnuCQ6I41rOqCFpRQ%2B2rgUAA1sRN0kQjqaV6FXus33kWc7ocE6uNdq7QJTZ3DiJEiwrst3bRD%2B3rs3Zq9yXUyrZUV2NPK35XAcZ93seAebdIeOsA0&X-Amz-Signature=70bf0d0137ad4b954ce6b2d64b5ed25a6db20ea52328a33741aeff4846c65160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


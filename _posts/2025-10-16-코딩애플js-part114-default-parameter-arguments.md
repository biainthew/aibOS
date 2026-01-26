---
layout: post
title: "코딩애플JS Part1-14 default parameter / arguments"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### default 파라미터


: 함수를 만들 때 파라미터 값을 실수로 안 적거나 했을 경우 파라미터에 기본값을 줄 수 있다

- 들어갈 수 있는 것
    - 수학 연산자
    - 다른 파라미터와 연산
    - 함수

### arguments


: 함수의 모든 파라미터들을 전부 한꺼번에 싸잡아서 다루고 싶은 경우에 사용


![codingapple.com_course-status__%284%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/b0c2aa08-b05c-4536-b26d-0e419c955654/codingapple.com_course-status__%284%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOIWPJA%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDsJIED64fhxuggoJgx58w%2Btk7D%2BTYuwqAnNbLbYZSbDwIgXMXeeTyqoTVQLY1gtf4zDBmzW19OnphwfgLlbLOLHXQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDISBx%2BhwGideqK3EjircA2VSN413wKmQjwocKjLcY3ftRNBK57O2i%2Fi629Ov9UzJwpCCtYR2cgt2JT6UHqKmr4LcWCY2PGhzqZwlP%2B4Mi36uyybYFgAqfK82UehgiQp3gxPdNqhAq2jslH9lZRgPG1sljykfDI4UVNI5lGj%2F0C9XTRBTug5tdcUIv1vq5Xt5QTRj5dhuuc5OrM2UEyn3oS6GvW31gFTfSHBsuPaZwwjsWPvY4bvawShmBzSI2ejsWrPdqKhyjmUY7AnCFwc2WGZTe9YhMf19wxK4Nwus3pBK%2F4b7GMi%2FdVzukIqG8%2F1IuvR1XYxQhefoRl73oF%2Fa2d696u3AAeAjhTTvAC0JKmxfKieNmSEBizFdoOtmY4hwgNTKJl51hXos2DKbCOZ1zCUsBq8b4pccOo8KUVxGue63gVOOl03VEv%2Fr5KBVH2KhyukbrGcsMWKSsKJlRuee2Oev7PyFslYnQwVZ3TLqlOQs7IiBb4uGRpQhf1fptO41X9Ghgno%2BWT89C8cgxAFZUVh20GRvhLpGvZ316%2Fod6qgECVktqbzCXZrab%2FwIwgk8QqE%2FITYICskMsAN16nkP9HDiIHj7If9siMaxD6%2BTKmC%2FDdrYdTVdNLTKlOKHR6ftuUniRsaU%2BvjUwG3YMO6a3csGOqUBIqVsRn7dXeWjK0mqThqmULVxB1073mJDd1%2FnfL40NfHUc8dcTV%2B8O6zMwt9X7taEpBwgwyiQbNPnH4LCDa%2BOjswMW5xRJ%2FRlq%2FCDwkmmyR7Wg2IntVru%2BnzaZ3W5r3Gp4Lqk%2FEXEd%2F41sezNveDKvRRqKq220DfmyxE1JpEgxSSPHBVY3tGFnb9xSaRV%2BAMpqaQZrSq8GIrhcUcqgjASqBHCNaxl&X-Amz-Signature=1f4fc73397187e683e16edcce6da2a459cd4acaccc4ddb49c4dec339e280b37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


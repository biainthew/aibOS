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


![codingapple.com_course-status__%284%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/b0c2aa08-b05c-4536-b26d-0e419c955654/codingapple.com_course-status__%284%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZOPNZE%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGGuBukLbCpUPOIAhlHUXVW5SWB7rtFyf%2FQSqrfZVNONAiALaKNz4Sf2EVPl0%2FVCH9iu68AYpw%2BSjdYDS2tVnKYr%2Byr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM9nxI3hdHFFapjIyyKtwDA414sa2ICob%2BfYHjXZUD3ggJKZ%2F2fRjOeGMBDOU2rov5MPPHNgFnH9RmT%2BEa2eCOOIgwZowP0n8VUMiZlkbVla5v2WwvEnLrjqkq8kiTAx7xKANe2IkM89nTNbTxxDco%2FRzFzPxHUm0Di0%2FP22oNpUB%2BaWreBERR6oHEEiWm%2FOY%2B1oy7K5e1qLoXY9GZH0imBiMITn1MOGjriPpU4tNrVn95Ssf1ZuHJNgu9K%2BIzsaEkRcjww6axB6f4p7xb1e1iMWepEAxEmOexjG87Gh0lQKqY46NUT2VPTJnBXR3Ng1Yz%2BcrTI1RITipgIcMYbfM1XjhYhUechRP0zGsXEIja2UzJOAVDAJQRQI5126DTgiFuTGb97BXaxjZs4mHFlr1EJF6iRPmGfp0wB3lTZeY%2BvWUeJrtjhQhuWRainHL5IEqyOXgh2vT8sEVxnFwB6Q8NqHNPD4PQgwXo76BCGdTFK60bwLJ%2FcKn3dTEVyNNyxkk1wt5FMygvzwWJUw6ivfMEz7VPllHcFZYypa2fvhCxVkIeEDPoUuQszpXPTIwF9U%2BfP%2BcR5%2ByJrE72cdUaNSad6%2FcWBUzVgBJL5rQYOKEYeLyMpoUt20N4NefejuD1FJA3UppEpH0NlOfbVAswi%2FvcywY6pgGlz4jyF%2Fmtnh6BWnsoJoFMJi2YL8pKv2bY9PaAHxnl8bbQbnrjWlz6dQuEFeHNSicwpvGCLAdmA3%2FJOK0y5YIjKORmDfYSsaHu1518%2Frrw5b7EzPI6YXIPu7hUIeg9H412m7A1zKJeP6cfHEvnwFIUvn%2FdXxljm%2FCZzXIbiSCQ0HwSeHsG77AaMsXwDMyhSz4VWkG4ZwiOiE05GeT1PThaLhCWo3Ei&X-Amz-Signature=486e0a8f79599550c34f6718f901aed3b572149ebff5b7f8c49430155a5cfaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


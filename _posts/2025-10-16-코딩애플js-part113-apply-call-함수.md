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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WGXBOM%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDOM44OJsPCqRoOZvEocLciTT%2BTf1dCXv%2Fkl%2FiFD0JYPwIgJLhIiVu649h0aEr04Lrqpobn4g4A2JU3DhK4UjPyBu0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMHne9%2FyiVQmLbGeryrcAxiWZwYrPuJmTSAG86%2Byx3DBSbg7uZ6GdTWdfVChFh0gzloisceWr5UDV3DyDY%2FaIHc69MqSrC4DSnk4TvYDa18TeN39bc%2FXDYZhpRavmv4sFIJvGhpSCOCWe11586jiwuIPB8caT3PfDl0K4FC7arkT0Sm1GfSO2AFx4asrrCkM1BHFCTqQE7iMDMh%2FiW7F39PvWv9G04DXKNjNdnuCKI9egiIUlaoF%2FjF48UQOd21SuGX%2FXJaKipJjQByGkgmQKZbOqDkKx4bugYxmuhswIlg%2Be52DBKTcdV26JW8rzlTh19YK9%2BpEgIWYZ0b%2BZSlt2DP1%2FnTwnq2MecKfuvBFlTCgUDKs8tXIF8EBvbfyoGttnDOvX26s4dwI%2B%2BzsxBNt36SU99xycYD5pVCDTZYGqiz4%2BYS72oIIqyC9tLxSida4ekDQ0XvZX23nhnhcTCiL78aVy3kIZ21nkM46G%2FKOjZJTMfUXiWko%2B%2BVWS4hm%2F6LBx893%2F37LsDxDdkEaj24WLBgDT39h3XVEvy%2BxrC2aK0r3VQ5UCBEMta2YxUNwjC8oGElxg6AvlRfNu6n3P9jZ4TnFri9pA8hyhaOTAhZhzrEj6o1fGqOjDOIqTs09t0GZRhOFtiIkX7kUNEHUMKjY3MsGOqUB7Nz4fFnc9brA6cHGnL9wtAbZpGWI9M9s6z%2B38PeMir8xha2Yn21%2BBglGJG0lRO9mHzAxblN5D9D6moM96%2BnS4PY2CvhJhylMUWCLERFhULQT79oM98ArLuAfF3755LGSM6BIu6oV%2FjW5vobwkIen8EyNhcW%2BL8En5Br33tT%2BRQbCRxpDZ%2FXttbJfqxPYU6%2FNdUBxtovDoAxxlhY5xZbsg9%2BqpHYu&X-Amz-Signature=a1f7179945117f8430ee35c9ab59906cc78c9c90498dadf47cbb1b78d2e98d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


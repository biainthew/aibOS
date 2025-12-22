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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JRC5M2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T090305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFG7%2FiNSIhN5varn8fq66O2JKjGBcZj5Ayd%2BZoTRVEJKAiEAgyuxMkZFAmw7sSIZUM8THwyrBSImZq%2BZVE7XY7tmUeEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6T3puSPU8U51Y%2FxyrcA5HpKTLspkk6lOZk%2BEsTNfWHFrU7wrazB0MAe3r%2Fzw6BhMO1OIUwfQ6guqC4VyXsfdl%2BFSHRSd7b3CU6EUmsFkFENoyyDMqmmwoMEwKSXYrtJAVRifjJIHSZ%2Fa7cNSHNhMm6XfcSPUaI2s8Nsmr37G5hucaSJEDEOYDmce8YWeYh40n6ZvKtPmEgvwF9Cnb%2BKAWPjvxK0wB49ULJwyiVSEHjp2W2FKiOPuLJDlTfc0S1hMzyRNt9PYuepY21lFq%2BHkAPryD1VRDEqaVnH5xy7wY3Zjxi5zldb5R%2FLe8PNXzZNv9KrTRRZLMC7Ukc9x2ZrMRQ02upPkIco2L4dMMr6sBwhHegUCdaGWgabe2trghD4iBP7UZeuwWWvgJQA0NWQyE2MHauAzb2BDX1bojM6Mbp%2F%2Fywln9KQMLmrOmP5%2F5gncpd7rQaziOqva2%2F%2F8TW3gEhbwIIJRG5EoU2erucOjVENpxlEguEIeB16yh5Sg6x1IxTrXQ0NRCLvXpdbbordFwpuXOYLOcAEFuBSdrrsVRZ%2B%2BTagD0h46MuiXwY9WJWZFa115X5OhjMYEiM710GL7QEWMcIPxNBhXvprw9k8sXQmRKiCpx8%2FkAyyT6mruoyVHj8Wg7eGb65s2K8MNT5o8oGOqUBZOc1tzwmBGnPUua8W0t7kbUHh%2BFrXLeIbC9G9g%2FcQZwppRjvfrgxl%2B9kzabLbf79FcSINuY2mdyVX9%2FLeWCDwz4HqFgvHeuOMxlxoy%2F2yRKIpa16mJnrDeazPdVeKy0jQPzARmBDDhtqvAoEFYUqjGUFqiVXLZ817HrmpvoROGlh%2BqI%2FuZKRBO%2FjG5LfgSAzARmctu9ogcEFVdX72nwNSiM5zWeY&X-Amz-Signature=bd92265c42d908b980674b2884391ef4ec1f5d361f1e7f7762f31fa9c23308a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


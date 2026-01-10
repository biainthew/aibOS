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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPOKJDN%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFUfIyhmc0H3KWOC8to3Fh%2FUr781JZHeNhg2lUDaXqIwIgPg3zyQ3MwMbUGBLu2cnIJr3fOXP7RefIs90AWIgVGW0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnK11zbc7AOf2ONOCrcA%2BjDFhNRoAEFBirgXtk0PrmdNCvvIgpDAc5VM1jChn0%2FMz5LAtjV6VgVIHCNpsf%2FQk%2FUBPjSyCqcH8PaNeDpJFnc8ifHKtqp%2FBTgLjKXB39jyT6%2FzxYKtsTptXWMYKUUF5i0zgQvP7lY6FdR0au2ZELLTChzyAJFNZZJ%2FJf%2Bg9JdveIeClZjm50IDd4PQOZZRiXwXIU87taNmL6f5jpjH4xuj9pLbUR00oUE%2B%2BB6FgM%2FZxauVD%2FcnVLgRuHd0zHvuaJATC4xtajbfO0PnEqXEg6EROkIRw1nSRmRsqKMiA0CweSPRsvTmK%2FjjDM3sxYaf170t0A0JOpiRJ50P%2FIOJ8cp8r0%2FPco9GxtIEYHY4iP1jr3mu4hqLC3h1WcwECSQuLhqgDwmUBsH8cu%2B1WY6FdbHrVa3ax0Ria5Rj1jJJBYiMULByczsx72geZZ%2BgXDIVAKFnZU4%2FbAtPo8BCyTdulCWFR3s6KQtDYGz%2FvIIA4mI9xZSB5Rf7qyIrSn6KV%2F00aPl22rIW5oDdUjs0gV2y7RbxY0bw6%2FHhAnUEwMfOxmweQyg6eRY%2Bmad%2BoG8OAVpAKoiEzCs0X9afFq%2BYECGqL46WAtG198RDBVFmzM10V0mijbcgmk2%2F6lsmriyMKLDhssGOqUBacRK8z1nbc68g%2B%2FWQLBhIehkVdJ08utNE0pktOnfvDFhCUI9lGz7uLZKZrHQJfL%2BG4NQfKWm1jAkUJWdz55U%2FFHGrwufAlQoG1xXdPk6rBDSYQg95sGmzcVt3doxUDs3ZupsvU%2Fih12b%2BEWU8zp%2BTvN5L9HyUQQnER6JNHHD4DXAFiZvz6G3zeNbjQfd5F1mgIje6ZMOdVrz73y35pLRu51I4cip&X-Amz-Signature=854bdc6208a38154b6e3e49c0ec748b760ab0d12f62dec6bca02c5c1ea311bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


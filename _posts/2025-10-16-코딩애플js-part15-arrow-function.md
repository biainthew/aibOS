---
layout: post
title: "코딩애플JS Part1-5 arrow function"
date: 2023-06-30
categories: [general]
tags: [Javascript/Jquery]
---


## Arrow function 을 쓰는 이유


### 1. 함수 본연의 기능(입출력 기능) 을 잘 표현하는 문법임


> 💡 **프로그래밍 할 때 function 문법을 사용하는 이유**  
> 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용 할 때)  
> 2. 입출력 기능을 만들 때


### 2. 소괄호 생략 가능


파라미터가 하나일 때


### 3. 중괄호와 return 생략 가능


중괄호 안에 return 한 줄 뿐이라면


---


### arrow function 쓰면 내부에서 this 값을 쓸 때 밖에 있던 this 값을 그대로 사용


**쓰는 핵심 이유**


일반 function 과 용도가 완전히 같지는 않기 때문에 일반 function 을 항상 대체할 수 있는 문법은 아님 주의하기


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAPSEVD%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxqZvAJxSHOt6Y0lsKXuEcImgyrUgOkR8NJoJVEA%2FVMgIgfnFMbi0SKnixAjPUkklx8sm%2FNr2HbK7%2Fc9d1fUTkq%2FIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDL98XfIiVZJ%2FOXnfgircA%2BKsNo26FU%2FFqmWBJE1yDsHAF837tU0pn7enWnXjHsG6PY4zY5ixWpt0dPkWmNisQ8IDJMgDQJK6lPzZF5dz3HYZbFpa%2FSdfUSDvPMXq66vWx%2FCcIbHphJ5zPSQpmTcSDcwzG%2BdmcY3ZiKO%2BTUpSzbFVNq09bWXiy6ctClA0K5g4MUK9yF36942V8vombGpdX1tLWfAKVmHqV3xukJrfbktMEZJeQs5pGGLPe50FBT1cuMsj23GRXlppoYBzjp35pYGs1Y%2F5UJf6puCVVQolQe%2BdBhRuqrcxrUeFsKBhVmlcMY4ehonGcsC%2BYA4jMXFtiBhEm5GyOwXKeCHVN%2BhYmqmve%2FqfEmlVVVwU1Ag87pKO2jPwLEMDi46s9IUi1aFafyvbMHaGqw6NewkJOnsFw5UPdHB2dEfxyPUvF%2B7jraTydSEBCLrojrSJMlW9lTXa%2Bry6y4L9CYVXAtsq6omzureI2Yfs%2BqmpR01XXKLlrbhIaLCeQBO7qSh74SmvAGOhPKuQxj3QFcJc0sLWDGXhHbsbyrvtAoaD0Y3%2BLtUm4j%2FfsuJXEconvVKWHlHssWZEkKAicvLnNypdfk6wYpVLGH5wj8tPjWGyRjNuXwkScQ1QR9K1ls6%2Fk4WczVCeMMqw0MsGOqUBd2gCYkT3FK2GHuQ5rr1Jo74JHGpmvf0O%2BGNL3et85tBmuuq40e%2BAnROzFLzNjmCmqGDbdOcPHhXVhaKWt%2F6lO9ruaixG%2BFFzC7BdpUEm%2BEITYupqWvCGerdWdXx%2FuM4qOvR2gZTU0hrRKeg3Pfkko8gf9rJTYjEubYT0yz%2F5rtQIx6zjPBw9ZD6MJF2phcxxqrATphJaUMm8ajx4S6wBt5rhPujw&X-Amz-Signature=75f8d8ecbc534426b1c2048c2467d2fc7b8133ecd2774dc741fccb0e0c435828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


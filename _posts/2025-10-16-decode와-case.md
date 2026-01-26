---
layout: post
title: "DECODE와 CASE"
date: 2025-01-16
categories: [general]
tags: [Sql]
excerpt_separator: ""
---



ORACLE SQL에서 제공하는 함수로 IF-THEN-ELSE 구문과 비슷한 역할을 함


**기본 문법**


```sql
DECODE(표현식, 검색값1, 반환값1, 검색값2, 반환값2, ..., 기본값)
```


**예시**


```sql
SELECT 
    employee_id,
    job_id,
    DECODE(job_id, 
           'IT_PROG', 'Programmer',
           'HR_REP', 'HR Representative',
           'SA_REP', 'Sales Representative',
           'Unknown') AS job_title
FROM employees;
```


**DECODE와 CASE 차이점**


DECODE 는 간단한 조건 처리에 유용하고 오라클 전용 함수지만 CASE는 ANSI SQL 표준으로 대부분의 DBMS에서 사용 가능하며 복잡한 조건 처리가 가능


**사용 시 주의점**

1. NULL 처리

    DECODE에서 NULL은 항상 별도로 처리해야 함 (SQL 에서 NULL은 다른 값과 비교 시 항상 FALSE로 평가됨)

2. 성능

    간단한 조건 처리에서는 DECODE가 더 간결하지만 복잡한 조건이 필요하다면 CASE가 더 적합

3. 오라클 전용

    DECODE 는 오라클에만 존재하는 함수로 다른 DBMS에서 사용하려면 CASE로 대체해야 함


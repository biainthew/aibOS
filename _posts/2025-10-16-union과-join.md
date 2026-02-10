---
layout: post
title: "UNION과 JOIN"
date: 2025-01-16
categories: [general]
tags: [Sql]
excerpt_separator: ""
---



**UNION** : 중복 제거


**UNION ALL** : 중복 허용


**주의사항**

1. 컬럼 수와 데이터 타입이 일치해야 함
2. 결과의 컬럼 이름은 첫 번째 SELECT 문에서 정의된 이름을 따름
3. 명시적 정렬이 필요하면 마지막 SELECT 이후 ORDER BY를 사용

**JOIN 과의 차이**


|          | UNION                    | JOIN                   |
| -------- | ------------------------ | ---------------------- |
| 결과 병합 방식 | 두 SELECT 결과를 **위아래로** 결합 | 두 테이블의 데이터를 **가로로** 결합 |
| 결과 행 개수  | 두 SELECT 결과의 합계          | 조건에 따라 결합된 행만 반환       |
| 사용 목적    | 동일한 구조의 데이터 결합           | 관련 데이터를 두 테이블에서 가져와 결합 |


{% raw %}
```sql
SELECT customer_id, customer_name, 'VIP' AS customer_type
FROM vip_customers
UNION
SELECT customer_id, customer_name, 'Regular' AS customer_type
FROM regular_customers;
```
{% endraw %}


{% raw %}
```sql
SELECT log_date, user_id, action FROM logs_january
UNION ALL
SELECT log_date, user_id, action FROM logs_february;
```
{% endraw %}


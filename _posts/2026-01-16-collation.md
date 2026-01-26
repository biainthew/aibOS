---
layout: post
title: "Collation"
date: 2026-01-13
categories: [general]
tags: [Sql]
---


### Collation 이란 ?


텍스트 데이터를 비교하고 정렬하는 규칙의 집합

- 캐릭터 셋(Character Set) : 문자를 어떻게 저장할 것인가 ? (예: UTF-8, euckr)
- 콜레이션(Collation) : 저장된 문자를 어떻게 비교/정렬할 것인가? (예: 대소문자 구분 여부, 언어별 정렬 순서)

### 콜레이션 명칭의 규칙 (MySQL, MariaDB 기준)


`[캐릭터셋]_[언어/국가]_[구분조건]`


**주요 구분 조건**

- _ci (Case Insensitive) : 대소문자를 구분하지 않음 (가장 흔하게 사용)
- _cs (Case Sensitive) : 대소문자를 구분함
- _bin (Binary) : 문자를 바이너리 값 그대로 비교함, 대소문자는 물론 모든 비트가 같아야 같은 것으로 간주, 가장 빠르지만 정렬이 인간의 언어 순서와 다를 수 있음

### 설정 범위 (Scope)


콜레이션은 단계별로 설정할 수 있으며 하위 단계 설정이 우선순위를 가짐

1. **Server 레벨** : 서버 전체 기본값
2. **Database 레벨** : 특정 DB 내 기본값
3. **Table 레벨** : 테이블 내 기본값
4. **Column 레벨** : 특정 컬럼에만 별도 적용

```sql
SHOW VARIABLES LIKE 'collation%';
```

1. **collation_server**
    1. MYSQL 서버의 기본(Global) 콜레이션
    2. DB를 생성할 때 명시적으로 콜레이션을 지정하지 않으면 이 서버 설정값을 그대로 물려받음
2. **collation_database**
    1. 현재 사용 중인 데이터베이스(Schema)의 기본 콜레이션
    2. 테이블을 만들 때 따로 설정을 안 하면 이 값을 따름
    3. 배치 쿼리를 날리는 DB 세션이 바뀔 때마다 이 값도 해당 DB의 설정에 따라 변함
3. **collation_connection**
    1. 클라이언트(어플리케이션)가 보낸 쿼리를 서버가 해석할 때 사용하는 콜레이션
    2. `SELECT * FROM table WHERE name = '홍길동’` 쿼리를 보냈을 때 ‘홍길동’ 이라는 리터럴 문자를 어떤 규칙으로 비교할 지 결정

### 우선순위와 흐름

1. 사용자가 쿼리를 보냄 -> `collation_connection` 규칙으로 쿼리 해석
2. 데이터베이스 내부 작업 -> Table/Column 에 설정된 콜레이션 사용
3. 결과를 반환 -> `character_set_results` 등에 맞춰 사용자에게 전달

> 💡 만약 컬럼의 콜레이션은 `utf8mb4_bin` 인데 collation_connection 이 `utf8mb4_general_ci` 라면 서버는 비교를 위해 어느 한쪽을 변환해야 함  
> 이 과정에서 인덱스를 사용하지 못하고 성능이 대폭 저하될 수 있음


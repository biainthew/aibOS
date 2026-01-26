---
layout: post
title: "MyBatis foreach"
date: 2025-05-19
categories: [general]
tags: [Sql]
excerpt_separator: ""
---



```xml
<if test="cntrDcdList != null and cntrDcdList.size() > 0">
    AND SICTQ.CNTR_DCD IN
    <foreach item="item" collection="cntrDcdList" open="(" separator="," close=")">
        #{item}
    </foreach>
</if>
```


`collection="cntrDcdList”`


: 반복할 컬렉션 (자바에서 넘겨준 `List<String>` 또는 `List<Object>`)


`item="item"`


: 각 반복 항목을 참조할 변수명


`open = “(”`


: 반복 시작 시 출력할 문자열 (`(` 괄호 열기)


`seperator = “,”`


: 항목들 사이에 넣을 구분자 (`,` 콤마)


`close = “)”`


: 반복 종료 시 출력할 문자열 (`)` 괄호 닫기)


`#{item}`


: 실제 SQL에 삽입될 값


### 정리

- `foreach` 는 SQL `IN` 조건을 생성할 때 주로 사용
- 리스트나 배열 형태의 파라미터를 받아 반복 처리
- MyBatis가 자동으로 문자열 타입일 경우 `''` 를 붙여줌
- `open`, `separator`, `close` 로 괄호와 콤마 자동 제어 가능

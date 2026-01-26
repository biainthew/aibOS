---
layout: post
title: "Lots to park memo"
date: 2023-02-15
categories: [general]
tags: [React]
excerpt_separator: ""
---



### 2/9

- 카카오맵 api 뒤에 &libraries=services 이걸 추가해줘야 라이브러리 사용 가능 왜 안되나 한참 헤맸다
- <Map zoomable={false}> 이렇게 Map 컴포넌트 안에 속성으로 넣어줘도 됨

### 2/12

- 처음에 false 값이다가 클릭하면 true 값
→ setState 로 기본값 false 지정하고 onClick 함수 만들어서 set 함수 값에 true 넣어줌

### 2/13


```javascript
const positions = locations.map((item, idx) => {
        const returnObj = {};
        const relation = item.relation;
        const lats = relation.substr(8, 9);
        const lngs = relation.slice(-10);
        returnObj['lat'] = lats;
        returnObj['lng'] = lngs;
        return returnObj;
    });
```

- 내가 찾아 헤매던 객체들을 배열에 넣기 / 키값을 같이 써줘야 하는거였음

### 2/14

- [https://algoroot.tistory.com/44](https://algoroot.tistory.com/44)
→ 5000 포트 맥에서 쓰기
- Mapmarker 를 누르면 그 위치의 정보가 떠야 함 — 내가 원한 방법으로는 불가능
- 영업시간에서 평일운영시간: 0:00~0:00 | 토요일운영시간: 0:00~0:00 | 공휴일운영시간: 0:00~0:00 이거면 24시간 영업으로 바꾸기

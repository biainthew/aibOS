---
layout: post
title: "data & prop & attr"
date: 2025-04-09
categories: [general]
tags: [Javascript/Jquery]
---


### data 속성

1. `data-` 속성을 html 에서 설정한 경우 `.data('')` 로 가져올 때 잘 동작함
2. `data-` 속성을 javascript 에서 동적으로 추가한 경우 `.data('')` 로 안 가져와짐

**결론**


그냥 안전하게 `attr('data-')` 을 쓰자


### prop & attr


**prop**

1. DOM 프로퍼티 (property)
2. js 객체에서 관리하는 현재 상태 값
3. 사용자가 체크했는지 등 현재 변경된 상태 값을 읽음
4. 체크박스 체크 여부 확인할 때, 라디오 버튼 선택 여부 확인할 때, `disabled selected readonly` 같은 상태값, 자바스크립트에서 DOM 의 동작 상태 확인 할 때

**attr**

1. html 속성 (attribute)
2. html 태그에 선언된 속성값
3. 초기 설정된 값(html 에 적혀있는 값)을 읽음
4. html 에 선언된 속성 확인할 때, `img src alt` 같은 속성, 동적으로 `data-` 같은 속성을 추가할 때

**결론**


상태를 확인하거나 제어할 때는 `prop` 을 쓰고 태그에 정의된 속성 읽거나 쓸 때는 `attr` 을 씀


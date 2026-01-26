---
layout: post
title: "Fade in & out & to"
date: 2022-12-01
categories: [general]
tags: [Javascript/Jquery]
---


# _fadeIn( )_


: 선택한 요소를 천천히 나타나게 함


### ✔️ 문법


> 💡 `.fadeIn(duration,easing,callback)`


👉🏻 duration : 완전히 나타날 때까지의 시간, 기본값(400) fast(200) slow(600) millisecond


👉🏻 easing : 나타나는 모양, 기본값(swing) linear


👉🏻 callback : fadeIn 함수 완료 후 실행


# _fadeOut( )_


: 선택한 요소를 천천히 사라지게 함


### ✔️ 문법


> 💡 `.fadeOut(duration,easing,callback)`


👉🏻 duration : 완전히 사라질 때까지의 시간, 기본값(400) fast(200) slow(600) millisecond


👉🏻 easing : 사라지는 모양, 기본값(swing) linear


👉🏻 callback : fadeout 함수 완료 후 실행


# _fadeToggle( )_


: 보이는 요소는 보이지 않게 보이지 않는 요소는 보이게


### ✔️ 문법


> 💡 `.fadeToggle(duration,easing,callback)`


👉🏻 duration : 완전히 사라지거나 보일 때까지의 시간, 기본값(400) fast(200) slow(600) millisecond


👉🏻 easing : 사라지거나 보이는 모양, 기본값(swing) linear


👉🏻 callback : fadeToggle 함수 완료 후 실행


# _fadeTo( )_


: 투명도를 조절하여 보이거나 보이지 않게 함


### ✔️ 문법


> 💡 `.fadeTo(duration,opacity,easing,callback)`


👉🏻 duration : 필수 완전히 사라지거나 보일 때까지의 시간, 기본값(400) fast(200) slow(600) millisecond


👉🏻 opacity : 투명도


👉🏻 easing : 사라지거나 보이는 모양, 기본값(swing) linear


👉🏻 callback : fadeTo 함수 완료 후 실행


### ✔️ 문법


> 💡 `선택자.hide(speed,callback);`


👉🏻 speed 에 밀리세컨드 숫자로 속도 조절 가능


👉🏻 callback 함수를 설정하면 hide 함수 완료 후 실행


# _show( )_


: display block


### ✔️ 문법


> 💡 `선택자.show(speed,callback);`


👉🏻 speed 에 밀리세컨드 숫자로 속도 조절 가능


👉🏻 callback 함수를 설정하면 show 함수 완료 후 실행


# _hide( )_


: display none


### ✔️ 문법


> 💡 `선택자.hide(speed,callback);`


👉🏻 speed 에 밀리세컨드 숫자로 속도 조절 가능


👉🏻 callback 함수를 설정하면 hide 함수 완료 후 실행


---
layout: post
title: "One method"
date: 2023-01-05
categories: [general]
tags: [Javascript/Jquery]
---


# _one_


: 이벤트를 한번만 실행하게 함


### ✔️ 문법


> 💡 `$(’선택자’).one(’method’ , function(){  
>     실행문  
> });`


### 🌈 예시


> 💡 `$("body").one("click",`**`function`**`(e){`  
> **`if`**`((e.target).attr("class") != 'test'){  
>   	console.log("영역 밖");  
>     }  
> });`


👉🏻 영역 밖 클릭 시 초기화


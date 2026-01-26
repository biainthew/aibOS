---
layout: post
title: "How to prevent event"
date: 2022-12-09
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



# _return false_


### 🌈 예시


> 💡 `$('a').click(function(){  
>     return false;  
>     alert('return false');  
> });`


👉🏻 a 에 클릭하면 콜백함수가 실행 중단되어 alert 창은 뜨지 않음


# _preventDefault_


### 🌈 예시


> 💡 `$('a').click(function(e){  
>     e.preventDefault();  
>     alert('return false');  
> });`


👉🏻 a 에 클릭하면 링크로 이동하는 것만 막고 alert 창은 뜸


---
layout: post
title: "[Error]setTimeOut / $(this)"
date: 2023-01-11
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



* [참고 문서](https://takeknowledge.tistory.com/37)


🦁 span 에 mouseenter 하면 css animation class 를 추가하고 mouseout 하면 1초 뒤에 class 를 지워서 다시 mouseenter 했을 때 animation 이 발생할 수 있도록 하는 코드를 짜는 중에 발견


👇🏻 오류 코드


```javascript
animateSpan.mouseout(function(){
    setTimeout(function(){
         $(this).removeClass('animated bounce')
         console.log($(this))
    },1000)
})
```


$(this)를 console 에 찍어보니 window 가 나왔다


찾아보니 setTimeOut 내의 $(this)는 non-strict 모드에서는 전역(혹은 window) 객체, strict모드에서 undefined를 기본값으로 한다고 한다


👇🏻 해결 방법


```javascript
animateSpan.mouseout(function(){
    
let _this = $(this)

    setTimeout(function(){
        
_this
.removeClass('animated bounce')
    },1000)
})
```


$(this) 를 인지하지 못해서 생긴 문제이니 setTimeout 밖에서 $(this) 를 변수에 저장하고 안에 그 변수를 넣어주면 해결 !



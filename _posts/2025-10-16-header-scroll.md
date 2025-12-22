---
layout: post
title: "Header scroll"
date: 2023-01-18
categories: [general]
tags: [Javascript/Jquery]
---


```javascript
let newScr = $(window).scrollTop();
let oldScr = newScr;
let result = "";
$(window).scroll(function(){
    newScr=$(window).scrollTop();
    result = (newScr-oldScr) >= 0 ? 'DOWN' : 'UP' ;
    if(result == "DOWN"){
        $('#header').removeClass('headerParallaxDown144')
        $('#header').removeClass('headerParallaxDown100')
        $('#header').addClass('headerParallaxUp')
        $('#header').css('height','144rem')
    }
    if(result == "UP"){
        $('#header').removeClass('headerParallaxUp')
        $('#header').removeClass('headerParallaxDown144')
        $('#header').addClass('headerParallaxDown100')
        $('#header').css('height','100rem')
        if($(window).scrollTop()==0){
            $('#header').removeClass('headerParallaxDown100')
            $('#header').addClass('headerParallaxDown144')
            $('#header').css('height','144rem')
        }
    }
    oldScr=newScr;
})
```


```scss
@keyframes headerParallaxUp {
    0%{transform: translateY(0);}
    100%{transform: translateY(-144rem);}
}
@keyframes headerParallaxDown144 {
    0%{height: 100rem;}
    100%{height: 144rem;}
}
@keyframes headerParallaxDown100 {
    0%{transform: translateY(-144rem); height: 100rem;}
    100%{transform: translateY(0); height: 100rem;}
}
```


스크롤을 내리면 header 가 사라지고 올리면 나타나는 animation


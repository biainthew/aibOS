---
layout: post
title: "Mouse wheel"
date: 2022-12-29
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



{% raw %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mouse wheel 가로</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="./js/script.js" defer></script>
</head>
<body>
    <div id="wrap">
        <section id="section1" class="section">section1</section>
        <section id="section2" class="section">section2</section>
        <section id="section3" class="section">section3</section>
        <section id="section4" class="section">section4</section>
        <section id="section5" class="section">section5</section>
        <section id="section6" class="section">section6</section>
        <section id="section7" class="section">section7</section>
        <section id="section8" class="section">section8</section>
        <section id="section9" class="section">section9</section>
    </div>
</body>
</html>
```
{% endraw %}


{% raw %}
```css
*{margin: 0; padding: 0;}
.section{position: relative; width: 100%; color: #fff; text-align: center; font-weight: 600; text-transform: uppercase; font-size: 100px; line-height: 900px; height: 100vh;}
#section1{background: rgb(255, 199, 199);}
#section2{background: rgb(255, 214, 176);}
#section3{background: rgb(255, 241, 162);}
#section4{background: rgb(225, 255, 191);}
#section5{background: rgb(117, 173, 134);}
#section6{background: rgb(190, 237, 255);}
#section7{background: rgb(85, 125, 185);}
#section8{background: rgb(236, 159, 255);}
#section9{background: rgb(255, 189, 217);}
```
{% endraw %}


{% raw %}
```javascript
let wheelDelta = 0; //휠 이벤트 발생 시 반환값 확인 변수
let browser = 0; //파이어폭스인지 브라우저 판별하기 위해

//9개의 섹션 클래스를 배열처리
//마우스 휠을 아래로 한 번 내리면 -120
//-120 이라는 값이 있으면 다음으로 이동하게 스크롤이벤트 시킴
//마우스 휠을 위로 한 번 올리면 120
//120 이라는 값이 있으면 이전으로 이동하게 스크롤이벤트 시킴
//크롬, 익스, 사파리, 오페라 등 : mousewheel 가능
//파이어폭스 : DOMMouseScroll 휠을 아래로 한 번 움직이면 (3) 위(-3) 다른 브라우저랑 반대로 움직임
//브라우저 판별 : window.navigator,userAgent

$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(event){
        // console.log(event)
        event.preventDefault()

        //사용자가 사용하는 브라우저가 뭔지 판별하기 위해
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox') //내가 찾는 게 있으면 값을 가져오고 없으면 마이너스 , 대소문자 가림
        console.log(window.navigator.userAgent)
        if(browser>=0){
            wheelDelta=-event.detail*40;
            console.log(wheelDelta)
        }else{
            wheelDelta=event.originalEvent.wheelDelta;
            console.log(wheelDelta)
        }
        if(wheelDelta<0){ //마우스 내릴 때
            if(index<$('.section').size()-1){
                $('html, body').stop().animate({scrollTop: $(this).next().offset().top},500)
            }
        }else{ //마우스 올릴 때
            if(index>0){
                $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},500)
            }
        }
    })
});
```
{% endraw %}


---
layout: post
title: "Progress bar"
date: 2023-01-05
categories: [general]
tags: [Javascript/Jquery]
---


```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress bar</title>
    <style>
        *{margin: 0; padding: 0;}
        .progress-bar{width: 1000px; height: 50px; margin: 50px auto; border: 1px solid orange; position: relative;}
        .bar{width: 0; height: 100%; background: pink; position: absolute; top: 0; left: 0;}
        .num{position: absolute; top: 0; right: 15px; font-size: 1em; color: chocolate;}
    </style>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
</head>
<body>
    <div class="progress-bar">
        <div class="bar"></div>
        <div class="num" data-num="80"></div>
    </div>
    <script>
        let progressWrap = $('.progress-bar');
        let progressBar = progressWrap.find('.bar');
        let progressNum = progressWrap.find('.num');
        let progressData = progressNum.attr('data-num');

        progressBar.animate({width:progressData+'%'},2000);

        setInterval(textAni,100);
        function textAni(){
            let currentWidth = progressBar.width()/progressWrap.width()*100;
            progressNum.text(Math.floor(currentWidth)+'%')
        }
    </script>
</body>
</html>
```


👉🏻 bar 한 개 일 때


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress bar</title>
    <style>
        *{margin: 0; padding: 0;}
        .progress-bar{width: 1000px; height: 50px; margin: 50px auto; border: 1px solid orange; position: relative;}
        .bar{width: 0; height: 100%; background: pink; position: absolute; top: 0; left: 0;}
        .num{position: absolute; top: 0; right: 15px; font-size: 1em; color: chocolate;}
    </style>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
</head>
<body>
    <div class="progress-bar">
        <div class="bar"></div>
        <div class="num" data-num="80"></div>
    </div>
    <div class="progress-bar">
        <div class="bar"></div>
        <div class="num" data-num="70"></div>
    </div>
    <div class="progress-bar">
        <div class="bar"></div>
        <div class="num" data-num="60"></div>
    </div>
    <div class="progress-bar">
        <div class="bar"></div>
        <div class="num" data-num="90"></div>
    </div>
    <div class="progress-bar">
        <div class="bar"></div>
        <div class="num" data-num="100"></div>
    </div>
    <script>
        let progressWrap = $('.progress-bar');
        let progressBar = progressWrap.find('.bar');
        let progressNum = progressWrap.find('.num');
        let progressData = progressNum.attr('data-num');

        // progressBar.animate({width:progressData+'%'},2000);

        progressWrap.each(function(){
            progressData = $(this).find('.num').attr('data-num')
            // console.log($(this))
            // console.log(progressData)
            $(this).find('.bar').animate({width:progressData+'%'},2000);
        })

        setInterval(textAni,100);
        function textAni(){
            progressWrap.each(function(){
                let currentWidth = $(this).find('.bar').width()/progressWrap.width()*100;
                $(this).find('.num').text(Math.floor(currentWidth)+'%')
            })
        }
    </script>
</body>
</html>
```


👉🏻 bar 여러개 일 때


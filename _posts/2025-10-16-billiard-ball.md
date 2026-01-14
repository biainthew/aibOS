---
layout: post
title: "billiard ball"
date: 2022-12-08
categories: [general]
tags: [Javascript/Jquery]
---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9cbaba97-1db9-4ec2-a2a9-5173ad7c4ce5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGHH2C7%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDIepDoMg7IjTVhnD2I%2FG6HnZZYgS%2Btm7dVOwg5fuKcygIgZz%2BiC5XL6ZXff0tSz9vY8gQxh%2BM9EiE66T21lWqsmxcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLmI7Bu8AwSdPHs%2BtSrcA0TgJR6%2Byk73YphHENJaT6uoRhTc68KH3GPDHRT71fAcX%2BMW10c7klwCMjDBqtuEzLahOTOcV3hYuqHGXI0vufMGWRrSqvCB5UYlKzT9h0apyjSwMqnc0ZIE4817PfAt%2FL%2FMQ7Hf%2FOt6UEyL2lcb05Xc%2BMcrFUDxr44HezabbZVbOEa9QGJtiPZIYEZ33XCFOIBXvS%2FaEFSR%2F8HMTN9ZsAtpndLOxgtJwAnBMvl5o6avisW78wXUTYiL4cXsCq4LdUdl0nbdLdvxh63jn8PXeVK5ek5Xer3jx66MfBFHfoQkbU207myR0%2F4Co9REj5PdzUvHP%2Fyd50QQ1VON5VJkR8sgklRMe2uau6ml7Atcdw0y7tPf3h8%2F9yoVGqYkHI5rgvDhAhTO9VJK%2FTbaW12Rcp0Xn1pVSaxqfotsdDOk1%2FloN94p%2FaQSTHuYDs%2BQ5WKO28y%2FmLYXbT4EEOtS98R1fLJl6%2B1EjT1yeZAyJAPbuiCUtpnaZAbSh7Kki3tgcHSIAMoNChQY0Vc%2FJnFNQRIc3FN5vCU1ZDG9SMMabI91bv3U3iDbLNcJOh%2FxA%2Fgz%2FJLs3hNKSCIh%2FijBPOop%2FU8ATY6rS3nINXxcvS5yFFIT4tcN8bc33uFgRTeRSfW7ML7Qm8sGOqUBn3MEfrY6NX%2F7WPEvsJn6CITpFRhy6XbXnEBkDy2oIk%2BEtBPYC9cXDF2VF34f1GjBoGpsAsNqA3%2FXJn6F%2F%2B8S%2B%2FLWRLIPykXizsVj3UAjuynx2YWuyiEdx29joouBGbg6B2o9u03ksAllpW44sYh9c1EdhNrfrDNbubQra5Epewze8Kf6FHWni%2BrkA0If2vO8rx0myHKJQADP4gpVmVLTNz05isrR&X-Amz-Signature=233402e2a941bc0868b96cc0f90241eac46b5f6dd297592ce441bddd965d8e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="./js/script.js" defer></script>
</head>
<body>
    <div id="ground">
        <div id="stick"></div>
        <div id="ball1" class="ball"></div>
        <div id="ball2" class="ball"></div>
        <div id="ball3" class="ball"></div>
        <div id="ball4" class="ball"></div>
        <div id="ball5" class="ball"></div>
        <div id="ball6" class="ball"></div>
        <div id="ball7" class="ball"></div>
        <div id="ball8" class="ball"></div>
        <div id="ball9" class="ball"></div>
        <div id="ball10" class="ball"></div>
        <div id="ball11" class="ball"></div>
        <div id="ball12" class="ball"></div>
        <div id="ball13" class="ball"></div>
        <div id="ball14" class="ball"></div>
        <div id="ball15" class="ball"></div>
        <div id="ball100" class="ball"></div>
    </div>
</body>
</html>
```


```plain text
#ground{width: 500px; height: 700px; background: forestgreen; margin: 0 auto; border: 15px solid saddlebrown; position: relative;}
#stick{width: 20px; height: 300px; left: 50%; bottom: -100px;  position: absolute; transform: translateX(-50%) ; background: burlywood; border-radius: 40% 40% 0 0 ;}
.ball{width: 20px; height: 20px; background: white; border-radius: 50%;top: 600px; position: absolute; left: 50%;  transform: translateX(-50%);}
#ball1{background: rgb(255, 0, 0); top: 250px;}
#ball2{background: rgb(255, 102, 0);top: 230px;left: calc(50% - 10px);}
#ball3{background: rgb(251, 255, 0);top: 230px; left: calc(50% + 10px);}
#ball4{background: rgb(71, 235, 49);top: 210px;left: calc(50% - 20px);}
#ball5{background: rgb(8, 100, 0);top: 210px;left: calc(50% + 20px);}
#ball6{background: rgb(113, 222, 236);top: 190px;left: calc(50% - 30px);}
#ball7{background: rgb(0, 81, 255);top: 190px;left: calc(50% - 10px);}
#ball8{background: rgb(0, 7, 71);top: 190px;left: calc(50% + 10px);}
#ball9{background: rgb(111, 0, 255);top: 190px;left: calc(50% + 30px);}
#ball10{background: rgb(225, 147, 255); top: 170px; left: calc(50% - 40px);}
#ball15{background: rgb(126, 13, 66); top: 170px; left: calc(50% - 20px);}
#ball11{background: rgb(255, 137, 216); top: 170px;}
#ball12{background: rgb(255, 0, 106); top: 170px; left: calc(50% + 20px);}
#ball13{background: rgb(255, 195, 116); top: 210px;}
#ball14{background: rgb(87, 84, 84);top: 170px; left: calc(50% + 40px);}
.ball#ball100{background: #fff; top: 480px;}
```


```plain text
$('#stick').animate({bottom:0},1000).animate({bottom:-100},1000)
$('#ball100').animate({top:270},1000,'linear')
let num = Math.round(Math.random()*250)
console.log(num)
let num1 = Math.round(Math.random()*250)
let num2 = Math.round(Math.random()*250)
let num3 = Math.round(Math.random()*250)
let num4 = Math.round(Math.random()*250)
let num5 = Math.round(Math.random()*250)
let num6 = Math.round(Math.random()*250)
let num7 = Math.round(Math.random()*250)
let num8 = Math.round(Math.random()*250)
let num9 = Math.round(Math.random()*250)
let num10 = Math.round(Math.random()*250)
let num11 = Math.round(Math.random()*250)
let num12 = Math.round(Math.random()*250)
let num13 = Math.round(Math.random()*250)
let num14 = Math.round(Math.random()*250)
let num15 = Math.round(Math.random()*500)
let num16 = Math.round(Math.random()*500)
let num17 = Math.round(Math.random()*500)
let num18 = Math.round(Math.random()*500)
let num19 = Math.round(Math.random()*500)
let num20 = Math.round(Math.random()*500)
let num21 = Math.round(Math.random()*500)
let num22 = Math.round(Math.random()*500)
let num23 = Math.round(Math.random()*500)
let num24 = Math.round(Math.random()*500)
let num25 = Math.round(Math.random()*500)
let num26 = Math.round(Math.random()*500)
let num27 = Math.round(Math.random()*500)
let num28 = Math.round(Math.random()*500)
let num29 = Math.round(Math.random()*500)

$('#ball1').delay(1000).animate({top:num,left:num15},2000)
$('#ball2').delay(1000).animate({top:num1,left:num16},2000)
$('#ball3').delay(1000).animate({top:num2,left:num17},2000)
$('#ball4').delay(1000).animate({top:num3,left:num18},2000)
$('#ball5').delay(1000).animate({top:num4,left:num19},2000)
$('#ball6').delay(1000).animate({top:num5,left:num20},2000)
$('#ball7').delay(1000).animate({top:num6,left:num21},2000)
$('#ball8').delay(1000).animate({top:num7,left:num22},2000)
$('#ball9').delay(1000).animate({top:num8,left:num23},2000)
$('#ball10').delay(1000).animate({top:num9,left:num24},2000)
$('#ball11').delay(1000).animate({top:num10,left:num25},2000)
$('#ball12').delay(1000).animate({top:num11,left:num26},2000)
$('#ball13').delay(1000).animate({top:num12,left:num27},2000)
$('#ball14').delay(1000).animate({top:num13,left:num28},2000)
$('#ball15').delay(1000).animate({top:num14,left:num29},2000)
```


---
layout: post
title: "billiard ball"
date: 2022-12-08
categories: [general]
tags: [Javascript/Jquery]
---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9cbaba97-1db9-4ec2-a2a9-5173ad7c4ce5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUK7IPY%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU5SXaESLPIAhs%2FmprqAhuLC7RwUYJn84Wkp4U2ASFgAiAYDUFdAWBVQHN8e33ZA71VszOq5D4692TZYS2u3hea5ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb7jQ%2FTTOQ%2B9QlnDgKtwDcbbVGUDOYStsxetn4fIXJGDUy8pTxDJdrLduF%2BepeRgum4%2B8CEy8mg2MsPxfMMPK9TuTq7XMX6nQdRjq2yuqQ1s%2FWuLwQY3Q0yLIhzjTjyp6DskC4XiyKZgr2fK%2FlyACb1QkHSZaIBpD%2Bc8%2BRIoNsxZWdRu89WyMFChlZRtBvTxmdoKTB%2BE2sqBZ9Am8DDkrWpVZkLLjzJWUZBRpasbBuElUfkjz5E1VbVLYnQwZZLNCj8o27cF2GzpLE4dJlwkjXj9PyhRtUTePqs1No%2FeKWPxJuEwpCkhKqrMfvWtpqetlg8kF%2B5PeWP9k3%2BEWh1%2Fhc9ZIIJk5ZfGl%2F8XzPYTfpXzxpKs42wVqEBB9%2B%2FZwmgjQTZ1roGhkhOk7cWgK%2BcantoLD%2Fr60Nx1ExU59bWAe270Zlw9qwJjMW32kwXWfcPx%2Fl7GC08JEgkuWiiV7uCYjieuHo5dk35FSFn%2BXeAbaItNeKVxl1H6W1Sg0gU8d8HVj4H34wusydCqZWJ5KIbmWtQLmz5e9y%2BbkooXOXUQ9qMRGeUEnGKtvpuVnC14%2BORqYh0D6rx5HoE11S9FMVrMwBzbl5YpOAG2gB%2BVXjYyFu7%2FsoZJK41J6xZg4vzyDNEn%2BFm7k62vo%2BY1DJQAwxaGwywY6pgFGtMdfZOBSCV1Pvu61nIHazoxiIuMo3HX1gipVGXST%2BnSFJX8uvTNO2uTAC66k1FOy8M8zx0kgae4EsAffThdoNumAuq0pxLVB4utBpmqj4IlaRreXu0CCj7Lca4qqKR7h5xsPNv9qUA00zqfqMakiCZlHFgBNw0deG73W32JaRRT01SOxOxjK%2B6atq8preHv2cqA9XzV%2BDLQB%2FAG2Xx9DkEWASF19&X-Amz-Signature=a3508054e2215117f39827b29d52a1cabfb7fddd9acdd3fc36a0e80eb2466dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


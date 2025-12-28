---
layout: post
title: "billiard ball"
date: 2022-12-08
categories: [general]
tags: [Javascript/Jquery]
---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9cbaba97-1db9-4ec2-a2a9-5173ad7c4ce5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YV6MKN%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtoyI0TDtvz8JZioqMw4Wln3dTwqPnsGH%2Bn%2BaMGC%2FXhAIhAKXGrlTmqKu7UPZFz%2F7U6LQY9bk84Efzv1X2DFU08Rh1Kv8DCHYQABoMNjM3NDIzMTgzODA1Igw7Z%2BE6B4pxIVPWd5Iq3AP7%2B4WkkKIwAgJYOezPojzlxbH520vkOqjW76Kv0VwTFVGgdI90T02zVpVtQM%2F0fTqeaxX3TMGMIr3shOyrR6vhv%2FMLrBLPG1ozYj6MvfGD5h3FR8g5qCgsEbNMs5%2BXwQ0KP44HwvigeJQ80IdH6fjRwV3BcFF8htDW8i2l44ztaMvwMkMbbi9t5ba%2BDB%2FVBnMC6N7%2FQTlfnFkeRGNcEpQvI5%2BfYXP96qUbCTHM3U%2BEX5%2FrQ8DfRsi4O9BCoaKClPSCamJICyEL2CuJWKTXE2UQig2L%2FxgocxRCqClNw40oyGanw5%2BaoCd6P%2BFjTtA3w0JTrwRKPSs%2F2k0lIHWqLlw9SLsJTuDH%2FoZttXUqaCsV8qx5oMfGxumS0NjMxi61SaVG9rO9GaTHPl1SN8jMkotd02hI6bjbAcvNpwko1UUsFnw7PMo0Xtm%2BC5yuCB%2B1yAL3xP1bwoXmJzEWv5RV4xjgd9hWExng4ME9plfBmCfYbKxCxFJJgJU9XmUw8amMy3NSyM1pTYTjB1Nof5u%2Bn0fmeWR9dXDM81Nhv9mFgF4TwVSGBm4CZRpJVB2lVca1cbjpxHv4upUPD8pBeWzAfzW9CZO40PNXvOxBcDpbu%2F5PSquJrioTvPJm84VvxDCimsHKBjqkAevetAGepUC1r17mCXTs0C1r28QbnZ5Uhi004PcygrZsQEMpZYMss5U2aGkji0kQizYFPoRKjYYNvsBAMBTK%2FVsz9xE563cQtyXCArB5d5fJIUBnBsQoZJV5muLsRrMEBSElVZ%2FQ1%2BCKFv1Z3pEpuJDXqLm04wl%2BXpgbVUQIxsWkeFJSdaJlzmz%2B8lhWcForL4NqHI1i7WYjBgPoR90Pj9nvSDTO&X-Amz-Signature=a07fed5dda4625e90b703ba3581755a9e530dfb8b17884cf5dd99049ac97a602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


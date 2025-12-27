---
layout: post
title: "billiard ball"
date: 2022-12-08
categories: [general]
tags: [Javascript/Jquery]
---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9cbaba97-1db9-4ec2-a2a9-5173ad7c4ce5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQMEDWK%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRd6jFbF2ayqWSsCB4dEtMpdlxxuSPe5I5cpSkxTQlzQIhAN95XYVr4gAaRjXVX1hWVq%2BiK5nYhDO6pmQI6SdVKIKjKv8DCF8QABoMNjM3NDIzMTgzODA1IgzzWN8EgtAhrMSj0LUq3ANTDmk%2FcqMNFVO4zvT8jHvXTUL2hhPEEfRlbYaEaiiNLX%2F9GUIh0rfoFqI22g5vxwXoWZS55ShvY02FTG7YbbbYtva3aegjYaXrVBEFi2vWA2lu4v2DiYA%2F8IuX6UexbuHTFAiyExlO13JS%2FWcY2yYaBr4T1H4bkFYING98wmFItEHCikCBc%2FxPkAxTpqV66I0AZc0OBdI%2Fod5cu%2FkFqv9i8JyqfDAhB%2FRAssdYe4on5fh9Pa6fvbM613h4h1F%2B1HOSkYGxbOLw4uMANPs9n2NbG%2FKmJdlaSj5fxSy8QiJTkAVNqB%2BZNIdbpq8rLvjXmFKVerei2T7E04qVk35jUDUZQlb4GYrADiZTQt5VXnB2irSyVtepfbE6htMZmjmwvrRnh7nOoioZDQvQscDm8Mh2aJtqAU00NgiD3dmFThpQfTf91xBjMz44rOqHhoBuBIy0arZYo3Ob4jJk5TvAo2oJ3lQXfLyxgk%2BmHBGAr06AFPVYcxsWkawMZdvABSryiZ%2Bz864VD3G7G7ha7xQ2tLXedZvP5MKbqINoAc7xdbLUvXcUhirWCK1H%2BlW3CdoiXTV4GdMj8YNRWw2fKIJsuAKn%2FLYA4abQmVUKng5MGFg5RuiThrSCWU%2F3g55mlzDt%2F7vKBjqkAVXM5QShU4OAioPnoIdJT2Wcmkc%2FlQ7o%2BXnt2HYdaXJy2gSt9CTdkRKr5WA8PYdQTvfrlgGtriW3aIeIc92OYv8qIp1%2FJY6aHzGXzKuMFxky7Inr5%2B9HYhXnPwF7Fbsj8Nlj3n5p2cp%2BzU3QvHkRk%2BXZM8NgAmK19xpcN4Kh2goOKEPG91TemkzoYvaWH4i0LJmoRS%2FFeSuQPg3RyYJxouirtHXE&X-Amz-Signature=d9a977b639ceee15a4347da9c695f4dc03f4b4a414581346408509300fd855db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


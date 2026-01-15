---
layout: post
title: "billiard ball"
date: 2022-12-08
categories: [general]
tags: [Javascript/Jquery]
---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9cbaba97-1db9-4ec2-a2a9-5173ad7c4ce5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBGF4Y6%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC8J1hfaCVBxNIQFZc8Ib7vxfd6TZ%2Bte5S2qMfzITasrAIgLp%2BoPfrDuodiajoOAcZsq8aN0xSf9GGhg3nYVVtUx6Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKgxf6KwZpH8IH%2BsNCrcA%2BZVZcaPcXNJuawl%2BFnHK3wEWlINF6Q%2FNNxL72vrmYysgTOOtakSj8pov3ZLNUV6Y2OEl9Kne6OBuMbvyAlI4MKS9uiDtu2ynaKV4uASZmSQpAICJbMrHTY0C622Zqv2sS1i%2F4cyK9zUvTGo%2FslVebZl0IsvPpzzrS9wTQ5EP%2BkRKSXT57%2B5W69WVUXuycfwGzuaYjd5dRhCF6t7pdKOnwsU6MZy%2BeSdfGJPqJgCWiXxCDPSAMXx%2FdQTj%2FnfbPbh3AvX15dJvWAqMp9uI09dOqf7cn%2BE0%2B8PTx0rLUj54DWaQzhwLm1PrqYQNrwS6V%2BkigitJhojDfDUJ%2F5%2BdGF1qebLbaMACcESuqWBMaA7T6e8sbREDUYgnESHrVjHAtnFmGYAGM%2FMKuw8lASLOknqo1m7FVgAXpTDS8U7S%2Fi7wzLXiSX2oH4aNKcWaPuNx%2BMnr1tnPVB8P%2BM4ugS7WLV9y81qwRQjYzWVQ2sz477ehVAuhPYX8Xv4QgvOLn4muEVa5DnoYDGsrVt7pfYXh99vnvtn%2BFdLr6XQzU3IyXpbxXSV%2FrsgvpYveB1pvc2LbCJvWI1HXNFd1WS3jNpAnniWG09q90mI1D1KEIF%2FLI0lLdTv7SSp7dH0OweUQ%2FLsMNDkoMsGOqUB%2BKSmnr76gi94f%2F0aT9ea7Y%2Bt1qb5S0WhvLDkr7wqpq8kLf%2FkRYIuRVVkQb0cgInAaliE39%2BsgDPBpGYOI%2FFoq6%2F5wUZo38qeuzhPM4FTrSNQXHp2hJbkoXzmNAdTv7nE02rEu2iKSRnT%2FO7vB0h%2BZbS6oDqqr9BUGEZi5%2FhyHP1gXtbNPIQqzaSMQcTrd%2Fb2PbX2waM2sV4TWn3ry522iNUr7fjP&X-Amz-Signature=f80c1b85d41315f105467346bb084a697ea6a873633fa0658524d38a8f95896c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


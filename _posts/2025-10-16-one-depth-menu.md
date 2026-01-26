---
layout: post
title: "one depth menu"
date: 2022-12-12
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style1.css">
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="./js/script1.js" defer></script>
</head>
<body>
    <div id="wrap">
        <ul id="nav">
            <li>
                <div class="menu_img"><a href="#"><img src="./img/bgMenu01.gif" alt=""></a></div>
                <div class="text_image">
                    <div class="off"><a href="#"><img src="./img/menu01.gif" alt=""></a></div>
                    <div class="on"><a href="#"><img src="./img/menu01_on.gif" alt=""></a></div>
                </div>
            </li>
            <li>
                <div class="menu_img"><a href="#"><img src="./img/bgMenu02.gif" alt=""></a></div>
                <div class="text_image">
                    <div class="off"><a href="#"><img src="./img/menu02.gif" alt=""></a></div>
                    <div class="on"><a href="#"><img src="./img/menu02_on.gif" alt=""></a></div>
                </div>
            </li>
            <li>
                <div class="menu_img"><a href="#"><img src="./img/bgMenu03.gif" alt=""></a></div>
                <div class="text_image">
                    <div class="off"><a href="#"><img src="./img/menu03.gif" alt=""></a></div>
                    <div class="on"><a href="#"><img src="./img/menu03_on.gif" alt=""></a></div>
                </div>
            </li>
            <li>
                <div class="menu_img"><a href="#"><img src="./img/bgMenu04.gif" alt=""></a></div>
                <div class="text_image">
                    <div class="off"><a href="#"><img src="./img/menu04.gif" alt=""></a></div>
                    <div class="on"><a href="#"><img src="./img/menu04_on.gif" alt=""></a></div>
                </div>
            </li>
        </ul>
    </div>
</body>
</html>
```


```plain text
*{margin: 0; padding: 0;}
ul{list-style: none;}
#wrap{margin: 100px auto; width: 700px;}
#nav{height: 100%; display: flex;}
#nav li{width: 250px; cursor: pointer; display: flex; line-height: 80px; justify-content: space-between;}
#nav .menu_img{height: 0; overflow: hidden;}
#nav .menu_img a img{height: 97px;}
#nav .text_image{text-align: center; padding: 10px 0;}
#nav .text_image .on{display: none;}
```


```plain text
let menu=$('#nav li');
//menu.hover(function(){},function(){});

// menu.on({"mouseover":function(){
//     let tg=$(this);
//     let onImg=tg.find('.text_image > .on');
//     let offImg=tg.find('.text_image > .off');
//     let menuImage=tg.find('.menu_img');
//     let imageHeight=menuImage.find('img').innerHeight();
//     //console.log(imageHeight);
//     onImg.css('display','block');
//     offImg.css('display','none');
//     menuImage.animate({
//         height: imageHeight
//     },{duration: 500, queue: false, easing:'easeOutCubic'});
// }
// });

menu.on({'mouseover':function(){
    let tg=$(this);
    let onImg=tg.find('.text_image > .on');
    let offImg=tg.find('.text_image > .off');
    let menuImg=tg.find('.menu_img');
    let imgHeight=menuImg.find('img').innerHeight();
    // console.log(imgHeight)
    onImg.css('display','block');
    offImg.css('display','none');
    menuImg.animate({
        height:imgHeight
    },{duration: 500, queue: false, easing:'easeOutCubic'})
}
});

// menu.on({"mouseout":function(){
//     let tg=$(this);
//     let onImg=tg.find('.text_image > .on');
//     let offImg=tg.find('.text_image > .off');
//     let menuImage=tg.find('.menu_img');
//     let imageHeight=0;
//     //console.log(imageHeight);
//     onImg.css('display','none');
//     offImg.css('display','block');
//     menuImage.animate({
//         height: imageHeight
//     },{duration: 500, queue: false, easing:'easeOutCubic'});
// }
// });

menu.on({'mouseout':function(){
    let tg=$(this);
    let onImg=tg.find('.text_image > .on');
    let offImg=tg.find('.text_image > .off');
    let menuImg=tg.find('.menu_img');
    let imgHeight=menuImg.find('img').innerHeight();
    // console.log(imgHeight)
    onImg.css('display','block');
    offImg.css('display','none');
    menuImg.animate({
        height:0
    },{duration: 500, queue: false, easing:'easeOutCubic'})
}
});
```


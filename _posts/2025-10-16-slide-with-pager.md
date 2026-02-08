---
layout: post
title: "Slide with pager"
date: 2022-12-20
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



{% raw %}
```javascript
let slideUl = $('.slideUl');
let slideLi = $('.slideUl>li'); //움직이는 li
let leftBtn = $('.prev');
let rightBtn = $('.next');
let pagerBtn = $('.pagerBtn>li'); //pager
let current = 0;
let setIntervalId;
autoSlide()
// autoSlide
function autoSlide(){
    setIntervalId=setInterval(function(){
        let prev = slideLi.eq(current);
        let pagePrev = pagerBtn.eq(current);
        move(prev, 0 , '-100%');
        pagePrev.removeClass('on');
        current++;
        if(current==slideLi.size()){ //same as length
            current=0
        };
        let next = slideLi.eq(current);
        let pageNext = pagerBtn.eq(current);
        console.log(current)
        move(next, '100%' , 0);
        pageNext.addClass('on')
    },2000)
    
}
function move(tg , start , end){ //target, start, end
    tg.css('left',start).stop().animate({'left':end},500); //left 로 start 만큼 움직이고 left 로 end 만큼 animate
}
$('.slide').hover(function(){
    clearInterval(setIntervalId)
},function(){
    autoSlide();
});
rightBtn.click(function(){
    let prev = slideLi.eq(current);
    let pagePrev = pagerBtn.eq(current);
    move(prev, 0 , '-100%');
    pagePrev.removeClass('on');
    current++;
    if(current==slideLi.size()){
        current=0
    };
    let next = slideLi.eq(current);
    let pageNext = pagerBtn.eq(current);
    console.log(current)
    move(next, '100%' , 0);
    pageNext.addClass('on')
});
leftBtn.click(function(){
    let prev = slideLi.eq(current);
    let pagePrev = pagerBtn.eq(current);
    move(prev, 0 , '100%');
    pagePrev.removeClass('on');
    current--;
    if(current==-slideLi.size()){
        current=0
    };
    let next = slideLi.eq(current);
    let pageNext = pagerBtn.eq(current);
    console.log(current)
    move(next, '-100%' , 0);
    pageNext.addClass('on')
});
function move1(i){
    if(current==i)return; //만약 둘이 같다면 함수 멈추기
    let currentEl = slideLi.eq(current);
    let nextEl = slideLi.eq(i);
    currentEl.css('left','0').stop().animate({left:'-100%'},500);
    // current 번째 li 를 left:0 에서 left:-100 으로 animate 안보이게
    // i 번째 li 를 left:100 하고 left:0 해서 오른쪽에서 왼쪽으로 보이게 만들기
    //그리고 current 에 i 를 대입 함수 끝
    nextEl.css('left','100%').stop().animate({left:0},500);
    current=i;
}
function move2(i){
    if(current==i)return;
    let currentEl = slideLi.eq(current);
    let nextEl = slideLi.eq(i);
    currentEl.css('left','0').stop().animate({left:'100%'},500);
    // current 번째 li 를 left:0 해서 보이게 만들고 left:-100 으로 animate
    // i 번째 li 를 left:-100 하고 left:0 해서 왼쪽에서 오른쪽으로 보이게 만들기
    //그리고 current 에 i 를 대입 함수 끝
    nextEl.css('left','-100%').stop().animate({left:0},500);
    current=i;
}
pagerBtn.click(function(){
    let tg = $(this);
    let i = tg.index();
    pagerBtn.removeClass('on'); //일단 클래스 다 지우고
    tg.addClass('on'); //내가 선택한거만 클래스 주고
    if(current>i){ //만약 current 가 i 보다 크다 >> 다음에 올 애가 왼쪽에서 와야한다면
        move2(i);
    }else{  //다음에 올 애가 오른쪽에서 와야한다면
        move1(i);
    }
})
```
{% endraw %}


{% raw %}
```css
*{margin: 0; padding: 0}
ul{list-style: none}
a{text-decoration: none; color: #222}
.hidden{display: block; overflow: hidden; width: 0; height: 0; line-height: 0; text-indent: -99999em;} //ir 효과
.slide{width: 100%; height: 500px; position: relative; left: 0; top:0; overflow: hidden;}
.slide .slideUl{
position: relative;
 width: 100%; height: 100%; top: 0; left: 0}
.slide .slideUl li{ 
position: absolute;
 width: 100%; height: 100%; top: 0; left: 0;}
.slide .slideUl li a{display: block; width: 100%; height: 100%}
.slide .slideUl .slide01{background: url(../img/0.png) no-repeat 50% 0;}
.slide .slideUl .slide02{background: url(../img/1.png) no-repeat 50% 0; left: 100%}
.slide .slideUl .slide03{background: url(../img/2.png) no-repeat 50% 0; left: 200%}

.slide .arrowBtn{position: absolute; top: 50%; transform: translateY(-50%); width: 100%}
.slide .arrowBtn .prev{ position: absolute; left: 100px; cursor: pointer;}
.slide .arrowBtn .next{ position: absolute; right: 100px; cursor: pointer;}
.slide .pagerBtn{position: absolute;  bottom: 100px;  left: 50%;transform: translateX(-50%); }
.slide .pagerBtn li{width: 15px; height: 15px; margin: 0 5px; border-radius: 50%; background: rgba(0,0,0,.3); float: left;  cursor: pointer;}
.slide .pagerBtn .on{background: rgba(0,0,0,1);}
.slide .pagerBtn li a{display: block;}
```
{% endraw %}


{% raw %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>slide01</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <!-- <script src="./js/script.js" defer></script> -->
    <script src="./js/script_1.js" defer></script>
</head>
<body>
    <div id="wrap">
        <div class="slide">
            <ul class="slideUl">
                <li class="slide01"><a href="#" class="hidden">메인배너1</a></li>
                <li class="slide02"><a href="#" class="hidden">메인배너2</a></li>
                <li class="slide03"><a href="#" class="hidden">메인배너3</a></li>
            </ul>
            <div class="arrowBtn">
                <img src="./img/left.png" alt="prev" class="prev" width="30" height="50">
                <img src="./img/right.png" alt="next" class="next" width="30" height="50">
            </div>
            <ul class="pagerBtn">
                <li class="on"><a href="#" class="hidden">1</a></li>
                <li><a href="#" class="hidden">2</a></li>
                <li><a href="#" class="hidden">3</a></li>
            </ul>
        </div>
    </div>
</body>
</html>
```
{% endraw %}


👉🏻 움직이는 li prev 를 0 에서 -100% 로 보내고 i++ next 를 100% 에서 0 으로 보내기


👉🏻 pager prev 는 다 지우고 i+1 에 add i++ i에 add/ next 는 다 지우고 i— i에 add


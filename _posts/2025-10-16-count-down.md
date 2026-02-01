---
layout: post
title: "Count down"
date: 2023-01-10
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



![Untitled.png](/aibOS/public/images/posts/28e0a7f9-ae7238359c28.png)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js" defer></script>
</head>
<body>
    <div id="year" class="year"></div>
    <h1>New Year Countdown</h1>
    <div id="countdown" class="countdown">
        <div class="time">
            <h2 id="days">00</h2>
            <small>days</small>
        </div>
        <div class="time">
            <h2 id="hours">00</h2>
            <small>hours</small>
        </div>
        <div class="time">
            <h2 id="minutes">00</h2>
            <small>minutes</small>
        </div>
        <div class="time">
            <h2 id="seconds">00</h2>
            <small>seconds</small>
        </div>
    </div>
    <img src="./img/spinner.gif" alt="spinner" id="loading" class="loading">
</body>
</html>
```


```css
*{margin: 0; padding: 0; box-sizing: border-box;}
body{background: url(https://cdn.pixabay.com/photo/2021/12/27/16/40/sylvester-6897648_960_720.jpg) no-repeat center center/cover; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden;}
body::after{content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, .6);}
body *{z-index: 1; color: #fff;}
h1{font-size: 60px; margin: -80px 0 40px;}
.year{font-size: 200px; z-index: -1; opacity: .4; position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);}
.countdown{display: flex; transform: scale(2);}
.time{display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 15px;}
.time h2{margin: 0 0 5px;}
```


```javascript
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const year = document.getElementById('year')
const countdown = document.getElementById('countdown')
const loading = document.getElementById('loading')

const currentYear = new Date().getFullYear();
// console.log(currentYear)
const newYearTime = new Date(`January 01 ${currentYear+1} 00:00:00`)
console.log(newYearTime)

year.innerHTML=currentYear + 1

setInterval(updateCountdown,1000)
function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime-currentTime;

    const d = Math.floor(diff/1000/60/60/24) //day
    const h = Math.floor(diff/1000/60/60) % 24 //hour
    const m = Math.floor(diff/1000/60) % 60 //minute
    const s = Math.floor(diff/1000) % 60 //second

    days.innerHTML=d;
    hours.innerHTML=h < 10 ? '0'+h : h;
    minutes.innerHTML=m < 10 ? '0'+m : m;
    seconds.innerHTML=s < 10 ? '0'+s : s;
}
setTimeout(() => {
    loading.remove()
    countdown.style.display='flex'
},1000)
```


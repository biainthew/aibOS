---
layout: post
title: "Count down"
date: 2023-01-10
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/704cf7cc-d379-4bf9-978e-179f554f775d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYLYDKU%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC6HNSjNu3bVM%2FdH1qcv1qaXkGzLrn%2Fo1vpy0s6DyUCiwIgPGBe5%2FsMvMG%2BAwmTcCKVPpa8MwfF39KjJHkr7bAyNKUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJc7Tr0i%2BEJpaOS8%2BircA7roD44VaPizSvCygQHID%2FciO2l6I%2BON9bDlTnYbS5dAhX1NiKH0C0zbJQjrItMAFs2diV2bcUGaWqAiXyj89mMR9NIv%2BrSRK1sCigeSZP7BG0%2FO8Diy3M2UOPIwien9vXKMXQW5sehimdKhvTIQ45YK831lf3mHzxyLAJrPf3VTr%2FbVhZ5M2vUh6peXgekangKwfKC9oC0BoIbfE7KD33E5pHBFAuPjPIH%2Fxi3RQlNEYvmeJTVD%2FN5j4Y%2BoV801pqLgOZ3iZdFMYOEHdS7UPGX3GAZ18UbNJaMzMh2Al%2BAoVBDpHiA8GIQZnjKArsrAoM5P4vj%2FyN%2FgGfxOhGDgQ6lsbFvP6dW%2FZ5I2o3KHkJCuToa%2FrkW3pCc%2FZ0MPJqEMCvw%2F5xiIaSgifbubnwcTgDGzz4O5A4%2Bf8KC7IagdKagdSMld9wQ3mW8AfWreRn42ZWBAcWdO5yqedRcgNSQSGTKUw00qjr%2BzcBcbxap8U7hWj6GPDnPvJtDXUOCItpzoR3bv3IqLGDOTdFfQo4pgAw9zCVZTFTr3%2BELxPfUF3lj8ZWXYRL6vfujIALyFZPkZpDp4exwADNQpTcYKnC66dhAZKjn3Qk2RvIOF%2FHR0mTmhcKdzL9WEjLwtUbOCMJD73MsGOqUB7HfugkbpiQJa%2FxB%2BytOQb6A1bs%2BxaQRA%2BxbftCrXtlkrUGgX0gm4dVWJNhCuSyQXLlJ9mnQbO8aEM6%2BKwpfduuZJ%2BQ0czDRickxdhTjrJPTTPS7jeu7zZMCqAFtGwPjrCU0Cy3ZB1H4IDS2%2FM%2BCDDmoAjeMMzb9NX1NLvLkejZPjmjSy1aRPqYUjiO2i0WIx1OpMKgqtnx%2FWf1XR64DBO4mh6AUZ&X-Amz-Signature=03881d3fa12ee798f264ee1256feca77a44210ee096d907807e39ecc8c529412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
layout: post
title: "Count down"
date: 2023-01-10
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/704cf7cc-d379-4bf9-978e-179f554f775d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQINSLE%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBw7BUuIVTwiNB71oV15N7W%2Bk4ABcv3IEAIhhLp1eT%2B9AiAmcQFkJXOBdcqJG03VHyQxvZFtOnlwhXnQhb%2B%2Bpp2Ydir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMG81MyBDnY30VB1AyKtwDrYz7oPi3EWnJGfUuWeU%2B0VKC%2FpUDDpux1ZwzRSmcGR1NH6YBlbFJzK4YIEMbA7u6jjBumqW4RezEQXdPdRy%2Bvx6xQksPD%2Bbf6MKjKWwndL6s%2BgcchG%2BzwobRIx8qIkEATKUw1aENlZgFYWApiJYUEuq0o1gYeMovWESYJdlJ7Bevuyv0sbYj%2Br1oJZoiJ29aTtCoM1Ho33XE98ucsObnmD0fISdPDGslIP%2FYq1PbvaKobo4x3h7S8QlcO2q7qfKJahHBegi2BPkfZh%2BWFdrE1FJaWuPYB6cnH%2Fvs3jgJk7PiXPNYL%2BC6AnuBlS91tYzbm6F9eY%2FeCTaDg9DrE3EMbTVS8vsCjDlDVQSlBO5JGia996UkPDylaHtlJ26c%2BQlGCoOdfq%2BH99IxnC9mcR7GFUkvqwapIT7cYUQ4R9R2UyDcURDtsiDovDBt475LfQNrAkHUwTApbytNvLUl6EuYFIL%2B0tUyUvVAZCTBn%2B9gCZnNYTcokNM%2Fmc1WnQ5pihgHBo0ig5V4XmXPNj4qHRPhI41C90ZniHLvdPH%2BlSUYp2RhDOj1hYwkLfHc9bpjNX3gkxUIDOiDFw6HGhPp1chJAYBJDk9frhjUdfCx6Vh%2BqwfGPU8c7wpyLo9AX6kw7prdywY6pgHikz3SSOENnEltrtMB0ayGWKLpWUuwBaPFkHJUz99WRCCyf3HJ0zMTverqrbNpcuJ5Cx1QSRQETEB3lSrVofw1N48IwhevlHqNTthvbHsxBmOhIQzWjFJqGcRsxsuUs2qW94rIWTafqHwnqeCV%2Bhbg%2FILuXDbOcbUznvyF3lOX50%2FRT9Nsy%2FRD3TWUNNZFDOA%2F4wclec%2FoIDrb0mKhV3r2mRivExjY&X-Amz-Signature=491d886808315ab223aebd4a2cca7bd3665e76bcf37b26fde523cf2f69c84a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


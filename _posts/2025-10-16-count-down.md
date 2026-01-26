---
layout: post
title: "Count down"
date: 2023-01-10
categories: [general]
tags: [Javascript/Jquery]
---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/704cf7cc-d379-4bf9-978e-179f554f775d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHYAQ7M%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDB3%2FNTlAmpbXsKnlbae9DXnfDxlCorV1%2FX9%2Bkckdn4FgIgEfiMvpZGp9FyDo050548hJYlOfI44VZHirGEBJfO3mwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFQNZCLthywFx2DUFCrcAwwirw1YgfpVxW9LM%2B6VGeY6ovoiy4yJa6vJpZLSpzqAZY2JnMYwIOmqXTwt%2BomoF9TN2%2ByCrtNbQ93W19dzzdUhXEjjodxjjx%2F1wlH5Gg%2BCcBNoYrqaJKJYjmIo9dX%2BjYrEpg0udcLL6Hx9taGAzM4zex3R8BuBjJbUVKrXzkDYvI7KQa%2Fi33nunTTVzM4rm%2Btgzqezd8w3Hi%2B2ijIfUEbiB3tT3Dn%2Bt%2Fj50PIQCXt78x9mb6Lo7mVyGlvy8HDEVWlqvwYOmHn7GQlS6mBETWDGKdw6khFNofG7Em3a77SiUhvOqJVXUPXvu48FUW37cWU6e7%2FeE0w%2Fgm%2B0LNbpj%2BaZdPbL6Udttpp4DZ%2B3oHd18U1yP0oZiEfzH7R37SIoCNBvL%2FPEGMvFIJGT4%2FDOAFtj6pO%2B%2FNUTo1uWExGOGz1WoIDQayrzyVLgUyqV%2F3RzDZ0%2Ftu49Y2kpEhZZWi8lvCvPt8RL0j9qICB%2BFP6IDIKdJwKCohpqA%2B5%2F8oz7zl5t%2B33KL4AG4HHJ8VCPMPh3LmJefEGyj80Ak%2FqljzaOmzfkMrAT9Hou8koYeqbz%2Bf8zxGvKXHI2xU4SNIkXCgdmF4lVkgh%2BwW%2FqrjgL91pK5Bro7%2Fuj%2F1jjGO2gTHuYMKjY3MsGOqUB%2FFSBN9%2BduYp4cWhhMPK%2FIlyZw7EKZqixHeqp6G80xGsMjayI7eopFmKOxcmiU9CZmg%2F3EnqljJe2Zr19e7R%2Fhx4Zqu7fbBnivHAi9VhpH%2BXAx9L8joNYn9Uyl5EOMXdXmu%2FDcMbs1Gtm4MCpBQZVnWJy84xIaKoJguo%2BIxZU4ICvMzIm9P0JzwgOTN0xUUWlP5XIENWMztAdyFBngbUdYdWAKXfl&X-Amz-Signature=f2195733edee0689b8ade230fd7c40fec9016e174b99c25ac936453586aa1c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


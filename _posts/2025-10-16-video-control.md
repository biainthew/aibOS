---
layout: post
title: "Video control"
date: 2023-01-11
categories: [general]
tags: [Javascript/Jquery]
---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/82574043-58b5-4140-ac7d-a7abb8ceadbf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHW4UWT%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDAFYFj5E6I80bWt%2Bcw7r9bhZKUhTyU3duZ6gHqVJAPlgIgVtj5PCaYScw7jYhYsVuXG3Shz5D1c27JnEOmhdUqmJkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDH3KhbYWrajN2GPQ8ircA9faRhPVoLrPWyGgW8K8IPofghFLBfpGBC18b3nQLOdxZnbZAfeEl1r3qQIQfK2sNib0gHDt%2Bz4NUfxf9pn36bji1YpoyHueaewE2VcRgQOqRZaZRgLenJYrV4rKmDyoQEDRt0%2BZgvCGRXGJ7EdHI6z%2B4%2F0bRsfDTNff19wQ4460GJS3QehFG%2F7s6jFj8J%2B880qhx%2FgYVOD7hnH59I6cAEpSt1wAySR22reGKAewX0QKxdpV9yJ4d8mFPQNC26U%2FFWat197F%2FzWqZZoLJat7gBL0XFnL%2FnLNOb3Kih5hWizeProVYIUTw67KGaOWh5AsyjTg7atJVp5hS3h%2FRRXBnQ8LiaD4ghL%2BsV4YqHZ5uCtPZe7vB1c3RlelnphISOmZ2hpwfi5jBhZ1y59WcKgAQyzbV5lzYNwdSBqUkDzZf%2BqmSchBfg%2B7zVaMNX%2FeqE3Ei%2BT%2FYZ6iWz1vWedsWhBog6i9eolo6ojmQP0x2wxo2Ulf25eohMIpnPhiN3GbZyczYp8zlO5mgaBV51CCMQKHtC%2Fm3v5cyrtfrXOijTaVyIa1A02nbjHnHuRjFMpC2DUeFcQ72lFI5d0egQiCUaD5XlehUOMXGUSoke1iHGoINcTHH4DBDxtlCYYb7CGzMKPY3MsGOqUBw6fOvD1JOnViqFvR0lkX5zrPtSjpesM9p5gIdQCzipZZsGnF5tbv3WOoHCKW2nr2EM76ET2gI1jjvfPbgM9cSYjbGG2vHyWoYEeWCnpcr39mjlz6Y36VijKsnN7XxLCJvrag6zYvRwciXP6gzFxKlKgajriJTqYeqQDI8ibvrmjYUxCZ67TvkqBuGps06AD18IMHtz4oV5ekXMs19vvEB55k3pFH&X-Amz-Signature=d5e848886cab167a8ce929dfbf4c5531d52a2d4878b2042a1c75c056d6d7f69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
    />
    <link rel="stylesheet" href="./css/progress.css">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js" defer></script>
</head>
<body>
    <h1>video player</h1>
    <video src="./video2/js.mp4" id="video" class="screen" poster="./video2/post.JPG"></video>
    <div class="controls">
        <button class="btn" id="play">
            <i class="fas fa-play"></i>
        </button>
        <button class="btn" id="stop">
            <i class="fas fa-stop"></i>
        </button>
        <input type="range" id="progress" class="progress" min="0" max="100" step="0.1" value="0">
        <span id="timestamp" class="timestamp">00:00</span>
    </div>
</body>
</html>
```


```css
*{margin: 0; padding: 0; box-sizing: border-box;}
body{background: rgb(240, 240, 240); display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;}
h1{color: #fff; margin-bottom: 10px;}
.screen{
    cursor: pointer;
    width: 60%;
}
.controls{
    background: #333;
    color: #fff;
    width: 60%;
    padding: 10px;
    display: flex;
    gap: 5px;
}
.controls .btn{
    border: none;
    background: transparent;
    cursor: pointer;
}
.controls .fa-play{
    color: rgb(212, 212, 212);
}
.controls .fa-stop{
    color: rgb(255, 92, 92);
}
.controls .fa-pause{
    color: #fff;
}
.controls .timestamp{
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
}
```


```javascript
const video=document.getElementById('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');

function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updatePlayIcon(){
    if(video.paused){
        play.innerHTML='<i class="fas fa-play"></i>';
    }else{
        play.innerHTML='<i class="fas fa-pause"></i>';
    }
}

function updateProgress(){
    progress.value=(video.currentTime / video.duration) *100;

    let mins=Math.floor(video.currentTime / 60);
    if(mins<10){
        mins='0'+String(mins);
    }

    let secs=Math.floor(video.currentTime % 60);
    if(secs<10){
        secs='0'+String(secs);
    }
    timestamp.innerHTML=`${mins}:${secs}`;
}
function setVideoProgress(){
    video.currentTime= (progress.value * video.duration) / 100
}


function stopVideo(){
    video.pause();
}
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
play.addEventListener('click', updatePlayIcon);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)
```


---
layout: post
title: "Video control"
date: 2023-01-11
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



![Untitled.png](/aibOS/public/images/posts/28e0a7f9-2e3ac42b247b.png)


{% raw %}
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
{% endraw %}


{% raw %}
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
{% endraw %}


{% raw %}
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
{% endraw %}


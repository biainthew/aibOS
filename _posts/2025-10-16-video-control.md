---
layout: post
title: "Video control"
date: 2023-01-11
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/82574043-58b5-4140-ac7d-a7abb8ceadbf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLNNFBT%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDPQ1A8mkIXTqWt6%2BFoTMgX9fk7MLi%2BPeTsIjarf3D4mwIhAOt4lLjtdjj1fEowUXkBWApFz%2BD4QZ6GVJtpXy5OSIn5Kv8DCDwQABoMNjM3NDIzMTgzODA1IgxIliigz%2FxbuHQm97Mq3AN6BQutgkYJpf12PVd%2BvyXXL%2Fd%2FCQoey%2Bv7C%2FkpPaHy%2FvRidRuPuNo7n%2Fyu%2F7yES3HwFdfRJDyzhU7gh8Q8jeLfY2hicG11pZL1ft3yKVPTK4N7mFSwHJKlYdioRjir7OeXfPGeoWaB%2Bp0dvlw%2B%2Fs9SeATBHhRg4RfpZkTQj8elkHL%2FVIWi2ugTHEeSpTBcd9DiioojqR5DIEJ7JfSMwHYhWsBnFMsdeAflSwKDlS66HPZFOeaDixvSGn7KqJXBikTBBCUU9Qpw8xqx9HgggWyUCBtkJSW28S0N4ewskMBRfPUQurpXsa7t5pYsmll0nwtDidrmV1meM3Pvh56kusnRlx0naBXgrUMADZcFsm%2B4f3Gdm9%2Ftvpg45sJ14Jd%2BNeY9CQpHXI75Cgl9ftjFmai72kdJ8wgiXypSKo459V64dX1ll0SLs8vzsn799073RrfemaXt2sYnT7tMrmAdkGCTRLDdmqCHg1EEwlFnmLzZW15kn0aDs4NsKLk6ySWmP9q2WJanF0gSNQ1qQ1s%2FskRqK73fxyoZsLxJUTQXQGB57ueEBY05cyXHbHDE2ObyCpNR9XoqGss5O2otYQ8Y2QL1V7ci2KE4dMHXGlDg5qvwcZAQ5vEBiEyVsa4d4zCSm93LBjqkAefTuXwchBzi7b%2F3arsbfYxk37EQOwiXv5bpnsJhRbm%2BY0OZWLYbtZhap3H5iCcLW8Oomje3wQgLtU1xm%2BwmedLEqjsUVCwsT19M66MpQTQKUXUozU1a72fugkXBWn3DXL9yIObd6dOSuxbpK9iCOlsD4bAUkHtv1g34HLvSw5iWeBQg65WgRQL%2FSmXjEmCcy8A1c3iKfdfD4psUrnCYfvr1RCyt&X-Amz-Signature=c323c34a13e281b67646b40c7b9be5f057363ba9422e87c6ffa540e2a3cbc18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


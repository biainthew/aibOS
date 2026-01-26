---
layout: post
title: "Video control"
date: 2023-01-11
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/82574043-58b5-4140-ac7d-a7abb8ceadbf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6XVWPX6%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCHS%2FQzpXOjd4XAFyonLI8x2WfqIj2yVO53qrxq2DyrBgIgfTnjj7WJNj0g%2BdBWbLcqpv6uHdmh8%2BiqcH0rz%2BImlbsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKzdSigpe%2BtAFBBK2ircAyBTsF0T52ik%2BYEZHaJQNWucg6W8wcGOja6Gk1wSf3lszUBwQLGudpnthV7%2Be5W9aRkhU23qIcISp1%2BgANrrYcDqrgwdAthz5SKVrepEG156UtYSj6bes3%2Bz0WWCa4iiTj03zU3BH6ETL%2Bl30tZZbDJaCQMA53P8McPbMlNX9SAAqScp9a%2BLpr5ke4rngoy%2F0ZEhw0hGV6inFUrJmJcjqeekYH95I9swadIsv3mSjqBKkLJjyfE3x2lt27eD70tsK0%2Fk3H25hQpInoEFsxHVLDKiTaUj%2Fk9hhzYi3D44T8OkWv%2F6JjPxkNMwSTk5%2BUT%2BvT%2FWFtHW3nOPrUj1zRR7ObchxxJZsyGaMcrOi%2FpLqtb8b7epv%2B6Y3AV6wR4fh5qERYpBcD7U3FN4ju4uM2DpQ4IiQRKmCQuzsX6FKL5RvKFL%2Ba6PSzLRKDyrlvcxgGFmQAdIyqp3hZL8ArT%2BPabPJc%2F22zUUHWK9wjEzH2M2lcpWAe4TvwQwhz1klB%2FyLO%2FPjZWUpGs5zuN%2BQFrMyTBn5BM6aMhBQ79mwq0w5uANLpl1BfwdaPBLPfZx26xows%2FtIdv%2FXBDraCCu9lHD3mEhMRnQQxa7%2BLosE0cVFPvmcySwOtHSXpT6Jtze0%2Bw%2BMKf73MsGOqUBJLKD5GqV7PWrN42f8Y9POmbxR92c48OEVtHI8Yq9fWjgj8CvGzlwx6vO0rdLdAQdRg4NEtLTXbecenio8pWytkzKtvkoKZ5hz6W9CTMslxN2eJHdfSZZ7341ngSe4IY9MW4dGBaTidOl7D1J9lIZEvBRi7Pe7oea21fP3Tx7z2pknajpwOsCB6ETh6RHnbehCvxxAgjTZciKY37Eaqrsx%2ByI3oTt&X-Amz-Signature=361dde491232f6bd83e3d9939b7e864fbb96796223ab9eb39974a7562af59090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


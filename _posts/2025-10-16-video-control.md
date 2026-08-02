---
layout: post
title: "video control"
date: 2022-12-05
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



# _play ()_


: 비디오 재생


### ✔️ 문법


> 💡 `.get(0).play()`


# _pause ()_


: 비디오 멈춤


### ✔️ 문법


> 💡 `.get(0).pause()`


# _muted_


: 소리


### ✔️ 문법


> 💡 `.get(0).muted = 'true'`


👉🏻 음소거


> 💡 `.get(0).muted = 'false'`


👉🏻 소리 재생


{% raw %}
```javascript
const videoPlay=$('#videoPlay')
const videoPlay1=$('#videoPlay1')
$('#vplay').click(function(){
    videoPlay.get(0).play();
})
$('#vpause').click(function(){
    videoPlay.get(0).pause();
})
$('#vmuted').click(function(){
    videoPlay.get(0).muted=true;
})
$('#vmutedOn').click(function(){
    videoPlay.get(0).muted=false;
})

$('#vplay1').click(function(){
    videoPlay1.get(0).play();
})
$('#vpause1').click(function(){
    videoPlay1.get(0).pause();
})
$('#vmuted1').click(function(){
    videoPlay1.get(0).muted=true;
})
$('#vmutedOn1').click(function(){
    videoPlay1.get(0).muted=false;
})
```
{% endraw %}


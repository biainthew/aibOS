---
layout: post
title: "Text Reader"
date: 2023-01-06
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



{% raw %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/speech1.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Speech Text Reader</h1>
        <button id="toggle" class="btn btn-toggle">Click here</button>
        <div id="text-box" class="text-box">
            <div id="close" class="close">X</div>
            <h3>Choose Voice</h3>
            <select name="text" id="voices"></select>
            <textarea name="" id="text" placeholder="Enter text to read..."></textarea>
            <button class="btn" id="read">Read Text</button>
        </div>
        <main>
        </main>
    </div>
</body>
</html>
```
{% endraw %}


{% raw %}
```css
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

*{box-sizing: border-box;}
body{
    font-family: 'Lato', sans-serif;
    background: rgb(245, 145, 145);
    min-height: 100vh;
    margin: 0;
}
h1{text-align: center;}
.container{margin: auto; padding: 20px;}
.btn{
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    padding: 8px;
    background: rgb(40, 171, 154);
}
.btn:active{transform: scale(0.98);}
.btn:focus,
select:focus {outline: 0;}

.btn-toggle{display: block; margin: auto; margin-bottom: 20px;}
.text-box{
    width: 70%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -800px);
    background: #333;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    transition: 1s ease-in-out;
}
.text-box.show{
    transform: translate(-50%, 0px);
}
.text-box select{
    background: rgb(40, 171, 154);
    border: 0;
    color: #fff;
    font-size: 12px;
    height: 30px;
    width: 100%
}
.text-box textarea{
    border: 1px solid #333;
    border-radius: 4px;
    padding: 8px;
    margin: 15px 0;
    width: 100%;
    height: 150px;
}
.text-box .btn{width: 100%}
.text-box .close{float: right; cursor: pointer;}

main{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:10px;
}
.box{
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: box-shadow .2s ease-out;
}
.box.active{
    box-shadow: 0 0 10px 5px  rgb(40, 171, 154);
}
.box img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.box .info{
    background-color:  rgb(40, 171, 154);
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    margin: 0;
    padding: 10px;
    text-align: center;
    height: 100%
}
@media screen and (max-width:1200px) {
    main{
        grid-template-columns: repeat(3, 1fr); 
    }
}
@media screen and (max-width:760px) {
    main{
        grid-template-columns: repeat(2, 1fr); 
    }
}
@media screen and (max-width:500px) {
    main{
        grid-template-columns:  1fr; 
    }
}
```
{% endraw %}


{% raw %}
```javascript
const main=document.querySelector('main');
const voicesSelect=document.getElementById('voices');
const textarea=document.getElementById('text');
const readBtn=document.getElementById('read');
const toggleBtn=document.getElementById('toggle');
const closeBtn=document.getElementById('close');
const data = [
    {
        image: './img/drink.jpg', 
        text:"저 목말라요"
    },
    {
        image: './img/food.jpg', 
        text:"배고파요"
    },
    {
        image: './img/tired.jpg', 
        text:"졸려요"
    },
    {
        image: './img/hurt.jpg', 
        text:"아프다고"
    },
    {
        image: './img/happy.jpg', 
        text:"야호"
    },
    {
        image: './img/angry.jpg', 
        text:"아오빡쳐"
    },
    {
        image: './img/sad.jpg', 
        text:"슬퍼요"
    },
    {
        image: './img/scared.jpg', 
        text:"엄마"
    },
    {
        image: './img/outside.jpg', 
        text:"놀고싶어요"
    },
    {
        image: './img/home.jpg', 
        text:"좋은집에살고싶어요"
    },
    {
        image: './img/school.jpg', 
        text:"학원은공부하는곳 "
    },
    {
        image: './img/grandma.jpg', 
        text:"할머니사랑해요"
    }
];

toggleBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.toggle('show')
});
closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show')
});

data.forEach(createBox);

function createBox(item){
    const box=document.createElement('div');
    /*  
    <div class='box'>
        <img src="" alt="" />
        <p className="info"></p>
    </div> 
    */

    const {image, text} =item; //구조분해할당
    box.classList.add('box');
    box.innerHTML = 
    `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;
    box.addEventListener('click', () =>{

        setTextMessage(text);
        speakText();
        console.log(text)
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });



    main.appendChild(box);

}
const message=  new SpeechSynthesisUtterance();
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option= document.createElement('option');
        option.value=voice.name;
        option.innerText=`${voice.name} ${voice.lang}`
        voicesSelect.appendChild(option)
    })
}
function setTextMessage(text){
    message.text=text;
}
function speakText(){
    speechSynthesis.speak(message)
}
function  setVoice(e) {
    message.voice=voices.find(voice => voice.name === e.target.value);
}

voicesSelect.addEventListener('change', setVoice);

readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
});

speechSynthesis.addEventListener('voiceschanged',getVoices)
getVoices();
```
{% endraw %}


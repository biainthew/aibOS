---
layout: post
title: "Input : focus blur"
date: 2022-12-07
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### ✨ 예제


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #wrap{width: 500px; border: 5px solid #ddd; margin: 50px auto; padding: 30px;}
    </style>
</head>
<body>
    <div id="wrap">
        focus / blur <br>
        <input type="text" id="text1" onfocus="onFocus()" onblur="onblur1(this)">
        <br>
        <hr>
        <select id="select1" onchange="eventChange()">
            <option value="Ko">Korea</option>
            <option value="Ch">China</option>
            <option value="Ja">Japan</option>
        </select>
        <br>
        <hr>
        keydown
        <br>
        <input type="text" id="text2" onkeydown="eventKeydown()">
    </div>
</body>
</html>
```


```javascript
<script>
        function onFocus(){
            console.log('내용 쓰기')
				// 포커스 되면 콘솔창에 뜸
        }
        function onblur1(obj){ //함수 이름 onblur1 매개변수 obj
            if(obj.value==''){ //만약 obj의 value값이 공백 / 입력 안했으면
                alert('필수 입력 값입니다') // alert창이 뜸
            }else{ //입력 했으면
                console.log(obj.value) //콘솔창에 obj value값을 띄워
            }
        }
        function eventChange(){ //함수 이름 eventChange
            let selectValue=document.getElementById('select1').value;
						// 변수 selectValue 에 select의 값을 넣어라 / 선택된 옵션의 value값
            console.log(selectValue)
        }
        function eventKeydown(){
            console.log(event.key) //누른 키 이름을 보여줘
            
        }
    </script>
```


### ✔️ 문법


> 💡 `.onfocus()`  
> `.onblur()`


👉🏻 focus 되면, focus 벗어나면


### ✔️ 메모

> - js에 function onblur(obj){}  
> html에는 onblur=”함수이름(this)”

### ✔️ 문법


> 💡 `.onchange()`  
> `.onclick()`


👉🏻 이벤트에 변화가 있을 때, 이벤트에 클릭을 했을 때


👉🏻 주로 타자를 입력할 때, 클릭을 할 때 사용


### ✔️ 문법


> 💡 `.onkeydown()`  
> `.onkeyup()`  
> `.onkeypress()`


👉🏻 키를 누를 때, 키에서 뗄 때, 키를 누를 때


👉🏻 1,2 는 키를 누르고 떼는 동작 자체에 반응


👉🏻 3은 문자가 실제로 입력 됐을 때 반응


👉🏻 [예시](https://itprogramming119.tistory.com/entry/React-onKeyDown-onKeyUp-onKeyPress-%EC%B0%A8%EC%9D%B4)


### ✔️ 메모

> 

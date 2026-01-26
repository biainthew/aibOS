---
layout: post
title: "Input : phone"
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
        #wrap{width: 700px;  padding: 30px; margin: 50px auto; border: 5px solid #ddd;}
        input:invalid{border: 1px solid #f00}
    </style>
</head>
<body>
    <div id="wrap">
        <input type="text" id="tel1" maxlength="3" onkeydown="inputEvent(event, this.value)" onkeyup="next(this.value, 3, 'tel2')" required pattern="^01[0-9]{1}">
        <input type="text" id="tel2" maxlength="4" onkeydown="checkNum(event, this.value)" onkeyup="next(this.value, 4, 'tel3')" required pattern="[0-9]{4}">
        <input type="text" id="tel3" maxlength="4" onkeydown="checkNum(event, this.value)" required pattern="[0-9]{4}">
    </div>
</body>
</html>
```


```javascript
<script>
        function next(val, len, nextId){ //next 라는 이름의 함수 매개변수는 value 개수 다음에 올 선택자의 아이디
            if(val.length==len){ //만약 value의 개수가 매개변수 개수 와 같다면
                document.getElementById(nextId).focus(); //매개변수 다음에 올 선택자의 아이디를 가진 애 한테 포커스 해 / 개수가 맞으면 다음으로 넘기기
            }
        }

        function checkNum(event){ //checkNum 이라는 이름의 event 함수
            let key=event.key; //key 는 event 되는 그 키야
           if(key >=0 && key <10){ //만약 이벤트 되는 그 키가 0보다 크거나 같고 10보다 작으면
                return true //?? 참이야
           }else{
            event.preventDefault(); //?? 이벤트에 원래 속성 지워 입력 안되게 해
           }
        }
        function inputEvent(event){
            if(event.key.match(/[^0-9]/)){ //이벤트된 키가 숫자면
                event.target.value =  event.target.value.replace(/[^0-9]/, ''); // 이벤트 타겟의 값을 공백으로 바꿔 / 안쳐지게
        }
        }
    </script>
```


### ✔️ 메모

> - required : 필수사항 (값을 입력하지 않으면 안넘어감)

### ✔️ 문법


> 💡 `pattern=””`


👉🏻 html 태그의 속성값으로 넣을건데 정규식이 올거야


### ✔️ 문법


> 💡 `maxlength=””`


👉🏻 최대 개수 , html 태그의 속성값으로 넣음


---
layout: post
title: "Input : html element"
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
    <title>element</title>
    <script src="./js/script.js" defer></script>
    <style>
        #wrap{width: 500px; border: 5px solid #ddd; margin: 50px auto; padding: 30px;}
    </style>
</head>
<body>
    <div id="wrap">
        Text:
        <br>
        <input type="text" id="text1" value="abc" size="40">
        <br>
        <hr>
        관심사 (checkbox) :
        <br>
        <label><input type="checkbox" name="chk_interest" value="it"> IT/Computer</label>
        <label><input type="checkbox" name="chk_interest" value="sports"> 스포츠</label>
        <label><input type="checkbox" name="chk_interest" value="shopping"> 쇼핑</label>
        <label><input type="checkbox" name="chk_interest" value="book" checked="checked"> 도서</label>
        <label><input type="checkbox" name="chk_interest" value="entertainment"> 엔터테인먼트</label>
        <br>
        <hr>
        동의 (radio):
        <br>
        <label><input type="radio" name="radioY" value="Yes"> 동의</label>
        <label><input type="radio" name="radioY" value="No"> 비동의</label>
        <br>
        <hr>
        선택 (select):
        <br>
        <select id="select1">
            <option value="Ko">Korea</option>
            <option value="Ch">China</option>
            <option value="Ja">Japan</option>
        </select>
        <br>
        <hr>
        <div id="el">
            <h1>제목</h1>
        </div>
        <br>
        <hr>
        <button type="button" onclick="save()">저장</button>
    </div>
</body>
</html>
```


```javascript
const val = document.getElementById('text1').value='안녕';
//val 이라는 변수에 input value값을 바꿔서 대입
console.log(val)

function save(){ //함수 이름 save
    let saveText1=document.querySelector('#text1').value='안녕';
		//input value값을 바꿔서 변수에 대입
    console.log(saveText1)

    let saveCheckbox=document.getElementsByName('chk_interest')
    console.log(saveCheckbox)

    let saveCheckbox1=document.querySelector('[name=chk_interest]:checked')
		//name 값이 chk_interest 이고 checked 되어 있는 선택자
    console.log(saveCheckbox1)

    let saveRadio=document.querySelector('[name=radioY]:checked')
    console.log(saveRadio)

    let saveSelect=document.getElementById('select1');
    console.log(saveSelect.value);

    console.log(document.getElementById('el').innerHTML)
}
```


### ✔️ 메모

> - getElementsByName : name 요소로 선택자 가져오기  
> - input 속성에 checked:checked 추가하면 체크된 상태로 출력  
> - input radio 는 name 이 같아야 중복체크가 안됨

### ✔️ 문법


> 💡 `.onclick("함수이름")`


👉🏻 클릭하면 이 함수를 실행해 (html 태그 안에 넣는 속성)


### ✔️ 메모

> [- click 과 on(’click’) 차이](https://myhappyman.tistory.com/123)  
> - 동적 : HTML문서를 작성할때 HTML코드를 입력한 것이 아니라 HTML페이지의 렌더링 후에 페이지를 사용하면서 스크립트를 이용해서 순간순간 바꾼다는 뜻

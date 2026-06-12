---
layout: post
title: "[Error]is not iterable"
date: 2023-01-19
categories: [general]
tags: [React]
excerpt_separator: ""
---



: [참고링크](https://mytory.net/archives/13123)


🦁 똑같이 썼는데 왜 ..?


👇🏻 오류 코드


{% raw %}
```javascript
import {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const [username, message] = form;
    const onChange = e => {
        const nextForm = {
            ...form, //기존의 form 내용을 복사한 뒤
            [e.target.name]: e.target.value //원하는 값을 덮어씌우기
        };
        setForm(nextForm);
    }
    const onClick = ()=>{
        alert(username+': '+message);
        setForm({
            username:'',
            message:''
        })
    }
    const onKeyPress = e=>{
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name='username' placeholder='사용자명' value={username} onChange={onChange}/>
            <input type="text" name='message' placeholder='아무거나 입력해 보세요' value={message} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>

    );
};

export default EventPractice;
```
{% endraw %}


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.01.24.png](/aibOS/public/images/posts/28e0a7f9-261d5023b0be.png)


👇🏻 해결 방법


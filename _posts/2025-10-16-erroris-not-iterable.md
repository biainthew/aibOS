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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.01.24.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/bda7d702-d333-4432-b6fa-07e35153761f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.01.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSE72VJ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHLb0f6qtSNNNjlEQ7ozuzcxbK2w5OG1bL0H%2BVYR%2BFQ1AiEAkT85pzKVQ2poxi0XOzs8aSA4l6QG8qwxEF7KfjEaShQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCTOuZXXp%2BFXUiLRLyrcA0FkFvPMKs6Zeym0tOJWiSaGd7Em%2BXNt8OiPJlzbKsemrX1IkCQWFvWTLZompSHcHFdhTBCD4HTKWgw5Yj5OHsz6TEkSFr8yfRh77P3wKHzvkXndZfJfM%2FycbtlSnIsD4Zx6xK4brtOOmD16OwOJN53ZUoXfVhoFVzEBANgQGOq9oIWpO6%2FP0FBfsqN88S1XK7W9bWbhcyoRsqF5hWZ0pz30pVefEvRe5k36ud8wzAfutVYvVJ32cnRGDLPjOZTA%2B37VdZvESzZjF3q0EAcbTFwuns1lIwUukDJa96dWYr3Cz7%2BrFANw%2FI1rexf2AdxsKqn3X17GBKPm0h%2BtagVYJltx3gnsKI%2BHca8eowV2ZFCgnXda%2FiisRjiNsqqo3%2FQzYJZk055O5QnyDltAWmLydIMpwPqR1hGwluh7sQoqH7uy%2FnuVEsBKDAq4DC05FtYibFNAYiq2%2FtnxPb9nHk0ONS%2BkLJIgLj75oF4J%2FMsciBFLUT7pjobSzIyg08JEvPi5LY9SE33L7lPhUO3c%2FDjiRCIn15qLQGVtm3x8Aq1%2FNa8IVBgEZEEiCWPTRaMLa5UebmmADuZlZcsYL9PahiF2%2BHjhPs3kYRoDl2ejlufQC0m7EsgIib6tKQ1V3YRQMPGa3csGOqUBPXv6HgdVzhsMDxfrX%2BbR3EoS83FqbZvOD0%2Bp3jBo79YjRU6tnYxqTzDd%2FXkLOxdouSpGGXQO1ikYEKvhdH%2Ft9N2ZOHEnM9Bo%2BczE9snRIBmPKbfGzsTd0gouONOo1qC1qjZ2pBpT741MKF6S3aWVgBNblZu9TDf%2FBMqZQzX47ajll4NroHe3nhmsu%2BPIk2gltky3aRIZG502%2FstyWtbxMEd7FBuq&X-Amz-Signature=6c043808432818e151e7ec7cb18f22202c3ec3060c9c34fa6b53c2ac0bd18dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


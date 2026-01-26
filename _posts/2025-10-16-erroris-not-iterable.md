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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.01.24.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/bda7d702-d333-4432-b6fa-07e35153761f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.01.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KGYNYD%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA2ubXRRxNmXF8ZjJk2%2B6meHKtBw1udYTzvd7cJuSz54AiBz%2BzYBmtK%2BSGtP%2BO60NSbdQQGv6uZGbvE83CdjmqRoXyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbaWDuDHPww9kH%2BvAKtwDJ9lZeArUPSKmh1It1pJYLkOPKU%2BHrq9lhTT%2Fx2PdCL5bFs87T56kcw6ARKQunTKZlWt%2BzpIT%2FxBuHFV7IdxZmeK3koHr9n73TQ1Zx4uBI1IDt2k6%2BzJxEieyDUYMQJ0J0TUgxtu3eEiUsw5qfoWeos4gvmE3UgclTBp4Yna4b%2F8wNtwG7jWEtVEjCoXqW%2B%2B%2BMHvVpwIIlDKt%2BYETLUXhvPQBMVy7EHj4bAzN%2FzuAuCW5WFenkk3iHHbzveAWehaOQkt14eUI4vKsqEvJj%2FX5KlhRb0oA%2BdPLdKX7cLt3OlBjYICaiqvUPT2oH8WQV9sZqehXy69ICj2Nca1d%2BvYHQSQTaJwjhGcnRKVTXhB2MdmXglutmCoBMHHw2djoox8SS7vrp7DJIHdZQHeEiftaN5riyUemAWrHyTanH9AzGwVjhyI%2Bivh8vaLPkRKG%2FYTZG2Wtb%2FU1yzsPzic3YtjGUl01IwnQjovjXuAmlBlh5OqtopTFkeXiF7AECW%2BgbMZ32hOfKlzh2Xd2Gd%2BlL1wqVQTsNXlFMuyOsdxWJagHGRxjy5WESvf%2B2cYiWenGDxgd44FjGvCZB5kr0O0%2FdXwEHK41UOrgv6oBJ1mOWYeb2i6fxwgz9VhzYsTNAqMwi%2FvcywY6pgEx7Ho25A67rY96zBtDbnfjwfay0P0DawI0%2FLQWWgobizzRUyEcD65KyVd0RWGIAkFBJ5P13YVlVh3p58pmATqQTo%2FxWvfcpgAcdlREu645d7XGDQeBKf5FeCznxZjKoYHiTFetY3Vx1gx0o0NucXIUAmEBAChYtxAMfFNgtwAdoIjQztyAH0wzER0yU2FBVUwDmW08xbo%2BIIGyXDSJZgxz8QWiVvjz&X-Amz-Signature=54d841fafb9432c3655187a3895f339e9887b1b6d014ad4151f1122ee933f4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


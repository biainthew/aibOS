---
layout: post
title: "[Error]is not iterable"
date: 2023-01-19
categories: [general]
tags: [React]
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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.01.24.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/bda7d702-d333-4432-b6fa-07e35153761f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.01.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZQCJEE%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIG9BxEjO6QOHmmidiNGQXFN7VsdO13xYEAreyQcEozeeAiEArMBGpZLzI%2BoGoUwuWagFEodjh80vjXlzGdPCU5karWIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGmP8Dc6d5czs%2B9RyircA4vf5osEqKX8u02ApghSb%2FVYhVESEMDV2%2FhxycjidLL9swPGfUXhJny7iAFvkdUGr0DFp%2FCthf6cCV9N8mOgwHaQ5YNSgPXJhiM5ni8iuRHhJgxho1VorrhvVqNZL9h9VRT3jZx4GOYmhA8X4Iv55hK6FpxrIAovOg%2FAWXSLeITAzwaDaRMV8DofpXuz%2BqSVd%2BjfkQSJPtFbUnK7Tw%2F26K3hW3Fys%2F07crUD78CgF%2BIX7qNZKE5c79WtLKhgGiDSsnctYakDDR8QGbj5%2FXHwuqDXH6t2by6naoKHxRIFYNOonPVKR1E3tSV3GNs%2BCgtCB1Zs1Dny9LEMHtol4EycHj%2F%2B1IhRmCCxM0GeJB5H%2FsPzMA4z8fEuBDufPymFMpGoUgLdj7SmO%2FPEXv3vQ5tsnj9j%2B61CjZ6xJpcLDjf9tEbqlghkMkvUDEFnoB1OLesMWwJJBVJXvtTYVTmNhkTBd%2BkAV%2Fu344Oj95dd73PvpWW4lgiVZrPyGIjvi1MyilzYUxK7Lgkd947oqCUPhg5JMyL0cokXj8VUNNPYyLEg14czpe6tBO6fQNeN665fXYbQToUglKrgqHFQKQCDXqf0NGLYL8kJoOa%2BL0Q5ImPHgIX%2FdVzkiXVPN9fPBwR6MIfZ3MsGOqUBdUZLxQwJ3AbnCBLdwBsqMKVQ7mxvVuuywI8LYdCvgqT4kKbATYjhoaUKhytLzm7aNq08tJJWQ5dvto2JfPuQJHgIg4tuCTYubgqkv%2Bnwkfm2iYgqDvgAv0ra0BKSg5hutcx5lYYfXOZBzl8GV0IWrH4cqblm8vnXMJc7kKKAS8ukWUsA%2BlXkzZToool3Wol0nuOHZzhqydh%2FfbP4LWfzDv8CwYZr&X-Amz-Signature=963cdb2045d4b1545b4661b470471e832e0bd41d4db43181bdd9af115aa9aacd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


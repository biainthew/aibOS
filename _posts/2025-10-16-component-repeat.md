---
layout: post
title: "component repeat"
date: 2023-01-23
categories: [general]
tags: [React]
excerpt_separator: ""
---



{% raw %}
```javascript
import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'},

    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1) //nextId 값에 1 더해줌
        setNames(nextNames) //names 값 업데이트
        setInputText('') //inputText 비움
    }
    const nameList = names.map(name => <li key={name.id}>{name.text}</li>)
    return(
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
};
export default IterationSample;
```
{% endraw %}


🌀 기존 배열을 변경하는 push 를 사용하지 않고 새로운 배열을 만들어주는 concat 사용


🌀 리액트에서 상태를 업데이트 할 때 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 함 = 불변성 유지


{% raw %}
```javascript
import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'},

    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1) //nextId 값에 1 더해줌
        setNames(nextNames) //names 값 업데이트
        setInputText('') //inputText 비움
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames)
    }
    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>)
    return(
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
};
export default IterationSample;
```
{% endraw %}


🌀 기존 상태를 변경하지 않는 filter method 사용 / li 지우기


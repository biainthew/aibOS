---
layout: post
title: "Event handling"
date: 2023-01-19
categories: [general]
tags: [React]
excerpt_separator: ""
---



{% raw %}
```javascript
import { Component } from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name='message' placeholder='아무거나 입력해 보세요' onChange={
                    (e)=>{
                        console.log(e)
                    }
                } />
            </div>
        );
    }
}

export default EventPractice;
```
{% endraw %}


🌀 e 는 이벤트 객체 , syntheticEvent


🌀 네이티브 이벤트와 달리 이벤트가 끝나고 나면 초기화, 정보를 참조할 수 없음 / ex) 0.5초 뒤에 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게 됨


🌀 비동기적으로 이벤트 객체를 참조하려면 e.persist() 함수를 호출해야함


{% raw %}
```javascript
import { Component } from 'react';

class EventPractice extends Component {
    state = {
        message : ""
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name='message' placeholder='아무거나 입력해 보세요' value={this.state.message} onChange={
                    (e)=>{
                        this.setState({
                            message: e.target.value
                        })
                    }
                } />
            </div>
        );
    }
}

export default EventPractice;
```
{% endraw %}


🌀 input 태그 다루기


{% raw %}
```javascript
import { Component } from 'react';

class EventPractice extends Component {
    state = {
        message : ""
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name='message' placeholder='아무거나 입력해 보세요' value={this.state.message} onChange={
                    (e)=>{
                        this.setState({
                            message: e.target.value
                        })
                    }
                } />
                <button onClick={
                    ()=>{
                        alert(this.state.message);
                        this.setState({
                            message: ""
                        })
                    }
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;
```
{% endraw %}


🌀 button 을 누르면 지금 입력한 값을 alert 창에 띄워주고 값을 공백으로 바꿔줌


{% raw %}
```javascript
import { Component } from 'react';

class EventPractice extends Component {
    state = {
        message : ""
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            message: e.target.value
        });
    }
    handleClick(){
        alert(this.state.message);
        this.setState({
            message:''
        })
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name='message' placeholder='아무거나 입력해 보세요' value={this.state.message} onChange={this.handleChange} />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
```
{% endraw %}


🌀 좀 더 가독성 좋게 /  함수를 미리 만들어 전달하는 방법


🌀 함수가 호출될 때 this 는 호출부에 따라 결정됨, 클래스의 임의 메서드가 특정 요소의 이벤트로 등록되는 과정에서 메서드와 this 의 관계가 끊어져버림 , 임의 메서드가 이벤트로 등록되어도 this 가 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this 와 바인딩 하는 작업이 필요, 만약 하지 않는다면 undefined


{% raw %}
```javascript
import { Component } from 'react';

class EventPractice extends Component {
    state = {
        message : ""
    }
    handleChange = (e)=>{
        this.setState({
            message: e.target.value
        });
    }
    handleClick = ()=>{
        alert(this.state.message);
        this.setState({
            message:''
        })
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name='message' placeholder='아무거나 입력해 보세요' value={this.state.message} onChange={this.handleChange} />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
```
{% endraw %}


🌀 constructor 지우고 babel 의 transform-class-properties 사용하여 화살표함수 형태로 정의


{% raw %}
```javascript
handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
```
{% endraw %}


🌀 객체 안에서 key 를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 로 사용됨 ⇒ []안에 넣으면 걔의 값을 쓸 수 있음


{% raw %}
```javascript
import { Component } from 'react';

class EventPractice extends Component {
    state = {
        username : "",
        message : ""
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleClick = ()=>{
        alert(this.state.username+': '+this.state.message);
        this.setState({
            message:''
        })
    }
    handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name='username' placeholder='아무거나 입력해 보세요' value={this.state.username} onChange={this.handleChange} />
                <input type="text" name='message' placeholder='아무거나 입력해 보세요' value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
```
{% endraw %}


🌀 keyPress 추가


{% raw %}
```javascript
import {useState} from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [usermessage, setUsermessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setUsermessage(e.target.value);
    const onClick = ()=>{
        alert(username+': '+usermessage);
        setUsermessage('');
        setUsername('');
    }
    const onKeyPress = (e)=>{
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name='username' placeholder='사용자명' value={username} onChange={onChangeUsername}/>
            <input type="text" name='message' placeholder='아무거나 입력해 보세요' value={usermessage} onChange={onChangeMessage} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>

    );
};

export default EventPractice;
```
{% endraw %}


🌀 function component 로 input 다루기


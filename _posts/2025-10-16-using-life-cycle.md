---
layout: post
title: "Using Life Cycle"
date: 2023-01-24
categories: [general]
tags: [React]
---


```javascript
import { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };
    myRef = null; //ref 를 설정할 부분
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링 하지 않음
        return nextState.number % 10 !== 4;
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 전 색상: ', snapshot);
        }
    }
    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };
        return(
            <div>
                <h1 style={style} ref={ref=>this.myRef=ref} >
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample;
```


🌀 부모 컴포넌트에서 props 로 색상을 받아 버튼을 누르면 state.number 값을 1씩 더함


🌀 getDerivedStateFromProps 는 부모에게서 받은 color 값을 state 에 동기화


🌀 getSnapshotBeforeUpdate 는 DOM 에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을 componentDidUpdate 에서 조회할 수 있게 함


🌀 shouldComponentUpdate 에서 state.number 값의 마지막 자리 수가 4 이면 리렌더링을 취소


```javascript
import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
class App extends Component {
    state = {
        color:'#000000'
    }
    handleClick = ()=>{
        this.setState({
            color:getRandomColor()
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤색상</button>
                <LifeCycleSample color={this.state.color}/>
            </div>
            
        );
    }
}

export default App;
```


🌀 getRandomColor 함수는 color 값을 랜덤 색상으로 설정 (16777215 를 hex 로 표현하면 ffffff / 해당 코드는 000000 부터 ffffff 값을 반환)


🌀 버튼을 렌더링하고 누를 때마다 handleClick 메서드가 호출되게 이벤트를 설정하며 불러온 LifeCycleSample 컴포넌트에 color 값을 props 로 설정


```javascript
import { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };
    myRef = null; //ref 를 설정할 부분
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링 하지 않음
        return nextState.number % 10 !== 4;
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 전 색상: ', snapshot);
        }
    }
    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };
        return(
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref=>this.myRef=ref} >
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample;
```


🌀 의도적으로 에러 발생


```javascript
import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
    };
    componentDidCatch(error, info) {
        this.setState({
            error: true,
        });
        console.log({ error, info });
    }
    render() {
        if(this.state.error) return <div>에러가 발생했습니다</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;
```


🌀 ErrorBoundary 생성


```javascript
import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
class App extends Component {
    state = {
        color:'#000000'
    }
    handleClick = ()=>{
        this.setState({
            color:getRandomColor()
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
            
        );
    }
}

export default App;
```


🌀 ErrorBoundary 로 감싸줌


---
layout: post
title: "Class Component / state"
date: 2023-01-18
categories: [general]
tags: [React]
excerpt_separator: ""
---



# _state_


: 컴포넌트 내부에서 바뀔 수 있는 값


: 두 가지 (클래스형 컴포넌트가 지니고 있는 state / 함수 컴포넌트에서 usestate 를 통해 사용하는 state)


# _props_


: 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값


: 컴포넌트 자신은 해당 props 를 읽기 전용으로만 사용 가능


: props 를 바꾸려면 부모 컴포넌트에서 바꿔야 함


{% raw %}
```javascript
import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // state 의 초깃값 설정 / 현재 클래스형 컴포넌트가 상속받고있는 리액트의 컴포넌트 클래스가 지닌 생성자 함수를 호출해줌
        this.state = {
            number: 0,
        };
    }
    render() {
        const { number } = this.state; //state 를 조회할 때는 this.state 로 함
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
```
{% endraw %}


🌀 초깃값 설정 / 이벤트 설정


{% raw %}
```javascript
import { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0,
    };
    render() {
        const { number, fixedNumber } = this.state; //state 를 조회할 때는 this.state 로 함
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
```
{% endraw %}


🌀 초깃값 설정2


{% raw %}
```javascript
onClick={() => {
                        this.setState({ number: number + 1 });
                        this.setState({ number: this.state.number + 1 });
                    }}
```
{% endraw %}


🌀 두 번 사용해도 숫자는 1씩 더해짐 / this.setstate 를 사용한다고 해서 state 값이 바로 바뀌지는 않기 때문


{% raw %}
```javascript
onClick={() => {
                        this.setState({ number: number + 1 });
                        this.setState((prevState) => {
                            return { number: prevState.number + 1 };
                        });
                    }}
```
{% endraw %}


🌀 위의 해결방법


### ✔️ 화살표 함수에서 값을 바로 반환하기


> 💡 `const sum = (a,b) => a+b;`


👉🏻 {} 를 없애주면 됨


{% raw %}
```javascript
onClick={() => {
                        this.setState({ number: number + 1 }, () => {
                            console.log('setState 가 호출되었습니다');
                        });
                    }}
```
{% endraw %}


🌀 setState 사용 후 특정 작업 하고 싶을 때


### ✔️ 배열 비구조화 할당


> 💡 `const array = [1, 2];  
> const one = array[0];  
> const two = array[1];  
>   
> const array = [1, 2]  
> const [one, two] = array;`


{% raw %}
```javascript
import { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;
```
{% endraw %}


🌀 useState 사용하기


{% raw %}
```javascript
import { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');
    const [color, setColor] = useState('black');
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button
                style={{ color: 'red' }}
                onClick={() => {
                    setColor('red');
                }}
            >
                빨간색
            </button>
            <button
                style={{ color: 'green' }}
                onClick={() => {
                    setColor('green');
                }}
            >
                초록색
            </button>
            <button
                style={{ color: 'blue' }}
                onClick={() => {
                    setColor('blue');
                }}
            >
                파란색
            </button>
        </div>
    );
};

export default Say;
```
{% endraw %}


🌀 useState 여러번 사용하기


### ✔️ useState 사용할 때 주의사항


1️⃣ state 값을 바꿀 때는 setState 혹은 useState 를 통해 전달받은 setter 함수를 사용해야 함


### ✔️ 배열의 사본을 만들어서 업데이트하기


> 💡 `const object = {a: 1, b: 2, c: 3};  
> const nextObject = {...object, b: 2}; // 사본을 만들어서 b 값만 덮어쓰기  
>   
> const array = [  
>     {id: 1, value: true},  
>     {id: 2, value: true},  
>     {id: 3, value: true}  
> ];  
> let nextArray = array.concat({id: 4}); //새 항목 추가  
> nextArray.filter(item => item.id !== 2); //id가 2인 항목 제거  
> nextArray.map(item => {item.id === 1 ? {...item, value: false} : item}) //id가 1인 항목의 value 를 false 로 설정`


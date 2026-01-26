---
layout: post
title: " Class Component / props"
date: 2023-01-17
categories: [general]
tags: [React]
---


```javascript
const MyComponent = () => {
    return <div>나의 새롭고 멋진 컴포넌트</div>;
};
export default MyComponent;
```


🌀 다른 파일에서 이 파일을 import 할 때 위에서 선언한 MyComponent class 를 불러오도록 설정


# _props_


: properties 컴포넌트 속성을 설정할 때 사용하는 요소 / 값은 부모 컴포넌트에서 설정 가능


```javascript
const MyComponent = (props) => {
    return <div>안녕하세요 제 이름은 {props.name} 입니다.</div>;
};
export default MyComponent;
```


```javascript
import MyComponent from './MyComponent';

const App = () => {
    return <MyComponent name="React" />;
};

export default App;
```


🌀 MyComponent 를 수정하여 name 이라는 props 를 렌더링


```javascript
const MyComponent = (props) => {
    return <div>안녕하세요 제 이름은 {props.name} 입니다.</div>;
};
MyComponent.defaultProps = {
    name: '기본이름',
};
export default MyComponent;
```


🌀 defaultProps 설정


```javascript
import MyComponent from './MyComponent';

const App = () => {
    return <MyComponent>리액트</MyComponent>;
};

export default App;
```


```javascript
const MyComponent = (props) => {
    return (
        <div>
            안녕하세요 제 이름은 {props.name} 입니다. <br />
            children 값은 {props.children} 입니다.
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본이름',
};
export default MyComponent;
```


🌀 컴포넌트 태그 사이의 내용을 보여주는 children props


# _비구조화 할당 destructiuring assignment_


: 구조분해문법 / 함수의 파라미터 부분에서도 사용 가능


```javascript
const MyComponent = (props) => {
    const { name, children } = props;
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다.
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본이름',
};
export default MyComponent;
```


🌀 비구조화 할당으로 더 간단히 사용 가능


```javascript
const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다 <br />
            children 값은 {children} 입니다
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본이름',
};
export default MyComponent;
```


🌀 더 편한 방법


```javascript
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다 <br />
            children 값은 {children} 입니다
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본이름',
};
MyComponent.propTypes = {
    name: PropTypes.string,
};
export default MyComponent;
```


```javascript
import MyComponent from './MyComponent';

const App = () => {
    return <MyComponent name={1}>리액트</MyComponent>;
};

export default App;
```


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.24.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55727540-9988-4f8f-8001-420f060cd22e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.24.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWUIQWXU%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC14GskDilalUs%2BzLwvxccOhPDLe5EZ4bizW7OVdBZfRQIhAN6i3QDxbkLX884hBZ0mo3njBCJW%2BpQhagjOVuR3ml6rKv8DCDoQABoMNjM3NDIzMTgzODA1IgxriUKI9Ln%2BubyyJBIq3APSZmS7cgbCW8lw9pQWQAx5iMri577JmYOZw9CaGk5B4zyFq2yr7nNIs%2FxIv0tVSKKTT7gyvBVB14wWiboA1QF5Ib%2BRXZvBPh9MD8iD%2BW6uGNLAyn%2Fwryn8aDR4N1xTO2BQ9ShUFG0ZVWV6K8ZljC5u7pHUw1gDWPdzbbBqfUCrnwHMT%2FHwVXZ313ePR%2BVvURIsHjdqTrOXPekkQkHvQ4gOo6Npg2%2BAXLcqHezHm56Itu58knOSJTJHXKYQCYP5Izg8zV%2FUaonZh4gc%2FTeZj2lY5eds6cERztt55vmgR0gSWilw3ks1ftZ7nOjLEb3ZN1MuHVQNdHbxkhNzqZ%2FXc6YrWcDxWKWUjxJ5Dy2VZJe025TTW7u5wDfGSbJNMPcQnxRr2KLgmui%2FwxpM0cM9DjqSRCCP30sO0i4p8uGB%2BY4le21YahLHFpDapL0YbMiVNEBN17kAUlMIfhM05hpMlqh%2BWsII5q5%2Fe1TvyHa6bJ7fHhSGiqA0ZVOfDQLhHqy3jxopVsOMIrr1jHEGz3FEh0f9fop70kM2qb428EOAFi%2FItZIAl%2BC%2BWk7pVn%2BXSd2BN0ySKv2BN%2F1t8IaJJWFMAM%2FTumqGwcwAZ0575FBfuomEs%2FkUadWNbHZ5CRz2dzCn2NzLBjqkAewXjibmUYAPDpu1wt69lfvcwUol2zSNunGTI9tqhIp%2FOYgLUPPOrT19WqjlQRM10VAeRxEpBQirHh5A6lRFqoJiFgiuoyufbweanW9iZpP%2FEQ6aK7hnicJQdO4aa9gK0WNLj7VGOzkA0BzyPZvSvcW7MbeW01iL0PDFomWQ1btSoNfTm9Ij4oauZZGefbaVuWamf83k2sIyswbuCAS7bb29DPwp&X-Amz-Signature=44f029a468b8ea1d7d1e184e3e6112b2b9ebda875d47328df8de2e1f03b846a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🌀 propTypes 를 string 으로 지정하고 number 를 쓰면 오류 발생


```javascript
import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                안녕하세요 제 이름은 {name} 입니다 <br />
                children 값은 {children} 입니다
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: '기본이름',
};
MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
```


🌀 class 형 component 에서 defaultProps 와 propTypes 를 설정하는 방법


```javascript
import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름',
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                안녕하세요 제 이름은 {name} 입니다 <br />
                children 값은 {children} 입니다
            </div>
        );
    }
}
export default MyComponent;
```


🌀 class 형 component 에서 defaultProps 와 propTypes 를 class 내부에서 설정하는 방법


### ✔️ defaultProps 와 propTypes 를 사용하는 이유


1️⃣ 필수 사항은 아니어서 꼭 사용해야 하는 것은 아니지만


2️⃣ 큰 규모의 프로젝트에서 협업할 때 해당 컴포넌트에 어떤 프롭스가 필요한 지 쉽게 알수 있어 능률 좋아짐


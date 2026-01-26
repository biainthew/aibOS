---
layout: post
title: " Class Component / props"
date: 2023-01-17
categories: [general]
tags: [React]
excerpt_separator: ""
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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.24.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55727540-9988-4f8f-8001-420f060cd22e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.24.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQ6TTVV%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFYOju9B6mrd9WEm0WGfRbVbZ7VVVXYx2sRayLIQQQ1FAiB157Rw1%2FizkzAtTlTfedETepaDtU5jWj5F9HKS7%2BBv5Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMmPWa10s1UDMx%2BL41KtwDvbe5pFLzrS8bgifTI%2B%2Bwnt26U%2FsWOY7EuXJxmK0KNoQI1Dtkh8NxohA864HlmLj36CEPHTAInY3Nem1Nm7HtXpJ0KnQYCGSVcIE9TRps08HJyUewlQWarePUXpeRm7ElHuGiHWmixThNnk2R5nnjg1vYm%2F4GvXno%2F22MQYwnTGRayR8DZv50nsDefhbYVaV0Oq8zcOfhgu7TvyNb9oiVafIBMeet0BeZVijCMxXqF7KIcgEh5rOqdl40sMF%2B5GqAN8oaIoMwC5ugF9NcP%2BDj%2BsRs%2FUxY46vaepo0ZTFHAvAOQYa719ZRJkvVRvIZcsgttMx6xBiMDCy95yo8R1FDGBN4TLLuKsEgsOtnzEOxEWXzqvPhbWTwpk6ZbWjPq4K9nvX1%2BMVaFh2zxbN0%2FoFaWuVjYHxzua1E1xC6IcoGysVdc8OSxVEhHaqgcFSipDAbwDLzQHHpaHQLY1FmOL1GgeFao9Hki2dgMVFEF%2BlJlCdO0KCpmdds%2B9MrizzU6rNjU%2BWyza5FLaytd05BzshrijobXD4BOwN%2FmN%2B%2BPU600B38kMHAyDK%2FgqKxeA%2FxNjpLDO3r%2BFcEdPM4DHeJot%2FGHX5UtA%2FLVB3ESLqhp6PDCmNzZzE%2B4NASlJvogaowkZvdywY6pgGt80fwUc8pClAKKkla7wQFzZYn7mNqMNyWeqngcUTBi6ceDOYeAAXux6FRH97wbgvjuFTO3dbXG%2F0KVNf%2Bnpa6skgOLcv6v1AKOy8ASal5Iw6H42mlApXbes6hc%2BBp6RAYZySEjPOAG2Hde7%2Fi0%2BaTfpJ9RbzANqFju5CZpOedzHVY%2FK%2Ffj5a62YRSAXCHMvSErJ03KPouT9xAXmxTxka0TDm5ZNOO&X-Amz-Signature=ac103e21a395019949a27468d2294b344d539d72f77a3173ddbe655727cbb85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


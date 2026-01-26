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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.24.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55727540-9988-4f8f-8001-420f060cd22e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.24.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4S24UX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHVwXocSWuN9IrNZzKXryinnaZtht%2FvzlIBSLcjxqAGKAiAo%2BTN%2B0d%2Bc%2Bqtu0TGuvqMTxowfrA6FC9iC1%2FhihqDzfSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMqmKbm9Gr4KTl7yruKtwDoHym5ug9OzhyLf23CfAGzYPlDOjUVrUEsO9%2F%2BvAbkulDqK7Y0V6tnSI837dxKmejyjSG1ZS3KbFqcUy1hi%2B1UdH9wa%2B6RIU1m1W7zh90BZnsMRkZuIyRt7%2B%2Bev%2F%2BnfcB1IdQ6W8S44iGioXyeAOnyX7M0iKWNHYuahx2I5i4ZNIPL%2B79eL12Of12yFWd8gVN3QpaIAP09GE0vhB3RWAyWhjmBQibfS4qD6sW7YBpM31urCTdCaPWjlhijDcFITYT8CKsYNRESltBhE5A9WPxlPuanSNfScnco6D2Fp5jBuEppND7tUaOVO%2FbBoiVaLPT6e7qBiyWznejW7fV6%2FfLTlC0%2Ffm9gW6VHBqV4geVYcLYH2skfWOaUzl%2Bmr2ym3azXbfPEvaWIccZ6%2BjRHZkN%2BLbC8hLtKAvSdBPjFia740QPjIip6TwVjhaEORt%2BgyDIB2G2jW%2BsqWiDCCNW2c3dM%2B%2BSMs64sNajqMB64Gr%2BvQjK0XtJOlqRB1AnSY8nFWyK%2FNTUP8NjRGMpnQA66sbfgJw7tycvbZL62Y8XkdL4nlweN6OGlhu7CE%2FqYlJykTVxg5Ef3cYFA5Sn%2F7MkxZYCYyyyuFdWYUjz40dmmwU6zuONf31IOQjT3o61srsws%2FvcywY6pgEzhw8Uxs7MliRJ1%2FqqyxzvT%2B%2BBPrXCPVirCUX%2Beh%2FpJ%2FLdfkrPZgS3bteQE1lmFnFAmkj5b1mUIha%2BOCvi%2BYwYHxLjwRcItE2xZlQvPjtosumltXgZK0BZa4cYzhr8cKUBOFcmpgoSa%2FCKB1OnfrpfRqdkKmeTKYyioRknhGsMRW4Zwu5eUOAcePvvRDlxBpdvIcFuoegUgQemkcsmbcuxFu9EyDhs&X-Amz-Signature=73204cd701880fc12d02456e97553ca03d00a1c09e79889e52b4e8c98fe66ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


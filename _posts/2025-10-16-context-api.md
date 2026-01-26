---
layout: post
title: "Context API"
date: 2023-02-03
categories: [general]
tags: [React]
---


: 사용자 로그인 정보, 어플리케이션 환경설정, 테마 등 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능 / 리덕스, 리액트 라우터, styled-components 등의 라이브러리는 이것을 기반으로 구현되어있음


### ✔️ `Context API` 를 사용한 전역 상태 관리 흐름

> 리액트 어플리케이션은 컴포넌트 간에 데이터를 `props` 로 전달하기 때문에 컴포넌트 여기저기서 필요한 데이터가 있을 때는 주로 최상위 컴포넌트인 `App` 의 `state` 에 넣어서 관리함
> 데이터를 `props` 로 전달하다보면 여러 번 거쳐서 전달을 하는 경우가 많아지고 그러다보면 유지 보수성이 낮아질 가능성이 있음

> 💡 그래서 `리덕스`나 `MobX` 같은 상태 관리 라이브러리를 사용하여 전역 상태 관리 작업을 더 편하게 처리하기도 하지만 업데이트 이후 `Context API` 가 많이 개선되어 별도의 라이브러리를 사용하지 않아도 전역 상태를 손쉽게 관리할 수 있음 (`Context` 를 만들어 단 한 번에 원하는 값을 받아 와서 사용가능)


## ✔️ `Context API` 사용법 익히기


```javascript
import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });

export default ColorContext;
```


🌀 새 Context 를 만들 때는 `createContext` 함수를 사용 / 파라미터에는 해당 Context 의 기본 상태 지정


```javascript
import ColorContext from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {(value) => (
                <div
                    style={{
                        width: '64px',
                        height: '64px',
                        background: value.color,
                    }}
                ></div>
            )}
        </ColorContext.Consumer>
    );
};

export default ColorBox;
```


🌀 `Consumer` 사이에 중괄호를 열어 그 안에 함수를 넣어줌 ➡️ Function as a child , Render Props


### ✨ Render Props 예제


```javascript
const RenderPropsSample = ({children}) ⇒ {
    return <div>결과: {children(5)}</div>;
};
export default RenderPropsSample;

위와 같은 컴포넌트가 있다면 추후 사용할 때 다음과 같이 사용 가능

<RenderPropsSample>{value ⇒ 2 * value}</RenderPropsSample>

RenderPropsSample 에게 children props 로 파라미터에 2 를 곱해서 반환하는 함수를 전달하면 해당 컴포넌트에서는 이 함수에 5를 인자로 넣어서 “결과: 10” 을 렌더링
```


### ✔️ `Provider`


```javascript
import ColorBox from './components/ColorBlack';
import ColorContext from './contexts/color';
const App = () => {
    return (
        <ColorContext.Provider value={{ color: 'red' }}>
            <div>
                <ColorBox />
            </div>
        </ColorContext.Provider>
    );
};
export default App;
```


🌀 `Provider` 를 사용하면 Context 의 value 를 변경할 수 있음


🌀 기존에 createContext 함수를 사용할 때는 파라미터로 Context 의 기본값을 넣어주었지만 그 기본값은 Provider 를 사용하지 않았을 때만 사용됨 / 만약 Provider 를 사용했는데 value 를 명시하지 않았다면 이 기본값을 사용하지 않기 때문에 오류 발생


### ✔️ 동적 Context 사용하기


```javascript
import { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => {},
        setSubcolor: () => {},
    },
});
const colorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor },
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

//const ColorConsumer = ColorContext.Consumer 와 동일
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
```


🌀 Provider 의 value 에 상태는 `state` 로 업데이트 함수는 `actions` 로 묶어서 전달


🌀 `createContext` 를 사용할 때 기본값은 실제 Provider 의 value 에 넣는 객체의 형태와 일치시켜 주는것이 좋음 ⇒ 구성 파악하기 쉽고 실수로 Provider 를 사용하지 않았을 때 리액트 어플리케이션에서 에러 발생 x


```javascript
import ColorBox from './components/ColorBox';

import { ColorProvider } from './contexts/color';

const App = () => {
    return (
        
<ColorProvider>

            <div>
                <ColorBox />
            </div>
        
</ColorProvider>

    );
};
export default App;
```


```javascript
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    return (
        
<ColorConsumer>

            {(value) => (
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            
background: value.state.color
,
                        }}
                    ></div>
                    
<div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: value.state.subcolor,
                        }}
                    ></div>

                </>
            )}
        
</ColorConsumer>

    );
};

export default ColorBox;
```


🌀 위 코드에서 객체 비구조화 할당 문법을 사용하면 👇🏻


```javascript
//value 조회 안 해도 됨

{({state}) => (
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color,
                        }}
                    ></div>
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor,
                        }}
                    ></div>
                </>
            )}
```


### ✔️ 색상 선택 컴포넌트 만들기


```javascript
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <div style={{ display: 'flex' }}>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                        }}
                    ></div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default SelectColors;
```


🌀 Context 의 action 에 넣어 준 함수를 호출하는 컴포넌트


```javascript
import { ColorConsumer } from '../contexts/color';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: 'flex' }}>
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    actions.setSubcolor(color);
                                }}
                            ></div>
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColors;
```


🌀 마우스 왼쪽 버튼을 클릭하면 큰 정사각형, 오른쪽은 작은 정사각형의 색 변경


# _onContextMenu_


: 마우스 오른쪽 버튼 클릭 이벤트


## ✔️ `Consumer` 대신 `Hook` 또는 `static contextType` 사용하기


### ✔️ `useContext` 사용하기


```javascript
import { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color,
                }}
            />
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subcolor,
                }}
            />
        </>
    );
};

export default ColorBox;
```


🌀 함수 컴포넌트에서 Context 를 편하게 사용 가능


### 정리


❗기존에는 부모 → 자식 흐름으로 props 를 통해 상태를 교류했지만 Context 를 통해 쉽게 가능 / 전역적으로 여기저기서 사용되는 상태가 있고 컴포넌트 개수가 많은 상황이라면 Context API 를 사용하는 것을 권장


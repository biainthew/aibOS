---
layout: post
title: "React.lazy & Suspense"
date: 2023-02-08
categories: [general]
tags: [React]
excerpt_separator: ""
---



### 🫐 state 를 사용한 코드 스플리팅 🫐


```javascript
const SplitMe = () => {
    return <div>SplitMe</div>;
};
export default SplitMe;
```


```javascript
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        SplitMe: null,
    };
    handleClick = async () => {
        const loadedModule = await import('./splitMe');
        this.setState({
            SplitMe: loadedModule.default,
        });
    };
    render() {
        const { SplitMe } = this.state;
        return (
            <div className="App">
                <header className="App-heather">
                    <img src={logo} alt="logo" />
                    <p onClick={this.handleClick}>Hello React!</p>
                    {SplitMe && <SplitMe />}
                </header>
            </div>
        );
    }
}

export default App;
```


💎 코드 스플리팅을 해서 p 를 클릭하고 네트워크에서 확인했을 때 불필요한 것들은 렌더링 되지 않음


### 🫐 **React.lazy** 와 Suspense 사용하기 🫐

- `React.lazy` : 컴포넌트를 렌더링 하는 시점에서 비동기적으로 로딩할 수 있게 해 주는 유틸함수

```javascript
const SplitMe = React.lazy(()⇒import(’./SplitMe’));
```

- `Suspense` : 리액트 내장 컴포넌트, 코드 스플리팅 된 컴포넌트를 로딩하도록 발동시킬 수 있고 로딩이 끝나지 않았을 때 보여 줄 UI 를 설정할 수 있음

```javascript
import { Suspense } from ‘react’
(…)
<Suspense fallback={<div>loading…</div>}>
    <SplitMe/>
</Suspense>
```


```javascript
import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
const SplitMe = React.lazy(() => import('./splitMe'));

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />
                <p onClick={onClick}>Hello React!</p>
            </header>
            <Suspense fallback={<div>loading...</div>}>
                {visible && <SplitMe />}
            </Suspense>
        </div>
    );
}

export default App;
```


💎 false && 컴포넌트 해서 안보이던게 클릭하면 true 로 보인다 ?


> 🎂 - Javascript 에서 true&&expression 은 실행 / false&&expression 은 무시 라고 합니다


### 🫐 Loadable Components 사용 🫐

> **‘ 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리 ’**  
> - **이점** : 서버 사이드 렌더링 지원 / 렌더링 하기 전에 필요할 때 스플리팅 된 파일을 미리 불러올 수 있음  
> - **그 외** : 타임아웃, 로딩 UI 딜레이 드으이 기능 제공
- `서버 사이드 렌더링` : 웹 서비스의 초기 로딩 속도 개선, 캐싱 및 검색 엔진 최적화를 가능하게 해 주는 기술 / 이를 사용하면 초기 렌더링을 서버 쪽에서 처리 → 사용자는 렌더링된 결과물을 받아 사용하므로 속도 개선

```javascript
import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import loadable from '@loadable/component';


const SplitMe = loadable(() => import('./splitMe'),{
	fallback : <div>loading...</div>
});


function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />
                <p onClick={onClick}>Hello React!</p>
	              {visible && <SplitMe />}
            </header>
        </div>
    );
}

export default App;
```


💎 npm add @loadable/component → Suspend 만 뺀 React.lazy 와 비슷


```javascript
import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./splitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
```


💎 마우스 커서를 p 에 올리기만 해도 로딩 시작 클릭하면 렌더링


### 정리


❗코드 스플리팅의 개념 , 컴포넌트를 분리된 파일로 저장하고 비동기적으로 불러와서 사용하는 방법에 대해 배움


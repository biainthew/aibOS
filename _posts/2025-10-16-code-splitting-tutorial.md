---
layout: post
title: "Code Splitting tutorial"
date: 2023-02-07
categories: [general]
tags: [React]
excerpt_separator: ""
---



> 🍏 - 리액트 프로젝트를 완성하여 사용자에게 제공할 때는 `빌드 작업`을 거쳐서 배포해야 함 / 빌드 작업을 통해 프로젝트에서 사용되는 자바스크립트 파일 안에서 `불필요한 주석, 경고 메시지, 공백 등을 제거`하여 `파일 크기를 최소화` 하기도 하고 브라우저에서 JSX 문법이나 다른 최신 자바스크립트 문법이 원활하게 실행되도록 `코드의 트랜스 파일 작업`도 할 수 있음  
> - 이 작업은 `웹팩` 이라는 도구가 담당 / 별도 설정을 하지 않으면 프로젝트에서 사용 중인 모든 자바스크립트 파일이 하나의 파일로 합쳐지고 모든 CSS 파일도 `하나의 파일로 합쳐짐`  
> - CRA(create react-app) 로 프로젝트를 빌드할 경우 최소 두 개 이상의 자바스크립트 파일이 생성되는데 기본 웹팩 설정에는 SplitChunk 라는 기능이 적용되어 node_modules 에서 불러온 파일, 일정 크기 이상의 파일, 여러 파일 간에 공유된 파일을 `자동으로 따로 분리`시켜서 캐싱 효과 굳


```javascript
npm run build
```


🥬 build/static/js 안의 파일 이름을 보면 7b7b7f25 같은 해시 값이 포함되어 있음 / 빌드하는 과정에서 해당 파일의 내용에 따라 생성되며 이를 통해 브라우저가 새로 파일을 받을 지 말 지 알 수 있음


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-3c24927b1d9f.png)


🥬 7로 시작하는 파일에는 자주 바뀌지 않는 코드들이 들어있음 → 캐싱의 이점을 더 오래 누릴 수 있음


```javascript
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="{logo}" alt="App-logo" alt="logo" />
        <p>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
```


🥬 수정 후 다시 build


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-147f0efc2c37.png)


🥬 main 으로 시작하는 파일들만 이름 바뀜


## 🍏 코드 스플리팅 🍏


→ 이렇게 파일을 분리하는 작업

> **- ex ) A B C 로 구성된 싱글 페이지 어플리케이션 개발**  
> 사용자가 A 페이지에 방문했다면 B C 페이지에서 사용하는 컴포넌트 정보는 필요하지 않음 but 리액트 프로젝트에 별도로 저장하지 않으면 모든 컴포넌트에 대한 코드가 모두 한 파일 (main) 에 저장됨 → 로딩 오래걸림  
>   
> **- 이러한 문제를 해결해 줄 수 있는 방법** `코드 비동기 로딩`  
> 필요한 시점에 불러와 사용 가능

## 🍏 자바스크립트 함수 비동기 로딩 🍏


```javascript
export default function notify() {
  alert("hi!");
}
```


```javascript
import logo from "./logo.svg";
import "./App.css";
import notify from "./notify";

function App() {
  
const onClick = () => {
    notify();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
```


🥬 p 문구를 누르면 notify 함수 실행


```javascript
import logo from "./logo.svg";
import "./App.css";
import notify from "./notify";

function App() {
  const onClick = () => {
    
import("./notify").then((result) => result.default());

  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
```


🥬 import 를 함수로 사용하면 Promise 를 반환 → `dynamic import` 라는 문법


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-b88612509146.png)


🥬 코드 스플리팅 후 결과물 → 1로 시작하는 파일 안에 notify 관련 코드가 들어감


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50a1bf71-1f03-404e-bb87-13a3e87245dd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOEEZRQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCAuy%2FTSTiIkTZjO6fJ7SrpZAi647aRzF%2FjY%2FYMVNl4zQIgD8rEdN4eLSkcYuD%2Bc6OSrjLWpzA9s9hNjs7jmi6o3BAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJla9K2KLEMorNsPwyrcAxYGy6rqTGNphV0Iv27r%2B%2B1wlrpnDgo5jkjhDB56j1VIpErKzFVPoyoNieYcyzXdRseKfViEGTkZpWYtP3SonKsalXNblJaNMxn%2BRgfWov5rADpjcPsdVbXdLyAlOTkevgg2ecwAVEF8JsdkM3dO8dfnSiFjS%2B9qZH5iwPwypUr0TUdYcCtFy76iNT0u%2FXENrC4eSYkjYEiiMWuo2cF2Ew3LugphWQYz8iXrqDk4XhaYbhZsynhKgRDX%2BIA1RG8i5mxhJ03qjKYah0imMWZ5OAfVveEtZnoud2irrm816cNFrgOlmqUHzpN5685SZ4rfzb4LJrmgzHmf%2BSaBDOb0uEm7XrBPfPLSPMMoKGMXxHIyBMhLD3IUEh7FAg%2BqneGR83%2B4o1D0YWJ1Ud8yx9Og2xITktTFi2VPQfxsnJsi1GqqCNpgiHbp54Ny9XSC8GxOIlJ%2BQtIW7PDDo17%2BXLSx5o8br6KSFT6gSkmvSoGoQM%2FdHkYcXmZ9X1a6%2BG2jqLseZx3wOJ6FkZIAfoggfkpyjZ4%2FI%2BxC%2BJ9taiw%2BpU5iN7qyXoiMdsc2lFACcyyxcvPLQ3TbD1Z4USvHapRRZWf%2Bak%2Bug0LMGBX5TQLDi0iEaYUz4cjiocJuPItrYHG8MKf73MsGOqUBONH7rUERGt%2FR8NXwXKFziIq6xTDz%2FQuoGBitu7pFkHWFjXBVyC8PEADXm4YYFJb%2FvzvW%2BwfOsFigb0RCGUnuihbyT78aKQUP30S392E0iBkZYIoGzWr23lBs6JQde1C3OjeFF6Tvp%2BaArynkQJX%2Fk1QYj6vp0g8bpPTVDfznLRyMPqoz3YMm5BIQ%2Bi%2FMiI1%2FIcMbFPF4R843F%2BB%2FHK0EtOcqAwYN&X-Amz-Signature=d277fea2ce3459ac2d5883adec288d37752e83ab5d6ddda74901362964cf7cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/e82be5bb-4d10-463a-8105-9afeb5eac19a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJ2MTZ5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFpMW13PoOIUi5jnIgkR5ecC1XJrLnyzOHACr%2BhpOBSrAiBwQkFVzKAt7dfAKUg2uSsyHS1R6RmpDHjRKapRGjiWhir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM49%2BYiPYMEK%2FfIOJPKtwDCCVSs7OYSpbGw%2BosikhZlasmwvUw70J9RZ5TBpKVqDGodQLmKrB9Ff2YlXDFevS%2B0CyMFJmdrYYZoFWh7DDdddBRAzHPDU87Dp%2Fvz2RSiAw6C2hoUUHg%2BUwK1uI6%2F29JeGgB0Mjl3E6ms4rzqiclzDE0POI5QB06qSLWQiVUxL73EQLY0GXdvGSTAehpbLtgvdYnaYZrkT7FG%2FFtxhy%2FXhEsComQcvY1mKMPL6NIy3PM0TiDV0u%2BsLYbgJfPhVoF0rv45k59BaX6MbnQOTpFbMRsshY4io5nbe7C%2BuBq%2Bte9TiqH%2FAwxTwv8UU9u3qygSd5lYsHLxArZR3YEpl7CTTCNG%2Bp7Kc6CwGrovA8X2P7ZYkN5BucpTDUMTryUWiFZ0zemCTcnl3nrn%2FF%2FNui9uTE%2BBj0lozM5Ejzxj%2BgNnL8J7xTVNtz80RwhGnd7fySSIvo598gP%2Fz6DCA8s4NZsUXXD1PijuaD2m2nDI7XUorMsAqSIQHtn77JBybUyJLX45q5ma9UrTAxDKPyiPXwCyliTn5mR9Ea%2BvmHsXqQQSCGwq85dTOE8soEUdMVuMIpjfv5qkZJweEOEjP11%2FWs7YMw8gND%2BbFyxPZ421YpELQx9UFl8GMfoLZPgUA8wsPvcywY6pgHDHgUVbb8D23sz%2BfSznB9x%2FFiJDvUp7NUsTJU7J7VqdNbiMt1uxcK5rNbR1f5Ajv45kyZdjDXGDyIQEbb8eOgQiPdcNGEgZN5s1jXeONKuQLfWtdLpXWun6sMPTYbRVhLlVGNNJeXI3ZF07jdLX1YUWIe3isOxNZBhZ3SAQaOCJDABHLf1Nz00XemM4Hs6hLQ7dsGtYJS279BefTez3q4zQmGkI7lc&X-Amz-Signature=ca49e2dd0b746cf362cc22ce772f5e095ef00d4e9c4cb9accf318d9eefd6e4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6271c171-3487-49cf-bb61-0c59985c59aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARQOTKO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICDc5YpPEjtf%2F5ODqYDXmx%2FPCuS6lHd8yunKymucQFGeAiEAkiyHsvrYfCKsMJCJNFtytcSJVG30Ao9BGmcDS9poNWQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAGS47wlFgeZyLpFlCrcA%2BtCxM5IzgdMl3Kt2rHwVDxENw4S6FBhOixsE6w%2FPFGFXcyz%2FKBDvfk6lRRw%2FUbrx2WCfzemLJwn5IDcxYWMeHNf9xc80yYY%2BKi46ASGjBfvNf%2Bo%2B311TgoR9luZ2v8FxKWv9Htz5ipjVk2MV%2FFVZ8GgK3JAbbNMxCZ40nZbdSDlfisI%2FOqx%2FX1CxVCUCssPA3QIQOyYRT0A1tYZLTNGJib1fTm6PuxQy%2Bt0u0AgDq7QE3xaI1vZYwMJ0YjXqQJBStXhN4%2BD8%2BDaXa71En%2FS1U7pGs30yJmX5ZtoCzSx3HjR4I64L1dM6Cnze8Dz22BadXRcBoygbGuRrsE%2FvOcgHTMC%2BHATMdS9Ap%2BTfcyTRLTARUGVRrL%2BUolYUg%2B0EEH8RbdA5eUnOan%2F6ewOX0qjRiAGFazdjqVjhEny4O736xFiyot%2BhD2498v13JYUX2cjIypzMHpAyE28DLR7n0z0WpJcZa359MVA1WpBPlEztJEw6gxCbxB69ztJoVzBBrmFIR4ezt%2Bg%2B0sM5iZSWFzf9%2BkB0dNN8uTqtWxJldsFuNGfPn8l3T2sFqkkyA9ooHWvC9OX%2Fu3%2FsRuPnnBtfHhFXCyfp6UO3seUZtSO82PLi2OodNyIVi3eQTBEH1EkMLH73MsGOqUBJ3ae6zVP%2FrGhAjLZuOWlByZMIbnFzJgv6%2Fna40tYuoV24Vh0fa5pRtr1pi2ObmedlVBGJfzecnXA5KJKNi1N%2FUeEjQH52LKJ1w65e9ZOD9uQbgeDN81o6XoloWdEfxTrMwPCI0C7ZKAeImjCkzjDxtjRyAQOGoLd4RhFes3np5X%2FALX5LiIQ2JtvZHhDZO2%2FbluV60gm7ofDbJYLLKLKH8csiH%2BY&X-Amz-Signature=fa4d6f9098a12009cdd7175d39b6c63857dfe5b34e532d089937253a96f680f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🥬 코드 스플리팅 후 결과물 → 1로 시작하는 파일 안에 notify 관련 코드가 들어감


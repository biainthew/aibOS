---
layout: post
title: "Data loading (request API) 2"
date: 2023-02-16
categories: [general]
tags: [React]
excerpt_separator: ""
---



### 🫐 서버에서 리덕스 설정 및 PreloadContext 사용하기 🫐


```javascript
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

//asset-manifest.json에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8")
);
function createPage(root) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <link rel="shortcut icon" href="/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <meta name="theme-color" content="#000000"/>
      <title>React App</title>
      <link rel="stylesheet" href="${manifest.files["main.css"]}">
  </head>
  <body>
      <noscript>You need to enable JavaScript to run this app</noscript>
      <div id="root">${root}</div>
      <script src="${manifest.files["main.js"]}"></script>
  </body>
  </html>
  `;
}

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const jsx = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(createPage(root)); // 결과물을 응답합니다.
};
const serve = express.static(path.resolve("./build"), {
  index: false, // '/' 경로에서 index 를 보여주지 않도록 설정
});
app.use(serve); // 순서 중요 serverRender 전에 위치해야함

app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
```


💎 서버가 실행될 때 스토어를 한 번만 만드는 것이 아니라 요청이 들어올 때마다 새로운 스토어를 만듦


```javascript
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import PreloadContext from "./lib/PreloadContext";


//asset-manifest.json에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8")
);
function createPage(root) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <link rel="shortcut icon" href="/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <meta name="theme-color" content="#000000"/>
      <title>React App</title>
      <link rel="stylesheet" href="${manifest.files["main.css"]}">
  </head>
  <body>
      <noscript>You need to enable JavaScript to run this app</noscript>
      <div id="root">${root}</div>
      <script src="${manifest.files["main.js"]}"></script>
  </body>
  </html>
  `;
}

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
const preloadContext = {
    done: false,
    promises: [],
  };


  const jsx = (
    
<PreloadContext.Provider value={preloadContext}>

      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    
</PreloadContext.Provider>

  );
  
ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup 으로 한번 렌더링
  try {
    await Promise.all(preloadContext.promises); //모든 프로미스를 기다림
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;


  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(createPage(root)); // 결과물을 응답합니다.
};
const serve = express.static(path.resolve("./build"), {
  index: false, // '/' 경로에서 index 를 보여주지 않도록 설정
});

app.use(serve); // 순서 중요 serverRender 전에 위치해야함

app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
```


💎 첫번째 렌더링을 할 때는 `renderToString` 대신 `renderToStaticMarkup` 이라는 함수 사용 / 이 함수는 리액트를 사용하여 정적인 페이지를 만들 때 사용 / 이 함수로 만든 리액트 렌더링 결과물은 클라이언트 쪽에서 HTML DOM 인터랙션을 지원하기 힘듦 / 사용한 이유는 `Preloader` 로 넣어주었던 함수를 호출하기 위해서, 속도가 좀 더 빨라서


### 🫐 스크립트로 스토어 초기 상태 주입하기 🫐


→ 지금까지 작성한 코드는 API 를 통해 받아 온 데이터를 렌더링 하지만 그 과정에서 만들어진 스토어의 상태를 브라우저에서 재사용하지 못하는 상황 / 재사용하려면 현재 스토어 상태를 문자열로 변환한 뒤 스크립트로 주입해 주어야 함


```javascript
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import PreloadContext from "./lib/PreloadContext";

//asset-manifest.json에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8")
);
function createPage(root, stateScript) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <link rel="shortcut icon" href="/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <meta name="theme-color" content="#000000"/>
      <title>React App</title>
      <link rel="stylesheet" href="${manifest.files["main.css"]}">
  </head>
  <body>
      <noscript>You need to enable JavaScript to run this app</noscript>
      <div id="root">${root}</div>
      ${stateScript}
      <script src="${manifest.files["main.js"]}"></script>
  </body>
  </html>
  `;
}

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const preloadContext = {
    done: false,
    promises: [],
  };

  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );
  ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup 으로 한번 렌더링
  try {
    await Promise.all(preloadContext.promises); //모든 프로미스를 기다림
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  
const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`; //리덕스 초기상태를 스크립트로 주입

  res.send(createPage(root, 
stateScript
)); // 결과물을 응답합니다.
};
const serve = express.static(path.resolve("./build"), {
  index: false, // '/' 경로에서 index 를 보여주지 않도록 설정
});

app.use(serve); // 순서 중요 serverRender 전에 위치해야함

app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
```


```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";

const store = createStore(
  rootReducer,
  
window.__PRELOADED_STATE__,

  applyMiddleware(thunk)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```


💎 스토어의 상태를 브라우저에서 재사용 할 때는 스토어 생성 과정에서 window.__PRELOADED_STATE__ 를 초깃값으로 사용하면 됨


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/a1717020-31e4-4ea2-a2df-e992cadd33a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZZLPE5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFO9wMQiH5HO7JH990exh%2BgPDOYsiMZ0%2FUFpB58qXx8JAiAq5xwT2jxlC42HY74C5i8pclX%2F2MbhxwV%2F6YX2PUBQfyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdbNfBOIEF1GXuJs6KtwD4TjasXU%2FcO05SDCPHuf0nmjuRwSOGYHTw2o%2BfijpJM%2FeAEjdiz%2Bs9jLTqx48nAyWEqnkiLPNgfky2EKNH8tjZRDJ3y6QK2jGLIzw7%2FJnSRd4pKbRWBTkD5V1OsWEGR7jA%2FXfaJ5mHwwPDjIIHuTDhQnq8snN0QQ1eLCWN5kQN7dvUMGpp278In3KP%2FzyaR3JqiX91WYRys9R4wYZSUDF1pQL5KZIlY5MPugHXmDJ2Lbc75M8A45Wr5Ao9koEMZLWRTx1nUHZMYHNrB1C%2FhrJ5ccBk1PDkPL%2F%2BAx8zlmPCJ2z%2BWkmz9%2Fz8x6LA3iMeodRIVGUUMMyGHqQGzm7MqBgWC0DCcGd9GcY8iqpe%2BJhD8rHt6EXGNMMaX%2Bwl2%2Fionk6sYskEqZRYan2yRgHRgR%2B%2B6BIiGomfF%2F5LyjXcZhup%2FjD1xYgPtPaFCY64lM8P4GsvGl%2Fufcs2lJlCY40viBrECMgpkEnNWtygUV%2BJJ1AVLO0DLPXh875Mjodx7OlnBqarvV7uGcskJ3FRCe%2FsMB0r00kvQ6zIPpO8pW36HbGQgqIBDcVYyRVjVnXEALIe8KhJF4uYTVGSMT9Pzn%2BPwAHuYWsjN1Nm4JBZ3pdLlrwlufilCumMXzv2jlN7ncwyPvcywY6pgHCGf55BCPULUSc1HfKvvwlTltW14ql2%2BJzwVTgQLSRt2Tm8R%2BsMSAb%2FHnOrSe3dpwztwDvZhmhlFtCfgpVbAAX8LdOs%2BbtiSyl581%2FDSTXRtumTAaNwCBwZv0uj5xuBlG%2BI3C0RApxKwsp79Ufr%2F%2BLnk2XSZYUSz7DyvZjXQ41UuC4U3cCM1uzyOVDHw2ENqFPUw%2BxUU%2FbieWZCbjEHqcz6hBbbiLL&X-Amz-Signature=5fa673c8102b86849c945c0722b849b73e56a06dceeaaf2ec3536c4fd6254ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 🫐 redux-saga 코드 준비하기 🫐


```javascript
npm add redux-saga
```


```javascript
import axios from "axios";

import { call, put, takeEvery } from "redux-saga/effects";


const GET_USERS_PENDING = "users/GET_USERS_PENDING";
const GET_USERS_SUCCESS = "users/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "users/GET_USERS_FAILURE";


const GET_USER = "users/GET_USER";
const GET_USER_SUCCESS = "users/GET_USER_SUCCESS";
const GET_USER_FAILURE = "users/GET_USER_FAILURE";


const getUsersPending = () => ({ type: GET_USERS_PENDING });
const getUsersSuccess = (payload) => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  error: true,
  payload,
});


export const getUser = (id) => ({ type: GET_USER, payload: id });
const getUserSuccess = (data) => ({ type: GET_USER_SUCCESS, payload: data });
const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
  error: true,
});


export const getUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersPending());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(getUsersSuccess(response));
  } catch (e) {
    dispatch(getUsersFailure(e));
    throw e;
  }
};


const getUserById = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);



function* getUserSaga(action) {
  try {
    const response = yield call(getUserById, action.payload);
    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}
export function* usersSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}


const initialState = {
  users: null,
  user: null,
  loading: {
    users: false,
    user: false,
  },
  error: {
    users: null,
    user: null,
  },
};
function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      return { ...state, loading: { ...state.loading, users: true } };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        users: action.payload.data,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        error: { ...state.error, users: action.payload },
      };
   
 case GET_USER:
      return {
        ...state,
        loading: { ...state.loading, user: true },
        error: { ...state.error, user: null },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, user: false },
        user: action.payload,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, user: false },
        error: { ...state.error, user: action.payload },
      };

    default:
      return state;
  }
}
export default users;
```


💎 모듈 수정 saga 의 effect 사용


```javascript
import { combineReducers } from "redux";
import users, { usersSaga } from "./users";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([usersSaga]);
}
const rootReducer = combineReducers({ users });
export default rootReducer;
```


[`function*`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function*)


💎 리덕스 스토어에 redux-saga 적용하기 위해서 루트 사가 만들기


```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__,
  applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```


💎 스토어를 생성할 때 미들웨어 적용


### 🫐 User, UserContainer 컴포넌트 준비하기 🫐


```javascript
const User = ({ user }) => {
  const { email, name, username } = user;
  return (
    <div>
      <h1>
        {username}({name})
      </h1>
      <p>
        <b>e-mail:</b> {email}
      </p>
    </div>
  );
};

export default User;
```


💎 이전에 만들었던 Users 컴포넌트에서는 users 값이 null 인지 배열인지 확인하는 유효성 검사를 해 주었던 반면, 위 User 컴포넌트에서는 user 값이 null 인지 객체인지 확인하는 유효성 검사를 해주지 않음


```javascript
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { getUser } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const UsersContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고 id 가 일치한다면 요청하지 않음
    dispatch(getUser(id));
  }, [dispatch, id, user]); //id 가 바뀔 때 새로 요청해야 함

  //컨테이너 유효성 검사 후 return null 을 해야 하는 경우에 null 대신 Preloader 반환
  if (!user) {
    return <Preloader resolve={() => dispatch(getUser(id))} />;
  }
  return <User user={user} />;
};

export default UsersContainer;
```


💎 컨테이너에서 유효성 검사를 할 때 아직 정보가 없는 경우에는 user 값이 null 을 가리키므로 User 컴포넌트가 렌더링되지 않도록 컨테이너 컴포넌트에서 null 을 반환해 주어야 함


```javascript
import UsersContainer from "../containers/UsersContainer";
import { useParams } from "react-router-dom";

const UsersPage = () => {
  const { id } = useParams;
  return <UsersContainer id={id} />;
};

export default UsersPage;
```


💎 UserPage 에서는 useParams 를 통해 URL 파라미터를 조회하고 id 파라미터를 props 로 넣어줌


```javascript
import UsersContainer from "../containers/UsersContainer";
import { Route, Routes } from "react-router-dom";
import UserPage from "./UserPage";

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route path=":id" element={<UserPage />}></Route>
      </Routes>
    </>
  );
};

export default UsersPage;
```


💎 Route 에 component 대신 render 를 설정해 줌으로써 UserContainer 를 렌더링할 때 URL 파라미터 id 를 props 로 바로 집어넣어 줄 수 있음


users 랑 user 헷갈려서 완전 엉망진창 환장해 일단 안됨


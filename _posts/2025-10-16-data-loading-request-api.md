---
layout: post
title: "Data loading (request API)"
date: 2023-02-14
categories: [general]
tags: [React]
---

> **데이터 로딩을 한다는 것은 API 요청을 의미함**  
> ex) 페이지에서 필요로 하는 데이터가 있다면 API 를 요청해서 응답을 받아 와야 함 / 일반적인 브라우저 환경에서는 API 를 요청하고 응답을 받아 와서 리액트 state 혹은 리덕스 스토어에 넣으면 자동으로 리렌더링 하니 걱정이 없지만 서버의 경우 문자열 형태로 렌더링하는 것이므로 state 나 리덕스 스토어의 상태가 바뀐다고 해서 자동으로 리렌더링되지 않음 그 대신 renderToString 함수를 한번 더 호출해 주어야 함 그리고 서버에서는 componentDidMount 같은 라이프사이클 API 도 사용할 수 없음

### 🫐 redux-thunk 코드 준비하기 🫐


```javascript
npm add redux react-redux redux-thunk axios
```


```javascript
import axios from "axios";

const GET_USERS_PENDING = "users/GET_USERS_PENDING";
const GET_USERS_SUCCESS = "users/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "users/GET_USERS_FAILURE";

const getUsersPending = () => ({ type: GET_USERS_PENDING });
const getUsersSuccess = (payload) => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  error: true,
  payload,
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
    default:
      return state;
  }
}
export default users;
```


💎 이 모듈에서는 JSONPlaceholder 에서 제공하는 API 를 호출하여 테스트용 데이터를 조회함


💎 getUsers 라는 thunk 함수를 만들고 이와 관련된 액션들을 사용하여 상태 관리를 해주고 있음 / 모듈의 상태에는 loading 과 error 이라는 객체가 들어있는데 로딩 상태와 에러 상태를 객체로 만든 이유는 추후 redux-saga 를 사용한 서버 사이드 렌더링 방법을 연습할 때 단 하나의 사용자 정보를 가져오는 다른 API 를 호출할 것이기 때문


```javascript
import { combineReducers } from "redux";
import users from "./users";

const rootReducer = combineReducers({ users });
export default rootReducer;
```


```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { configureStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";



const store = configureStore(rootReducer, applyMiddleware(thunk));

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


💎 Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용


### 🫐 Users, UsersContainer 컴포넌트 준비하기 🫐


```javascript
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  if (!users) return null; //users 가 유효하지 않으면 빈값
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
```


```javascript
import { useEffect } from "react";
import Users from "../components/Users";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../modules/users";

const UsersContainer = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users) return; //users 가 이미 유효하다면 요청안함
    dispatch(getUsers());
  }, [dispatch, users]);
  return <Users users={users} />;
};

export default UsersContainer
```


💎 서버사이드렌더링을 할 때는 이미 있는 정보를 재요청 하지 않게 처리하는 작업이 중요


[💎 ](https://juhi.tistory.com/23)[`useSelector`](https://juhi.tistory.com/23)[ ](https://juhi.tistory.com/23)[`useDispatch`](https://juhi.tistory.com/23)[ : useState 에 state 와 setState 같은 느낌](https://juhi.tistory.com/23)


```javascript
import UsersContainer from "../containers/UsersContainer";

const UsersPage = () => {
  return <UsersContainer />;
};

export default UsersPage;
```


```javascript
import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

import UsersPage from "./pages/UsersPage";


const App = () => {
  return (
    <div>
      <Menu></Menu>
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        
<Route path="/users/*" element={<UsersPage />} />

      </Routes>
    </div>
  );
};

export default App;
```


💎 컴포넌트를 보여줄 페이지 컴포넌트 만들고 라우트 설정


```javascript
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/red">Red</Link>
      </li>
      <li>
        <Link to="/blue">Blue</Link>
      </li>
      
<li>
        <Link to="/users">Users</Link>
      </li>

    </ul>
  );
};
export default Menu;
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/96f9521d-43ac-4957-864a-4d5de9fc5ccd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7MDZW2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD3EfS2XtwGUs2IPXvJ9v8wSEfNI9G1%2FdtRzw5Lf8DhUAIhANRQMNroAxVcXp3QBcXIZ9evtFx1itL6uYEP8UxYnzemKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfbKG8E7B2wsi1pgoq3AP8OCbn5tUG%2FF0gQTmMo1aytWpU3olq0nfI7RH3fZbJccT4604QemEcHtaFfujC5mhfxB73Me0ZzRyIjGp5W1C5J72esuG8t%2BmMbdQZ5GccMpwzGzAx7oxLBgKUXDN2gvm0tZf%2BmP6FnO0pvVyALvgPjzspVatCY724ZQRSpFOanS7sooXXJc3SLPK0i4zbkmG9vLU%2BE8zgxuq%2FCvFMX8EcA5CIyZkmzoHykOkxcQKRg%2FQG1OzPTgWbTYlGDx22WhW6sGvEEkWMdhswUl9mOHJQxb9Di%2BkrpQGjD%2FI92VffPXAWtWtOvMgD8ybaSuwxfBgO3JKOb%2FBxTyQBNL5THQ2x4ou7tZDWJS%2FvBQm5XIiyjYfYvk%2BDPMptY3Ey30C04U0DKM9wIWNiKcLkHUzMjARKMvAJwX6HFCq8c8ARTzH8wXhyJF6UDzsYMLkM8bxczQtPazJWyd5Rp3EPLKLQkzeNFRyR3gn0eB3pFi4AmskzjihkjA5WXYLInOgpvXb9GDTW8kPQf%2B9ghwpGyKbvegflULRsPABLIsHB3aurp9M0fUcoz7vJo%2BfyucRe0RL8pvF6L1IdzuO5H1rW4VKOisvz6t%2FcwhLlJuB7eQPPtXjebwoh51PbUJh2gyJH3zCamKTKBjqkAdnyM3rwsqTaqOaPuYJ8Hkx1mJh8x2GtqsKIsWSHf8han3R1ovo2AEuZNPOXZ%2BgSRzv9Cun4eZP7C%2B5N%2Feauai%2F58%2FaqGx0y0YOpT5%2F62j6IsXu7CdSgS%2F%2Bd5XhV9m8Bi8bKMylRfoV9SlRe3VrOTgu%2BLDIwsyNLaClLErE8dVA9PD1xB1dgh78%2Bf%2FDhEAo6H%2BW%2BNxtfhEoRnfqCOz50QA5qR%2BTQ&X-Amz-Signature=7e2d4c5bcbecdbc65a910d2c57d75f9cbdf2aceae01af1db7164c24d4daeb83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


💎 브라우저에서 쉽게 이동할 수 있도록 수정


### 🫐 PreloadContext 만들기 🫐


→ 현재 getUsers 함수는 UsersContainer 의 useEffect 부분에서 호출됨 / 서버사이드 렌더링을 할 때는 **useEffect 나 componentDidMount 에서 설정한 작업이 호출되지 않음** / 렌더링 하기 전에 API 를 요청한 뒤 스토어에 데이터를 담아야 하는데 서버 환경에서 이런 작업을 하려면 클래스형 컴포넌트의 `constructor` 메서드를 사용하거나 `render 함수` 자체에서 처리해야 함 / 그리고 요청이 끝날 때까지 대기하다 다시 렌더링
이 작업을 `PreloadContext` 를 만들고 이를 사용하는 `Preloader 컴포넌트`를 만들어 처리할 예정


```javascript
import { createContext, useContext } from "react";

//클라이언트 환경 : null
//서버 환경 : {done: false, promises:[]}
const PreloadContext = createContext(null);
export default PreloadContext;

//resolve 는 함수타입
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; //context 값이 유효하지 않다면 아무것도 하지 않음
  if (preloadContext.done) return null; //이미 작업이 끝났다면 아무것도 하지 않음

  //promises 배열에 프로미스 등록
  //설령 resolve 함수가 프로미스를 반환하지 않더라도 프로미스 취급을 하기 위해 Promise.resove 함수 사용
  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};
```


💎 `PreloadContext` 는 서버 사이드 렌더링을 하는 과정에서 처리해야 할 작업들을 실행하고 기다려야 하는 프로미스가 있으면 프로미스 수집함 그 뒤에 수집된 프로미스들이 끝나고 재렌더링하면 데이터가 채워진 상태로 컴포넌트들이 나타남
`Preloader` 컴포넌트는 `resolve` 라는 함수를 props 로 받아오고 컴포넌트가 렌더링 될 때 서버환경에서만 resolve 함수를 호출


```javascript
import { useEffect } from "react";
import Users from "../components/Users";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const UsersContainer = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users) return;
    dispatch(getUsers());
  }, [dispatch, users]);
  return (
    <>
      <Users users={users} />
      <Preloader resolve={() => dispatch(getUsers)} />
    </>
  );
};

export default UsersContainer;
```


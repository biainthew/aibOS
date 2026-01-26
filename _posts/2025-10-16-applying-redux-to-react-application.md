---
layout: post
title: "Applying Redux to React Application"
date: 2023-02-07
categories: [general]
tags: [React]
---


### 🎀 스토어 만들기


```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStoreHook } from 'react-redux';
import rootReducer from './modules';

const store = createStoreHook(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
```


### 🎀 `Provider` 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기


```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStoreHook } from 'react-redux';
import rootReducer from './modules';

import Provider from 'react-redux';


const store = createStoreHook(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        
<Provider store={store}>

            <App />
        
</Provider>

    </React.StrictMode>,
);
```


💓 store 를 props 로 전달해 주어야 함


### 🎀 `Redux DevTools` 설치 및 적용


### 🌈 예시


```javascript
const store = createStore(
  rootReducer, /* preloadedState */
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);
```


→ 크롬 확장 프로그램으로 설치하여 사용 가능


---
layout: post
title: "[Error]ReactDOM.render is no longer supported in React 18"
date: 2023-01-17
categories: [general]
tags: [React]
---


[*관련 링크](https://7357.tistory.com/44)


🦁 리액트 시작하려는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/fe767056-5666-4416-a11f-8ef5c5342c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCKDF6E%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZEk8wlgMYne%2Br69vTcbyfevV4zYqAZTmApVn00J9rAiAeIz2vAftQlp51diJcnrEY52b3DZ21VMReprgB7AFAXyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZNp5P9a0Rl81ZQVKtwDLJliOR5ABhQlDKmOEq2wKblM0gm51tNhsTRqI8vDknMej%2FNVIxfRqltJyk05bgqvJKzwomkbpET%2BRKzQg5Pk7XM1kRzYHaezDzi2wA6EFc1GRcFJTvpTIPfV79u4dyK4J12K2aHrJ5wd7B1zYcXimBMnX7VPraIttvVItiBt7eDo34enhplk2bdA%2FcuPrm9IatzinvPxO6V0XhGU%2Bkrdkc2Qa%2Fy8%2F4%2F102X2shtAp8pTsM9E7WHRqyZ4y96Si6SEq1zWmQPuRuw5S5o9iY1GIO2UZM4Ew%2Fp%2F4kW0%2Fbnvmyyl%2BijywkDoETZT6VsTryeUEq%2B1v3B6UEwnmr%2FqkusAQS5oS4fJ4raitYmv5LAZz8NQVFhd8Of0V5J5JtFOPKfRrGGf8udla7dhH4bndouxdn35J%2Bk9dd4nKLrECSEotAK7W4CwHBWBXl6782IS1c%2FF%2BsTBOSobrB2zy4W%2BNdGUIJFZav53VvGD6lBJp031V2I20aFxrOfh1rVWg3V3kifJe9hxRhekVzdLeMt98tJJqzq6iNmnVVWBlo%2F4wwSqJAR4l4UvYJzzfW2STMYQfon%2BuJi0ctdFOGK6EHaTdNNUQZBtBNX%2FgaNTeBOTYSU%2FomkKzLftLlkNJbOFjzowwr%2FLygY6pgE4Eoxx1aI9bSMNjofS%2Fcp5jo0yCXRHsBFBpTHLN55HXu0bsoR6VFcq2Xy6ZuO%2FP4z6DzCtWXN8Y3BKJbnUUaawZttmePrrg%2F1yGdUl4I47y6BbklveiRKdAa7yCrU4pfXfz%2Fs%2BZ2BmINiBGJbjpuiRDGw5abHJA%2B0%2FejxipzpOzq7jU7V5ohsqZaW6yVSHTZ3P1HG0wt4znGD2C6y%2FSTDX%2BrOrELqK&X-Amz-Signature=d03b661e1a48c077f0aeb646e704289f1bcc676127e9c5b41419a99e9c4af8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


ReactDOM.render를 리액트 v18부터 사용하지 않기 때문에 나타나는 경고 메세지


👇🏻 해결 방법


```javascript
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();
```


위의 코드를 붙여넣기 하면 에러가 사라짐



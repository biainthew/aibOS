---
layout: post
title: "useReducer"
date: 2023-01-26
categories: [general]
tags: [React]
excerpt_separator: ""
---



: 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수 / 반드시 불변성을 지켜주어야 함


### 🌈 예시


> 💡 `function reducer(state, action){  
>     return{…} // 불변성을 지키면서 업데이트한 새로운 상태를 반환  
> }`


> 💡 `{  
>     type: 'INCREMENT',  
>     // 다른 값들이 필요하다면 추가로 들어감  
> }`


👉🏻 type 이 필수는 아님 / 객체가 아니라 문자열이나 숫자여도 됨


{% raw %}
```javascript
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
    //아무것도 해당되지 않을 때 기존 상태 반환
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
```
{% endraw %}


🌀 useReducer 의 첫 번째 파라미터에는 리듀서 함수를 넣고 두번째 파라미터에는 해당 리듀서의 기본값을 넣어줌 / state(현재 가리키고 있는 상태) 값과 dispatch(액션을 발생) 함수를 받아옴 / dispatch(action) 과 같은 형태로 함수 안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조


🌀 useReducer 의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것


{% raw %}
```javascript
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickname}
      </div>
    </div>
  );
};

export default Info;
```
{% endraw %}


🌀 액션에 [e.target](http://e.target/) 값 을 사용하여 깔끔하게 코드 정리


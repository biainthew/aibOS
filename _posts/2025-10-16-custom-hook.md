---
layout: post
title: "custom hook"
date: 2023-01-27
categories: [general]
tags: [React]
excerpt_separator: ""
---



: 여러 컴포넌트에서 비슷한 기능을 공유할 경우 커스터 Hook  으로 로직 재사용 가능


{% raw %}
```javascript
import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```
{% endraw %}


{% raw %}
```javascript
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
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


🌀 깔끔해짐


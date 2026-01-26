---
layout: post
title: "Using immer"
date: 2023-02-01
categories: [general]
tags: [React]
excerpt_separator: ""
---



```javascript
import { useRef, useCallback, useState } from "react";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  //input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form]
  );

  //form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      //array 에 새 항목 등록
      setData({
        ...data,
        array: data.array.concat(info),
      });
      //form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );
  //항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
```


🌀 아이디 / 이름을 입력하면 하단 리스트에 추가되고 리스트 항목을 클릭하면 삭제되는 컴포넌트


### 🌈 예시


> 💡 `import produce from "immer";  
> const nextState = produce(originalState, (draft) => {  
>   draft.somewhere.deep.inside = 5;  
> });`


👉🏻 produce 라는 함수는 두 가지 파라미터를 받음 1) 수정하고 싶은 상태 2) 상태를 어떻게 업데이트 할 지 정의하는 함수


👉🏻 2) 의 함수 내부에서 원하는 값을 변경하면 produce 함수가 불변성 유지를 대신해 주면서 새로운 상태를 생성


👉🏻 불변성을 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 것 이 핵심 + 배열을 처리할 때도 매우 쉽고 편하다고 합니다


### 🌈 예시


> 💡 `import produce from "immer";  
>   
> const originalState = [  
>   {  
>     id: 1,  
>     todo: "전개 연산자와 배열 내장 함수로 불변성 유지하기",  
>     checked: true,  
>   },  
>   {  
>     id: 2,  
>     todo: "immer로 불변성 유지하기",  
>     checked: false,  
>   },  
> ];  
> const nextState = produce(originalState, (draft) => {  
>   //id 가 2인 항목의 checked 값을 true 로 설정  
>   const todo = draft.find((t) => t.id === 2); //id 로 항목 찾기  
>   todo.checked = true;  
>   //or draft[1].checked = true;  
>   
>   //배열에 새로운 데이터 추가  
>   draft.push({  
>     id: 3,  
>     todo: "일정 관리 앱에 immer 적용하기",  
>     checked: false,  
>   });  
>   
>   //id = 1 인 항목을 제거하기  
>   draft.splice(  
>     draft.findIndex((t) => t.id === 1),  
>     1  
>   );  
> });`


👉🏻 좀 더 복잡한 데이터를 불변성을 유지하며 업데이트 하는 예시


```javascript
import { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  //input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  //form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      //array 에 새 항목 등록
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );
      //form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );
  //항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
```


🌀 immer 를 적용해서 더 깔끔해진 코드


🌀 immer 를 사용하면 배열에 직접적인 변화를 일으키는 push, splice 등의 함수를 사용해도 됨


### 🌈 예시


> 💡 `import { useCallback, useState } from "react";  
>   
> const [number, setNumber] = useState(0);  
> //prevNUmber 는 현재 number 값을 가리킴  
> const onIncrease = useCallback(  
>   () => setNumber((prevNumber) => prevNumber + 1),  
>   []  
> );`


👉🏻 useState 의 함수형 업데이트


### 🌈 예시


> 💡 `import produce from "immer";  
>   
> const update = produce((draft) => {  
>   draft.value = 2;  
> });  
> const originalState = {  
>   value: 1,  
>   foo: "bar",  
> };  
> const nextState = update(originalState);  
> console.log(nextState); //{value : 2, foo: 'bar'}`


👉🏻 immer 의 속성과 useState 의 함수형 업데이트를 함께 활용하면 코드를 더욱 깔끔하게 만들 수 있음


```javascript
setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );
```


🌀 이런식으로 produce 함수의 파라미터를 함수 형태로 사용하니 더 깔끔해 졌다고 한다


### 정리


❗컴포넌트의 상태 업데이트가 조금 까다로울 때 사용하면 좋음 / 상태 관리 라이브러리인 리덕스를 배워서 사용할 때도 immer 를 쓰면 쉽게 코드 작성 가능


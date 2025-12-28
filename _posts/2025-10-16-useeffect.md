---
layout: post
title: "useEffect"
date: 2023-01-25
categories: [general]
tags: [React]
---


: 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook


: 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태와 유사


```javascript
import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다");
    console.log({
      name,
      nickname,
    });
  });
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJOQ6Y5%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUNyesS7FqVzurqzM%2FMyOJ8P1%2BlnH4%2BQbT0EuSZP6jrAiB%2Fm5XanXf3U8AQIpbA%2FbpmC9zX%2Feg4eLo3iTA7%2BZlHYCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMWEyuUuT1S17xLAG6KtwDrcJRFRso%2FXlvMdXhqU1fV09tRiSN2iKlsrxlToF5uYQUSom3mVze6LPkI3lQK3qwK5D0JWp4PUuJTgYz1iO2ZtTA2BYK0fIZ09%2FwfuDqV3BgggbILyVvvBkBvvMEVGzcT7ZEWDAAG%2FoHpIfST0oHB%2FSBV5C0MpwIDH%2B9jc7xFEtD7o6AbsID94H9TwWpzeapNN1mzH0ukqNScoq2ShpoBZBLtKEXwjU9HT8go9zIugS6o7l%2BA3u3SepHhaBUHHlOaHRONWvIkANBaNnBb4dLcxDtcB51JwLdMCUVsv4sXPZVbAZRjmD%2FEKloeMKW7sdaYzsFwIvnsMKW0wq1fnF9n8P5lFYb8g3gBV0gqAHFJSxsANZtT7iVz%2Blu6nbmIKwH7VpF361falzEb72NyLgLKRU38Web74dwgsj8%2Bpo%2FaHqFzSFw20B8OXU1p%2FcsX5h5N04kYCTZGcLSLf1oOcEROXKCX3NZry1gimc3NqrU4TYeimOKMVgEzC%2BNmZyJGfhLZBRE7YpA%2BfTQ8cn93%2FC4YGp7UPS0ujxvOrDDDM7JlvSHKey50EmDF%2FoSsveLNxvL%2FlbKCDxTGzizvJ%2BGkbaZD%2BaqA%2BVjERimL460I4GB%2Bki1%2FMIorh%2B7OnM5OgYw2YbBygY6pgGySQzV8huZA7GxaWCVj36hEVz84LJvlT8LCxwyspVx1ymQSiNkthJia1VbWi5tXluej%2BYqfy%2FLbgXMxQHU7ski%2B7UuQfLB%2FhVZQ%2B7rSswrNGpjXOvEzBFRkMD3KwlbyrqohZgAFxmtZyB3HK62cg7uY0rqPVjvvz6B%2B0CHoh%2FJROQRp4aZHyzm4ygPKRAv0av1YQrFwqSteFDOHs154OwDEvxbJKRV&X-Amz-Signature=ca80d6d5c4d808d75e0c38d74f8d67e29c0a8f795a52ba8af35c7f470749147f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🌀 처음 나타났을 때 두 번 출력되는 이유 : React.StrictMode 에서만 발생, useEffect 를 사용한 코드에 문제가 있는지 없는지 감지하기 위해 두 번 실행이 됨, 미래의 리액트 버전에서는 컴포넌트가 사라졌다가 다시 나타나도 컴포넌트의 상태를 유지하는 기능이 도입괴는데 그 때 두 번 실행이 되어도 작동 방식에 문제가 없어야 추후 호환이 정상적으로 이뤄지기 때문


```javascript
useEffect(() => {
    console.log("마운트 될 때만 실행됩니다");
  }, []);
```


🌀 처음 렌더링 될 때만 실행하고 업데이트 될 때는 실행하지 않고 싶을 때 : 두번째 파라미터에 빈 배열 넣기


```javascript
useEffect(() => {
    console.log(name);
  }, [name]);
```


🌀 특정 값이 변경될 때만 호출 : 두번째 파라미터에 검사하고 싶은 값 넣기


🌀 배열 안에는 useState 로 관리하고 있는 상태, props 로 전달받은 값 등을 넣어줄 수 있음


🌀 대부분 배열에 의존하는 값을 넣어줌, 배열을 아예 생략하는 상황은 거의 없음


```javascript
import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
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


🌀 언마운트 되기 전이나 업데이트 되기 직전에 어떤 값을 수행하고 싶다면 cleanup 함수를 반환해야함


🌀 cleanup 함수가 호출될 때는 업데이트 되기 직전의 값을 보여줌


```javascript
useEffect(()=>{
    console.log('effect');
    return(()=>{
        console.log('언마운트')
    })
  },[])
```


🌀 언마운트 될 때만 cleanup 함수 호출하고 싶을 때


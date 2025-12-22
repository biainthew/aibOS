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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4HYTEK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICERW3OPzftkqx5BKvVCmOGotfVC6VsRbzMU5XXx8CgJAiEAmTe3Gb%2FwlH6nP3AkpaUNQ7uIJpg3RyHCQWq9n2S8I2EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4j7esDHSv3cS%2F0YCrcAwouJ2mJrad%2BR2NE5pXI8OnnuGaRgnJVRRw%2FRc4Xr46uY9DrJzK07uUBEqjrIo9I8J6SZ%2FFVURWZel8%2Bq7neRZNpGF4i7U1o%2F3EtTwOhEDAua%2BPTzB9WnL9Q%2Bs5fGI7ZWQ%2B6Vy5CRvywmQPmICzj%2BNfmQAdkOr1uzoOLl2cIXZuIgue%2FESfgqXx%2FBa8NqkIjH%2FWrw61vIruQrglauykkjBaBH6CAx22D8ZsQRPkNs%2BzZT4CdaznOxL2sY2OmIvO%2FAwNQew6ZpVFpe1qLJpyLsf3R8DY4cR%2BXBgKWGIV6e0alm4jHHzE5kNVzEZoKcvAmtWX9mXO%2B2rz%2Fpuqvc%2FknGCh53mP1wZOqdfEnETfd1uJFnORPIyiG09xqM4QDDE7rNNnX4a5fgH71iDXCbEJhlkbZ1q44S4Cxz5yhfz%2BJ%2FX4deHt%2FWnyc3xtHLaULbY1q%2FBtBo43aVqJXuIDuh0IvBachmg5bJ1qF7wiW4ftlWmC1j1ZEk3skNZL3mA02XPOrPXUhlBkZ9M140OQCQGwg0BDXVQOx5BzScZDXw7tmNAYL%2BreMVdLYmaABv%2Fbgrp2TSjbxnS580yyAJih7q4eMoDEdl8HaydV90G2EiTCIQTY7JXKNhMGFUH9aplMcMNeVpMoGOqUB8PHixkhA2fDjS3Bi4LymsXST6Y2j7R2Oc32ryH8Um3jnjM88AtjiPmlNPdlzHnk4HFFwylCpVKBb%2Bxv2BoWmqQkvnsT9KCGUnbKSBwET6SG2Cukb050uFpR0MwKewrv7poCRdetCViMKaipxRy6SJ2OuqqWDwcZ9Qies2vWY2N0q2iIGbxj7ahluC0JIn55ZXXp9N90zbpVoEWmDAgkcQkR6g%2Fdl&X-Amz-Signature=3733e3100591cd590be6b98e063c18411394c683ce77f62f27c3202a03ca4eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


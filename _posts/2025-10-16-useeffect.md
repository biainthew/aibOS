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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYYUTOIM%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T012032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE6tWOXHmWZlT%2Feq9LM01gZrsXveJcWEZS8ewlbdlSheAiA6nxz%2BYUuv5jEVmoX%2FhnrOSJyEzxpNES0KUgzFwL1ZCCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOuRDBzfxGT2Rn%2FdyKtwDs7iwHPNJaVLkJDApMlhJe8pVrfIwe9azTqhVJnUGj43rER2b9CuvJRASA4XDBHiuOxr2aXav98tQ2P2eCqQIOMzcnM6%2FPM%2B4VZjFYWpgqKGT8Zz1VqhC9E2DcGwHBTtNARbovYFVIIsr5FrJDyK3g2xy9cd%2FIjSjwDUH1iCgOAVmNjByCGJ16UbnSCUuZVYpzNIYDQXnGSLXgLYphM5QphlN5Natd0GtkzfT%2FYXrNwXv%2BOjk4KsaKSq3RyPs33eGb892sg%2F6IUC%2Fw%2BMNI1ZAG%2B3yrGv5gnZcOxhJeLjvjGhGvR2ZqcJ1EZDitx6k9yg7S1qxPhVuwZ8HviZ4isfsehYdRKnf7Z53RI5K82T86nDMdVYgvhDFr0jo4Ozz6KmUPSXLI7WEwLaO8Ts55RGZn9MvglxBunPFw41F5tqUBI1F1rBbeVOXVU640r%2F2CpZ0vGoIEceNAfPZ0QP8xXyGrET0mukxxzwPzERKh7jIyuLW%2BfOYq4V5M0e2HPlOBHj0j0DikvGxLkOxWqG7SKubXFkipMd03tgXXuL0P7rp%2Bv2ZX9EFCY5vc0SEM8rRUeWIcGCJFA0hAb8xkk%2FcKfdC%2BDO3cv51EsWSm3iyCYBV9ux%2BRa8ZakE10Tibe8Uw6PuQywY6pgGnWViUIg2jZ51dfU1Uk1tfA4WWDLZ3TU81S0P%2FYuOUw9DhV%2BM%2BDHZ0kBN8BQm%2FUclL4uZT%2F0a7atiAAmMzzhVtjvz4bLba7j%2B3FtqO%2F6PzAAJEZsZw1lVB7VhHe%2B%2FuYQoHsD1a%2FrS%2F9STQEwexR9XBKnWGzBZ%2FYT%2Fm%2FlTBRSzob%2FHRF18gQJIZMbMgQtpGGP6X6sXhgUIqgn82ms2w7y8mfpijNnQh&X-Amz-Signature=55d725841093b5dca1f657cb5c5a8987d1f788d87c8dc51beab470b2c6cc5554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


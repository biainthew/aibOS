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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNSNH55%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAA6iwralyORsu24vsnMnYpEI7kR7mGjuPErdz89Yf6wIga8ApqwwOSnA1AvdKkJDHxhr%2FHmfXiQp2G%2FNE%2BIWuY64qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnVo4xtf3ss1ixFnyrcA4vT3tkGrec%2BLjhLnQQyENDTGRTt1bkIx669SNurg%2FrfGk%2FYasKIPIUfM3NyeBmpadwSQO%2B2vV2zVYbU0cXtH4VFDXwWOyVTzJJLwkARUOJHJLo8J66Mzb4BXCXUk66I7n5MjDEeIFhh76ibR51Od0HwG3S1XsOlKNBbCp27seukCGF0YsAZnYJsjHJaJ3hGYKM7FxtEvKLDYLqMNdFAEz7sVn9UMPk9%2FYls8%2FelUiR6WWkuoTyP%2BZujEeS9dvRRqNZUqMBDrjFv5zRP7yKSlTDBFGcYTmLB4%2BcvJmjWgVYu4AAyyQadcFCWL4bxwW6fKb7AgbgYWAF7dF2JZaCbhmHNcs8mFcSAgeJTZiz7qEhyoJPZWVpueQ9MVYc2NOkRnr6Afcm145iKLrxiud8hY2XDqCCu2FdtUdSYuaqxK3jxbN2aR6hg9uOSfAOKjTPf6RWrgTiJEIXDQiMBz%2F4oINL6bLrMoUlM4kJcX7iiJtHJbkNeFGLNkhnFnkBLa9P5oJtoU8M8D4rbE%2Fmt1UzAwIWa8CGDf0kMokYB5MwhVtkZhjwfnN8kHItPT02geUHmblgJ6QCKXrL1cejXmJ4KpZ3eArL0DYM%2BJwWdeL3FLsSSEnXlrcnM0Fgoy1ymMPG1wMsGOqUBDFYF%2Fivl1cisrUl7GCRR%2FAhoRSsoVoV%2BWn3nPchxXuRGeV0UtZw7dIhwJz0RJoYS9gOmEYLry3sBtEwnV9KupD%2BJSYwzsgtOUyqcpsrXolIkm6yTXdwaGpVSkLosxKZtkFyfTvfja2pf4LDya4PAIBuQ0%2Bb9lI6wjHsT215qQPJbcVZ3u5e9jy0k9g7ES9lTVKKTyd2XERWWja2hN8lKC9DxAqJr&X-Amz-Signature=58b7ed9a0b8fabd86802ac791f04ab60665989bf7550ec160765e44df335c9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


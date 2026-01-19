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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMXTSGU%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T012204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgtcV8WnWZZA71LAZQUQ6s7Qk2L2%2BgkRuAr6kt2W8npAiEA3hvWgE9elYDNzuLOpFs2j0yloVkbDl6GA%2BAnZPraMdwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdxQBaSoC9fAvYnMircA8d9qqdLPZdHsa1h9SK%2FL%2FLrgYzpmTeY4DjEqlAt2OxrptcVwQvEI7GwGKixa%2Flq9leDwYqGwHkw6YhaLE%2BkdAj1dctJsHqpen3pl1POWtOtnWQyUcyu0SmRR%2BH8Frw4rxMDcerRWhzv6WASf1tibb4GaB353VbMnVUcXYJtDKSsGhyHAI3ObCz%2BkdorsKZgs2umbNDkYvLca%2BSmbVSXOi3Bcj7pkxX3o7t96XZl8D88t5kYx05HIdfbnhZteuTWpAanRieM02uh9qpAAK5HDZQIM5tmwfLJgYFfmItuYiRbHxnNkVGDAGQI0N%2BpNuQx1yr5v9vbVG9DzPDGsJqg7968EHbEIc219Fx1hktaL8jCVT6fLm12FNZTEV0G%2BQvpGvfM7Nd1SxuBYQV4rEptjvHKXC6gIDbEOSoPYyjEE3%2FSBnhpXfScB%2Bu92KRHoz33aHwD7wfMYxrlUWyxFlR%2BSxMY3WQ1pXti3aX3VXg2YG%2FRPRwJe%2BsDyU7AhX35Eba%2BknlictXGumS9Uirgfo1ROprQhRmIh3rkNAcFxisTmeVLIuq1Z4BfEsm%2Bsu7XXCY%2F%2FgQfnTb14dXBtxVkCXmFItkTuq8ABFJbKIlyJzNNP86a9nkpkDMJqpupJ2HvMJnhtcsGOqUBlrumUnbRA4m2bWHeiPqT9k0Fb4pv4mXj7xWa5PEh5IZWlEupmoD4YG7otJT%2BPFBPFZIQJ9RPV%2F%2FHNoMZWD%2FsE0v4eV%2F7Z14fo9X7VNEJvFQG3snFfRpy9abkScfVvZ1mqASl9pAFg7gACFxaRiBAmERM%2BPRP%2Bz8u8kvZD%2FqTwnGxaZzxmqr6HUJ6F1okHlaaYoyrmwERtmhrWCeakKJkn81JLSRK&X-Amz-Signature=7a4b2b330ae162e3dd6c528bad33ed584256e2061c419e1276d0a38cb8a9c479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


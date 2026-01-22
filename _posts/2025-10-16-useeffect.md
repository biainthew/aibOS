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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3X6W2E%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAQARe1CUf7WY4Kh39RbveRyYq5%2BjBdhvwZ3i0gy8gGIAiAukA6mwppViiv3qWjXeYxwijlEqTQlhbKO7TyG%2B%2Bn1oSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnY2yNmNTzB0yiJz5KtwDWPn8YpwIBcG0LxmfeMhiy38G36FaOLbBGVpkGVOoQ64k02A5bJUH39smt%2FC6N2AefxXowdUtqrIDaEgsQ8tdiEeeEBX0hEjbosCKZ%2FtBy1yJThL%2BWJOQsk2Q9gR%2FlQ7EXJG%2BDwkOlN%2BiMyISl%2B%2BAfT1rUWIgB00enGZCaJsnfyYTTpcFur%2BQAkO8l0wHWgMEVPh48y%2FRRxF4zc14%2BY3bHI2N1gMCrmuvCNsvHuA8EBoNG5GxGlkbkPWJB1o1cTZe9G5XEwsIyxUP5rYY%2FVutFhA%2FWSAocmZ6GO83JOmtN5iJu9aiaibzPdfkajrRdriq9cwZpPyjNYnhlWzNdzJx55U2ow%2FMe0bvph0fvRYQ3MWxq4ndULOExBb3PC0pJiFwyYXpznOjn0rZF0nlPOQ%2Fl3pmsMfF0kCgCx%2BjGAjWRH5z4YuZQEBYXFI5Lj%2BDX37nqZVoG2ikafUDrRSeBS2faXbsym2XixoYTA4Y%2FPKLxy3raXQvfogrvSXndcMnBvF392mybtmJ2A%2FXyAGChiQzPQT5bcRv0rq5xsWx9vVhReGj%2FwP0mhL07crIQI8hw9%2Bpoxh3oyY27bnFYb7XdKm%2BNgCMSkQIBltpGZY73HiaQtjHASoPpVtY7E2KmkMwn9zFywY6pgEMFqatQ31AK8U9HAaJMwqMXg%2Fj5mIQtQgdCbTJXClyWwMVhof%2FC5vtblOyRvqIijAMiQvrblFgTuGQxX1HE2QyhFjHB5LIg7eZxQjfKsSVRHe6yoSnjwEqBCqnCIVqpF8pqEJqYW6KaDL2%2F3LKsZZgf2u3aKJlLGWN%2BqzWe0EIceqnpQNEoEDiwuoZLYJ3aXoexBx2whpF0Cwnm0ozwW2mfwmhYaql&X-Amz-Signature=e99fcc744cf8efb575df6dc3387102ea47bb8c42d0e649ee9dd33757500cb6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


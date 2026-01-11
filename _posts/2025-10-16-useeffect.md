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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJU3JSL%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMaxDxBFAaKXq9kloRnzvK4OaYqvVuBOK%2BvNiHBFt5aAiEAvAAdoBJTBNJM2TaufXIdgZM2Fb93Hdqzd%2F0v9xOHeQMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuCdRI%2FjAeeLhikGSrcA8ybGQKlDuM6Zkoycrz7QLmrNhy3RP%2FW5ZRFr%2BEJ1gbgYgJWE8cLx0gaF%2BYdLLskNzGszzwfxWltmnNUFnXj2zI6o4c6GBVdtSPBCbIYHva83IOf%2FlEehXgtv4WUDj5Xvc8aJF5TFEV8t1JGBgKnULDdRqlZutZNmwWL8IigmZGZSNyhpibCBlD55xTIoaG1EGaPfNQxv2eCczZmsF2Ka%2FounQxNkVUFFA6%2Be7C7lolKN6bRYmxUThCM%2F5pS4Ri5hu7j8e99qKJZNyPB94YQL%2B6Vh9YaoITg%2FRTQk3jnZIG%2BZfP%2FXDrWTpsj7RJKoG%2F1pDtHJJ0RCovBaVHW8LfJ1cKwg82rOPTS6u5JzExyDLrnACEKp1XD8urRiaoT%2FylOk%2FZM%2FyG%2BGb2LyYn4Ff5EPm7W4UM5q0qkt1MOlqmj8CNuograQxqy3WB77GjVQbU4VGuG2fEEo%2BNLm%2B8zyZsTHOXYWrHpP0H7jNgLl02fJeFj%2FHOvCV7qsnbwDEKB1i%2FiWc9gKWTWdj%2F3mXmjD3B8fWQuey7h4E9U9iXTChHyWqcq%2FWGsNGqXd2St%2Fxz5HuU5fm3ij%2F63dWg3uZj%2FmvkT2Dzv67UAQbbgNdINmwEGsXhiRdIIXYrmsSDnooTJMOfgissGOqUBWeEtsPJlhMM85drjxy2f5PlwTTIQ0lGQ%2FRDRWtBZtW6a065tFvYO0LL3YsUUkZxKN4%2F2K6%2FpyE2BsU13zi3FymENP6OfWKyTOvTVBDDiZRB4mlCg%2B6oTD4sRiWm0jaeRLYHOI%2Fw9yoVBfMHvNTB%2BHqLHQpb0q0ZBkzFBY35ctV49lduLF8uvueeDHgmJj56btIve7DZnf%2FJ2S7P0rzk7BCEnGxnz&X-Amz-Signature=b9b8cf720b37c3a0cab6cc094ea135138ed251223c6d39ba2be5f45c379e3223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


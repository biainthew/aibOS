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


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6baad5da-de72-416b-af3d-509e4cedcb68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.08.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635S2XGLQ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLXxtfiwbzDhUfJACNapgDgNZDInNSWW85k6T3n6%2FmrwIhAP0yJt3WwjedmJpMTVizPmetH8mMT8VPLeW4WfzGka5MKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXHFZhP10VWG4kZZYq3ANH4thzVJTCh4u1MnCYnt1qntqEEvt3M1oHfBrQYtiYuFmPNyTnnFJmus04u2RqS051QVLWNJ4yaREn20eTemjclicMD01sRUnoSGYztGoPs2TJTDeb%2FhPYmnN8ajcv1vsOA%2BpvDpcgX4KcoFchES29nJR4fZLD4gElFX6uJYys%2B2ayJVXCjAoJ1hr0mnWPKGR%2BfGewX8lAWRV8dG19KirVRjjLn1sGQyBoeAqbwx5fBdIe7ZjbiBpVTkL0KUkqxUbrKtJeLN4T3047XhDsvXZvYgKuG5YgnhZ5IWlCgoKkzm3FYRozoW7A7ZZ7FVAbDLeHacQFqrmVrLBkaYS5BkK5tiueBAteIELEg910AIxM36MPXzNvu4xvK8H7FdyMc0agJFJsS7miVgP673fnM6zs5TBtTU8oBMv8rGAvpPfXjbHhvlIR6ed3%2BpCJpqQ%2Fej5gcahB4IQ7MCYkpO%2Bb%2F7HQDJ9orsRWd42kPg8up8Ff4yqY20JIpJBBgh24tKTEiMSeGHDEV8utFJZzX2yWTGYOvuPu58B%2FDgyfpvMCvkeY%2FRt%2BjFHwE0umq%2FPcly7pQ9%2BNO8Qry6Ls9xoIjYxkmR0pJ9z01Y569K6ARohBG9KSzGy6Pgsvjj48LcHaBjDl09DKBjqkAfSJkWT6NFP4q%2FatMCQCxXMU3lzhmThTxQWEXfnIjLEMz3pA66iKrtL8jgioniWXcmKfYRTaXvE3E1CCeuik5fRNanwdlPj73%2BhTBM%2Fkg9FF%2BvVLSu9YlI45bIeClzj6jJ4yXBINAgOvEUZNAUePXsX5tmCG6h1pt8pXvO4TB%2FD6He65abxfFbvrQ%2F5sw1JXgZVObKrCENQmF9xqWTdwSiVvxdQH&X-Amz-Signature=2dad496d9ee4c8ba116482ce84bf5d8c4fe5baa1494385f1aa4793ca136b6450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


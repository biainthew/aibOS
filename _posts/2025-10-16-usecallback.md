---
layout: post
title: "useCallback"
date: 2023-01-27
categories: [general]
tags: [React]
excerpt_separator: ""
---



: useMemo 와 비슷 / 렌더링 성능을 최적화해야 하는 상황에서 사용 / 만들어 놨던 함수를 재사용할 수 있음


{% raw %}
```javascript
import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중 ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]); //number 혹은 list 가 바뀌었을 때만 함수 생성
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```
{% endraw %}


🌀 useCallback 의 첫번쨰 파라미터에는 생성하고 싶은 함수를 넣고 두번째 파라미터에는 배열을 넣음 / 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 함 / 비어있는 배열을 넣으면 컴포넌트가 렌더링 될 때 만들었던 함수를 계속해서 재사용하게 됨


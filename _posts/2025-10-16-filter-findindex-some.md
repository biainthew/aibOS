---
layout: post
title: "filter / findIndex / some"
date: 2025-03-04
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### `filter((value, index, self))`

1. `value` : 배열의 현재 요소
2. `index` : 현재 요소의 index
3. `self` : 필터링을 적용하는 원본 배열 자체

### 예시


```javascript
let arr = [1, 2, 3, 4, 5];

// 필터링을 위한 filter() 예시
let result = arr.filter((value, index, self) => {
    console.log(value); // 현재 요소
    console.log(index); // 현재 요소의 인덱스
    console.log(self);  // 원본 배열 (arr)
    
    return value > 3;   // value가 3보다 큰 경우에만 필터링
});

console.log(result); // [4, 5]
```

1. `value` : `arr` 배열의 각 숫자가 차례대로 `value`로 전달됨
2. `index` : 배열에서 `arr[0]` 에 해당하는 요소는 `index`가 0
3. `self` : `filter()` 를 호출한 배열 자체 == `arr`

### 결론


배열의 모든 요소에 대해 반복하며
각 요소가 주어진 조건을 만족하면
**새로운 배열에 추가**함


### `findIndex()`


: 배열에서 주어진 조건을 만족하는 첫 번째 요소의 인덱스를 반환, 없으면 -1을 반환


### 중복제거 예시


```javascript
let combinedEl = [
    { elevatorno: 'A001', buldnm: 'Building 1' },
    { elevatorno: 'A002', buldnm: 'Building 2' },
    { elevatorno: 'A001', buldnm: 'Building 1' }, // 중복된 elevatorno
    { elevatorno: 'A003', buldnm: 'Building 3' }
];

combinedEl = combinedEl.filter((value, index, self) =>
    index === self.findIndex((t) => (
        t.elevatorno === value.elevatorno
    ))
);

console.log(combinedEl);
```


index 가 self.findIndex 결과인 것만 새로운 배열에 추가하는데


findIndex로 첫 번째 인덱스를 찾고 filter()는 현재 요소의 인덱스가 그 인덱스와 같은 지 확인하여 중복 제거


### `array.some(callback(currentValue, index, array), thisArg);` 


: 배열의 요소 중 하나라도 조건을 만족하는지 확인할 때 사용

1. `callback` : 배열의 각 요소에 대해 실행할 함수
    1. `currentValue` : 배열에서 현재 처리중인 요소
    2. `index` : 현재 처리중인 요소의 인덱스 (옵션)
    3. `array` : 메서드를 호출한 배열 (옵션)
2. `thisArg` : `callback` 함수 내부에서 사용할 `this` 값 (옵션)

: 조건을 만족하는 요소가 하나라도 있으면 `true` 반환


: 모든 요소가 조건을 만족하지 않으면 `false` 반환


### 사용 예시

1. 배열에 짝수가 하나라도 있는지 확인

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    
    const hasEven = numbers.some(num => num % 2 === 0);
    
    console.log(hasEven); // true (배열에 짝수가 하나라도 있음)
    ```

2. 배열에 특정 값이 있는지 확인

    ```javascript
    const items = ['apple', 'banana', 'orange'];
    
    const hasBanana = items.some(item => item === 'banana');
    
    console.log(hasBanana); // true ('banana'가 배열에 있음)
    ```


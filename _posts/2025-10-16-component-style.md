---
layout: post
title: "Component style"
date: 2023-01-30
categories: [general]
tags: [React]
excerpt_separator: ""
---



### ✔️ 방식


1 ) 일반 CSS : 가장 기본


2 ) SCSS


3 ) CSS Module : 스타일을 작성할 때 CSS 클래스가 다른 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해 주는 옵션


4 ) styled-component : 스타일을 자바스크립트 파일에 내장시키는 방식 / 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 해줌


# _SCSS_


```scss
@mixin square ($size) {
    $calculated : 32px * $size;
    width: $calculated;
    height: $calculated;
}
```


🌀 mixin 안에서 변수 또 사용하기


```javascript
@import '~library/styles';
```


🌀 물결 ~ 을 사용하면 자동으로 node_modules 에서 라이브러리 디렉토리를 탐지하여 스타일 불러오기 가능


```scss
.SassComponent{
    display: flex;
    background: $oc-gray-2;
    @include media('<768px'){
        background: $oc-gray-9;
    }
}
```


🌀 include-media , open-color 설치 후 사용 / 반응형 디자인 ,  컬러팔레트


# _CSS Module_


: 클래스 이름을 [파일이름]_[클래스 이름]_[해시값] 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해주는 기술


: .module.css 확장자로 저장하면 자동으로 적용됨 / scss는 .module.scss


```css
.wrapper{
    background: black;
    padding: 1rem;
    color: white;
    font-size: 2rem;
}
 :global .something{
    font-weight: 800;
    color: aqua;
 }
```


🌀 고유성에 대해 고민하지 않아도 됨 / 해당 클래스는 스타일을 직접 불러온 컴포넌트 내부에서만 작동하기 때문 / 웹페이지에서 전역적으로 사용되는 경우에는 :global 을 앞에 입력


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.51.49.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cdd2303e-ed7d-4b26-ae4f-b2048d2871e0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.51.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKX24H6G%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDfQdOfExkusAowf3pmthnArMUsrFGXBpVaGAuPCdfZMwIgIbvDLDEhVn%2B4EwDCUy0H%2BMlxUufMvbJBnNG3AfXR%2Bjsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOTX%2BzHKccAt5%2FW2VircA34S0h6m1fjMXxPPDx%2B9jrHEgYaVnigV4Dj7i4X2qEnill6K3L0HOqK3r13pfC0pkykQ2gVqYaGXK25EuorkCgZPw0cxNbylCQTs2ntBk%2FC7Q8bTvFqVbc8jfl%2FGCKkTfERu1hutXDpAsgDAasDiRczmSLGmN0MOsjWEiZUYLuoRPwj3hiZ4O7i9xajYElxXxUjCKe3yFMnbUKDHzpLu2GN1dxbPlRlpsodNcpqFA37EmlMgojKUSaYmidqvs%2FWnUtSL1E924%2FyZBnv%2B916wq%2Flm4VySeMb8GXMR4p8xlluelMIOOl4cBa7L2%2BFNfs42VXP%2FmYzs7n93qvVd5u34nMXUK7kflo6Ev0chYSZzrxgCfDB4ye0eXXOoe419sDVwckufSNdrnx6gwDEhfFPNz3vpd63C7W%2F%2BL%2F3eHy0HhFsTlDj0GRx1Ae6Q1P575tHWCbGC0BXRhkiHAY%2BF6G1zWuaYfAQHE9Jo4QeGb1KExcjPF9PtQ1KGfoKVsDpbELphqh5LOHz7k15qWq6pKWLvPp63NaBivXNLLe7PTlUh5DatmUsqkvbe7lml3268%2Bx71JGQ7XA6JWO53o5co%2BQ2dnSkliSpqccOR%2BnqPkFQOkTYByJYyB3OAExQ9FrunMLP73MsGOqUBfdGvIZsU1fiVVBR6lZFzn9qLpLDX21Luv93l06NnXWxHFK%2BpwOCyi%2Fx4BibBhtfdlqFY5veRU5tX6euDWrk7BLCH1x6ZDWi9nI4eUbRV5%2Bd5yxnlUTqgPI20vijx9reYS6EfKLIxdN65DJ7%2FBCMQ5S5HXEL4jfa67BmAZ%2Fz67bnIa5x2VWIIxSiVhCvm0434tLTuYeZF45jw4EP8aE6rRxJd4%2FR1&X-Amz-Signature=f8d3aa048284746e4ea12d409e641848db0167eb6eb085cc2c85ebffd95a1dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🌀 스타일 파일을 불러오면 객체를 전달받게 됨


🌀 사용하려면 엘리먼트에 className={styles.[클래스 이름]}


```javascript
import styles from "./CSSModule.module.css";
const CSSModule = () => {
  console.log(styles);
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요 저는 <span className="something">CSS Module !</span>
    </div>
  );
};
export default CSSModule;
```


🌀 두 개 이상 사용할 때는 템플릿 리터럴로


# _classnames_


: css 클래스를 조건부로 설정할 때 유용한 라이브러리 /  여러 클래스를 적용할 때 편리함


: 내장된 bind 클래스를 넣어 줄 때마다 styles.[클래스이름] 형태를 사용할 필요가 없음


```javascript
import classNames from "classnames";

classNames("one", "two"); //one two
classNames("one", { two: true }); //one two
classNames("one", { two: false }); //one
classNames("one", ["two", "three"]); //one two three

const myClass = "hello";
classNames("one", myClass, { myCondition: true }); //one hello myCondition
```


🌀 다양하게 조합 가능 / ex) props 값에 따라 다른 스타일을 주기 쉬워짐


```javascript
const MyComponent = ({highlighted, theme}) => (
    <div className={classNames('MyComponent',{highlighted},theme}>Hello</div>
)
```


🌀 클래스에 highlighted 값이 true 면 적용되고 false 면 적용되지 않음 / theme 으로 전달받는 문자열은 내용 그대로 클래스에 적용됨 / 예시 down here 👇🏻


```javascript
import classNames from "classnames";

const cx = classNames.bind(styles); //미리 styles 에서 클래스를 받아오도록 설정하고
const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요 저는 <span className="something">CSS Module !</span>
    </div>
  );
};
```


# _styled-component_


: CSS-in-JS 자바스크립트 파일 안에 스타일을 선언 / css 나 scss 파일을 따로 만들지 않아도 됨


```javascript
import styled, { css } from "styled-components";

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있음 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
```


🌀 잘 모르겠지만 props 값으로 전달해 주는 값을 쉽게 스타일에 적용할 수 있다고 한다


# _taged template literal_


: `` 을 사용하여 만든 문자열에 스타일 정보를 넣어줌 / 여기서 사용한 문법 / 자바스크립트 객체나 함수를 전달할 때 온전히 추출할 수 있음 like this 👇🏻


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.46.56.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/d5f240b7-574f-442e-aaaa-5cd7ed25d41f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.46.56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKX24H6G%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDfQdOfExkusAowf3pmthnArMUsrFGXBpVaGAuPCdfZMwIgIbvDLDEhVn%2B4EwDCUy0H%2BMlxUufMvbJBnNG3AfXR%2Bjsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOTX%2BzHKccAt5%2FW2VircA34S0h6m1fjMXxPPDx%2B9jrHEgYaVnigV4Dj7i4X2qEnill6K3L0HOqK3r13pfC0pkykQ2gVqYaGXK25EuorkCgZPw0cxNbylCQTs2ntBk%2FC7Q8bTvFqVbc8jfl%2FGCKkTfERu1hutXDpAsgDAasDiRczmSLGmN0MOsjWEiZUYLuoRPwj3hiZ4O7i9xajYElxXxUjCKe3yFMnbUKDHzpLu2GN1dxbPlRlpsodNcpqFA37EmlMgojKUSaYmidqvs%2FWnUtSL1E924%2FyZBnv%2B916wq%2Flm4VySeMb8GXMR4p8xlluelMIOOl4cBa7L2%2BFNfs42VXP%2FmYzs7n93qvVd5u34nMXUK7kflo6Ev0chYSZzrxgCfDB4ye0eXXOoe419sDVwckufSNdrnx6gwDEhfFPNz3vpd63C7W%2F%2BL%2F3eHy0HhFsTlDj0GRx1Ae6Q1P575tHWCbGC0BXRhkiHAY%2BF6G1zWuaYfAQHE9Jo4QeGb1KExcjPF9PtQ1KGfoKVsDpbELphqh5LOHz7k15qWq6pKWLvPp63NaBivXNLLe7PTlUh5DatmUsqkvbe7lml3268%2Bx71JGQ7XA6JWO53o5co%2BQ2dnSkliSpqccOR%2BnqPkFQOkTYByJYyB3OAExQ9FrunMLP73MsGOqUBfdGvIZsU1fiVVBR6lZFzn9qLpLDX21Luv93l06NnXWxHFK%2BpwOCyi%2Fx4BibBhtfdlqFY5veRU5tX6euDWrk7BLCH1x6ZDWi9nI4eUbRV5%2Bd5yxnlUTqgPI20vijx9reYS6EfKLIxdN65DJ7%2FBCMQ5S5HXEL4jfa67BmAZ%2Fz67bnIa5x2VWIIxSiVhCvm0434tLTuYeZF45jw4EP8aE6rRxJd4%2FR1&X-Amz-Signature=89f65e2382304a5cc01c24b1654e28b0428b1942b6f40bd1ca2cfcc98d5a8c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🌀 템플릿 사이사이에 들어가는 자바스크립트 객체나 함수의 원본값을 그대로 추출할 수 있음


```javascript
import styled from "styled-components";

const MyComponent = styled.div`
  font-size: 2rem;
`;
```


🌀 styled.div 뒤에 Tagged 템플릿 리터럴 문법을 통해 스타일을 넣어 주면 해당 스타일이 적용된 div 로 이루어진 리액트 컴포넌트가 생성됨 / 나중에 <MyComponent>Hello</MyComponent> 와 같은 형태로 사용할 수 있음


```javascript
//태그의 타입을 styled 함수의 인자로 전달
const MyInput = styled("input")`
  background: gray;
`;

// 아예 컴포넌트 형식의 값을 넣어 줌
const StyledLink = styled(Link)`
    color: blue;
`
```


🌀 사용해야 할 태그명이 유동적이거나 특정 컴포넌트 자체에 스타일링해 주고 싶을 때


```javascript
background: ${props => props.color || "blue"};
```


🌀 값이 주어지지 않았을 때 blue 써라


```javascript
const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있음 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
```


🌀 반응형 디자인


```javascript
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있음 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width:768px;`}
  ${media.tablet`width:100%;`}
`;
```


🌀 혼란 그 자체 간단해졌다고 한다


---
layout: post
title: "Life cycle"
date: 2023-01-24
categories: [general]
tags: [React]
excerpt_separator: ""
---



: 수명 주기 / 페이지에 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝남


: 컴포넌트를 처음으로 렌더링 할 때 어떤 작업을 처리해야 하거나, 컴포넌트를 업데이트 하기 전후로 어떤 작업을 처리해야 할 때, 불필요한 업데이트를 방지해야 할 때 사용


: 클래스형 컴포넌트에서만 사용 가능 / 함수형 에서는 hooks 기능으로 비슷한 작업 처리 가능


### ✔️ 아홉 가지 종류


1 ) Will : 어떤 작업을 작동하기 전에 실행


2 ) Did : 어떤 작업을 작동한 후에 실행


### ✔️ 세 가지 카테고리


1 ) 마운트 : DOM 이 생성되고 웹 브라우저상에 나타나는 것


1-1 ) constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자


1-2 ) getDerivedStateFromProps : props 에 있는 값을 state 에 넣을 때 사용


1-3 ) render : 우리가 준비한 UI 를 렌더링


1-4 ) componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출


2 ) 업데이트


1-1 ) getDerivedStateFromProps : 마운트 과정, 업데이트가 시작하기 전, props 의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용


1-2 ) shouldComponentUpdate : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정, true or false 값을 반환, true : 다음 라이프사이클 메서드 계속 실행 / false : 작업 중지, 특정 함수에서 this.forceUpdate() 함수를 호출하면 이 과정을 생략하고 바로 render 함수 호출


1-3 ) render : 컴포넌트를 리렌더링


1-4 ) getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM 에 반영하기 바로 직전에 호출


1-5 ) componentDidUpdate : 컴포넌트 업데이트 작업이 끝난 후 호출


2-1 ) props 가 바뀔 때


2-2 ) state 가 바뀔 때


2-3 ) 부모 컴포넌트가 리렌더링될 때


2-4 ) this.forceUpdate 로 강제로 렌더링을 트리거 할 때


3 ) 언마운트 : 컴포넌트를 DOM 에서 제거


1-1 ) componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출


# _render( )_


: 컴포넌트 모양새를 정의 / 가장 중요 / 라이프 사이클 메서드 중 유일한 필수 메서드


: this.props 와 this.state 에 접근할 수 있고 리액트 요소를 반환함


: 요소는 태그, 컴포넌트, null, false 값 등등


### ✔️ 주의사항

- 이벤트 설정이 아닌 곳에서 setState 를 사용하면 안됨
- 브라우저의 DOM 에 접근해도 안됨
- DOM 정보를 가져오거나 state 에 변화를 줄 때는 componentDidMount 에서 처리해야 함

# _constructor( )_


: 컴포넌트의 생성자 메서드 / 컴포넌트를 만들 때 처음으로 실행 / 초기 state 를 정할 수 있음


### ✔️ 문법


> 💡 `constructor(props){…}`


# _getDerivedStateFromProps( )_


: props 로 받아 온 값을 state 에 동기화시키는 용도 / 마운트, 업데이트 될 때 호출


### 🌈 예시


> 💡 `static getDerivedStateFromProps(nextProps, prevState){  
>     if(nextProps.value !== prevState.value){ //조건에 따라 특정 값 동기화  
>         return{value: nextProps.value};  
>     }return null; //state 를 변경 할 필요가 없다면 null 반환  
> }`


# _componentDidMount( )_


: 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행


: 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리 가능


### ✔️ 문법


> 💡 `componentDidMount(){…}`


# _shouldComponentUpdate( )_


: props, state 를 변경했을 때 리렌더링을 시작할지 여부를 지정


: 반드시 true false 값을 반환해야 함


: 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 true 값 반환


: false 값을 반환하면 업데이트 과정 중지


: 현재 props 와 state 는 this.props 와 this.state 로 접근 / 새로 설정 될 props 와 state 는 nextProps 와 nextState 로 접근


: 프로젝트 성능을 최적화 할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때 false 값을 반환하게 함


### ✔️ 문법


> 💡 `shouldComponentUpdate(nextProps, nextState){…}`


# _getSnapshotBeforeUpdate( )_


: render 에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출


: 이 메서드에서 반환하는 값은 componentDidUpdate 에서 세 번째 파라미터인 snapshot 값으로 전달 받을 수 있음, 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용 ex) 스크롤바 위치 유지


### 🌈 예시


> 💡 `getSnapshotBeforeUpdate(prevProps, prevState){  
>     if(prevState.array !== this.state.array){  
>         const {scrollTop, scrollHeight} = this.list  
>         return {scrollTop, scrollHeight}  
>     }  
> }`


# _componentDidUpdate( )_


: 리렌더링을 완료한 후 실행, 업데이트가 끝난 직후이므로 DOM 관련 처리를 해도 됨


: prevProps 또는 prevState 를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능


: 또 getSnapshotBeforeUpdate 에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있음


# _componentWillUnmount( )_


: 컴포넌트를 DOM 에서 제거할 때 실행


: componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM 이 있다면 여기서 제거 작업 해야함


### ✔️ 문법


> 💡 `componentWillUnmount(){…}`


# _componentDidCatch( )_


: 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI 를 보여 줄 수 있게 해줌


: 컴포넌트 자신에게 발생하는 에러는 잡아낼 수 없고 자신의 this.props.children 으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있음


### 🌈 예시


> 💡 `componentDidCate(error, info){  
>     this.setState({  
>         error: true  
>     });  
>     console.log({error, info});  
> }`


👉🏻 여기서 error 는 파라미터에 어떤 에러가 발생했는지 알려주며 info 는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 줌 / 실제 사용할 때 오류가 발생하면 서버 API 를 호출하여 따로 수집할 수도 있음


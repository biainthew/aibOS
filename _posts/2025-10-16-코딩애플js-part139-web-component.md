---
layout: post
title: "코딩애플JS Part1-39 Web Component"
date: 2023-11-16
categories: [general]
tags: [Javascript/Jquery]
---


Web Component 라는 문법을 사용하면 html 안에서 <div>들을 하나의 태그로 축약해서 쓰기 가능


브라우저 기본 기능 중 하나


약간의 class 문법만 알고 있으면 복잡한 태그들을 내 맘대로 축약해서 사용 가능


### 커스텀 html 태그 만들기


예를 들어 <custom-input> 이라고 입력하면 <label><input> 이렇게 두 개의 태그가 안에 출현하게 만들고 싶다면 ?


이제부터 <custom-input> 같은 커스텀 태그를 **컴포넌트**로 칭할것


정해진 문법이라 그냥 이해할 필요는 없고 외우면 됨


```javascript
class 클래스 extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<label>이름을 입력하쇼<label>`
	}
}

customElements.define("custom-input", 클래스)
```

1. 컴포넌트에 어떤 html 들을 집어넣을지 맘대로 설정 가능

    class 와 extend 문법 저렇게 그대로 쓰고 (class명 작명 가능)
    안에는 connectedCallback() 이라는 함수 안에 커스텀 html 을 꾸미면 됨


    참고로 connectedCallback() 함수는 컴포넌트가 html에 장착될 때 실행됨

2. html 만들고 싶으면 쌩 자바스크립트로 html 만드는 문법 가져다 쓰면 됨
3. customElements.define() 처럼 쓰면 컴포넌트 등록 가능

    컴포넌트 이름 작명시에는 보통 대시 기호를 넣는게 관습


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/eb77f556-67e3-412f-b486-ec8ead0fecbd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPO3YUE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDYqY1fAwtP8SiWKyQ%2B5vZ5LeHYf7du5GlOXfYB5ld3%2FQIgIfu30l5uhuQP8W4LsFQGQLdSrtQ3HwU3jInmHME4le8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLxjDRfc2%2BBh85q78yrcAziQId83Nj9rkYsngBpWVxfCSMPiX91FQyd7LY6yaGPUOABfNU7fgcoZXRkIkYsJAFXWebUijcv53aueWD8EIMoEeiYkiJbdpwQJ18LnL811DdQSx1DZz0s%2FR9SR%2FKQLmCSO5q70RUfB4%2Fhw4IDiPiyCsI%2FZDdOgci%2F1JKRpiklCaXghYZ2WHu6gIk4HFgPWp2MxRz9UFpxGFz6RqcvGbaP4iamC5xmJa%2Fw2YwT%2BPhz%2F56lx0J%2FwCcgG%2BABVb3P7h4STHK%2BqfiR6ZdnEfiYiYY4hnnxMGYnWkGVJTs3IvLqdMcKwoQ6wOUq9PJEHvxho9Q6ybAmDGe3XG9Cnf3HrZdJc5fXFittn5m%2BZBh2PFLusVdGzBHolMEAX%2FQuJGd2xfthUy9MCjAfHafYzNiDcppd1AIFZAyWLt0PXVfrmvXqzarF%2FXz12DtLTY%2FIu8MuSYQ2k4ZYVTkE8AzgxrY8sDynEwR5C8gAbYcYPO2TdTEm0T9QKRCV0bCnNJdI29WV0a0iXNM8mR8w7llcrzuuWkG3jRJhhA27de4HZ%2Bj5fq%2F0txDHNSbHFYtRQlYeNuDRAZIfUAUELvsvCW18S4rKbI0TsWhS7Yg%2Bp07aB0zqGFQvKINTxdYXKwOFboZuZMM%2FkoMsGOqUB%2BvLA%2FASV0TnVqrIcCRMPHEf0vcVrmi1X4M7VgOgX4yoI7g3OsukSTiaidP6RQLknFLFI%2FXysDKKc06hNqU9AC3OJwFKH%2Fz%2FcY2NctlqreU8bDJjRy80vI8HGunib3kp%2BtMoS6%2FPTzazoJmFXt38utnYyyR73bk7O3TwQy9HAKA5YtBdtSM5vog%2FxidCXeSkJaV2Qlr%2Bj8GIf4UXfcs47QPxb%2BO2G&X-Amz-Signature=61ec4ef489684b35a3c58b7d7e03462b110e0f79d3a7ca9942b0e459a4f7ad9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


그럼 브라우저에서 개발자도구로 검사해보면 <custom-input> 이라고 쓸 때마다 <label> <input> 이것들이 남음 이게 바로 Web Component 문법


### attribute 를 추가하면 각각 다른 내용을 보여줄 수도 있음


```javascript
class 클래스 extends HTMLElement {
	connectedCallback(){
		let name = this.getAttribute('name');
		this.innerHTML = `<label>${name}을 입력하쇼</label><input>`
	}
}

customElements.define("custom-input", 클래스)
```


```javascript
<custom-input name="이메일"></custom-input>
<custom-input name="비번"></custom-input>
```


getAttribute(X) 를 쓰면 현재 요소의 X 라고 정의된 attribute를 가져올 수 있음


그래서 name attribute 가 있으면 그걸 가져와서 <label> 안에 넣으라고 코드를 짜둠


그랬더니 <custom-input name="비번"></custom-input> 이렇게 쓰면 "비번을 입력하쇼"


<custom-input name="이메일"></custom-input> 이렇게 쓰면 "이메일을 입력하쇼"


라고 출력됨


attribute 활용하면 각각 다른 내용을 보여줄 수 있음


### attribute가 변경될 때 특정 코드 실행도 가능


```javascript
class 클래스 extends HTMLElement {
	connectedCallback() {
		let name = this.getAttribute('name');
		this.innerHTML = `<label>${name}을 입력하쇼</label><input>`
	}
	static get observedAttributes() {
		return ['name']
	}
	attributeChangedCallback() {
		(attribute 변경 시 실행할 코드)
	}
}

customElements.define("custom-input", 클래스);
```


static get observedAttribute() 안에 감시할 attribute들을 array 로 적으면 됨


그럼 그게 변경되는 순간 밑에 있는 attributeChangedCallback() 함수를 실행해줌


미리 다 정해져있는 함수명이니 복사해서 쓰면 됨


그럼 React, Vue 에서 제공하는 자동 html 재렌더링 기능도 쌩 자바스크립트만으로 구현할 수 있


attribute 변경시 html 을 업데이트 해주는 코드를 실행하면 끝임


그럼 새로고침 없이도 html 에 변경사항을 바로바로 반영할 수 있음


근데 아직 알 필요 없단다


React, Vue 와 다른 점


React도 똑같은 기능을 제공함


html 을 하나로 묶어서 component 로 만들어서 재사용이 가능함


하지만 React 는 웹앱을 만드는 라이브러리라 용도가 약간 다름


React 는 state 가 변할 경우 자동으로 html 재렌더링 해주는 기능도 제공하고


virtual DOM 을 이용해서 재렌더링을 매우 빠르고 효율적으로 도와줍니다


하지만 문법이 약간 더럽고 Vue 는 더 정돈된 깔끔한 느낌


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/eb77f556-67e3-412f-b486-ec8ead0fecbd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVEJAVF%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyZyYhmxo9Eiwkf03LVyhgxnPMxYONe9hLBboeTC8kyAiEAmXOk5mjQfoyU7BIuy4K0vAcKd8ey%2F7TYHiaXcDcv04kqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKu4UJYjUG%2FLDgwdMSrcA7aL0dyP%2BvnVQLT4tNdDy3Los7YM7WgkesNt6KoeIsGLsj0hHvVVTd6IY%2BxlKK44pSeMGhNW7G6lZyNj%2Bg1X4%2FH3ysEapKfblUFaq2SO9hCBUXUyBK4Rq8xq35Jure1NJHhlTkPaFFvAOqzMu01pTfRW5I9Jie2VIrI6FXUpp4dyGyqoet%2FF2vm9Itu8xSAbib3BapYEnMQcpQr4y3mP29uoOIBniJ4%2FhfNT9vyqPLW48FCLp%2F4eECgORA3O4FxomuTPdgXFgZgx%2FJ9RfeSCSytYmaeMPbE2iEp48LvJmIkEiMgNMoSPItKJeICsJeRn1Vi33TsnH1kF%2B2eL0v%2BNshxw876knmTVsDr2B4E%2B2l%2BFnlsykvB%2Bm8nSgwnaSW9rjOfbsh0twrtJLUPfPWmjZY2wT2Y%2BHvbECHZaaGqx9WHokQ2CIIO0Sso8Aa%2Fl7a9IZKjWt2MgQREQZP2O7vHEw%2FUf2LkT12BQfc%2BanBMuBHM4xsL4uTqoWUQfeivnv7kt4nmIe6KZ8q9mNow%2BpY0QEKntf5Qefc4d60NKt0CPlmSUp1LVHTRP56N7jR88LRh9XTBVGefe4RWe7pl0X6HUG4rK7MiKgCDmCB0CY8RIBydOjRFTyFHjFhXLHKnyMOrgissGOqUB5ML%2BWX2dtZqSPJK8iZ0mwbahUltLyfyTEb8L6p8O97Vc%2BoAbbI3xmTrEX4y7ThqPa8qtxqdzSz37QdkbhgJWBNbDHW2Od1LH5tFL2KL0%2FcAASCkjck5PuagYo%2F0myRybgVG%2BMmZTe2EiTnviHrYAn1Dmc%2BEXlyloV96vq6GribZOlGTE5jpTB5CnJrJLhD0uWS9NkCNNEUbd6QRgp9Law6vHRwhU&X-Amz-Signature=984e92ab0de064b9bd83fced03fd72da41730d096f5cbfa7308cfc1a70e7aff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


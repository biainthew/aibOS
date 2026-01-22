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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/eb77f556-67e3-412f-b486-ec8ead0fecbd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK72I2RS%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T011828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH2qwefQ0s6cfCxQJkqDvtOL8QCDsnV7FcGlzD0Lx9GaAiEAohpIbbTME8rih70PfSZEs2PilBH1cqwtBG80ud2Y2F4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdXpKK94%2BjkIBt0nCrcA4%2Fn%2FpqRKx2M%2FUtVEp5%2BsE4%2Bjr0V%2BWmwLIf9hRR%2FsUZwxZWNjK4SV4zOYPlifm0FoEyi2k7N%2BBRwfNGbs0h%2FEdWzgntQetbz1wU3ijx0EMmsGv7%2FwWUVrKsYi2KYXfZ2axupm0Qlid5JlCGa8ljoqsaPmvNM%2FuHH8U%2Bv9Di5T5IpyPMhkXOlIjwWl%2FXNei4mUQNBLvhdSK1gBWRcoiqkNhZb2K8U2tMm0kKINtAtYGn6RK9JoJGM7cjUnv%2BbHwklrQj%2B2tIP8Oq6%2BmFDNtKHgLWTWiaMI3%2FnNNJ0SBLjOyu7i3u3iNKQCEV1T1L1bjpBEWOAXQ5AEgynqzMAxnUla6%2Fa8NPuIPcnBBPK0UPb%2FYwW0%2BX1xt%2B0vptgKHjd4BL3Ii%2F%2FD1yNKp1LdCLUUs7iKw7WeZty8o8Xhwpcb8%2FiIpIoB8Eit4DOfvoKX0iG10MIGOSwUdd0Z7au3q%2BkI9t6ZUgU4vPn%2Bg8z4Jya4y4oeAgIUoHSJIaNiCD9i871JP7CCjOFsGmOYTC9expHRFyuEJbD3crzEa7nQS%2BW1k9GfLwOEEpMwLPdgUfQGNAxgGYyU9cb2go7ZCGYsZdYXMB%2BCLk3AJpyml0CdiV40g10Elln7R0Ba9Jk488FxYHSMJ3cxcsGOqUBuopK%2FcZohzTBOEELda5QgHht3q3f91GoiKD0oW%2Bpjk6HGqfz%2FWrcokJ%2BdelWMqaFyXTCk9Rn3FBOjjD6t5v2bCqaePRT5rw%2BpBOx3nu3nFha6%2B0N9Xg0fWAeQW%2FxggKzbA7GNuudE8Y0vdry1QJ%2Fjt1LpxtBWJtCdVb3spL4jXVlZvmBhzyPEhhcA3vmqdrXayWqGsGKGsrQ4OASwNM37zh6X5UX&X-Amz-Signature=10d259341a0d4b547447be0a36ce5128a2fb6e31935a00318e3f7a032c52bf61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


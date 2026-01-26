---
layout: post
title: "코딩애플JS Part1-18 constructor"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### constructor


: object 자료 복사 기계


```javascript
function 기계 (){
	this.name = 'Kim';
	this.age = 15;
}
```


기계로부터 새로운 오브젝트 뽑아내는 방법


```javascript
let 학생1 = new 기계();
```


오브젝트에 함수 넣기


```javascript
let 학생1 = {
	sayHi(){
		console.log('안녕하세요' + this.name + ' 입니다')
	}
}
```


```javascript
let 학생1 = {
	sayHi = function(){
		console.log('안녕하세요' + this.name + ' 입니다')
	}
}
```


![codingapple.com_course-status__%288%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/612a435f-324e-4dc4-bbcd-a7004212737d/codingapple.com_course-status__%288%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO4HYKKB%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDQ%2F9pN0tvh3yNqC1B%2FP%2FIuYwoAVBvhYz84HYO30%2FxHWAiBBMDgAKvc81JjwYnV9NvHVE4zZqXHc9xS%2FkfScfOFrTir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMcNA5MD8A3O127apbKtwDpMzX744%2FZalXY36Lo%2FL%2F78Ea1zfbBFFKbf2hIJqMQLAW3%2F45eYRiiiJJ5HADIpDz9JPN5RrsoWWCaDM4r2qTu3XzApecBBV%2FZ7xQhRxivEp6iyNzPUG%2FeuQCGJVHKU32vYFxHQxkP08witH1a%2B96sM%2B5SO7ZhxifPFEP30fFPjwoVPFr61Lz9uL6Rt%2BfR7IrsAMi6foidldClsbJaX1DkXHWU9KqueBIp9ALQf1FiWScb6xhwoCa5hv4%2BLUSraJdF1lHfVkqv%2B4RVhg4B8c4RQaqEoIKhQs54TfTNZ7cAhL%2BkNB7MpK2lh7W1b%2FZhrIHg1RRRFbqK83lbDzQj6v4XSTto4g2k%2F2ug75wKLzBNYzHuRaVDnPNdD6%2FqC0FMgYm9SZPPIedemAvM5rndd6b2RWYwgEDnWL52r6Ok9Gm6sKPc3Ds8NAYztp%2BReYKgITw4l%2FjinG%2BM%2FzrCHUPN5y9GhzemCgxmwqkFuCcbTRBu1uB0l0taOFkiwiaAg1%2FeVVqVcBvl7X%2FfiqVuaex7bCppn8vV4BYVt35%2BS82vEjxi%2BwiWtAGaLe5ovi9fcMOWmntzG8UtQeXkGesQzQGraDJmLnegbjAHXexEN8Gj%2BNBxaOtBgaz9ILnB7NVPhgwkpvdywY6pgGdybWfoAZLvs%2Bmw%2Bgqc5ytBHCo1IJqHsc8N8ELICWJ0iolQ6FGs1lSgfqGki30oT5yYGw%2Bd2rni6KxryLZjdQlOKTysFdrtjN7wjfM0hXZicyH3KcdEV%2Fxv6E%2FzR%2BCPjnnJDRHP9gUPGqV6iYxjgct4U2NAIjx%2Fc%2Fs%2BwNPDvEnpgvYEnL6qeFGFdjQpEErxwvvn39n7I11EbLPygke66i5x2RgT65l&X-Amz-Signature=8cede6f3705aa6266eb119af16058904ff9108cb618a2233adb1e8e1715cfc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


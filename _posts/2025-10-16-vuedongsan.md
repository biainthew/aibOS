---
layout: post
title: "Vuedongsan"
date: 2023-03-20
categories: [general]
tags: [Vue]
excerpt_separator: ""
---



## props


1) 부모 컴포넌트에서 가져올 데이터 정하기


```javascript
<Modal v-bind:원룸들="원룸들"/>
//:작명="데이터 이름"
```


2) 자식 컴포넌트에서 데이터 받기


```javascript
props: {
    원룸들 : Object
		//데이터 이름 : 형식(맨 앞 대문자)
}
```


3) 사용하기

> ❗ **주의점  
> - props 는 read-only / 받아온 것 수정 불가능 재할당 불가능  
> - 데이터를 여러 곳에서 사용한다면 제일 부모인 컴포넌트에 만드는것 추천**

- 오브젝트 안의 데이터를 각각 보내고 싶을 때


```javascript
<Discount v-bind="오브젝트" :이름="오브젝트.name" :나이="오브젝트.age"/>
```


## Component

- name 속성을 써 줘야 함

```javascript
name: 'MyCard',
```


## $ : vue 의 특별한 변수


## 부모에게 메세지 보낼 때


### 자식 컴포넌트


```javascript
<h4 @click="$emit('openModal')">{% raw %}{{{% endraw %} oneroom.title {% raw %}}}{% endraw %}</h4>
//$emit('작명',데이터)
```


```javascript
emits: [
    'openModal'
]
```


### 부모 컴포넌트


```javascript
<Card @openModal=""/>
//@작명한거 = "이벤트"
```


## 커스텀 이벤트 (자식→ 부모 데이터 전달)


### 자식 컴포넌트


```javascript
<h4 @click="$emit('openModal',oneroom.id)">{% raw %}{{{% endraw %} oneroom.title {% raw %}}}{% endraw %}</h4>
```


### 부모 컴포넌트


```javascript
<Card @openModal="누른거 = $event"/>
//전달한 데이터는 $event 로 받음
```


## input


```javascript
<input type="text" @input="" @change="">
//@input : 입력할 때마다
//@change : 입력 한 뒤에 커서를 다른 곳에 찍었을 때
```


```javascript
<input type="text" @input="$event.target.value"/>
//input 에 입력한 값
<input type="text" v-model="month"/>
//축약형, input 에 입력한 데이터를 밑에 저장
//input textarea select 등등 다 사용 가능
v-model.number=""
//무조건 숫자로 입력해라
```


## Watcher


데이터를 감시하는 함수 / input 이 있다면 거의 필수적으로 등장


```javascript
watch: {
    month(a){
        if(a>13){
						alert('경고')
				}
    }
}
//month 데이터가 변할 때마다 안의 함수 실행
```


form validation 라이브러리 사용하면 watcher 안 써도 됨


## Transition


```javascript
<transition name="fade">
        <Modal v-bind:원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" @closeModal="모달창열렸니 = false"/>
</transition>
```


```css
.fade-enter-from{
    opacity: 0;
}
.fade-enter-active{
    transition: 1s;
}
.fade-enter-to{
    opacity: 1;
}
.fade-leave-from{
    opacity: 1;
}
.fade-leave-active{
    transition: 1s;
}
.fade-leave-to{
    opacity: 0;
}
```


그냥 css 애니메이션이 더 깔끔한 것 같기도 ,,


## 정렬


```javascript
sortBack(){
    this.원룸들 = [...this.원룸들오리지널]
}
//array 는 등호로 연결하면 대입이 아니라 병합 그래서 [...array] 로 연결해줘야 함

원룸들오리지널 : [...data]
//원본 데이터 복사도 마찬가지
```


### array 안 오브젝트 안의 특정 값만 정렬하기


```javascript
nameSort(){
    this.원룸들.sort((a,b)=>{
        return a.title < b.title ?
        -1
        :
        a.title > b.title ? 1 : 0
    })
}
//역순은 등호만 바꿔주면 됨
```


## 라이프 사이클


컴포넌트가 웹페이지에 표시되기까지 일련의 스텝이 있는데 그 스텝을 라이프 사이클 이라고 함


create → mount → 컴포넌트 생성 → update → unmount


라이프사이클 훅을 쓰려고 배우는 것


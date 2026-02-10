---
layout: post
title: "Insta Project"
date: 2023-03-22
categories: [general]
tags: [Vue]
excerpt_separator: ""
---



### 스타일 속성에 데이터 바인딩 하기

1. 인라인 스타일 주기 - 따옴표

{% raw %}
```javascript
<div class="post-body" :style="'background-image: url('+post.postImage+')'"></div>
```
{% endraw %}

1. 인라인 스타일 주기 - 백틱

{% raw %}
```javascript
<div class="post-body" :style="{backgroundImage: `url(${post.postImage})`}"></div>
```
{% endraw %}


## 서버 & 데이터

- **GET** : 데이터를 서버에서 가져올 때
- **POST** : 데이터를 서버로 보낼 때

### Ajax


: **GET** 이나 **POST** 요청을 하면 필연적으로 페이지가 새로고침 되지만 **Ajax**를 사용하면 새로고침 안됨


1) **axios**


라이브러리 설치


2) **fetch**


최신 브라우저에서만 사용 가능


### 클릭하면 순서대로 게시물 더보기 나오게


: data 에 클릭한 횟수인 time 을 만들고 axios 주소에 바로 집어넣기


~~: more 함수에 파라미터로 넣어야 하는 줄 알고 잠깐 삽질했다~~


{% raw %}
```javascript
methods: {
    more() {
        axios
            .get(`https://codingapple1.github.io/vue/more${this.time}.json`)
            .then((result) => {
                this.instadata.push(result.data);
                this.time++;
            })
            .catch();
    },
},
```
{% endraw %}


### 탭 메뉴 만들기


{% raw %}
```javascript
<div v-if="step === 0">내용0</div>
<div v-if="step === 1">내용1</div>
<div v-if="step === 2">내용2</div>
<button @click="step = 0">버튼0</button>
<button @click="step = 1">버튼1</button>
<button @click="step = 2">버튼2</button>

//data에 step : 0
```
{% endraw %}

- v-if 와 v-for 한번에 못 씀 / wrapper(div) 로 감싸야 함

### 서버 없이 이미지 업로드 하기


{% raw %}
```javascript
<input
    @change="upload"
    multiple
    accept="image/*"
    type="file"
    id="file"
    class="inputfile"
/>
```
{% endraw %}


1) **FileReader()**


: 파일을 글자로 변환해줌


2) **URL.createObjectURL()**


: 이미지의 가상 URL 을 생성해줌


**BLOB** : binary 데이터를 다룰 때 이 object 에 담아서 다룸


{% raw %}
```javascript
upload(e) {
    let file = e.target.files;
    console.log(file[0].type); //image/jpeg
    let url = URL.createObjectURL(file[0]);
    console.log(url); //blob:http://localhost:8080/6c6c49bf-c9a9-4001-8136-db8cc0a0d1e4
    this.step = 1;
},
```
{% endraw %}


### 글 발행이란 ?


: Post.vue 에 하나 추가하기


: 생성은 vue 가 알아서 하고 있기 때문에 그냥 데이터만 추가해주면 됨


**자식 컴포넌트**


{% raw %}
```javascript
<textarea class="write-box" @click="$emit('myText', myContent)">write!</textarea>
```
{% endraw %}


{% raw %}
```javascript
data() {
    return {
        myContent: '',
    };
},
methods: {
    myText(e) {
        this.myContent = e.target.value;
    },
},
```
{% endraw %}


아니면


{% raw %}
```javascript
<textarea class="write-box" @input="$emit('myText', $event.target.value)">write!</textarea>
```
{% endraw %}


**부모 컴포넌트**


{% raw %}
```javascript
<Container
    :instadata="instadata"
    :step="step"
    :imageUrl="imageUrl"
    @myText="myContent = $event"
/>
```
{% endraw %}


## slot


: 부모 컴포넌트에서 자식컴포넌트 사이에 넣은 내용 ⏩ 자식컴포넌트의 slot 태그 안


: html 태그 안에 데이터 바인딩 할 때만 사용 가능 / 좀 더 직관적


: 여러개라면 props 가 나은 것 같음


{% raw %}
```javascript
<FilterBox
    :imageUrl="imageUrl"
    v-for="filter in filters"
    :key="filter"
    :class="filter"
>{{filter}}</FilterBox>
```
{% endraw %}


{% raw %}
```javascript
<slot></slot>
```
{% endraw %}


### slot 여러개 사용하기


{% raw %}
```javascript
<slot name="a"></slot>
<slot name="b"></slot>
```
{% endraw %}


{% raw %}
```javascript
<template v-slot:a>데이터1</template>
<template v-slot:b>데이터2</template>
```
{% endraw %}


### slot props


: 부모가 자식 컴포넌트에서 데이터 가져오고 싶을 때


{% raw %}
```javascript
<slot :msg="msg"/>
```
{% endraw %}


{% raw %}
```javascript
<template v-slot:default="작명"><span>{{작명.msg}}</span></template>
```
{% endraw %}


### mitt


: 먼 컴포넌트 사이에서 props 전달할 때 사용


{% raw %}
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter

createApp(App).mount('#app')
```
{% endraw %}


### mitt 로 데이터 전송하기


: 많이 쓰면 안됨 / vuex 써야됨


{% raw %}
```javascript
methods: {
    fire(){
        this.emitter.emit('작명', '데이터')
    }
}
```
{% endraw %}


{% raw %}
```javascript
mounted() {
    this.emitter.on('작명', (data) => {
        console.log(data);
    });
},
```
{% endraw %}


## Vuex


: 모든 컴포넌트가 직접 꺼내 쓸 수 있는 데이터들을 몰아넣은 js 파일


: 코드가 길어짐 / 데이터나 컴포넌트가 많은 프로젝트에서 쓰기 좋음


### vuex 세팅


{% raw %}
```javascript
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
    }
  },
})

export default store
```
{% endraw %}


{% raw %}
```javascript
import store from './store.js'
app.use(store).mount('#app')
```
{% endraw %}


### 꺼내 쓰는 방법


{% raw %}
```javascript
{{ $store.state.name }}
```
{% endraw %}


### 수정하는 방법 / 사실 이렇게 하면 안됨


: 직접 수정하는것은 안됨


{% raw %}
```javascript
@click=" $store.state.name = '박' "
```
{% endraw %}


: 미리 store.js 에 수정방법을 정의해두고 그 방법을 컴포넌트에서 소환해서 수정해야 함


{% raw %}
```javascript
mutations: {
        이름변경(state) {
            state.name = '박';
        },
    },
```
{% endraw %}


{% raw %}
```javascript
@click="$store.commit('이름변경')"
```
{% endraw %}


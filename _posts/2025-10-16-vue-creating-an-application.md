---
layout: post
title: "Vue : Creating an Application"
date: 2023-03-13
categories: [general]
tags: [Vue]
---


### The application instance / 어플리케이션 인스턴스(사례)


Every Vue application starts by creating a new application instance with the `createApp` function.


모든 뷰 어플리케이션은 `createApp` 함수를 사용하여 새로운 어플리케이션 인스턴스를 생성하는 것으로 시작합니다.


```javascript
import { createApp } from 'vue'

const app = createApp({
	/* root component options*/
})
```


### The Root Component / 루트 컴포넌트 (최상위 컴포넌트)


The object we are passing into `createApp` is in fact a component. Every app requires a “root component” that can contain other components as its children.


우리가 `createApp` 에 전달하는 객체는 사실 컴포넌트 입니다 모든 앱은 그 자식으로 다른 컴포넌트를 포함하는 “루트 컴포넌트”를 필요로 합니다.


If you are using Single-File Components, we typically import the root component from another file


만약 당신이 싱글 파일 컴포넌트를 사용한다면 우리는 주로 다른 파일에서 루트 컴포넌트를 가져옵니다.


```javascript
import { createApp } from 'vue'
//import the root component App from a single-file component
import App from './App.vue'

const app = createApp(App)
```


While many examples in this guide only need a single component, most real applications are organized into a tree of nested, reusable components. For example, a Todo application’s component tree might look like this


이 가이드의 많은 예제들이 싱글 컴포넌트만 필요로 하는 반면 대부분의 실제 어플리케이션들은 중첩된, 재사용 가능한 컴포넌트 구조로 이루어져 있습니다. 예를 들어 Todo 앱의 컴포넌트 구조는 이렇게 생겼을 것입니다.


```javascript
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
├─ TodoClearButton
└─ TodoStatistics
```


In later sections of the guide, we will discuss how to define and compose multiple components together. Before that, we will focus on what happens inside a single component.


이 가이드의 다음 섹션에서 우리는 멀티 컴포넌트를 함께 정의하고 구성하는 방법에 대해 알아볼 것입니다. 그 전에 우리는 싱글 컴포넌트 안에서 무슨 일이 일어나는지에 집중할 것입니다.


### Mounting the App / 앱 마운트(설치)하기


An application instance won’t render anything until its `.mount()` method is called. It expects a “container” argument, which can either be an actual DOM element or a selector string


어플리케이션 사례는 `.mount()` method 가 호출되기 전까지는 아무것도 렌더링하지 않을 것입니다. (아무 일도 일어나지 않을 것) 그것은 실제 돔 요소 혹은 셀렉터 문자열이 될 수 있는 “컨테이너” 독립변수를 필요로 합니다.


```html
<div id="app"></div>
```


```javascript
app.mount('#app')
```


The content of the app’s root component will be rendered inside the container element. The container element itself is not considered part of the app.


앱의 루트 컴포넌트의 내용은 컨테이너 요소 안에서 렌더링 될 것입니다. 컨테이너 요소 그 자신은 앱의 한 부분으로 간주되지는 않습니다.


The `.mount()` method should always be called after all app configurations and asset registrations are done. Also note that its return value, unlike the asset registration methods, is the root component instance instead of the application instance.


`.mount()` method 는 항상 모든 앱 구성들(환경설정)과 asset 등록이 끝난 뒤에 호출되어야 합니다. 또한 asset 등록 method 와 다르게 그 리턴값은 어플리케이션 인스턴스가 아닌 루트 컴포넌트 인스턴스 입니다


### In-DOM Root Component Template / 돔 내부 루트 컴포넌트 템플릿


When using Vue without a build step, we can write our root component’s template directly inside the mount container


빌드 단계를 거치지 않고 뷰를 사용할 때 우리는 마운트 컨테이너에 루트 컴포넌트의 템플릿을 직접 쓸 수 있습니다


```html
<div id="app">
	<button @click="count++">{{ count }}</button>
</div>
```


```javascript
import { createApp } from 'vue'

const app = createApp({
	data(){
		return{
			count: 0
		}
	}
})

app.mount('#app')
```


Vue will automatically use the container’s `innerHTML` as the template if the root component does not already have a `template` option.


만약 루트 컴포넌트에 `template` 옵션이 아직 없다면 뷰는 자동으로 컨테이너의 `innerHTML` 을 컨테이너의 템플릿으로 사용할 것입니다.


### App Configurations / 앱 구성 (환경설정)


The application instance exposes a `.config` object that allows us to configure a few app-level options, for example, defining an app-level error handler that captures errors from all descendant components


어플리케이션 인스턴스는 앱 레벨 옵션을 구성할 수 있게 해주는 `.config` 객체를 노출시킵니다. 예를 들어 모든 자손 컴포넌트들의 에러를 캡쳐하는 앱 레벨 에러 핸들러를 정의합니다


```javascript
app.config.errorHandler = (err) => {
	/* handle error */
}
```


The application instance also provides a few methods for registering app-scoped assets. For example, registering a component


어플리케이션 인스턴스는 또한 컴포넌트 등록과 같은 앱 레벨 asset 을 등록하는 몇가지 method 를 제공합니다.


```javascript
app.component('TodoDeleteButton', TodoDeleteButton)
```


This makes the TodoDeleteButton available for use anywhere in our app. We will discuss registration for components and other types of assets in later sections of the guide. You can also browse the full list of application instance APIs in its API reference.


이것은 TodoDeleteButton 을 우리 앱 어디에서나 사용 가능하게 해줍니다. 우리는 가이드의 나중 섹션에서 컴포넌트들과 asset 의 다른 타입들의 등록을 알아볼 것입니다. 당신은 [API reference](https://vuejs.org/api/application.html) 에서 어플리케이션 인스턴스의 전체 리스트를 검색할 수 있습니다.


Make sure to apply all app configurations before mounting the app !


앱을 마운트 하기 전에 모든 앱 설정을 적용했는지 확인하세요 !


### Multiple application instances / 다중 어플리케이션 인스턴스


You are not limited to a single application instance on the same page. The `createApp` API allows multiple Vue applications to co-exist on the same page, each with its own scope for configuration and global assets.


당신은 같은 페이지에서 싱글 어플리케이션 인스턴스에만 국한되지 않습니다. (한 페이지에 여러 어플리케이션 인스턴스 가능) `createApp` API 는 다중 어플리케이션을 허용합니다. 그 구성과 글로벌 asset 에 대한 고유한 범위를 갖는 각각이 한 페이지에 공존하기 위해


```javascript
const app1 = createApp({
	/* ... */
})
app1.mount('#container-1')

const app2 = createApp({
	/* ... */
})
app2.mount('#container-2')
```


If you are using Vue to enhance server-rendered HTML and only need Vue to control specific parts of a large page, avoid mounting a single Vue application instance on the entire page. Instead, create multiple small application instances and mount them on the elements they are responsible for.


만약 당신이 서버-렌더링된 HTML 을 향상시키기 위해서 뷰를 사용하거나, 뷰가 큰 페이지 내의 특정 부분만 제어하기를 원한다면 전체 페이지에 싱글 어플리케이션을 마운트 하지 마세요. 대신 여러개의 작은 어플리케이션 인스턴스들을 생성하고 그것을 담당하는 요소에 마운트하세요


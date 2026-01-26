---
layout: post
title: "Application API"
date: 2023-03-15
categories: [general]
tags: [Vue]
excerpt_separator: ""
---



## **createApp()**


    : Creates an application instance.


    ### - Type


    ```javascript
    function createApp(rootComponent: Component, rootProps?: object): App
    ```


    ### - Details


    : The first argument is the root component. The second optional argument is the props to be passed to the root component.


    : 첫번째 인자는 루트 컴포넌트 입니다. 두번째 선택 인자는 루트 컴포넌트로 전달될 props 입니다.


    ### - Example


    With inline root component :


    ```javascript
    import { createApp } from 'vue'
    
    const app = createApp({
    	// root component options
    })
    ```


    With imported component :


    ```javascript
    import { createApp } from 'vue'
    import App from './App.vue'
    
    const app = createApp({App})
    ```

    - See also : [**Guide - Creating a Vue Application**](https://vuejs.org/guide/essentials/application.html)

## createSSRApp()


    : Creates an application instance in [**SSR Hydration**](https://vuejs.org/guide/scaling-up/ssr.html#client-hydration) mode. Usage is exactly the same as `createApp()`.


## app.mount()


    : Mounts the application instance in a container element.


    : 컨테이너 요소에 앱 인스턴스를 마운트 합니다.


    ### - Type


    ```javascript
    interface App{
    	mount(rootContainer: Element | string): ComponentPublicInstance
    }
    ```


    ### - Details


    : The argument can either be an actual DOM element or a CSS selector (the first matched element will be used). Returns the root component instance.


    인자는 실제 돔 요소 혹은 CSS 셀렉터(제일 처음으로 매칭되는 요소가 사용됩니다)가 될 수 있습니다. 루트 컴포넌트 인스턴스를 반환합니다.


    : If the component has a template or a render function defined, it will replace any existing DOM nodes inside the container. Otherwise, if the runtime compiler is available, the `innerHTML` of the container will be used as the template.


    만약 컴포넌트에 정의된 템플릿이나 렌더 함수가 있다면, 컨테이너 내의 가존 돔 노드를 대체할 것입니다. 하지만 만약 런타임 컴파일러가 사용 가능하다면 컨테이너의 `innerHTML` 이 템플릿으로 사용될 것입니다.


    : In SSR hydration mode, it will hydrate the existing DOM nodes inside the container. If there are mismatches, the existing DOM nodes will be morphed to match the expected output.


    SSR hydration 모드에서는 컨테이너 안의 기존 돔 노드를 hydrate 할 것입니다. 만약 일치하지 않는다면 기존 돔 노드는 기대되는 값과 일치하도록 바뀔 것입니다.


    : For each app instance, `mount()` can only called once.


    각 앱 인스턴스에서 mount() 는 한번만 호출 가능


    ### - Example


    ```javascript
    import { createApp } from 'vue'
    const app = createApp()
    
    app.mount('#app')
    ```


    Can also mount to an actual DOM element:


    ```javascript
    app.mount(document.body.firstChild)
    ```


## app.unmount()


    : Unmounts a mounted application instance, triggering the unmount lifecycle hooks for all components in the application’s component tree.


    마운트 된 앱 인스턴스를 언마운트 하고 앱 컴포넌트 트리 안의 모든 컴포넌트에 언마운트 라이프사이클 훅을 트리거 합니다.


    ### - Type


    ```javascript
    interface App {
    	unmount(): void
    }
    ```


## app.provide()


    : Provide a value that can be injected in all descendant components within the application.


    앱의 모든 자손 컴포넌트에 들어갈 수 있는 값을 제공합니다.


    ### - Type


    ```javascript
    interface App {
    	provide<T>(key: InjectionKey<T> | symbol | string, value: T): this
    }
    ```


    ### - Details


    : Expects the injection key as the first argument, and the provided value as the second. Returns the application instance itself.


    인젝션 키를 첫번째 인자로 그리고 제공된 값을 두번째 인자로 받습니다. 앱 인스턴스 자신을 반환합니다.


    ### - Example


    ```javascript
    import { createApp } from 'vue'
    
    const app = createApp()
    
    app.provide('message', 'hello')
    ```


    Inside a component in the application:


    ```javascript
    export default {
    	inject: ['message'],
    	created() {
    		console.log(this.message) //'hello'
    	}
    }
    ```


    ### - See also

    - [**Provide / Inject**](https://vuejs.org/guide/components/provide-inject.html)
    - [**App-level Provide**](https://vuejs.org/guide/components/provide-inject.html#app-level-provide)

## app.component()


    : Registers a global component if passing both a name string and a component definition, or retrieves an already registered one if only the name is passed.


    이름 문자열과 컴포넌트 정의를 둘 다 전달하는 경우 전역 컴포넌트를 등록합니다. 이름만 전달되면 이미 등록된 것을 찾습니다.


    ### - Type


    ```javascript
    interface App {
    	component(name: string): Component | undefined
    	component(name: string, component: Component): this
    }
    ```


    ### - Example


    ```javascript
    import { createApp } from 'vue'
    
    const app = createApp({})
    
    //register an options object
    app.component('my-component', {
    	//...
    })
    
    //retrieve a registered component
    const MyComponent = app.component('my-component')
    ```


    ### - See also

    - [**Component Registration**](https://vuejs.org/guide/components/registration.html)

## app.directive()


    : Registers a global custom directive if passing both a name string and a directive definition, of retrieves an already registered one if only the name is passed.


    이름 문자열과 디렉티브 정의를 둘 다 전달하는 경우 전역 커스텀 디렉티브를 등록합니다. 이름만 전달되면 이미 등록된 것을 찾습니다.


    ### - Type


    ```typescript
    interface App {
    	directive(name: string): Directive | undefined
    	directive(name: string, directive: Directive): this
    }
    ```


    ### - Example


    ```typescript
    import { createApp } from 'vue'
    
    const app = createApp({
    	...
    })
    
    //register (object directive)
    app.directive('my-directive', {
    	// custom directive hooks
    })
    
    //register (function directive shorthand)
    app.directive('my-directive', () => {
    	...
    })
    
    //retrieve a registered directive
    const myDirective = app.directive('my-directive')
    ```


    ### - See also : [**Custom Directives**](https://vuejs.org/guide/reusability/custom-directives.html)


## app.use()


    : Installs a [**plugin**](https://vuejs.org/guide/reusability/plugins.html).


    ### - Type


    ```typescript
    interface App {
    	use(plugin: Plugin, ...options: any[]): this
    }
    ```


    ### - Details


    : Expects the plugin as the first argument, and optional plugin options as the second argument.


    플러그인을 첫번째 인자로 선택적 플러그인 옵션을 두번째 인자로 받습니다


    : The plugin can either be an object with an `install()` method, or just a function that will be used as the `install()` method. The options (second argument of `app.use()`) will be passed along to the plugin’s `install()` method.


    플러그인은 `install()` 메서드를 사용한 객체 혹은 `install()` 메서드로 사용될 함수가 될 수 있습니다. 그 옵션(`app.use()` 의 두 번째 인자)은 플러그인의 `install()` 메서드로 넘겨질 수 있습니다.


    : When `app.use()` is called on the same plugin multiple times, the plugin will be installed only once.


    `app.use()` 가 같은 플러그인을 여러번 호출할 때도 플러그인은 한번만 설치됩니다.


    ### - Example


    ```typescript
    import { createApp } from 'vue'
    import MyPlugin from './plugins/MyPlugin'
    
    const app = createApp({
    	...
    })
    
    app.use(MyPlugin)
    ```


    ### - See also : [**Plugins**](https://vuejs.org/guide/reusability/plugins.html)


## app.mixin()


    : Applies a global mixin (scoped to the application). A global mixin applies its included options to every component instance in the application.


    전역(앱 범위) 믹스인을 적용합니다. 전역 믹스인은 포함된 옵션들을 앱의 모든 컴포넌트 인스턴스에 적용합니다.

    > **Not Recommended**  
    >   
    > Mixins are supported in Vue 3 mainly for backwards compotibility, due to their widespread use in ecosystem libraries. Use of mixins, especially global mixins, should be avoided in application code.  
    >   
    > For logic reuse, prefer [Composables](https://vuejs.org/guide/reusability/composables.html) instead.  
    > 로직 재사용은 Composables 권장

    ### - Type


    ```typescript
    interface App {
    	mixin(mixin: ComponentOptions): this
    }
    ```


## app.version


    : Provides the version of Vue that the application was created with. This is useful inside plugins, where you might need conditional logic based on different Vue versions.


    앱을 생성한 뷰 버전을 제공합니다. 다양한 뷰 버전에 기반한 조건부 로직이 필요한 플러그인 안에서 유용합니다.


    ### - Type


    ```typescript
    interface App {
    	version: string
    }
    ```


    ### - Example


    : Performing a version check inside a plugin


    ```typescript
    export default {
    	install(app) {
    		const version = Number(app.version.split('.')[0])
    		if (version < 3){
    			console.warn('This plugin requires Vue 3')
    		}
    	}
    }
    ```


    ### - See also : [**Global API - version**](https://vuejs.org/api/general.html#version)


## app.config


    : Every application instance exposes a `config` object that contains the configuration settings for that application. You can modify its properties (documented below) before mounting your application.


    모든 앱 인스턴스는 그 앱을 위한 환경설정을 포함하는  `config` 객체를 나타냅니다. 그 속성들을 앱에 마운트 하기 전에 수정할 수 있습니다.


    ```typescript
    import { createApp } from 'vue'
    
    const app = createApp()
    
    console.log(app.config)
    ```


## app.config.errorHandler


    Assign a global handler for uncaught errors propagating from within the application.


    : 앱 안에서 전파된 uncaught 에러의 전역 핸들러를 정의합니다.


    ### - Type


    ```typescript
    interface AppConfig {
    errorHandler?: (
    	error: unknown,
    	instance: ComponentPublicInstance | null,
    	//'info' is a Vue-specific error info,
    	// e.g. which lifecycle hook the error was thrown in
    	info: string
    	} => void
    )
    ```


    ### - Details


    : The error handler receives three arguments: the error, the component instance that triggered the error, and an information string specifying the error source type.


    에러 핸들러는 세 개의 인자를 받습니다 : 에러, 에러를 발생시킨 컴포넌트 인스턴스 그리고 에서의 출처 타입을 명시하는 정보 문자열


    : It can capture errors from the following sources

    - Component renders
    - Event handlers
    - Lifecycle hooks
    - `setup()` function
    - Watchers
    - Custom directive hooks
    - Transition hooks

    ### - Examples


    ```typescript
    app.config.errorHandler = (err, instance, info) => {
    	// handle error, e.g. report to a service
    }
    ```


## app.config.warnHandler


    : Assign a custom handler for runtime warnings from Vue.


    뷰의 런타임 경고의 커스텀 핸들러를 정의합니다.


    ### - Type


    ```typescript
    interface AppConfig {
    	warnHandler?: (
    		msg: string,
    		instance: ComponentPublicInstance | null,
    		trace: string
    	) => void
    }
    ```


    ### - Details


    : The warning handler receives the warning message as the first argument, the source component instance as the second argument, and a component trace string as the third.


    경고 핸들러는 첫번째 인자로 경고 메세지를, 두번째 인자로 발생한 컴포넌트 인스턴스를, 세번쨰로 컴포넌트 추적 문자열을 받습니다.


    : It can be used to filter out specific warnings to reduce console verbosity. All Vue warnings should be addressed during development, so this is only recommended during debug sessions to focus on specific warnings among many, and should be removed once the debugging is done.


    이것은 특정 경고를 필터링 하여 콘솔의 장황함을 줄이는 데에 사용될 수 있습니다. 모든 뷰 경고들은 개발 중 다뤄져야 합니다. 그래서 이것은 많은 경고들중 특정 경고에만 집중하기 위해 디버그 세션에서만 사용하기를 권고하고 디버깅이 한 번 끝났을 때는 지워져야 합니다.

    > ❗**TIP**
>
>     **Warnings only work during development, so this config is ignored in production mode.**
>
>

    ### - Examples


    ```typescript
    app.config.warnHandler = (msg, instance,trace) => {
    	// trace is the component hierarchy (계층구조) trace
    }
    ```


## app.config.performance


    : Set this to true to enable component init, compile, render and patch performance tracing in the browser devtool performance/timeline panel. Only works in development mode and in browsers that support the [**performance.mark**](https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark) API.


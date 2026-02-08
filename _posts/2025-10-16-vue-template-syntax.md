---
layout: post
title: "Vue : Template Syntax"
date: 2023-03-14
categories: [general]
tags: [Vue]
excerpt_separator: ""
---



Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance’s data. All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.


뷰는 렌더링된 돔을 하위 컴포넌트 인스턴스의 데이터에 선언적으로 바인드할 수 있게 해주는 HTML 기반의 템플릿 문법을 사용합니다. 모든 뷰 템플릿은 사양을 준수하는 브라우저와 HTML parser 에 의해 파싱 가능한 문법적으로 올바른 HTML 입니다.


Under the hood, Vue compiles the templates into highly-optimized JavaScript code. Combined with the reactivity system, Vue can intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.


내부적으로 뷰는 템플릿들을 고도로 최적화된 자바스크립트 코드로 컴파일합니다. 반응형 시스템과 결합된 뷰는 앱 상태가 바뀔 때 지능적으로 리렌더링 해야하는 최소한의 컴포넌트들을 찾아내고 돔 조작을 최소화 합니다


If you are familiar with Virtual DOM concepts and prefer the raw power of Javascript, you can also [directly write render functions](https://vuejs.org/guide/extras/render-function.html) instead of templates, with optional JSX support. However, do note that they do not enjoy the same level of compile-time optimizations as templates


만약 당신이 가상 돔 개념이 친숙하고 자바스크립트의 raw power 를 선호한다면 템플릿 대신 선택적인 JSX 서포트를 이용한 렌더 함수를 직접 쓸 수 있습니다. 하지만 그것들은 템플릿과 같은 수준의 컴파일 시간 최적화를 기대할 수 없다는 것을 알아야 합니다.


### Text Interpolation / 문자 보간(기울 보 사이 간) 사이를 돕는다 ?


The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces)


데이터 바인딩의 가장 기초적인 형식은 “이중중괄호” 문법을 사용한 문자 보간법 입니다.


{% raw %}
```javascript
<span>Message: {{ message }}</span>
```
{% endraw %}


The mustache tag will be replaced with the value of the `msg` property from the corresponding component instance. It will also be updated whenever the `msg` property changes.


이중 중괄호 태그는 그에 상응하는 컴포넌트 인스턴스의 msg 속성 값으로 대체될 것입니다. 그것은 또한 msg 속성이 바뀔 때마다 업데이트 될 것입니다.


### Raw HTML


The double mustaches interpret the data as plain text, not HTML. In order to output real HTML, you will need to use the [`v-html`](https://vuejs.org/api/built-in-directives.html#v-html)[ directive](https://vuejs.org/api/built-in-directives.html#v-html)


이중 중괄호는 데이터를 HTML 이 아닌 텍스트로 변환합니다. HTML 을 출력하기 위해서는 v-html 디렉티브를 사용해야 합니다.


{% raw %}
```javascript
<p>Using text interpolation: {{ rawHTML }}</p>
<p>Using v-html directive: <span v-html="rawHTML"></span></p>

Using text interpolation: <span style="color: red">This should be red.</span>
Using v-html directive: 
This should be red.
```
{% endraw %}


Here we’re encountering something new. The `v-html` attribute you’re seeing is called a **directive**. Directives are prefixed with `v-` to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here, we’re basically saying “keep this element’s inner HTML up-to-date with the `rawHtml` property on the current active instance.”


새로운 속성 `v-html` 은 **directive** 라고 칭합니다. Directive 는 뷰로부터 제공받은 특별한 속성을 가리키기 위해 `v-` 를 접두사로 씁니다 그리고 예상했겠지만 그것들은 렌더링된 돔에 특별한 반응형 동작을 추가합니다. 간단하게 “ 이 요소의 내부 HTML 을  현재 활성화된 인스턴스의 `rawHtml` 속성을 사용해서 업데이트 해” 라고 말할 수 있습니다


The contents of the `span` will be replaced with the value of the `rawHtml` property, interpreted as plain HTML - data bindings are ignored. Note that you cannot use `v-html` to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.


`span` 의 내용은 일반 HTML 로 해석되는 `rawHtml` 속성값으로 변환될 것입니다 - 데이터 바인딩은 무시됩니다. 템플릿의 일부분만 구성하기 위해서 v-html 을 사용할 수 없다는 것을 기억하세요 왜냐하면 뷰는 문자 기반 템플릿 엔진이 아니기 때문입니다. 대신에 컴포넌트들은 UI 재사용과 구성을 위한 기본적인 유닛으로 선호됩니다.


Security Warning


Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use v-html on trusted content and never on user-provided content.


웹사이트의 임의의 HTML 을 동적으로 렌더링 하는것은 매우 위험합니다 왜냐하면 XSS 취약점이 쉽게 발생하기 때문입니다. 신뢰할 수 있는 내용에만 `v-html` 을 사용하고 사용자가 제공한 내용에는 사용하지 마세요


### Attributed Bindings | 속성 바인딩


Mustaches cannot be used inside HTML attributes. Instead, use a [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)[ directive](https://vuejs.org/api/built-in-directives.html#v-bind)


중괄호는 HTML 속성들 안에서는 사용될 수 없습니다. 대신 v-bind 디렉티브를 사용하세요


{% raw %}
```javascript
<div v-bind:id="dynamicId"></div>
```
{% endraw %}


The `v-bind` directive instructs Vue to keep the element’s `id` attribute in sync with the component’s `dynamicId` property. If the bound value is `null` or `undefined`, then the attribute will be removed from the rendered element.


`v-bind` 디렉티브는 뷰가 요소의 id 속성을 컴포넌트의 `dinamicId` 속성과 동시에 이뤄지도록 지시합니다. 만약 바인딩된 값이 `null` or `undefined` 이면 속성은 렌더링된 요소에서 지워질 것입니다.


### **Shorthand | 단축문법**


Because `v-bind` is so commonly used, it has a dedicated shorthand syntax


`v-bind` 는 너무 자주 쓰이기 때문에 전용 단축 문법이 있습니다


{% raw %}
```javascript
<div :id="dynamicId"></div>
```
{% endraw %}


Attributes that start with `:` may look a bit different from normal HTML, but it is in fact a valid character for attribute names and all Vue-supported browsers can parse it correctly. In addition, they do not appear in the final rendered markup. The shorthand syntax is optional, but you will likely appreciate it when you learn more about its usage later.


`:` 로 시작하는 속성은 일반적인 HTML 과 약간 달라 보일 수 있지만 사실 유효한 속성명 글자이며 모든 뷰 지원 브라우저가 올바르게 파싱할 수 있습니다. 그리고 최종 렌더링 마크업에는 나타나지 않습니다. 단축 문법은 선택사항이지만 나중에 그 쓰임새를 더 배우면 유용하게 사용할 것입니다.


### Boolean Attributes | 불린 속성


Boolean attributes are attributes that can indicate true / false values by their presence on an element. For example, `disabled` is on of the most commonly used boolean attributes.


불린 속성은 요소에 그 값이 존재하는지에 따라 참 거짓으로 나타내는 속성입니다. 예를 들어  `disabled` 는 가장 자주 사용되는 불린 속성들 중 하나입니다.


`v-bind` works a bit differently in this case


`v-bind` 가 이 상황에서는 조금 다르게 쓰입니다


{% raw %}
```javascript
<button :disabled="isButtonDisabled">Button</button>
```
{% endraw %}


The `disabled` attribute will be included if `isButtonDisabled` has a truthy value. It will also be included if the value is an empty string, maintaining consistency with <button disabled=””>. For other falsy values the attribute will be omitted.


`disabled` 속성은 `isButtonDisabled` 가 참 속성을 갖고 있으면 포함됩니다. 만약 값이 빈 문자열이어도 `<button disabled="">` 와 일관성을 유지하고 있으므로 포함됩니다. 속성의 다른 거짓 값들은 생략될 것입니다.


### Dynamically Binding Multiple Attributes | 다중 속성 동적 바인딩


If you have a Javascript object representing multiple attributes that looks like this


이런 다중 속성을 나타내는 자바스크립트 객체가 있다면


{% raw %}
```javascript
data(){
	return{
		objectOfAttrs: {
			id: 'container',
			class: 'wrapper'
		}
	}
}
```
{% endraw %}


You can bind them to a single element by using v-bind without an argument:


논쟁의 여지 없이 v-bind 를 사용하여 단일 요소에 바인딩할 수 있습니다


{% raw %}
```javascript
<div v-bind="objectOfAttrs"></div>
```
{% endraw %}


### Using JavaScript Expression | 자바스크립트 표현 사용


So far we’ve only been binding to simple property keys in our templates. But Vue actually supports the full power of JavaScript expressions inside all data bindings


지금까지는 템플릿의 간단한 속성 키에만 바인딩을 했지만 사실 뷰는 모든 데이터 바인딩에 모든 자바스크립트 표현을 지원합니다.


{% raw %}
```javascript
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div :id="`list-${id}`"></div>
```
{% endraw %}


These expressions will be evaluated as JavaScript in the data scope of the current component instance.


이러한 표현식들은 현재 컴포넌트 인스턴스의 데이터 범위에서 자바스크립트로 평가됩니다.


In Vue templates, Javascript expressions can be used in the following positions


뷰 템플릿에서 자바스크립트 표현식은 다음의 상황에서 쓰일 수 있습니다

- Inside text interpolations (mustaches)
- 문자 보간 (중괄호) 내
- In the attribute value of any Vue directives (special attributes that start with v-)
- 모든 뷰 디렉티브 (v- 로 시작하는 특별한 속성) 속성값 내

### Expressions Only | 하나의 표현식만


Each binding can only contain one single expression. An expression is a piece of code that can be evaluated to a value. A simple check is whether it can be used after return.


각각의 바인딩은 한개의 표현식만 가질 수 있습니다. 표현식은 값으로 평가될 수 있는 코드 조각입니다. return 뒤에 쓰일 수 있는지 없는지로 체크할 수 있습니다.


Therefore, the following will NOT work


{% raw %}
```javascript
// this is a statement not an expression
{{ const a = 1 }}

// flow control won't work either, use ternary expressions | 삼항조건연산자 사용해라
{{ if (ok) { return message } }}
```
{% endraw %}


### Calling Functions | 함수 호출


It is possible to call a component-exposed method inside a binding expression


바인딩 표현식에서 컴포넌트에서 노출한 메서드를 호출하는것이 가능합니다


{% raw %}
```javascript
<span :title="toTitleDate(date)">
	{{ formatDate(date) }}
</span>
```
{% endraw %}

> Functions called inside binding expressions will be called every time the component updates, so they should not have any side effects, such as changing data of triggering asynchronous operations.
> 내부 바인딩 표현식을 호출하는 함수들은 컴포넌트가 업데이트 될 때마다 호출됩니다 그래서  데이터를 바꾸거나 비동기 작업을 트리거하는 등의 다른 부작용을 가지고 있으면 안됩니다.

### Restricted Globals Access | 제한된 전역 접근


Template expressions are sandboxed and only access to a [restricted list of globals](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3). The list exposes commonly used built-in globals such as `Math` and `Date`.


템플릿 표현식들은 샌드박스되어 제한된 전역 리스트들에만 접근 가능합니다. 그 리스트들은 `Math` 나 `Date` 같이 주로 사용되는 기본 전역 접근만 표시합니다.


Globals not explicitly included in the list, for example user-attached properties on `window`, will not be accessible in template expressions. You can, however, explicitly define additional globals for all Vue expressions by adding them to `app.config.globalProperties`.


전역 객체들은 리스트에 분명히 포함되지 않습니다. 예를 들어 윈도우의 사용자와 밀접한 속성들은 템플릿 표현식에서 접근 불가능 할 것입니다. 하지만 분명히 그것들을 `app.config.globalProperties` 에 추가함으로써 모든 뷰 표현식들을 위한 추가적인 전역 객체를 분명히 정의할 수 있습니다.


### Directives


Directives are special attributes with the `v-` prefix. Vue provides a number of [built-in directives](https://vuejs.org/api/built-in-directives.html), including `v-html` and `v-bind` which we have introduced above.


Directive 는 `v-` 접두사를 사용한 특별한 속성들 입니다. 뷰는 위에서 소개한 `v-html` 이나 `v-bind` 같은 많은 built-in directives 를 제공합니다.


Directives attribute values are expected to be single JavaScript expressions (with the exception of `v-for`, `v-on`, and `v-slot`, which will be discussed in their respective sections later). A directive’s job is to reactively apply updates to the DOM when the value of its expression changes. Take v-if as an example


Directive 속성값들은 단일 자바스크립트 표현식으로 기대됩니다 (나중에 그 각각의 섹션에서 다뤄질 `v-for`, `v-on`, and `v-slot` 제외). Directive 의 역할은 그 표현식의 값이 바뀔 때 반응적으로 돔에 업데이트를 적용하는 것입니다 


{% raw %}
```javascript
<p v-if="seen">Now you see me</p>
```
{% endraw %}


Here, the `v-if` directive would remove / insert the `<p>` element based on the truthiness of the value of the expression `seen`.


여기서 `v-if` 디렉티브는 `seen` 표현식의 참 거짓 여부에 기반하여 `<p>` 요소를 보이거나 안 보이게 할 것입니다


### Arguments | 인자


Some directives can take an “argument”, denoted by a colon after the directive name. For example, the `v-bind` directive is used to reactively update an HTML attribute


몇몇 디렉티브들은 디렉티브 이름 뒤에 콜론을 사용하여 나타내는 “인자”를 받을 수 있습니다. 예를 들어 `v-bind` 디렉티브는 HTML 속성을 반응적으로 업데이트할 때 사용됩니다.


{% raw %}
```javascript
<a v-bind:href="url">...</a>

//shorthand
<a :href="url"></a>
```
{% endraw %}


Here, `href` is the argument, which tells the `v-bind` directive to bind the element’s `href` attribute to the value of the expression `url`. In the shorthand, everything before the argument (i.e., `v-bind:` ) is condensed into a single character, `:`.


여기서 `href` 는 `v-bind` 디렉티브가 `url` 표현식의 값에 요소의 `href` 속성을 바인딩 하게 하는 인자 입니다. 단축문법에서 인자 전의 모든 것들 즉 `v-bind:`  는 간단한 문자열 `:` 로 압축됩니다.


Another example is the `v-on` directive, which listens to DOM events


다른 예시로는 돔 이벤트를 수신하는 다른 `v-on` 디렉티브가 있습니다.


{% raw %}
```javascript
<a v-on:click="doSomething">...</a>

//shorthand
<a @click="doSomething">...</a>
```
{% endraw %}


Here, the argument is the event name to listen to: `click`. `v-on` has a corresponding shorthand, namely the `@` character. We will talk about event handling in more detail too.


여기서 인자는 `click` 을 수신하는 이벤트 이름입니다. `v-on`은 그에 해당하는 단축문법인 `@` 문자열이 있습니다. 우리는 이벤트 핸들링을 더 살펴볼 것입니다.


{% raw %}
```javascript
<!--
Note that there are some constraints to the argument expression,
as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
-->
<a v-bind:[attributeName]="url">...</a>

//shorthand
<a :[attributeName]="url">...</a>
```
{% endraw %}


Here `attributeName` will be dynamically evaluated as a JavaScript expression, and its evaluated value will be used as the final value for the argument. For example, if your component instance has a data property, `attributeName`, whose value is `“href”`, then this binding will be equivalent to `v-bine:href`.


여기서 `attributeName` 는 동적으로 자바스크립트 표현식으로 평가됩니다. 그리고 그 평가된 값은 인자의 마지막 값으로 사용될 것입니다. 예를 들어 만약 당신의 컴포넌트 인스턴스가 값이 `“href”` 인 `attributeName` 데이터 속성을 가지고 있다면 이 바인딩은 `v-bine:href` 와 같은 뜻이 됩니다.


Similarly , you can use dynamic arguments to bind a handler to a dynamic event name


비슷한 예로 동적인 인자를 동적인 이벤트 이름에 바인딩하는 핸들러로 사용할 수 있습니다.


{% raw %}
```javascript
<a v-on:[eventName]="doSomething">...</a>

//shorthand
<a @[eventName]="doSomething">
```
{% endraw %}


In this example, when `eventName`’s value is `“focus”`, `v-on:[eventName]` will be equivalent to `v-on:focus`.


이 예시에서 `eventName` 의 값이 `“focus”` 일 때 `v-on:[eventName]` 는 `v-on:focus` 와 같은 의미를 가집니다.


### Dynamic Argument Value Constraints | 동적 인자값 제한


Dynamic arguments are expected to evaluate to a string, with the exception of `null`. The special value `null` can be used to explicitly remove the binding. Any other non-string value will trigger a warning.


동적 인자는 `null` 값을 제외하고 문자열로 평가되길 기대됩니다. 특별한 값 `null` 은 분명히 바인딩을 제거하는 역할을 할 수 있습니다. 다른 문자가 아닌 값들은 에러를 발생시킵니다.


### Dynamic Argument Syntax Constraints | 동적 인자 문법 제한


Dynamic argument expressions have some syntax constraints because certain characters, such as spaces and quotes, are invalid inside HTML attribute names. For example, the following is invalid


동적 인자 표현식은 몇몇 문법 제한이 있습니다. 왜냐하면 공백과 인용들 같은 몇몇 문자들은 HTML 속성명 안에서 유효하지 않기 때문입니다. 다음의 예시들은 유효하지 않습니다.


{% raw %}
```javascript
<a :['foo' + bar]="value">...</a>
```
{% endraw %}


If you need to pass a complex dynamic argument, it’s probably better to use a [computed property](https://vuejs.org/guide/essentials/computed.html), which we will cover shortly


복잡한 동적 인자를 사용해야 한다면 이제 다룰 **computed** 속성을 사용하는 것이 좋습니다.


When using in-DOM templates (templates directly written in an HTML file), you should also avoid naming keys with uppercase characters, as browsers will coerce attribute names into lowercase


돔 내부 템플릿(HTML 파일로 직접 쓰인 템플릿)을 사용할 때는 키값에 대문자를 사용하면 안됩니다. 브라우저가 강제로 소문자로 만들것입니다.


{% raw %}
```javascript
<a :[someAttr]="value">...</a>
```
{% endraw %}


The above will be converted to `:[someattr]` in in-DOM templates. If your component has a `someAttr` property instead of `someattr`, your code won’t work. Templates inside Single-File Components are not subject to this constraint.


이 코드는 돔 내부 템플릿에서 `:[someattr]` 로 변환될 것입니다. 만약 컴포넌트가 `someattr` 가 아닌 `someAttr` 속성을 갖고 있다면 당신의 코드는 동작하지 않을 것 입니다. 싱글파일 컴포넌트 내부의 템플릿은 이 제한에 해당되지 않습니다.


### Modifiers | 수식어


Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. For example, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()` on the triggered event


수식어는 점으로 시작하는 특수한 접미사로 디렉티브가 특수한 방식으로 바인딩 되어야 하는 것을 가리킵니다. 예를 들어 `.prevent` 수식어는 `v-on` 에 발생될 이벤트에 `event.preventDefault()` 를 요청하도록 해줍니다.


{% raw %}
```javascript
<form @submit.prevent="onSubmit">...</form>
```
{% endraw %}


You’ll see other examples of modifiers later, for `v-on` and for `v-model`, when we explore those features.


나중에 for `v-on` and for `v-model` 를 다룰 때 다른 예시들을 보게 될 것 입니다.


And finally, here’s the full directive syntax visualized


마지막으로 전체 디렉티브 문법 정리 입니다


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-db153b21b03c.png)


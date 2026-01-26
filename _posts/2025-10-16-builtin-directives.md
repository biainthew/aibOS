---
layout: post
title: "Built-in Directives"
date: 2023-03-16
categories: [general]
tags: [Vue]
excerpt_separator: ""
---



{% raw %}

## v-text


    Update the element’s text content

    - **Expects** : `string`
    - **Details**

        : `v-text` works by setting the element’s [**textContent**](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property, so it will overwrite any existing content inside the element. If you need to update the part of `textContent`, you should use [**mustache interpolations**](https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation) instead.


        `v-text` 는 요소의 `textContent` 속성을 설정함으로써 동작합니다 그래서 요소 내의 기존 컨텐츠를 덮어씁니다. `textContent` 의 일부분만 업데이트 해야 할 경우에는 이중중괄호 문법을 사용하세요.

    - **Example**

    ```javascript
    <span v-text="msg"></span>
    //same as
    <span>{{ msg }}</span>
    ```

    - **See also** : [**Template Syntax - Text Interpolation**](https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation)

## v-html


    Update the element’s [**innerHTML**](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)**.**

    - **Expects** : `string`
    - **Details**

        : Contents of `v-html` are inserted as plain HTML - Vue template syntax will not be processed. If you find yourself trying to compose templates using `v-html`, try to rethink the solution by using components instead.


        `v-html` 의 내용은 일반 HTML 로 삽입됩니다 - 뷰 템플릿 문법은 처리되지 않습니다. 만약 당신이 `v-html` 을 사용한 템플릿을 작성하려고 한다면 그 대신에 컴포넌트를 사용하는 해결법을 다시 생각해보세요

        > ⚠️ **Security Note**
>
>         **Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to** [**XSS attacks**](https://en.wikipedia.org/wiki/Cross-site_scripting)**. Only use** **`v-html`** **on trusted content and never on user-provided content.**
>
>

        : In [**Single-File Components**](https://vuejs.org/guide/scaling-up/sfc.html)**,** `scoped` styles will not apply to content inside `v-html`, because that HTML is not processed by Vue’s template compiler. If you want to target `v-html` content with scoped CSS, you can instead use [**CSS modules**](https://vuejs.org/api/sfc-css-features.html#css-modules) or an additional, global `<style>` element with a manual scoping strategy such as BEM.


        싱글파일컴포넌트에서 

    - **Example**

    ```javascript
    <span v-text="msg"></span>
    //same as
    <span>{{ msg }}</span>
    ```

    - **See also** : [**Template Syntax - Text Interpolation**](https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation)

{% endraw %}

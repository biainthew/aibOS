---
layout: post
title: "코딩애플JS Part1-30 import export"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



ES6 import export 를 사용해서 내가 원하는 변수, 함수, class 만 다른 파일로 보내기


import 해온 변수, 함수는 사용은 가능하지만 수정은 불가능함


```javascript
//index.html
<script type="module"></script>
```


### 1. export default / import 를 쓰면


```javascript
//library.js
let a = 10;
export default a;

//index.html
<script type="module">
	import a from 'liabrary.js';
	console.log(a);
</script>
```


내보낼 때 : export default 변수명
가져올 때 : import 변수 from ‘경로’


### 2. 여러개를 export 가능


```javascript
//library.js
let a = 10;
let b = 22;
let c = 34;
export { a, b };

//index.html
<script type="module">
	import { a,b } from 'liabrary.js';
	console.log(a);
</script>
```


export 라고 쓸 때는 export{변수1, 변수2 … } 이렇게 담아야됨


혹은 export let a = 10 ;


export 키워드로 내보낸 것들을 import 할 때는 import {변수1, 변수2 ..} from ‘경로’


> 💡 export default 와 차이점 ?  
> - export default 는 한번만 쓸 수 있고 import 시에는 변수명을 새롭게 작명가능하다  
> - export 는 {변수명1, 변수명2 … } 이렇게 담아야 하고 import 할 때도 정확히 변수명을 써줘야 한다는 특징이 있음


### 3. export 와 export default 동시에 사용하면 ?


가능


```javascript
//library.js
let a = 10;
let b = 22;
let c = 34;
export { a, b };
export default c;

//index.html
<script type="module">
	import c, { a,b } from 'liabrary.js';
	console.log(c);
</script>
```


export default 한건 맨 왼쪽에 쓰고 그 다음부터 중괄호 안에 export 했던 변수들 적어주기


### 4. 변수명이 마음에 안들면 as 로 새로 짓자


```javascript
//library.js
let a = 10;
let b = 22;
let c = 34;
export { a };
export default c;

//index.html
<script type="module">
	import c, { a as 폭발 } from 'liabrary.js';
	console.log(폭발);
</script>
```


### 5. import 할 때 변수들이 너무 많으면 * 기호를 쓴다


```javascript
//library.js
let a = 10;
let b = 22;
let c = 34;
export { a,b };
export default c;

//index.html
<script type="module">
	import c, * as 변수모음 from 'liabrary.js';
	console.log(변수모음.a);
	console.log(c);
</script>
```


* 라는 기호는 export 했던 애들을 다 import 해달라는 뜻인데 그냥 쓰는건 안되고 as 로 별명을 꼭 지어주어야 함 그럼 이제 별명에 export 했던 변수들이 다 들어감


export default 했던 건 그냥 원래대로 import 하면 됨


### 옛날엔 require, module.export 라는 게 있었음


```javascript
(export 하는 js 파일)
module.exports.a = 10;

(import 하는 js 파일)
let 가져온거 = require('/library.js');
```


이해만 하기


import export 는 당연 IE 호환성이 없기 때문에 단순한 html css js 프론트엔드 개발 시 JS 파일을 HTML 에 첨부하려면 `<script src=”경로”></script>` 이걸 쓰는게 좋음


혹은 모던 브라우저에서는 `<script type="module" src="경로"></script>` 이렇게 하면 import export 문법이 사용 가능해지는데 대부분은 리액트 뷰 node.js 할 때 많이 사용함


![codingapple.com_course-status__%288%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/d20e803b-5121-4827-a850-95feddde6eef/codingapple.com_course-status__%288%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z377NHRB%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDzayYeZlzUXdpSQ0WaButD0JskpVIe1wyYNGQSH%2Fg54gIhAIcHDUfVqq5VTKSe4xX0gatZyB7muXMVE10yWAIXaB7JKv8DCDsQABoMNjM3NDIzMTgzODA1IgzUKfrtRNlv27MtIzoq3AOL3MojLdlcGdwa4RbWGsqpUnE3csmXj%2BedBnFlfKMdtHgEa4dxViEB%2B%2FZcwOOnnrH1%2BzFx5F%2FPEasS4A9EBbhBerWr6pVNwOziIo23Dp68yiFErp7Ue8T5fvtovRcbutP44outgG8UGN8F6PoKm7jD3Gszkq2gXr4TU6C0kwdtoL1xOwl4fnpqTzr25jvtvrMuQNrf4WzPASuzZWbwFYCKLUuSMz0KgHG%2Bpp%2Bvpt1HfGegoE8cJwQjNWHeWO0CvpPyux%2FFOl1r8lu4qhm2In%2Fea91XCtjx749%2F35XqLa%2FVO%2Br7cRoDf08ZUYBqoPA6llmUKmlO%2BjCyqgX76tDRK3PesuduaVW2ptQhGuCE0MoMbOr4dO4Zpzip0e812Zig0z87PguYzPbqvLxR1%2BjuJXVa%2FhHHyXQzS%2FA1NxoL40WhGVUaMpzoEaQ8QyPtMESglENCqE7q6tmFZp4XqEySN8CAsG4tyO4yFnBaOdCWewMEnJKpARFlDuJVJzHBpydJ6HtrKTBBhwV3xeIfqjRyOlCHc%2FjlTVcgkKh%2FUQTcWWzCVzvJqQ0LQH%2F74MwQkSbASwqLu6dOzyEPTdEiphOUpJgsEoFDsKtjP9qlJTy%2F8T%2BjB9fnbANbMzv3cr%2FN6jCn%2B9zLBjqkAQ5Y2jGnVqxwzYiOAfjJTWvADt5XWQL1a4XqMSJu%2FUXrDcKG9AQYxC%2BiT9K81L%2Fdp1RTOYRE77LaVW20KzcLzeStV4sNtmaeb83KU%2BO0rBnL6Q9ST25TvI3ZRAD5NgKeh%2B%2FNDNnUPVBgYc74xn72JLBBfivb%2Bo%2B1Haky0sp36CupW1C4UGAoB7i5XW7AVjnvMLl3iPj7md64HCphM1cVYMs4Laox&X-Amz-Signature=9afebd61d4532d749ad9fb0ecfe25a923e4df9e7d9ecd9df40008eabb45b9c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


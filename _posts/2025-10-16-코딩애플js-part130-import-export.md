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


{% raw %}
```javascript
//index.html
<script type="module"></script>
```
{% endraw %}


### 1. export default / import 를 쓰면


{% raw %}
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
{% endraw %}


내보낼 때 : export default 변수명
가져올 때 : import 변수 from ‘경로’


### 2. 여러개를 export 가능


{% raw %}
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
{% endraw %}


export 라고 쓸 때는 export{변수1, 변수2 … } 이렇게 담아야됨


혹은 export let a = 10 ;


export 키워드로 내보낸 것들을 import 할 때는 import {변수1, 변수2 ..} from ‘경로’


> 💡 export default 와 차이점 ?  
> - export default 는 한번만 쓸 수 있고 import 시에는 변수명을 새롭게 작명가능하다  
> - export 는 {변수명1, 변수명2 … } 이렇게 담아야 하고 import 할 때도 정확히 변수명을 써줘야 한다는 특징이 있음


### 3. export 와 export default 동시에 사용하면 ?


가능


{% raw %}
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
{% endraw %}


export default 한건 맨 왼쪽에 쓰고 그 다음부터 중괄호 안에 export 했던 변수들 적어주기


### 4. 변수명이 마음에 안들면 as 로 새로 짓자


{% raw %}
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
{% endraw %}


### 5. import 할 때 변수들이 너무 많으면 * 기호를 쓴다


{% raw %}
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
{% endraw %}


* 라는 기호는 export 했던 애들을 다 import 해달라는 뜻인데 그냥 쓰는건 안되고 as 로 별명을 꼭 지어주어야 함 그럼 이제 별명에 export 했던 변수들이 다 들어감


export default 했던 건 그냥 원래대로 import 하면 됨


### 옛날엔 require, module.export 라는 게 있었음


{% raw %}
```javascript
(export 하는 js 파일)
module.exports.a = 10;

(import 하는 js 파일)
let 가져온거 = require('/library.js');
```
{% endraw %}


이해만 하기


import export 는 당연 IE 호환성이 없기 때문에 단순한 html css js 프론트엔드 개발 시 JS 파일을 HTML 에 첨부하려면 `<script src=”경로”></script>` 이걸 쓰는게 좋음


혹은 모던 브라우저에서는 `<script type="module" src="경로"></script>` 이렇게 하면 import export 문법이 사용 가능해지는데 대부분은 리액트 뷰 node.js 할 때 많이 사용함


![codingapple.com_course-status__%288%29.png](/aibOS/public/images/posts/28e0a7f9-7cf27609722d.png)


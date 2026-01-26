---
layout: post
title: "코딩애플JS Part1-30 import export"
date: 2023-07-13
categories: [general]
tags: [Javascript/Jquery]
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


![codingapple.com_course-status__%288%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/d20e803b-5121-4827-a850-95feddde6eef/codingapple.com_course-status__%288%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFU5IORP%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBeb0L8noG0xjIf1GVz9XxK5eqIbG8tSRs2ldft25NYgAiB5yyjE%2BscPluOLT7nztHYdgHOCnSgekY%2Bz7ogcUDgsiir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMxDW405kZCbz9JrAnKtwDXio9khvRNU1P6ssT9Sai3i3DWaGAMwX0IAbHL2jElb2EY8WN5u3QArsVakEeLq%2B3c8%2BR3LkdLqtuLRE7EYW2r8ba6Je4FLDBaw8rOrPiz3sF%2Fw2Pu5K4f8o6fL0HykNeQpReH7aIckXYYyCyMQ7L8pAdsY4zNUOvYZsfoDi7N5Cl90K6DZBXsFd39U%2FrqC57GhObVae62HsuDXHwCHPP9ae%2BZgLHniBf8YjW5ZWov0cx256Q2TyePtrqObsUxNotZfCNVkMl5ba8jGsBj2fa%2FEXn0D4oF%2F8R%2FKKrdAXqwWAAxtISD8lBLVx%2BZQeoAbs1TSpYiQgkQrLuyj6qVXKZrZoiXa2hG%2FVz0UjYex1BtCkA3C8wNTYWv%2FwJ4ywYz5jV8QFx1bhL%2FneVDeYzBz%2BHzsfoUeI1sp8ZKnvwiu1jZAob12VdPi%2FFSvP4%2FFUFknGdFKYobR4JJ7F0APw%2BB2kpFOxUShMhyft%2FfAo8QAseCGHeX3RPJ0%2FR7fkIN2zrMvrUaapvH0c%2BLek%2F2vSAawvHr65YMPFNN0swZYq5BnAE7Uuzphx2NFT9JjnVNaZLHgesOsH8aTQVHvtch9HqCBXXTchEqpD%2FAZrwZZ%2Bw1Z1YTPaTPM7%2FHg2037PeJQgwp9ncywY6pgFiFmxLuMOR%2BQZx1e%2BZuE%2BrmVIBVBWJ0fdX%2FjxR%2BPnU20aQLU9GSadIDHOjy7JzrGFmlB98fm0%2F4lRp8vJ7rX5OzmVhsmhwpqlJyTkNI7OSp8zkb28JKlmljCMKMW8cyLJfl9MFTsr%2FtS0ZEnUJiWRSPlsY7u8xYRo4DyH84nsO9yh0y%2B9sw4F%2B5eX9jxXcvUxpYrSl9DmYMCfs23V8ddcH46nt8Oxb&X-Amz-Signature=9af3e23ef2a53628e57c23f2e5a68c7dd6ebc5d3ce3614228a90d26fa3840df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
layout: post
title: "코딩애플JS Part1-19 prototype"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
---


> 💡 **상속 (inheritance) ?**  
> 기계라는 constructor 가 가진 name, age 속성을 그대로 물려받아서 오브젝트를 하나 뽑아주는 것 / 부모 자식 이라고 부름


### Prototype 은 유전자다


: 기계.prototype 은 기계의 유전자


: prototype 을 이용하면 똑같이 상속 기능을 만들 수 있다


### 왜 ?


> 💡 **자바스크립트가 오브젝트에서 데이터 뽑을 때 확인하는 순서**  
> 1. 내가 직접 값을 가지고 있는가 ?  
> 2. 부모의 유전자에 값이 있는가 ?


### 자바스크립트에서 내장함수를 쓸 수 있는 이유 ?


: 내가 만든 array 에 toString() 이렇게 붙일 수 있는 이유는 부모 유전자가 가지고 있기 때문 (혹은 부모의 부모)


```javascript
var arr = [1,2,3];
var arr = new Array(1,2,3);
```


: Array 라는 기계로부터 자식을 하나 새로 뽑아달라는 뜻


### prototype 으로 상속시키는것과 constructor로 상속시키는 것의 차이점 ?


: prototype 은 부모가 값을 가지고 있고 자식들을 그걸 참조해서 사용


: constructor 는 자식이 직접 값을 가지고 있음


: 그래서 보통 상속할 수 있는 함수 같은 것들은 prototype 으로 많이 만들어놓는다고 함


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9294c9fe-144d-4e5f-8aec-a2e4586bab54/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFU5IORP%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBeb0L8noG0xjIf1GVz9XxK5eqIbG8tSRs2ldft25NYgAiB5yyjE%2BscPluOLT7nztHYdgHOCnSgekY%2Bz7ogcUDgsiir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMxDW405kZCbz9JrAnKtwDXio9khvRNU1P6ssT9Sai3i3DWaGAMwX0IAbHL2jElb2EY8WN5u3QArsVakEeLq%2B3c8%2BR3LkdLqtuLRE7EYW2r8ba6Je4FLDBaw8rOrPiz3sF%2Fw2Pu5K4f8o6fL0HykNeQpReH7aIckXYYyCyMQ7L8pAdsY4zNUOvYZsfoDi7N5Cl90K6DZBXsFd39U%2FrqC57GhObVae62HsuDXHwCHPP9ae%2BZgLHniBf8YjW5ZWov0cx256Q2TyePtrqObsUxNotZfCNVkMl5ba8jGsBj2fa%2FEXn0D4oF%2F8R%2FKKrdAXqwWAAxtISD8lBLVx%2BZQeoAbs1TSpYiQgkQrLuyj6qVXKZrZoiXa2hG%2FVz0UjYex1BtCkA3C8wNTYWv%2FwJ4ywYz5jV8QFx1bhL%2FneVDeYzBz%2BHzsfoUeI1sp8ZKnvwiu1jZAob12VdPi%2FFSvP4%2FFUFknGdFKYobR4JJ7F0APw%2BB2kpFOxUShMhyft%2FfAo8QAseCGHeX3RPJ0%2FR7fkIN2zrMvrUaapvH0c%2BLek%2F2vSAawvHr65YMPFNN0swZYq5BnAE7Uuzphx2NFT9JjnVNaZLHgesOsH8aTQVHvtch9HqCBXXTchEqpD%2FAZrwZZ%2Bw1Z1YTPaTPM7%2FHg2037PeJQgwp9ncywY6pgFiFmxLuMOR%2BQZx1e%2BZuE%2BrmVIBVBWJ0fdX%2FjxR%2BPnU20aQLU9GSadIDHOjy7JzrGFmlB98fm0%2F4lRp8vJ7rX5OzmVhsmhwpqlJyTkNI7OSp8zkb28JKlmljCMKMW8cyLJfl9MFTsr%2FtS0ZEnUJiWRSPlsY7u8xYRo4DyH84nsO9yh0y%2B9sw4F%2B5eX9jxXcvUxpYrSl9DmYMCfs23V8ddcH46nt8Oxb&X-Amz-Signature=52c74755a9ca1f3baffe600c4bf26640712bfb52243637dcbd33d30af826fde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
layout: post
title: "코딩애플JS Part1-19 prototype"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
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


{% raw %}
```javascript
var arr = [1,2,3];
var arr = new Array(1,2,3);
```
{% endraw %}


: Array 라는 기계로부터 자식을 하나 새로 뽑아달라는 뜻


### prototype 으로 상속시키는것과 constructor로 상속시키는 것의 차이점 ?


: prototype 은 부모가 값을 가지고 있고 자식들을 그걸 참조해서 사용


: constructor 는 자식이 직접 값을 가지고 있음


: 그래서 보통 상속할 수 있는 함수 같은 것들은 prototype 으로 많이 만들어놓는다고 함


![codingapple.com_course-status__%281%29.png](/aibOS/public/images/posts/28e0a7f9-547398993af7.png)


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


```javascript
var arr = [1,2,3];
var arr = new Array(1,2,3);
```


: Array 라는 기계로부터 자식을 하나 새로 뽑아달라는 뜻


### prototype 으로 상속시키는것과 constructor로 상속시키는 것의 차이점 ?


: prototype 은 부모가 값을 가지고 있고 자식들을 그걸 참조해서 사용


: constructor 는 자식이 직접 값을 가지고 있음


: 그래서 보통 상속할 수 있는 함수 같은 것들은 prototype 으로 많이 만들어놓는다고 함


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9294c9fe-144d-4e5f-8aec-a2e4586bab54/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJ2ZPNL%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKqdMRny83AwV0CUlbmJNMZ6mG%2BLF5SIFYU0G4cFCe%2FAIgGxXUi%2FcjTWSNha%2F6Ex18UOACPblbL6AHhizR6GYlCrcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDr6x17pyYwFbA7TZircA2gFOSHJlZeoOT%2BkzB3TJx%2BLNHHpKzW44jz2Zx5gcrqFFi8bpZ%2FimBODCsP5l%2F3uDbz50J54MR8rvet2hEaFykMfMTpL4QDhaQzKYGlxAwp4IS5gMbJatRikIqUyhRNpvVtO%2FP8ygSvxzRQmYjNHjzi02whDe73D7%2FG7rMll8CFfW85a5EvUOOeR7YQPszN8tmx5WA9uIp3fJ5y7rMOussX4QsGExtkwSWyGP6tShUkFP9d7IaK%2Fr9FYSb63i4ybmv4ac0brq7X5Duoz1Lh6Le%2BaXRNZ67ZIYHvwqHXXyVlKDgcseMvcDbNk03wpwoeau8U8rdr1h663a2oA5YvH5P7Wwf0gmB%2Bo5qZLHhNPianPxp45Ew5QY0vM7%2FK9j%2FWlHz3u0WdeWKJ17IJ661fYSsCGR3cysNKMbg0ovXDESoD6P1Mx6t28STfLpnVVJccRnB%2FIj7ccfGw1ZIwkHaPpFBKkVNc7%2ByMj%2BwPoReoUDgRLdKO2rG2KQT8ZDb2xajulbMtKcUS1Hjf9mfAbqUw4tRp067FfTXODYs6BCfjoIdcZYcor4opnovPzyMBhJGkLACJPjowWDUKRhioYopajYO%2B0kqAnTl2DT0Ooroi6pW6NJdlPJ0Ge3XO0TsdsMKf73MsGOqUB3QkJTIijopG%2B9JVMIj3LQcB0hxCanaOPdhBlHxhXN2jLDY57Fsi4HqfPpjU3%2Bkh3u%2Bh0G7MPZaAlT5vy0QZ7a%2BReuJXqWuotQ1xyPXS9n7b0uCaTJ6Qc3DHl90bJX24hXtlEHleOlowlF9I9GX0Ubsc%2FcEAdAX0TTcviVWngg16w9U1ardt0AYl%2BbxoQCSm166%2BRdOpYU3hD9G3Wz5mEWbkcNIgi&X-Amz-Signature=736cd7d04953e52bcaa9d81d4ca7bfe895452ee7f3cd1fa52dc789b33c04eb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


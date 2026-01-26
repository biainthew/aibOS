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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/9294c9fe-144d-4e5f-8aec-a2e4586bab54/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7FIV6I%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDL%2BpO2bf4fp8xB8bwKzWOyc4NDpvKzY1lKVNzLLFCZDgIhAJ8x12B3WOYzksnpEuwMsfh0rIrsot0PMigMwLaS%2F0fPKv8DCDwQABoMNjM3NDIzMTgzODA1IgwHnHlGTU8rncvyNJQq3AMrZs%2Fj8WCdd8e%2FItFU3Lx9BAke%2BaEr2wl7HtVG%2FjiruX0zSDaA1xmZ4CTq9QHskVwnSHDSjvdCGz9ZbGlAv5fLyutD0dfLZsU5Blc%2BfCKRL%2FcKPM8LtxdmawDY6F%2BtMY6QOkDzWtTbBGX8bRpoUeHMWasbhPAJ%2BFwqfhO5r2HB2cFu1FBU5rQpH4xeMAGw%2BAyynxbSHy2X8mHayEbgGflvozZZvseWhTS3H3SMOtfMRn%2F9ekVUzb1muH6hp4jVMYoAh8A1Wpco%2F36tJXW8rcx9XyRhmCI2f6PC5lNTrUZFgcvAsIR6L0r8JVPIQP1qZMeW%2BxRRCCytRCmbwtm0EScS%2F4vo2X3OPftImRAUIetsTJFbGnaigHS02Tn%2Fq3ECBaY97lBaCuGIheTmb6%2FBQfQt5MdOvrwWpalSAoHpEVJlEf6uYWmDjxTvXy3uZ7h6fxquHIP2IO9eDr4D5cOfOCb8x8N0RYmle%2FsIIscrmy%2BCDMzIkfLez6DDNSqNyJRsxjJIJ2Ml8AgOOXckNZRgiaePM4yidgHMaylnPehV5MWUD9CYLVIZB7yBbX%2Fs0yi3dBFRuF%2BZeh754f1nYOKPFX4o7izy%2FGvP81r%2FHKrZdC7Mu4arFXCpXF5U8DdSjDCRm93LBjqkAYSbUzPtAPdhsavt1bGtynjybm39akNIBE%2BpFTh7tfU%2FV12IH2H%2F5x3yFwU0C95Cmn83SoSYVz8SQTOV0o35%2FOyL6iFUZkMi1UY%2BggCXWJSDFI5LPvFTYrsHhi9%2FG%2FMELMQuFpLW%2Fj4I5g%2BSQU9h3tLO2PPHJ0Ay16uduXCMW0thW9wodYWJdKc6AC4JTz1pil%2Frhvz%2FmyZ%2BzqaIAEMWu46hi5ZK&X-Amz-Signature=b9b5bf173d86afefd8d7e9dba525100dc9601696085f84238da3b2a86d79b5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
layout: post
title: "코딩애플JS Part1-18 constructor"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### constructor


: object 자료 복사 기계


```javascript
function 기계 (){
	this.name = 'Kim';
	this.age = 15;
}
```


기계로부터 새로운 오브젝트 뽑아내는 방법


```javascript
let 학생1 = new 기계();
```


오브젝트에 함수 넣기


```javascript
let 학생1 = {
	sayHi(){
		console.log('안녕하세요' + this.name + ' 입니다')
	}
}
```


```javascript
let 학생1 = {
	sayHi = function(){
		console.log('안녕하세요' + this.name + ' 입니다')
	}
}
```


![codingapple.com_course-status__%288%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/612a435f-324e-4dc4-bbcd-a7004212737d/codingapple.com_course-status__%288%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF3EQZ2%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD2fQGJEJuv7yXZSsTdZ0LTOuoJ2eRcrKJfnmJyHae%2FpgIhAOx6QQw%2Fq6Biinql9PjpeqjoyWNkX5km0rFXRaOFKiKmKv8DCDsQABoMNjM3NDIzMTgzODA1Igwu2KtFJgb2kgP79l4q3AMVkRHrZPOHz9BqBvLd%2BkJeVVU2FtwS9fz6v0d9iw11c7gJwMEqh%2FrTL83ANoPCCPei10Liw76glJ5zfY%2FDaqm9T%2BovxpntK7wXfNPVvm058%2F9%2B4LlvpMsFV2gy6bx7n41%2FmCw3CMQ2Lbz8Sl9pbvk0D3q7ldt%2BtYa4k%2FlZJJslMG2%2BMFaosSB%2FOCxokoQFpQLSZqgktkEKWEiEXoYuvW7E73WKhNlwmNcogdh%2F7zLCsTzlAUEPcttHoJT9Bz0vhVjY0li57eilDPSzqNYxVZRa%2FiQxjmVRF7SewVcc%2FA5rklw%2BzLBKTXAGMuPlPZ5Hvkxnhwko2yvstX%2BYXJHwczSThC6HgbJ%2BqRItum%2FsKA1dtKrP%2B6Z2Yz2xNmmCIdk%2FWpW2UUKQ3U9xXY%2F81RhY4TGKqzbtGkrGm018ClWEZFtdUzNY6iRtYo3pAszx2eVWfRKw6R85nq4me9vT6N3UjT69MPgg5irtBasyCjeTkKN9lzgE%2FTlQzbHlYqmdwqghnabkQT8HOz1afAsUELw%2FCcJv3TG7Jr5MuTJt5MwmG4sTRu8V2bPpTFwlFUuWxtJisVQ6G%2FK8OMCo6i0n4Qu7SHL9futROFGxGKmNJ9EbC2crcxaQLaBkNM9112vOszCw%2B9zLBjqkAVeCYMP9jvCsaiMy1dEBcm0IpkXZXd7Y7yMZ9gK2T1s0AjyczDfQOBqfHwgOOkSeObsEGE%2F%2F5d%2BKLFdaej4DNaG%2BVhSKStWbkXmYJdb3tVJfqDWfJNbWAcZUbylp5bWS09gUT1CJM5R9o44NZn99mIJ%2BTBt7JE0QOWobWT%2BpMmEAfIgxmuYPoOyAzqp1zm3I1C2NxCAKQJS7stURFXXleg4R5tdg&X-Amz-Signature=a678c5ef88fbf26e084d96b5e670a63cb58ba0da6824f449ae7a34cc633235db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


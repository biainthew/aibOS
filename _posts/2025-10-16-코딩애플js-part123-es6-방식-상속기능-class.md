---
layout: post
title: "코딩애플JS Part1-23 ES6 방식 상속기능 class"
date: 2023-07-11
categories: [general]
tags: [Javascript/Jquery]
---


### constructor(오브젝트 뽑는 기계) 만들기


```javascript
class 부모 {
	constructor(){
		this.name = 'Kim';
	}
}

let 자식 = new 부모();
```


### 상속 가능한 함수 추가하기

1. 함수를 this.sayHi 이렇게 constructor 안에 추가하는 방법

```javascript
class 부모 {
	constructor(){
		this.name = 'Kim';
		this.sayHi = function(){
			console.log('Hi')
		}
	}
}

let 자식 = new 부모();
```

1. prototype 에 추가

```javascript
class 부모 {
	constructor(){
		this.name = 'Kim';
	}
	sayHi(){
			console.log('Hi')
	}
}

let 자식 = new 부모();
```


이렇게 하면 sayHi() 라고 썼을 때 부모의 prototype 에 있던 sayHi() 함수를 쓸 수 있음


아니면 부모.prototype.sayHi = function(){} 이렇게 해도 됨


### 참고 Object.getPrototypeOf()


이 함수 안에 오브젝트를 넣으면 부모 prototype 을 출력해줌


__proto__ 와 비슷한 역할을 함


![codingapple.com_course-status__%285%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/262c6b9a-c67c-484d-9780-e0a6c359d2a5/codingapple.com_course-status__%285%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VHSOIM%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFd1j43XoJvATVHj4zCs%2F91TYJrw5TDDUfBpSzD1GbXDAiEA5JY5ecvM9mBe91R%2FhvPQu4WT22Mh0KATTWUkeQ0HvMkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDjLwjHwS2Yoz%2FDmircAwLsQ1mkgatVMVU0NdC5f7GX4vdW1jLUdAwRybfavmYLV7oi8%2BbxlwqwKV1IeYfB6f2q7aqUrFX0ALZxYMSA%2FOe6IGFIM9bJdCrwBITdTb0u%2Bhb21waXles74DfKfhF7YFvZHjqoXkseD9GZ1lgE4VALXktQVPlgE0T4IMrw5Msq2%2Bg87BJoKdj2pxjR2V%2BDajWrjXMIdOnx5ZQ2C4TE6VyhY%2FeSGnb%2BJ8TnyHgsRUvJoizjLHVcjduMMateyfr5ABz8b4pvW9%2Fn8igxoZejJESXKV5TCIwI%2FhCNrqxsCGd9W8%2Bc6UtEGjPksvNVQ6wrCcHLmn%2Fw90AA72GmF%2FdY0DKwVHxJCiNNFgHWXxygoDLtNVt4eOPEzHZmuMHViRiA%2B%2F7kpssU4dIddOYFNq892BFcxyTic2l6pYdAR%2Fu1773Do6Nt5Gp%2FHBGvxkJz%2BlcAasP%2BlzfcX2sp6aQd1hZhhDwljE6azcSZy%2FXWVc2lsBY3BjQ6TwWNl6dYVcd3PmVDUBx4kKFGpjj9hX57h8o5HspQ7l9OLpFz8lDbnZ9R%2BakXdPhEu7Fj1MTKwol6q3fuVBBZEnOUovktbbMOHF%2B2zP94xQ3wwkuclOaPhaHFIY0%2Fa5m2JgxKao6hyJNcMKnY3MsGOqUBBBTb5kAVjanOT9tBjpIXBH4a0Kn4uFcNkKCpP9QaB6Xr6ayONt8UP9qXyxc6zz6x8Uwt7WpUv0MNVI2u%2BCnQmbLW5PCGsQxEgDiIFOKw18AaDP2ZUZ7XmE355ZNRfRiJ9CWANRiU9FLr2mnaQePV3KGgdE2CRUmR4f7QNlQtANd%2B4uvOJXjBwfOINnHK3un2qjCy3oC7Uq%2F5wPkh5CPLbf8%2BXNeH&X-Amz-Signature=31e9a3ca2334e55ffe8a1d5f691612470a3be6fe2c458a5fadaffc0611e56f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


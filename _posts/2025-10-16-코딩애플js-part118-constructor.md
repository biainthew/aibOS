---
layout: post
title: "코딩애플JS Part1-18 constructor"
date: 2023-07-06
categories: [general]
tags: [Javascript/Jquery]
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


![codingapple.com_course-status__%288%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/612a435f-324e-4dc4-bbcd-a7004212737d/codingapple.com_course-status__%288%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J6I37T%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDdkpsMqcyq7CAPZ52pJA%2BNhBF5VZ9JYemjAadiMwAcKwIhAMa465%2B2yct6k6kFVTEuqM9c3UN4fQX2sFaMKK7xrFT3Kv8DCDoQABoMNjM3NDIzMTgzODA1IgwWksgouur84VwhreUq3ANDO7IHY5%2FchVW3pofC9dMNY5yMD%2BAnS7phrwvGOm864nY57VkkhNz0WuSUIkulhGNFbzlwQj3HcWlLa8PEMUnNVT7C2hpeCRJNfMHAe31Cv4GlT1eZWOgIgkpIA04F7naql882CFrFnkP8zQgaLrwuh7lTb4pLQqojzikCnG8eAq1eLWztYr1X25lKHYb7UKFtP3Su0kEVESXJYWzaeVD1nX%2FOojxaJDjszMYxIxp0YDsIoSRAYjz6Ks246wYJdwsg90oyl0e5hPu7djizk2GlcP4UJxt65bo7rZOfmO6f0FKYN3BQHMs8EBfwsRM5qVnD0ocv%2FGttLjRy37MVhIaMTblSsx8Lx%2BI33uwDZ06%2BR5IbzPjVYWWadJzbh6mGUmnNOJhcwRiaYLR1NNQNMnkl6sY7hZRWbDU7J0wcN63lY04diFNBlSMTN7ytFpMf6LzdnGxjRPkuI3cjZ6LblPfiTI4dBOvvH9oa1XTf9xt9kQ6ZM2PYmJZQqUxmPFVOh%2BDg%2Bw0NdLnuJspvnPC8Y5zKfgiZDpT3IGiMqiEqp9GkilLczMaYYpCpb8LAF2%2FiQi9%2B1aDO8QAO0YzqGrKmkfmqsQg9RhQx9PYcI3EuN%2FqWUC%2FrNFrJE5l93Ma5vzCo2dzLBjqkAbbiqdQxVAq5QOzdnkoDqnY4NvEXdxn4kuCaUc8i8HAI4tyz%2BjoVlQtm7s7viYe8FawA6BpVKOfYzNZdP8BPu7sIe3H0fsjB5XmNxo1vBi1svLvKH0NSPkqX7mGoBcUUkE9ME0%2FaOO9usc67pvCMduT%2BBa6%2FVNKM7iS3b2s8W8%2BpU7BooT6Uz%2FUs0b5emzxg37Sdd%2FZ8RgKnsgB47DOHetwzxf4%2F&X-Amz-Signature=1ac188911745ea59157786cbdb466a25460bf2911edbe62aa09d87cd1b25afdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


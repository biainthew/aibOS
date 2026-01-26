---
layout: post
title: "Accordion menu"
date: 2022-12-02
categories: [general]
tags: [Javascript/Jquery]
---


```javascript
const btnCollapse=document.getElementById('btn-collapse');
const question=document.getElementsByClassName('panel-question');
const heading=document.getElementsByClassName('panel-heading');
const answer=document. getElementsByClassName('panel-body');

//활성화 된 heading 에만 active class 주기
for(i=0;i<heading.length;i++){
	heading[i].addEventListener('click',function(e){ // i 번째 heading 에 클릭 하면
		for(j=0;j<question.length;j++){ //question 의 개수만큼 반복문 또 돌림
			question[j].classList.remove('active') //j 번째 question 에 클래스 일단 다 지움
			e.target.parentNode.classList.add('active') // event target 의 부모요소에 class active 추가
		}
	})
}
```


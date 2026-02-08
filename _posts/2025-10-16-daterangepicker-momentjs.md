---
layout: post
title: "Daterangepicker & moment.js"
date: 2024-01-30
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### Daterangepicker ?


: 기간 설정이 가능한 날짜 선택 라이브러리


### 사용법

1. 라이브러리 추가

{% raw %}
```javascript
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
```
{% endraw %}

1. 스크립트 추가

{% raw %}
```javascript
$('input').daterangepicker();
```
{% endraw %}

1. 옵션 추가

{% raw %}
```javascript
$('#currentDate').daterangepicker({
        "locale" : {
            "format" : "YYYY/MM/DD",
            "seperator" : " . ",
            "applyLabel": "확인",
            "cancelLabel": "취소",
            "daysOfWeek": [
                "일",
                "월",
                "화",
                "수",
                "목",
                "금",
                "토"
            ],
            "monthNames": [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월"
            ],
        },
				//선택 가능한 최대 기간 설정
        "maxSpan" : {
            "days" : 90
        },
        "applyButtonClasses": "btn-p",
        "cancelButtonClasses": "btn-g",
				//시작 날짜
        "startDate": moment().day(-7),
				//끝 날짜
        "endDate": moment(),
				//최대 날짜
        "maxDate" : moment()
    });
```
{% endraw %}


> 💡 **moment.js ?  
> :** 날짜를 쉽게 가져올 수 있게 해주는 라이브러리  
>   
> **<예시>**  
> - **오늘** : moment()  
> - **n일 전** : moment().day(-n)


---
layout: post
title: "코딩애플JS Part1-5 arrow function"
date: 2023-06-30
categories: [general]
tags: [Javascript/Jquery]
---


## Arrow function 을 쓰는 이유


### 1. 함수 본연의 기능(입출력 기능) 을 잘 표현하는 문법임


> 💡 **프로그래밍 할 때 function 문법을 사용하는 이유**  
> 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용 할 때)  
> 2. 입출력 기능을 만들 때


### 2. 소괄호 생략 가능


파라미터가 하나일 때


### 3. 중괄호와 return 생략 가능


중괄호 안에 return 한 줄 뿐이라면


---


### arrow function 쓰면 내부에서 this 값을 쓸 때 밖에 있던 this 값을 그대로 사용


**쓰는 핵심 이유**


일반 function 과 용도가 완전히 같지는 않기 때문에 일반 function 을 항상 대체할 수 있는 문법은 아님 주의하기


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BHJBQZR%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCMGNdBKxmOXtoO1b9BJkoDKjRoCdyBoWhTJ9jHpttyagIhAJr7LNhzym8fCYGjDJgsd1Co59iWiag7rFsFlgE16Jg8KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyABlhPsyliDaB0Dc8q3AP%2Fgsg5bR%2Br%2BwlUmcEADlU%2BfP73K7TBy%2BuwnCOIJTya1aOLNIWnC0O4Oe7f%2Fc0W08Cz4i1Q68e%2Bv0ly5dZ2ZaItw%2FogmJb9Gyl6fy64k4%2FtSaxEJsaOIggl3Xn4u4f9P2cTx%2BzQ0vkKQBhg4uDjhkdDl%2B0RWKPZ%2Fk1e5B%2BXVQDE%2BU87N%2B1CXptqJGPTY%2FtIJZPlWdgjs3j2vt8TBXOUn%2BSx48eXnIcrQZvEFnfp6l6XKAvqQJMvXVdgfxK1kqDnDjZR3hj7kG12zZ52KA9APLMmXoeswCvvEjR6u9ZFX9%2BUdpn00QhjzzTP9u5ZLu%2BPRrBEOIRJDYYg2pjIUWcinX8UtzGOAkFM1PbuDYrGf47DaREzUGnv255dlg4VemkjFz%2B32Kgs96q80UhLgZyhRfnadl8tghhIQFqINVf%2BA6qygZASlPNsPGq5EZWtEjzUO9VJ7cAGUXz8vSlGyz32YDWPCvvzUcj%2F2UIXu%2FjqMcVW%2F4R3%2BJwTpxMEqVDuODkikOpBHJfjtKSIKwxigDeEmYbmdl939kCCNJctgzzyDwMQDG45b9YToSe5A3JSXGCzwrvfUsxfjyGv8F06l9Pz8dFD4IwMm1wz%2Bgipq8p3DRQN335PrK3Y2qUrpYjWwzDn%2B5DLBjqkAXWKxCXLPqedqMv%2ByGMLwH1%2FycGeYpyeARxkR5V%2FqMTc7Y0OoAGRJhsGieLunJ%2FxOYmLAbLr7fiBFc5LpcUO7Prw0Au6BH478vFTljgy5a9HGEHatEef4BEo3vag%2BXxgJ3Y8OMlH%2Fwb6h5OKlTPE4qxB3MOZtvYTgRYMvKhtNXxxP%2F1G5wCwA43pKYULPvAWgzoFZKim3TQh3idBYYLOTbW7pSvX&X-Amz-Signature=0eb2b1e502a8e859643a318c1db930eb8a61a028d04b9cf772b11eeb134bea14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


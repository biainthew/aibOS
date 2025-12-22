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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BL7CK3O%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDv2BjJeXIsGTgIg5WSlk%2FrBkm4m42YP7qg9%2FJ%2FWkKbuAiAiVjYOm%2FqJVoPv5NcoDgejjy1ewDYFY1kGv7JqEYBreyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPxhLxyev5cffNC4hKtwD0DHmIbcCOd%2B1zFbAjVJisNgmBkcV4FbyXKTzYdR5qx2CkrUedIC%2Fn5Jn5bVy7ourkv6QfdHRBdS9M2IIPOPFPu1rfjVdxbqCrnkaGUPKymu%2FtXEDwxACrpxo5GePbLuoLNhdj0kexdEv70RPSNIOW03HKogN8m7nrzF752m4KoZM7ETZEKxxZHLZSqkL2dhcNysPFzhZPPwLg2DCsj8h1huHOHh5hxWCO2%2Bqv9pwgsLR3ZHZk7HXKbnPIca4xLFjp1oS0J8VLMjNRFZaMUpttYxm5gRcGlq9JsSfIm%2Bu86fF40N5sQeewmQTtIUg2x05yh2c2NTXlZzZtGtI%2FnkNjwhFIlataZFRSz1UMaYu6%2FOOkT8NgwRs0UyJp0gJU0oxIkPyjGocoPlQJb4bGi%2BKKaAEVFAP9%2FmVfFK3fwmm6%2FQSNprJbtbjbxHGzCzjiovDAsIJhoIK%2Bq5aO2TekZida8nCMXyuULcFQkq54W0wX1nz%2BGyrGxjcspKkInXqO6PoDBsqxrM%2By0YCtX6XzmJBrWwHkpSr2nd4ihfC14M%2F4lsmmEsfHOt54MsrOz60z7oZk9uKYp0QEDzfEpkSY5SI%2FWrI0nvDHBekflrZTritrcYWrxasd%2FJWSxYHRPQw9JWkygY6pgHfwn4J%2Bl7b4pJ93ENo6I%2Fn4kfYVyQpN4povBpmJ03x66D7GLT%2FZLvA9IFjBkk8A7PwTDup2Znk0BqYYL6bfXF7dGrWAGZJJrb1w0fp019t8Y0LohcnAvrnbGQ%2B7x9I1O73%2FVnKqhlniro6TuUtM39KSoCztxnRSWQrwU2f%2Fytxya%2FEMz4YdUYJMhAwnxmz2HSYkJ%2BN5Fc%2Fe%2BwLljyjf4Y%2FgVrdQPz5&X-Amz-Signature=71eaad2053f4d9786d6600375e7e5e5e892cafda9147a0ccdb334b3c450ace71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


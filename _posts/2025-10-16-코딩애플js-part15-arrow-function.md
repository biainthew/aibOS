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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VHSOIM%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFd1j43XoJvATVHj4zCs%2F91TYJrw5TDDUfBpSzD1GbXDAiEA5JY5ecvM9mBe91R%2FhvPQu4WT22Mh0KATTWUkeQ0HvMkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDjLwjHwS2Yoz%2FDmircAwLsQ1mkgatVMVU0NdC5f7GX4vdW1jLUdAwRybfavmYLV7oi8%2BbxlwqwKV1IeYfB6f2q7aqUrFX0ALZxYMSA%2FOe6IGFIM9bJdCrwBITdTb0u%2Bhb21waXles74DfKfhF7YFvZHjqoXkseD9GZ1lgE4VALXktQVPlgE0T4IMrw5Msq2%2Bg87BJoKdj2pxjR2V%2BDajWrjXMIdOnx5ZQ2C4TE6VyhY%2FeSGnb%2BJ8TnyHgsRUvJoizjLHVcjduMMateyfr5ABz8b4pvW9%2Fn8igxoZejJESXKV5TCIwI%2FhCNrqxsCGd9W8%2Bc6UtEGjPksvNVQ6wrCcHLmn%2Fw90AA72GmF%2FdY0DKwVHxJCiNNFgHWXxygoDLtNVt4eOPEzHZmuMHViRiA%2B%2F7kpssU4dIddOYFNq892BFcxyTic2l6pYdAR%2Fu1773Do6Nt5Gp%2FHBGvxkJz%2BlcAasP%2BlzfcX2sp6aQd1hZhhDwljE6azcSZy%2FXWVc2lsBY3BjQ6TwWNl6dYVcd3PmVDUBx4kKFGpjj9hX57h8o5HspQ7l9OLpFz8lDbnZ9R%2BakXdPhEu7Fj1MTKwol6q3fuVBBZEnOUovktbbMOHF%2B2zP94xQ3wwkuclOaPhaHFIY0%2Fa5m2JgxKao6hyJNcMKnY3MsGOqUBBBTb5kAVjanOT9tBjpIXBH4a0Kn4uFcNkKCpP9QaB6Xr6ayONt8UP9qXyxc6zz6x8Uwt7WpUv0MNVI2u%2BCnQmbLW5PCGsQxEgDiIFOKw18AaDP2ZUZ7XmE355ZNRfRiJ9CWANRiU9FLr2mnaQePV3KGgdE2CRUmR4f7QNlQtANd%2B4uvOJXjBwfOINnHK3un2qjCy3oC7Uq%2F5wPkh5CPLbf8%2BXNeH&X-Amz-Signature=5d821a234d92d64fa3648ff23212118ce354cde3e1f756ff2b5e9cc44450492f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


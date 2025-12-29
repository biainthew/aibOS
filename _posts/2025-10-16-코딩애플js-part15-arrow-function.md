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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S7BW6GM%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsNto3rd6f9C0RH5pJTjA9Bw0gKtqKRMI5JUTHKtM31gIhAK8hXoA6EqU9J740kEHhBbZF2Zl%2Fn%2BbjdBbRfayuJS1qKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCr%2FFJ1dzziYqa8Scq3AOxIGpBPoLjGTf2%2BnN2GbqNwMJ8iOoBCpeyvYpjo0QlAmUvnCrqxLcPp1IHtLrieKLJFJG9QeMdnqRbM48isbtYW3FCXkcpzzJPIMFm8X9hSceDTXfpd%2BTlqr8PwbB5e8DML9nU6Tv8ZePEsfw%2Fuaz%2F4St3Jc48T3Tpq5yWD6x8xD2jPyKAYLtGp4DDAi%2BBZGNg7VCpiEJ7EBt6GqR%2BWaGcb2zAm9DxndJ142DtgcBYH%2FsEdIuK4sT88tTWjaFX0x%2BffGY2UNtHoP4HCdDD9w9yr%2B7W5TD3S%2BgLSU3cD54gU3kkBXNaDD5Y2wB%2B%2BAFC4S8VatR5DWatZu23%2FiJ%2BmMgaux7LgFOvy4ONxo%2BgqMPSj%2B6K2PfqgdrFZa0Z6vGEAgrXtSdIfc0CeIEl7VkBISfilx2ySEDw5oLYfsrTBG1RBxVzS0dAhw3PEbPsMTfq5QDNIuCJRHdBQpWHxabFzD7o1JzweVvsGzqkqavLf30LhAosW8sEUoNtrT%2Fgda69UzFUbCwx0js4NyW5Kr2ovq88o3GatM9PbQOQqvANIkjEBvlGUFw0SlGmAzzJLHJeux2S3kdYXkC%2FALmwN7D6R1kv2IPeJAZlVOHLyJAjr2RFbooHEOoOAOuq3rDXTDCcpcfKBjqkARmVSZK%2BZkmFtuDZl6bsEqHr%2B1Qs%2BFyD84oPMX5s%2FHuBTiOPju00nVg7lQMDCxDWdtCaOHdp1moO5mZ07T3nFmfGc8OMF6zLuCVo%2FPxwfEnlihXVsfUdmucW84LV0gzW2%2FvQ%2B5kkKEFH5B0KGLdVt8A4UIZe5%2BMlun2UnslOkCklhPnQtI5NoQ8P3%2FUDW4LNGf7sst%2BFHgekFecNPh9B57r%2FfCxu&X-Amz-Signature=7e9cba219e3b9622c4b173a12c04e725d1f04523c59410689a3b8556272ce857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
layout: post
title: "Synchronous & Asynchronous"
date: 2023-01-09
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



# _**Synchronous 동기식**_


: 현재 작업의 응답이 끝남과 동시에 다음 작업이 요청됨


: 함수를 호출하는 곳에서 호출되는 함수가 결과를 반환할 때까지 기다림


: 작업 완료 여부를 계속해서 확인함


# _As__**ynchronous 동기식**_


: 현재 작업의 응답이 끝나지 않은 상태에서 다음 작업이 요청됨


: 함수를 호출하는 곳에서 결과를 기다리지 않고, 다른 함수(callback)에서 결과를 기다림


: 작업 완료 여부를 확인하지 않음


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.13.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cdb55bed-8594-453f-81ff-03d1038811b8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.13.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HKZIGQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCWv68mcCW%2FvPVGsdwsmUhJ2T1MIXbW3xImQ17eSWx0hgIhANwJ7a4lAkKYmjJe44oVkAmUM5mhfuz34KKKhONT%2Bt3bKv8DCDsQABoMNjM3NDIzMTgzODA1Igy78%2FowvfsyzsH%2F4ecq3AM%2FnawsBqZYA%2BLhIPg96rNPI1OZSCGULufZZq0udXx%2BtaJMIgYa%2Bcwa1jjRmsjaqI%2BWKVgOq80Mv45%2F%2BHLqUb39M30iwgTbOlAeTz04cV0EXUB%2BGxVypNDPKg%2BFQ%2Bte5m6bMKl%2BUWh3Tm6JtptWDmIJ99EVgPH0l6BGaGtWnhl5AXKHccafOjetKdDc52%2BafoRSUJGD1q7MsSi4d8MQu6OjDDO5LhJN4mXNiyGS8sQQS5soHD5UueeBF8ej9oTx9Du%2FTUizzCY2d7otIhL1RNtcjfuFkixfBspcOx2wP0QQe5uHkntfVBhCL38myZQztizzbGJCK8G1IE0%2BKFyUcCkjwP4Qdmx6uR1Gw7MLF6TFA1jVFLbbVfFr2ZRo1OmB1IuXOYyDCgDB4fdOAb66G0wNMsLNo7fF%2FYTWaM3JZVqPiZEzGYe6I8QGRPetbdjX9fOQzSeezJWg31Y6IAcOZr3HatZZkjBEPuapH4vkDNmkuSWtLHbdEV4oNQc3uSWl%2BQ6pwdGPIjaXw9OHvjl9WPMVFDbf3JpCB5GYJQkJAo%2Beyl9do97NJd2JwWB8RaaMAevMtdAZF54DfYIgv7JNrX5vzVPpRrcHYEsxcgnosrYgid7ZlEURI%2Bux09RAJjCQ%2B9zLBjqkAUCbEy7b8QX5chbs%2BI7nnUeot8RRu2o2NidOTW%2F%2BeRcZZkmtESWfHvA%2FIylhrSeXbCLvBmVlPr1smanUgwpOx%2BmD8aGMbJiUm8b8rOY5EslE%2BvvlzvUkSgIz6XgjA5eunD3ODbALuEQuokyHE5cbnqZ7zAmQq4UR4N6mru8QnqwozYdKG%2BYGPEioYFIP0wx4jTAxgipYCTQpUKxceAPCZmUFSbHZ&X-Amz-Signature=54da34a6dd830254c3ecbd76b88a837ec1c2bde9891402576866b3b4a5e88937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👉🏻 시간 절약 효과가 있음


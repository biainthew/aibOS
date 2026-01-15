---
layout: post
title: "form vs AJAX"
date: 2024-10-31
categories: [general]
tags: [Javascript/Jquery]
---


## form


### 특징

1. HTML `form` 태그를 사용해 데이터를 전송
2. 주로 POST 또는 GET 방식으로 서버에 요청을 보냄
3. 페이지가 리프레시되거나 서버에서 지정한 페이지로 이동하면서 서버와의 통신이 이루어짐

### 장점

1. form 태그 내에서 입력 필드를 설정하고 submit 버튼을 누르면 서버로 전송된다 HTML 기본 기능으로 추가적인 자바스크립트 코드 없이 쉽게 구현 할 수 있다
2. GET 방식으로 데이터를 전송할 때 URL에 파라미터가 포함되므로 검색 엔진 최적화(SEO) 에 유리할 수 있다
3. 파일 업로드 시에는 `enctype=”multipart/form-data”` 를 통해 파일 데이터를 쉽게 전송할 수 있다

### 단점

1. 요청이 처리되는 동안 사용자는 전체 페이지가 새로고침 되거나 이동하는 것을 경험한다
2. 화면 일부만 업데이트 할 수 없어 간단한 데이터 전송에도 페이지 전체가 갱신된다

### 예시


```java
<form action="/submit" method="POST">
    <input type="text" name="username" />
    <input type="password" name="password" />
    <button type="submit">Submit</button>
</form>
```


## AJAX


### 특징

1. 자바스크립트를 통해 서버와 비동기적으로 데이터를 주고받는다
2. 페이지 리프레시 없이 서버에 요청을 보내고 응답을 받아 처리할 수있다
3. `XMLHttpRequest` 또는 `Fetch API`를 사용하며 jQuery의 `$.ajax()` 메서드도 자주 사용된다

### 장점

1. 전체 페이지가 아닌 특정 부분만 업데이트 할 수 있어 사용자 경험이 향상된다
2. 서버로부터 필요한 데이터만 요청하고 받아오기 때문에 데이터 전송 시 화면이 유지되고 빠르게 반응할 수 있다
3. JSON, XML, HTML 등 다양한 형식으로 데이터를 주고받을 수 있어 유연한 개발이 가능하다

### 단점

1. AJAX를 설정하고 오류를 처리하는 추가적인 자바스크립트 코드가 필요함
2. 검색 엔진은 비동기 요청을 인식하지 못하기 때문에 컨텐츠가 비동기로 로드되면 검색 엔진에 노출되지 않을 수 있음
3. 비동기 요청은 클라이언트와 서버 간에 여러 번 발생할 수 있으므로 보안 토큰이나 인증 관리가 필요

### 비교


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/688c05eb-e6a1-4440-ad99-94fcd370c638/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBGF4Y6%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC8J1hfaCVBxNIQFZc8Ib7vxfd6TZ%2Bte5S2qMfzITasrAIgLp%2BoPfrDuodiajoOAcZsq8aN0xSf9GGhg3nYVVtUx6Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKgxf6KwZpH8IH%2BsNCrcA%2BZVZcaPcXNJuawl%2BFnHK3wEWlINF6Q%2FNNxL72vrmYysgTOOtakSj8pov3ZLNUV6Y2OEl9Kne6OBuMbvyAlI4MKS9uiDtu2ynaKV4uASZmSQpAICJbMrHTY0C622Zqv2sS1i%2F4cyK9zUvTGo%2FslVebZl0IsvPpzzrS9wTQ5EP%2BkRKSXT57%2B5W69WVUXuycfwGzuaYjd5dRhCF6t7pdKOnwsU6MZy%2BeSdfGJPqJgCWiXxCDPSAMXx%2FdQTj%2FnfbPbh3AvX15dJvWAqMp9uI09dOqf7cn%2BE0%2B8PTx0rLUj54DWaQzhwLm1PrqYQNrwS6V%2BkigitJhojDfDUJ%2F5%2BdGF1qebLbaMACcESuqWBMaA7T6e8sbREDUYgnESHrVjHAtnFmGYAGM%2FMKuw8lASLOknqo1m7FVgAXpTDS8U7S%2Fi7wzLXiSX2oH4aNKcWaPuNx%2BMnr1tnPVB8P%2BM4ugS7WLV9y81qwRQjYzWVQ2sz477ehVAuhPYX8Xv4QgvOLn4muEVa5DnoYDGsrVt7pfYXh99vnvtn%2BFdLr6XQzU3IyXpbxXSV%2FrsgvpYveB1pvc2LbCJvWI1HXNFd1WS3jNpAnniWG09q90mI1D1KEIF%2FLI0lLdTv7SSp7dH0OweUQ%2FLsMNDkoMsGOqUB%2BKSmnr76gi94f%2F0aT9ea7Y%2Bt1qb5S0WhvLDkr7wqpq8kLf%2FkRYIuRVVkQb0cgInAaliE39%2BsgDPBpGYOI%2FFoq6%2F5wUZo38qeuzhPM4FTrSNQXHp2hJbkoXzmNAdTv7nE02rEu2iKSRnT%2FO7vB0h%2BZbS6oDqqr9BUGEZi5%2FhyHP1gXtbNPIQqzaSMQcTrd%2Fb2PbX2waM2sV4TWn3ry522iNUr7fjP&X-Amz-Signature=c3e19158029dd210d5ddefd35e81bf962aeea016e0645628dcbe0215a74ab0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


요즘에는 AJAX 방식으로 대부분의 동적인 기능을 구현하고 기본적인 폼 제출이나 간단한 데이터 전송에는 form 방식을 사용하는 경우가 많다


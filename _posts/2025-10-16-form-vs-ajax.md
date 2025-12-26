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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/688c05eb-e6a1-4440-ad99-94fcd370c638/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSY4AOX%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ%2FPpa%2Btns4AkTLl%2FOGmyKzL8HRoC%2BiUIhkGLwadyjugIhAKPrsVaVx1J25YfiUYljPB%2F2sHZUncccCG8X5ibnWbXoKv8DCEUQABoMNjM3NDIzMTgzODA1Igzm72TTFFVXGDb6Hc4q3APRFv6iR3r72tElPNxOyOBch%2FVPM8jWzzpje1Fmi5zEpJbjqzPF189y9bvx0rby2%2BT1EBKjkboToc8YtE1FooIj9WHxeYIDQD801%2BdjdihLPkyftRrAdPl3sB%2BLJXOf7YJyLdT%2FNZvb8KZ6WDO4aqIJc5HH0Or%2ByEwTBvzCvv7C8GbXdvDbi%2FoBYAZsv9m3WBuh1DGuy2y%2F7D0dqiwDMfqnHXA2uxamORfmUQRNzvF4GbuFl2A3cWJ2Wvmd7ztgqHjbup6mNg0qRq9FW%2FX2j%2FfGC9jcz4DyLt7B35243K77m0LUgX%2BmDzTkqdM58uSC6Ng1%2FfNufUuoz40IY6nyXnKxwpDgf0eBT7w1fseIdg4Y8IS2McwXqAuWAnY9H2wgki49aZqdr8Y4JZoFpVDYejfnFuVtDh28TEGEFBoGh3zT71Rc2cHPLt9RzLM6IqA4NFYOmVYFT5A6p7vz7PHA6shJSusDuGuQ1kJ4aE08trdB%2FyHSoifLJJIPqjnkE%2B4KrL5ro2GEDjRbznBehTr9fEo%2FVWuJABwidnv6zPi4QlvW3zZ9GZP2mVkr2peczve5f2ZDng7pIoZpS647F91j44fZodHi%2B4qtnP319G%2FjFiiUMROHG%2FLp8NSsyefv7DC0sbbKBjqkAQEsM29juBiaIPJ8BlqNJQzDxGP6ui%2FgrYDw9wg8dPVpjkc35Oogg4otCZDR%2F2bwBKWO%2B6sKkcq%2BZmuXbkSXt%2FMMkITbccSLXn5rgBpfkil74F1mqV25pjeUVuchMGMV9zkKRoccLsYPAh72Aaih5cfhLnnGa5Iya4m3TQFXtWhcgU5SglZyTLsK%2B5dJhXfLy4bcdmmJDcm7f9b8lSuOxvYYo39d&X-Amz-Signature=6e6597dff33e25bd46d367d5d8d956181f79e71de199a2b2a4620ce57ce37705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


요즘에는 AJAX 방식으로 대부분의 동적인 기능을 구현하고 기본적인 폼 제출이나 간단한 데이터 전송에는 form 방식을 사용하는 경우가 많다


---
layout: post
title: "[Error]Http Https"
date: 2023-02-20
categories: [general]
tags: [Work]
---


[: 참고 문서](https://velog.io/@shin6949/HTTPS%EC%97%90%EC%84%9C-HTTP-%EC%9A%94%EC%B2%AD-%EB%B8%94%EB%9D%BD-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)


🦁 axios 로 api 받아와서 깃에 배포하려는데 http 라고 오류 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5JIQQD%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T011357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDI8zx1TGvDxB9VRykln%2F44KMGRQ7Uj%2FiCz23xfHbfzLgIhAKCbSeijYi2EOblmRVV6u%2Bbnpk9Qou6wuGKbTZdeDXmRKv8DCC0QABoMNjM3NDIzMTgzODA1IgwxIEsmmPNnEofVEpsq3AO%2Bno6lMeMLFn0Hw7bHc8cEaBW%2FFBRWlX6QLZaaZ0rccIES61SksGu29ASgrW1lBh593eO%2FvQneF7mn1VALFWPCN3PIv8fI8LMlgnRZnND78fvy16BrQQPuGAkHheeXzXjj71tcpuwqY7bg1xvJX8G3xSqsyCihvQk653uRNN0uz0E%2B8uxat4WNYBCUjEHH99Jqnq4%2FOmSWWlHkYqm6snPwwgaEl1%2Bf9pIoI0iadahup3%2FG8HEfPlVEwz54nTHB5ns9v3WRqcXHfKX5HvUM7ohle9K6hKo4yr1DwkAj03aGmH9GDhRXmrHmp51U%2FtEZctFBhKXU4DQVbP6wRYeloE%2FGqVykTMvDlSw0q1A0B2M0mIDRbpdabhgI1tWpLj7d6KhtXp47CI2mAbpA%2FagNmwnD8a4aCgbFSKjJw4uv%2FSc8OMkeqAmcyVjZU8379FigcFoNe3TGLKbe1tKEAzRmSMCzcaBm6HgJF%2FXwv2qIWvBeRL0K9mTFu5eeoWqkc%2Bto6wx33bzFKwzFhiwfNzMZBhxE1XZasLTDf%2B8SuQaE%2BQ8bgQszrKkcYLME5Jm4GRbiSgO9s3kr7RGOEG9ssJ9yh39dBERuHWtNAJxYpCr6WchiZlYUsCy95ggBgsf0wTDWh7HKBjqkARqftKaMCUwigX%2F56fVTwBAkONcAXnDRj6TYdu2AhpwNaxD%2B1FBk9%2FLpJxoYYLsnDqc5h3QX3fqAXQCEZloaDD%2BTmfwbaIoVRdCWU7GSDF%2FYnOqplmmn7iAQEWAE%2FOKIFGuaGBxcSgLNwwPouvXJOsDfSRF7YJfWIup5VbXCL9%2BLiOWuiaVHivS6jFOFp5jRo3sCpbSbiOFdOChe83JLJ%2FQjiU2B&X-Amz-Signature=006fd8c5fb74ba2af7be180ff657b24611c10fec7eefed9806219f7e622a4d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


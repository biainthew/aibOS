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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2ID3SP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCFoSrPc395LmJ6bH9L2dc9MhUvyIzknlLZbxLaAgy2%2BQIhAJGoNkO5QvuImsgD%2FoRAtHvYrLu0suSTGtQGqjjj3Af3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsxIY%2FSqtK7GKrFLEq3ANMj7y6S%2BtvZxchMhO8rJk049MEGIuqziD7t20l%2FDnra79S8lWDwPubzga0F9pNkQzo4wciVbqSPaQEncScUqagNI99RAOf6i5hVuVkzHBJBPsW2x8N1Mtb%2B4hC%2BruNUqlr673aZsAh%2FBsYpQrZophinFoq%2F7hOo3AV3uSOrewTY%2FUpF4zlR2cYsVHhEwtXT7kEUJlZsE8Dpeb6KvZ1ydjVa2J7Y6XSvSmOh%2FUTDh1%2F2yWpLk3oonpfyK%2F7Lni8R46mAZsecdeDosDl5%2B%2Fkhdx7FNjtoyMciH16Q%2FswqtkFBpGW6jjxjvfUaoX1C9a7qllRPnwmHzmUiG4s6Tvtd4pzP3LXVe5EpNtNuyeWFwSDqhjIFjEJaNTsLWZ0hd9Z0Zl2CBWSk%2FYtTHOYYlSUPZq%2FMhP9z7oC1ZIPk5IXZma1n4Ljw3eGNo2QkovWHwqrO3XM%2BQf3ds%2Bp3QvHxR9B22lCQOzFoBIZkMoyZLoLiYb0YsvAdtXpn2ZxLjYRsaRlUvcxEMJ8hjqxvhJiDgX%2BgteeMYF7MHBh%2FwieAR3hOi4rGeThfOt0A84zCURhpqhS9RI7xQuXkNlTa9VF3MLI010OVGB0f67eJzFAXP%2Fg%2B0%2Ft9Tiodpwt%2BdYgPysVNTD1laTKBjqkAVGaOSt5WNuurNDjvm7OKNfOXTQ%2FmLyttca2g9%2BWwz%2FyX1OX3Bhe6tJ3TKKE3ey20tQh8R4DRjdohcNnwxY114PW1rI4fIPStec6yUV1vNJ17WjESnGyONWBA6Pk6T9XNMDP44Iv6SBVn4mBlI1OgGjhh7x3ia74DpMlYEySQVEe9KlpHR6P3Qv55uQsn3%2FGjLnJkra7fYb3GXpMh1m%2FtrFCdJ9f&X-Amz-Signature=02a4b8a558aff01fa57804c0d0bbe93fba153c8af39acd7d57be9cea7c0bbe7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


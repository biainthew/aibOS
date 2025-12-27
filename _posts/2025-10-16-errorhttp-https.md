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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNJJNGM%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BFgOMO%2BS2Mrf%2FBKu6yR2wy2lYlt4Q3EzRbHrQxy1GAIgXPLbNo%2Fdra5ouRjppbP%2BXwH%2BtxTtCxehzLLHuW%2BrcWgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHS0hbB1y4ZQZOxypSrcA%2BGB3kLJSYDrBwstUCAzTpOEUh8S9DPavAYr4kKp8CknAO2V15a69mgQp5y0xSrmRFiwmDKr8S5GD0ONbWESs6sDq%2FtcITgMhzqFABfhvCM%2FxjrWb5WHigclDG2F%2F%2BDUH0PJwP6RRfpYz4OgXbFy%2BmDjihP9kIsZNgk4qz4%2F76HcjThZgrbxHYpIDasRa6AqDsO%2Botl3WvW2xEH%2BFHEuS%2FDTYhKxE7yXjRAR9nvVWWQ1mfd1OCz18VP4MteMEdDTRt713A70zEg6i%2FXaxBXy9Mx%2Fg5S%2Bq6JrJ2XVDtckIufTaMD99L4tEOmi7%2F8UndUhKXtr5ltH%2B29WddokR5ExD4aA0SRMrUW8BO3HSedn1mYkPbeLnrtljVf3xargcS%2BqU2u3kWC5r%2F6n1K1IOs%2BTJZxx2DcLES9VChCb7q8tDOfVmX516ir7hbXH%2BFLw8l1BtSBSkSA%2BvKzPGhSxOQ2cJSHc5YrpjgVFnODyfBnyZsKVnckSTH4F25kAV5ZQ9gKjsi8RSGBea4N%2FDkbai4K355p5H9VcfHCalNcpfCZ%2BkciVd7mjchaDoygsZADj1ALpHc980%2BWTu1wM2JzvEu%2FZ5BfTG7F3N6LWtMHLC6Yza%2B2wEKtwEKy9cxkmAtgNMK%2FOu8oGOqUBuNZptZyrJk6oEx7FwpLIp3M0oPglNP%2FTuXqsoQxIAbhsHCsnxcQ4r2uMie%2BgFjd2p8PUuw5xrEp6i%2FHI5VuZH9eUH60VQuPjWsOdumb2f9iXjWuay8RY5uGqIryp%2BXNf7LkMhK67smYmtGgjK%2BqqcauAOnfdgNgTOvjhDukGU9Nlp%2FUShO%2Bt5yJBXhtmHKDCQLU%2FVce0lzHyUHi6ebqMJCtOICWK&X-Amz-Signature=9f4a0f9c4ad19622b721c6715efa0b72e24c05e21ac83411845932048b5d51aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


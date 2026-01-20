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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cb4c69ab-1520-462c-9814-6642270aa25b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB44ZWB7%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T011603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOKRQxEwuyc2G1RE6Z%2BFpGBnlpNkHI9E4FxCuuZuvJAgIgIpSb%2FfmmlYQGlEPUugah90Thxy2i2sAjTvzQ31McGpsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCObB7l28kyVTTQR4CrcA3FLWlIDL7sWU%2Bqmyjb1hSFVTH9mcorQ4dd%2FJLAPngaYk%2FZOoSybNXXGwotMibslpHx459DSs%2BAJdvsCABsbBvNu87vHQJaFg3lAVgb%2FrmYqDOctG8Fn6jrurWR2BW1n4i8UFJJOI0Yz92VLSwchyI082kZwsinFx%2FhDTTx2eoqZsBRtgaGp2y13anBDRJSVwKu08rbIMr9SmH%2BId4AbNdzAeqPby9M%2Fmt5Mdp0jeFbv3gMKHbO%2FnjOZ9OkDn8IcuRsZy59l7bfR%2FU9kHcZpdIr0xF4F92vASTSB8P2mqQvvLtGthZiZo1t7fh7Le%2Fm%2BbM80muE5jSyiG7muITAgOedfc2m8iV5o0tPewuRCl7JutLx3Ti4%2FBT1VfclErMG0I0T0cG3%2BGzJYvYH8T6vciZ3%2BDeB2IDjF%2BSJn1iI6B1Gl9q1ume9HP8KzDKNLTAiZa32r7k6K%2Bug5AjTpd53w%2F9OeLcQ26qDaOA%2FKMdecg9wI%2B06MJqtMMzfY9U9VieQK%2B2HDFtTxBnChrYoYg2ML62B6My2exfrpkaUFJISM6eE%2FV3wWgp%2B0gN%2BSqexdA%2BPG%2BFcBt%2FqJKnFiLakEaHyIGipZ8qb%2BTO%2Bvn0B5dS1gXwmUEwW0QAR9bnWODL25MMb5ussGOqUBZQaiMf7SOT7nLRPj2MpVLcwb%2FBXR5v7Kcd9efVgmta4e1oEkrbCoRWiHIID42UdsLFizAEHWOx5mruojdV2KpGibRV9Pe1lfCRMsjzh64NtIXNLJ1KwuCqeXeBTkTKqIT8PzuKDO%2FR8UUFZ2Ch9UwfVxh6PXRllhyjOrrXYK1gk5KEAwYe88imcuUoLSF9T3cSvoz8tOl1FEot01m%2FjeKB9BruY7&X-Amz-Signature=07b1048efc2302154f3cd15c8eee0ae2c4c27928b23f43942e18b7fcb179f59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


https 보다 보안에 취약한 http 로는 연결해 줄 수 없다 이런 내용이라고 함


👇🏻 해결 방법


```javascript
.get('//api.kcisa.kr/openapi/service/rest/convergence2019/getConver11?serviceKey=51a64879-1354-44fe-a738-c8a05f7559d1&numOfRows=50')
```


api 앞부분의 http:// 를 그냥 //로 바꿔주면 끝 !


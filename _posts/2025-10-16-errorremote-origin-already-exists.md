---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
---


[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242PZSVD%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BU6rfTCg%2B2IZNY9HsJul9NE1pFw8nYp0eL8tUrYRrNAiEA%2BpkVC%2Fb1vpyxOWIH%2BABiRHXrk0vCiBHA3WSZ5qXZx68q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAR0dP1iksfj5ctNqyrcA5rp8yULbVoYuQttuF6TuhpiwSEEgAWYUzqNMa8OKF6zoWsLqukdkYb9Cr0evYfXzgODtlAYykqTXmgZ1FKzlBkWK5IxH%2FayfvnBevQmH7zBJJwq%2FTDoG4NBJr8A4eQkbPpRgm1tTCkvQXYFVBfIRotsnKjSvEl1g6Y5LcjCVd8L1Q0wRqJDHm5XqQMkGBwe2mjYjAVIazZ87T2lbriVEhyARpu98Fm%2Bh0ZaSh162VbrTXvsT9CggyAKEzAMI%2FcIg8o6pApakpBaV7xioBBpkDliMOvtoXK8K3P08p17dcAqaDzk7s4Q1OA40qJeRN1Z3lMMBgdXz7i5cMkmOPy8pIY4nVYijNKb2ZapjgbkxPkt6LOS3FoB6ElBjI2zpZUpaqMN%2BQjWq8pG7w5zdZ7sjQjIBhCpGDNXxs0TL8Zz%2FAzQq09eJcO0SIEyQKz6%2Fhz5nSA219h%2BMRgVFwCFXwBBYPSI%2BkIou7R6nSFZElm0baBIe99%2BeXiYDlgKkUhK4wj3XFi2d%2F52ki21lL0%2FdkUrrgkuBIWNdBqpatoRPakeVx%2FioR34veJnBTL1re41gZzUsfKQu8WHu%2BANPhLgqNwJO%2BPZiyeOWkGC5FvfSBOllPx4MRPfbEs8%2BNtlH01mMNLrwcoGOqUBe3EFkd1diHj46iKGbTQV3j5ZghwIf7%2FiISqnKuAcY2aQ9d3XNChBPERjrzf%2B%2BPCr6FwHOl2BDam2Vbab025QW0dRrttaAcV89cUUEXORNnR%2BNwxm6HzGyE2ph10o4etpZXHCTVBCWFFg%2Fo%2B%2Fz0lCG1iPRQeflcPbOaO2SF4vmmSbo%2BKU4ayGM1z9ZDBRjEdpXHnmh675Sf8CXb6Bf%2FGNP%2FSIXTLd&X-Amz-Signature=6eaefb96f06310ad7aa8a22d822be52b2cc3e8a6075a7d433110af6a894f6a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF3PNMA%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDu7cKIE5TlSRe65UFlMM6zjzY2CQitT3EHqBxiBGi7JQIgMlTc%2BqNrcksuiGLdTMYI79XvlggAMJmRVT06DxIk3qQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsLmCtl2aPkrBIxhircAy3ZqIuL0c4fzkHAiVLKz47Yosmck1G%2BwAVIaNb2im7eVqvl90BVmXlilNaM7j%2Fq4uToSsM58%2BvjSYIc5IMeaynDgLGnhMd51bIAD%2B9fJ5TERf%2BISYqkMF0U9DYnXS5uHjkjwesO3O70N8fNoAFu7fZSXojuIdGDDgnGck7mtppjpzb5b9%2BChiYmIIVNg5%2B5IzIDO7VOF76lvTJPkSyosM%2BZU%2FncIBQHEoepYX%2FrQQEVdvk1uVVrXJfJus1LBS%2Bu3W%2BkRl87Gj13hQe%2FCgoGhfyo046hjaEfsVtoBS0MJ%2FQks%2B78nC2CNkmZzsYsJJbLhPMDHhRF%2Fu8SO%2BJErv6YMsCaDQ59q06shwlsxM2XdAbPSxiJzRBlrHcZy5LbAnIkOHTVvVn9faIbJL9E5o6iZ9qQgxj%2BMAefRzq8Q%2B8yH5kmGln5EfhnFi%2FYbHI%2B%2FSweTnvkiVEHEuC0Rh54wT8kb0jCHSpe%2FUOA8sMnw8weg%2FWunXsExC3VmUOo4%2BHR6yAVk4N6f9zboLrUPXfeMBy9p91uYLgw1Ay3sCoA%2Bo%2FwOpWnl8pKJh7LEdYmhh9UE6cR2HY5mUugk%2Bk8PE%2BgmaeHmlJe98NV0tL1qgZFHmYSDu9ukh%2Fvm14OfjnJwPLnMPSVpMoGOqUBt8yVCjL0bdl5w0xeCEzAn1yvn%2B4Uijc6FytwMZ2uazIW3RVEpG4ehHBjys8m0gaKp0wCEe%2FzBKZjiNw48DhaqhoYI9iuogLe1eFGoI8dOvBMOBkQASL2hIYgjYFPU7%2B1ZL6lWit3482nCBM9bztRMl2VL0GEufXZcMeXXQw7vlUh43o1m6Ag6plK5vSSUEXm3wlfKQTnCh9wRFxGIWq6eppkiOtq&X-Amz-Signature=ddd39d118ab9a2c724c4cfacfdd3aca2cf9865d01ee0db5b5c2cb2bf72a6e299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


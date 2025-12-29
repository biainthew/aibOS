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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFMIGR7%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLEdJ8k6tTizv5NJI04ci8Jz0%2BfoHDsx%2FDvZ5PWQC5%2BAIhAIZ%2BSX02AScWoMWz%2BJeF4HFGlPbbRx2wCs9JX2PVdD8xKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZT0RuG6hakLlA52cq3ANAA%2Bj%2Foe3C0gCSgmSc1Imvm9eN3lB3A%2B%2FVuW57MtWg0GcBqQ9Ifp%2B3O%2BYHiGLa2P9B35SpRO3elUP3BVwjj3vIz7oWMipOa9%2BZ0tA3TaKYsyCnj9C7tymsUHqkUob4xIpU%2FgGYCpiD9NnncJF5iqlt44qKkLsSU%2BpzjCxq7IOTaymPg%2BaxrpKVG%2F8V8cLMVU2pTaIUSDBWyMpiOyTc9iT4tg90VpDDdNrIVNIHK%2FFz%2BOpwjIXPoiUogX%2FYWatVeVE2oGHMiDpZIse%2Bbd7GzcezaSf0qaX7AJQuWT2vUQDH0TdTQQdYZ4rwLjSubdvgLci0zOiSO2KAOzUizFNj8sFDR5EhSNnDAVS5PwVEolyK1n%2FKv21e%2FK0tK3N%2B1zBGTU%2Ftg9E%2B3I2ooctKb57%2FJwtarw9KluEsPG%2BpRas6kX9243zwtOaCnJgjqwJrZZYLCjNJjnPqTxTm%2FddbtErIwwy%2FoT1XODWQBGWj2tFZEUX01RxjlMnZob%2B8i3xwRjmvKpmiHBcgp6S8TPpLkS6DC3RPXC%2Fg6JY6KjqWUlDLMNaE4Oz2%2FDqj6SIr%2FGJ%2FE%2B3wPx0tYdd59up%2Bd%2BZ48Egr4RuFhdbmd%2F23Z%2FazDKIFfdUkTP3Je2dpho1JYP5bsjCcpcfKBjqkAXO178ceWo1QQls95i4qgSNSlkYxjEboogHkLrUhvDTuOJwZppkeVO5c0BWKDvoXyxfjOZd7EzNG6ypXCDeYGPb2BniuvkpfpuOA23TQxL2o1m7pwT%2FYMBMYSawTtbFGRnmmQA5kef93dyA%2B3mgH%2Bn395lojdiMIHcrRU868VGpDI7zym2jMYAa%2BSRI4Y1Vdv9ZB%2BcqFOcXfV7yGSfyZFEr25T6a&X-Amz-Signature=567fa04adccbd6ee653e96255a6bb362105f6a28f4468e956a0c8650c2889ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJLEI2H%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T092904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDx%2FeOW7%2FuSUK%2FpQ7KvExqZRqNk09P92zU0CPkw%2FAbnhwIgQ%2F75%2FxEt6eiEa7R6Xx4VTtolyUG4iGqdzadh2%2BRalEwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnr7MiqyBWrrirbSCrcA5bHd8OV9fYBzIL%2F5%2FQ%2Bx1j0Gt8Z9D6sxiZi3UTDauUEmviTtixavlEf3%2BxEyd3FkyzwEU8asIsj47StP%2FahkoAhoa%2FHaVcVrgvLr2d6QBEyaiOFpUL8RiAZNh6TAs6IbT8GPc0D4H5Q59DclZXSL1dY4peJ054tiVjl56ALbMOdIo%2BhbMySWV3v7P3lRYatYGRh0jD2ICxGl1qhh5Y0BFEKQDFAzKN8tg5xTMZhEP1KLpEXOlx2FTVov6Qqf%2FrIEa2LP5Dz6j6ziYA850NKlrhOwX2lNCh7Lbws5p9XZuIU1pZ0AiyuVUovd4lsEOoTZ7iSDWS0ALPMDz43pPGLSIYVhC2ucREg%2BYsS59NMVjMNjM6sdMmRKI%2FSQtjZHQdmSGffT0kpOhzquYPThUOXiJ7Doj85ItRlXtI%2FjEVhNbeRJ%2F42FR0SMW5vMnL8Y9zfvub3Ht%2FxG4D9wr%2FvLZP%2FZO2LQqX%2FdxOH0zPG2OjunA90Wmvn2rAFLaexClAeuSTb%2FaULogGRQ67sMzroappowvI51s4l%2FIMMsm%2BF6MRGyvGnvNBNvtT2MiGefx3HjnfQrRnhsnKoK%2FfY6YduufXDCNBsHfZMrmPG4ZxJQbK%2BFtc9b1MKLx8YWkNfCeyaMPSVpMoGOqUBKhZg3ZVT9gYm%2Bg9T%2BjnkZZD5fzTq2%2BCGVhS23M8W7TVZV4yP2bogAQ%2Bz7UGgRPBxnFWdxOhyU3LJjvFN5NEdKafsW79K8vK26ycQJnOnWpNZCFrDuaUkaXR8mGjxzsrbTuR2l4%2FfaY%2FJliEHyFk1jufUCxscfzzo2%2Bgi8zeLjFZ6sph0J1rojo9ey%2B%2BVxEczD3fiPdxb9cSm5EZxCM7v34CQryh2&X-Amz-Signature=93c2bcdb95c2d2d3c379ad7a8bee0371e44047085c69cd6568a1b850caca20ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


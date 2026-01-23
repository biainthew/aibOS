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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRHA4HF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIBhoY8LxeZ96%2FugX0Ti3rW8xMUXL8Zaf%2Bcf554Fytqu%2FAiEAulL6GSYlxrUYmP4TqIeBU26txKU8UVjLyPRiFDU6TqsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQZcvGiXZR1FHgQoyrcA%2FmgutE99OeyaFY%2BF870akwo%2F%2FqgKo43MoSw1FimH3ZEL4cbf277Lzf4S1uvv5RYJTurTawD7dNUj5CrkFVzOvLZXxbg6VdAB%2FWU0TC0X9RVuCl0g7zzu4O2Mx7wWmINl97cFgQUK3myNDwmTzexAob2h6mEXwyuIAoHh5lB94F%2FNMvyntqIcBCaFkIdfnU9gxtg6Zm3kJtPkjr2vgxaJmBjHMIgebodZrivnKelJF%2Bqb9pqaBmmu3wHEyq0qOu3FYkNPyJ7pq7vfFg639%2FcmSUccAJT%2BESHPdx2SQVjqki2ArT46oKN3Hkia633s4GXd5VXWkYrsgdl7g5sqCWBds%2B634nsn5wLjJp58JYBSW3Ks2wJZD1dqqI6oUyWqxplk9T8i1md44qxJT4Lcpaq30xv2U9E1y7h%2FX6oEXb1S%2FSjERvYJhrLhYOe1cDZNTKTSLa7FaFg5nWKf%2FMh96xT8D%2Fpy3unIQUdEg6i%2BABmhmErngElcM1PcMN7uHw0HYdfAiIzY7uJUYkJbI6HxfWkSrcipX0t4elhet19F6%2FpA1o5jrypEoIFPbZCDNXL%2FNWMm7ufnR0RP9jInZbOtEJGvZGhpl0zjd9jrm67NhV5bvcPFq1Pdfsfj2ebdUvEMPaPy8sGOqUBhpyee%2BfSOCL3J29hlqElIam9rseZl0v5YAAqMItERVZy5%2Beq8pjWVSin0FIz8UGbljCgFc6kUx%2Fa71HluWW%2FhyfrbOPOxPtugL9rmTEzlyPnFSVeM13H7wDSj9yWGnEtSCWOozAW4oG%2FH%2BofwAbP3B%2Fzu1%2FZIPjwrH9gQUvfzIpHYMo28V%2Bpt6f%2FTlTFdscpFpqDSuSAnvOJBEzpWWjIS0NxLpoM&X-Amz-Signature=c9a49afbfacde5e605a2e33279c72bc03601cfe6aadab136ba7cc76f20cacb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGMKXCEV%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T012417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4X4r%2BjZ7GY6%2F3HV%2FkBDvpV4m25i%2B3k5KuVyA95dNp2gIhALMUsvdHAtDkSAWi8o1uoDbcrr6eWHbVCmNaRfpyD4XAKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb6J%2FIL617HkNt1j8q3ANpUBzXZ6Gw4ZGQNQiIezUEHjAZLmslf7%2FtFyxNRekkO9zjR9cjomcUDMmV3ltOX3FMFf1La9gTCv4yJo0Klt4pIGqsTb1shXnVvgDAfv%2BMP6McWZ%2FfXpZYaoIDQnOk%2BLWPIMpVy65OvMhjtajbfZYjhOZy4w85t5kTOu7Wn1SemZmMx95bkW1oko6zae9HAaEVvipQcGm0FQ5%2ByHE3v92EelPl9gfrGEGaMn9jXJIcxLnp1wfxMvMY3oy9yKBIgDrsrxzkQ6uJz%2F%2F5gAI1BOOej8WwgWCKKrQl0mo41rN3PU2TDpUQvkpu%2FtALwNHZjO%2BKZ33iJpDLMpnPWY6CrQ98id331Q0KL%2FZ8YNeweSX7aLpNnG3DvSkPSCtgWhJ3vyH93xaN%2FVipWjAynlK6GjDNTQHIeU%2B7dX6G3yQu1Db7sFm1tphkfZNV405EvLOQhEwhST07JDkV9jow7Aid5bWHXNHeGRIlgxWN98TZNgWMQ622olhBusqUR2Yy6OGQskrL0nT%2FC9zDE%2B%2FTljLy4MvKZhUdNqoqlMPGpqZl7TMgrEE6th5hTLM1TYOdbKPuZa6RDOLA1OgFHjnhuu6aiJqTgiuq%2F4O1oh2k5HnlZftHhZrEL2SFSBjvuImUijDo4IrLBjqkAaf68dUESVOTBOyL6LE3gd%2F9rokwPRvWr5BuUOVPfEF6Qp0DfcMCcwJ0rF%2FvTBcfWRiBEFpPNh98rlyln%2FII%2BORIQD3QWGrtSW91JRgEQ9tVnDmhve9yveF8jHLn2HkN02AkiV4bfrT%2BcXACZzLgTPcTC1iF0XfbrA0XjgfwVmRWSPeDA0kzWgZ%2BCuCDcihLoU2jNSWSPMFaXiaMeSa9AqcAK6Vr&X-Amz-Signature=418837a5c42678ec5039d6147c6b2d38b5c04936bce5d0749710c963a3575b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


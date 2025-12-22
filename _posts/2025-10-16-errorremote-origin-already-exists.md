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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKMQKFS%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDCemIryPGi3VYK9LaJaMtXJTSslTplgWTfKgjNg808wAiEAnlTq9T0T7yCUs6VXPDqXTq5oJrlk3vgMXXeXr%2FhXRFcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPhPy%2Feui3uwpRTXSrcAwIxooIZXPoIHMy%2BlWawXj3McD4UxyUhzqL0v8dXIdqM8LJYrbjIFXBcDiCBY%2B86462AyEz6Vkc%2FYpRjCfog3Vakq7MaAkWEZI6YQgxdZA6RARgscn9Bejvdjx9u4toGiOgMYjZGSEghAgGVLP9XnsERj7LSG1lihngRtIREGT5%2FCCugMPi6uKEQWxoyfH3LFm%2BAJiT1ps9XieyETeEWXfbEOsz2EJnqUaPg5QifoxXWV7OsHM5hv2MDaGUo%2F57wLXq9DTc%2FZx5LL%2BBmsNg%2B3BSJF6EfM2oLtv2c%2BaOxPiBmJ928twYtlpqJngHelywQcf%2FhHwkiNlcUcI0rRj%2FdM9Yb56foA%2BpsulZamcaBMlNfSWWtNGFwgLlrZJA1rVgK7twUmUUftTV3xg1n2BjcLuytdzBPOXhUCqw3rh7vPD0eVIT57ir8KWsfGFOkTy%2BD3clb3SHyyCJ4p%2F6nnD0lvhpNMAg0mL%2BpgRCWme%2BOdutzWLeXlqvifPQmTt74vI2oQqm4KeaU34hiGNSAKdW3NQu1OyIXx6%2FmRU6l60sUZUCOu6ICySV%2FhSDNf8EqKc97%2F6GG%2BxwjUrU1%2BCmkr%2BUprfywkeN%2B%2FTu6IDd8LY9PoP%2B5OgJ2SoXcPDzjrWgJMNP5o8oGOqUBeYfMqsqyG%2FRBuwxrhpplnijchrbpPzBPjfolsrNnod3VLUAToX9YQgJmixHWaAzuWAcdhR65WDBboM%2F%2BJ%2Bgd0u3a0RZ24o5XmWdyrAIDE2gKvqZpgzrzBO79Bsjq3w5NKagPwsCbka6jg9HUhMF2RIqcMqdijsQ2%2B%2FdaKlEFy0jHVezAbE56sfFgyi7oULugFTbxDlxa9k9%2F9RfNE75GhK2KANXt&X-Amz-Signature=ffb55cc8cea4fa2f678bfbe5f51166a63e0c5065964f072d764d04c02e7a2d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


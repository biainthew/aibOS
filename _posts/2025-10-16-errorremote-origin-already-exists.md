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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAQVSXYB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T011254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKdI%2BAid4TvGmIN%2FOMJzBpm%2FZMksN5AyQTYeGk2kzEygIhAKtszBM578kUjvrJKU4QMccN8nvtWeyJJBuGi72x73UKKv8DCF0QABoMNjM3NDIzMTgzODA1Igxxpi9FlKF9JuBc%2FtYq3AOHe52i9fScbPQnJVJdDwDmlYmgdpLhd9yd%2BNIe7bxHaFfUpsMWb68XSZcRvGiXVOJJa%2B0w88IxzFP%2FhlLF52dHDEWiitgp8dt%2BPddKdpTx2GpKbpzwBmKOGC86dSuispVzp49gNohbrEYfW1b0iJwHrIlg05DEDwCzAFqQJrAL1NZ1Ru%2FRGUJzDsGAizhfOgO9QzO71q3Xci3%2FZA5SIjez76LwuFttrD2XvvNdSSvDruFZRlv3FACIcgIrHkicomLJLDONaXVnLa6a%2Bry%2BXETkWoUsD%2BJZ3QaZelf4929iWGeVsd34afLR8xmu3WjNwCpzeE4AS0U%2BkIjEn7K8n%2F8c4o76%2Bg7Yuyustsqz5PFqSAYJJ2iEOTIKF2xUZVbWN7Vnnaf3%2FpmDSrkJZthvXu3f0rEdQntQRae3chitaiTiXIuJWz66iOLjlWCRhQtdoWdX%2Bqo49VbkKRP07%2FNI9tZjQncs%2FarVGIahCNGRMojFY8fPCfZqBGStfM3ha2iiKIkQSEg%2FYWniVswcngZaLT2yNZifUGnkif4UBC7EqH8tRFV8b1u9O5A3mQzT7brJubwnLIR7yU%2FkFrsMogOHCT%2B1oTU%2F%2B0cyx6rjYh9h%2FQg4Rs%2BfehbYMdINSk98uzCByrvKBjqkAXloBwO76MqrRbpukQLzLa2ARZzjHJieHzEv8G2FfZJbWY2h4uhCgR08LmC7ZQ0dConasi9y14cDJUmI6E0Yc7Nm%2BJ3ywuIuJAcY0LrFnKIbslJ46FL9TWcDiJF4JFUhSCJDnebX2jAuRSShOwskLQ4RNIMCBfZKDJNcpXbOFUuR%2BUDJ%2Bue2qoR6tWgFt%2BaF1G3OsR7n8xVT7ReERd1Y5SjuOaTz&X-Amz-Signature=a99d4a590e390a7f7e20f3fd1805536f383ef44a8bcc771b0a99e4f7b174e6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


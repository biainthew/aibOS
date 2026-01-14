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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPEMFG6%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T012012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCLhUH49mX9FthZCaYeSDQV%2B1FEFPDN4E4l3I5EEBSU5AIhAN%2BpG9EJFGDRysqVVuk8JLTAnvVdhMlzSEAoujHpdAj3Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwjDpsShYsXwvNZnhQq3AM7E7oTvvjCSQxRktaA7Jnw2UtrNWAFmiUfXUb%2FAVwp3eoelIyW24MlvFAWouum7VzhBxhxzPYExKC2U7Q57YBTb%2B2ZP9BWxbvTpxH3GA2uQJfClyufhns%2FPIAVVXTf5rJ4jyI4CPfvQPJaqGqiV%2BQAr8XqmJyLj62Fl97fuEkN4d%2BokpI79xlna0bwiSh5I1tPdzwcdAJ%2FmKHndOgaAHHNJVp3EhRF46lcuEjz7jcjxRRD4XIpWv9M8DjqVA%2Be6O%2BGmaUw0L4jtwXgV%2FoQc0M%2F1ZZ0jbuy9mTPtnIc3J8zgoc0b2mQgu2ckowjFQ%2FD%2FvgR8jeg3B%2BBdzNr3exaCBgwOGOtmvaFTkcqDG3FG7%2BIG4QG8Iv6s2AaoM%2B0DAaZEvingab7rvznnTLZUBVsYXGsgF1Yw1Ps0%2FPCk5DpnoqxummLW9FNW4M8ZbGBQbNrbhVGj7ACyHUDB6LHB1VmJp78wQFjxdmIt0NPX%2BtOE6QcrEdydXFvp6Kb9eima0o%2BmqcxR%2FEtiWuoTMDPt8ODzifFBznoKiOWX1UgVT6skXGb2rFh20m%2BlXi7hHSS3hjP9PC8JNYBvatScy0d4KCkTBk%2FYlnQ%2FIt4%2FS9wXovjq6YZbjyT8ncxkTguUeICYTC90JvLBjqkAcNlagr5TBRfP2VUFExQK7r5foa3RuBxaoY7sEJR2GcImgvJobneJeNkDqO7ZeKUKG9V63ypJRv1cmVILi2BbAADfb4s41nW2Jj0iU5yavn%2BRZ81rQSvVXefd3tskBnr1M0ib9n3HVtTiKW1901QDQmMIAV38hxknuDy%2BiqS%2B1IpVaRhP%2Fz9bPY1LFhYhnmdn1gRoamECW0OaHnU%2BSwtFVzacHWi&X-Amz-Signature=5922d981f1b9ddc5cd892d4eb77ce34e590ab13873ba007145da2a43a1b48b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


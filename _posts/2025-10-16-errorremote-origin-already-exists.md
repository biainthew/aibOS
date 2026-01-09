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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GU4PQ4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0AP7mZ06eumkpQ4PUpAuV2VYuwYBHe9G0PESQfGe53QIhAMJRnQzImP5f2TYRpo%2FtMGLvvSJL26Xh5zUn7WAAqM6XKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FkqrKUEwughEETVEq3AM2dkxRcGE37Zcu%2FtLFL3RuZc6FtSlnY89kZQHseWF%2B3a1FlbbgETYVuJ6Q9ArLzBn6sZDTJqzz531MsBwexGElpmD6WODQE%2Bsd3fpy1uvrc2%2FRc%2Fns9Ftnw%2BklCTo7Bp5pVAQH8%2BR6hjHeDzsCr5UP6hQnffwVA2QQfc0jjKGYbILFUBPmVtLICiKirnYxZ0BFhkVtINhBv9XW0%2FcPgrMpa8HxQBAkW0DABezGar%2FfEOJ4TQu%2F1lio6Hs4TxcGsiw929MxLGilpNG8DVX8KcddH6Xvw%2BO4cLnPC5hy6NikhkrzitNYy%2Fu1JtcdBTy6jItUrvYfxLCij7FrFfy%2B5auZH1xpSi%2Fs259tiQ8%2FOBIgJ8aFwEpxvrD9XmikAYIExylYHhRvijBTFutLXhgiE88AjYMnGjKDlsUEpR%2FSg4FqAZt9WbCpz3CGsheh9ebSUbd5YyiOFR4Ux2G2oIRnSXoivd95rbKGpDUTAFmqlNW%2F%2FEEm2iY5nGprqbHfL%2FZGettSmL7mPj%2BaALOZj88ui1uZSx68vuHzq2SnjQP5mDtu%2FNwF6o%2BniZdNajPs1VSZRuOCqTNw8uoridLxfEa9ayyrETCQEBYtVg5l4Kd1LXKdPv2kVz2Arp4ae2XbtDDOpoHLBjqkAdURYNO8%2Bvk0GpyvVM9dEOoNcUrE9zisexHOUV1PHPRnmzue2AXFBKyB7%2BaNW973LZOxhZRL5VDEiITKPBo6dy3ubt6ZfGB17tZrFE5W3odpi3QqOdnfQIUB5BhFrXJmlGhucfnpQTQPosd%2BXetngHNjbID%2FMtlSYG457kH8chk1kz7OmwRDVGrxF%2BuU6qEmQIELzngf24T0DLSXZ%2BJ2jZT%2FWiaV&X-Amz-Signature=19e6d03594c64ba4a208ec3eabd4470c169e40493046fc841bfab146d73ebb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


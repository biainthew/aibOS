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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BHYRFL%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoc%2BDYzW7RrPyG2H9EoIxwymw8y2i4bSyZ6yI%2B8Lr6fAiBt9XdXgqE7qS4uF0w4wzQC1xA9ke3WRRyaQOu5ObutUyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMvvUaBya45iXyxpBMKtwDHUK1tqUVEmvBWpM3ui3QPJUH6kvuhnrXaZKLD054bI%2F8Ez6y3cJYAX5jH%2B0s3h%2B6cfmZgjQ%2FgqPybOX%2FvCWiZAqbfbTQp0eh2bvuhRd7%2BR892keCxWgxgC63l6OQir262blQDX7yrdHsinoKofvzJIt%2B9RU6kCSzoLXvYupYph2gEP1rYuY%2BuI%2BaImamMBBS7yDY4Xo9wotCH%2BIL4GByaVr660F%2BisA1Td%2F%2BzBqdGxUFWlIpiZGQQqKbzEnjob%2B%2F1IG7bOIlSk2gcjEqhnbNqlQFcGo7oGZO4AQKnSsKnilfGwbby5uV5ifRPA4Ozt6sBgGFyrnobJRPpImcnAy4QRw%2FOAW4E3wX0mS2Xx5LBRdFTHGLd%2B%2ByqKUTP7dgm3YX2WUHn8vHPwLjCVtviMj75lR82DGG3U4d%2B0d7g%2F%2FppdE5EwAD5GWsRTbqv0qh%2Bx9F2ro5DNPrOaEtk4G3EUZsccc0bi7VHFGU0W0r7j0aUEfPXABLyzScBQBWWbPxA7PZA47jVneRdU8GBzkyJ77Kdg8Ydul%2BwafR%2BnLARxrJZrW79%2BHX%2FtKSwNUDvygNhZDV0o8GsE4bciXPXe8wDqQ%2FrXBmG5o8Tb8pKPOSk%2BhYFljabZgYZFI85ZgM6bAwxqGwywY6pgEgJ9OvvO4ykUILclkixD4nxCE8AKWkp3FQvc6DLdotQHRgK2iIUf5eT2eW%2BYQ5ISZDMsfAnVJHfWRwqvVn3GsN7m%2FY2anvKzPZF%2FjF6pCtt7cjZ7RfomwuPy%2BmPLtBhiHH6GkBviaqgFhw0lUuIuxTQrhgmkySpdfHdfE3%2BV8gX0bYIYNfLPYteECGNUBzbECuyCcVNDZPbxrIUUnITLKqwCPR6cKX&X-Amz-Signature=d1647926f4e30096c67f6a73759dd8d447e76df8e838cf19d0eb1f2f870d7490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


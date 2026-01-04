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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHELC7R%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIAWwhEqDLPXwPO06mJwLKEnZoZHsZll%2FuwCFlkDNeKXjAiAbTVSTerGc6uUkytoH%2B0%2FiSWQYvIo0SOA8KhkWJoc8Yir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM%2F%2BNY4EaVlMkRDfZJKtwDV9B6MO3VvPxxQlarzLrr%2B%2Fvid%2FqZGsZ%2B%2Bg0IuPWJjpzyVusu6iCazJfcGV2jP2UkyXxBOE7kJQOYzea%2FLfSdasOu54Sse1PB6KAYPUqnmLjLx7I9UBgObGtYlcoEni2LBN4DlIqFNJT7H3%2Fs1faSd9t8%2BPlCHAD9YMLL3AF7D%2B%2FfGT5jWn%2BQYBhEA7pXqiF3psD1n5wog%2Bf9kKZ1oYOwHR%2FycPxxuGey73oY%2B%2F0yuNIiaFmd8vhxw8kq4d8lZkmIy%2BdTHVZ9xVuFaOVmYlRzRKnJKi46SJZjI%2BcgzdZoko0YyuBXNRcfclEH7T0pYThqJuq7w9b1llEHAOjT58cPsxFAFk4SWabtfRLt7EeMOcTbDSkYcIYi08QGDGXJpjc2ZNdVq8tjlpgjNP2mbKGt4rkeAKKPZIblpdE7s6cWoQIjU%2Bwt%2B5axqZOX38Rto2NyWoQlMg3w9UbDSmwi2Q3Nv4hAvlZuaF53TDX3j6Zcx5tXktadcykH2LYnMHKI88CqXJhuG9qB0U6vNU4df1phlcVaAybjtqrDOYxL4x90ZCWiFt8JH%2BHADneTwj1g6yRknuf8dyaLzNau6rpg78vOgyPr%2BAyq0k6m4DZs776RM%2F4ORBl5Dm2r54K21towgpPmygY6pgEnnGqWPpQRQl31w28aTwoQYmPfxy0WQTffB8bq2Wmucs0gFgShFzcDd%2BvZGLkrxbWPdUR%2FBdRmQEYewV%2FMyGz7%2Fa7%2BGyJVbT2eDa4WF7wyiD5DUG7nMCWTAm0XcGFXEWJsn1YA0a3aetWbB9zWX77Mavpjm3oCy6TQ0nV%2B5lH5AFTiCFVVNbQfUYsSKWExWeq%2FSmWi5cYS9AQjzgRDxahOPohWon53&X-Amz-Signature=81ef27a6b98d656e4b50e67ddeceaa69a6a103d0085bf384e0c5b413cfc8f590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


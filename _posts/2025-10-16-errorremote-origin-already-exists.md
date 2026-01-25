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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAIHJTO%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEXuYcxctamotEq97seRBF5G0mpGoPbAEZO40PjnZP5EAiEA%2BX2WtDlIIzS4lwOjJF%2FzWmpX3d0Z6%2BB6jHTQP1C1CRcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOpC8zcqGxABmqh57yrcA%2BzFiQvjTFtDjiq8zp4D9z1lXuwc7t2I8FNGV7Cz7u0oGxDGv9gUGrBRqGJPNQdFzDnb2jw3ZfUd1q9sChqX9OHHY2BbA%2FBdRSbLapSBaw2BJ18N84lqDiMR91Xdz97h0M2xmkpZg2YDwZAlnSX3%2BYJftzF1Y9y73B7b%2Fkpujor6YcQaE%2BOmdsgwQWj8zJQC0O1YYJ2B%2BnToEKU5EEpDGJJ6DIA3WTpt9LqudFRiFBhxd%2FEG2241l5pplVqlgv6lXBt6bG2g2NvRioOtx3Jq%2BO6hPKgHCdp1GzeWA9w6Sl93wL21e4bwJ7J8pWsYc9rF4eW8bv3RHJTzorCC9j2IWu4X0stOQlHBv9TyJ9yD1rQQDH2Aio5Br%2BvI22W6JaaQWRhfFm5AO7jMNXuPZ5SQCF5REBLzMUxDZl2fYmzXjTQx5Fvlb5rOU0xmIuNDaaYO39wRAeqbM45toFjWJQ0Db56NEyii0MgQMGIPHg0jmM65nCAHm38pVTPVE1aiNdfVr6B%2FIy0KXbQ46qmPqRcFjMzo1a%2Bz9yNzuB0Y6hdIeFEL6C74ybR%2F2iQKg9J5wxQozvrVh%2FuoHPcQ0HBp%2B1Az%2BTmrBbHr8MYEzKmmX3o65qn3rR7Uw0emoJl3nNJGMIvT1csGOqUBui0OpqDaCV3HAjMXkQCVqRNbbKieiqNBDi%2Ff5Mau10Al7kwSIn4TZSFUhMe1prHDiAbXt%2F1bdVYpYdCbgCBaqtJcwm9me6sBYNKAslwWHNq2FHtIIejsKzvQVvNHRtwQanupa8qgdUTZ1fo9NmspxPJcgVnqjNqeaWAlqCINKBjBszTwrfXfujsD604x0G%2FUQ5KxJJpJ5uoXKng4nhfUq2GY8Ndl&X-Amz-Signature=4d5cfa4cda3b96ab25bf112cf304b2b76f03a2848198758f46f76fbab1b494b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


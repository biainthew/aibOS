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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS3XKXOQ%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBmI5kpuL6brLg1Mr2wKh4f3pf1%2BtnxeZFX0NbL9rjE9AiEAi3KR1ORR6RORuOOlABBzzMBFa5wIVCX7GvMpHGOdJKcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPJrl2rWc9Ll84lYlCrcA2fsFbMuiN655YFcLCClM94pI0w97VdmvoetgWojbAyUylcHpAOv6IL9xsVBoD7%2BhOGrQ4dwQyAr0Q3RbWx%2BiwbTUWyG%2B2mq01rcTpIIE%2BEVuPUzJSfPqJfTzIDb36anpzD67jhiXU7xl9SB2yBIA1%2BCTPMgSPKAD1lh5UWv0VE3jPxHZkIGD9efuPQbo6uxjk357DeUa3LZbpUTjAVPYTj8kTJV%2BW0r25InP6zFl6IzIWOZjT1COXHejOPyQomFUJaZ2dzaF3ywRR636YPaJUEeHb7ahe%2BUMN8SV3IIAA%2FgAHofnO0vBl%2BjWPTwiiU%2F5t9OtJALMImxs2clVj5JlC1NM08vvqrIk3nCb8%2FIP8sqgNNguuleWPt90ZcPMefpO47868umtBjB0RnMn6QAKqG9BqFE875lV8nORjUHsOTEMZDFWZQXEo5Yvp%2F5h6Jfun7U6DhEPvzN0uqSN4BDVgiGJQFmShf8bGvikfc%2Fa31wWHhFxLbiCKkXOBOlgAtWfpf0YE0PLbUACps02MjaVVsARa0iB%2By9%2BG9MB0%2FKodcoKTAw2iB6LoHAWalFry75v9YYrd6hqRhnx5Czu1V7ngnXggHOlQfrlrKB254zRjVeAddAfS0h3C4ynycNMJKY2ssGOqUBig946EMUfVAySPp2xOmUZwYAZ6iSO0ocSXuK%2BPUI%2FwQUw54Fdi%2BPQ2jXb1HyAzf9ARhaKH%2FBhwNmei%2FNdGuOR0KiVPTwy1cRMZGx%2Frx2OaqHXsglwrmqxV%2BWrrGKuCt4wVtvF%2BMS4CTVgbonDOiwVdpK4tP%2Bs6w%2B9AOtE9woRneAbf52JiAPOZhhLtFyqgwceGLIq1g%2BXLwSBruKvT22MQigm14V&X-Amz-Signature=3315e8b907db72390b640a2f2377e985ce5a594a620e0856662304a529211fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


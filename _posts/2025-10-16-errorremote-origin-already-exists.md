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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEMQKMR%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGI7Fc9iFzpYGOhdHJvcJepcWLcwIFcP7oggI0mP0gouAiEA8t624a6avS66PXD2rDR8RRRoA3jA3It%2BOvhY0inoWxYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOE6NfET94AFj%2Bj4YircA859%2FYAxBvG%2FU1BheEQxYCHtXTe0zVUOyb9QI19HI44R6Dg2U6PLv02vlnLeoHVjKVPG%2BhUxMlf%2FdJK2SgK3vt7630OWoPFv6x2725M7A2H9F3F3CmIEo627ECsRyo9Mb1Q7sl79D%2Frwtqu1EGlZ%2Bt4DS%2FeRpap%2FPjssMuiBZANz0GurnccuVHbmxqtbueM4h9i1UUtMaYVa5L3lbc1r1yQBNl9p3sRzRDZFTSshWkxWxKEQv6cS7aug06Ubjt8mDY5H7C3dR3FsuSk8DZuvxoBAE0crsvaMzZTG1M9aJGkCK04vsacggZQlU70v7IPKW8M6HnmR2mcGnZfWK3MA5NOSANhe5hmsVhhUEfCIgwTQ5WWm8c7mgi8yZQapC0C3%2F3m9C%2FGr98kWKdqjFfKD%2Fx%2BD2xjOksX%2FUw0rlm6q7aVNGBWz2JfcfL5%2BEeedIh5O%2BXb6Y79PVVzmR1I3gZQx8FYBTrLBps1Fiu0PBeZxJ4%2FZQQvS3nteeob2qcqb47c51tqwuT%2BE7lGmL%2Be18dbY3uBmi6voKqO9e6OqDBT47w9avMgyKstEEF61IkS2FRqnReoggw1kqAUv1I2xnhMSXl23yZ3DdXrHJM18wVBijDiIwKSh2l9CUv3%2Bs5J8MIidpssGOqUBhFNgMOrR78z0shMTMjwd2jX3rpZ8Jhl8JocQbxWQ5ztJQ6%2B1i0yuAITgTyij1YbSgoxlYqcKH9J9XxD5UderhiE%2FEeaEUNgas9V8lLoqa7IS44P9lN%2FfODZQ%2BYM1byhJyF0v8o8vknqVtc2E7IEt5qkc8mDC%2FiA1vVyQ8T7RC1GqpEXeyKTnFksksQPaO4Mn0XoVL%2FwNNRfyAF21rKJ%2FnQp7nbUD&X-Amz-Signature=ddcc9e00dcbe69022cb779656e37bab419b9d47bd612124c0a245189871343a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


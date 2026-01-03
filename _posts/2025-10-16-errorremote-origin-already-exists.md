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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBKOY7S%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGxICYkvRWiyR6rubH%2BCGnxTJKYwXs%2FAr57YWHGJdhUyAiEAtJHNNW9FOC8jOT8NTvaL9YmxMFYC3EF1%2Bek0f2IwB3kq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDA9cAwnMW%2B%2Buf5c%2FbircAyIMbEk0h0ponffLLniLUJSzs9jWvaKkW%2FVWzn4pEFEi9OfnNec8i2SxouvWuGWW6KQ9P6AEuVQNNwEr%2F8ZYWs%2BqK6o%2FfYVa9pHN5IPX0tLxXEJExRuLljyJVGRs%2FiUqaViWlGjdwSlQdIhj%2FWjjj%2BL7Nsz00MT2fs%2B6HH4NW7kJPxkkD%2Fd1cxdl%2FWA9Q2uupvr5F8ukROWrrP%2FdQr9fXgL%2BrVPd4ejgup7fFvo2BLjDu%2BbRoPyQ8Z5pyKzVCCQA0dg8CH9kfV5KoTkQRqbN7IudrJcDKAc20ggyp5sqJ4zVksppv1E0w7T6h01B8WI0mGnbSSwlRxMochSx4DYzZI3NsekANuFAQSRJOe6jikZWFzVjEHNdejLMgc5qeKKKTqIkKRuRnQzWZBy3cWnWPoOLae32PCJgmSm2ZiB1o4oTmQ7FHMDd%2FrVERTPAndW5HGn%2BQ1pqhYApSTu6ddWg9IalxBQpJC4k5%2FJlvU%2FwBxi%2FkPJ5WBjRHJVt4ULjyJttCi5mFXharr2B%2Bkj%2BhwrmVIQR2FdAS6BzWxpm%2BNOnf%2Be0b5N4cqeYYaBzeLC4Dx6VzLnkFO4A0opGBKg2%2B4kLwBpo5e%2B80g%2BbVa409wjO58POWTwGFFqpxE%2B0bMGlMKrL4MoGOqUBc5vMO30U3zYF3uEMwjaaYMEJddN24kEDLLiNw%2FYfiK27Da7nNZpZb3ETZKjqlBWr2SB8kU3m09SKx00iTDxI2XftZl5%2FWMisvGzLyBNWW68ZovAGXpMS1s8nxhmQtCEjKg44F0tx3IDxvwTUZ9%2BANF6%2BpiZyPMqh2bl5sNZcjB%2FWO6C0fmuAfz8eSw8bPoDDm9kRoXKb75Gquuqzv1xbfs4iThE0&X-Amz-Signature=0405ac5aab5a7d04d65aebd6eb2d7ae968a52759d2f1c9fc159dcaceea8d04b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


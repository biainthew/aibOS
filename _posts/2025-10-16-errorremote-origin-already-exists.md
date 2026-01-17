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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IGEAGZ%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzw1Ogsp4kB89esI69uUGC90qTTbWGezF5PpLsI2ZjICIQCl%2Fzw9zG4%2F%2FsX1H4yL4FPEXsb8S31RIZ0n2G4Z1pnNGir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMPnb3thatv5lUW5sGKtwDBddZvB1zxtO6iN1wtNASLl0%2BGaVk4zK6MS1AefJ8fvmIrJP2wr%2B43ndggqIW0i0AItGK8C0lOwoo1t7Zlwl7WqG35U9o7ifzBKM8N42etqvvpJAjAnRniaJrGuJsd9R5UV1Ex7f%2BPM%2FjmFs9hO4NFvypIELJRlZe51smBd%2BPFWdTciZuPr1dJNGMFcc%2Bon8BPDkII8KnCIFvx9bBoC1CzOexSaDWRFdpdkOr7cBFyuOpnf6snD8%2Bl6axV5wGn6g9Zup2V1OXa9ogjXLqap%2FXNYNwXadGvA28cHBwJlSliNuk4%2B940FI96L7I9H8uR56KB4QE7qbGDL61F%2Bp25RuP4zKg7Oldh50i0z6ufH8C%2FMAOs%2FRuHY80ATuuMmHjGlrscBdebt7GbL6%2Bo%2B38wZUtM20KXQNl4WKQ%2FwUMKu%2FS%2Ff4fW4zXwN%2BLshHNDZscH9wHWwPsEhuZ4Q79wpU4kb4nFOhMuxf8Ro7kG9m9VgWnnDzPPsN8RJzkYbR1Zbq0SFApzYkz2pK6b7JddSc%2BBXy2QTMW9lC6id9taNr2nQ%2FqU9beqytPZlSXgWrp4wpU55apN2xZU%2BL8XY%2BxWa6OlfJdvASdVn5VV%2BWYiWXBVrIZ3GkKB0H%2BAg6Ml5NG8RMwgLOrywY6pgFaJ8A4GmO0aW6b3DVhD%2BA9KRdVxowvcJNDqRG4uDvj26C%2BFggvUN%2F3wdcIKuZHBxHw%2FHJA6WYtTIMWWYx9zWTVxfOCj6tjXx%2BcPy0l92RuzJrJ%2B1K9s2zPOCbGHUuZ1o5K35MGLjPAot2fgvGpagkQoQ8q2SZRQmRvnE246l3DDV7I7XeXYP4waUAuuhTNiFWI1JJlLr%2FmohFBIZevwJhiNmcTzO%2F6&X-Amz-Signature=3b53d4f9ddd92cebb617be5941383c55d3a70f2b378964bacd36ba5fdc66d395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


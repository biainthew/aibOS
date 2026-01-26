---
layout: post
title: "[Error]unable to resolve dependency tree"
date: 2023-02-01
categories: [general]
tags: [React]
excerpt_separator: ""
---



[: 참고 문서](https://tesseractjh.tistory.com/234)


🦁 npm install 하려는 와중에 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0ef7b857-3c47-40d9-a73f-41e2b02e3289/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7I2SW65%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEzcAs4ejG3caUWL7c8hjL6BX6PuKz4ZxmAa2DbbWLHCAiBhAGkNgf4XCvskN6h%2FtxmKjsVRJxGWw%2FlloFyZaqmDASr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMzBaGgB21A5teU9%2BVKtwDznvqZrFVvKQSWAVd9%2FVOnkkUfvsrFf9Ed1JAE16fvaPwMg4Mu0qDM5vdmYZLrd6b31iGZTyaCMVNvVd6RrKu5e9IdqzkIKHL9TSfqX17mWxI7TgK%2B7zvigokMMxl9QnbD14S3klLeP1naRiBkk7NEVlkXYWi%2BNAJ0OgOdl%2BWfpGLA7xJlc89zXWaNWCszoq2r8kxShH4wPCpO8kNalpoxzj7tNHva7WmR0nGbwhehPW8lbRxfLcpobooPTu13hwcnbruUJ0xNtG3M9apfT9u19hzh8kSi%2By4WCUijwALGzEmApW062CLObdDk5N1vEuxpNBax%2BZRCfOUaKzKzP4LRNEd9PyXMRQvZLEM8p2U1nHMlxfz4K6Ic3EyOk75UMYMUambYriHVHQH7dmqf3qpbNgVaCD4huuU7zWikYHDeAKxuUfTF2bnNuhfdO%2Fk%2FuyIiEJwInA%2FUT2OZKuiNK5tqktDPO26daKqdKVaC0rMavTimvJwf5uAywVPqUqvvnJHE0zwcUbA9Hud4GCxrNYVxrPf0B4Ya1v2z53rrpw8TjFiJzftC5vV1es6kgxXZ%2BpdB8ruxZyYREcdipkhUQuT2ZUug4bOZ%2BQEHIF5QgPEY7G7II7NdEGy%2BWDtENQws%2FvcywY6pgFQkbaGs1Pd8RAbiepxwy2YIs7S%2FW60pvQStcJXflaLDAXXaaiSC3dhHQtsPois3IjhJ9xSHKAD5sYbLh5UGDL7%2BN4DnI7sAc6B8tqIx1abTKoydtMPYzxcRJxrQmIRfNgM7jbkBhmQvoeycQ%2FXHJR1Kyiu2vNs9I6ECTBytJoE7BlueAEPYwAZ45IfeQbQdh%2BAYcUFlsZSxQfqzjrTRIh6nxF5YHVD&X-Amz-Signature=6360473a5ae26d59afefefa763aaab871fad50e0487f32c7df073469670d5144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


원인은 2021년 2월 출시된 npm 7버전부터 추가된 **peerDependencies를 자동으로 설치하는 기능** 때문이라고 한다. peerDependencies를 자동으로 설치할 때, 이미 설치되어 있는 의존성(direct dependencies of the root project)과 동일하지만 버전이 다른 peerDependencies가 존재하면 충돌이 일어나서 위와 같은 에러가 나게 된다.


👇🏻 해결 방법


```javascript
npm install --legacy-peer-deps
npm install --force
```


둘 중 하나를 뒤에 붙여주면 된다


위에는 peerDependencies를 자동으로 설치하지 않도록 설정하는 것


밑에는 있는걸 무시하고 강제로 설치하도록 하는 것


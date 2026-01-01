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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTAMA6H%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDfykP9hJ0PurPGqStQZEblJzSlqU1iehOuDttIFUJMfwIhAOWytjNr7R7d9xodnNX5%2BF4YE7PnXBpy%2BoDHWMCGjwsIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxFoCr2UrApE5qpNIq3AO3ls1o4LD7oFtRbxG6p3wDC2cA6BR8UtGMNS2FieueblGSCLdgncqTY7YkFkQ4IRUjxA6BO8y17jMLDt%2ByNf6mPrw78gt3%2Bv7Mjp%2FXi2UabrKj%2F15BAYmOOlSaxN1wdS0D9C%2B05QwLceYGgfhfCOZ%2BLOQge7XtY%2FQnEYYb7l54RiAikARqRYHzJWwF4K%2BVtTMCHcIVf2ydP2V9pW7bapQXiOxlFVtc71PuvRQLf%2FITE5qtBvW4aP6c0URipaCg9mSC2bJN%2FkrmvpviqjeIX9B4l7SRP4%2F71uber5qdPTbD6Lr7F1mwwcQ6pqsx7bueVywapP2LjYxxkjkiL2Smc%2B9qibvsGRjeMe%2BxfUenw%2F9xk2Imw07HbeBJT6xanITAXS2K8MlNFbuIRqwB3RNJ2SDA5jifkqm3Z4SDgnESSjX1IttB1tnnYjffjYX8Yvs9xfC4wTnWH6l79%2BTy%2BGJL3ifSC%2FxEHc5eEtcO7QTmoKft9tteo7x%2FgLEu3taMrh1tZ%2FKsiIp2EYzCYThtF%2BaVRM6ejVp3DSBagxFe%2BagN3zxvr3ObnysacaW1hV5Xv8%2FW67Lv5SU97%2BqiaFCkEKHejZcAglDID6%2FlVGRm3kyHt7j8vqIm5zaPY7G8K6hAIjCh9tXKBjqkAX64qufD3xLz1fsNf%2FsYerj2uBRW%2BiCOx8H3q5O9mN3rYngov785msNyNg4vbGjl9CNaSIqNVq5ydUwiEQzQnwYiYk540azHB3HswfXreJtKu7yKWDbgpJDHxyRq7VsMGOPN0ckk80XNO%2FJ03oJt%2BHn83T2kj4coEuSGSTj34OglA1DIz3WoLHOH2fl5U2iK9nHGC6IEGzUGENBpSbjiVeI0%2BNnO&X-Amz-Signature=105dd7a0d71538e7acf6d6198c5a6b5d5ae1f2a5cf4274b9d55aba407d18697a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


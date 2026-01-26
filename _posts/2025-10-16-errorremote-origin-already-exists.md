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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNFCL4NW%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T093933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFb0xyVHnE9LotZCVF%2B%2FI38IIDgW3ii0D2eJr1HWml8fAiADpuRVCVK2B0LFseeTY%2BuuOZTPy4aEY9x6y8nAMisRSyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMyPnF1RlUEZnzBAgYKtwD8EITAAokNn2Cw4uYcrlVgjq4nnD8P%2BqH%2FhwprgJfuLuQKyr%2BbhzZtT8wTYkIau1Qyusaz4E89feV8qXEIXH6uCbA276j95Tt6Ht0Cux5vREeXOTRK1Wb6%2BniG8%2FFyOtJjS3kV4KIRjlP%2F4kVH2bdLSIFqA2VqjZ7KqeOeMtdEF4aOVpxS1pmKyz7Wdx25H8VubctYLdSVnyCyyPDVUcg4UhECRWSY87qmqJwmVWnoCbxvir3zc1OlNyQz%2FmK39mrd%2Br2lpRNbCwRSOvWVoHuxCgQfMUU8KtOD3OEgrre0A3Ym7BM7cUczqo1gEY3wiqckCILgO%2FYUOXNOvUqu7366MgsVpanXDCH7YYN6R6xV9TX%2BGQrT%2B%2FDwzxPOVc%2Fh4UTY7BieuoJPd8XJ1KAm%2BQ4adU9HxcyC%2FnBsJcYTcOVrn8BPoXUpbu3TqIZYwu8Tmfhbwuc9QPzlO2hL07gixWYlKNYOfqqlwqgmo4vZ3tCZHo%2BBDG7NjbDrPVqETSkLnL0oAAZ3Xdds0vo6q9qUglUab8iRV4tCv0OKxt00hgMfj1VEtX5bq5eyE3vaX4a0Qu5P8%2F%2BxG1OObe01wKMQPhy9R167B2mi9AcWT%2B7QRbpoOMERvJcbpYkSBDj7I0wp9ncywY6pgHNpA0dHUn4s6XCPSNrMqkploqp2qWhRRW4JEjvb%2FjvhKv4jF6Uvlq55fiGidwdmw6fVcmQvADu77MStPg8J%2FIHh1yQ1nzgv1G5HdJzoBf0JcgEpvdYuJVAyMUpF%2Bp0Kw4xIfYtk56Wjp7INoSK1btDPwAilh3bFub%2FtQACIfYzyPCZIccfiuYbRP33Ph1RN8IAk1m94Hf6oMemATXrqribSmgPxSvV&X-Amz-Signature=0074d8900c251463736fd6ba892e9bd460ab7d241a8fc0dad0e435ba6d09bedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


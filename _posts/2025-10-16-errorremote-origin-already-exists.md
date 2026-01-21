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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27Z7IWX%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFonNqYfWvsepNVtKXh%2BbnIskSqIokrH%2FYMElWyLb6hgAiA9A%2BfT6iu8Aj%2BshDjLEz1qvdwL5n%2F9rOo8nnY311bqhiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXKuIODTYkudLHzQKtwDIc79WtG8JfDXbmcKSFNN4aGhri23jF6O7m2F9u0zkpyCa%2FOiuvqWKLE6S7DYSlgQhM8B0oICfw9t0wiqPrSowhOx9AdwRIX1IsE7YF2cP3tHcsUaawoGUR5QjLj4h8HP6LWf2oaa%2B1XiT%2BM8sh0PNT6qzJBJBdJdnSb4FkdyVJBQoDdz%2BVe42uGIaolZ4v8P6q%2FV4yDIV9WA%2FnIb1q6fJC32F687CnzYHT7rVGC9s0WU2u6kEE1HuQ9v%2BZTDfKY2KXoyvKyTX1phbVFXzXWTLcPA%2F%2FvFZq70cKwkBfaEDee0g6OQQS%2FGCVuC92PzFbzg9MFzvd0Ek4U2KoD2wFPNqKXGoP5GDCjeBEg%2B1WS9vVoicq%2FgF%2BJVPcc6i4KPzFs%2FFQrKKwuEhM%2F7A%2BmxvEvjWB11uqmkwdQx9Ckbhr32uXs9rgJhwqBTOQchlaEl%2BZ18P%2BKHQi8oyxh%2FjvPhZ%2Fc4ybRArwhFQyVJnBtBSx3aeIb9OZwKGk0yjBlhSj4R1YJGrtJndlqweRRGuCybe%2Bhyg7JPB9ZlB93WNdOeP8C9dPUO8IrmKVy3C%2FhAER06vLAQu0krsdo5qrWBmme2yQC868mdWfRVH4ggsdmTwesOtuhplpqBTOEpvIIMoV8w7rXAywY6pgFm6AXdl%2F2bw4pxswYhA95JMbjABKGuuu8v2t5hVyC3HLpFaRTbBqmdmj7g%2FUwx4s7Rw3kGf59BM1NVHYPOFuIsDzG9XRHxdLT7K5%2BJxK5zl89LMM%2FTfT4FzFFwXNqSVMOknRSBvjvM4dx3AckDAMxZkxNEMDVNXc2cQZuMV3j0py2u1aeaalFtriyKqfQsFkqlDKcefDykQ1RtEUNhBU%2BCKXhtdgHK&X-Amz-Signature=b71bd0ac0a754202a1f3644d08a3dece2867aa157f2ee03693fda942ee2754ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


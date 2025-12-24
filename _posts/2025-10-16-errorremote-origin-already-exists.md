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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7RVE5P%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCVZY8zNbyNp1O9mwrt0g6Ll15mdRMn8aNOamYOAFQvGQIgeSRXH5L5goh8lqbZIgoAghws2lf%2FfChdChDNA88AhUwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDMcCkVbpUkCkbr96SrcAzDZ%2BPeUa80cK3oVli9ASQyv3Ctj9kU7syyrikMvP2YgwVReUNFSdkuL6%2B5GIg%2FzMUW4%2F%2Bq%2F8bv1HiALpqzWBZAYRsX%2ButpVWxXqZcj5bG4f%2F51l%2BRrKwqhSjZMs3feVsmJ%2Fewpbm1G1vp17N%2Bix8mkCkEvG9ozb3jJcXU1a%2BFVG7G%2FNeTt8fquQZyScok5Ti2OawCmNFaXgFyf6OEpHGYO0BHpaiNAGunRhYQ04uL0rpW6V%2Bouv8QUyxe%2F%2FISjnv%2B6KDN%2BNYZ1LZg7wYibLEAi9ay9kRRnZ5W%2BBwb5IUTleVFAvExnqcj9Ikpu8RUhIA5skaLWXFRuQ%2FW16X%2BqPXBRPS2G3pe%2F1hESmuKBy9SGu%2Bgbe43bXMBQCXfNqHf6fBqFQlTgysuBFle8RulrPyUe7hNphtVW752x3e4pluw56ETiIhsSL6Qf3I3vHcE9zKsx65ErLBw4dMmE0%2BbOdUbZtnUkkYLSFfl77JCCCzQSitMWgSy5HlyKNbEOjezLdx1zHdAVb76w%2FqTniGdLatqVGEjiy5%2BGedm2gicxVhwRd5vFZPK9UyjGLAaev4x%2BcW38Y8imPxiz59AhU4oX8WCX8lVFZt3vbCqM%2BPIjFKB3soMsazUtTNpwE%2BYCbMKPjrMoGOqUBNqJllypDaNwGk11JoE3B9Lu6H%2B2h4mWSInVd%2F0x4rmH11FCJmj6a9mlMCyDjEG1UDY7jVL0XCDPV7dxOvRb2Qkkd7x5kcvCzO5tklDrUg4nZ5KEz2cSLbxlieocNRTcZSb5M3qUap16nRxl6wdFFfCRiTgjfke%2FGlHpEUEcTHsmqg2iBze0Aqet%2FS8JfGg2Y7%2BuZBQTdaLMPjZsHHn732DzKnegK&X-Amz-Signature=63f5048daaea1f5ba9fd657483e11712de5879a61caf3eae1eef3ac8592c452a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


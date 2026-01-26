---
layout: post
title: "[Error]warning: LF will be replaced by CRLF"
date: 2023-01-11
categories: [general]
tags: [Work]
excerpt_separator: ""
---



[*관련 링크](https://dabo-dev.tistory.com/13)


🦁 git add . 했는데 뜬 오류


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6360fbc6-d07d-4f36-bfe6-fd6353aeb873/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQD6VJL%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHFsZlHTaYA98IWgxIHSCVHcJg7DTGyMmD0xLP5CGBUAAiAYXS8AL9OAqF5B0x4WVpiTBUhPQ3CQk7vHXBcKM0t%2BpCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMm3Nib0CFlsTNFnlYKtwDRZcC81BPsH0eqJjWdvR1cbGFoKOFzwUjcKehCCgDmKGyYXuFA4m0mH4oAbmnotvd5kRf8k2r3p%2FS6y2UhGaaYCX9dDbV66OXEGTUbAD3DemmcSPaGBGFjIPXrhgTk4vXz4uUYPVYTcvJSfTdBmq95bIprQGF%2F28MmsII3Ut8C9lbDpY%2FsNX6YR64d7jKGHSHXHg2st3iNk%2BMWIfoPfX8PZ6u41ajuD8IBbpxqb3XnYdI7rccepIIaVZjesJXp1PnJTQqJ4sNBYVPzgpk9pEtuwuOxqrU41P6OjcxqqNac8MDBfgcPxfShyDnBMGY98g99vivIUyCPBsiXB9KNOk%2FghR9qwyunD0rH5jqCKlN2onbpuiaIX31iwBIy5wlAPWd9Kn0rB1o9s4OukKfxJYpV4zbhju%2Fhc8tZh6r2o8SrfvNIsxyqQ7SEVOHJLynXnUEKdenjJBliERbSjnMNGr%2ByRbYAWun%2Bg2X4qW4yNK%2FqR%2F9iPCaytMxAMm%2FpQNyJH44t4PkccwzSbC2J6IEKsiMygXLIiqg3Oa4NzzqytQz32Qu8N08E8YbuHNUjIZfIxAoniRY99oiAapiPQyuLfUza9DDR6Hnq%2BcBT04w%2BNpzrhVV%2BjwE7c9dzFF8rwowp%2FvcywY6pgHAXjCyZoVXdu%2FzFuebEV5mUgSPzpqmO23tFM9WrA2LgShjLsx6hQ2G1Ndas73H1XITudgwF7vxpW6Y9kC6wq9%2BHkSCn1PD30ZjyoLtz%2BNAWSZF5wKhSWViPZXUyZtBCGaqSnfcik9ATAubwaUQugdKPEU2yB%2FCzBvNd60Mo4awbMI6nvoF0CsFExNZqSKQpZelHWrrziEH2sVLCwIPwe1oYTFG2rJL&X-Amz-Signature=89c3ccac42e5349cd6baf9b3890edcf56712dc560fa866eb31f626b08259c44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


LF는CRLF로 대체된다는 내용


👉🏻 LF 란 ?


line feed 의 줄임말로 Mac, Linux (Unix 계열) 줄바꿈 문자열


현재 위치에서 바로 아래로 이동, 커서 위치는 그대로 두고 종이를 한 라인 위로 올리는 동작


👉🏻 CR 란 ?


carriage return 의 줄임말로 Mac 초기모델 줄바꿈 문자열


커서 위치를 맨 앞으로 옮기는 동작


👉🏻 CRLF 란 ?


CR 과 LF 를 합친 것 Window, DOS 줄바꿈 문자열


커서를 다음 라인 맨 앞으로 옮기는 동작


>> 플랫폼마다 줄바꿈 문자열이 다르기 때문에 git이 어느 쪽을 선택할 지 몰라 경고 메세지를 띄운 것


👇🏻 해결 방법 Window, DOS


```javascript
git config --global core.autocrlf true
```


👇🏻 해결 방법 Mac, Linux


```javascript
git config --global core.autocrlf input
```


>> git config --global core.autocrlf false 가 기본값


플랫폼 상관없이 그대로 인식해서 문제 발생 가능성 존재



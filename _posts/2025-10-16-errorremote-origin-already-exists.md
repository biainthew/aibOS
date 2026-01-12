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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2NFRFE%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T012032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCoEl4UUsGnOtNvyaTRRpF%2BEyOT%2BVGrkD29UQ21aSO4aAIhAPadvc1c8zphg1dU%2FGr%2FdpjpLx2kpGKMbIIwXxJtsZf5KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyev7hulW7%2FTecOtfkq3APnzB96qRQHIMqdlkpUSmkI8Y9UvUpn%2FrvmZKYELu1zH6%2FNRWY0LiugjWIqaYxiK1lTPG1UyiDGxNSAPdWfaGBL8IBfXKaHKLrbjbTlp0lbI4hTWi2Anf6Ruw%2Bq%2Bn%2BQvmBD%2BUUY1gjlVwg50v6IJxad6g2SIZMFEjW%2FYEYhoyrJSH1%2FFU0Zh3i55udX7MILSMqlcjbHJTXRedywwUBUyA1%2BOos7AzxxY1e2cQbbEpoGSYrCqqU43F5iar8AWyW3MBuTXH%2BA5Y9joWMpPc7mKxKrncBlUEC230hPXvMbjHbMR6ihylZPboWJl%2B7s2TdUA4QeNr7y6IY1Iw0ox4D5R9TqBnkCsE3bEDjj2CtJR1wH77gsZtLw6WBWBfI9nrhYUgd3w3Bnlcxj5YblULZvplzvCds%2FjPETOpyigQsqV5Is1qIdbJy5WU5p1sHpf96QoP9gdgzoIb1XVYneM5urgUtqYXGsioExzaZh2%2BQInJV15St8N0MlPMI4tbGgqX6Gq7zWkvVSn2lPZA7NV73oMp4KZTK2mvEE2%2B%2Br8VzMY8L0hi0No4Cr3qvM%2Fd%2BnTjjumWnSwds71fSj4eZxpEoJb%2BwdklA7o83QM1PGTxdGxMXYadNHsawno%2FWJ05lryTDn%2B5DLBjqkAXlQk9d1DhsGXHa4DcPcdqLjzQmzTomI9OvPC7kck5voq%2FFv0apA1uGmLADBgx9lQycqvF89eGtq6DaagDi5ivjTYqYEqTF8OhAgpLIEP2FfS3JKpOJWqG1w5EpatfcOaMJllfZuKcY00%2Ff1lNLsbKYZtY%2B19cA9EXUnx3fFjH2m%2FA374e2na%2FW5vtfl675LJUZBMSHqZyEQ4Qv5R8tYch6u0CaE&X-Amz-Signature=98f526c9addd4482017ea831e03ff87e6fa9fd092d354e4745c7bcf85207c461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


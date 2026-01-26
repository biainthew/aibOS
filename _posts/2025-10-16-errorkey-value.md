---
layout: post
title: "[Error]key value"
date: 2023-01-23
categories: [general]
tags: [React]
excerpt_separator: ""
---



🦁 key 값 주기


👇🏻 오류 코드


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-25_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.22.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/60561232-f615-4597-8088-fe3526088cbd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-25_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.22.53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZZLPE5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T104857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFO9wMQiH5HO7JH990exh%2BgPDOYsiMZ0%2FUFpB58qXx8JAiAq5xwT2jxlC42HY74C5i8pclX%2F2MbhxwV%2F6YX2PUBQfyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdbNfBOIEF1GXuJs6KtwD4TjasXU%2FcO05SDCPHuf0nmjuRwSOGYHTw2o%2BfijpJM%2FeAEjdiz%2Bs9jLTqx48nAyWEqnkiLPNgfky2EKNH8tjZRDJ3y6QK2jGLIzw7%2FJnSRd4pKbRWBTkD5V1OsWEGR7jA%2FXfaJ5mHwwPDjIIHuTDhQnq8snN0QQ1eLCWN5kQN7dvUMGpp278In3KP%2FzyaR3JqiX91WYRys9R4wYZSUDF1pQL5KZIlY5MPugHXmDJ2Lbc75M8A45Wr5Ao9koEMZLWRTx1nUHZMYHNrB1C%2FhrJ5ccBk1PDkPL%2F%2BAx8zlmPCJ2z%2BWkmz9%2Fz8x6LA3iMeodRIVGUUMMyGHqQGzm7MqBgWC0DCcGd9GcY8iqpe%2BJhD8rHt6EXGNMMaX%2Bwl2%2Fionk6sYskEqZRYan2yRgHRgR%2B%2B6BIiGomfF%2F5LyjXcZhup%2FjD1xYgPtPaFCY64lM8P4GsvGl%2Fufcs2lJlCY40viBrECMgpkEnNWtygUV%2BJJ1AVLO0DLPXh875Mjodx7OlnBqarvV7uGcskJ3FRCe%2FsMB0r00kvQ6zIPpO8pW36HbGQgqIBDcVYyRVjVnXEALIe8KhJF4uYTVGSMT9Pzn%2BPwAHuYWsjN1Nm4JBZ3pdLlrwlufilCumMXzv2jlN7ncwyPvcywY6pgHCGf55BCPULUSc1HfKvvwlTltW14ql2%2BJzwVTgQLSRt2Tm8R%2BsMSAb%2FHnOrSe3dpwztwDvZhmhlFtCfgpVbAAX8LdOs%2BbtiSyl581%2FDSTXRtumTAaNwCBwZv0uj5xuBlG%2BI3C0RApxKwsp79Ufr%2F%2BLnk2XSZYUSz7DyvZjXQ41UuC4U3cCM1uzyOVDHw2ENqFPUw%2BxUU%2FbieWZCbjEHqcz6hBbbiLL&X-Amz-Signature=ef77d2b0f485b84d1df4b39bbf5171696fb59b96c5bc88a778fdb2e3913c3482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


반복되는 요소들에는 고유한 key 값을 줘야 함 ex)index


👇🏻 해결 방법


```javascript
const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const name = names.map((name, index)=>{
        return(
            <li key={index}>{name}</li>
        )
    })
    return(
        <ul>{name}</ul>
    )
};
export default IterationSample;
```


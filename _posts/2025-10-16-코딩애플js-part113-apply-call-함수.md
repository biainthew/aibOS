---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ADJNLO%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T011655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAP92w6Z26h0dkJtdgVGtXe%2FVToXXAtyZXm%2BGtBM4YVJAiBkVjFWsxPrKVxuvueOgv%2FL5imbiAIHDUNRGK%2BMMqUz0yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2BIZ9Ze8zEpcuyV9KtwDMswpLv%2FnT8FepGtsb5qvfN7DfI4pIyushqSHfC91eor52OF4%2FrZu7Xap4J8uRDT4WTk31mqrI083Ew7lhdxdba0zRK5Nxr8nruOpWFHfQDSj%2Fw0hRlkWSsgjKhN5cOCurI0RvJ308PUnkoaVz7K2jpQwvORDub%2Bp20rc4p2P%2Bh0eNZo%2BmjkswOqfQgvps8FcmuWNUBg1nsXhdTM3hZU%2ByMxgVKdCG5PFDeVBHXXuwv%2FTO0JoWTjWQklrJHM72ZXlT3YXrQ3MCdBSm3N8ZknnWknn%2FASaDidjbp7oPskLbi3J2FHuEVOfKExiDI7I9KmTHA4Xo43HyMZImQ6dqUdcPEEE3hb4cdyw3on3WKZ6QuSaoXubS9UtasG%2F157C6hYV4bqEF1KIwU0PXCb9sT%2BgJXMZW5ZMZH6%2Bea5G%2BD7hyYEsApgjXsK7xaqJLZNDdF4GLKU6vHDghFRDDsWzwOx5%2Bc3Tyko%2FpQdV7V1Lt3iYoYaPB%2F7jYawJ52LFv3bRPVlStSn80M7jHmrSaN%2Bd2CMdC2hfOukhC7udF%2F39%2F1y%2FhdTZ9s44hcrAU%2FN%2BaiAU0%2Faamm2Sz6q9RA3iNQwxXgODboy3mTAm3iq%2BwzyWIZ9hY%2B9hlwIMgljWz6KF0FYw9Y%2FLywY6pgHiINUK%2BZf%2F3Wbw7QZaEovyhbUIr0SjL35rb8OTKeFEcIQXh60E4Zy713MefZzhQ%2FQ3aATDk6IXMlexddlT4hWtdTkA9HivCU0d8M0A%2FfmUlLKuJ4P7ADH9ubFSjNa7MJFzftTWHAAw%2BMALtMNeie8GUjNYaQMSYlFGkHwznbZMZZTNCbuGxoB1hlDw44iBLPsS9n9v73ZAlvNhBL9%2B2QvdGrsD4kp1&X-Amz-Signature=7dbf35a41b2b34a849d43d49227a7de512085cfd0bc32fc5fcdd2f4b9a12d08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


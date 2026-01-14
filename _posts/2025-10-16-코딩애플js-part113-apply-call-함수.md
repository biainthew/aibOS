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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKW4LG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T011915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCCi0DNwjnDuczQZervAtr76xFBXXl%2FNYparuKqcVtmJQIhAN3FWzLQ3sCtWLkj77WEQwoG6d2kFNeNJj8r7VoebltlKv8DCBIQABoMNjM3NDIzMTgzODA1IgzgVvESlBAyi7PJzgYq3AMkbKGXUvjcXhHI6sKXSOHQ27LKQtvGXQrhvdHokb395lIbPclk8sqwctH9hypfpqPg75Fwp%2BWW5MjGIDFe9KRbXTQBFQaFCt3PBJVPTRhO7UmeFERPGSSqi%2BYkN6QOoWkTNAmbaBwH5FkF4x8fAXmRiIaq6f9IqtpZka24Xe9A7MCbcCdvyUdGaOmMeP7e%2F7ScT%2Bm3%2BuZp%2F2LI8J%2BIhy9dURRhE5dwXODSGcBm3egCrYFJJBJZ67lwAwk4GV0Ul%2BqxBMajUB3iBpwSUvH81JnoIT1eLdHKNbTLU4ab78GEzvGaIQsFDNmeiRaqVmuax3zMPAtQBoHfU296l61zwsriR9dnGceyOdTinCThIxp9TDfkOxe0Y2PPQQjtpIrqiOhEymDaz6giAGItOI0GdEhhf50OnDfkym6iiB9nYrzvQHcgsMXkWdrSf3lpsIN3847%2FFGhOv4ohuajUfI08JWRu6%2BMazVCswyWA%2F5zbfQdJUGAPjhQ91ghWShfBtK%2Bw8LXN5CumIoRRqUzwu7mO3%2BUF1y6VRHAA6n5D3zY1Xg9mjECVxjVOspAqM5s9LfjUPNkEWlCX%2B%2F8s4imMzoIfE4FQBfNbHMpSYfcCkrcwAh%2FiSONQyh7H6UFu%2FVPGGTC%2B0JvLBjqkAWujY%2BU2ORWxLVEyxujDximO1XdxI9%2BNzLCpSp4Q%2BT3iXKZrg9VbGKPpLielU1Dvkf3yEOLXmyE1kJglHSsnfbPkBXYV%2FwORJHRmZZOy0uv77DbNis8OpDKThc7isY6wbUBEyt8hjNNBBEdBFhjFm%2F5E24wcFbqvhn7U8U9ICjD2VAB%2Bic1jMrZjgvfkg41SEsd7YRIbOBcr9JOvBzE5XxrrRCV4&X-Amz-Signature=868323d66428dd4abeea96a375356a92b298963c5b0e0726328f2e38cd9725c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


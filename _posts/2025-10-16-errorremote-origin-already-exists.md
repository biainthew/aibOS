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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIVJZDP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T085709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHzN4MgCPbW%2BaCL8rxau%2FMdfIJRcacj4RJIw8hz8gP4eAiBVrGnVOCTtCwk3y%2B%2Bxf3miB37UZPPZCLpWl1uyfMiEqiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAX0xNUItOANcZoXkKtwDvzfsgo2vCAo2d7JSO%2BxlxzCxa1vPh%2Fv46x17zFrBPLX0oZ9AFy5OPI3sUAAImUGZ66R0GuO4lNee29ieEy6gUFDpQ6mkmfZCazsDac3yCGi%2B9D%2FlB81a4gogzVk%2F30nDmS7tlj%2FOUUvnPKzsK1rYB8lv%2Fi%2FltCm2ywOUISoPN5ZWvBp5WBqhqE0PVoWZjIAIho8rF5kCD62w0yXD7f2Y7xrGcL3g4Y85tYUQZ9fPSeOipsqI4VlstQIuZP1AguTpn%2BPYLpzZEMClh391JmSIaNIuw4IneDkF52hcpGShaRoo4%2F5tyzpvVM0vfjLYSXRv3Oo2r%2BojJGAf8EA4IuhfJz%2B1No%2BH2f%2FiDpBw2OznpnCvuYrqkqI8MzHteOab9RZYKICO%2FhcHKCeObaYjcIlEu7sriXs4KH5rIw5BpNKYvKejgxsFkG6scMNKspQclcfV4i1Mvi25qbozAkaiQoJRx%2Frs0kZJCSRqv3gEtf24BjuUN6Eps0%2Bik1zCxdiYIOiloru7cakPdbxCYUiH8dSGC5V2hqKaqxsEzqXJJffjw9P7I0%2F7LCMzvHY3fUDrIBDBiuR5pjaM3uhntclDvCQuEHN5QZNSvBbvFWChZa8O%2Fo6sB6iMv75ili%2BGA84w1fmjygY6pgGbuiNlryKIDPtkazDVhERks3jTiC8vHuFVSDTlHhhzXSfsseXybZDJpgZ7y0p2YJ9i7M0%2FZM2cBu0NMEg6327KQ5KNmfn9U0l2gDbvN3MO97gH%2B6gEQzrR4Q6p%2FOhVvCM7g%2BmlFvAxGEySEJN5yF1L6yGWzZFQQzTT1AlpAUPqBOCmq%2FKKwyuKH0zF3W%2FOlvET9iBkd%2Fja%2F0JN2%2FGBrLzbbGJfpLnw&X-Amz-Signature=ec87bfcd88b0d35d55325c926594a142027b649296a560642ac8ea13b5a7c367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


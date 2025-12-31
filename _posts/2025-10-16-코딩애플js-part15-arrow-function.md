---
layout: post
title: "코딩애플JS Part1-5 arrow function"
date: 2023-06-30
categories: [general]
tags: [Javascript/Jquery]
---


## Arrow function 을 쓰는 이유


### 1. 함수 본연의 기능(입출력 기능) 을 잘 표현하는 문법임


> 💡 **프로그래밍 할 때 function 문법을 사용하는 이유**  
> 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용 할 때)  
> 2. 입출력 기능을 만들 때


### 2. 소괄호 생략 가능


파라미터가 하나일 때


### 3. 중괄호와 return 생략 가능


중괄호 안에 return 한 줄 뿐이라면


---


### arrow function 쓰면 내부에서 this 값을 쓸 때 밖에 있던 this 값을 그대로 사용


**쓰는 핵심 이유**


일반 function 과 용도가 완전히 같지는 않기 때문에 일반 function 을 항상 대체할 수 있는 문법은 아님 주의하기


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GUQS62%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ0qUS0XWMoeg5K9hwe3El9JsGpFGuIAzFBhz8xHMOrgIhAINJRRHfGcbYuXdizl3gJlxF61OBDRHPHArNuTBc7aCrKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysGAqYaId5S8k%2BpOwq3ANK6%2FBKFmdhNRaBf3q762UvrEHMAC4D4%2BUgjJmdY98Iftg42s%2Bz0rOsMAoOrX2YjOZlWwU6YyCE0vyyMUMIAArvqbXhQ0d5%2B1MpY4HbvmG8ahCpUBihmZ4wY1v41XDhzSZNSNmZp5RF2McD6e5G0KTumJghNxRKA81XmkCyNl9qBOgm9w3C0cFC%2Fbh0VTjfRkISPWgg78l%2Fg%2F6v%2B357TcIhFZdShjyhXEyHibMoSC%2BBTJ1h7Mkl7ydo0s2npwrSSoDwRMOc5ANxKkltPueeOse8%2BJvOCkVMElMjNYio74GOZZRnfKurr2tZhxOnD9XrxdpfECPDpvDdekoUdoKxJ2aVnVHqc8bo2cxzXtgx%2FH2vsRJNa%2BbcX5vS%2BnLvQcrjRTU%2FbI7FOqVX2rk2rxdB8oE1XDmNX2VH8MTaLnrnM7oCm6fW4fFoGIvJC2yH9l9MMEev75FwSWEfvCAlZGFy5%2Bb3NY2LMd8%2BO%2B3a%2BhSNHs%2FT5Kh3jM%2FxxHYb7d147MSTLAlWL9UApr%2Fw1cECWIsvMzwnmyKC%2FYa5IFEzM9G4fpKe5hrKcWUSgIzHbeA92MiXRgyMXMBukPeu9wdvdkDOalotM5gmtRuzb7mZEndWCKt%2FAZTMLjmG2h8192shzTDQ1dDKBjqkAW%2BDhdhGuvDvsNKZLNF1Db%2BdQAeSTonSCYZCeIiWlpGQBFBnTntBRFVKKwHsjGZeDzjap5FT7CsSd%2F8TXBonlwDbG1p2DJ1aEkI8qIK%2B77hqrvRii9leAyA2FkgzgVLdNeiLU2ruESXHZRuywrXz%2F2xQm635f%2B0Op%2F2vzGgkpTH8vzpUWppbrW2ErlODyxJzQk7KqKRKSazelQ8dTXh%2BSFLck7P4&X-Amz-Signature=28d1032ac22eca0011ee1d8a982948da0631c9478e9fc81105a07313d3ea4510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


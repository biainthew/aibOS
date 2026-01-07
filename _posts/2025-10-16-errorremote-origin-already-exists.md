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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTH3TLQ%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T011716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeFY3r6lw%2B2tNrWxM0mXxk8J6SG%2F4FL9EOXAe2v4yS1AiEA1pQLRTl0FBhJuxSOplpUWwUkTabWbWa%2BxnA8tLgtJaUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDN2Eh5ms0UAgJPIQ%2BircAzkSBYPKUWqhQtjewh0vYVAMF%2FkZRIid04GWDcbwB7bw378NJBLaFYfMQTb3IjDTfUfQuVMmLJATbot6JcByDh0q1aKhM5Z%2B6C8FiO93LyWxuvIYidRNOve51yjiJ33yPXoha%2FS1WjolPG6KhlwwrvqpLh1rQZSqaCMA%2BIlpoHxj9%2BxZwojSJuHN%2FXMndoUgmgYykQYfrdJMBARMD8aELpvDH%2FI%2F%2F27LttnhGzYU1z5C1C%2BulhyM%2F81GGmv7aWpHEg6phTDqvBfbxtBiENMsMQPqmPIa%2FMmIWgrVSt%2FTUXk6OiuDU%2FY92%2B%2B6QkNZ5bUkYzoZMXjc5MWcgTsrtaKymbDpPEHSZr%2B4XPO9OYG7t8lwul0K%2FtXLIVimdRIHiN1slsEXPULlLLf6iOWSOB1dRQQrPZT9EXnHCElmd25mKhgxaiybo0qJz6YymJxyru%2Flo%2FVChum5d1o5Iq21ZqUcNrdLA8sGROpDyCCnkotrEnkWrAjFXJWh0aSXKZhz2fhxpbTqGLBwkiZDT3T3dxxLJthFQIFDRi%2BlmG2TGlarvp7J38pdEkV2arMM67faT48%2BtmRCMldcmNe%2B3XcAPm4Qy93wg8iG7ZdBYGHub16pQvYtMqVTlmfY12JiUW72MJfZ9soGOqUBckZIBw3onguMyRLhdH%2BQ9SgixDP3jmfkLSsl2Lk2LNuy%2BpaqipDDLzfLRTdjt9UZPVpkZYMjyfLplAh9q3hivrkPZYCzvHSQYLXim3rdh1t9aZUKaI01UNynGWsbHCIAW2aaUPrhXHMpnJH%2B4yxihY1ZqByVvKylHWCEZaWBIWsboXeoU0JermA8gQsl%2FE3aLrFeOA%2FKqqUh1biX3f%2FuzoX3%2BTTc&X-Amz-Signature=af7ea4d64be5fd06c281cb0b20ce3e1fb4ef58e0ba8b1c74ab34d019895631c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


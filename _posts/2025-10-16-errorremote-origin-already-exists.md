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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637OJ3UKN%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHkbAcvkXUqxGF4YtyWl5SgR3nTK5vCkywd1MUbSCGhaAiEA5M%2Bmcm7xs4dcQCH42aQuFGn0N9GznB7MfgtfmubtuE0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLN8poy4NrHOYZ6GuSrcA3fQYdI8ChX2oXbntsj96vj2%2BukW5Nmslbs6BP0Fvx1Ug4us7tWg5xmXNA3SrB1P8uKrudlH0%2Bu%2FEjn9mugX1M0KEFsbSV4tooeyHgnXGy%2FmBb5hwdq80lqMA9Gs007IhV3Ej75MGg0h5xW04mx2H3jKhzkj3vdS%2BV48fJLV0oij2kDQpH29p8gnG%2FjavN%2BaZ%2BzaKdpD0YoaftVa6FyIhZ%2BuiaYnS2zF0EDJkmur0CRrF1WThZ480j233Nl6u0UwuPxogH4r0fP08F5whGzPPvHlzeerfSJdEDpnBOPgcPr%2BSebf0gZulUPTRMpnPv1xx0afJaWb9Ipf0k6uPWKtpXq10R3W7njrULODUPS3Pg3nQzC0UnGXqkNLoqfYS6kKi5x0Q%2F1E2Vi2ZZVNEmCMkS3TceSCYETXn1wlvLnpUx6LDvhBWlk0%2Bwi0SJbJQKZU0rQnziFM2lC6%2BBp3WuD9Zi%2BH%2B%2FfJcSQPmY6DEhfxqVV0amRDtz5t2nYYsHwpQZ1aYd4Tlk8h2ZS6JgQbYjiScCv6mmsdQPm2rfCnE0%2BlZhoR2xDlZuHUJ31T6IOK0mhUy5HAbmcdGqmP%2BuiHEnKFm0CITzdX2roIYC1IIXuc2%2FqNai1DO6SjoZ0afcTOMM3koMsGOqUBFOHD8TiBOnRnRMB3VA79YqpnXe8deRv28VeEEYd%2FLoGp4ZbpIFccUekaxfCK7wrcZRzJKFtr87N9EWLaUsUIIcyG%2FouhmeB9sKc2%2BPT99vuAdsxernO4p8%2BGgXfuQKzlY0K1AYMAiZzKgNgKNIQ9MQxSdZgZnd6YAUj0RfSK5G3GSpu7YR2kZzH%2BxqKAogNM9q%2Fm%2B2vH9IGV7AfW0aMexU1GykEN&X-Amz-Signature=858a61d543c5fcaa149263699f78f36deac4fa5bc80e3bec0cfc1be5c93d7bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


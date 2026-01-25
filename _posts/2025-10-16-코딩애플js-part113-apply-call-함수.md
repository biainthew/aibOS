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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TRIWQM%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEFkrXC5ywSs0LXWoJOyrR9sJlTKRYl0x37ldCulVKOEAiEAvdveEWMaHJNFeH25p1Sncj4NjndbzlYnDijijq02oW8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIBWXg3AFBaXOvX8CSrcA%2BIWuPPKu4GrspyQzAKeWQC5OLxODgX3h%2Fx3fha7wB8jWeKg7%2FrxXqNaNjVnApFyVMMZFgZ94ddd5T%2B8Ifq4EuDEVLqiTfqxSrapXGcdcjIVYwr7olMifgYraQ30Pxq%2F0E7zRXqDhMhVuKmdZJzFtJPe3zFNVTK%2FUcskRo6Ze9Zqrpz1HJoAxXB0b8StHCDIuMqmT7s%2FE4Mis0mWnWnpvBahVNQQiEdkdlDIUduEdsybE%2F2NjOls%2FyC6kOJxDqajrZJl8YPe7iojQ8eRTUl%2ByqRM4sCOVlAyE8B%2FDFtk4mpohWPN5WZs9d2yUL8rA310tmLlwugVHdpaOGa3vJXM3mEHC3EzBoiwi8zGtVQwnmQDUPkHktQfT5uR6jOCM%2F8lV%2BErPADdlQopkTMUh0UjlY7r2pwNjvJlWg%2FDGs1CKG8UTKMuZcnOU6YpTs9BSY0wIjQ8t5S7f%2Bv%2B24zPMgGRYvOOh2KkmoaG74aUL1MY8Hr5EKU5OL%2Frg%2BiOA%2Bb2%2BkBNDXMRb48xtffCKsqpeV2KrdoFs%2BQsZNX1MCHwZHwsqG5EeIMq6O17NW3BlpDjSAJm1QxxZL%2BMEna%2BLOWr7z5ushOljzZrMZ%2FEhCR9m3tUTrgHf1fYsjDGOhAhpalaMI7T1csGOqUBRIzsq8Yyr913VhKrDzPTsfTXbMij%2BjSLeF8eDcmYBN8uJOHBEWFcA%2FC5QS36s6TKewnVvDNnbJ0OQa2O0w7NcyH8zlDCo3es7wBw8oIb%2BDKxYvKl%2B7Uj3zBDHT%2Fesu2dnvwjV844wSbU4f%2BJknMKuoMAJ7cuDcojWXIWU1uRWOXpLftabyBz0xlqRzPMyNGSTgqv4qTBgbdGQjPNt8A0OVlgaMUQ&X-Amz-Signature=661993ec2e94210a24e25f75f99082fb93c8daef555ad2cca0a9d6cc566d99b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


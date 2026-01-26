---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWYBIWH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDif4oBViEKr6aQFCI52ZPDvie6WcQ4F1d%2BmR4WpeYB8wIgC39CKNCKtrsFyfCv87KJ5KMq97jsOWzfO0XWpwjCZqIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF6Y2I6YhfJe332xkyrcAwKG%2BnCMCRlwBTCPNVaGGjqPODzy4NPoy8NpnyBmVeoxI5atDfCq0%2FIFTmYEcV2iocFQefICuPVUQGuD8GpbldVPUC6hQ77C7AHGpHTRftrMCxJhCsPnWHDvCEI4hsSe83S7VKIInZx0IMjiHUkp7IxPj8rZ%2BbtsEdJ%2FqSfXpd%2FzjT0oXlsugWS3W2qFtF57esOAhZAvzY61ZY2EfqMLkpjt8ee4LFbIC2fXu24ZKajgqFuF57MMqt5xVwYd2TlwGXv8ojcZ4iT5PRNpHtjWl9Ol3hHrgsK48Hl8%2Fij%2FOtKE8mA4T2HJ9Du8LC%2B6YFtQj6sljsubi0ttKXjXOaZCZ7prYtVzIU9930e2QtPH42I1gIwvtgnIsRDlu%2BBJdQNyeahoXFLHhApT1x1%2BHcbqV0NPSmlMCC6QBP20qynNyyy%2BXFY7du5ylJ%2Fc2ewqD96t2TIzGhThTNby%2FdHho7qMAGxjVfqvRYlq15BUj5GMt15Tfj4VdYT7pcfPiT%2F8ZTRiCfGBrWgq%2FBvGfgqlOcfRloQ4jKo7sXQyJ0Ig2vd0M1smbAntNcKRydrNvJ8uoou11qY%2FoX%2B9UWF1O1Sbcoq8cGlitWPg%2FhrTVNM0wWpFmrLh2pjwLnZfO72VvYUAMLL73MsGOqUBF45STeOuDRc%2BNbtpaRnSwcM%2BuP5c5zdFiLNSxpx25q5%2BTX6AlYRouUHfFCi2TVCwihCfJ7e1WSbVRAQbzsaqvQfprfv7ZueeF0L76goZU1ZA6Ez%2FPw562DQdSygX4mexrOnKYkRfVHTJ2GYByO5ZRfdlirWeA%2F6g8%2FjIGVWLUUy3Fe%2BUOVucH0Hp6l4DFEoCUAeYofo09htey2SdfemDbf6SQ5sS&X-Amz-Signature=fbcb26a10575b80bc9a4a5d27a84f820e26fa36d8c4682ada4a47bdf6f073349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


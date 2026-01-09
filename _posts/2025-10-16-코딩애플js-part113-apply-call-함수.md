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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJRMD6T%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T011628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNwf1sXH3z0%2FaGCOnRz9843vXRk6YYE4DelsoNpiMYFgIhAO2TuQKR0%2BwdpbUdKabfzmmwYspkJqStifkOZ0cjnk9oKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwokTeYcepS3m%2BD9Joq3AOYWrt0SeKC2xz3x3zkTBKC5v%2FVLwIi%2FLEWNwBkJ9%2F1tar%2FsrYw0xN5zG%2FJEMBf%2FN%2BkGyWQ6oPG%2BsVTzdpgiZHTvIy96ogLuvTHqCmZAKLeka56Oa0%2FU2yya8bygk59T1vg3er1fRr5ZyMKuyD%2FsWssqmdAS10dd2Q1mIvlvOLq7PI%2FW7u5B3hnEAol27WWTk4zT5HtIZJ5n8rSCeB0%2BaJrLNisVWvtue6jGd6Yi0HVCt7GXMdUQikFBhZK%2FzvXeIO9YwEFvbLwgbQSgouKB%2FNUsbl%2BXA7ZmEeKnX932UJqO%2FWTopCigTdFHMDGSVpLam%2Fb9m%2FOdOnWXv7kFBUWHuBQk%2B32z%2FtOnsFK1DSBTeTYmsNJtkvzeNQypCClPbDyPC%2FopRqvBfzZi61Zhlkq6Y2KFyIVPqG2wYSzmeAFIVlLwlUwb0R82i7o2yXHIRF4jG4OozI8UmaPBJdyUEzlVA%2FR0czGlZ4TqCDYh%2FUvjtxfXB%2BCnnTO7JuMBGqksm510u7HBca0k8iYmoE%2B2dQtbxaAghCKaumb9bcyepa%2F3MMNEe3XkhS%2Fc5qMWLpDql8pOE91eNNnCOfy8d29PscmV85mVXKrECr4B4KVwyKaASh0L2YcgmrPYO3VHrIeQDDdpoHLBjqkAWt6mxPu8QT6c9GsxpooH%2FRkAkUxDRHjMVTxNc7OV%2FS4gyZYlNuRszF4uhkE7sAh%2F155B9F72yQS9BEKB36GVDvHu5%2FxhqJNcfW%2Fov%2BHbqgPkm%2FnMJ4wG%2Fb5jbrG2VZz9jAmwfMLj4u%2BgZvT2h%2BzSY%2F8m4AA7rhKj%2BGk0ZwEDbVZNO2m3KdcX4q95MXiHs3h789I%2BywxYHcwyq5aauYjl2wzGa0y&X-Amz-Signature=53a858222b1d91cb75168aa92451a80419bae5c277c3e3092b0ec416e644ec7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


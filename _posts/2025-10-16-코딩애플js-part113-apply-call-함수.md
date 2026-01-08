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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VMMKNH5%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJIoHEMuQSriRq5V7FgXua1O5DgW1KYxvMiTpOwCslXAiEAhZel0UQN1ydm1Hxgp%2FHk3FePHB6L4ZbhUWiUejSaOycqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5ZCYcQFvQd1UQFDCrcAzNKk1wyWOHHjYUCxBSGpOC46KTJs7wn6elj78Lf0BJmEJWXMi9kkV8zBjDVddIpiHi1i1h5PiVFGpjogvpDG8BtnZT6vO1J3ezpiqILoTUO30QPUtnM%2FKlb9yNUFTBTEb0t1CB6I4LB0bLdkaK1%2Fa6Vd2nJGaDSTlzUkwstPfUuf20K85hAn0LQp%2Bhcx%2BPBxvu4%2B2mxiod%2BwOHA%2FWT2gs5sahpqYiXxRh6srYW9bDZQMVA7mMZkXFqdaLzUrzuioOWfhtbRGycLb%2BQZrlQv5PKVuk1oRvnjY%2BcrxK5xIm8bNY36maJtGIp%2FExvQdVY2i8hkvTb1ShpJOzxNHw2IcEhmEi0vueBCsVcHKZd9deZWQdhb7IYs2a0iiKbrTIvAdYFrNpHFkYwomvKj18Jvd6yGTlowtC%2FvzeSs%2F%2FYwkdpTeZj2sTfdROcd27EH9%2BRjGUfEHphDJJJ8cjqaXCf9ZvpR3hfcI6F4ZRRpnKyYq6VuMLIzw2EtbrCSmvW4jC8KLm1um2y4xN4cMNE7xTJl4ElU102AOA2LJ6B5tw6RQmmHgifczpvYqg1RLBk98AGVhWwdqGsyFToUD8UDwayJWHBq9qK6O3JtypEyXJowJBuE8t8llb5yxy32Ph%2FtMJ70%2B8oGOqUBe3ohGG9%2BsrnWLU5aKO67c0%2FiGX%2BWG9OnrpjxCnRFGlbH4ayJZ3FXTc3EFwmUgiXj%2BNV2qx1nYsyteLRWjnulfduH8HIQzB8KwRXCNULE5Jx%2BYvgtXb3cQPhnUJPpZHGU0cEAoclwaaZkUYkeSInCGMhPecW2ZIQDw5i0Z8K7vqzGQoQXUmq0wh5VwTSyrY5Kd5keP%2BgaV0BHVBHtt1vR%2BXH4rOsP&X-Amz-Signature=96f45238ef7293bd70377f0aadcbb459a8d432433f506a1eaf018b3ff689fa72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXWHV5D%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC4OO%2FVbdGo7Z4u7%2Fp2DG7NXOgi15ZFzWt1GuBBisO%2FzQIhANH6bubwCf%2FlSROpu9K5WsJtd%2B5ex6%2B277TS9X%2FOZFzOKv8DCB0QABoMNjM3NDIzMTgzODA1IgxzaQVV5CaYIG%2BN4V8q3AOZKtSQAeerqXTFAbZVvQY9STLpgHfWdWUhmRi53oSfKFr8e6jUtlYm1t8DmriGQshXMIgEyVQ7%2BZbhDOGn6fb8ZaLfscibEbshz2evmqAXe3ruvAkjwVa82O6w%2BLuIbLNgWD4l66hm5ztGF5%2F8MS1LS8apL0a%2B6tCvr4eNzURTisk3%2FfTzUAF5%2FeVvwbzooNR5V%2Fv52SS%2FW7aJYkaSpANN%2Fu3JgsY7cd1YRcUrCCMcY8Mj01w68bp69aa6tq0I9v71h05IU2jlziAqH%2FRcTkDz8Y2sLOP3dO%2FFo8QUueb%2BJ62jYEBZVrsB1Bx3PoZeeKCpd01utn6X1astxLq8cvWFRiQlGzK%2F%2BDk%2FFHtjt0G7vWqEB50CXFdxbg%2BMuBwsNTiGscTl4ABf7fWvastuuugGpeyvT6LTJrBYiVpylHuupu1mKT%2B%2B1dvyZyhZO8KglMSxz6SgyzIvYvV5zfQehwFDZbT1ar6mUJMCh2o5Qxb4sd%2FHrO26OVpq6XA5lxEjyWBNdIAxY%2BO4Dm7dE2LHmy2m2dnMdPsM737zvwdOUmPI7fHKQRzjmkrIXy%2FEKJqIdaPDpHCjiSdFpZOVFqiJ%2FqTZGNAze%2FLPeW%2BU%2BynSVH4TdDBKh%2FsBNQIYmNzHLDDt4eXKBjqkAfOp0j5prT83SLmY%2BVV9L901fL8QERSiPvbNPdpqggVbTvurjb%2FoTF%2F1ZhLHFL5zsAZVxDgzLE0EnX0FDttMStAAKRKHB5zVA%2BoO1%2BnXAwSjsOa2AIYKCPrKkFhFGHGa8KNycfSMvCReC0rR%2BoVf0SK%2BkIQTgX1aCDx0nQySmryM%2BNqpIRUDdGk8KIXQq3%2FnPiwJSant6fEHXd%2BJjuXwHyNsHjmT&X-Amz-Signature=7ed61d7c859dbd1f2178f39d798ad042e5c0e3924afbbe7af9d8a748e37590cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


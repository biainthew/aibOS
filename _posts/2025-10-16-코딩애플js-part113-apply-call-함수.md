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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGVWIXZ%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T093624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDpqXR4ZQ6G%2FtA4si3eKu68Gic8Wxko41n7VidST252rwIgNmDkr7TTBruJYeCdLpOyJGokWZnpNKg9VkGJMj%2BFTnQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiP4Ykkd1e9joCD3CrcAyhAw%2B8dmjmHdFYen3zmnwnO%2Ft%2FBtf8QMJbOkgq3%2FBtbzJJ4xu4UzgPC4iEL60HxntUCKGMHyhvKX5b3EGQtGx1wZsLimP0Ig%2Fz23iAfv0yDwQzMetMNXm7CfNhN0IuXxe9vpyBG0VIiw45g4tt07KVpIvH%2BgS1u7jLvgUDuB5LUvcqaMTQAtioSw4aiLdPFtQbjPDiaJ4XA9OqCwvMeOdW3Yh2joT8DuQeNCdfd60NaVrfJ6j9Dtwt7uUxu5YUdZp4cYUXJGeLJH60HXDGLj6GqUiMPfYwqJfP4lTXEYvgo1yvnGoL6E0S7kqJYln7jzTn2Ie9BkhihA4v7xyzUzaDZLgoACHWIhC2XtLed0yPpYgdDOHGasNidLapkHksO1S72zHtc9KXg0pTjEFaWjbp9A7E3GvJdQmwOUV6hLQqij2DFpAfWtR7NIg2zpKd6ikViCdq2KXFcygrSrKzHPQhqiQamQkhE9i4TJlrjF3eNSu%2FD715%2Fo%2F4Pa%2FcQDOja8Ndwes91ZNoFE7zlJa8MaILf80NzWEA8ozRMp6EUvSeIb4HguW9TfaS%2BeLdXfCMbW1vSPM9XMKS2l6PkogJ%2Bj4O3gX5MIlJ3Jkx98kMiENAqIqikS2tUeVl%2BhYJ4MPSVpMoGOqUBOlGWGHo7oaQt9ov2WivuM9p3s6vS1TEsFleEGFJp1fDLs8gmlz2jK4uJg7pTe%2BppjZFc0m33gu3eXTjV%2FBUgB7oaJTyn%2FT%2B45cR4TCwGlZA%2Bv5PclZ0sqyBsLyllLlK3Jk4KjTSiGFca5E37Pf5Om%2FH0y0h1vj8hK8U9ZU9K1%2B8GBfvHxX2ue5%2FsX8c9j0FXt8fLqVWIVNSYeUds2mNig6YbdWTJ&X-Amz-Signature=8e274ee9b3f48eb1d9b9eee029e92c87b6ce18c6a371808cfbf26cbf89331df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


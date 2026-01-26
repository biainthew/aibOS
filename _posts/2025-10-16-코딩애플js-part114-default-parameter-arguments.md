---
layout: post
title: "코딩애플JS Part1-14 default parameter / arguments"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### default 파라미터


: 함수를 만들 때 파라미터 값을 실수로 안 적거나 했을 경우 파라미터에 기본값을 줄 수 있다

- 들어갈 수 있는 것
    - 수학 연산자
    - 다른 파라미터와 연산
    - 함수

### arguments


: 함수의 모든 파라미터들을 전부 한꺼번에 싸잡아서 다루고 싶은 경우에 사용


![codingapple.com_course-status__%284%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/b0c2aa08-b05c-4536-b26d-0e419c955654/codingapple.com_course-status__%284%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NS43K7%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFoFMx0cDJToV7a9jjM0l3v%2FLj0TrALrxzcuVdkTx5EuAiBvpitafz1jw5tNWQMqGvGT8zX9i0iEEtVFIKgMVS4rOSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMv6Q%2FdYbAJFZ%2BPv3UKtwDks2C6aHLlNkLJiN28SfnM0wsm0nAIbZISWfFO%2BlL20KUDIkfKzwfg3LUSkD%2F0MDZgJ%2FiQC2HI%2FkTSfkZ0m8vI0QGhUGhlpoko8VGGDEvC2m4Op25ok4PzdMiyXE7UHNvg4sseyVsp8RN8ctQtPmyNqYi%2FgbButCoTp%2Bysl3%2FwvzjGp5cFGVUPlDU0r7zO0EjtYRhcwPE44mej5CsBCi1oLQFaeJPa9bd1fCd%2F%2FBfio6xzOCMwnvFcXoYmads%2FtOE0eJ2LK1QrurTY6ZRRGFMQ9GN3wf%2BpHvlLimfLMQQfxBvTVZwtkLOe7%2FkM65siI1sSabfEgLZnc0i188nGuUwvwwUYtv2D9ijnh6puBVfYrF3YIUjoxO9bKvwo04QBmrS68NySGh4GDZmGV%2BTjSTTkFcpMkPT2NCfDAZ8POdku4HC13qI1Vgj6vYNsV%2FONOxgdHvo5ibn4oh2KXAS78L7amcxFGxyU%2BKas7d05pZZdaqUVp6q0enVsbIkyCssUicTFHCnErjNYSwNQj8wA6dwlclCFDawjz12CSdR9honULuzsWjaoNCXuXwcKVwMN%2FOAa8AnCBoS2hdv%2B0%2Ftp1zNWARf8M78r9RAY1ixWT4k%2F2qWeR0mkRQiAPdFKhowqdjcywY6pgGel4zu73CCS4L5HbmCGuiPNqvZDn8QgSghL25is8UdVPn4kdtlOTzeunuPXHkveXkNP5N1AxxtRiC84v9ZVxZvaDHunMIWxWVdUr7SL3T9zAaI5dOMoYNFL1fDmHoL7O3RvZu%2B4FSeA0xeDeySDCDeQzV1l5MAY7poKsDX83MCEc75ZnuQN5Wyxtf6BHOlVbbn5lroz3%2Fla%2BvgHCbjP3cWzUV8SFIi&X-Amz-Signature=90aa369f9ab68505a8fb49691ca2c058b0286838fbaf71757452409f211e7380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


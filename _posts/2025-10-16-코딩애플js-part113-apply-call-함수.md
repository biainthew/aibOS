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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQC3G3C%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE7jPn6WeNCcC%2B6ZE689E69x8BDCcY790s4D8XYXuJ2PAiEAhqyhr3t6%2FUlJtjXTbhuZqOZRd1ww9EXBup7QchVVE3IqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMysQJYhFoM%2F%2F0RfircA61mSYvKel2vMEiIPra8PSoOMB2iLYZ2889NYS6cUne%2F0X5GI2PEDWJrlP7Wznify0AZQII5MdnHuBjv3W3OnuZRmGtm9oIeo%2BN9UB2t8pFLs71s3BY8Cu4UzXCrWkKy%2BjWo%2FDrBNRX8m5%2BZqTvys6SqxVCUlISj8U8vIxN8ITlTRPeAAzRlruppSvLF%2FekmY%2BALkYMFZzO%2BzNBgtmvHYEIGlGHLSo9z47L3XjUQMQVAZ4L0L19TVKE7ikKl7o9vHQQg%2FUuA1JD0KmN24BDQRvL42HVRzunBByP45FYf1VymYU3JNLu5SeZDTTmqbwdoqcvZsLzLcq3%2FB7Pp9rFeoSu1xmIo67PVwZQ8%2BLTCR7p7VsyB2toPk3r3w7v9LyAMcve5KR4J4nRDQhhHzWQ9Zqw4UYl87r4cl2G4yl3xiMJnMX%2B9k1Zec%2FIODjXya1E4s4vkBwD%2Bk%2BSt%2FhRzcpYcFbYc4Vguj%2Bf7eaqooWB%2BhYgfud7ddnz91hCqqLPFVaHwzMjXjGmYnT01JrwBXvDksmngouTyqFHrtFZ0hgvOoaQ4QaGTItIXScK39JgNAmrIvP5IHSWFoysvvb4ZMw1U%2FX7irxo7KXnmnY%2BdlNdAEoNHXdui9ia31rTvdwDNMKf5o8oGOqUBiGADwoDJA90oJUkq9zoZUGPcRWB404ynEg2kV3sady4E1mpJep%2F0MzHmy%2Fahl7JrHqn0Q2s2AC9zh7EsdgSlF5wUgtOgr38cKjb%2F3kZ3vKwOXvzZcQvLNtjDlgX8MUX1DJQUk6K0RgpAEOD%2F0CSsZ2oc4l4hgPi4yImMHWcNFj9fPS6Rm41lbqQKY4nm08Z5jOFVk1ZDzd9a32Vce4yPc%2B7%2FozCD&X-Amz-Signature=921a2348f95462851666cc5d49e22cc717f0bfc80fe7bb0ccb72f4f8f4d37bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


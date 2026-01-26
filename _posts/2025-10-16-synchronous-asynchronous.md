---
layout: post
title: "Synchronous & Asynchronous"
date: 2023-01-09
categories: [general]
tags: [Javascript/Jquery]
excerpt_separator: ""
---



# _**Synchronous 동기식**_


: 현재 작업의 응답이 끝남과 동시에 다음 작업이 요청됨


: 함수를 호출하는 곳에서 호출되는 함수가 결과를 반환할 때까지 기다림


: 작업 완료 여부를 계속해서 확인함


# _As__**ynchronous 동기식**_


: 현재 작업의 응답이 끝나지 않은 상태에서 다음 작업이 요청됨


: 함수를 호출하는 곳에서 결과를 기다리지 않고, 다른 함수(callback)에서 결과를 기다림


: 작업 완료 여부를 확인하지 않음


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.13.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cdb55bed-8594-453f-81ff-03d1038811b8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.13.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUMUWZO%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAPr%2F3wmPlcHT7PWVOdFq6PD76jNp%2FxAePbwA7Db%2BdZGAiEAtHglI8cIe3jKU8W22B1ILiE694T%2BYHTDXOOrCS7hJAYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKrqLioAigmFQ8rejSrcA4Ngf7reRZENjLvOhOTYrCNL%2Blk%2FbCy58MJENYSG1lUds9q9hZWTtqE6SW5paFKNFFGlD%2Fsj3VpTPTLLZFEeg5NUtlm3ryxJxZGm7%2BiwNIImv5CAfhwrpamjFOy5N4ZyIp4%2F4kGVi6zgyThgsmDsNi3E6VEELTKqdBOHdbwpA7cMh2UtRWXfMgEQ4ply5Z25%2BbwbNGUqOt7ssFNlLdbKhDWvxGm1NyB7UkbzozejsyjssdP7XeXVXfwMrAQeSU%2B9YrePDol4mfuMZ1SYX8fa8mWy%2FPEJ1WXXz5L6QKhBD7AP%2FYbzKxF28VUb94YgxNvbug02nAok%2FOpTgF7oIcEaka8acVimE7dr0XVd9SFssCA4zOjC6M97KaUPp7u9tvNNzet%2BMIytw8hSXy%2Fdj31w1H5ElAXuS6YxMNsnGs3SbC6ePmVFkTzsVbeq9GVkOtlx%2Bb4G1uALtsIPsHLsEFb7VBZmzBeuPeuy09aV%2B4eENy1KUyKzif%2FPRW6F4p83Q5urzq4sCXUFlfer8ZMQ9CEMj0q6byPRu5%2Fhq9gjHKQO7WQU%2BzboPuYBgb%2BTAPwFfwK7Ex8ZKHS5HRL3mlVCY7nePDxqa8mNtTv9mX%2F2UsMLuukWtreegc3OtzT7H2HEMPGa3csGOqUBp2zB0iAJdoDVqIqkHqlA8cI0iBa1la35qB0oAnkzn66RnQSwvlIThViVdBkpMqFuGiQIJodit4n0ZkhRTkII3Hal2fYUiJBd10IzKFziU3LOMxMm6SEnd4khB71arce4qNV%2FoeCRGmaVsWvd3M6y1GSkl8vPNUueUa%2FTlHszQkwQJgwzg6f6WHUHu%2Bd4Rs1wP97n4OOt%2F3srBQPiW7zGyD1ohTso&X-Amz-Signature=5443d5820213230ca51a5bd1bb4b360b30fa3a79e4942a3eae4764f186811165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👉🏻 시간 절약 효과가 있음


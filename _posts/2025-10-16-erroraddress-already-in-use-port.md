---
layout: post
title: "[Error]address already in use :::{port}"
date: 2023-02-10
categories: [general]
tags: [React]
excerpt_separator: ""
---



[: 참고 문서](https://velog.io/@woojin/address-already-in-use-port-%ED%8F%AC%ED%8A%B8-%EC%8B%A4%ED%96%89-%EC%A4%91-%EC%97%90%EB%9F%AC%EA%B0%80-%EC%83%9D%EA%B8%B8-%EB%95%8C)


🦁 build 하려는데 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0648250b-7318-44c6-ac4d-e0f83117247a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645T6Q46T%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBpcPqxw%2FLsc7clrdf3sD4m0A76J3aP7%2BtaNRkfPu2bIAiB7SbqQTYQsuohllsN%2BrL%2Fy%2B2%2Fgg%2FCM%2FYCzzo7btBFlkir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMo7WIchEpBHhq6TK%2BKtwDCb9bjo%2BXgrwxAz%2BdWZ23WCNmcgI1SrZiz5F0k2fm1aoC8%2FoxIzqNQ1PEXt65rdluZSY3KTAGsoj%2BvyAXapqNOJnIEQjcZrffVh2s9gBY7kOWxw%2BaM32DkzB2WwfB7j7F5v76WrSASc2w2HuePwxkNeKHP3UvUTn2mvb339gsosciWkfDf5Lit9jSZ%2FgqO8a69NkXXHzQpWRQ5Livp08UE1FuxKxGD4NSXbQ11xbzQIxAiPb0IQwRkpuMhff7tZO2YSXz%2BxzM2sYfLS668fCdz7efjuHN2DwCojfKCx9ymNYwSdK9VoPDsQb8VCjcmhlrJeksc%2B8Uv%2F7EiVXMEu04X93hFNNp9tf%2FzvF%2FN%2BzowEXCNId3q8qksv1NrYWM5nbWTXizJNA4rCvS%2FqrdA3CRTQSDkOvpB35OoYt7j3ufhVhRm6U4Y2HQx%2B15Orru6iIOQzJLAOCOaNlbUjAoV4dKxin4o7ztIL%2F%2F78JCOMQR28RBp45G5z6qYHcHXAoquCH0TAhOuMaF%2F1A2lEdsWtmyECcZLlY0f1UqBu%2BM%2F6jO%2Fd8GO9nS38OhNNoOsqDU2MWs07E%2FnYV6HaOF1aXO%2FrznsZ%2B0QbnjkAlZGamO0%2BtJuWwODovHniOx%2BMOZrNEwkPvcywY6pgF4MzSvwdPtbulSdW6RZP7sw%2B2FyhEmsp%2BP6o3ydZRVKZ6yhuMBsfEbYytvnIUUBXMvO6%2Bv95rzjJ8cK9JVrrKzKo%2BvBuQr7Nz%2Fq6x8lYQSvDrZKg8pSSXRFXfzP8jN6XL%2FrWeDZmU%2BbZ7XRJ4gWd%2FUQXMkPELMZnH0Po8sf73JPWqPq4NSyKkVvc9rvzS3mOQuTXgVWJ21IUff30RHpjhga6tui1yQ&X-Amz-Signature=09ed687662d26b194a948c07d9abaff101b438161d2ee75ea95fe180afe75076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


포트를 받아와서 실행하다가 뭐가 제대로 종료가 안 되면 나타나는 에러라고 한


👇🏻 해결 방법


```javascript
sudo lsof -i :5000
//이거 치면 나오는 화면에서 PID 밑에 있는 번호를
sudo kill -9 
601

//여기에 넣어주면 됨
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/37589b87-482d-4f15-9513-eec6950854b8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645T6Q46T%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBpcPqxw%2FLsc7clrdf3sD4m0A76J3aP7%2BtaNRkfPu2bIAiB7SbqQTYQsuohllsN%2BrL%2Fy%2B2%2Fgg%2FCM%2FYCzzo7btBFlkir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMo7WIchEpBHhq6TK%2BKtwDCb9bjo%2BXgrwxAz%2BdWZ23WCNmcgI1SrZiz5F0k2fm1aoC8%2FoxIzqNQ1PEXt65rdluZSY3KTAGsoj%2BvyAXapqNOJnIEQjcZrffVh2s9gBY7kOWxw%2BaM32DkzB2WwfB7j7F5v76WrSASc2w2HuePwxkNeKHP3UvUTn2mvb339gsosciWkfDf5Lit9jSZ%2FgqO8a69NkXXHzQpWRQ5Livp08UE1FuxKxGD4NSXbQ11xbzQIxAiPb0IQwRkpuMhff7tZO2YSXz%2BxzM2sYfLS668fCdz7efjuHN2DwCojfKCx9ymNYwSdK9VoPDsQb8VCjcmhlrJeksc%2B8Uv%2F7EiVXMEu04X93hFNNp9tf%2FzvF%2FN%2BzowEXCNId3q8qksv1NrYWM5nbWTXizJNA4rCvS%2FqrdA3CRTQSDkOvpB35OoYt7j3ufhVhRm6U4Y2HQx%2B15Orru6iIOQzJLAOCOaNlbUjAoV4dKxin4o7ztIL%2F%2F78JCOMQR28RBp45G5z6qYHcHXAoquCH0TAhOuMaF%2F1A2lEdsWtmyECcZLlY0f1UqBu%2BM%2F6jO%2Fd8GO9nS38OhNNoOsqDU2MWs07E%2FnYV6HaOF1aXO%2FrznsZ%2B0QbnjkAlZGamO0%2BtJuWwODovHniOx%2BMOZrNEwkPvcywY6pgF4MzSvwdPtbulSdW6RZP7sw%2B2FyhEmsp%2BP6o3ydZRVKZ6yhuMBsfEbYytvnIUUBXMvO6%2Bv95rzjJ8cK9JVrrKzKo%2BvBuQr7Nz%2Fq6x8lYQSvDrZKg8pSSXRFXfzP8jN6XL%2FrWeDZmU%2BbZ7XRJ4gWd%2FUQXMkPELMZnH0Po8sf73JPWqPq4NSyKkVvc9rvzS3mOQuTXgVWJ21IUff30RHpjhga6tui1yQ&X-Amz-Signature=db3a6d755d67d868a5763dc8d291b79784e131c0f4f14d4836585a740dc7a920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


이렇게 포트 죽이고 끝 !


인 줄 알았는데 안죽고 계속 살아남 ,, 다른 방법을 찾아보겠다 ,,


---
layout: post
title: "[Error]address already in use :::{port}"
date: 2023-02-10
categories: [general]
tags: [React]
---


[: 참고 문서](https://velog.io/@woojin/address-already-in-use-port-%ED%8F%AC%ED%8A%B8-%EC%8B%A4%ED%96%89-%EC%A4%91-%EC%97%90%EB%9F%AC%EA%B0%80-%EC%83%9D%EA%B8%B8-%EB%95%8C)


🦁 build 하려는데 뜸


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0648250b-7318-44c6-ac4d-e0f83117247a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664FNIFRK%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIC7jUet456clbnwM5oIa2GFteziECDGA4HJouWcYqnikAiAW6i64IKhGHRw%2BgtVvNQlOV4VTnhaorSgVBbbe6y3DtSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMVdXywFDG0b%2BgnmpVKtwDOowoq77Ftkf%2FYbPIowOlnfA%2FLgRsRD%2BexWKJ5XwfTPkXLbQYlYTlhx3cA7XQshIT7qsn8eBPpwKzrMo3mCKlXQt6YxtPIS%2BGSozRGXzFepuiSW2MBGzwFoCx6CmRCyCICZn1JHIfqEOXV41jYykNcwb4476qeU4yhD%2FOzs4I30gV%2BzaDuLqfge3PfXKHKCnRvmDtpFM5lDZgIyw0GJxE%2BiqcDLpt8Un%2FBo82KILxIdFbbSz4bpVEIyw31JV04gjYCiEJXxrVxeo1aJf8SZIKwBAdl2QJBkHbkzCNcU3rS2ZjdwkJckEAAmyH9czfTHly6SxhycNfDsAaZVG6vC7ZROrFkxo2DBG2Kw5W6mbwPUJ7TAhRxU5qUhpZxTgONxaQ3I%2BmK5LS%2F5aBrbOTgdWPUCbb1gGZY0koijBU7ZW%2BiwzM0MC4tyBjEew9KYF50xLv8sXg1EckzQo37rpOZo%2FdMg3Z5QfTU%2B2goU7nW1BVydxYuVgBqf6sjlSDV9FQq%2FwHhT%2BXMffOq5ziYAL8eTxg%2B9juUQBQrtS9zoMNzpOS7lNXrbt%2FXam%2FNp5Pn7MSpXruRgsuUojvM6i%2BNF%2FM%2B3HZQU7kQ0xwEv6GDTKLJ7iPseADvoPCeOs6aASYXocwqNjcywY6pgE%2Fd02ZFx1w8C8UC61QonlPipkRHURpGX0uZPSWgooPK4zAuHtQRu0QOSWJC4i%2ByydsMHKErq%2BdNTNu8S9RQq0NxzHSYTruk9wNIOFxZhf%2FPeT%2FNeQy7COK6c42kr%2Fo7RtEWYVsRWMBQyjoRZkedZ3OXt6mmbIw%2F5BR8YC8vNby5IfPAFPdzxsomrxIA9qTDUeUhW1XH9cqkk9tlWUGHCsNAv4s6dc6&X-Amz-Signature=cb526ac2a7c056c69f032cea9ca1ec1f4aee832c0b3c7fff095bf9aaac9bffda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


포트를 받아와서 실행하다가 뭐가 제대로 종료가 안 되면 나타나는 에러라고 한


👇🏻 해결 방법


```javascript
sudo lsof -i :5000
//이거 치면 나오는 화면에서 PID 밑에 있는 번호를
sudo kill -9 
601

//여기에 넣어주면 됨
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/37589b87-482d-4f15-9513-eec6950854b8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664FNIFRK%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIC7jUet456clbnwM5oIa2GFteziECDGA4HJouWcYqnikAiAW6i64IKhGHRw%2BgtVvNQlOV4VTnhaorSgVBbbe6y3DtSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMVdXywFDG0b%2BgnmpVKtwDOowoq77Ftkf%2FYbPIowOlnfA%2FLgRsRD%2BexWKJ5XwfTPkXLbQYlYTlhx3cA7XQshIT7qsn8eBPpwKzrMo3mCKlXQt6YxtPIS%2BGSozRGXzFepuiSW2MBGzwFoCx6CmRCyCICZn1JHIfqEOXV41jYykNcwb4476qeU4yhD%2FOzs4I30gV%2BzaDuLqfge3PfXKHKCnRvmDtpFM5lDZgIyw0GJxE%2BiqcDLpt8Un%2FBo82KILxIdFbbSz4bpVEIyw31JV04gjYCiEJXxrVxeo1aJf8SZIKwBAdl2QJBkHbkzCNcU3rS2ZjdwkJckEAAmyH9czfTHly6SxhycNfDsAaZVG6vC7ZROrFkxo2DBG2Kw5W6mbwPUJ7TAhRxU5qUhpZxTgONxaQ3I%2BmK5LS%2F5aBrbOTgdWPUCbb1gGZY0koijBU7ZW%2BiwzM0MC4tyBjEew9KYF50xLv8sXg1EckzQo37rpOZo%2FdMg3Z5QfTU%2B2goU7nW1BVydxYuVgBqf6sjlSDV9FQq%2FwHhT%2BXMffOq5ziYAL8eTxg%2B9juUQBQrtS9zoMNzpOS7lNXrbt%2FXam%2FNp5Pn7MSpXruRgsuUojvM6i%2BNF%2FM%2B3HZQU7kQ0xwEv6GDTKLJ7iPseADvoPCeOs6aASYXocwqNjcywY6pgE%2Fd02ZFx1w8C8UC61QonlPipkRHURpGX0uZPSWgooPK4zAuHtQRu0QOSWJC4i%2ByydsMHKErq%2BdNTNu8S9RQq0NxzHSYTruk9wNIOFxZhf%2FPeT%2FNeQy7COK6c42kr%2Fo7RtEWYVsRWMBQyjoRZkedZ3OXt6mmbIw%2F5BR8YC8vNby5IfPAFPdzxsomrxIA9qTDUeUhW1XH9cqkk9tlWUGHCsNAv4s6dc6&X-Amz-Signature=1c809e85414a70b2b93cbc2c38d0719aa5ba6ecf66a546019658cc20debc26d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


이렇게 포트 죽이고 끝 !


인 줄 알았는데 안죽고 계속 살아남 ,, 다른 방법을 찾아보겠다 ,,


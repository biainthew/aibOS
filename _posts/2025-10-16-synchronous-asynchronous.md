---
layout: post
title: "Synchronous & Asynchronous"
date: 2023-01-09
categories: [general]
tags: [Javascript/Jquery]
---


# _**Synchronous 동기식**_


: 현재 작업의 응답이 끝남과 동시에 다음 작업이 요청됨


: 함수를 호출하는 곳에서 호출되는 함수가 결과를 반환할 때까지 기다림


: 작업 완료 여부를 계속해서 확인함


# _As__**ynchronous 동기식**_


: 현재 작업의 응답이 끝나지 않은 상태에서 다음 작업이 요청됨


: 함수를 호출하는 곳에서 결과를 기다리지 않고, 다른 함수(callback)에서 결과를 기다림


: 작업 완료 여부를 확인하지 않음


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.13.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/cdb55bed-8594-453f-81ff-03d1038811b8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.13.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO5WCS3V%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDUIRyKHf2c1h45MP6Ye0rnQUtuyRUlUq0zwgCQ16c6zAiB%2BDmHAZ38TdUICVCIEc8tF%2Fy0d7le9bVhN79Ir9NXhWSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMt%2FbvKGmSYGeqAaGuKtwD4d9eXRMglTcij3jCmQ9W84MmmxR5QmcT7yJ03gbZraD3Vlixl3JwDWJHaG7JZm5Rq6nZMCsf7iH%2BkktpzDMyLXZnPcLt8dnp%2FJj%2F5BIbzw0tpdGYN%2FxgGlTFSOFKgwBHw2kcYiPFOgr945tBJb1BZHACVqUwZrxpYVg06KgcIGuerphLEACe5zVjf3Jx7GLE9ubvPcbK%2FEkfFfaOj%2B1IN2MdjMKIv%2B4rnexIEnPsapQvgX7SRJa6pAB1TyxbR75lzfcTz%2FrkJBOa3quQCmbrMgozRw%2FDNoXuGAmK8sL4sKHTYWzgYNA%2BCsDVLCsKkFicsbgVzMe9lvTRe8QPnXfcUHm%2B3YS%2BtSkmBBBOO9CQBMD%2FPzj%2B3j4P9TiCkg0QSaJInaIvVSJw7uON9qXt3KAVVl2o3MzLZAfwhDwkgHhoWypQ4L%2B91ABDqfbuBZnrXiDmGQgTHhPiyB8UI0bVW5kI78rqRsfA2tO66FwiYjQWISZd9r5VXs9c3%2FVtmHKJluhtjsRecnrFSjfUACTCbPWk8EFZ9EZl6tVa%2Bam6fEAhCkmioTfuQsoLTSBsr%2FDsWLcGNXd5%2F93jt%2FscoLsBNOECHETaXCEunMkV0QrdZFAVwKqMGUIgJHPeXsxHEoUwh9ncywY6pgHMT%2FtnC5xoBH2rntwofE7gLCrQJSMnnGy%2FKM%2FRffYATcpcBK%2Beb7Af8R1Cps6RxW8dPaL7d6sCSvimG6XSAMamcLJFFh5WGdsI%2Bq4SCJzXt7MmsSW7kJm5vDH%2BQJBIGWxgUDPpfIXARpcXLuEXBITaijR60E7x4wmwLVnc8TCIjnUTwXnsfjCrxdIpLnRT7eBlveQDE5ZDI3hkpdV%2Bmn6%2FyrIF%2FJkh&X-Amz-Signature=9b16d6fb72056e6a8fb95c7eb685cc18b4952e11dc4a382a37e76484dfa6812c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👉🏻 시간 절약 효과가 있음


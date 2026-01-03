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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZNW47P%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T011132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDKH%2FXeaObqoKDvkhUc%2Fq7ziPsRNBKpS9I63GEASv%2Fa8QIgbb%2FkY8tyLMiSpliVmRLG4jKU4bwj0P7tE7unv2N5nlAq%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDM%2FxDvQGpZXmuFnXHircA7cwaAztQYepL6TBDkPvnsJc1nOsAYhixAlVqjeBmYnipLTv%2F17Lv0nAb993iQSbymVRf1t9RSXuj4hTm3ePtk5n4Rb2Mpgl8Z7M8lGnbF9S1H6KWW8hH%2Fd%2FmNy8ZrOcKmZPtQir2%2BZeC%2Bi9OlNphyHVOq%2FXiCNlyQvNy1%2F68cYUyj02QeL%2B7hzPEV7A23COqgjYbkNEVZYq3H8fBvOImECpgP4Z3gYf666JD%2FM5CSqiYbmMqKuLp1wSTxuTLOxS4dPMMUrWGDX9JCGSM7osgXTSirhU%2FVdyzzSnzegSp8mxfPu1EY02W6632BohKrUm7fHfMy%2B%2BtHIm8zencBBAK%2B%2F7olfefed4XPQnFflW7enMR9VNRYRlXDs4Vo3RnwZnRV%2FXhCZMtM%2FEbYosF2zUOTjvHgy59yrynle%2BlBB2owrG6e%2FJ1Ba6ahabuopQXQZAgcO1GswgOfsLnxvTtlSE%2Fi2Iy45cWClZQvyd2RC9uyY6fi0PnUcX0NLsNOfxHf%2BoPydp4rbqSlWjakDpX8m1yoX2m7h0B%2BlYQzh0HKSxR7LTiPEQvfdFu6R13zK%2Bx%2BQ6egddQY43KdT4knJqZXxyZVyIdkUprKrqVn2pQX%2FAi8DIwtQGqkJwpGXvq0juMLjV4MoGOqUBdczApgWmAfFw12xxtdzSvo9AHD%2FLvOcr4b2RwKaNsL2hO2nyloOcaYUN%2BBGQt00%2B0gF06Jqx120ZnMUARt%2BkDFxp6mxFs8geMDxsoamom700GJ%2FDErqiELnHrvnyrwxtCs%2B1pUXSwnTQnjCsqyvnsz7UnMvd7cm2Jz%2BTTxT7s4C1TFJHUNcgLfU7J1r%2FZ8ZSa4Hg90BvwMeV4wyVDnKyBimIdguX&X-Amz-Signature=4cb700be89fd31318c81858ff65e56defdcd89bda15a47dd5c91443e6574c598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


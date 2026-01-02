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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7I7GNCR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD9on25SXxog9f39yQgH4G4VaMzMY5aA5FHI94SZIVG%2FwIgdyxExNIp1PGzZt3Z%2Fgz6Ud27AXJwBcpJZN3gb%2Fsnbn8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJExP0wVM%2BKs2Uku%2BSrcAy2r4lnc2hxcWg1zWBb8CwiCIuyvXpjNljK5GYlnKCHJPljYpN6lDLZhYD%2BRQ%2BxsmxLtd2KmT5Y1q%2Fq4Cn0%2FxyNx9q8dOXcMPMuZ4EDKe7CfUfydQklFUUq28wRzQP%2BdnJgFDY18Vr5zYjLrxKOS%2BPcuNHbwfsAL%2BYUUPdTH1NrB55rKxltv6qKczDcch35pDV3yd5wO%2FpKiEJfXL6tYvf2p70YmL1mDjAGZit9N5mgfQOtNU1x%2FlfThiF0jD5bRHR0U7ipe7UW1HuLMWuOs8pTyfW0TWjvvXg1kxg0syfyI5OuZTf96W09Yl3X%2F1xaEPN9n0rCLH%2BSCFQ8wqKxMR%2BE0CsSgVidbaLa07IkN0%2B5X08DYbrKka0sU9kWC8sTQnF7Cu5%2BuFDZnqfeN14kEx5l%2BnCh%2FcSNVghJ%2ByNB2FD3pbZtizvFDo9AQUZ77f8T7gdNI7KDUg24ijHxTBac8gsefbsQxX0gEsOmpYyoEjk5ae%2BD4Le6x5jqvnEBkR%2FC3kmC6PflY7uIzZk%2Bt830ymeKeG89zacOAz7KYC3hBpsDTOgmETCRSfcHyPUtw1d%2FLIQ5ms9%2Frl%2FgMjDA6evMzmwkTBmHvAkYGFfi%2B%2FhMBQWCU4ytu1may%2Fi8V%2FXCbMN6Z3MoGOqUB18X6dP2LEmJZpURCxgMvybHxyr0M5buc3Ce8sFMb0EIAWuiM%2BeavrX6zXQ%2BY%2BOvz17TjB%2FyeUuftkQ8cuzwD5xFzmhPv18%2FSRI%2BxaTTiY9KCb6l2nATATzN%2FFI9GKMM6BlIXHXFgwdCahjI744rLHbvwAHLof9BSb%2BQS6keHrUxkT8T6%2FKir3k6eqUadU5XYBucAx2QfDbWnLiRp1tKmPD%2Bfz1A7&X-Amz-Signature=ac5a6e74b80923820d16d85686edbf0d9a7aa54d0200c86add50553d60b81659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


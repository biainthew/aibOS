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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA7TQWFS%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFG0GXA%2FVx6BN0Tqsyh8LZaLX2VOLj2i1l1EFxDttWlEAiAcaTfYxgrTIMHPdw08tQpSgOFg%2BLm9Q%2F4UOmQVmZ719yr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM2LLcZMk2KJciqK5HKtwDCn%2FZa4eVewni74nBhd%2BwW86Z%2Fzp%2F2RgRW0tl1im5A%2BX%2B2eU1vRnyDfDQk5aioyc%2Flhpe1f1LUmkBsiKT2ZJ6G%2B6hFqcplsrXUtVw9VAjgVtnpCzA6MAeF1Feh7DkNhhFRJqEBDkq6MxJ9ulwp6EJVgJDaov1PxOSVmxXiZGbgLAwVT%2Fwa%2BECDUZV%2F6ZCRZLnXQJsainF3dFVzKIQGe6oBjk6A8hAtTw475f1IM2NgyugTx4MbVENpUnbCRGCVtzETPTdbmDwOPeIjaehzEkdu2BhTh%2FmsJgbS6%2Fa7faYTNYn4ejTTZjuQgtWOPclpSj2uAfVpUYzNf3cAtpIqJz4RsPQNYjEWDY71IBieVwjqNPXFb0y%2FL%2FdfTVK7Rjo3RebFT4i85x6W9oD%2FDkRxmPwXms0IQzmpY%2B40eNUU4R6v8G4PlZaasodBcQiJ7XDZt2CWVWjEzKp1%2F%2FHw4I%2Fp6EvmyjRM3EXhS1Zmw58GOM%2BEnAEZhRb%2FhVitwH%2B2uNRCq%2FFv4TBQOAODAKJjyzDQ1kxr%2FpCH4MELhq6v5%2FTnA0FroMOWhLR3vZDN5heQV9BuJj4fZmsT%2FK4Ok9fuX7idmj5UEItEHHYbrhuWK29BYmA6bw%2ByUC6jehm6X0I%2BDYwybDQywY6pgFfO3xFGjCnz6weCPBBYA6oVzx7Gp0rgYghh1OvwoCu4fF6y8Nd22gDJDbBbzEceEZTbFr%2FfmKsdGnvOSRngaXbLnWnLZ95p3ZLudcVcN3UmrjiTaQzldiwpXPWVmi%2FC0YL8d9ukQ81cZ90Lbs8FJC4wrA4GhKmR1dqlV9zWUmgRYGyt04ZnmVmo9Fc873uqwNQoxlN2Dr5spCqitwzsLbBsX4q0vW%2F&X-Amz-Signature=5d5c3c4a8b6a50769740d8b75ce1c82d47a14f559f41ff951d81c532940853ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


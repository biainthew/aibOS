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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FYW6VHH%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T011655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIG8puKvM9N6LzOe44jLQxuE2mPpQco31anpu1Ahb30qhAiEAyn%2FqcBIh5tVn5uBdm%2F5CvAec%2BT5yUkT2hfsIJCgqs30q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCjMA0eyR6ZeNpLysSrcA75F1vCYmh5cMwEpAQRmFAfPdNdqEh0ZdoqaJRk9RhoqUf0CYqFffNKL0OkEXf75SuQaSDMwLMqS%2BnvkRWPssHf07POpZQ3F6x%2BsORLVseH%2BYkDdzFOgbO%2FckkeBnUEPKkopTMVI4VF8Gzksta3gRIysB10KD8SHHOf9zOfHI38KVRrfAqFxUZ%2F3R2EkixHT5WyTSPMrylQ%2FYI8SSsMVUPY4eROP61xCTO1cH253o4NSxQZktqkvURlbswAid2GFbaLRb8QOJb83AgKilXtMQR9Yi5PoJss4%2FcBdgqcXP%2BkzHZHe811nZ1FPf7KYYB7%2FRjsZ66GgAANlyCeF6sNLppu6KDitT3RHli90losulNdCA9YzJL9Up%2BIIHaGMhM1RvRvroA4EP1yR1wnCbsaDBpF2HtzVSUE1NTGRVF%2FY%2B8hMH9J24qUpGCHhoVK3ipina9EMGxP7eqVajr08gDVZvo4bVszjLwN6bIwty4%2FJzZ5FvxFXFTkvVX%2FwunnxSzQdWz9K8iu6NtN60QBlVKX8LQs3p2zAJvFq7MzkJcNTuXDsldjtOC8XkWfObdzTCPeDhW1dt8BSS5lO%2FlAt3PxIwAZjG%2F5JYiOkvSVrtLEYOjpQvFwgX5tZrBzBWrvSMIidpssGOqUBEuIyEK92mVO4vT6abFnr4tEdcmkzwlVaLCdLwslkmVHBrJn5IgylZtSaL3kDiTSaSCGM6gCDzIvHeCIu3oQuls6Hj4NvlytzRAXYG9RclFRPvKhQBzyhUdj2vCNUglDzvRJLVPo3Jf6eUSMQomMHd8IyH0qTKTJgUOYcLq38XAmx6%2BiLOG%2FKHV5BdEZIr9oWpVM06ux5CGnJSCi6671AJnQpV7ln&X-Amz-Signature=37842231f1be234ccfe2d362c20ac0e2fe78208cc4dc211be62915af0fc65fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


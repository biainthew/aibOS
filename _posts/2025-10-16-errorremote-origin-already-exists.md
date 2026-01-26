---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
excerpt_separator: ""
---



[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVCEIB5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGgSfpP3a9COEbeK8QtW3UJVt%2BXrUGJsjU0IUGgcdeXNAiEAjrwMv5ePvn%2FUpswUVW6uViPZKGWQNzEJ2Z4QnbXQoFYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB1hKIhsPcnqDufW%2FyrcA3XWYglJi%2FX4LX4A62e%2B5ToskaXNYH1nPehuApHt8kYckYMBCPuJ7nyqg6AU5O0%2BlYgMRu4Gy0hpqvTkncq6THN0qk2B1jVIEd1iB%2FRxtCBktd65Z0s3oiKN9Di2b6%2F3rRbhCETI1%2Fu1G2baBSbOBf2Eec9ICkn1YMBKdeT%2B9simpld5tc92suHMWeXLS3uatrpgzDacq9gQyfOX%2FITynvNH%2BGeVf83kCWjW%2FnHyrjApc6TmGWrTmCAaCLRnFA4x%2BNd9i1qt7mevZ1yXISMeSc459VR4mEJc7L68yJC1TLDE6uhmjSNiykACQC6xj6vVx%2BJtQu3g9bTgyxkKoGhj9Wsn%2B7c34b4Lq%2FGlqoWU7xIPf10B%2FwdF0RMc3GnT96G%2BIh37Ob03pk3gGmORyTaxvr3jioAF23mOpH65%2FlEDKc4Agfu4JNHREUsnDzcFts5SKtecBk%2F9CGpPc8eYp%2B9VchH6nodxyHIC%2FgYN5Xg3H%2BIYoBKip86frSKJsfx8Dw4p3JIMAdsky%2BauDlrFKGGRWi7wSL0SL0zgckaLSc4Pr0nsdAWo0W3ZUOyHbiCgFJwLITRrjeblcxHnfSv79T3giKGBvkpO3eCSUT9qkGiOxQqPJjPccWehwGcYADClMK%2F73MsGOqUBzzYlIcMxgFNat1qFXl5xTGVbx7iTaICeB7RJNuhFD3OzX7suEb4ucOapNaDwhBMK26MSdHCDxjZfPUhQ%2BUck5aUlTceSPf5zW6FJfcxtslI7U3u4gw7xmFmWQCMPmGuzOz717pwG%2FihgiMfkxYJ7LCvBUWHSGEL%2FrJ7PBBFeXreCJ7tlqqN1hp0Jr5QcQGLGBBT59XSjXWf90xS2LpejqgkH%2BbSH&X-Amz-Signature=ef38b4c2947ac3006f17d88aef11f4bcce5babca059f05d8375494bc505ecc23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


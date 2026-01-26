---
layout: post
title: "[Git]잘못 올린 파일 지우기(ex. .idea)"
date: 2024-06-04
categories: [general]
tags: [Work]
excerpt_separator: ""
---



### 1. .idea 폴더와 같은 위치에 .gitignore 파일 생성 후 아래 코드 추가


```javascript
### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr
out/
!**/src/main/**/out/
!**/src/test/**/out/
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/dd9ced26-ff22-43fa-8b7a-87f8c3a2aa0b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVCEIB5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGgSfpP3a9COEbeK8QtW3UJVt%2BXrUGJsjU0IUGgcdeXNAiEAjrwMv5ePvn%2FUpswUVW6uViPZKGWQNzEJ2Z4QnbXQoFYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB1hKIhsPcnqDufW%2FyrcA3XWYglJi%2FX4LX4A62e%2B5ToskaXNYH1nPehuApHt8kYckYMBCPuJ7nyqg6AU5O0%2BlYgMRu4Gy0hpqvTkncq6THN0qk2B1jVIEd1iB%2FRxtCBktd65Z0s3oiKN9Di2b6%2F3rRbhCETI1%2Fu1G2baBSbOBf2Eec9ICkn1YMBKdeT%2B9simpld5tc92suHMWeXLS3uatrpgzDacq9gQyfOX%2FITynvNH%2BGeVf83kCWjW%2FnHyrjApc6TmGWrTmCAaCLRnFA4x%2BNd9i1qt7mevZ1yXISMeSc459VR4mEJc7L68yJC1TLDE6uhmjSNiykACQC6xj6vVx%2BJtQu3g9bTgyxkKoGhj9Wsn%2B7c34b4Lq%2FGlqoWU7xIPf10B%2FwdF0RMc3GnT96G%2BIh37Ob03pk3gGmORyTaxvr3jioAF23mOpH65%2FlEDKc4Agfu4JNHREUsnDzcFts5SKtecBk%2F9CGpPc8eYp%2B9VchH6nodxyHIC%2FgYN5Xg3H%2BIYoBKip86frSKJsfx8Dw4p3JIMAdsky%2BauDlrFKGGRWi7wSL0SL0zgckaLSc4Pr0nsdAWo0W3ZUOyHbiCgFJwLITRrjeblcxHnfSv79T3giKGBvkpO3eCSUT9qkGiOxQqPJjPccWehwGcYADClMK%2F73MsGOqUBzzYlIcMxgFNat1qFXl5xTGVbx7iTaICeB7RJNuhFD3OzX7suEb4ucOapNaDwhBMK26MSdHCDxjZfPUhQ%2BUck5aUlTceSPf5zW6FJfcxtslI7U3u4gw7xmFmWQCMPmGuzOz717pwG%2FihgiMfkxYJ7LCvBUWHSGEL%2FrJ7PBBFeXreCJ7tlqqN1hp0Jr5QcQGLGBBT59XSjXWf90xS2LpejqgkH%2BbSH&X-Amz-Signature=0c33d29bf502f41466e09664b9e3bd04970ae2ca3915af0fe8a930880c10a20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/7e8f340f-f716-47bf-8c94-84cb3f045685/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVCEIB5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGgSfpP3a9COEbeK8QtW3UJVt%2BXrUGJsjU0IUGgcdeXNAiEAjrwMv5ePvn%2FUpswUVW6uViPZKGWQNzEJ2Z4QnbXQoFYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB1hKIhsPcnqDufW%2FyrcA3XWYglJi%2FX4LX4A62e%2B5ToskaXNYH1nPehuApHt8kYckYMBCPuJ7nyqg6AU5O0%2BlYgMRu4Gy0hpqvTkncq6THN0qk2B1jVIEd1iB%2FRxtCBktd65Z0s3oiKN9Di2b6%2F3rRbhCETI1%2Fu1G2baBSbOBf2Eec9ICkn1YMBKdeT%2B9simpld5tc92suHMWeXLS3uatrpgzDacq9gQyfOX%2FITynvNH%2BGeVf83kCWjW%2FnHyrjApc6TmGWrTmCAaCLRnFA4x%2BNd9i1qt7mevZ1yXISMeSc459VR4mEJc7L68yJC1TLDE6uhmjSNiykACQC6xj6vVx%2BJtQu3g9bTgyxkKoGhj9Wsn%2B7c34b4Lq%2FGlqoWU7xIPf10B%2FwdF0RMc3GnT96G%2BIh37Ob03pk3gGmORyTaxvr3jioAF23mOpH65%2FlEDKc4Agfu4JNHREUsnDzcFts5SKtecBk%2F9CGpPc8eYp%2B9VchH6nodxyHIC%2FgYN5Xg3H%2BIYoBKip86frSKJsfx8Dw4p3JIMAdsky%2BauDlrFKGGRWi7wSL0SL0zgckaLSc4Pr0nsdAWo0W3ZUOyHbiCgFJwLITRrjeblcxHnfSv79T3giKGBvkpO3eCSUT9qkGiOxQqPJjPccWehwGcYADClMK%2F73MsGOqUBzzYlIcMxgFNat1qFXl5xTGVbx7iTaICeB7RJNuhFD3OzX7suEb4ucOapNaDwhBMK26MSdHCDxjZfPUhQ%2BUck5aUlTceSPf5zW6FJfcxtslI7U3u4gw7xmFmWQCMPmGuzOz717pwG%2FihgiMfkxYJ7LCvBUWHSGEL%2FrJ7PBBFeXreCJ7tlqqN1hp0Jr5QcQGLGBBT59XSjXWf90xS2LpejqgkH%2BbSH&X-Amz-Signature=e41a219eaae553e174a8cb640871a35652e1b40707a77fe9bd87dfa2ade3652a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 2. 레포에서도 파일 지우기 + push


```javascript
git rm --cashed -r .idea/
```


⇒ .idea 는 로컬에는 존재하고 레포에는 존재하면 안되므로 —cached 옵션 사용해서 삭제 후 push


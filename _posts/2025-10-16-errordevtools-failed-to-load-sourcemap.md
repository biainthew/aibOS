---
layout: post
title: "[Error]DevTools failed to load SourceMap"
date: 2023-01-12
categories: [general]
tags: [Work]
excerpt_separator: ""
---



* [참고 문서](https://sayit.tistory.com/entry/DevTools-failed-to-load-SourceMap-404-%EC%86%8C%EC%8A%A4-%EC%9D%BD%EA%B8%B0-%EC%8B%A4%ED%8C%A8-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)


🦁 git 에 올리기 전에 cdn 방식으로 사용했던 라이브러리들을 다운받는 도중에 뜬 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/943456cd-9976-4cd1-838e-b958d8285825/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVCEIB5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGgSfpP3a9COEbeK8QtW3UJVt%2BXrUGJsjU0IUGgcdeXNAiEAjrwMv5ePvn%2FUpswUVW6uViPZKGWQNzEJ2Z4QnbXQoFYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB1hKIhsPcnqDufW%2FyrcA3XWYglJi%2FX4LX4A62e%2B5ToskaXNYH1nPehuApHt8kYckYMBCPuJ7nyqg6AU5O0%2BlYgMRu4Gy0hpqvTkncq6THN0qk2B1jVIEd1iB%2FRxtCBktd65Z0s3oiKN9Di2b6%2F3rRbhCETI1%2Fu1G2baBSbOBf2Eec9ICkn1YMBKdeT%2B9simpld5tc92suHMWeXLS3uatrpgzDacq9gQyfOX%2FITynvNH%2BGeVf83kCWjW%2FnHyrjApc6TmGWrTmCAaCLRnFA4x%2BNd9i1qt7mevZ1yXISMeSc459VR4mEJc7L68yJC1TLDE6uhmjSNiykACQC6xj6vVx%2BJtQu3g9bTgyxkKoGhj9Wsn%2B7c34b4Lq%2FGlqoWU7xIPf10B%2FwdF0RMc3GnT96G%2BIh37Ob03pk3gGmORyTaxvr3jioAF23mOpH65%2FlEDKc4Agfu4JNHREUsnDzcFts5SKtecBk%2F9CGpPc8eYp%2B9VchH6nodxyHIC%2FgYN5Xg3H%2BIYoBKip86frSKJsfx8Dw4p3JIMAdsky%2BauDlrFKGGRWi7wSL0SL0zgckaLSc4Pr0nsdAWo0W3ZUOyHbiCgFJwLITRrjeblcxHnfSv79T3giKGBvkpO3eCSUT9qkGiOxQqPJjPccWehwGcYADClMK%2F73MsGOqUBzzYlIcMxgFNat1qFXl5xTGVbx7iTaICeB7RJNuhFD3OzX7suEb4ucOapNaDwhBMK26MSdHCDxjZfPUhQ%2BUck5aUlTceSPf5zW6FJfcxtslI7U3u4gw7xmFmWQCMPmGuzOz717pwG%2FihgiMfkxYJ7LCvBUWHSGEL%2FrJ7PBBFeXreCJ7tlqqN1hp0Jr5QcQGLGBBT59XSjXWf90xS2LpejqgkH%2BbSH&X-Amz-Signature=81fcecacb22d67ff047131200f553c033a25e14694cf387da43af0f71e93ece5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/e7b8f931-653d-404d-b39d-b5f38fcdb2ba/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVCEIB5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGgSfpP3a9COEbeK8QtW3UJVt%2BXrUGJsjU0IUGgcdeXNAiEAjrwMv5ePvn%2FUpswUVW6uViPZKGWQNzEJ2Z4QnbXQoFYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB1hKIhsPcnqDufW%2FyrcA3XWYglJi%2FX4LX4A62e%2B5ToskaXNYH1nPehuApHt8kYckYMBCPuJ7nyqg6AU5O0%2BlYgMRu4Gy0hpqvTkncq6THN0qk2B1jVIEd1iB%2FRxtCBktd65Z0s3oiKN9Di2b6%2F3rRbhCETI1%2Fu1G2baBSbOBf2Eec9ICkn1YMBKdeT%2B9simpld5tc92suHMWeXLS3uatrpgzDacq9gQyfOX%2FITynvNH%2BGeVf83kCWjW%2FnHyrjApc6TmGWrTmCAaCLRnFA4x%2BNd9i1qt7mevZ1yXISMeSc459VR4mEJc7L68yJC1TLDE6uhmjSNiykACQC6xj6vVx%2BJtQu3g9bTgyxkKoGhj9Wsn%2B7c34b4Lq%2FGlqoWU7xIPf10B%2FwdF0RMc3GnT96G%2BIh37Ob03pk3gGmORyTaxvr3jioAF23mOpH65%2FlEDKc4Agfu4JNHREUsnDzcFts5SKtecBk%2F9CGpPc8eYp%2B9VchH6nodxyHIC%2FgYN5Xg3H%2BIYoBKip86frSKJsfx8Dw4p3JIMAdsky%2BauDlrFKGGRWi7wSL0SL0zgckaLSc4Pr0nsdAWo0W3ZUOyHbiCgFJwLITRrjeblcxHnfSv79T3giKGBvkpO3eCSUT9qkGiOxQqPJjPccWehwGcYADClMK%2F73MsGOqUBzzYlIcMxgFNat1qFXl5xTGVbx7iTaICeB7RJNuhFD3OzX7suEb4ucOapNaDwhBMK26MSdHCDxjZfPUhQ%2BUck5aUlTceSPf5zW6FJfcxtslI7U3u4gw7xmFmWQCMPmGuzOz717pwG%2FihgiMfkxYJ7LCvBUWHSGEL%2FrJ7PBBFeXreCJ7tlqqN1hp0Jr5QcQGLGBBT59XSjXWf90xS2LpejqgkH%2BbSH&X-Amz-Signature=ebd057b1e75a3b2646da2cc46a9f562facb828b432a6e9bb56b049e949ac21ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


해당 소스파일( js, css) 파일의 제일 마지막 'sourceMappingURL' 속성의 참조 문구가 문제라고 한다


개발 히스토리를 기억하기 위한 문구라고 하는데 그 문구를 삭제하면 에러가 사라진다



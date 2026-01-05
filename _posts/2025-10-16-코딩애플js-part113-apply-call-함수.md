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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSLQUTW%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGxFllpw%2BJfKsOHDn%2BoBLSA47BJn1BgdZR7XRJqYbZTAAiEAwlLS%2B2RU0zz%2BCbW8xhK1ziHhylqA4IWnQLYrpIMCO7wq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIGifFyJ%2FluVJburAyrcAyNTFRWx%2BjQI%2FDPPB584BCJTlF6jZto6EZ0Fuo9M8TatPZxm0UBkNSBzTNs%2FNG4Fy1xzrh3652kLZUB9AH9qe3H%2FtVxtyGNuwkW73yssuqZClY3nEUmEGiU84%2FxE7YTFbIVWn8oTbvlBGphSTYLr6GRCC7ITyuy3rqSDerdCu7MW9htWMeaS2%2B6U4%2BM8AmwbVH7SGZ1SFrIWsvjRFXBtnmWBn1R%2BDTjlMn2lA7OlAsNu4H6YrOLNGTGd8i1A4a%2BoOIL0j628yWxcmCz4GYgL5OSOjKxLn2pwSRq3l%2ByDox1c5wzSRakOUNIMtNx%2BmvyQixZFEh3%2BXwvy4k1C18VLu73fKfHsPXyt9F5B%2FKqoj7jCMkXPCnRB3m4UmlkhqxsaaQXIpvOidDadHhflNuATZ%2FVKkIPKsiPOPoqDlF8SVrZ1HMn9DHpYp2j8kqU1a2MjFJEUzO55hvV6WTdjOPTiwhwleVrCyh7F3MLLPsbi%2FX4sOMZpCUT%2BqR1bdOwOZdERPM%2BMrC2tcWxKD3U0L2lSYxX7Y0clpXP8SiQ6W6VV9hz4nEi%2BjgAf8WdakOhdLJSXrqkEIH2CwwqCMzUk8%2Boek4uWfiRiHVRdWxEtYhihRclqEN7ckKzLTtZ1N7I6MJuW68oGOqUBoL1er02C8jruWOcxuWW%2F5f20hwrvM48oS5MKxBMzzbeTzt8Nt8JQQwoPLcTcQcFRRmT10f11TX%2BS47cHGmJX2zP%2FCrJpZf2lhdan2ErxUbmCTIEGo%2FPYGfFgLYw9%2BCK2DFzX%2Fup3ymft8K81uJCo8IevRibYzaeVlTnnzHu2DaT4aFe5LZo%2B5ZC9aKS%2FOlquak%2BxCp%2F5S62O2gEgBtfzd2QzyWeQ&X-Amz-Signature=a0b1c8c3e5be545bdf489af02a4327a534cc4cbd44eca71e4bb096f259ae2358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


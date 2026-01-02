---
layout: post
title: "[Git]private repo clone vscode"
date: 2023-06-01
categories: [general]
tags: [Work]
---


> 💡 private repository 는 ssh 기반 인증방식을 사용해야 한다고 함  
> 내가 어제 만든 개인 key 는 무쓸모였던 것 ,,


### 1. private repository 에 invite 를 받고 받은 계정으로 vscode 에서 로그인


### 2. ssh key 생성하기 (git bash 내장 명령어여서 깔려 있어야 함)

1. 터미널에 아래 명령어 입력

    입력하면 id_rsa(개인키) 와 id_rsa.pub(공개키) 이렇게 두가지를 생성해준다


```javascript
ssh-keygen
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAU2RFKZ%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICt7sAm7aJt%2BUkoDjUeTfQU9iS%2BulOvl7YhkyBKw%2FsKHAiEA7wA7aYYeh9AObMjnxDh3ihgSuFtP5CVrlNCIvytS3bQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0WXIR75v1PP4cjSrcAw0o9cdUu8%2BCat357MP%2BbR3HOj599oZ93LW3iFj7EbmIMiH5r%2F%2FPoNRXZo5Mj8SDWPrCI3lTuY%2B5DEhIa%2Bpan9mgQ6CDE7bRpz1q9mgn99HYblwdDGyBQ%2BmZ7X9ThDcYLke71Xwqt9rfeqZDc1mX3BZ9XKZjiFwOFOAQgLxDIqSNkE1yCaP7pBNm9oa7S3zaY8U0A3hb6MnAQh2XHfCR6Ya056RAbwJkeUiLWR7mLu5y%2B2%2Fumby1JhnQs3O0vzT5DU4fpgfSVc9XjPlr9crlBU1p32cG1sVa1ovI9n%2B%2B0DA8k1bbfoYh%2FuZP6Jm8huATkF268BuFdi6sImk9%2FFAhtPQQHaGTGQGLJVcOAzgfCLBxbx01WvygUU6fQ8kJ6h9pQbFevDdMZZpvfnqV4iVkBp3r5LmpPp9LZywVlzftBRSuQw42a2fRilelL0T5gCJjLeAE0nd%2FBiQRyM0A8sPn5sJVDTUcJVFJU0zapXfvmHaybnmYm0CqLw75FfyNfOnipQ%2FYGt4Uu4AvEyVIyFxrli%2FGi8wURsBx%2B%2FxbfFuZaKfiO1w3Q4uuR0JK8yW2VzmibU83p%2Bj0u6LG7SsBF4%2FAV2gyLOuQM0sBAecnQmOO3Ew%2B%2F3rr4XFzh2MBed%2B8MJKa28oGOqUBnwWTOTRY9%2BD5VmCHPYrZXP5E6y84Noq6KRoD%2By0Ew1DC7mzYyDDgIlFByzwu3OKrqtoK278ulJpCtsoSEAuMRP0mSTQ4UJIPORYXjkTvXspUrcmvONwYz0L9bj6VdS%2B8Mg0omMRTUp7t3aMZSYwYYNQlKowcuBYJlV8UEmWoURUJWfv%2BCh5OexMMQkTwuE8wVu1Tgoh9QaVcS7sEDOepW87aXE%2Fs&X-Amz-Signature=a81715d9455b8025076e85c55600d3f89e5475a75c5116cd57e210429ad577ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAU2RFKZ%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICt7sAm7aJt%2BUkoDjUeTfQU9iS%2BulOvl7YhkyBKw%2FsKHAiEA7wA7aYYeh9AObMjnxDh3ihgSuFtP5CVrlNCIvytS3bQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0WXIR75v1PP4cjSrcAw0o9cdUu8%2BCat357MP%2BbR3HOj599oZ93LW3iFj7EbmIMiH5r%2F%2FPoNRXZo5Mj8SDWPrCI3lTuY%2B5DEhIa%2Bpan9mgQ6CDE7bRpz1q9mgn99HYblwdDGyBQ%2BmZ7X9ThDcYLke71Xwqt9rfeqZDc1mX3BZ9XKZjiFwOFOAQgLxDIqSNkE1yCaP7pBNm9oa7S3zaY8U0A3hb6MnAQh2XHfCR6Ya056RAbwJkeUiLWR7mLu5y%2B2%2Fumby1JhnQs3O0vzT5DU4fpgfSVc9XjPlr9crlBU1p32cG1sVa1ovI9n%2B%2B0DA8k1bbfoYh%2FuZP6Jm8huATkF268BuFdi6sImk9%2FFAhtPQQHaGTGQGLJVcOAzgfCLBxbx01WvygUU6fQ8kJ6h9pQbFevDdMZZpvfnqV4iVkBp3r5LmpPp9LZywVlzftBRSuQw42a2fRilelL0T5gCJjLeAE0nd%2FBiQRyM0A8sPn5sJVDTUcJVFJU0zapXfvmHaybnmYm0CqLw75FfyNfOnipQ%2FYGt4Uu4AvEyVIyFxrli%2FGi8wURsBx%2B%2FxbfFuZaKfiO1w3Q4uuR0JK8yW2VzmibU83p%2Bj0u6LG7SsBF4%2FAV2gyLOuQM0sBAecnQmOO3Ew%2B%2F3rr4XFzh2MBed%2B8MJKa28oGOqUBnwWTOTRY9%2BD5VmCHPYrZXP5E6y84Noq6KRoD%2By0Ew1DC7mzYyDDgIlFByzwu3OKrqtoK278ulJpCtsoSEAuMRP0mSTQ4UJIPORYXjkTvXspUrcmvONwYz0L9bj6VdS%2B8Mg0omMRTUp7t3aMZSYwYYNQlKowcuBYJlV8UEmWoURUJWfv%2BCh5OexMMQkTwuE8wVu1Tgoh9QaVcS7sEDOepW87aXE%2Fs&X-Amz-Signature=989022bd36f6d1a48d43792adeacb013bc15a883ce2ab9a0aad8373b01d8fc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAU2RFKZ%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICt7sAm7aJt%2BUkoDjUeTfQU9iS%2BulOvl7YhkyBKw%2FsKHAiEA7wA7aYYeh9AObMjnxDh3ihgSuFtP5CVrlNCIvytS3bQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0WXIR75v1PP4cjSrcAw0o9cdUu8%2BCat357MP%2BbR3HOj599oZ93LW3iFj7EbmIMiH5r%2F%2FPoNRXZo5Mj8SDWPrCI3lTuY%2B5DEhIa%2Bpan9mgQ6CDE7bRpz1q9mgn99HYblwdDGyBQ%2BmZ7X9ThDcYLke71Xwqt9rfeqZDc1mX3BZ9XKZjiFwOFOAQgLxDIqSNkE1yCaP7pBNm9oa7S3zaY8U0A3hb6MnAQh2XHfCR6Ya056RAbwJkeUiLWR7mLu5y%2B2%2Fumby1JhnQs3O0vzT5DU4fpgfSVc9XjPlr9crlBU1p32cG1sVa1ovI9n%2B%2B0DA8k1bbfoYh%2FuZP6Jm8huATkF268BuFdi6sImk9%2FFAhtPQQHaGTGQGLJVcOAzgfCLBxbx01WvygUU6fQ8kJ6h9pQbFevDdMZZpvfnqV4iVkBp3r5LmpPp9LZywVlzftBRSuQw42a2fRilelL0T5gCJjLeAE0nd%2FBiQRyM0A8sPn5sJVDTUcJVFJU0zapXfvmHaybnmYm0CqLw75FfyNfOnipQ%2FYGt4Uu4AvEyVIyFxrli%2FGi8wURsBx%2B%2FxbfFuZaKfiO1w3Q4uuR0JK8yW2VzmibU83p%2Bj0u6LG7SsBF4%2FAV2gyLOuQM0sBAecnQmOO3Ew%2B%2F3rr4XFzh2MBed%2B8MJKa28oGOqUBnwWTOTRY9%2BD5VmCHPYrZXP5E6y84Noq6KRoD%2By0Ew1DC7mzYyDDgIlFByzwu3OKrqtoK278ulJpCtsoSEAuMRP0mSTQ4UJIPORYXjkTvXspUrcmvONwYz0L9bj6VdS%2B8Mg0omMRTUp7t3aMZSYwYYNQlKowcuBYJlV8UEmWoURUJWfv%2BCh5OexMMQkTwuE8wVu1Tgoh9QaVcS7sEDOepW87aXE%2Fs&X-Amz-Signature=39f06c537842f1bc37ab5e99bd3a104f67dc53334be6686684d54fb9db93cbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAU2RFKZ%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICt7sAm7aJt%2BUkoDjUeTfQU9iS%2BulOvl7YhkyBKw%2FsKHAiEA7wA7aYYeh9AObMjnxDh3ihgSuFtP5CVrlNCIvytS3bQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0WXIR75v1PP4cjSrcAw0o9cdUu8%2BCat357MP%2BbR3HOj599oZ93LW3iFj7EbmIMiH5r%2F%2FPoNRXZo5Mj8SDWPrCI3lTuY%2B5DEhIa%2Bpan9mgQ6CDE7bRpz1q9mgn99HYblwdDGyBQ%2BmZ7X9ThDcYLke71Xwqt9rfeqZDc1mX3BZ9XKZjiFwOFOAQgLxDIqSNkE1yCaP7pBNm9oa7S3zaY8U0A3hb6MnAQh2XHfCR6Ya056RAbwJkeUiLWR7mLu5y%2B2%2Fumby1JhnQs3O0vzT5DU4fpgfSVc9XjPlr9crlBU1p32cG1sVa1ovI9n%2B%2B0DA8k1bbfoYh%2FuZP6Jm8huATkF268BuFdi6sImk9%2FFAhtPQQHaGTGQGLJVcOAzgfCLBxbx01WvygUU6fQ8kJ6h9pQbFevDdMZZpvfnqV4iVkBp3r5LmpPp9LZywVlzftBRSuQw42a2fRilelL0T5gCJjLeAE0nd%2FBiQRyM0A8sPn5sJVDTUcJVFJU0zapXfvmHaybnmYm0CqLw75FfyNfOnipQ%2FYGt4Uu4AvEyVIyFxrli%2FGi8wURsBx%2B%2FxbfFuZaKfiO1w3Q4uuR0JK8yW2VzmibU83p%2Bj0u6LG7SsBF4%2FAV2gyLOuQM0sBAecnQmOO3Ew%2B%2F3rr4XFzh2MBed%2B8MJKa28oGOqUBnwWTOTRY9%2BD5VmCHPYrZXP5E6y84Noq6KRoD%2By0Ew1DC7mzYyDDgIlFByzwu3OKrqtoK278ulJpCtsoSEAuMRP0mSTQ4UJIPORYXjkTvXspUrcmvONwYz0L9bj6VdS%2B8Mg0omMRTUp7t3aMZSYwYYNQlKowcuBYJlV8UEmWoURUJWfv%2BCh5OexMMQkTwuE8wVu1Tgoh9QaVcS7sEDOepW87aXE%2Fs&X-Amz-Signature=753722fda5808d60b51907c742ec5755ed2179f60f65710b9e7db8dad98e3fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


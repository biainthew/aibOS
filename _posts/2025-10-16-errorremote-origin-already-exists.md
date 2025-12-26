---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
---


[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635OAOUU%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T011452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBOH8TBaNnTfOtUtaingdePT9mvrykZ%2FkWxb2aZQtIcuAiB6rai1Ga85Qnuz0FY99rEP43gJRfzBpZlOglpXxZjWYyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMWuX6vaPloN5U2gMNKtwDPYvCIMYp2WVzgOfwmPQLXd8imUqqvSn%2Fs7MPkcQZqo2sjtTEdARnET2%2FwnCEaeqTPEnPD75zuKHJjEIbCWRxPK5teS2xIPBDDkqgYswP%2BhC2H5shLcshuD8ZoZf0UPKYbIetq%2BEOQK4z93WzY3oBxZNsWuOxqlOK9vnFhxtxsu7xSLdz9KSpBQWStNftEgS51YkLhUu29PPVsg82c8%2Fbjke49Gq9wyT4QukncM78TSUdE4s1dHV8tl1h0hP8SCxZAKaq2ZPzkD6%2BUjHXUkrBRgAR42WUZMpgO%2FYExGbB2Xp%2BwC9yE7GzQL54OQ4%2FN3NCrmNacu%2BO2ijlBXEp%2FBnHUUb5TMCjNHyG%2B4YK8JfSPgxyqZWOztbqGYkIl73AlcxTThQEu7oxwRtWvRXbwGR%2FKIThiz9BnigwHqASMMLo%2Bfq3VTRcKm2i4S91LBc7COuFrY3%2Fiuva%2BcpAmKw6kHF2bu8EHYsNUweh5R9pbX8uEaBPXYn9DC3ecHT3WxT4VWOLTDIT6%2BRm5akG8UZOc%2FbMnvPdA8mzHl6%2BJUVpiUDUGL%2Be9867TCH8Bb5ARZ5DX5pDHxB3lIPc2Ljwwkf%2FgmMpc5Nj3yFbk85SdcIdBrIKzgY2buJqIjg4sI4O9ygwyau2ygY6pgEsLlck7oNtSeSFtFz2MWNH9aCqYYFwa8DhEQvQpkA9LSzqZeX7z%2BuiZembjdpVzgIfuJGXmm9vamGgsQUvC9VRl%2FMREGmR5DEVWjeWs7thwYzJquAyD2LShVCh5PprX%2BBL9UA9OmYekmEEBeV8e2%2FQLfsCl9%2BDD7ijJJxChtbZnFfqzIba01xmXc2ZKUi8fSfwjZ761w%2FE8Imc4arLQipJTi0qYim0&X-Amz-Signature=a282e430ec1ee73786424cd4f10a739d1811b0d39dbe6ee3129a287f7c0b84eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


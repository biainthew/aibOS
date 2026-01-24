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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGKKJQF%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T011550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBwTUa%2FzZ1qMnwBEEkMp4sgOYSF%2FspTn6VpFtGTyTopBAiEAu89n4PdH32uT%2FAdEF50fHLtnxuPIyqZsursfOMamRh4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDsOjnnHBYVqc22e6CrcA3oInA2atTXr1lTH5p7TEJjYrfer3QeS9JZUmgu5JUkNQKT2019c5tRL%2BuMJBx2KGC%2B7NAg7hkBV9Rz6b7nbvR2Kz7YGbAATO4LEnKUneyFIOL5EPGQpny59ZUOwgajKfFl8aC92T91px%2FETNKVZoKUsAaOUVt7FkAB0LWG%2BldM9%2BXpnbHTaN9htoQAaxVjW07TEeqOlmeGrFQvcAWrUb7uqy7zrDY33xQhZQv1kXyTpve3H%2BuN61aeI3%2FHip5cektPuGTu50rJ0gpUSpgShKPlCzuCuIFIJMcuyZtXnFBffACQSyHUiH18QX5Zfq1Tnqh%2BC%2BuTTtuTIgfwoFoxk%2Fh18TFp0XesfEz86lbHnSOzM%2FqSdFTcoF1D9P3ZwTdldQQfnHNckiCMdl3X6jfyc78Qkdc4Uzda%2Ffzwy6rbDR0qFAhWxAuA1jy2vFABhDnTpRFvV3DGIa6BFVUCaYtlECGjfYgYMkjyqkisofWMj1P9q3zn6KgnuTnQgwntNilicxFK9eQCIxUj1%2F8rMuf8jW4Qp%2BSzx5viMmmPr2meSDuMv8eO8G7ijtiGrKdOzgTcLtHGCswuo2k7C7wexTpynRoLpRul9m4tvvRg2d52Lf2SyVglrR9Zm2qkYKJKaMMiw0MsGOqUB0OFBAey7oKWruBe8cQkdxsbCh8c1MrIDuc4tH%2BlE%2ButIbm1Iq4j4pYcRwdmFVwjhL9vYpICRs47ENhwKqq4iKhf4VtMNVpTf3Osp3YLt71AnWSgGxJJMk4uHg8JAXTgMGLEm1olAkdUgLwAO9Bk1rSa9i7xtOtnR0q8Kvvk176T8YrO7%2B8TOM%2B2aCsEQvmn64VtAPh6OZKlQATClXR8HOAHh3n9h&X-Amz-Signature=69c4dbd695706c14ca3a6651ddbd4a581ffb6249a7010514d5cb918d9e3ca575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


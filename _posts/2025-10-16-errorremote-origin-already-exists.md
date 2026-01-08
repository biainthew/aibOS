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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNNMHTK%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T011801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCOqjMInLD%2FYqjLw0dLTo95vtSfnuq%2BrUzuBDH%2BCQeEAiBoEVhSSYBr3DgUjTwemkCeKo8EA7NyslvwF9gA4ABZGyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ9Dn5M356EgpPhRlKtwD%2FlmlSi75xOKTEqKX%2FDihhJQEXpbw%2B8ifep3Tn1fanRxDr3xJRa%2FhNar5oixZQ93IoCsLuMMCYJeds4RjIpcMIGyEFLESRzpvaO96cp%2F2abcfh%2BOBLNYlnTuHOoepDqC36RuaCJ%2BBgFhazKmhayOF0Dg0Wi4G%2BlPuAsumlA33R%2FRzQnSrMTL%2BcYN0krPFTxzHJIaOyGJGj2BY07GdeTTaN0LbLEeW6YJ4pfsGgxVybWhXtcNrhqaJTP24lVlzAjjPB3btg99oTl3nfvFFY7ktd4pq%2BdCEpqHKta9JREVHldDw5Ck2E0oO51nG6f%2B%2BZtYdebWzKK2FGgeiUYXvUDtyulD0PZUnJPXkaybwgVY%2Bjv01VPfOOvSXMJmACwrRqeLAOvf4cZH7lXmnH%2B8mgeTPEYchJzou%2F%2BXy0lkswxqvYgOXIuJlGVPjKt3xyFTVaSslQulsGrChY1Sup2b%2FG3IHO3MyvpV%2BTvhGbCiHUQc5eXWe8pcTRQy8PQszcV%2FQGB52Laf87moKKNrkrXfVXbMhitbcgARzaKPl2YVVetmpXKUe2%2F6mlvhGoPtZQAGyVFNA%2BV3hNNmB6qfD%2By76GX10nJLn3mnEhg4sXhcmc5vLTWbaCt2WX2cAoHi0rKkwm%2FT7ygY6pgGFkBYf9XE7LALAIg2E62FHsrIWrzv03Vt%2F0zi9n3X65KHMctjlLPQctHzJrr5TV8I7B72EyuzM8nrW1MSaigx0yMuJ%2BT%2FoNiph5ONwvB9dQmHWdeBHXuRfRQxi%2FyOA7WrXpZQARuMsavpJXD7O8sjm%2FUzz9mHxChZflzVMiHMdMJRRLsyed6JITYJZXa7GhzxIu1t0yBgGUOBaJ05DyJ%2Bl6ffEuuim&X-Amz-Signature=59b5cbc4225ab1939c73e9bc1109e33aa729d2d561e716fb1d1a33408e0ca485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYHNOC4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB01W2o95WP%2B%2B6L4cuuBHn6yfvuZ0K6IFwH3IKIZ26GRAiAQLIIFp9dUvF411gFH%2FkblmzkP%2F1obpt9P5XXXR%2FL4ESqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEcLkuLoVuWm%2BH0rwKtwDRtO65kXATsR88kWBkBCIHgwc0wxoOZ1BjYB1QKrG3CmQvbEk0Szm%2FfzvlDzdqnvMkQcuqbWbp7Ks6dZhXP5vjSnkchW%2FlX9yTV81C6bAZW8nZ3Ma99XW4yhkx1hLni1vuKW3XCa5mmQGQ0Mo2Tv%2BTJA7ZUKswzQt8XmJOpjN2La3YRgZCuqg9owf%2F7X4IOIXi94OY0qh86SDtxY8Mmi3o1ahoRm0TwZvX5dqW9Y9TbjFqdxe0T5BPzXluhssWHpZIf89RHj6cpyD1AoEgjPyZF8219OnDcp7P%2BBk%2B77E8vNZTnuUsulpllc4FSqpd3BK9JBgWnGaaSk2ZxxSkEoA6sRyqw8DJALWlX2sPsZUj1Vpot3hrLJKRgLSV8mBfbwF5aJpqkm59beBGtR0zZR7NIlM4sbwJ9YA3Yp7q5F1i0LjjfxySfdYRAPYOeYvOSXbdj0FDgC5WqGXRQEzjae7p4MEw6%2FfvhL7caCCh4xd6O5K%2BNLmDmGAHX0yNn9Xg2rUMqjQdPj9ezE75etWCcT8UaNhcG1IFW67MYvscrMjHTeGjDQ05VvY8nqL4q15Mz9HvzjjMzgUqNu1%2ByOznhOxuxPQaJk8kv5kMjKYuMGpMrZgTHArFEoYbYDsoEcw85WkygY6pgFmLE5p5zC3HBsJ7FeBz%2BSxMPYGAktIOiIH9oQlTxO9DRI4uPu24wyvbDovfIkBn31xIcQH2qna6JpmttHdu1biABQ6pGLbyL6tbBZHSyBL9cWvc0mEPoovrZaWJ7MscXl7ylzJE6G45wLUZyeRg5816qe4kgpGBAyhoRo2tqWDa4V2PX6%2BOf93cPNntgqFSDx%2Bbi64p1BjulL6pNusLa2W2cuS29Bm&X-Amz-Signature=b8108112930ba4583a13b9a774c58905dfbd3b733be3aabbb8dbc8363a5ed1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


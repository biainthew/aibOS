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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52ZNDB4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T083301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBSJPZ0XnU2%2BZ0bFJoQJ%2B9PMgPK5zu6HeydVtojjXsAOAiEAiMeDLWAmUOVFRceRwq7T24QKwdW3VSmkdIGLc842GlIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS7%2BYbbVaTVxQBlsCrcA3MSfHCNx08jUZuZNPc%2FKxdpq4HoknqbnqC7zGw9U25GPOH6iBTRlq2Cph%2B1L5jlZOGr1XkOaA45jNhcj5tBm%2B6aL2ynpTFSyJQhwgdtey7Ww5zfxnS54niw%2FXzM2adSr8i4ff1lwIEoBSYc1s6x%2FcEUeNOvOZWQkk5HV%2B6BeMluq4BmEwaRIoQYUMskIBiXfCOUyszxtVKZ%2FIMQYSPg86F1ITwGpiAc%2BCzEvIJID%2FNeuk%2FEzCKgUfWNR1jRETtb3Y2umdgDrQ%2BAjN%2BQC2Kisp2rUz%2Bc1OGCKm90zB%2BiB%2B3el7xoMfQnhxEJ%2BadJSgIC%2B8JqhxuPDaDyLbN7krUkKYfEAZ%2FhP1Zsl1oTbD8CF2Xry25t4RZDuk3U35Ux3pRfT3dbN0MKPdFxQyzmGOHYAQyscXhruAaHoY9x1rC6KZVhU3IRaRW6jD3PkoiZSplYWcck1gUDytDQQjG0nQ6rhAG81RO%2Ff%2FqG1Y3NoKQaFoyOZRN%2Fqq35xm3efE%2B93n6h6W0K8YkpA8euCF0wsyIhztQJot9ajY8PTlAnqo9jOPt67KoZesmPS3aw7WcqP1TpM26zZAAnEf5s9FqT8rnS%2FVlJ5LUuj0NsEtisE4cFRrixqbSHzv3HL38nFgPjMN35o8oGOqUBErQ34iZ2%2BxoVaxUiGxOxu4taukaztCkPGqr9oSro2M%2BUh3Tlz7lflbR%2Fhi6pvnUEyGWmzMDCjU5oVi1uV3P%2BedJDl2%2FFN9YTfhbf4SynEkugdpBVXOnLQzBONzf9XJVPqF5axP6b0Rg%2BIi37zEpwHWRNbE3cXSo2yXRxFJdjDuauCCSQnB1O8UWZ47dYJsRpOUBL7XIVTftS9OKryy7dpGbrit%2FP&X-Amz-Signature=318c7f45eba1a0e604cfc61f00018bbc37ff70f9afc1666b5a87d1c6dc682601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6B4XCG2%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T011515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9wYwJd2kXtUtLhn3ZFOP9OsbJHjoDW7NSOPuU2YWLxAiEAlDdQppyeLxwFjBaW3xpUCxaIHqcnPkOtpCNOVBpCLa0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmveUhg6TpgExgyWyrcA0SLWv9XQDb8EwyzAhSAOKxr%2Fg3mbCYG%2Fyaj2%2FlMRKotl9hKhHQVOCziO%2By24nOgxh8BcwYtlPXMrSwcu0N7yhU5w1I83OmoK7ddbBVWiE4lwAAY4kgRiAnAkUnETRUnaHVlcITIp0iz4iEAS0CGOgJun3U6s1Bw5APkOXEnJpkIZlDVNprs6KRX%2FMCdj5G2ip2lorMrgzH%2FOBTiMFWk%2B%2BEL%2FTLguPCDIevdMDYH3O7YZ2gKTIC9FII3JzJ2RcJLlUP9bxY4zhHZbw3iNfKUbEIqedMTmnjAiJfs5aqcBzE8isbnwUlOXpJD02uMy%2Bk2igRNUwCQ0t7uYrWFpMYgxIaLO%2FMCQqp78Oc6R7Vs1W3cX96ZR4hpt9i9T7ZW7XEdMgdsCTh7Fzi86vvxk4hh1uGwgNp5THmv7kIfUQ7An%2FxDVnGXLwRRwV7uGw1JQi%2FvVvN19mZkpN8eVGXcQ8uGYmtSb3Q09memT%2BINibkfiRJy%2FqbyL%2BC8TfSRoajx6dFJ1JAT9l4gprH45ltk89DBfjp%2FfaaiLSTUS%2Fa2O426QI7Vtv3QM5Wt8MVSjM4L%2B0U9IjECt1N8c8ifDR8SnnrU2Ft4Hj9X9Sd5X1bRCQ9XPvDUyxiaAmPk0AoircXcMPa5y8oGOqUBstt1ZLgHAYY2geLkjlJC1YhgxbROiGvRsM0U4o4qlzOwm7r1UutNp8rLSmuNfbaziD7GVrcDa6eFWW81Dg0SBvCDPbAH7KtPywh5DrbeOrFodjVuIYi99WbPWhGtRFio9K1joKipog2w11As%2BtogJdYvOF4lDwzWOma0Pfw%2BfT3Dm%2FWriSjTw80AagqQJzMvHXyCC5jXz3h6zLE3ZDgWzxHo5F11&X-Amz-Signature=be2622de4733a612fd65c6bae1dbbc55960c7dea6ebdfcc81d863451bf6d7121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


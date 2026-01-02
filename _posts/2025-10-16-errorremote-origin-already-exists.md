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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX4FGR2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T011652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnyTlbO%2Fpidl77D7LtQqN8HtVH8uQmvsKtdLty6VD2tAiAm92meAWy8gtyBViAoTzJ7R6X8QS3MXClw8%2FJglZjBASqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFGde9fcXS44CfhyqKtwDjQ8EH8p11Ho4T0JdOKA67kYcyZ9a9bElLS1J4uEBhXnMOoWBZr98gddANBCrUWVRKbntnP9mrShftFBYZ6VItNE3pw%2FOqSUkielqyJHTJ8cof%2BctwWO3iEfnenS5MjwuHxnrQotJCgCf1GOsPZM4vJVmmvKmt1OEWcwGt6oluyGnsLqFhl%2BhZKJhsGE9y1fMe23QvIq5ZjqBrog8d%2FgG2K%2B8VDv2YwtivuWBanV1rgks2jZMOC6tbW4U35cEEx%2F91o9WgSSHbi%2FGA3gwiLU3keLQQ2OaBgC%2BgTY0eXamn2s%2FwPf7pszbnO%2BqUtul1RIfZpbKhuCkqTUn2oK%2FjNl3kdeoaKnIpFiDxAYXktV1IFOf53aIkG2mlKSu64lF1TPbP8maZWHpFrPw2mBRql%2BiF3wD%2FcofJGYpSdtVcOg94lOGTjvGDYmngwfmqMLc2g2Nq2GkErE%2B2G1UTyfEZVHTAzMg1vsPv94TCRYN4xpTVxr1XbVE%2BmRUCaBSIKuHPYzZzzkWwnjT%2FF1Se1JXj0LGKSZP7VrOkysf2Dfb0ijOui0ZJ92RuaF5%2FNv4nGmf3h7qGpH7egx8CUiWk%2BPnPGejqI3JPGD2Rf3GnBhIABfzEq6IlnFMIln6NMMPVWwwqJnbygY6pgGBOP%2BVVNVksp587LIFi05oi%2BHBFWm30Qa40mgSJZJXgulkoS7r%2FkLILLOS%2B%2Fay%2BnTBp2ruzTlTcn8rZcSCshXFdMzgBHM9hVyYCMTY3qQxzXf4nuRxrxSgsE4NiXuvhF7BNU78UT6R4UHgPeYd0GZ23xetJrVqePi0z0YqkcI9rXwIuhzAz7LiLV8t1zjn9LJQCYbYWby8PlHUU8%2BFVDDHBkM0VAVT&X-Amz-Signature=4a9e5a7d698e3c0eca94aab9da9a122f5187e35fb131da5b598554c2f523c112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


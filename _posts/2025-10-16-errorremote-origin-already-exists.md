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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLVQE6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUbH3i7AFRKddd0nsOZZZf3Ec%2BNJ%2Ffm2gLb9rfyFAD6AIgea06d4HOc7Xw4kyRgUahn4cTmR2wTLlNwuamykSKBsYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD%2FUIDEHXjuTeAyrircA1lZCRWmze5vJbknM7mQnlz39ulVmdw3TondvHIN4NdKWOpf8bPrWFKRBiLj4PX1C3gew%2BMCmbForU6G0BpU%2FkjINH9m9ttwA98XcrorPXGD7ZI%2FtwEXJ%2FlWO3AHTHM%2BtCdoGvwE8DpaTrXj33JJ4A5eypd8n9LOHcez7PgFOd4bdXzEGdizU0BL%2FMFk2E5HGaT7WuJLTzbHramomM0ZwqNI5%2Bs5kC4y8F07KGTW6XAwrAX9ler2975yC0goDgGccIS3Qn38ED2yYaBftQCR%2BS85djPMKxedMPbXd%2FHUE7xWMWxjueNoaJsgnA7DYJ6O%2FVIL8cEyw%2Bdh8NR%2FsJFHwJaFW%2BdgEu0WQeOTHDpkgle6Xrk2pQjyhetghFkD%2FlB5dYZj7g1sZ1w7J4P3%2FYe95BkxHNDxyT83TTvP44sLFCcwV%2BDYSl%2F6DcPwThsZlcYViW4MplunMwMOSRDTPI56PPp48T1HGTRmX0OMMI7u9%2B0kwfsG02nwyhENrpAmlFIFbwWV0Y3wpNnCIVk3W73OAjBjiJ%2FCpiyQ5fJZofb0PKqRUloThm0cVGGGrg2h1sz7%2FCO7wjn4tCXBWU1707VD%2BIklSUDjeAdPelC3ZsWC79vgbJtLAg%2FbTRwQxSr4MPva0MoGOqUBmOv%2F6a5fgs%2BUozPnGMQr4iW5xC1o89XT5EVs2le9OP%2FCfd6OJikSeYaO8gcJ%2F3jUrHjGYeoSU3nBVxtfYBhQhfEH40XCgXkXtUifSMc2zXazCqtCld58A9ElzVLzOUyhKte%2B18haA3WY6CnjSApUXEaOoRITjheJBhHfv4EZSNeSx%2Fg1S%2BAaMzrlu52XjzbaD2PkwD99CTeOd0ButjLtG1w5LF2T&X-Amz-Signature=d865dcb3148c2612efadf16a7531902be077992420049a922e4a0e27d5e19ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


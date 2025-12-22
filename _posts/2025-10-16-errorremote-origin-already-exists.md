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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO5D2K2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T095457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICZa30GMz8cOTqJ8TtAMAId4qFDjtM5KVR%2F6OUJKgdEbAiEAgyIDcQ07YQW%2BKtewfWVrv9c3d%2Fsru4njV1O%2FOXU3M1QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZS%2FOZN4uiePkKsyrcA%2B%2FV78LF5%2BXeK4AwwnIdIN5Vqo88g8uuZYzT%2Ft0e9Uch1DcPDn%2BrkOwx2nwl48esxkL0ehcZeNDNbyfurAFo1GgKl6cxOmlLPY9Rdow9xOw%2BaoD5Ld5oBRdWIx%2FT%2FW4u%2Bw9iYEQByw6A52XL%2FzJrPG54sd%2BvVbdOaLZrFl1j%2BLzEfY6htxRZbIoc8C5GVQXFQJ3AdFkql%2BAMUNqei7q7QIWUnVaqgAxyLjJaeWaL98nhCncPmLI6p1AO%2BBHc2aYuRRk0If6255uEqG%2FU2HAgOLGpuqnrM0b2tKopuECqPB8IfqIfvdURTpACLMdy%2FXvQTPbyYSllwW9yVVNOsevzg%2BuZJuDiqqaaCz%2B9ExHhG5LEAfp0Nt7WLseswLor2VtP369xcgpz7Y2uu6R1PAKK0GaFLriTOK%2FiiXt%2FcK34fg8tHcyh3Foi9%2FuFXf3Tejl4miE9PrsXtL6KeSkX%2BClubyTkI7NfzqKRvzSQAuwzgt29AI09QrjrTfwGQlvgMfVYfgPXAR9q7tN6k3jnmz198UBrGxsYzfm6hvvreEg%2BtIHoVK1de1FNbojQs4SsMt%2FTlmwtbSLLp9TW9I%2Fu5oqS7Zbv8lS%2FRjRz8G14Vj6tmAxBxw2Ji%2BDoftehezBtMNOVpMoGOqUBu8b1G1yXZyndaz0jwnn5AJmO%2FrSpivutTVjKIe5199D%2FkjlfmblQjR3gKLTO5174kPZkvYnZu89Ndt7m%2B826uTiSwSRFpCmfTWPax032BVP6ykaJW1L2iJ3ymNlj%2B3xzldPH0km%2F10z5sNiieJz9wNgW18Zbde6WCjgUNr9nBauFaYpt8TWFup8n5nj1y1zJfiV5kvt6RBUnBHKHvmKpnjORsB6r&X-Amz-Signature=f182c8d49de084489371f71a7e22e50300f20604f8701ff5f6e67bfbe1a5196e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨


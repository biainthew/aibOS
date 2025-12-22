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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PTNO5R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCMMX0QC8KthmGH7iEmjOKPmtbMosfrAmARUooW6GnXTwIhAPC8zlgKKQwwwjfbViMHXH38QmOZGeUNo9fm7%2BCLZLFgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOkarNkqQb5QKItIq3AMCVPUg9LiLoig1lJoM%2FYB3%2FFzAXD7JWpaYli6GaGmiVWeEjON%2FF3GDX3HEYV1uNdRvgqEpHoQZlEyd3UgqAuLtIYdG%2BOfqUcCbuwM%2FKwUwDFuipQx4BK7DrixY2cL7RHZLEG6JNSlMjAbkE3nL0MA84ymhwR7BzaTgBsm78rJwunPphfYXYVjkXysm0yJP7YyCvFy4Bbgg71Uv2qwc8UCGtWnuiqOvVwSmVtZ%2B63tmviuaXTVhavgKsJYmZZEzm6EGYvGm7LTo27qxefgomAOupylSj7jmT7w%2B0h94dhQ7RMA9waNA2uzBhwYN0vfxThqn9sFG2yAnolJ3X2mSoPFE%2F67XNLquW8ybiVDsLOJtRBu5KglCk129QVlFz%2BszWkRqL2oXgHhtAygXl%2FoB3kNKgMV1bNU5I4%2FtnN6mdnA74u6DeJfpu%2FJW7g%2BrBLa5pyLZYgzCF6HpUacYL7vqaxs0UdC%2FBVYmqwRQYe9z0Crx0bQNGo9XyEHeoYW4x%2BjcoVAkPxYasCxT%2BpyZB3jGrx%2BtZS%2FPofhrbziCDbl9Dfb6f20rxYx2MABoK8%2FTraXO78Xj8SHQOkd7j373AkstsUJ9MSnRhD3BrVbqGv0M4FWellfOvzQfxBb2T7Go8jDm%2BKPKBjqkAX9vKvDcXJw6gUZbJ0tYBsZ2DSjLKzEhhfFRDZSocrcMGIVcbQOHnXmR19n5c%2Fghf2m8lX9id3S133iC8%2FCDH2Mi5%2FF29F70flcInlBJ5%2BKvDw4tDvcvkRggFImQ5KM1v9bMeJAQNcPhjVNdwxs85d3Nij0%2BiJ%2FdiZ54AnEV7MFty3cXnK%2FZgU46CQHtTdVZYOH%2FiO3cm78B40H9nwGAFzHpwdW8&X-Amz-Signature=8c0eefa56379f8b8c9d83dc99692a1517b8e56f9d4deb6614aa694a1b417925a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PTNO5R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCMMX0QC8KthmGH7iEmjOKPmtbMosfrAmARUooW6GnXTwIhAPC8zlgKKQwwwjfbViMHXH38QmOZGeUNo9fm7%2BCLZLFgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOkarNkqQb5QKItIq3AMCVPUg9LiLoig1lJoM%2FYB3%2FFzAXD7JWpaYli6GaGmiVWeEjON%2FF3GDX3HEYV1uNdRvgqEpHoQZlEyd3UgqAuLtIYdG%2BOfqUcCbuwM%2FKwUwDFuipQx4BK7DrixY2cL7RHZLEG6JNSlMjAbkE3nL0MA84ymhwR7BzaTgBsm78rJwunPphfYXYVjkXysm0yJP7YyCvFy4Bbgg71Uv2qwc8UCGtWnuiqOvVwSmVtZ%2B63tmviuaXTVhavgKsJYmZZEzm6EGYvGm7LTo27qxefgomAOupylSj7jmT7w%2B0h94dhQ7RMA9waNA2uzBhwYN0vfxThqn9sFG2yAnolJ3X2mSoPFE%2F67XNLquW8ybiVDsLOJtRBu5KglCk129QVlFz%2BszWkRqL2oXgHhtAygXl%2FoB3kNKgMV1bNU5I4%2FtnN6mdnA74u6DeJfpu%2FJW7g%2BrBLa5pyLZYgzCF6HpUacYL7vqaxs0UdC%2FBVYmqwRQYe9z0Crx0bQNGo9XyEHeoYW4x%2BjcoVAkPxYasCxT%2BpyZB3jGrx%2BtZS%2FPofhrbziCDbl9Dfb6f20rxYx2MABoK8%2FTraXO78Xj8SHQOkd7j373AkstsUJ9MSnRhD3BrVbqGv0M4FWellfOvzQfxBb2T7Go8jDm%2BKPKBjqkAX9vKvDcXJw6gUZbJ0tYBsZ2DSjLKzEhhfFRDZSocrcMGIVcbQOHnXmR19n5c%2Fghf2m8lX9id3S133iC8%2FCDH2Mi5%2FF29F70flcInlBJ5%2BKvDw4tDvcvkRggFImQ5KM1v9bMeJAQNcPhjVNdwxs85d3Nij0%2BiJ%2FdiZ54AnEV7MFty3cXnK%2FZgU46CQHtTdVZYOH%2FiO3cm78B40H9nwGAFzHpwdW8&X-Amz-Signature=7f2d75ce36bf363dcf1dddbf0860f2674582d22c5b455e63d4e27044696f51c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PTNO5R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCMMX0QC8KthmGH7iEmjOKPmtbMosfrAmARUooW6GnXTwIhAPC8zlgKKQwwwjfbViMHXH38QmOZGeUNo9fm7%2BCLZLFgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOkarNkqQb5QKItIq3AMCVPUg9LiLoig1lJoM%2FYB3%2FFzAXD7JWpaYli6GaGmiVWeEjON%2FF3GDX3HEYV1uNdRvgqEpHoQZlEyd3UgqAuLtIYdG%2BOfqUcCbuwM%2FKwUwDFuipQx4BK7DrixY2cL7RHZLEG6JNSlMjAbkE3nL0MA84ymhwR7BzaTgBsm78rJwunPphfYXYVjkXysm0yJP7YyCvFy4Bbgg71Uv2qwc8UCGtWnuiqOvVwSmVtZ%2B63tmviuaXTVhavgKsJYmZZEzm6EGYvGm7LTo27qxefgomAOupylSj7jmT7w%2B0h94dhQ7RMA9waNA2uzBhwYN0vfxThqn9sFG2yAnolJ3X2mSoPFE%2F67XNLquW8ybiVDsLOJtRBu5KglCk129QVlFz%2BszWkRqL2oXgHhtAygXl%2FoB3kNKgMV1bNU5I4%2FtnN6mdnA74u6DeJfpu%2FJW7g%2BrBLa5pyLZYgzCF6HpUacYL7vqaxs0UdC%2FBVYmqwRQYe9z0Crx0bQNGo9XyEHeoYW4x%2BjcoVAkPxYasCxT%2BpyZB3jGrx%2BtZS%2FPofhrbziCDbl9Dfb6f20rxYx2MABoK8%2FTraXO78Xj8SHQOkd7j373AkstsUJ9MSnRhD3BrVbqGv0M4FWellfOvzQfxBb2T7Go8jDm%2BKPKBjqkAX9vKvDcXJw6gUZbJ0tYBsZ2DSjLKzEhhfFRDZSocrcMGIVcbQOHnXmR19n5c%2Fghf2m8lX9id3S133iC8%2FCDH2Mi5%2FF29F70flcInlBJ5%2BKvDw4tDvcvkRggFImQ5KM1v9bMeJAQNcPhjVNdwxs85d3Nij0%2BiJ%2FdiZ54AnEV7MFty3cXnK%2FZgU46CQHtTdVZYOH%2FiO3cm78B40H9nwGAFzHpwdW8&X-Amz-Signature=80f4e6b812a1e03d8fd9fd9ad91a4fc3f339fa5f6effecc1422f70a937b6fc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PTNO5R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCMMX0QC8KthmGH7iEmjOKPmtbMosfrAmARUooW6GnXTwIhAPC8zlgKKQwwwjfbViMHXH38QmOZGeUNo9fm7%2BCLZLFgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOkarNkqQb5QKItIq3AMCVPUg9LiLoig1lJoM%2FYB3%2FFzAXD7JWpaYli6GaGmiVWeEjON%2FF3GDX3HEYV1uNdRvgqEpHoQZlEyd3UgqAuLtIYdG%2BOfqUcCbuwM%2FKwUwDFuipQx4BK7DrixY2cL7RHZLEG6JNSlMjAbkE3nL0MA84ymhwR7BzaTgBsm78rJwunPphfYXYVjkXysm0yJP7YyCvFy4Bbgg71Uv2qwc8UCGtWnuiqOvVwSmVtZ%2B63tmviuaXTVhavgKsJYmZZEzm6EGYvGm7LTo27qxefgomAOupylSj7jmT7w%2B0h94dhQ7RMA9waNA2uzBhwYN0vfxThqn9sFG2yAnolJ3X2mSoPFE%2F67XNLquW8ybiVDsLOJtRBu5KglCk129QVlFz%2BszWkRqL2oXgHhtAygXl%2FoB3kNKgMV1bNU5I4%2FtnN6mdnA74u6DeJfpu%2FJW7g%2BrBLa5pyLZYgzCF6HpUacYL7vqaxs0UdC%2FBVYmqwRQYe9z0Crx0bQNGo9XyEHeoYW4x%2BjcoVAkPxYasCxT%2BpyZB3jGrx%2BtZS%2FPofhrbziCDbl9Dfb6f20rxYx2MABoK8%2FTraXO78Xj8SHQOkd7j373AkstsUJ9MSnRhD3BrVbqGv0M4FWellfOvzQfxBb2T7Go8jDm%2BKPKBjqkAX9vKvDcXJw6gUZbJ0tYBsZ2DSjLKzEhhfFRDZSocrcMGIVcbQOHnXmR19n5c%2Fghf2m8lX9id3S133iC8%2FCDH2Mi5%2FF29F70flcInlBJ5%2BKvDw4tDvcvkRggFImQ5KM1v9bMeJAQNcPhjVNdwxs85d3Nij0%2BiJ%2FdiZ54AnEV7MFty3cXnK%2FZgU46CQHtTdVZYOH%2FiO3cm78B40H9nwGAFzHpwdW8&X-Amz-Signature=675e253b815626f73eae879bd24120f46ace994068e02f574440dd7cccf77efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


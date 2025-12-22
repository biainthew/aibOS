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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJLEI2H%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDx%2FeOW7%2FuSUK%2FpQ7KvExqZRqNk09P92zU0CPkw%2FAbnhwIgQ%2F75%2FxEt6eiEa7R6Xx4VTtolyUG4iGqdzadh2%2BRalEwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnr7MiqyBWrrirbSCrcA5bHd8OV9fYBzIL%2F5%2FQ%2Bx1j0Gt8Z9D6sxiZi3UTDauUEmviTtixavlEf3%2BxEyd3FkyzwEU8asIsj47StP%2FahkoAhoa%2FHaVcVrgvLr2d6QBEyaiOFpUL8RiAZNh6TAs6IbT8GPc0D4H5Q59DclZXSL1dY4peJ054tiVjl56ALbMOdIo%2BhbMySWV3v7P3lRYatYGRh0jD2ICxGl1qhh5Y0BFEKQDFAzKN8tg5xTMZhEP1KLpEXOlx2FTVov6Qqf%2FrIEa2LP5Dz6j6ziYA850NKlrhOwX2lNCh7Lbws5p9XZuIU1pZ0AiyuVUovd4lsEOoTZ7iSDWS0ALPMDz43pPGLSIYVhC2ucREg%2BYsS59NMVjMNjM6sdMmRKI%2FSQtjZHQdmSGffT0kpOhzquYPThUOXiJ7Doj85ItRlXtI%2FjEVhNbeRJ%2F42FR0SMW5vMnL8Y9zfvub3Ht%2FxG4D9wr%2FvLZP%2FZO2LQqX%2FdxOH0zPG2OjunA90Wmvn2rAFLaexClAeuSTb%2FaULogGRQ67sMzroappowvI51s4l%2FIMMsm%2BF6MRGyvGnvNBNvtT2MiGefx3HjnfQrRnhsnKoK%2FfY6YduufXDCNBsHfZMrmPG4ZxJQbK%2BFtc9b1MKLx8YWkNfCeyaMPSVpMoGOqUBKhZg3ZVT9gYm%2Bg9T%2BjnkZZD5fzTq2%2BCGVhS23M8W7TVZV4yP2bogAQ%2Bz7UGgRPBxnFWdxOhyU3LJjvFN5NEdKafsW79K8vK26ycQJnOnWpNZCFrDuaUkaXR8mGjxzsrbTuR2l4%2FfaY%2FJliEHyFk1jufUCxscfzzo2%2Bgi8zeLjFZ6sph0J1rojo9ey%2B%2BVxEczD3fiPdxb9cSm5EZxCM7v34CQryh2&X-Amz-Signature=bd384e584e46f6f48b8317cf5c76d2c9392a2001708be60264fea4e9054ed89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJLEI2H%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDx%2FeOW7%2FuSUK%2FpQ7KvExqZRqNk09P92zU0CPkw%2FAbnhwIgQ%2F75%2FxEt6eiEa7R6Xx4VTtolyUG4iGqdzadh2%2BRalEwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnr7MiqyBWrrirbSCrcA5bHd8OV9fYBzIL%2F5%2FQ%2Bx1j0Gt8Z9D6sxiZi3UTDauUEmviTtixavlEf3%2BxEyd3FkyzwEU8asIsj47StP%2FahkoAhoa%2FHaVcVrgvLr2d6QBEyaiOFpUL8RiAZNh6TAs6IbT8GPc0D4H5Q59DclZXSL1dY4peJ054tiVjl56ALbMOdIo%2BhbMySWV3v7P3lRYatYGRh0jD2ICxGl1qhh5Y0BFEKQDFAzKN8tg5xTMZhEP1KLpEXOlx2FTVov6Qqf%2FrIEa2LP5Dz6j6ziYA850NKlrhOwX2lNCh7Lbws5p9XZuIU1pZ0AiyuVUovd4lsEOoTZ7iSDWS0ALPMDz43pPGLSIYVhC2ucREg%2BYsS59NMVjMNjM6sdMmRKI%2FSQtjZHQdmSGffT0kpOhzquYPThUOXiJ7Doj85ItRlXtI%2FjEVhNbeRJ%2F42FR0SMW5vMnL8Y9zfvub3Ht%2FxG4D9wr%2FvLZP%2FZO2LQqX%2FdxOH0zPG2OjunA90Wmvn2rAFLaexClAeuSTb%2FaULogGRQ67sMzroappowvI51s4l%2FIMMsm%2BF6MRGyvGnvNBNvtT2MiGefx3HjnfQrRnhsnKoK%2FfY6YduufXDCNBsHfZMrmPG4ZxJQbK%2BFtc9b1MKLx8YWkNfCeyaMPSVpMoGOqUBKhZg3ZVT9gYm%2Bg9T%2BjnkZZD5fzTq2%2BCGVhS23M8W7TVZV4yP2bogAQ%2Bz7UGgRPBxnFWdxOhyU3LJjvFN5NEdKafsW79K8vK26ycQJnOnWpNZCFrDuaUkaXR8mGjxzsrbTuR2l4%2FfaY%2FJliEHyFk1jufUCxscfzzo2%2Bgi8zeLjFZ6sph0J1rojo9ey%2B%2BVxEczD3fiPdxb9cSm5EZxCM7v34CQryh2&X-Amz-Signature=5d4d50c0dbe8eb7906807de65f0b08bc2df2f97a4e4e3f4165e2da50181e612f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJLEI2H%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDx%2FeOW7%2FuSUK%2FpQ7KvExqZRqNk09P92zU0CPkw%2FAbnhwIgQ%2F75%2FxEt6eiEa7R6Xx4VTtolyUG4iGqdzadh2%2BRalEwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnr7MiqyBWrrirbSCrcA5bHd8OV9fYBzIL%2F5%2FQ%2Bx1j0Gt8Z9D6sxiZi3UTDauUEmviTtixavlEf3%2BxEyd3FkyzwEU8asIsj47StP%2FahkoAhoa%2FHaVcVrgvLr2d6QBEyaiOFpUL8RiAZNh6TAs6IbT8GPc0D4H5Q59DclZXSL1dY4peJ054tiVjl56ALbMOdIo%2BhbMySWV3v7P3lRYatYGRh0jD2ICxGl1qhh5Y0BFEKQDFAzKN8tg5xTMZhEP1KLpEXOlx2FTVov6Qqf%2FrIEa2LP5Dz6j6ziYA850NKlrhOwX2lNCh7Lbws5p9XZuIU1pZ0AiyuVUovd4lsEOoTZ7iSDWS0ALPMDz43pPGLSIYVhC2ucREg%2BYsS59NMVjMNjM6sdMmRKI%2FSQtjZHQdmSGffT0kpOhzquYPThUOXiJ7Doj85ItRlXtI%2FjEVhNbeRJ%2F42FR0SMW5vMnL8Y9zfvub3Ht%2FxG4D9wr%2FvLZP%2FZO2LQqX%2FdxOH0zPG2OjunA90Wmvn2rAFLaexClAeuSTb%2FaULogGRQ67sMzroappowvI51s4l%2FIMMsm%2BF6MRGyvGnvNBNvtT2MiGefx3HjnfQrRnhsnKoK%2FfY6YduufXDCNBsHfZMrmPG4ZxJQbK%2BFtc9b1MKLx8YWkNfCeyaMPSVpMoGOqUBKhZg3ZVT9gYm%2Bg9T%2BjnkZZD5fzTq2%2BCGVhS23M8W7TVZV4yP2bogAQ%2Bz7UGgRPBxnFWdxOhyU3LJjvFN5NEdKafsW79K8vK26ycQJnOnWpNZCFrDuaUkaXR8mGjxzsrbTuR2l4%2FfaY%2FJliEHyFk1jufUCxscfzzo2%2Bgi8zeLjFZ6sph0J1rojo9ey%2B%2BVxEczD3fiPdxb9cSm5EZxCM7v34CQryh2&X-Amz-Signature=09dadd70513e90f3f74b0f2de55ffe7b7a9bf5972b2574f22f162258e3c441dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJLEI2H%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T091546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDx%2FeOW7%2FuSUK%2FpQ7KvExqZRqNk09P92zU0CPkw%2FAbnhwIgQ%2F75%2FxEt6eiEa7R6Xx4VTtolyUG4iGqdzadh2%2BRalEwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnr7MiqyBWrrirbSCrcA5bHd8OV9fYBzIL%2F5%2FQ%2Bx1j0Gt8Z9D6sxiZi3UTDauUEmviTtixavlEf3%2BxEyd3FkyzwEU8asIsj47StP%2FahkoAhoa%2FHaVcVrgvLr2d6QBEyaiOFpUL8RiAZNh6TAs6IbT8GPc0D4H5Q59DclZXSL1dY4peJ054tiVjl56ALbMOdIo%2BhbMySWV3v7P3lRYatYGRh0jD2ICxGl1qhh5Y0BFEKQDFAzKN8tg5xTMZhEP1KLpEXOlx2FTVov6Qqf%2FrIEa2LP5Dz6j6ziYA850NKlrhOwX2lNCh7Lbws5p9XZuIU1pZ0AiyuVUovd4lsEOoTZ7iSDWS0ALPMDz43pPGLSIYVhC2ucREg%2BYsS59NMVjMNjM6sdMmRKI%2FSQtjZHQdmSGffT0kpOhzquYPThUOXiJ7Doj85ItRlXtI%2FjEVhNbeRJ%2F42FR0SMW5vMnL8Y9zfvub3Ht%2FxG4D9wr%2FvLZP%2FZO2LQqX%2FdxOH0zPG2OjunA90Wmvn2rAFLaexClAeuSTb%2FaULogGRQ67sMzroappowvI51s4l%2FIMMsm%2BF6MRGyvGnvNBNvtT2MiGefx3HjnfQrRnhsnKoK%2FfY6YduufXDCNBsHfZMrmPG4ZxJQbK%2BFtc9b1MKLx8YWkNfCeyaMPSVpMoGOqUBKhZg3ZVT9gYm%2Bg9T%2BjnkZZD5fzTq2%2BCGVhS23M8W7TVZV4yP2bogAQ%2Bz7UGgRPBxnFWdxOhyU3LJjvFN5NEdKafsW79K8vK26ycQJnOnWpNZCFrDuaUkaXR8mGjxzsrbTuR2l4%2FfaY%2FJliEHyFk1jufUCxscfzzo2%2Bgi8zeLjFZ6sph0J1rojo9ey%2B%2BVxEczD3fiPdxb9cSm5EZxCM7v34CQryh2&X-Amz-Signature=8442bea7b8a5b063436e598047796a88c45dc1b6226c95d3ae279a32a771a682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```


---
layout: post
title: "[Error]unable to resolve dependency tree"
date: 2023-02-01
categories: [general]
tags: [React]
excerpt_separator: ""
---



[: 참고 문서](https://tesseractjh.tistory.com/234)


🦁 npm install 하려는 와중에 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0ef7b857-3c47-40d9-a73f-41e2b02e3289/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO4HYKKB%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDQ%2F9pN0tvh3yNqC1B%2FP%2FIuYwoAVBvhYz84HYO30%2FxHWAiBBMDgAKvc81JjwYnV9NvHVE4zZqXHc9xS%2FkfScfOFrTir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMcNA5MD8A3O127apbKtwDpMzX744%2FZalXY36Lo%2FL%2F78Ea1zfbBFFKbf2hIJqMQLAW3%2F45eYRiiiJJ5HADIpDz9JPN5RrsoWWCaDM4r2qTu3XzApecBBV%2FZ7xQhRxivEp6iyNzPUG%2FeuQCGJVHKU32vYFxHQxkP08witH1a%2B96sM%2B5SO7ZhxifPFEP30fFPjwoVPFr61Lz9uL6Rt%2BfR7IrsAMi6foidldClsbJaX1DkXHWU9KqueBIp9ALQf1FiWScb6xhwoCa5hv4%2BLUSraJdF1lHfVkqv%2B4RVhg4B8c4RQaqEoIKhQs54TfTNZ7cAhL%2BkNB7MpK2lh7W1b%2FZhrIHg1RRRFbqK83lbDzQj6v4XSTto4g2k%2F2ug75wKLzBNYzHuRaVDnPNdD6%2FqC0FMgYm9SZPPIedemAvM5rndd6b2RWYwgEDnWL52r6Ok9Gm6sKPc3Ds8NAYztp%2BReYKgITw4l%2FjinG%2BM%2FzrCHUPN5y9GhzemCgxmwqkFuCcbTRBu1uB0l0taOFkiwiaAg1%2FeVVqVcBvl7X%2FfiqVuaex7bCppn8vV4BYVt35%2BS82vEjxi%2BwiWtAGaLe5ovi9fcMOWmntzG8UtQeXkGesQzQGraDJmLnegbjAHXexEN8Gj%2BNBxaOtBgaz9ILnB7NVPhgwkpvdywY6pgGdybWfoAZLvs%2Bmw%2Bgqc5ytBHCo1IJqHsc8N8ELICWJ0iolQ6FGs1lSgfqGki30oT5yYGw%2Bd2rni6KxryLZjdQlOKTysFdrtjN7wjfM0hXZicyH3KcdEV%2Fxv6E%2FzR%2BCPjnnJDRHP9gUPGqV6iYxjgct4U2NAIjx%2Fc%2Fs%2BwNPDvEnpgvYEnL6qeFGFdjQpEErxwvvn39n7I11EbLPygke66i5x2RgT65l&X-Amz-Signature=439edc26d77ea42d867384e941b884f442de96d0d8f9f23cd7fa3184ffa6a841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


원인은 2021년 2월 출시된 npm 7버전부터 추가된 **peerDependencies를 자동으로 설치하는 기능** 때문이라고 한다. peerDependencies를 자동으로 설치할 때, 이미 설치되어 있는 의존성(direct dependencies of the root project)과 동일하지만 버전이 다른 peerDependencies가 존재하면 충돌이 일어나서 위와 같은 에러가 나게 된다.


👇🏻 해결 방법


```javascript
npm install --legacy-peer-deps
npm install --force
```


둘 중 하나를 뒤에 붙여주면 된다


위에는 peerDependencies를 자동으로 설치하지 않도록 설정하는 것


밑에는 있는걸 무시하고 강제로 설치하도록 하는 것


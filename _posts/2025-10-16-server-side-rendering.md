---
layout: post
title: "Server Side Rendering"
date: 2023-02-08
categories: [general]
tags: [React]
excerpt_separator: ""
---



> 🐴 - UI 를 서버에서 렌더링 하는 것  
> - 앞에서 만든 리액트 프로젝트들은 기본적으로 클라이언트 사이드 렌더링(UI 렌더링을 브라우저에서 모두 처리하는 것)을 하고 있음 → 자바스크립트를 실행해야 만든 화면이 사용자에게 보임


## `장점`

- 구글, 네이버, 다음 등의 검색 엔진이 내가 만든 웹 어플리케이션의 페이지를 원활하게 수집 가능
- 리액트로 만든 **SPA**(Single Page Application)는 검색 엔진 **크롤러 봇**(인터넷에서 콘텐츠를 다운로드하고 색인을 생성하여 웹 페이지가 무엇에 대한 것인지를 파악하고 필요할 때 정보를 추출)처럼 자바스크립트가 실행되지 않는 환경에서는 페이지가 제대로 나타나지 않음
→ 서버에서 클라이언트 대신 렌더링을 해주면 검색 엔진이 페이지의 내용을 제대로 수집 가능
**” 웹 서비스의 검색 엔진 최적화를 위해서라면 구현하는것이 좋음 “**
- 초기 렌더링 성능 개선 가능
ex) 구현되지 않은 페이지에 사용자가 방문하면 js 가 로딩 실행될 때까지 비어있는 페이지 보며 대기해야함 but 구현한 페이지라면 js 가 로딩 실행되지 않은 시점에서도 html 상에 볼 수 있는 컨텐츠가 있기 때문에 대기시간 최소화, 경험 향상

## `단점`

- 원래 브라우저가 할 일을 서버가 대신 하므로 서버 리소스가 사용된다 → 과부하 발생 가능 → 캐싱과 로드 밸런싱을 통해 성능 최적화 해야함
- 구조가 복잡해질 수 있음
- 데이터 미리 불러오기, 코드 스플리팅과의 호환 등 고려해야 할 사항이 더 많아져서 개발이 어려워질 수 있음

## 🐴 서버 사이드 렌더링과 코드 스플리팅 충돌 🐴


→ 별도의 호환작업 없이 함께 적용하면 페이지에 깜빡임 발생

1. 서버 사이드 렌더링 된 결과물이 브라우저에 나타남
2. 자바스크립트 파일 로딩 시작
3. 자바스크립트 실행, 아직 불러오지 않은 컴포넌트를 null 로 렌더링
4. 페이지에서 코드 스플리팅된 컴포넌트들 사라짐 (깜빡)
5. 코드 스플리팅 된 컴포넌트들이 로딩된 이후 제대로 나타남
> 이러한 이슈를 해결하려면 라우트 경로마다 코드 스플리팅된 파일 중에서 필요한 모든 파일을 브라우저에서 렌더링 하기 전에 미리 불러와야 함

## 🐴 일단 리액트 라이터를 사용하여 라우팅 하는 프로젝트 생성 🐴


```javascript
import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

const App = () => {
  return (
    <div>
      <Menu></Menu>
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
};

export default App;
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/b6391c9c-5de1-4383-978a-985d7c31adcf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TVSY4G%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAu01ZKJSjE0xy2nFgfjmmpvaFcWszZLb6gmQS%2FE2dm2AiEA44h1KS0ZPh7XaLkCsuD9nw7JkhJy4bdbttN%2BIWVlNmsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMFptbHW34j8FMhnZircA6hHumBolW5bMpY7WVa4Vi6TrcQz4BrZmPcP30xCnWbnYnYwqFSpMN%2FOTia4x%2Fo4T4%2FPOeu2dpoCw37yhMVL5%2FQSxLqAdvUSOuV3FQFgInkNL8SOiB8UKoOjvg%2Ftupocna948u9%2BxsnwPchn%2FVasyn5OVL7OqqPieUXO%2FDBTp9frTxRaWhGwa8RjpnqMpn9n78BQfFaObSdKPDxm9rUYQs6LCGub5KsA%2B%2FNakkdYQvwFJw9U14dfiyCVhQvBmyXUIVnr%2Fcj11WenJdHHZaGySWFRptHhVu2jez79VtxNWy14AVhTwqIee%2FCpBhDpnCR%2BMKoIs0zAF63HNLw7cL5dvoVjKfCMlBXGR0QYod0X8fyLdQdFnzoTsu7pKY%2BhVdLl90IYxK16eNDBiZ2UtEcDD8yj9D4nehsuu64kRCRacjd4xUNNfqRpZCQkHwwcKQb12yerWGlPLtzCdRfwG71pPsiaaQvFHoXcP0K3Cv8rJNvslpOVNncaU83NqZ2tRboTrUkI%2FyiopikRibdPLJwy0EouZMM831daHm%2BLPjmf1mJn60b%2FAmFPXPerhfFFwVX3bAnAtUX1H8TQfOJIYfYsW94ENPlhyhsnWXdur1J2ba3TSyQ%2BWR8OlM8buDBIMPCa3csGOqUBVsnvPXVPHSb7Y3ij62UgCvomGT9FySniC0e1ql97%2BMR6kau%2B58XrA9JGXXMsOk5Jpw4MCb2Y4ipUAChaV%2FZfZVrW12J1dhS%2BeYQK9sjuLiY%2FJkJzkF2NATROM6DoBDp3g%2BPMqehoS%2FRC75IQ6V3dIR9hgVYdQJOrCn9I7rVIF7TfNHdqV6tBFFtpylTnZaqmrAWHH7Ejw6wdaQ9EN%2FA6%2BkB5kDIh&X-Amz-Signature=65ad27e193bfc22536e04fc6574b04eb33e5da9410ddcc8d780cea7d88daa541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/efcbe924-753a-40fa-b5be-4000645c4786/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TVSY4G%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAu01ZKJSjE0xy2nFgfjmmpvaFcWszZLb6gmQS%2FE2dm2AiEA44h1KS0ZPh7XaLkCsuD9nw7JkhJy4bdbttN%2BIWVlNmsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMFptbHW34j8FMhnZircA6hHumBolW5bMpY7WVa4Vi6TrcQz4BrZmPcP30xCnWbnYnYwqFSpMN%2FOTia4x%2Fo4T4%2FPOeu2dpoCw37yhMVL5%2FQSxLqAdvUSOuV3FQFgInkNL8SOiB8UKoOjvg%2Ftupocna948u9%2BxsnwPchn%2FVasyn5OVL7OqqPieUXO%2FDBTp9frTxRaWhGwa8RjpnqMpn9n78BQfFaObSdKPDxm9rUYQs6LCGub5KsA%2B%2FNakkdYQvwFJw9U14dfiyCVhQvBmyXUIVnr%2Fcj11WenJdHHZaGySWFRptHhVu2jez79VtxNWy14AVhTwqIee%2FCpBhDpnCR%2BMKoIs0zAF63HNLw7cL5dvoVjKfCMlBXGR0QYod0X8fyLdQdFnzoTsu7pKY%2BhVdLl90IYxK16eNDBiZ2UtEcDD8yj9D4nehsuu64kRCRacjd4xUNNfqRpZCQkHwwcKQb12yerWGlPLtzCdRfwG71pPsiaaQvFHoXcP0K3Cv8rJNvslpOVNncaU83NqZ2tRboTrUkI%2FyiopikRibdPLJwy0EouZMM831daHm%2BLPjmf1mJn60b%2FAmFPXPerhfFFwVX3bAnAtUX1H8TQfOJIYfYsW94ENPlhyhsnWXdur1J2ba3TSyQ%2BWR8OlM8buDBIMPCa3csGOqUBVsnvPXVPHSb7Y3ij62UgCvomGT9FySniC0e1ql97%2BMR6kau%2B58XrA9JGXXMsOk5Jpw4MCb2Y4ipUAChaV%2FZfZVrW12J1dhS%2BeYQK9sjuLiY%2FJkJzkF2NATROM6DoBDp3g%2BPMqehoS%2FRC75IQ6V3dIR9hgVYdQJOrCn9I7rVIF7TfNHdqV6tBFFtpylTnZaqmrAWHH7Ejw6wdaQ9EN%2FA6%2BkB5kDIh&X-Amz-Signature=53c471f8b14b1eaa0231e5007f414ee3f5b033dfd6a0d8c3f8e0b31de18d21bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---
layout: post
title: "Server Side Rendering"
date: 2023-02-08
categories: [general]
tags: [React]
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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/b6391c9c-5de1-4383-978a-985d7c31adcf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J6I37T%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDdkpsMqcyq7CAPZ52pJA%2BNhBF5VZ9JYemjAadiMwAcKwIhAMa465%2B2yct6k6kFVTEuqM9c3UN4fQX2sFaMKK7xrFT3Kv8DCDoQABoMNjM3NDIzMTgzODA1IgwWksgouur84VwhreUq3ANDO7IHY5%2FchVW3pofC9dMNY5yMD%2BAnS7phrwvGOm864nY57VkkhNz0WuSUIkulhGNFbzlwQj3HcWlLa8PEMUnNVT7C2hpeCRJNfMHAe31Cv4GlT1eZWOgIgkpIA04F7naql882CFrFnkP8zQgaLrwuh7lTb4pLQqojzikCnG8eAq1eLWztYr1X25lKHYb7UKFtP3Su0kEVESXJYWzaeVD1nX%2FOojxaJDjszMYxIxp0YDsIoSRAYjz6Ks246wYJdwsg90oyl0e5hPu7djizk2GlcP4UJxt65bo7rZOfmO6f0FKYN3BQHMs8EBfwsRM5qVnD0ocv%2FGttLjRy37MVhIaMTblSsx8Lx%2BI33uwDZ06%2BR5IbzPjVYWWadJzbh6mGUmnNOJhcwRiaYLR1NNQNMnkl6sY7hZRWbDU7J0wcN63lY04diFNBlSMTN7ytFpMf6LzdnGxjRPkuI3cjZ6LblPfiTI4dBOvvH9oa1XTf9xt9kQ6ZM2PYmJZQqUxmPFVOh%2BDg%2Bw0NdLnuJspvnPC8Y5zKfgiZDpT3IGiMqiEqp9GkilLczMaYYpCpb8LAF2%2FiQi9%2B1aDO8QAO0YzqGrKmkfmqsQg9RhQx9PYcI3EuN%2FqWUC%2FrNFrJE5l93Ma5vzCo2dzLBjqkAbbiqdQxVAq5QOzdnkoDqnY4NvEXdxn4kuCaUc8i8HAI4tyz%2BjoVlQtm7s7viYe8FawA6BpVKOfYzNZdP8BPu7sIe3H0fsjB5XmNxo1vBi1svLvKH0NSPkqX7mGoBcUUkE9ME0%2FaOO9usc67pvCMduT%2BBa6%2FVNKM7iS3b2s8W8%2BpU7BooT6Uz%2FUs0b5emzxg37Sdd%2FZ8RgKnsgB47DOHetwzxf4%2F&X-Amz-Signature=b8901a0132d05fe91fe5b00f2ebe503f0bb4d259186ee928e4b411d36ee44a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/efcbe924-753a-40fa-b5be-4000645c4786/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J6I37T%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDdkpsMqcyq7CAPZ52pJA%2BNhBF5VZ9JYemjAadiMwAcKwIhAMa465%2B2yct6k6kFVTEuqM9c3UN4fQX2sFaMKK7xrFT3Kv8DCDoQABoMNjM3NDIzMTgzODA1IgwWksgouur84VwhreUq3ANDO7IHY5%2FchVW3pofC9dMNY5yMD%2BAnS7phrwvGOm864nY57VkkhNz0WuSUIkulhGNFbzlwQj3HcWlLa8PEMUnNVT7C2hpeCRJNfMHAe31Cv4GlT1eZWOgIgkpIA04F7naql882CFrFnkP8zQgaLrwuh7lTb4pLQqojzikCnG8eAq1eLWztYr1X25lKHYb7UKFtP3Su0kEVESXJYWzaeVD1nX%2FOojxaJDjszMYxIxp0YDsIoSRAYjz6Ks246wYJdwsg90oyl0e5hPu7djizk2GlcP4UJxt65bo7rZOfmO6f0FKYN3BQHMs8EBfwsRM5qVnD0ocv%2FGttLjRy37MVhIaMTblSsx8Lx%2BI33uwDZ06%2BR5IbzPjVYWWadJzbh6mGUmnNOJhcwRiaYLR1NNQNMnkl6sY7hZRWbDU7J0wcN63lY04diFNBlSMTN7ytFpMf6LzdnGxjRPkuI3cjZ6LblPfiTI4dBOvvH9oa1XTf9xt9kQ6ZM2PYmJZQqUxmPFVOh%2BDg%2Bw0NdLnuJspvnPC8Y5zKfgiZDpT3IGiMqiEqp9GkilLczMaYYpCpb8LAF2%2FiQi9%2B1aDO8QAO0YzqGrKmkfmqsQg9RhQx9PYcI3EuN%2FqWUC%2FrNFrJE5l93Ma5vzCo2dzLBjqkAbbiqdQxVAq5QOzdnkoDqnY4NvEXdxn4kuCaUc8i8HAI4tyz%2BjoVlQtm7s7viYe8FawA6BpVKOfYzNZdP8BPu7sIe3H0fsjB5XmNxo1vBi1svLvKH0NSPkqX7mGoBcUUkE9ME0%2FaOO9usc67pvCMduT%2BBa6%2FVNKM7iS3b2s8W8%2BpU7BooT6Uz%2FUs0b5emzxg37Sdd%2FZ8RgKnsgB47DOHetwzxf4%2F&X-Amz-Signature=8dd4c2643a6c0f6a252509bd30f5b2caf5b1c2469314ba1ac0203b85681633c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


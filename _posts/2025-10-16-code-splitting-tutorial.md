---
layout: post
title: "Code Splitting tutorial"
date: 2023-02-07
categories: [general]
tags: [React]
excerpt_separator: ""
---



> 🍏 - 리액트 프로젝트를 완성하여 사용자에게 제공할 때는 `빌드 작업`을 거쳐서 배포해야 함 / 빌드 작업을 통해 프로젝트에서 사용되는 자바스크립트 파일 안에서 `불필요한 주석, 경고 메시지, 공백 등을 제거`하여 `파일 크기를 최소화` 하기도 하고 브라우저에서 JSX 문법이나 다른 최신 자바스크립트 문법이 원활하게 실행되도록 `코드의 트랜스 파일 작업`도 할 수 있음  
> - 이 작업은 `웹팩` 이라는 도구가 담당 / 별도 설정을 하지 않으면 프로젝트에서 사용 중인 모든 자바스크립트 파일이 하나의 파일로 합쳐지고 모든 CSS 파일도 `하나의 파일로 합쳐짐`  
> - CRA(create react-app) 로 프로젝트를 빌드할 경우 최소 두 개 이상의 자바스크립트 파일이 생성되는데 기본 웹팩 설정에는 SplitChunk 라는 기능이 적용되어 node_modules 에서 불러온 파일, 일정 크기 이상의 파일, 여러 파일 간에 공유된 파일을 `자동으로 따로 분리`시켜서 캐싱 효과 굳


```javascript
npm run build
```


🥬 build/static/js 안의 파일 이름을 보면 7b7b7f25 같은 해시 값이 포함되어 있음 / 빌드하는 과정에서 해당 파일의 내용에 따라 생성되며 이를 통해 브라우저가 새로 파일을 받을 지 말 지 알 수 있음


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50a1bf71-1f03-404e-bb87-13a3e87245dd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF3EQZ2%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD2fQGJEJuv7yXZSsTdZ0LTOuoJ2eRcrKJfnmJyHae%2FpgIhAOx6QQw%2Fq6Biinql9PjpeqjoyWNkX5km0rFXRaOFKiKmKv8DCDsQABoMNjM3NDIzMTgzODA1Igwu2KtFJgb2kgP79l4q3AMVkRHrZPOHz9BqBvLd%2BkJeVVU2FtwS9fz6v0d9iw11c7gJwMEqh%2FrTL83ANoPCCPei10Liw76glJ5zfY%2FDaqm9T%2BovxpntK7wXfNPVvm058%2F9%2B4LlvpMsFV2gy6bx7n41%2FmCw3CMQ2Lbz8Sl9pbvk0D3q7ldt%2BtYa4k%2FlZJJslMG2%2BMFaosSB%2FOCxokoQFpQLSZqgktkEKWEiEXoYuvW7E73WKhNlwmNcogdh%2F7zLCsTzlAUEPcttHoJT9Bz0vhVjY0li57eilDPSzqNYxVZRa%2FiQxjmVRF7SewVcc%2FA5rklw%2BzLBKTXAGMuPlPZ5Hvkxnhwko2yvstX%2BYXJHwczSThC6HgbJ%2BqRItum%2FsKA1dtKrP%2B6Z2Yz2xNmmCIdk%2FWpW2UUKQ3U9xXY%2F81RhY4TGKqzbtGkrGm018ClWEZFtdUzNY6iRtYo3pAszx2eVWfRKw6R85nq4me9vT6N3UjT69MPgg5irtBasyCjeTkKN9lzgE%2FTlQzbHlYqmdwqghnabkQT8HOz1afAsUELw%2FCcJv3TG7Jr5MuTJt5MwmG4sTRu8V2bPpTFwlFUuWxtJisVQ6G%2FK8OMCo6i0n4Qu7SHL9futROFGxGKmNJ9EbC2crcxaQLaBkNM9112vOszCw%2B9zLBjqkAVeCYMP9jvCsaiMy1dEBcm0IpkXZXd7Y7yMZ9gK2T1s0AjyczDfQOBqfHwgOOkSeObsEGE%2F%2F5d%2BKLFdaej4DNaG%2BVhSKStWbkXmYJdb3tVJfqDWfJNbWAcZUbylp5bWS09gUT1CJM5R9o44NZn99mIJ%2BTBt7JE0QOWobWT%2BpMmEAfIgxmuYPoOyAzqp1zm3I1C2NxCAKQJS7stURFXXleg4R5tdg&X-Amz-Signature=5d7ef0c073fc64761529616a434974fbf8be42e92488ed1aa5540a841f98bfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🥬 7로 시작하는 파일에는 자주 바뀌지 않는 코드들이 들어있음 → 캐싱의 이점을 더 오래 누릴 수 있음


```javascript
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="{logo}" alt="App-logo" alt="logo" />
        <p>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
```


🥬 수정 후 다시 build


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/e82be5bb-4d10-463a-8105-9afeb5eac19a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7EC6RC3%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCqNYVxdXLsT3AFWXJG139aG%2FQcwiCXk3xMPrKmxfzbDAIhAJLL1ITEpHxSTOP00Ul4uQcaTDw4%2F0rYSyyL0GATUOPNKv8DCDsQABoMNjM3NDIzMTgzODA1Igwq7dKpW0y1rldtEPkq3AMxLir6Tgd34xeKyIxqMqAd41WQ85MUJlZEllzXwkIKrgdN7WySsLWtevt3ULK7pJrYzUM8P7%2BbPQjor1YHRYpca79EgS%2B2e%2FpGeK0sub8dbLe3sHmMhdAb0qAsezLpW82DWxh7llBRl6WYchqwQK5ZNDcAyPDO%2BGUXOAyT1uaTLFzvWU61pWJDg2IlnkNpz0L7MOl%2FQQ1lEDHlMJC3bJwm3myeFWdbHaczySFFthT1rRQq1NK7%2FSix1m8idIKrdVcoqwF15z7AoYhBpPZJItCdBZDGHGLfbbXuJzt7cj9O2R1EFNWRF915m8Q9eyeeFo6NwNT6a8Z2eBxUrz62cSvp2j7GSwy%2FIIpPH4A6awoDnPuwSm9dMw%2Fnm8Ur15veANbyuEnR7Pt2Cj8YNZEOAG95kjJgrRCAM8%2FUaYzzax837EhbgogCzJ40uk4ip5M8F1rryoTkDaLapdka3X1%2FLPwaU2%2BRAHujldc7mwQqyi5IqzVB79jCuFKzQ9YDDsi0%2FN6Qo4fHbfPSa%2FOjLLT0FfIn9i9to9AeObycWvxrC4HEzDveE2J%2BaFHgdDHczhFcYvy2GkKx%2FI4LZDstkBzJ1LrOLXcclMTqX5i8Ct6d1tdJ08Qm06MajOJBkPKmkDCy%2B9zLBjqkAcp6atTLCQviPdIkqPVC1nCz9PELRjOeYbgOSR%2FxcIIR0fPfHUh7HVQ8GDgUt8DfLkrhgV3V5erHQdtohQYuuXEB%2FEelTjLcFJt5kV%2B86KrQHo98OZc2%2FMxZN9dY%2BFXqUK8TNeFAmEqEw2Co29Iii06B%2BY2WwzRgRV93vsmXzfDbnzEdnbvO4d8tz3%2BjCOavP4MxAQ5Tjz09r1o096OnzkRmtLBW&X-Amz-Signature=a8e1a119297e861bea11fa20bf9b02237e7d6c71cbf60f0f285a9f391c4d9912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🥬 main 으로 시작하는 파일들만 이름 바뀜


## 🍏 코드 스플리팅 🍏


→ 이렇게 파일을 분리하는 작업

> **- ex ) A B C 로 구성된 싱글 페이지 어플리케이션 개발**  
> 사용자가 A 페이지에 방문했다면 B C 페이지에서 사용하는 컴포넌트 정보는 필요하지 않음 but 리액트 프로젝트에 별도로 저장하지 않으면 모든 컴포넌트에 대한 코드가 모두 한 파일 (main) 에 저장됨 → 로딩 오래걸림  
>   
> **- 이러한 문제를 해결해 줄 수 있는 방법** `코드 비동기 로딩`  
> 필요한 시점에 불러와 사용 가능

## 🍏 자바스크립트 함수 비동기 로딩 🍏


```javascript
export default function notify() {
  alert("hi!");
}
```


```javascript
import logo from "./logo.svg";
import "./App.css";
import notify from "./notify";

function App() {
  
const onClick = () => {
    notify();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
```


🥬 p 문구를 누르면 notify 함수 실행


```javascript
import logo from "./logo.svg";
import "./App.css";
import notify from "./notify";

function App() {
  const onClick = () => {
    
import("./notify").then((result) => result.default());

  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
```


🥬 import 를 함수로 사용하면 Promise 를 반환 → `dynamic import` 라는 문법


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6271c171-3487-49cf-bb61-0c59985c59aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TFF5VW%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDVPQmGdh%2B6nPlOUzvS1zLVKmua5GErajji%2BKWuPLoZIwIgdhp7ksnDzPrlvmPXdlzsjlZADXXEf4LO6s%2Bc0VsLX8Aq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDM2ijysx8Cuag4%2BazircAx0AASagjFknQHpYLKxeHS9i07psyihcOR2TMDzy%2BySsVdO4KyO2TyQBlSeBKiDEMR2buTOVMihSDwM%2B%2BlV9%2B2luQc2NzA56JYXp8vihllmbBMeBWqLGHusE38tjlZuDVEyFht%2FD87FddY7C24aBwcEm8J6jTgQfa1YZ2CWnxfGYuMFh%2FqNegDRdK%2F5QjneOO7%2BbwlIMNhepVohUSTEYTgIp81UPztUl0UPUP39S80%2BjqF3jQkv2Ze6SmPYxLTkT3mzyAoEgx7zfN3btjcgoHdJD1gQX3xskuYyd3si9nm%2BC7DtXj1csni3PvUQ7EeL0%2ByZujY6enzk0i7A3dz7tUdk2panslwphNOXM2t2C8q6cxgB7PLJ%2FqP78j6g0LVvvvb34trpF%2FW%2Bqs2Z1kIOM6FtMHKHO6AI0DIfyr%2Bol%2FpQyntuadv44C2mOWX7O2IuLl1dkGFmAxcTaf622yiSmLWPxiAyBiFo46jlbqePDzfy35NkkdRoy6hfDd00NlTbwoccCWPWS%2Fidg1graMDuEzKxNbw7nBhRytGEoxvYMMyFm7UegcOoJAeYDXggxKXM5Bc%2BinP6686vfEuWqhkwVCqyD9dClHkA5vnd2fP1Mkt84F9GQw%2FdgOJPuzknHMLX73MsGOqUBXkbC17HoW8i%2FSv6zUgMyR%2FY2pjfYIvLmUlz2aO6KYt8JN16epzjewj2f9kcngJ8G5l3hYMlIhZuaWh7eFPDmAIz3x5W37AJKzxVtwWKuQ7RxdcBhMNPuZ7hmNWmmJVhiJyPsQwWIqmOpBFJ6mdRUHRuYxzyJlcoDKvnhl0EOc%2FrwV2foRcxiiZ6oQUMIVPIjOI6yAWL2Fky7nijqOdT4OQSvxOOF&X-Amz-Signature=2d4067c9352206d393bea5eeb9dea78961e93b954549d4929b4f1912b411f1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🥬 코드 스플리팅 후 결과물 → 1로 시작하는 파일 안에 notify 관련 코드가 들어감


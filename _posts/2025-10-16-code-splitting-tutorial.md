---
layout: post
title: "Code Splitting tutorial"
date: 2023-02-07
categories: [general]
tags: [React]
---


> 🍏 - 리액트 프로젝트를 완성하여 사용자에게 제공할 때는 `빌드 작업`을 거쳐서 배포해야 함 / 빌드 작업을 통해 프로젝트에서 사용되는 자바스크립트 파일 안에서 `불필요한 주석, 경고 메시지, 공백 등을 제거`하여 `파일 크기를 최소화` 하기도 하고 브라우저에서 JSX 문법이나 다른 최신 자바스크립트 문법이 원활하게 실행되도록 `코드의 트랜스 파일 작업`도 할 수 있음  
> - 이 작업은 `웹팩` 이라는 도구가 담당 / 별도 설정을 하지 않으면 프로젝트에서 사용 중인 모든 자바스크립트 파일이 하나의 파일로 합쳐지고 모든 CSS 파일도 `하나의 파일로 합쳐짐`  
> - CRA(create react-app) 로 프로젝트를 빌드할 경우 최소 두 개 이상의 자바스크립트 파일이 생성되는데 기본 웹팩 설정에는 SplitChunk 라는 기능이 적용되어 node_modules 에서 불러온 파일, 일정 크기 이상의 파일, 여러 파일 간에 공유된 파일을 `자동으로 따로 분리`시켜서 캐싱 효과 굳


```javascript
npm run build
```


🥬 build/static/js 안의 파일 이름을 보면 7b7b7f25 같은 해시 값이 포함되어 있음 / 빌드하는 과정에서 해당 파일의 내용에 따라 생성되며 이를 통해 브라우저가 새로 파일을 받을 지 말 지 알 수 있음


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50a1bf71-1f03-404e-bb87-13a3e87245dd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44ITGO5%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFbnqB6FYh%2FvhYZh19vCrJfEgH7DgnY88gCeNy48szUIAiBN%2Bb8P0K6QMDcNkyFe%2B92smY%2B3jvnx%2B6P1UyZ9q%2B3F2yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMczo%2Bvd3rYKlLrz60KtwDWt8Bai8HOtCr2IxzIA0OP5OzIeww86U8Eg0jRwLisvrjN9FW7bfdv67SHLDfmUcJZvwTlXxsfc7gMvG1AcS%2FWMjwPOra0ZwL9z9HAXOzO%2FXb%2F%2FbTkrnR99csFtb1k9LZ4huHc1fis1EzYEqXfUeih0mUHMYi3rGbispQvsZZShu9%2Bx%2BuKvduaytAka91jwpwHa92KHOqFSky6rg8cJjlqf7TOndXvj9C%2Fda10EeGPM8GxAmm3bAR5GOEmUtIwsDhSD%2FFnWYN%2BCIi4u1pvBPnn1h9mg77Pc3q%2BDdl%2FgwZHGFX7fba%2FnEmYB5RGGqNXb4KMqj%2FfUY%2F8VNQsojRaz2wIvHIs21mpWq%2FsHFxFrIqGMOYHo2W5ZMN0eFmzWdg1iVLGNTkKXJjg0xw7oSXSYINNXCEyxXjjfcLa5HiZK%2BGV17e41jg5drDjldtFttFOIRAatkZb9pBVtWHzf5JpfnnQTGNdL55x307VdEIaXgjCwxjmIcEl9MFTj8bnpRCADFRe8k3hzOlD244nAsiPHHqKUXjcs6jviwCp2GI%2FsyGRkqNDTCA%2BvMPgLj3Di6nYe9vc7tTch8tiK4b3vsbiyNvk72RUCbl8vs3ELlbGltmZoH3WvKvwEdHIb769Cowp9ncywY6pgGIrbC6RafJhEwmEuvXkFV1Zguu87LCocBZ5cBAIW5TGqCVTtZ27lyYXWlNhHgRIs9LiLiIgvDMpsRAGps46hzVLzZX7X3jaBe1Sir4o7VBY2Po57RZL4l7G9OdE8pywRLuF5FN%2BncibHR4zbszAeWZiuHH%2BHJyKbQzYcK%2FwNNYU9doNMWScESJXvj3eJqwVY9BGgvlWC84PFSV5604RFJvRmpWAjan&X-Amz-Signature=233036551f1382af9eb133a60c2866927177fc7152cb4067003faf40db612e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/e82be5bb-4d10-463a-8105-9afeb5eac19a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLJ55C2%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDXIujnXxMwPs2j2EeBvT7qtHcNgYDCqGeEJtMJJLMkdwIgFFTrmqNMxFkIui35TxoRV2SH4e68OsVVSllXeJu7Q0gq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKeTaxgG9wNXg%2F7hBSrcA5%2F%2BLsB9dxAsDopMLZxK6bD%2FPvNipz2Nv5CHHKGI0sSwXzQcSBkCNO%2BU739bIwg3CbDMqpBkJ3lbTR494MkeFCYPKLD9yRopIKz8yxoK%2Bzc5BGD96gevw8t5h4fPkqaQW6prerfLQbATP7dpkYloT7Sx62dK0QTDZf5vPn3c5GfRUbOcVB2U6%2BexuYTlyL1Bf9FIICS4p6TtLVrngRupV4OvjHoUU%2BcABdnxXT18DMQ%2F2Kcbq4nyu3M0CaLysb3bsPoiUSU79eA3cxs61ZNWY5JOXuyNfbWl1aF6zXwk2Q4wnWuWNWwYytoB5ZPeZ5FrXdV5Xlac1mgsbqBTwi2ps6HVBsLnblSFwLgUfIPawrvUcf95PErFcOFkZ6PELp09%2FFFlLIOfxfGqUuk99ndDibGPLp5n2yrSG9jMGrwOrf5SDqu32r%2BQNtzYAfvnSiwQxG7NzE2WS44yb53QJTst6zMpEgd5P7FuHWQ%2FKP8MAgd%2B28gsLB3C%2BWV00b9uizunbFQ%2F94mYihuBe92LGZYNUFbeViBJLlIcqAPwVhLna14nlJupmWgp%2FDXpcSLlnznsp0Xt%2BF7vnWQ6I2LqO5nTGqdHjbil4TnuCAbDIt6UAsKo9kdZKkoGcze5GZPFMKfZ3MsGOqUBTV5haNYnYI1R9usuer%2FpV00xIgTqyYPJTwrLLSDSYMf9%2Bpd9t9a9%2FS%2FdWkyzaHm%2Bg9YN8yvLzZe7jhuwqZGzVs98%2FoOBU5Jv5HdPOEOr0a9YboEycomNmkVaTcv3whMlrx51ag9oDoZ6kny2esh5bcTlZoF9sq%2FCb8cJHl%2BBPBUx93XUxgluEYPS5WZ%2F6CrEmGDgTjZmlWlx16vVF5wUt%2BQgLJw0&X-Amz-Signature=8afbc583ee66acab202fb6960f6522e4d0de6d2d5af8ca60cac94ddbda4cb383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/6271c171-3487-49cf-bb61-0c59985c59aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQA2YBN%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T094038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCpr0%2F8jfFoABEO1Gbm%2F4wKkBNDU6mVafGz%2BUEERD0joQIgRsGUuZqxGAe6qrvvxUQ7FqmwRGa9Xnmctd16jDPjL%2Bgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDB%2FMWdV6ODmbY29CACrcA6MNHzXkmYk%2Fki9DK%2FCoMFjOg9LQYAZYI%2FUek%2FkM0oLdtpL%2FqyZ84nFwE%2B7zpu%2BsMLzEQCxB0TEIm%2FsCQFNH3e%2BffxVCUyp%2BqCoJP99Bu5BeYHXFGUugal4hwo2jli5V4mMv2xdmdlP7%2BsoIv3Cq41qpBe2UkAV97HDAYVSAiXtrqFblNnSLYto8Aja4dB4HPpiy6ggReStm7DOoIy7RAd7bZXg5y2vDM59ZfshjMppw0HpAlpibNnHU0tmlwYEYIKWtrAUEI57FntjliadzNMy03HxHcoco43DxRx%2BIu1CTkEkyqD6B50J97HWAiDq9LFohdfU5pmSOcJeDgqDhLKRn8Ifg2djo2wdK7gQJ1TFo0BmN3JXqSL6lZ7gqkq3CxoEc86p75TafuzzuTUG0MgU5IbjC44vJdkubINRJCIk4hHcAwvMykC3H%2BQQ6B2AmtdhpPG%2Fe7bUQeB1cgcJY%2FBeb6NJaawA0myWHLnQKJHMkoaz2HNFBKQizCBTmNjkeZR8H%2FAaeH3cuQrE4v29WUYfemghcFrB3z89R1Y61p5F1tUIXbotj1QHGWlTnDbfXdidITg%2BL5aBWLXqZFpaoCiEs%2FdItIOCcGXq4akv5TPX5%2BV2JWYLP5adOaFJEMKjZ3MsGOqUBNwT0R2frp7CUbO%2B1yNBOySqugpT1a%2F5Tom6V7aLUvX9DTPM81fkKiWCISC6DqvO3gttaMo%2FQWGt1fSHvS2tkuQnuVPm%2FsyM6%2FryTHZQcn1MCGj3FRpoE%2FnmXtBGFd8LUqY6cOwedrl1KZhHxGvvKu7HLwgwoJTcJEK6sWcqLMc%2BQF0D7R%2B3dxdhi13kiDu0x5smuR7udlyBE%2BiGtSOPQeWlVRK4I&X-Amz-Signature=508eec712e49d0b0257f1aca495f6da516d5b7a05cb843a88334f0c00ed310ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


🥬 코드 스플리팅 후 결과물 → 1로 시작하는 파일 안에 notify 관련 코드가 들어감


---
layout: post
title: "Grid related properties"
date: 2022-12-14
categories: [general]
tags: [Css]
excerpt_separator: ""
---



동일한 너비의 열 세 개 만들기


```html
<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
```


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-5dedfec75001.png)


번호 없는 col을 사용하여 모든 열의 너비가 동일


```html
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-3874276714e8.png)


한 열의 너비 설정


flexbox 그리드 열에 대한 자동 레이아웃은 또한 한 열의 너비를 설정하고 형제 열이 주위에서 자동으로 크기를 조정하도록 할 수 있음을 의미합니다. 미리 정의된 그리드 클래스 (아래에 표시되어 있음), 그리드 믹스인 또는 인라인 너비를 사용할 수 있습니다. 다른 열은 중앙 열의 너비에 관계없이 크기가 조정됩니다.


```html
<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-428afb6ae370.png)


가변 너비


`col-{breakpoint}-auto` 클래스를 사용하여 콘텐츠의 자연스러운 너비에 따라 열의 크기를 조정


```html
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>
```


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-341fe7953e14.png)


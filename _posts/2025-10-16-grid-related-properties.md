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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/761948c5-8397-476f-83a1-3a980c6fe23f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4S24UX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHVwXocSWuN9IrNZzKXryinnaZtht%2FvzlIBSLcjxqAGKAiAo%2BTN%2B0d%2Bc%2Bqtu0TGuvqMTxowfrA6FC9iC1%2FhihqDzfSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMqmKbm9Gr4KTl7yruKtwDoHym5ug9OzhyLf23CfAGzYPlDOjUVrUEsO9%2F%2BvAbkulDqK7Y0V6tnSI837dxKmejyjSG1ZS3KbFqcUy1hi%2B1UdH9wa%2B6RIU1m1W7zh90BZnsMRkZuIyRt7%2B%2Bev%2F%2BnfcB1IdQ6W8S44iGioXyeAOnyX7M0iKWNHYuahx2I5i4ZNIPL%2B79eL12Of12yFWd8gVN3QpaIAP09GE0vhB3RWAyWhjmBQibfS4qD6sW7YBpM31urCTdCaPWjlhijDcFITYT8CKsYNRESltBhE5A9WPxlPuanSNfScnco6D2Fp5jBuEppND7tUaOVO%2FbBoiVaLPT6e7qBiyWznejW7fV6%2FfLTlC0%2Ffm9gW6VHBqV4geVYcLYH2skfWOaUzl%2Bmr2ym3azXbfPEvaWIccZ6%2BjRHZkN%2BLbC8hLtKAvSdBPjFia740QPjIip6TwVjhaEORt%2BgyDIB2G2jW%2BsqWiDCCNW2c3dM%2B%2BSMs64sNajqMB64Gr%2BvQjK0XtJOlqRB1AnSY8nFWyK%2FNTUP8NjRGMpnQA66sbfgJw7tycvbZL62Y8XkdL4nlweN6OGlhu7CE%2FqYlJykTVxg5Ef3cYFA5Sn%2F7MkxZYCYyyyuFdWYUjz40dmmwU6zuONf31IOQjT3o61srsws%2FvcywY6pgEzhw8Uxs7MliRJ1%2FqqyxzvT%2B%2BBPrXCPVirCUX%2Beh%2FpJ%2FLdfkrPZgS3bteQE1lmFnFAmkj5b1mUIha%2BOCvi%2BYwYHxLjwRcItE2xZlQvPjtosumltXgZK0BZa4cYzhr8cKUBOFcmpgoSa%2FCKB1OnfrpfRqdkKmeTKYyioRknhGsMRW4Zwu5eUOAcePvvRDlxBpdvIcFuoegUgQemkcsmbcuxFu9EyDhs&X-Amz-Signature=280509cd171bd1b8e84a4d078c0a4f5dbb280bc1a94d55090f11e11953c861f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0db1c901-d6fe-4f27-a1e7-85f6dcf8c6f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4S24UX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHVwXocSWuN9IrNZzKXryinnaZtht%2FvzlIBSLcjxqAGKAiAo%2BTN%2B0d%2Bc%2Bqtu0TGuvqMTxowfrA6FC9iC1%2FhihqDzfSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMqmKbm9Gr4KTl7yruKtwDoHym5ug9OzhyLf23CfAGzYPlDOjUVrUEsO9%2F%2BvAbkulDqK7Y0V6tnSI837dxKmejyjSG1ZS3KbFqcUy1hi%2B1UdH9wa%2B6RIU1m1W7zh90BZnsMRkZuIyRt7%2B%2Bev%2F%2BnfcB1IdQ6W8S44iGioXyeAOnyX7M0iKWNHYuahx2I5i4ZNIPL%2B79eL12Of12yFWd8gVN3QpaIAP09GE0vhB3RWAyWhjmBQibfS4qD6sW7YBpM31urCTdCaPWjlhijDcFITYT8CKsYNRESltBhE5A9WPxlPuanSNfScnco6D2Fp5jBuEppND7tUaOVO%2FbBoiVaLPT6e7qBiyWznejW7fV6%2FfLTlC0%2Ffm9gW6VHBqV4geVYcLYH2skfWOaUzl%2Bmr2ym3azXbfPEvaWIccZ6%2BjRHZkN%2BLbC8hLtKAvSdBPjFia740QPjIip6TwVjhaEORt%2BgyDIB2G2jW%2BsqWiDCCNW2c3dM%2B%2BSMs64sNajqMB64Gr%2BvQjK0XtJOlqRB1AnSY8nFWyK%2FNTUP8NjRGMpnQA66sbfgJw7tycvbZL62Y8XkdL4nlweN6OGlhu7CE%2FqYlJykTVxg5Ef3cYFA5Sn%2F7MkxZYCYyyyuFdWYUjz40dmmwU6zuONf31IOQjT3o61srsws%2FvcywY6pgEzhw8Uxs7MliRJ1%2FqqyxzvT%2B%2BBPrXCPVirCUX%2Beh%2FpJ%2FLdfkrPZgS3bteQE1lmFnFAmkj5b1mUIha%2BOCvi%2BYwYHxLjwRcItE2xZlQvPjtosumltXgZK0BZa4cYzhr8cKUBOFcmpgoSa%2FCKB1OnfrpfRqdkKmeTKYyioRknhGsMRW4Zwu5eUOAcePvvRDlxBpdvIcFuoegUgQemkcsmbcuxFu9EyDhs&X-Amz-Signature=b664452986ad926c4b8ab5bb25a2d9bec24afd8d9bbeccd11103c4ee587a9841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8a50a219-dba8-4f3f-8bbb-a0a6b699158c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4S24UX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHVwXocSWuN9IrNZzKXryinnaZtht%2FvzlIBSLcjxqAGKAiAo%2BTN%2B0d%2Bc%2Bqtu0TGuvqMTxowfrA6FC9iC1%2FhihqDzfSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMqmKbm9Gr4KTl7yruKtwDoHym5ug9OzhyLf23CfAGzYPlDOjUVrUEsO9%2F%2BvAbkulDqK7Y0V6tnSI837dxKmejyjSG1ZS3KbFqcUy1hi%2B1UdH9wa%2B6RIU1m1W7zh90BZnsMRkZuIyRt7%2B%2Bev%2F%2BnfcB1IdQ6W8S44iGioXyeAOnyX7M0iKWNHYuahx2I5i4ZNIPL%2B79eL12Of12yFWd8gVN3QpaIAP09GE0vhB3RWAyWhjmBQibfS4qD6sW7YBpM31urCTdCaPWjlhijDcFITYT8CKsYNRESltBhE5A9WPxlPuanSNfScnco6D2Fp5jBuEppND7tUaOVO%2FbBoiVaLPT6e7qBiyWznejW7fV6%2FfLTlC0%2Ffm9gW6VHBqV4geVYcLYH2skfWOaUzl%2Bmr2ym3azXbfPEvaWIccZ6%2BjRHZkN%2BLbC8hLtKAvSdBPjFia740QPjIip6TwVjhaEORt%2BgyDIB2G2jW%2BsqWiDCCNW2c3dM%2B%2BSMs64sNajqMB64Gr%2BvQjK0XtJOlqRB1AnSY8nFWyK%2FNTUP8NjRGMpnQA66sbfgJw7tycvbZL62Y8XkdL4nlweN6OGlhu7CE%2FqYlJykTVxg5Ef3cYFA5Sn%2F7MkxZYCYyyyuFdWYUjz40dmmwU6zuONf31IOQjT3o61srsws%2FvcywY6pgEzhw8Uxs7MliRJ1%2FqqyxzvT%2B%2BBPrXCPVirCUX%2Beh%2FpJ%2FLdfkrPZgS3bteQE1lmFnFAmkj5b1mUIha%2BOCvi%2BYwYHxLjwRcItE2xZlQvPjtosumltXgZK0BZa4cYzhr8cKUBOFcmpgoSa%2FCKB1OnfrpfRqdkKmeTKYyioRknhGsMRW4Zwu5eUOAcePvvRDlxBpdvIcFuoegUgQemkcsmbcuxFu9EyDhs&X-Amz-Signature=7dbc72b32a3b6eea70c07ed42e5810a531c3e6fd6e71340497b7f79b20196ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/a71f50c8-bbf9-4288-ba6b-d6d93a868400/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4S24UX%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHVwXocSWuN9IrNZzKXryinnaZtht%2FvzlIBSLcjxqAGKAiAo%2BTN%2B0d%2Bc%2Bqtu0TGuvqMTxowfrA6FC9iC1%2FhihqDzfSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMqmKbm9Gr4KTl7yruKtwDoHym5ug9OzhyLf23CfAGzYPlDOjUVrUEsO9%2F%2BvAbkulDqK7Y0V6tnSI837dxKmejyjSG1ZS3KbFqcUy1hi%2B1UdH9wa%2B6RIU1m1W7zh90BZnsMRkZuIyRt7%2B%2Bev%2F%2BnfcB1IdQ6W8S44iGioXyeAOnyX7M0iKWNHYuahx2I5i4ZNIPL%2B79eL12Of12yFWd8gVN3QpaIAP09GE0vhB3RWAyWhjmBQibfS4qD6sW7YBpM31urCTdCaPWjlhijDcFITYT8CKsYNRESltBhE5A9WPxlPuanSNfScnco6D2Fp5jBuEppND7tUaOVO%2FbBoiVaLPT6e7qBiyWznejW7fV6%2FfLTlC0%2Ffm9gW6VHBqV4geVYcLYH2skfWOaUzl%2Bmr2ym3azXbfPEvaWIccZ6%2BjRHZkN%2BLbC8hLtKAvSdBPjFia740QPjIip6TwVjhaEORt%2BgyDIB2G2jW%2BsqWiDCCNW2c3dM%2B%2BSMs64sNajqMB64Gr%2BvQjK0XtJOlqRB1AnSY8nFWyK%2FNTUP8NjRGMpnQA66sbfgJw7tycvbZL62Y8XkdL4nlweN6OGlhu7CE%2FqYlJykTVxg5Ef3cYFA5Sn%2F7MkxZYCYyyyuFdWYUjz40dmmwU6zuONf31IOQjT3o61srsws%2FvcywY6pgEzhw8Uxs7MliRJ1%2FqqyxzvT%2B%2BBPrXCPVirCUX%2Beh%2FpJ%2FLdfkrPZgS3bteQE1lmFnFAmkj5b1mUIha%2BOCvi%2BYwYHxLjwRcItE2xZlQvPjtosumltXgZK0BZa4cYzhr8cKUBOFcmpgoSa%2FCKB1OnfrpfRqdkKmeTKYyioRknhGsMRW4Zwu5eUOAcePvvRDlxBpdvIcFuoegUgQemkcsmbcuxFu9EyDhs&X-Amz-Signature=2a9c30b20000d2e679863c18b2591e192f94d769ac4dd1f75898bb5ba7f5b929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


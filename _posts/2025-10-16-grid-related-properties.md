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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/761948c5-8397-476f-83a1-3a980c6fe23f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWYBIWH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDif4oBViEKr6aQFCI52ZPDvie6WcQ4F1d%2BmR4WpeYB8wIgC39CKNCKtrsFyfCv87KJ5KMq97jsOWzfO0XWpwjCZqIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF6Y2I6YhfJe332xkyrcAwKG%2BnCMCRlwBTCPNVaGGjqPODzy4NPoy8NpnyBmVeoxI5atDfCq0%2FIFTmYEcV2iocFQefICuPVUQGuD8GpbldVPUC6hQ77C7AHGpHTRftrMCxJhCsPnWHDvCEI4hsSe83S7VKIInZx0IMjiHUkp7IxPj8rZ%2BbtsEdJ%2FqSfXpd%2FzjT0oXlsugWS3W2qFtF57esOAhZAvzY61ZY2EfqMLkpjt8ee4LFbIC2fXu24ZKajgqFuF57MMqt5xVwYd2TlwGXv8ojcZ4iT5PRNpHtjWl9Ol3hHrgsK48Hl8%2Fij%2FOtKE8mA4T2HJ9Du8LC%2B6YFtQj6sljsubi0ttKXjXOaZCZ7prYtVzIU9930e2QtPH42I1gIwvtgnIsRDlu%2BBJdQNyeahoXFLHhApT1x1%2BHcbqV0NPSmlMCC6QBP20qynNyyy%2BXFY7du5ylJ%2Fc2ewqD96t2TIzGhThTNby%2FdHho7qMAGxjVfqvRYlq15BUj5GMt15Tfj4VdYT7pcfPiT%2F8ZTRiCfGBrWgq%2FBvGfgqlOcfRloQ4jKo7sXQyJ0Ig2vd0M1smbAntNcKRydrNvJ8uoou11qY%2FoX%2B9UWF1O1Sbcoq8cGlitWPg%2FhrTVNM0wWpFmrLh2pjwLnZfO72VvYUAMLL73MsGOqUBF45STeOuDRc%2BNbtpaRnSwcM%2BuP5c5zdFiLNSxpx25q5%2BTX6AlYRouUHfFCi2TVCwihCfJ7e1WSbVRAQbzsaqvQfprfv7ZueeF0L76goZU1ZA6Ez%2FPw562DQdSygX4mexrOnKYkRfVHTJ2GYByO5ZRfdlirWeA%2F6g8%2FjIGVWLUUy3Fe%2BUOVucH0Hp6l4DFEoCUAeYofo09htey2SdfemDbf6SQ5sS&X-Amz-Signature=e9f4764cb5527b1788c1a70a33ef58c2cd119e8b98c96f058c0949d5912546ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/0db1c901-d6fe-4f27-a1e7-85f6dcf8c6f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWYBIWH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDif4oBViEKr6aQFCI52ZPDvie6WcQ4F1d%2BmR4WpeYB8wIgC39CKNCKtrsFyfCv87KJ5KMq97jsOWzfO0XWpwjCZqIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF6Y2I6YhfJe332xkyrcAwKG%2BnCMCRlwBTCPNVaGGjqPODzy4NPoy8NpnyBmVeoxI5atDfCq0%2FIFTmYEcV2iocFQefICuPVUQGuD8GpbldVPUC6hQ77C7AHGpHTRftrMCxJhCsPnWHDvCEI4hsSe83S7VKIInZx0IMjiHUkp7IxPj8rZ%2BbtsEdJ%2FqSfXpd%2FzjT0oXlsugWS3W2qFtF57esOAhZAvzY61ZY2EfqMLkpjt8ee4LFbIC2fXu24ZKajgqFuF57MMqt5xVwYd2TlwGXv8ojcZ4iT5PRNpHtjWl9Ol3hHrgsK48Hl8%2Fij%2FOtKE8mA4T2HJ9Du8LC%2B6YFtQj6sljsubi0ttKXjXOaZCZ7prYtVzIU9930e2QtPH42I1gIwvtgnIsRDlu%2BBJdQNyeahoXFLHhApT1x1%2BHcbqV0NPSmlMCC6QBP20qynNyyy%2BXFY7du5ylJ%2Fc2ewqD96t2TIzGhThTNby%2FdHho7qMAGxjVfqvRYlq15BUj5GMt15Tfj4VdYT7pcfPiT%2F8ZTRiCfGBrWgq%2FBvGfgqlOcfRloQ4jKo7sXQyJ0Ig2vd0M1smbAntNcKRydrNvJ8uoou11qY%2FoX%2B9UWF1O1Sbcoq8cGlitWPg%2FhrTVNM0wWpFmrLh2pjwLnZfO72VvYUAMLL73MsGOqUBF45STeOuDRc%2BNbtpaRnSwcM%2BuP5c5zdFiLNSxpx25q5%2BTX6AlYRouUHfFCi2TVCwihCfJ7e1WSbVRAQbzsaqvQfprfv7ZueeF0L76goZU1ZA6Ez%2FPw562DQdSygX4mexrOnKYkRfVHTJ2GYByO5ZRfdlirWeA%2F6g8%2FjIGVWLUUy3Fe%2BUOVucH0Hp6l4DFEoCUAeYofo09htey2SdfemDbf6SQ5sS&X-Amz-Signature=b91f7096d2cf275140a6a2bb2881602eadc84059ffa89e8f8f3997cf8c1bef72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8a50a219-dba8-4f3f-8bbb-a0a6b699158c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWYBIWH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDif4oBViEKr6aQFCI52ZPDvie6WcQ4F1d%2BmR4WpeYB8wIgC39CKNCKtrsFyfCv87KJ5KMq97jsOWzfO0XWpwjCZqIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF6Y2I6YhfJe332xkyrcAwKG%2BnCMCRlwBTCPNVaGGjqPODzy4NPoy8NpnyBmVeoxI5atDfCq0%2FIFTmYEcV2iocFQefICuPVUQGuD8GpbldVPUC6hQ77C7AHGpHTRftrMCxJhCsPnWHDvCEI4hsSe83S7VKIInZx0IMjiHUkp7IxPj8rZ%2BbtsEdJ%2FqSfXpd%2FzjT0oXlsugWS3W2qFtF57esOAhZAvzY61ZY2EfqMLkpjt8ee4LFbIC2fXu24ZKajgqFuF57MMqt5xVwYd2TlwGXv8ojcZ4iT5PRNpHtjWl9Ol3hHrgsK48Hl8%2Fij%2FOtKE8mA4T2HJ9Du8LC%2B6YFtQj6sljsubi0ttKXjXOaZCZ7prYtVzIU9930e2QtPH42I1gIwvtgnIsRDlu%2BBJdQNyeahoXFLHhApT1x1%2BHcbqV0NPSmlMCC6QBP20qynNyyy%2BXFY7du5ylJ%2Fc2ewqD96t2TIzGhThTNby%2FdHho7qMAGxjVfqvRYlq15BUj5GMt15Tfj4VdYT7pcfPiT%2F8ZTRiCfGBrWgq%2FBvGfgqlOcfRloQ4jKo7sXQyJ0Ig2vd0M1smbAntNcKRydrNvJ8uoou11qY%2FoX%2B9UWF1O1Sbcoq8cGlitWPg%2FhrTVNM0wWpFmrLh2pjwLnZfO72VvYUAMLL73MsGOqUBF45STeOuDRc%2BNbtpaRnSwcM%2BuP5c5zdFiLNSxpx25q5%2BTX6AlYRouUHfFCi2TVCwihCfJ7e1WSbVRAQbzsaqvQfprfv7ZueeF0L76goZU1ZA6Ez%2FPw562DQdSygX4mexrOnKYkRfVHTJ2GYByO5ZRfdlirWeA%2F6g8%2FjIGVWLUUy3Fe%2BUOVucH0Hp6l4DFEoCUAeYofo09htey2SdfemDbf6SQ5sS&X-Amz-Signature=628936649439540218320cc429060e56a64182c1112be33c3504e40e1096e7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/a71f50c8-bbf9-4288-ba6b-d6d93a868400/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWYBIWH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T111958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDif4oBViEKr6aQFCI52ZPDvie6WcQ4F1d%2BmR4WpeYB8wIgC39CKNCKtrsFyfCv87KJ5KMq97jsOWzfO0XWpwjCZqIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF6Y2I6YhfJe332xkyrcAwKG%2BnCMCRlwBTCPNVaGGjqPODzy4NPoy8NpnyBmVeoxI5atDfCq0%2FIFTmYEcV2iocFQefICuPVUQGuD8GpbldVPUC6hQ77C7AHGpHTRftrMCxJhCsPnWHDvCEI4hsSe83S7VKIInZx0IMjiHUkp7IxPj8rZ%2BbtsEdJ%2FqSfXpd%2FzjT0oXlsugWS3W2qFtF57esOAhZAvzY61ZY2EfqMLkpjt8ee4LFbIC2fXu24ZKajgqFuF57MMqt5xVwYd2TlwGXv8ojcZ4iT5PRNpHtjWl9Ol3hHrgsK48Hl8%2Fij%2FOtKE8mA4T2HJ9Du8LC%2B6YFtQj6sljsubi0ttKXjXOaZCZ7prYtVzIU9930e2QtPH42I1gIwvtgnIsRDlu%2BBJdQNyeahoXFLHhApT1x1%2BHcbqV0NPSmlMCC6QBP20qynNyyy%2BXFY7du5ylJ%2Fc2ewqD96t2TIzGhThTNby%2FdHho7qMAGxjVfqvRYlq15BUj5GMt15Tfj4VdYT7pcfPiT%2F8ZTRiCfGBrWgq%2FBvGfgqlOcfRloQ4jKo7sXQyJ0Ig2vd0M1smbAntNcKRydrNvJ8uoou11qY%2FoX%2B9UWF1O1Sbcoq8cGlitWPg%2FhrTVNM0wWpFmrLh2pjwLnZfO72VvYUAMLL73MsGOqUBF45STeOuDRc%2BNbtpaRnSwcM%2BuP5c5zdFiLNSxpx25q5%2BTX6AlYRouUHfFCi2TVCwihCfJ7e1WSbVRAQbzsaqvQfprfv7ZueeF0L76goZU1ZA6Ez%2FPw562DQdSygX4mexrOnKYkRfVHTJ2GYByO5ZRfdlirWeA%2F6g8%2FjIGVWLUUy3Fe%2BUOVucH0Hp6l4DFEoCUAeYofo09htey2SdfemDbf6SQ5sS&X-Amz-Signature=6a627a809dae9794ffe88feca3b648e6796bd19b847d3b92db3acb4bc12ecac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


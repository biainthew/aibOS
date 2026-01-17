---
layout: post
title: "코딩애플JS Part1-5 arrow function"
date: 2023-06-30
categories: [general]
tags: [Javascript/Jquery]
---


## Arrow function 을 쓰는 이유


### 1. 함수 본연의 기능(입출력 기능) 을 잘 표현하는 문법임


> 💡 **프로그래밍 할 때 function 문법을 사용하는 이유**  
> 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용 할 때)  
> 2. 입출력 기능을 만들 때


### 2. 소괄호 생략 가능


파라미터가 하나일 때


### 3. 중괄호와 return 생략 가능


중괄호 안에 return 한 줄 뿐이라면


---


### arrow function 쓰면 내부에서 this 값을 쓸 때 밖에 있던 this 값을 그대로 사용


**쓰는 핵심 이유**


일반 function 과 용도가 완전히 같지는 않기 때문에 일반 function 을 항상 대체할 수 있는 문법은 아님 주의하기


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QME2CHBZ%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEPZ4vy5ybS1YZ36QGIo8Wqk5ysJmkDdriI6bZAHoWCAiEA497pPvdMxEhtRIB50HvTSf%2BLK6ehg8U78It%2BGGJ9e3Mq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAfnhMKHGSIzlTp3KyrcA%2Fwe87TlI709yKJ9qPgIrmXIACK9k6VviiHl%2FIgb5%2BDyFHQAs0BCDxCROY1lC1LS5%2FLa%2BxRHR7BpnZBRrvbPaf8%2F20K2vAyvgHCsuPRj8AKeTFAYjyu1qshl79s3LRbgRpY8sxXnq3jOY%2FjOywlTUnunDQtwGbvGwVPVu6CpKurdM5Q%2BlqlY8p36Qlw%2F74szAhhhTELomVIkzeyei9MM6rFUV4DJ35vMmR62xzVOgMfwq4Vuk8F0mgYhjLcanr7GaaLVOMyyAx6GE4%2B8VXI%2Fc3arTum87OZXctEgn%2B%2F8eg6qV8cFawOTK2VcxjFEGWyzXh8MySTK6zNxWgKpCV0FvXUWOrDVAk6gH%2BwOfryibZIL2oNEM6hWU1vX3kmO%2Ba3praMp7OTB6HkN7MW%2Flpqum90pMaaBgk6eq2c%2FlOpYTVNd5GoyX%2FI8sG%2FADNd%2BYadx55XpHVXky5PxVZHoxG9iU2A%2BQyqdvlwAvdo9psP4rFONHUbTYQvM%2FYfyZ2LLIVdAerE4hi5eW1EIUub7uhZC4BDm%2FHp66UYyrGeEEBiEt22yV2y0muVls4BmNplE%2BnbWr5DE%2Bx0Tjxriy1aNtefZHH2wDb%2BbGL5GtfuDm9t25C7PLQysH4nA1nnpthimMIGzq8sGOqUBj3PKQJnfYNIVE5Tmnazs9bq4fWFqHzE4ancG2EgLLclc%2BrUEXd%2FnU49NM2eKTGWsVLxk8ies205HkTrHPnfEcZf0cgKw7guRLlYBCiKrt%2Be8rCmWK0QJmkQZeSvnPoTueCIGeZisXJBvNDXyAZKK6KDSXIgmyZ7%2Fjkc5oMlfh2TVFRJqd4g3P%2FFXYF4moyujZuZEQU351T1iti6GRSweQugX2y%2BM&X-Amz-Signature=648cd2fb479655db1fdc024b35189c0f71afceb1ec0382d387c4b5a8aba6fe87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


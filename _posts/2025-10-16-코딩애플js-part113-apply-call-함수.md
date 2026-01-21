---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7HM5QX%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T011841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC35n7kavmwOT%2B9JWHwyeDCXrfQif8myMoGAH7DwC3cLAiEAnKRe1LhNOmpvp3iCL2loGK9si519f8PwCtiLJWG5BOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKa72nl1FQJ8MNUU5ircA%2F80d7lMP5QOE1ZEwxuwNA3lHs%2BliIKdv3K7qQ4T2zFy6StbvMHy8dxrmfa2VaoanqCoerCBgreBHPTXM9tH3H7VHSDrAySZDMCfVhoBUpfx7RQYrthH7BJ0vGnj3nuBj9VUXtm8mKw7TjmnqdUQozovRpDi7ryrcTOyDBxVi%2F2HE2fJCrhdJUcRRk1bnoZroDHErt5XdgWkQ8emkM0JtDLaADYngfCxozYebMuh3xCTCS6rVISvoYuTpt3EDYHFA67%2B7TTsMwQ23UP0%2BZ3GWe%2FNV5%2FyCjk32UNtK512hqXijzBAzh5ehdMEV9472ZFsISKuOxncNaevEi6f%2BByy9QoENTX2vrsTmnrsJqzj%2FtfocPUduPqKZbUZlvpHBIi385MK4SHwHXr7kW1fnoNyjLnoI2KubInPsp7iOSElvqnsrGprs0VDaKiAWXmqYvgpbUOrtMKh6nZwnrMGiiZziCq3kFRsag9G8X7fe5qad2iPOw5zexiTp6M00hXKG47RnmVs1USJbp9L%2F2sQbffGJhpkXEbpjd2Ss%2FQTGuWYowRt1OhKcvd%2BXh1LaWHuPMAWlkDy3BbxIwqhjduVfKfkr6Z2SpPORwAbVCO%2FHvdO3c59ixP2qpcrggYSSLtPMO61wMsGOqUBplLjAAf0q4q8XXQHr7YaPbWmWMq9wfsCsK4vyO9WNnsuDJPadRluYzJ6IoKdqFv7B6QBPS52ya4ugDD8r5qgZZU0f2hp8lkwT1cR3ppVjUVrmoUNVZFvo1l1KRnMgGLvn3YVIiNuU88XS41RyGnaN3hmnzIdiKMFprFh5SltM2HYDJEP%2FG7T5C%2F18kk6HRnbdUaUQCkYpbp9vm086CrvdoXlPUbQ&X-Amz-Signature=1647a7d95f0a35501063d77767d0108a6c89efbc60ce1d3f6c9024b34969dc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


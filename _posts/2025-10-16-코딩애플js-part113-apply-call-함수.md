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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3W772H%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T011329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDxS7SvXN9%2B4srl7EBDudCvZp7H16tZ4SBp4X7sPQw3AwIgJSEvdack5b8vSPirnVxQqTHCM0QBjPiaeds%2FMltJBVgq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHVbAPk%2BXRgyBHJ65SrcA3hdM7Blmu%2BKZz6lU3pmQyMYYA%2FF0AcqY%2FYStOk6rucIsVDBRyOzOWqiezcp4rn4thW5mFdpZjioPutbfGOIP2gs3rF%2BLmYuZIhZReb33gDJcTK4T9Wc0hqHCzUtPQEsd83k%2B8ffXSmi6RWXrbxeoIb9M3WLDCtFef4rm3LPn1Prq7zwnctxJdca02eDe6PuMfjGBadWZoF3Y3s63Ppcl74ZU5b0uRzycCWiqHDjDi345S0zLXoRhHeSRHX2Wv3uloT0INw5vyOYYCApcCNWPHoRhpktOcq87xYv3CfJEIUsCWlq1Xb1bMU6AuI7HWGxL15pfJhO0ZUnnrbbTmzNVwu%2F%2BELC3M3CCPClqLiAxepZTFBc6%2F7BHqnhfK1m2pZq7z2bHHg7e4YoLLg%2F8978evC81zhr7f7F8hFtLBnnndKaZ%2FNzfGh6DyCAvytTDBUdnhjZR5k9XsGjer3GxcD8eAKgLfEUamK57dQ1GI7dHUWRmU%2F%2FfwNOmxl7QpXQshy7wqHRQ3uxL27EnFZnxHAO2VH8AXqWK6P%2BH770jecEmHoo1VMbdVh85Zfv4gR0G4nttXaqNKCYMRmsCBixR1SOXD2IaTMw4QLGE%2FjDaZmIoXSz0TYz4C3Tr64IU%2FWZMKbjrMoGOqUB%2F%2B4LkzjMTpjK7wjw41BTet00QRbqN4jmoxF9IY%2BXoXIUuy2S3z%2BkSD9AaEF%2BLoko9DoIo35zKLiNQOFhgvn0uI6Or9i3fTrXgJVEll12uctoJCWh%2FA146eLN7yfQC5A5niw74lnOoK3SbtuSfb%2FkISkRjQvSw%2F3Ng3cGSSeeOFTF4Qf46I5Z%2F39xvBcxZDHCq9DFlvw%2BlhwJBaFPl7eR%2Bw1iPFZ1&X-Amz-Signature=8845180cc0835503019fa64ce7e2419d39f693b677c89402204a85b1f35c0b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


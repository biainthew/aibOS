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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQSHEVF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T011547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlllzs9A%2B9ejunkFzF4nIOo6wgIgwU1IG2OEGFPsyXFAiEA3Sj50vDseya6ntda48eh9KIb0P4xDa7P%2Bhm%2FL5dHSoYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0JTcLRyB7fJoybLircA%2FIMln29%2F2f6dtzUEMo05LWpn62eQhZ3JdRoH7RB%2B%2BBO6zcdijhcMiLsZXXTIxzNB%2BEa%2BriRodE6V9ku0cEVh%2FB2UP%2FQ5sRd%2BXMV3bS1Unq0jf2NBgsJszkn76AVHTzyZxHXQWviHv0zzStYHhUUCaixCEzR0otIASQQM7Yk7fqD%2F%2FzLPdw8XoEQuqS6%2Fw1yNy0Z9yjEPnMGqZSC6V8CmRY%2FvovVBfC%2BUtuV0y0Kz1Uf7ut8BYBO%2BvPrpKywue%2FEfkCIX7ZsCQNfArpATdMboNql4V2jX%2Fi8ETFGAHJQQeEbiWdjNNYhoUb5%2B4vSfV6x%2BPOGocgbIyLbS3R6gZXtdnbJuSVm2SzskSCB3RpMTGfkSLoDFei7rW9aNbulK6euzZkLLTQTD95aFIV8xhvj6PidUS4BA7yA5kwhfBQjYmakq4QzyoRY86n%2BFm2FKfG%2BL1mnaM568y6mL9kfaIIHh7sLdnEl567uxElgUMcWO%2BLfo0%2F%2BWaJeKwAjQFLFdbICQhe%2FdrgCKCE%2B1D3MIdF%2FFdQFwoCqVkxPrWCUrwbR10GNscmlMW0BOeJUeb7kMKaiw8LN3Yfv0Ne5owR%2FQSSNxc%2FhPTAVbpd5%2By13%2Fhy4WIXZUlpjMeJV392fThFwMNfa0MoGOqUB0QqmVjxq6BOg1mZuZKGaF2FWeKEXczt668OmbFhQDTH9P0DhutnXQWyfFU1ddZXZEcBqlttylQtCIMt2CC09ViD2XnZe0ZggMeLYAt4ScrFjnmLGJggeUn9xXN8%2FuLYOsUEcS02gYsiiMqjqNMXf3WR%2BSbwWc9WH8IuF2iGnDeBnR1rDBbwcdoWmRnxBtQ5CbS%2BKzCghSmWbJSKm4%2BwBUnYLoXED&X-Amz-Signature=1d62f69573d64e00599b73bcc2eb7d2603bd3474c564df994acbb6410fa8ee07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


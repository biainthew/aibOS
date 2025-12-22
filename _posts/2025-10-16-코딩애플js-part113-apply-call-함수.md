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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWLLD3AX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T094006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFRvYxybTd5hoGuDy4%2B16D%2B55qxMtxWdrTlCPr6yi%2FnTAiBsADXB8zDQNKhCwff23t15%2BcGAVT38EIBEVosa10%2F4DiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBd0UlGQ0U0FT%2FnGOKtwDPLsfK%2FnXB660pVoK7tEm%2BX1hRZGvDJyzMUqp97N5opNQSYdAvPJQv9yeUb8RlOKn7VMEG2Sv367NhjiFs5UflWpHXuuu5vnAde0nKH5DBKEM4srSoZhsAfXZw%2BSnHHWYwpNJVADfqsk0HeaS2aesLMJpYwObRPMjJRhLJdM1FWriqdvVXKh0gHoPv5pZdbF283miaikmG9%2B8BzTcL53VzGXESZasTRrcnvjh%2Fg6rm9g1028DPwAZtnqdfIpGKeeYei0uNA6A7bijgP%2FJ2dT9ywj8Y8w%2FC4JM7prk%2B1phkSlm36b9UpRdWyxhl9GJ2gfAhQuEbHUnsh3lofVsietPkXas8qo8JJH51haSjLPDmKPlm5OvFLe%2BUPT4fkXmge7G%2BuRrJAhiVvgcZW5566cW9TV7RdLInBCTjrTOqxrFOPZEqZj0vXN%2FbqEnqKh3s%2FvcXlmROdhJrdN0tlfOOsQJX8PBlLEdXU%2BZR1BDr63jhwIknCeEjor1miXBKsUacEvfuHVkIBq6MjY51iCBke4NdUfabrE7E20Lq%2Ft0F6hzDD%2BMKnB%2Fu%2BvHuy2OMpIJiaaRhGJ56W%2B9zcXVqO03uwJq3CYRe2OrSHndUuUYXHkOE6%2FwsVMOHUR4DcWWPAww9JWkygY6pgGz35xxyTvgn%2Fe7hQk%2FTyB%2Bf27n2E1yqc3mM%2FHAUkTKDLEqkdcJ8TtvuLe8KLa9qpqapokrqfQh%2BN6t%2BdCv%2FAkDZsSaUwCxfb%2FUcW8qf8nGDDjma56%2B8OO9uMeWZ12D%2FwMq%2BcVaaadXJWME2qgFHul0x5B0EKshIoBLT8xqSN%2BoWW82MVC00rPWCA9TTu2lLvzeKavP4mlxBOGO6Y5tv7%2BdMMJJUHH2&X-Amz-Signature=275c553905c22b2422ae952fbdfd9bd3ae48be9e3bdef32c06989f3e527583ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


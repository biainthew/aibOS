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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO4N4R7%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T011331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNEoA333w1ZTpxjAXulivvNvrx6bh7yPddWj28AWhtvAIhAJN5zsqIX34zLm%2FCkxY7Xa1RhzMbXIpxOlVIuBLmVsx7Kv8DCFoQABoMNjM3NDIzMTgzODA1Igw3H4UNVW7PCw52fHAq3APHZjfG4ynHdRSrNAirOXG4ztx%2FY6wLvbyDjIui1Y%2Fjt3rZLfBnVOMUF8vDInQN6SUeUPui5pxEI%2FxaKs1M5hDzGLctz6KNEHbdDh6aMPQqArW34g0wEcDxmjLSV%2BLq0VhadjEnBXNlKkg8TJ4uKCA2x1F2lI4AwwxJ5Gf05nb6R0oPqx9fl1unq0Fxw8n4NQcUHCKZ828n1%2F7NwUH1NHrg3V4sTlEBjZxN2e3kglJVKNrLOTT3eodDWiEDGacEIEH%2FJSOR9LsOkQA1hp6ssm2msLuzU4YhKBcXeKiEbE9efFMX233Kz%2FIgdk3Z7XAdj4GxEABImY26%2BWDYAOJyhAyt%2Bjv%2BurRjGvCZgNWkgTkgGxO4ca0LiqUwVZJNPu5owfU2CH9yMZvM9JcTPV9Ctq7veNKG9EwOc1ozXmYgWh%2FiljYjimqNYIB1enmb0xRpOAGj%2F%2FSElwsoKpSKdhYOQ76fUMd2CCLsOWZKCWJqH5kB%2Ba%2FRpf6El3EKa957n8nkbiS46Tuwoj0VopDdC4OSu9zgcu6KH%2BeeZUSY5t0FX7hDMZZRfw%2FFzcnB20r6DRILCxNG%2FQARmIi%2BpxZ%2Ft69S1TLdaE9TaybX4IqSurEGiOXLidOU5LgqCbbBMl3oQDCDs6vLBjqkAWzavCgYmQDSezc6qPI5zVcjEHoHdo%2BJQxLVmdyOl9eeD3cCUbTQCSlxn0je4qpCW5ROMHcikG2xw9gzkEFoLavA107KOIWeiPql%2FMgo3jxKdvLElBomNLiimvJJ2IFOhLePxDXJnP8XiNAb8VjKb84oWh9LbwleQyL2Qrzv1r3vmFalZH9h0h4wB5JP6cz%2FqVVnGKICaRIyT7xkZo0C9PyJlVGC&X-Amz-Signature=fefcebe913b7d8e5ecf6674baa02fe77e6bf51d855fe7385b968d2e1712317fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


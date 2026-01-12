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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWGLTCQ%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAcwW6jH9CWrszDGP%2BFjBIOEsCPyR0xC4bYKyUVKJscDAiBihkXCvQAV%2FfN%2Fkhdmy%2BMLvsyHlXq3wH401OymowIjFSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGVr1foyctJ3GlFwWKtwDB2f5sTP%2BsCqubA0%2FDEM7PDmQgq906vSF%2BCCBnQ5HtTbHU0eC87N1pf1Fm8aw6e4sGtNzro0pj0d%2BYDpBXgHhXI5ihvaMQaLY0d7FqTA6%2FaelB25HOdla8YzYYSVTP7qih5Ou8XNMEC8T2fu7pwOAD7zpDvzUKK1YjhWt9j81AjaW9N%2BR3rYPXj%2FD%2BJ%2FeXnhY%2BQ%2FrCPufsWnwReS8tqru3gGtxMuHzCXJV2EfQlE5uPJop27yTPqJGVjUiPUQHuTyLX9Spb8bXRsczyTyNTe9sbyCqsLz7Jv0EA8UhveVlxys6tPNsCePC7%2FzIPJCOP%2BzZEjUyrF6jHBQBX%2Fh9Iz5cIUklC9%2BE7UFcg%2FUOZ5cu%2FobfLMfeJoJrv4W6g1quJc%2FvPy1hFxECYLMH7Di1zsRy8K6LZgd1lfZPoNvP9T4uLuQxuS5tUQsp7LYOxFFOKqI1aoWiKcGRWjKnaLramVbqOiPBRdqGqRHksX4%2BvG0h7hwBt5GNRHMTP3Airc0gcan%2BtgkHwBZJj5LkgkoPAW%2FWZwfKScZqO2Xo0wBYU6XJ9SpxEs7DrtG5jKq%2BO1zqazE7x%2BbKKbmebHMH7P2R59kVU0WD72PvgvKhTpyLynYxUs%2FbDifNNxorQGcJCAwjPyQywY6pgH2Ke60ClN%2F2nCVfSOO1CQ%2BKyUX7xeUns2bLKyUDds8wfkGFOtkMXZcRP2agOpy%2FDtdYxtju%2BpjFUAh9l5gnKEl3hfvAvSKd9dwsARSihZCRTXqOg2z0JnlrSlsMXapeiI5rKfH3Y8CyjKJaBOBxCkJBpLchY%2FCk9m01knnNnCYNtcPniAKqFifZeBKvzDJYjNYClu7WcRWID6e%2FAkVtB0B31UTJevN&X-Amz-Signature=f0e166a7eb58792edfe31fec68adad30d17b5fa8943d3c65b835c1cc65e39f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


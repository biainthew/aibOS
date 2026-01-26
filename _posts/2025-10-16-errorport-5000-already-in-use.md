---
layout: post
title: "[Error]Port 5000 already in use"
date: 2023-02-13
categories: [general]
tags: [React]
excerpt_separator: ""
---



: [참고링크](https://mytory.net/archives/13123)


🦁 구글에서 pid 를 찾아서 죽이라는데 죽여도 죽여도 계속 살아나서 이게 뭐지 ..? 하던 중 해답 발견 ..


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/25d0ba87-420d-4830-a8ac-72d52506b04c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5SQL5P%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T105051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHk2AssJY6NW2KpfL3ngNnHkDMNHchW1E%2BYzSB3bX0oxAiEAgIqIXiGn73JLEbk%2FuJDcEmocPzKJEGvHGhDlZJYGt8Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAuAGFA4Y%2BsbjGnDsSrcA8AByS21a%2Brgfwu7IM55eC2D%2FqXti343QS%2FnCW0xWQEbw3BRgSitUKy6sbuOYFzpmO34r9Z32fim0Y9YCPqWc7cw%2B8SSisF0iFRL%2BX25pXSoL88KIUy3rOPrvLKvb%2FrmZdtZWN96c2ZJnHao0ot0T2PHjKGFKwWDNl1ncOqMGhPICXOEUm8iWFv3UgiFVHFKfxeLG%2BYfc4AdH6YwgS6QW6mu%2FpXWWpuZMW67Oy2mTWcYzCqf3BTeobJfodJ7P3Xb6RuOZiXK6nR%2BceGisbeddPAHDXGls0r0HIi960bE71xM428CTHbBbj2j8KTssPFvkfzaY%2Fe%2FIGGxyxAXQiQBN8bKNHc%2BgLJkDzp%2F%2FIf97vv0Tfy511VeWDxrg02B%2F55aQ0aPGEDPAiDEo5Efmx3wEsZh9oxcmSaOCB4zETMPbCfIJbBoBzp4ZMQmlEvKiIDUbOe7FYnsf4JIGYBiA8qsgeGlBUbSX%2BvRkK4n0GOdKOlZtoUyzwxyg4yhUX4RUICKCtX5lehLXYfMFEX5yElnFI0F%2FQINA9BqvW9sQ2%2Bja4YpzN4sXZLo%2FGmPs%2FCU3cxXD7brsQj0rsU9%2F9aCY2oqGpOW8PBJhPl0JeEA5cY1y1iW0oSVUIE0SWTM%2F%2FbdMLD73MsGOqUBgHV0tdlTjXv9Jl5vTVofHTGQx6wWadkklX%2BaPeXzd5PXYKJYbpjTglF2C14Vp8ZbXd%2FZGU4HaeW3zT%2Bgz%2FbegRT1swCVzPR8FIQWswtZfthOoDdHvpPZPoB6%2Bt0gw3IyI82yLoz5FjkDD97sjYR0dpO5%2Fs2rfyaYy8r9j284KbxOYZiF6W6f7zdsMabkVpIRtUjcNAVdyhA9qojvU0h9osy0RFiK&X-Amz-Signature=5a9da62ee0d3e8033f4349e9257900034d9dd3a026157ac1419e04ee2c2b9c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


어이없게도 맥의 Airplay 가 문제였다 걔가 5000 포트를 사용한다고 한다


그래서 시스템 설정 → Airdrop 및 handoff → AirPlay 수신모드 를 꺼주면 된다


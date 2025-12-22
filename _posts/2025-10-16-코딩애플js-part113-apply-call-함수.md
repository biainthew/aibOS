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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665METWTCB%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T084741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEjIkVvng8E3DsMSPMOzgLzmgE%2B6Q84DZPCgR9XtWGhaAiAnOz%2B4Hf5m9BGmbaL1I8Cny99fCFpPz2p1SbzINyEnayqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSee%2FM2%2FpSsJJMGiKtwDLRjTWjQG4DVfc1sNSqpMdfVu6j3PzakR2vwNepOwrKqbjsAdm6hJ1Ke%2Fd%2BJM226zXWN5CZIeEBqqT%2BUur0lPjU0AaeXymgB2Jg5uXbmsGbGd1U8BASuGKAabDe%2Bd%2Flp714%2F2wN2oTWBx46dKe7OoVjzjW2vL52ZpMUG%2FsV9G3xNBBxTBXZtsLkszzPdICWC%2BA%2BkK1EIlcFfth7MD6%2BYhWiwWDZHy%2Frv4kCZGC%2BgeIqYAcAUQ1VkK2GckAO7tcAjDVnqB0y5GpZ1RoM65CKwpI5Foa%2FT4MXHccXm7tl0PaLVaUMjaHcuGS%2BDt1AkPIQuaw5K3%2FaOa%2Bo0DeEx2g4V0zBnICTOdShTAIdUSRJAMD2AGIw21UpWqobSNqjRbh%2BtYqtNAtZzkiPRCl7uByNCy4eZCPQ1hPn05Vf4I1gjekE8tQH34QpxrCYEQNlJtL%2BuwtxyNzLIhbcBS5BcOOXnycKSkf1ALsmfac%2BqzZvfTwI%2BdyItus5i3kpCaeTvGJm0rQRtfgVVuom%2BYvVbwPiaZVH1w9TZ6lFlx9C5f4TnNjbdv4scLeN1T%2FQzNmAoblIc7Wh4htlKqbkiVXVSYR1%2BsmIxaLi2nHH3Jy31k1wgDMp9Y8TsF71EHdI5poeAwnfmjygY6pgFHhUme98JVOHA8mWWGAJBjM8kF%2FB34z2hxOe47y9fF1XxVXKzKc28IORGFACewZWLt0nct9LPGjZsT0Jb%2F5Vk8RYmzlwtxdzLnZ0K4cZVgc5FY%2FwdaPNTXVrTtgMXY%2FGtIGESVx4Vg5OVcj%2B%2BIw7rb%2F1OHhh8i5CnUh9UPrB3B9wuE4NOUAQBO3zBcHbGsDuBW3zXCUJuF7EnqxI%2FbF7TSlFEpDM%2Bc&X-Amz-Signature=440ac9da9d08d1bfd5946760f0c330618593fad9bc27b44474a655bc447c60ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


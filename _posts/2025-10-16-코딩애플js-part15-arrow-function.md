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


![codingapple.com_course-status__%281%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/2a3e67a7-41dc-4e46-816e-deb18c96b5f2/codingapple.com_course-status__%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPZSSE7M%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T012228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsUMGt6seb3XOrotq9go%2BeHt7r4ne8fvyX9yBXbznA3AiA1LZh4NSw7x7tLsgm0nwdpvhcFz8GsPuax6zTLRKWPtyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgb6xouxf3vAuQQpuKtwDczF1jguB0XuX2qFCDJwPrXphjN%2BZDKFTcu3ABdw31f5qN%2FdzuhTh0SxVJFCIlgPBUTaRP1w8QV9JgRjacqpbrgT8UiyetfkwdOkp0%2FO2sYWID5og0Nr3Lm2kXDAL8JMEFE7Zt3J4zShpdTQf5gRLE2hVGJ6PwJKPB1wecMdA5irUZgu9osvvEm7dP3N5GMay8XWhrF8y63XzhoOIQv1nNxx0zqShZrHu0rFlg5CJ8%2B2qHmKXYJayc86pf%2FujXwiDElZ%2FmAuSDvB1okuE4clegTGMLL02rNPjgH06FL5ynS18bNUNfDME%2F3w1WU806CsF4uuBuVNCIj6GxDUGcO3puobmwM2D%2FM5yOImp7cBAcFYTAGBAobA3A1IxPwMtzBoe0fM3G5wYwKAe3ebNjmWE9Wd%2B9CfrvHjVUee1nYjIVgNzgmDzOxygqAjTZo4z9qSmMUXTS2CFakMlyu8ui2ZqrZ6ACreQuJSR9ZWdA5kGV6XzPlHLyq4kMSOnHheN15Xjr7zRj8djKIxOkiYIldfEmtqNSSO79IcbniR0W8Fw7w2GhtfNMaz%2F84BNr2V8fmKic9MNg%2F3zSdC1Nwp5cBQfJfn6xS5gFAjTNEl2QFwDuOdRJbYz04Eho4RBmZwwyaGwywY6pgED5Z9qG1kFll5MQsXQAC6r8%2FAmAnmCMg1JeSd0m4nGrAEPwGPX2Kr9G5t%2FMxxdPTIMT2PxypDNUN50VNwokVdLMIzI42wWIBD11LfkOUnyRil2KyPPxjC1cIM24Mc0%2FsEOtK6ujiK2n114beG75h%2BDbxyzYU7%2BJ2Ht6hYr5UFTbKWNxJMqmTbZ0xJtUdGALdt%2F2i%2FzNC8w5gK2xQ85HSdej2ZoaQcC&X-Amz-Signature=6fde437c208831c9bc64bdb69d6636ebfaad18916cf2caeb2eb041be26fa16cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


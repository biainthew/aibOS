---
layout: post
title: "printStackTrace()"
date: 2024-10-07
categories: [general]
tags: [Java]
---


예외 발생 시 예외 메시지와 함께 호출 스택 정보를 출력


### 취약점


프로덕션 환경에서는 보안상의 이유로 사용하지 않는 것이 좋다


호출 스택 정보가 외부로 노출될 경우 악의적인 공격자가 시스템의 취약점을 파악하고 악용할 수 있기 때문이다


### 로깅 라이브러리를 활용한 예외 처리


로깅 라이브러리를 사용하면 호출 스택 정보와 함께 예외 메시지를 로그로 남길 수 있으며 로그 레벨을 조절하여 필요한 정보만 로그에 남길 수 있다


이를 통해 예외 정보를 수집하고 분석할 수 있으며 동시에 보안상의 문제를 방지할 수 있다


### 예외 처리 방법


실제로 예외를 처리할 때는 `printStackTrace()` 대신 `try-catch` 블록을 사용하여 예외를 적절하게 처리하는 것이 좋다


```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyClass {
    private static final Logger logger = LoggerFactory.getLogger(MyClass.class);

    public void doSomething() {
        try {
            // 예외가 발생할 수 있는 코드
        } catch (Exception e) {
            logger.error("예외 발생", e);
        }
    }
}
```


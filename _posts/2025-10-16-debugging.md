---
layout: post
title: "Debugging"
date: 2024-10-02
categories: [general]
tags: [Java]
excerpt_separator: ""
---



## 인텔리제이 & 크롬


### 1. Sysout(System.out.println)


코드의 특정 위치에 `System.out.println` 을 추가하여 변수의 값을 출력하거나 흐름을 추적합니다


{% raw %}
```java
System.out.println("현재 변수 값: " + variableName);
```
{% endraw %}


### 2. Log(Logging)


자바의 로깅 프레임워크를 사용하여 로그 메세지를 출력합니다


예를 들어 `java.util.logging` 또는 `log4j` 를 사용할 수 있습니다


{% raw %}
```java
import java.util.logging.Logger;

public class MyClass {
    private static final Logger logger = Logger.getLogger(MyClass.class.getName());

    public void myMethod() {
        logger.info("메시지 출력: " + variableName);
    }
}
```
{% endraw %}


### 2-1. log4j


log4j 는 여러 로그 레벨을 제공합니다

1. **TRACE** : 가장 상세한 로그 레벨, 매우 세부적인 정보를 기록합니다
2. **DEBUG** : 디버깅 목적으로 유용한 정보를 기록합니다
3. **INFO** : 일반적인 정보 메세지를 기록합니다
4. **WARN** : 경고 메세지를 기록합니다 문제가 발생할 가능성이 있는 경우 사용합니다
5. **ERROR** : 오류 메세지를 기록합니다 프로그램의 기능에 영향을 미칠 수 있는 오류입니다
6. **FATAL** : 치명적인 오류를 기록합니다 프로그램이 더 이상 실행될 수 없는 경우 사용합니다

{% raw %}
```java
import org.apache.log4j.Logger;

public class MyClass {
    // Logger 인스턴스 생성
    private static final Logger logger = Logger.getLogger(MyClass.class);

    public void doSomething() {
        logger.debug("디버그 메시지: 작업 시작");
        
        try {
            // 예제 코드: 0으로 나누기 (예외 발생)
            int result = 10 / 0;
        } catch (Exception e) {
            logger.error("오류 발생: ", e); // 오류 로그
        }

        logger.info("작업 완료"); // 정보 로그
    }

    public static void main(String[] args) {
        MyClass myClass = new MyClass();
        myClass.doSomething();
    }
}
```
{% endraw %}


### 3. Console


인텔리제이에서 Run 또는 Debug 를 실행하면 하단에 Console 탭이 열리는데 이곳에서 System.out.println 이나 로그 메세지를 확인할 수 있습니다


### 4. 디버거 사용


중단점(Breakpoint)을 설정하여 코드 실행을 특정 지점에서 멈추고 변수 값을 확인하며 코드 흐름을 제어할 수 있습니다


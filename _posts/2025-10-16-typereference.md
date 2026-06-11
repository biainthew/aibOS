---
layout: post
title: "TypeReference"
date: 2025-02-11
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### 제네릭(Generic)


클래스나 메서드에서 사용할 데이터 타입을 미리 지정하지 않고 실행 시에 특정 타입으로 지정할 수 있도록 하는 기능


즉 컴파일 시 타입을 체크하여 타입 안전성을 보장하면서 여러 타입에 대해 재사용이 가능하게 만들어줌


### `<T>`


`<T>`는 제네릭 타입을 나타내는 변수로 임의의 타입을 의미하며 보통 클래스 또는 메서드에서 타입을 유동적으로 처리하기 위해 사용됨


보통 T, E, K, V 같은 이름을 사용하지만 원하는 이름을 사용할 수도 있음


| 기호 | 의미               |
| -- | ---------------- |
| T  | Type (임의의 타입)    |
| E  | Element (컬렉션 요소) |
| K  | Key (맵의 키)       |
| V  | Value (맵의 값)     |


### 제네릭을 사용하는 이유

1. 타입 안전성 보장
    - 컴파일 시점에 타입을 체크하므로 잘못된 타입 사용을 방지할 수 있음
    - 런타임 에러를 줄이고 코드의 안정성을 높임
2. 캐스팅(형 변환) 불필요
    - 제네릭을 사용하면 타입 변환(Casting)이 필요 없음
    - 코드가 더 간결하고 가독성이 좋아짐
3. 코드 재사용성 증가
    - 여러 타입을 지원하는 유연한 코드 작성 가능

### 예시


{% raw %}
```java
import java.util.ArrayList;
import java.util.List;

public class Example {
    public static void main(String[] args) {
        List list = new ArrayList(); // 타입 지정 안 함 (문제 발생 가능)
        list.add("Hello");
        list.add(123);  // 숫자를 추가했지만 컴파일 시 오류 없음!

        // 런타임에서 ClassCastException 발생 가능
        String str = (String) list.get(0);
        String num = (String) list.get(1); // 여기서 오류 발생
    }
}
```
{% endraw %}

- `List` 에 `String` 과 `Integer` 를 섞어서 추가할 수 있음 (잘못된 타입이 들어갈 가능성 O)
- 데이터를 꺼낼 때 `(String)` 으로 형 변환(캐스팅) 해야 함
- 런타임에서 `ClassCastException` 이 발생할 위험이 있음

{% raw %}
```java
import java.util.ArrayList;
import java.util.List;

public class Example {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(); // 제네릭 사용 (타입 지정)
        list.add("Hello");
        // list.add(123); // 컴파일 오류 발생 (타입 안전성 보장!)

        String str = list.get(0); // 형 변환 없이 바로 사용 가능
        System.out.println(str); // Hello
    }
}
```
{% endraw %}

- `List<String>` 을 사용하면 문자열만 저장 가능
- 컴파일 시점에 타입을 체크해서 잘못된 타입이 들어가는 것을 방지
- 데이터를 꺼낼 때 형 변환 필요 없음

{% raw %}
```java
// 제네릭 클래스를 만들 때 <T> 사용
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class Example {
    public static void main(String[] args) {
        // String 타입으로 Box 생성
        Box<String> stringBox = new Box<>();
        stringBox.setValue("Hello");
        System.out.println(stringBox.getValue()); // Hello

        // Integer 타입으로 Box 생성
        Box<Integer> intBox = new Box<>();
        intBox.setValue(123);
        System.out.println(intBox.getValue()); // 123
    }
}
```
{% endraw %}

- 타입이 다르지만 동일한 `Box<T>` 클래스를 재사용 가능
- 컴파일 시 타입 체크를 해주므로 안전성 증가

{% raw %}
```java
class Util {
    // 제네릭 메서드: <T> 선언 후 사용 가능
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
}

public class Example {
    public static void main(String[] args) {
        String[] strArray = {"Apple", "Banana", "Cherry"};
        Integer[] intArray = {1, 2, 3};

        // 문자열 배열 출력
        Util.printArray(strArray); // Apple Banana Cherry

        // 정수 배열 출력
        Util.printArray(intArray); // 1 2 3
    }
}
```
{% endraw %}

- printArray 는 어떤 타입의 배열이든 출력할 수 있음
- String[], Integer[] 여러 타입을 지원 가능
- 제네릭을 사용하여 코드 재사용성 증가

### 강제 형 변환 (Explicit Casting)


{% raw %}
```java
Object obj = "Hello"; // Object 타입에 문자열 저장
String str = (String) obj; // 강제 형 변환 (캐스팅)
System.out.println(str); // Hello
```
{% endraw %}

- `Object` 타입의 변수 `obj` 에는 `“Hello”` 라는 `String` 값이 저장되어 있음
- 하지만 `Object` 타입은 모든 타입을 담을 수 있기 때문에 다시 `String`으로 꺼낼 때 강제 형 변환이 필요
- `(String) obj` 를 사용하여 `String` 타입으로 변환

### `TypeReference<T>` ?


제네릭 타입을 유지하면서 Jackson에서 객체를 변환할 수 있도록 도와주는 클래스


Java의 Type Erasure(타입 소거) 문제를 해결하기 위해 사용됨


### 이유 : Java의 타입 소거(Type Erasure)


Java 에서는 제네릭 타입이 컴파일 시 제거(소거) 되기 때문에 런타임에서는 `List<String>`과 `List<Integer>` 를 구분할 수 없음


즉 `objectMapper.convertValue(dto, Map.class)` 처럼 사용하면 `Map<?, ?>` 으로 변환되기 때문에 경고가 발생함


### 결론

1. `TypeReference<T>` 를 사용하면 제네릭 타입 정보를 유지하면서 안전하게 변환 가능
2. `objectMapper.convertValue(dto, Map.class)` 대신 `new TypeReference<Map<String, Object>>(){}` 사용
3. `List<MyDTO>` 나 `List<Map<String, Object>>` 변환도 안전하게 처리 가능

### `(){}` 가 붙는 경우

1. 메서드 정의

    {% raw %}
```java
public void printMessage() {
	System.out.println("Hello, World!");
}
```
{% endraw %}

2. 생성자 정의

    {% raw %}
```java
public class Person {
	String name;
	
	// 생성자 (클래스 이름과 동일)
	public Person(String name) {
		this.name = name;
	}
}
```
{% endraw %}

3. 익명 클래스

    {% raw %}
```java
Runnable task = new Runnable() {
	@Override
	public void run() {
		System.out.println("Thread is running...")
	}
}
```
{% endraw %}

    - `new Runnable() {}` => 인터페이스 `Runnable`을 익명 클래스로 구현
    - `{}` 안에 `run()` 메서드를 정의하여 실행 내용을 작성

    > 💡 **익명 클래스** ❓  
    > 클래스 이름 없이 즉시 정의하고 사용할 수 있는 클래스  
    >   
    > ex. `new TypeReference<Map<String, Object>>() {}` 는 `TypeReference` 를 익명 클래스로 확장하는 방식


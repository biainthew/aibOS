---
layout: post
title: "List 와 ArrayList"
date: 2025-01-17
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### List


`java.util.List` 는 인터페이스로 여러 컬렉션 구현체(`ArrayList`, `LinkedList` 등)의 공통된 동작을 정의


실제 데이터 저장 방식이나 내부 동작은 이를 구현하는 클래스가 결정


`add`, `remove`, `get` 등 리스트 관련 동작을 수행하기 위한 메서드들이 정의되어 있음


코드에서 구체적인 구현체(`ArrayList`, `LinkedList` 등)에 의존하지 않고 인터페이스 기반으로 작성할 수 있음


다양한 `List` 구현체를 변경하거나 교체하기 쉬움


```java
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");

// 나중에 LinkedList로 변경해도 코드 수정 불필요
list = new LinkedList<>();
```


### ArrayList


`java.util.ArrayList`는 인터페이스의 구현체로 내부적으로 배열을 사용해 데이터를 저장


데이터 저장, 삭제, 검색 등에 대한 구체적인 동작 방식이 구현되어 있음


내부적으로 배열을 사용하므로 인덱스를 통한 빠른 접근 속도를 가짐


배열의 크기를 동적으로 조정하여 데이터 추가를 처리


동기화되지 않으므로 멀티 스레드 환경에서 안전하지 않음 동기화가 필요한 경우 `Collections.synchronizedList`를 사용해야 함


```java
ArrayList<String> arrayList = new ArrayList<>();
arrayList.add("A");
arrayList.add("B");

// ArrayList만의 메서드 사용 가능 (List에는 없음)
arrayList.ensureCapacity(50); // 용량을 미리 확장
```


### ??? 결국 둘 다 배열인거 아니냐 ???


`ArrayList`는 내부적으로 배열을 사용해서 데이터를 저장하지만 `List`는 배열이 아님


`List`는 단순히 데이터를 관리하기 위한 규칙(인터페이스)을 정의하는 것이고 **어떻게** 데이터를 저장할지에 대한 구체적인 구현은 없음


    **List는 설계도** : 데이터를 저장하고 꺼내는 방법을 제공하지만 어떻게 저장하고 어떻게 꺼낼지는 구현체가 알아서 해야 함 (기본 조건만 정의)


    **ArrayList 는 구현체** : 그럼 나는 배열을 사용해서 데이터를 저장하고 꺼낼게 (구체적인 동작을 구현)


### 결론


`List`는 더 유연하고 더 넓은 범위, `ArrayList`는 이름만 비슷할 뿐 `List`의 구현체 중 하나(배열 기반)


> 💡 **비유로 이해하기**  
> **List** : 스마트폰에서는 전화, 메세지, 인터넷 기능이 동작해야 한다 (기능 정의)  
>   
> **ArrayList** : 안드로이드에서는 전화, 메세지, 인터넷 기능을 이렇게 구현했다  
>   
> **LinkedList** : 아이폰에서는 전화, 메세지, 인터넷 기능을 이렇게 구현했다


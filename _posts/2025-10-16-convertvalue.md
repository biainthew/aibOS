---
layout: post
title: "convertValue"
date: 2025-02-11
categories: [general]
tags: [Java]
excerpt_separator: ""
---



### `objectMapper.convertValue(T fromValue, Class<D> toValueType)`

- fromValue : 변환하려는 원본 객체
- toValueType :  변환하려는 대상 타입(예. `Map.class`, `List.class`, 특정 DTO 클래스 등)
- 입력된 객체를 지정된 타입으로 변환하여 반환

```java
public class Example {
	public static void main(String[] args) throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		
		// JSON 문자열
		String json = "{\"name\":\"Alice\", \"age\":30}";
		
		// JSON -> Java 객체 (Map)
		Map<String, Object> resultMap = objectMapper.readValue(json, Map.class);
		System.out.println(resultMap); // 출력 : {name=Alice, age=30}
		
		// JSON -> 특정 DTO 객체로 변환
		Person person = objectMapper.convertValue(resultMap, Person.class);
		System.out.println(person.getName()); // 출력 : Alice
	}
}

class Person {
	private String name;
	private int age;
	
	// Getter, Setter
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
}
```

- `convertValue()` 는 `Map<String, Object>` 와 같은 변환된 객체를 `Person` 클래스와 같은 DTO로 변환할 수 있음
- `objectMapper.readValue()` 는 문자열 JSON을 바로 Java 객체로 변환하는 반면,
`convertValue()` 는 이미 존재하는 객체를 다른 타입의 객체로 변환하는 데 사용됨

### 용도

- **DTO 변환** : 서버에서 받은 데이터를 특정 DTO 객체로 변환하거나 다른 형식의 객체로 변환할 때 사용
- **동적 타입 변환** : 런타임에 객체 타입이 동적으로 결정되는 경우에도 convertValue() 를 활용하여 변환할 수 있음

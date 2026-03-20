---
layout: post
title: "CodeSignal 코딩테스트 준비(LeetCode)"
date: 2026-03-20
categories: [general]
tags: [Java]
excerpt_separator: ""
---



LeetCode Easy~Medium 문제를 유형별로 학습한 내용 정리


## 유형별 사용 조건


| 유형                | 사용 조건            | 사용 불가 조건                     |
| ----------------- | ---------------- | ---------------------------- |
| Sliding Window    | 양수 배열, 문자열       | 음수 포함 배열                     |
| Two Pointer (양 끝) | 정렬된 배열           | 정렬 안 된 배열 + 인덱스 반환 필요        |
| HashMap           | 순서 상관없이 값 탐색     | 구간 합 + 음수 포함 → Prefix Sum 사용 |
| 정렬 후 Two Pointer  | 인덱스 반환 불필요       | 인덱스 반환 필요                    |
| Stack             | 이전 값과 비교가 필요한 문제 | 단순 정렬, 탐색                    |
| Prefix Sum        | 음수 포함 구간 합       | 양수만 있으면 Sliding Window가 더 단순 |


---


## 유형 판단 순서


{% raw %}
```plain text
1. 연속된 구간(subarray/substring)을 찾는 문제인가?
   → Yes + 양수만 있음 → Sliding Window
   → Yes + 음수 포함 가능 → Prefix Sum + HashMap

2. 두 값 또는 세 값의 합 조건인가?
   → Yes + 정렬된 배열 → Two Pointer
   → Yes + 정렬 안 됨 + 인덱스 반환 필요 → HashMap
   → Yes + 정렬 안 됨 + 인덱스 불필요 → 정렬 후 Two Pointer

3. 이전 값과 비교가 필요한가?
   → Yes → Stack

4. 순서 상관없이 값 탐색인가?
   → Yes → HashMap
```
{% endraw %}


### Two Pointer vs Sliding Window 구별


|       | Two Pointer       | Sliding Window                |
| ----- | ----------------- | ----------------------------- |
| 시작 위치 | left=0, right=끝   | left=0, right=0               |
| 이동 방향 | 양 끝에서 가운데로        | right가 오른쪽으로 확장               |
| 목적    | 두 값의 합/차 조건 탐색    | 연속된 구간 조건 탐색                  |
| 키워드   | sum, pair, target | subarray, substring, 최장/최단 구간 |


---


## Java 풀이 템플릿


### HashMap 빈도 카운팅


{% raw %}
```java
Map<Character, Integer> map = new HashMap<>();
for (char c : s.toCharArray()) {
    map.put(c, map.getOrDefault(c, 0) + 1);
}
```
{% endraw %}


### Two Pointer (정렬된 배열)


{% raw %}
```java
int left = 0, right = nums.length - 1;
while (left < right) {
    int sum = nums[left] + nums[right];
    if (sum == target) { /* 정답 처리 */ break; }
    else if (sum < target) left++;
    else right--;
}
```
{% endraw %}

- 바깥 for문 있는 경우 (3Sum 등) `left = i + 1` 로 시작

### Sliding Window (고정 크기)


{% raw %}
```java
int windowSum = 0;
for (int i = 0; i < k; i++) windowSum += nums[i];
int maxSum = windowSum;
for (int i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
}
```
{% endraw %}


### Sliding Window (가변 크기)


{% raw %}
```java
Map<Character, Integer> map = new HashMap<>();
int left = 0, maxLen = 0;
for (int right = 0; right < s.length(); right++) {
    char c = s.charAt(right);
    map.put(c, map.getOrDefault(c, 0) + 1);
    while (map.get(c) > 1) {
        char l = s.charAt(left++);
        map.put(l, map.get(l) - 1);
    }
    maxLen = Math.max(maxLen, right - left + 1);
}
```
{% endraw %}

- `right`는 for문이 자동으로 증가
- `left`는 while 안에서 조건에 따라 수동으로 증가

### Stack (괄호 유효성)


{% raw %}
```java
Deque<Character> stack = new ArrayDeque<>();
for (char c : s.toCharArray()) {
    if (c == '(') stack.push(c);
    else {
        if (stack.isEmpty()) return false;
        stack.pop();
    }
}
return stack.isEmpty();
```
{% endraw %}


### Prefix Sum + HashMap


{% raw %}
```java
Map<Integer, Integer> map = new HashMap<>();
map.put(0, 1); // 초기값 필수
int sum = 0, count = 0;
for (int num : nums) {
    sum += num;
    if (map.containsKey(sum - k)) count += map.get(sum - k);
    map.put(sum, map.getOrDefault(sum, 0) + 1);
}
```
{% endraw %}

- `map.put(0, 1)` 초기값을 넣는 이유: `prefixSum` 자체가 k인 경우를 잡기 위해
- map의 key는 prefixSum 값, value는 해당 값이 나온 횟수

### 자릿수 합 (digit sum)


{% raw %}
```java
while (num > 0) {
    sum += num % 10;
    num /= 10;
}
```
{% endraw %}


---


## 시간복잡도 기준


| 구조                      | 시간복잡도      |
| ----------------------- | ---------- |
| 단순 연산 (peek, push, pop) | O(1)       |
| for/while 한 번 순회        | O(n)       |
| 정렬 (Arrays.sort)        | O(n log n) |
| 이중 for문                 | O(n²)      |

- 코드에서 반복문이 몇 번 도는지 세면 시간복잡도를 판단할 수 있음
- O(n²) 나오면 타임리밋 걸릴 가능성 높음 → HashMap, Two Pointer, Sliding Window로 개선

---


## 자주 헷갈리는 영어 용어


| 용어             | 의미                          |
| -------------- | --------------------------- |
| subarray       | 연속된 부분 배열                   |
| subsequence    | 연속 안 해도 되는 부분 수열            |
| substring      | 연속된 부분 문자열                  |
| subset         | 순서 상관없는 부분 집합               |
| in-place       | 원본 배열 직접 수정                 |
| contiguous     | 연속된                         |
| non-decreasing | 같은 값 허용하는 오름차순 (1,1,2,3 가능) |


---


## 실수 모음


**음수 포함 배열에 Sliding Window 적용**

- 음수가 있으면 left를 줄여도 sum이 예측 불가능하게 움직여서 while 제어가 안 됨
- 음수 포함 구간 합 문제는 무조건 Prefix Sum + HashMap

**3Sum에서 left = 1로 고정**

- `left`는 항상 `i + 1`에서 시작해야 함
- `left = 1`로 고정하면 i가 커질수록 left가 i보다 작아져서 중복이 발생함

**subarray**

- subarray는 연속된 구간, subsequence가 비연속
- 문제에서 subarray 보이면 무조건 연속 구간으로 처리

**getOrDefault 인자 오류**


{% raw %}
```java
// 틀림
map.put(num, map.getOrDefault(map.get(num), 0) + 1);

// 정답
map.put(num, map.getOrDefault(num, 0) + 1);
```
{% endraw %}

- `getOrDefault`의 첫 번째 인자는 key여야 함
- `map.get(num)`을 넣으면 value를 key로 찾는 오류 발생

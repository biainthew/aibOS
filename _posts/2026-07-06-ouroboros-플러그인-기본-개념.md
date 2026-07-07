---
layout: post
title: "Ouroboros 플러그인 기본 개념"
date: 2026-07-06
categories: [general]
tags: [AI]
excerpt_separator: ""
---



### 개요

- "Stop prompting. Start specifying." 철학의 Agent OS로 모호한 아이디어를 검증된 코드베이스로 변환하는 것이 목표
- 인터뷰로 요구사항의 모호함을 수치화해 걷어낸 뒤 불변 스펙(seed)을 생성하고 스펙 기준으로 실행/검증/진화 루프를 수행
- [github.com/Q00/ouroboros](https://github.com/Q00/ouroboros)
- Claude Code 외에 Codex CLI, GitHub Copilot CLI, OpenCode, Gemini CLI 등 멀티 런타임 지원

### 설치


사전 요구사항

- Python 3.12 이상 필수 (플러그인 방식 설치에도 동일하게 적용)

방법 1. Claude Code 플러그인 마켓플레이스 (권장)

1. 터미널(Claude Code 밖)에서 실행

{% raw %}
```bash
claude plugin marketplace add Q00/ouroboros
claude plugin install ouroboros@ouroboros
```
{% endraw %}

1. 설치 후 Claude Code 세션을 새로 열고 채팅에 `ooo setup` 입력
2. `ooo setup` 실행 시 런타임 등록, 프로젝트 구성, MCP 서버 자동 등록까지 진행

방법 2. pip 설치


{% raw %}
```bash
pip install ouroboros-ai[claude]
ouroboros setup
```
{% endraw %}


제거


{% raw %}
```bash
ouroboros uninstall
```
{% endraw %}


### 사용 흐름


전체 구조


{% raw %}
```plaintext
Interview → Seed → Execute → Evaluate
    ↑                          ↓
    +-------- Evolve ----------+
```
{% endraw %}


커맨드는 슬래시 커맨드가 아니라 채팅에 `ooo <명령>` 형태로 입력


1단계. Interview

- `ooo interview "만들고 싶은 것 설명"` 으로 시작
- 소크라테스식 질문으로 숨은 가정을 표면화
- 답변을 바탕으로 모호성 점수를 자동 계산하며 0.2 이하가 되어야 다음 단계 진행
- 모호성 가중치: 목표 명확성 40%, 제약 명확성 30%, 성공 기준 30%

> 💡 **소크라테스식 질문이란 ?**  
> "작업 CLI를 만들어줘" 라는 요청에 대해 "작업이란 무엇인가", "우선순위란 무엇인가" 같은 존재론적 질문을 던져 모호함을 제거하는 대화법


2단계. Seed

- `ooo seed` 로 인터뷰 답변을 불변 스펙(`seed.yaml`)으로 결정화
- 수락 기준, 제약사항, 온톨로지 정의 포함

> 💡 **온톨로지 정의 란 ?**  
> 코드를 작성하기 전에 이것이 진짜 무엇인지 개념을 명확히 규정하는 단계


3단계. Execute

- `ooo run` 으로 더블 다이아몬드 분해를 거쳐 자동 실행
- 수락 기준을 계층적으로 분해해 작업 수행

> 💡 **더블 다이아몬드 구조**  
> ![image.png](/aibOS/public/images/posts/3950a7f9-ef3291dd3145.png)  
>   
> 1. **Wonder(발산)**: 소크라테스식 질문으로 다양한 가능성을 탐색  
>   
> 2. **Ontology(수렴)**: 그 질문들의 답을 모아 명확한 정의로 확정  
>   
> 3. **Design(발산)**: 확정된 정의를 바탕으로 설계 옵션을 탐색  
>   
> 4. **Evaluation(수렴)**: 검증을 거쳐 최종 산출물로 확정


4단계. Evaluate

- `ooo evaluate` 로 3단계 검증 게이트 통과 여부 확인
- 기계적 검증 → 시맨틱 검증 → 다중 모델 합의 검증 순서로 진행

진화 루프 (선택)

- `ooo evolve` 로 온톨로지가 수렴할 때까지 실행-평가 루프 반복
- 종료 조건: 온톨로지 유사도 0.95 이상 또는 최대 30세대 도달

> 💡 **세대**  
> 진화 루프 1회전 (스펙 진화 → 재실행 → 평가 사이클 한 번)  
>   
> **스펙 진화**  
>   
> 실행해보고 매 세대마다 실패 여부와 관계 없이 새 seed 를 생성 (seed 는 불변이기 때문)  
>   
> **온톨로지가 수렴한다**  
>   
> 진화 루프를 한 세대 더 돌려도 스펙이 진화되지 않는다.  
>   
> **온톨로지 유사도 0.95 이상**  
>   
> 연속한 두 세대의 스펙의 유사도가 0.95 이상


### 커맨드 정리


| 커맨드                  | 용도                                                                     |
| -------------------- | ---------------------------------------------------------------------- |
| `ooo setup`          | 런타임 등록과 프로젝트 설정                                                        |
| `ooo interview`      | 소크라테스식 질문으로 숨은 가정 노출, 모호성 점수 계산                                        |
| `ooo seed`           | 인터뷰 답변을 불변 스펙(`seed.yaml`)으로 결정화                                       |
| `ooo run`            | 더블 다이아몬드 분해로 스펙 실행                                                     |
| `ooo evaluate`       | 3단계 검증 게이트 실행                                                          |
| `ooo auto`           | 인터뷰부터 실행까지 한 번에 자동 진행                                                  |
| `ooo evolve`         | 온톨로지 수렴(유사도 0.95 이상)까지 진화 루프 반복                                        |
| `ooo ralph`          | 검증 통과까지 세션 경계를 넘는 영구 루프, EventStore 기록으로 재시작 후에도 재개                    |
| `ooo unstuck`        | 막힐 때 Hacker/Simplifier/Researcher/Architect/Contrarian 5가지 관점으로 돌파구 탐색 |
| `ooo status`         | 세션 추적과 실행 상태 확인                                                        |
| `ooo resume-session` | 중단된 세션 재개                                                              |
| `ooo pm`             | PM 관점 인터뷰 후 PRD 생성                                                     |


### 참고 사항


superpowers와 함께 쓸 때

- `ooo interview` + `ooo seed` 가 superpowers의 brainstorming + writing-plans 역할과 겹침
- 두 플러그인을 동시에 켜두면 스킬 트리거가 경쟁할 수 있어 Ouroboros 워크플로우는 `ooo` 커맨드로 명시적으로 시작

적합한 작업

- 요구사항이 모호한 신규 기능 착수 시점에 `ooo interview` 로 시작하면 효과가 클 것으로 보임
- 한 줄짜리 버그 수정 같은 소규모 작업에는 과함

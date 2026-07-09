---
layout: post
title: "Superpowers, Ouroboros, oh my claudecode 비교"
date: 2026-07-08
categories: [general]
tags: [AI]
excerpt_separator: ""
---



### 세 플러그인 비교


| 항목       | Superpowers      | Ouroboros             | oh-my-claudecode    |
| -------- | ---------------- | --------------------- | ------------------- |
| 핵심 개념    | AI 가 제대로 일하게 하기  | AI 가 자율적으로 일하게 하기     | 둘 다 선택으로 가능         |
| 핵심 단위    | skill (md 파일 기반) | scan → register → run | 서브에이전트 + 모드 + MCP 툴 |
| 자율성      | 낮음               | 높음                    | 둘 다                 |
| 강제하는 것   | 스킬 필수            | scan 해야 run 가능        | 없음                  |
| 설치/유지 무게 | 가벼움              | 무거움                   | 무거움                 |


### 각 플러그인의 특징


**Superpowers**


무엇을 만들지 보다는 어떻게 만들지를 규율하는 도구로 자율성이 낮고 사람이 계속 개입하도록 유도함

- `using-superpowers` 스킬이 행동 전 스킬 체크를 강제
- 브레인스토밍 → 계획 작성 → TDD → 검증 → 코드리뷰 흐름을 순서대로 진행
- 중간중간 사람 리뷰 단계가 존재

**Ouroboros**


매 단계 사람이 개입하지 않고 돌려두고 나중에 결과만 검수하는 방식으로 자율성이 셋 중 가장 높음

- scan으로 코드베이스를 읽음
- register로 대상을 지정
- run으로 멀티에이전트가 worktree 안에서 자율적으로 돌며 결과물을 생성

**oh-my-claudecode**


모드를 선택 가능해서 선택 폭이 가장 넓고 특정 단계만 사용도 가능하여 강제성이 가장 낮으며 개발 업무 뿐만 아니라 권한 설정 등 claude code 관련 전반적인 기능들에 관한 서브에이전트들이 다양하게 존재함

- 역할별 서브에이전트 여러개 (analyst, architect, planner, executor, code-reviewer, debugger, tracer, security-reviewer, verifier 등)
- 오케스트레이션 모드 (autopilot 완전 자율, ralph 완료까지 자기참조 루프, team/ultrawork 병렬 다중 에이전트, ultraqa 테스트 반복)
- 영속 메모리 MCP (notepad, wiki, project memory, shared memory, session_search 등 세션을 넘어서 쌓이는 메모리 + LSP 통합 goto_definition/find_references/rename + ast-grep + python_repl)
- HUD 상태줄

### 병렬 실행 방식 비교


Superpowers subagent-driven 와 OMC team 둘 다 세션 내에서 subagent 를 사용할 수 있는데 사용하는 목적에 차이가 있음

- 공통점: subagent 로 각 태스크와 메인 Claude 세션을 격리해서 컨텍스트를 깨끗하게 유지
- 차이점:

|            | Superpowers            | OMC                    |
| ---------- | ---------------------- | ---------------------- |
| 실행에 필요한 것  | plan 문서 (md 파일)        | 작업 목록                  |
| 주목적        | 메인 세션 컨텍스트 격리 + 정확한 리뷰 | 빠르게 병렬로 처리             |
| 메인 에이전트 역할 | 리뷰/태스크마다 검토 후 다음 실행    | 병렬 진행 조율               |
| 실행 형태      | 태스크 → 리뷰 → 다음 (순차)     | N개 에이전트가 목록 동시 처리 (병렬) |
| 중간 검사      | O (산출물 리뷰, TDD 내장)     | X (속도 우선)              |


따라서 정확성이 중요한 구현은 Superpowers 로 독립적인 작업을 빨리 처리할 때는 OMC를 사용하면 좋을 것 같음


### 결론


일반적으로는 프로세스는 Superpowers, 도구는 OMC로 역할을 분리해서 사용하게 될 것 같음


| 용도                | 선택                        | 이유                                |
| ----------------- | ------------------------- | --------------------------------- |
| 계획/TDD/검증/리뷰 흐름   | Superpowers               | 강제력 있는 규율                         |
| 코드 탐색/리팩터링        | OMC LSP + ast-grep        | Superpowers에 없는 언어 서버 기반 정밀 도구    |
| 세션 넘는 메모리         | OMC wiki / project memory | 반복 설명 비용 절감                       |
| 돌려놓고 결과만 받는 자율 작업 | OMC ralph / autopilot     | Ouroboros 대체, scan 롤백 문제 없이 더 가벼움 |
| 그 외 역할별 업무        | OMC 서브에이전트                | 메인 컨텍스트 보호하며 특화 작업 수행             |


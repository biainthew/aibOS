---
layout: post
title: "Superpowers 플러그인"
date: 2026-07-06
categories: [general]
tags: [AI]
excerpt_separator: ""
---



### 개요

- 설계 → 계획 → 실행 → 검증의 개발 프로세스를 스킬 단위로 강제하는 Claude Code 플러그인
- 스킬이 상황에 따라 자동 트리거되므로 별도 명령 없이 대화만으로 워크플로우 적용
- 코드 작성 전 스펙 승인, TDD 사이클, 완료 전 검증을 의무화해 재작업을 줄이는 것이 목표
- [github.com/obra/superpowers](https://github.com/obra/superpowers)
- Claude Code 외에 Cursor, Codex CLI, GitHub Copilot CLI 등 10개 이상 플랫폼 지원

### 설치


방법 1. 공식 마켓플레이스


Claude Code 세션 안에서 실행


{% raw %}
```plaintext
/plugin install superpowers@claude-plugins-official
```
{% endraw %}


방법 2. Superpowers 마켓플레이스


{% raw %}
```plaintext
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```
{% endraw %}


### 스킬 정리


설계 / 계획


| 스킬              | 용도                                                |
| --------------- | ------------------------------------------------- |
| `brainstorming` | 코딩 전 소크라테스식 질문으로 요구사항과 설계 정제, 섹션별 설계 제시 후 승인 대기   |
| `writing-plans` | 스펙을 2~5분 단위 작업으로 분할, 파일 경로/코드/검증 단계를 포함한 구현 계획 작성 |


실행


| 스킬                            | 용도                                         |
| ----------------------------- | ------------------------------------------ |
| `executing-plans`             | 작성된 계획을 체크포인트 단위로 배치 실행                    |
| `subagent-driven-development` | 작업마다 독립 서브에이전트 파견, 스펙 준수 → 코드 품질 2단계 검토    |
| `dispatching-parallel-agents` | 의존성 없는 2개 이상 작업을 병렬 에이전트로 동시 처리            |
| `test-driven-development`     | RED-GREEN-REFACTOR 사이클 강제, 테스트 전 작성 코드는 삭제 |


검증 / 디버깅


| 스킬                               | 용도                               |
| -------------------------------- | -------------------------------- |
| `systematic-debugging`           | 버그/테스트 실패 시 수정 제안 전 4단계 근본 원인 추적 |
| `verification-before-completion` | 완료 주장 전 검증 명령 실행과 출력 확인 의무화      |
| `requesting-code-review`         | 작업 완료/병합 전 계획 부합성 검토, 심각도별 이슈 보고 |
| `receiving-code-review`          | 리뷰 피드백 수신 시 맹목적 수용 대신 기술 검증 후 반영 |


브랜치 / 환경


| 스킬                               | 용도                                 |
| -------------------------------- | ---------------------------------- |
| `using-git-worktrees`            | 격리된 작업공간 생성, 테스트 기준선 검증            |
| `finishing-a-development-branch` | 구현 완료 후 병합/PR/유지/폐기 옵션 제시, 워크트리 정리 |


메타


| 스킬                  | 용도                          |
| ------------------- | --------------------------- |
| `using-superpowers` | 세션 시작 시 스킬 탐색/호출 규칙 확립      |
| `writing-skills`    | 신규 스킬 작성, 기존 스킬 수정과 배포 전 검증 |


### 핵심 워크플로우


{% raw %}
```plaintext
brainstorming → (git worktree) → writing-plans
      → executing-plans / subagent-driven-development (+ TDD)
      → requesting-code-review → finishing-a-development-branch
```
{% endraw %}


1단계. Brainstorming

- 기능 추가/동작 변경 요청 시 코딩 전에 자동 활성화
- 질문으로 의도와 요구사항을 정제하고 대안 탐색 후 설계안 승인 대기

2단계. Writing Plans

- 승인된 설계를 스펙 문서로 확정하고 세분화된 구현 계획 작성
- 계획에 정확한 파일 경로, 코드, 검증 단계 포함

3단계. 실행

- 계획을 체크포인트 단위로 실행 (`executing-plans`)하거나 작업별 서브에이전트 파견 (`subagent-driven-development`)
- 구현은 TDD 사이클 (실패 테스트 작성 → 실패 확인 → 최소 구현 → 통과 확인) 준수

4단계. 검증과 마무리

- 완료 주장 전 검증 명령 실행 (`verification-before-completion`)
- 코드 리뷰 (`requesting-code-review`) 후 병합/PR 결정 (`finishing-a-development-branch`)

### 실제 프로젝트에서 사용한 방식


문서 체계

- 산출물은 `docs/superpowers/` 아래 3개 디렉토리로 관리
- `specs/`: brainstorming 결과를 확정한 스펙 문서
- `plans/`: writing-plans 로 작성한 구현 계획
- `notes/`: 진행 중 조사/판단 기록

운영 규칙

- 신규 plan/spec 추가 시 `CLAUDE.md` 진행 현황 절 갱신, 완료 상세는 `history.md` 로 이관
- 파일명은 `YYYY-MM-DD-{주제}` 형식 (예: `2026-06-08-report-list-ui`)
- sub-project 단위 (P2~P7, AI-1~3, Phase E 등)로 spec → plan → 실행 → history 기록 사이클 반복

---
layout: post
title: "Docker Volume 및 DB 컨테이너 관리"
date: 2026-04-02
categories: [general]
tags: [Infra]
excerpt_separator: ""
---



## 1. 공식 DB 이미지 활용 (PostgreSQL)


데이터베이스는 직접 Dockerfile을 작성할 수도 있으나 특별한 설정이 없다면 도커 허브의 **공식 이미지**를 사용하는 것이 효율적


### 컨테이너 실행 및 환경 변수 설정


DB는 실행 시 접속 정보(ID/PW)를 환경 변수로 주입해야 함


{% raw %}
```java
docker run -d \
  --name db-container \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=qwer1234 \
  -p 5432:5432 \
  postgres:17-alpine
```
{% endraw %}

- **e:** `POSTGRES_USER`, `POSTGRES_PASSWORD` 등 필수 환경 변수 설정
- **p:** 외부 접속이 필요할 경우 포트 바인딩 수행 (기본 5432)

## 2. DB 접속 및 조작 (psql)


터미널이나 GUI 툴(DBeaver 등)을 통해 DB에 접속할 수 있음


### 터미널 접속 순서

1. **컨테이너 내부 진입:** `docker exec -it db-container /bin/sh`
2. **psql 실행:** `psql -U admin -W` (비밀번호 입력 필요)

### 주요 psql 명령어

- `\l`: 데이터베이스 리스트 조회
- `\c 데이터베이스명`: 특정 DB 접속
- `\d`: 테이블 목록 조회
- **SQL 쿼리:** `CREATE TABLE`, `INSERT`, `SELECT` 등 표준 SQL 사용 가능

## 3. Docker Volume을 통한 데이터 영구 보존


컨테이너는 삭제 시 내부 데이터가 모두 초기화되는 휘발성 특징을 가짐 데이터를 영구적으로 보관하려면 **Volume** 장착이 필수


### 볼륨 기본 명령어


| **명령어**                        | **역할**      |
| ------------------------------ | ----------- |
| **docker volume create [이름]**  | 볼륨 생성       |
| **docker volume ls**           | 볼륨 목록 확인    |
| **docker volume inspect [이름]** | 볼륨 상세 정보 조회 |
| **docker volume rm [이름]**      | 볼륨 삭제       |


### 볼륨 장착 실행 (Mount)


{% raw %}
```java
docker run -d \
  -v 볼륨이름:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=qwer1234 \
  postgres:17-alpine
```
{% endraw %}

- **작동 원리:** 컨테이너의 특정 폴더를 호스트(도커 관리 영역)의 볼륨 폴더와 동기화
- **경로 주의:** DBMS마다 데이터 저장 경로가 다름 (Postgres: `/var/lib/postgresql/data`, MySQL: `/var/lib/mysql`)

## 4. Bind Mount


도커가 관리하는 볼륨이 아닌 사용자가 지정한 **로컬 컴퓨터의 특정 폴더**를 직접 연결하는 방식


내가 이 데이터를 주기적으로 백업해야 하는 경우에는 이 방식이 더 편리할 수 있음


{% raw %}
```java
docker run -v /내/컴퓨터/경로:/컨테이너/경로 이미지명
```
{% endraw %}

- **장점:** 호스트에서 데이터를 직접 확인하고 관리하기 편하고 백업 및 공유가 직관적
- **단점:** 호스트의 파일 시스템 구조에 의존적

---


## 5. 데이터 백업 전략

- **직동 백업:** Bind Mount 폴더를 직접 복사하거나 압축
- **자동 백업:** 볼륨 데이터를 주기적으로 압축하여 클라우드(AWS S3 등)에 업로드하는 전용 백업 이미지를 별도로 실행 (예: `offen/docker-volume-backup`)

---


## 결론

- DB 데이터는 반드시 Volume이나 Bind Mount를 사용하여 컨테이너 외부에 저장
- 복잡한 설정 없이 환경 변수(`e`)만으로 공식 이미지를 활용해서 즉시 DB 구축 가능
- 개발/테스트 환경에서는 컨테이너 DB가 유용하나 운영 환경에서는 안정성을 위해 관리형 DB 서비스(RDS 등)를 사용하는 것이 일반적

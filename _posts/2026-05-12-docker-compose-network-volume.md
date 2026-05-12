---
layout: post
title: "Docker compose network, volume"
date: 2026-05-12
categories: [general]
tags: [Infra]
excerpt_separator: ""
---



### Network

- 안전을 위해서 컨테이너별로 네트워크를 분리해서 관리하는 것이 좋음
- Nginx-Web 간, Web-DB 간 네트워크를 별도 지정해서 Nginx가 DB에 직접 접근하는 것을 차단
- 하나의 컨테이너는 여러 개 네트워크에 속할 수 있음

{% raw %}
```yaml
services:
  webserver:
    image: nodeserver:1
    ports:
      - 8080:8080
    networks:
      - mynet1
      - mynet2

  nginx:
    image: nginx:1
    ports:
      - 80:80
    networks:
      - mynet1

  db:
    image: postgres:17-alpine
    environment:
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=qwer1234
    networks:
      - mynet2

networks:
  mynet1:
  mynet2:
```
{% endraw %}


: networks 라는 최상위 항목을 만들고 그 안에 네트워크 이름을 넣으면 그 이름으로 네트워크가 생성됨


### Volumes


{% raw %}
```yaml
services:
 
  db:
    image: postgres:17-alpine
    environment:
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=qwer1234
    # docker compose 시 직접 볼륨을 새로 만들어줌
    volumes:
      - 볼륨이름:/var/lib/postgresql/data
      # 로컬 폴더를 매핑 (Bind Mount)하고 싶은 경우
      # - 로컬폴더경로:/var/lib/postgresql/data

# 기존 볼륨 사용하고 싶을 경우
volumes:
  볼륨이름:
    external: true
```
{% endraw %}

- 로컬 폴더를 매핑 (Bind Mount)하고 싶다면

### 자동 재시작 정책

- **always**: 수동으로 정지하기 전까지 무조건 재시작함 (Docker 재시작 시에도 자동 실행)
- **unless-stopped**: 사용자가 직접 중지한 경우가 아니라면 항상 재시작함
- 컨테이너 접속 후 `kill 1` 명령으로 프로세스 강제 종료 시 재시작 여부 확인 가능

{% raw %}
```yaml
services:
  nginx:
    image: nginx:1
    restart: always # 무조건 재시작
```
{% endraw %}


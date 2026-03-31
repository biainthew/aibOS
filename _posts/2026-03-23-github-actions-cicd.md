---
layout: post
title: "GitHub Actions CI/CD"
date: 2026-03-23
categories: [general]
tags: [Infra]
excerpt_separator: ""
---



main 브랜치에 push 시 자동으로 빌드하고 EC2에 배포하는 CI/CD 파이프라인을 GitHub Actions로 구성함


## 전체 흐름


{% raw %}
```html
main 브랜치 push
→ GitHub Actions 트리거
→ Gradle 빌드 (-x test)
→ EC2에 jar 파일 전송 (SCP)
→ EC2에서 애플리케이션 실행
```
{% endraw %}


## 워크플로우 코드


{% raw %}
```yaml
name: Deploy to EC2

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: 코드 체크아웃
        uses: actions/checkout@v3

      - name: Java 17 설정
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Gradle 실행 권한 부여
        run: chmod +x gradlew

      - name: Gradle 빌드
        run: ./gradlew clean build -x test
        env:
          DB_URL: ${{ secrets.DB_URL }}
          DB_USERNAME: ${{ secrets.DB_USERNAME }}
          DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
          JWT_SECRET: ${{ secrets.JWT_SECRET }}

      - name: EC2에 jar 파일 전송
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USERNAME }}
          key: ${{ secrets.EC2_KEY }}
          source: build/libs/*.jar
          target: /home/ubuntu/app

      - name: EC2에서 애플리케이션 실행
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USERNAME }}
          key: ${{ secrets.EC2_KEY }}
          script: |
            sudo fuser -k 8080/tcp || true
            cd /home/ubuntu/app/build/libs
            nohup java -jar -Dspring.profiles.active=prod \
              -DDB_URL="${{ secrets.DB_URL }}" \
              -DDB_USERNAME="${{ secrets.DB_USERNAME }}" \
              -DDB_PASSWORD="${{ secrets.DB_PASSWORD }}" \
              -DJWT_SECRET="${{ secrets.JWT_SECRET }}" \
              $(ls *.jar | grep -v plain) > /home/ubuntu/app/app.log 2>&1 &
```
{% endraw %}


## 트러블슈팅


**gradlew 실행 권한 없음**


{% raw %}
```bash
/usr/bin/bash -e {0}: line 1: ./gradlew: Permission denied
Error: Process completed with exit code 126
```
{% endraw %}


Windows에서 개발하면 gradlew 파일에 실행 권한이 없는 상태로 git에 올라가는 경우가 있어서 빌드 전에 `chmod +x gradlew` 로 권한을 부여하는 단계를 추가하여 해결


**plain.jar 실행 문제**


{% raw %}
```bash
no main manifest attribute, in noticeboard-0.0.1-SNAPSHOT-plain.jar
```
{% endraw %}


Gradle 빌드 시 실행 가능한 jar와 plain jar 두 개가 생성됨


`*.jar` 로 실행하면 plain.jar가 먼저 실행되는 경우가 있어서 `$(ls *.jar | grep -v plain)` 으로 plain이 붙지 않은 jar만 실행하도록 수정함


## 참고

- `x test` 옵션으로 테스트를 건너뛰고 빌드함 테스트는 로컬에서 실행하는 것으로 분리
- `sudo fuser -k 8080/tcp || true` 는 기존에 실행 중인 애플리케이션을 종료하는 명령어이고 `|| true` 는 실행 중인 프로세스가 없어도 에러가 나지 않도록 하기 위함임
- `nohup` 과 `&` 로 백그라운드에서 실행해서 SSH 연결이 끊겨도 애플리케이션이 계속 실행됨

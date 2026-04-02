---
layout: post
title: "Docker Build 성능 향상시키기"
date: 2026-04-01
categories: [general]
tags: [Infra]
excerpt_separator: ""
---



### Docker Build 성능 향상 방법


1. 레이어 캐싱(Layer Caching) 활용


도커는 Dockerfile의 각 명령어를 레이어 단위로 캐싱하는데 명령어의 순서를 잘 배치하면 빌드 시간을 단축할 수 있음

- 변동 사항이 많은 명령어일수록 아래쪽에 배치
- 위쪽에서 변경이 발생하면 그 아래의 모든 레이어는 캐시가 깨져서 새로 빌드해야 하기 때문

2. 의존성 설치 최적화 (`npm ci`)


Node.js 환경에서는 `npm install` 대신 `npm ci` 사용을 권장

- **npm install:** `package.json`을 바탕으로 최신 버전을 계산하여 설치하므로 빌드마다 결과가 달라질 수 있음
- **npm ci:** `package-lock.json`에 명시된 버전을 기준으로 정확하게 설치하여 속도가 더 빠르고 환경 간의 일관성이 보장

### 런타임 성능 및 보안 설정


1. 환경 변수 설정


{% raw %}
```yaml
ENV NODE_ENV=production
```
{% endraw %}

- 프로덕션 모드로 설정하면 라이브러리들이 최적화된 상태로 동작하여 성능이 향상

2. 보안을 위한 사용자 권한 제한


기본적으로 도커의 모든 명령어는 `root` 권한으로 실행되는데 보안 사고를 방지하기 위해 앱을 실행할 때는 권한이 낮은 일반 유저로 변경


{% raw %}
```yaml
# Node.js 이미지에는 기본적으로 'node' 유저가 포함되어 있음
USER node
CMD ["node", "server.js"]
```
{% endraw %}


### Multi-stage Build (빌드 최적화)


컴파일 과정이 필요한 언어(Java, Next.js 등)는 실제 실행에 필요한 파일보다 빌드 도구의 크기가 훨씬 크기 때문에 빌드 단계와 실행 단계를 나눔


### Spring Boot 사례


| **단계** | **기존 방식 (Single Stage)**  | **최적화 방식 (Multi-stage)** |
| ------ | ------------------------- | ------------------------ |
| **특징** | 소스코드, Gradle, JDK가 모두 포함됨 | 최종 실행 파일(.jar)만 포함됨      |
| **결과** | 이미지 용량이 매우 큼              | 이미지 용량이 매우 작고 보안성이 높음    |


**최적화된 Dockerfile 예시:**


{% raw %}
```yaml
# Build stage: 빌드만 수행
FROM amazoncorretto:21.0.4 AS build
WORKDIR /app
COPY . .
RUN ./gradlew build

# Runtime stage: 결과물만 복사해서 실행
FROM amazoncorretto:21.0.4 AS runtime
WORKDIR /app
# build 단계에서 생성된 jar 파일만 가져옴
COPY --from=build /app/build/libs/*.jar /app/server.jar
CMD ["java", "-jar", "/app/server.jar"]
```
{% endraw %}


### 프레임워크별 전용 빌드 방식


명령어 하나로 최적화된 이미지를 생성해주는 도구들도 존재함


1. Spring Boot (Gradle)


Dockerfile을 직접 작성하지 않고도 내장된 도구로 이미지를 만들 수 있음


{% raw %}
```yaml
./gradlew bootBuildImage
```
{% endraw %}

- Cloud Native Buildpacks를 사용하여 최적화된 이미지를 자동으로 생성

2. Next.js


Next.js 역시 빌드(Build) 과정에서 정적 파일과 최적화된 서버 코드가 생성되는데 빌드 결과물인 `.next` 폴더와 `public`, `node_modules` 중 실행에 필요한 파일만 Multi-stage로 분리하여 구성하는 것이 표준


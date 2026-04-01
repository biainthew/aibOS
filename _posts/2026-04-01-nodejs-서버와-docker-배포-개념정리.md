---
layout: post
title: "Node.js 서버와 Docker 배포 개념정리"
date: 2026-04-01
categories: [general]
tags: [Infra]
excerpt_separator: ""
---



### Node.js 와 Express 기반 서버


핵심 개념

- Node.js : 자바스크립트 코드를 브라우저 외부(OS 환경)에서 실행할 수 있게 해주는 런타임으로 이를 통해 서버 사이드 어플리케이션 작성이 가능함
- Express : Node.js 위에서 웹 서버를 더 쉽고 빠르게 만들 수 있도록 도와주는 프레임워크
- NPM 환경 : npm init -y 명령어를 통해 프로젝트 설정 파일인 package.json 을 생성

개발 및 운영 도구

- Nodemon : 코드 수정 시 서버를 자동으로 재시작해주는 개발용 도구
- PM2 : 실제 운영 환경에서 서버가 죽지 않고 계속 실행되도록 관리해주는 프로세스 매니저

### Dockerfile 분석


| **명령어**     | **설명**                        | **비고**                                       |
| ----------- | ----------------------------- | -------------------------------------------- |
| **FROM**    | 베이스가 될 OS 및 환경 이미지를 선택        | `node:22.22-alpine3.22` (경량 버전 권장)           |
| **WORKDIR** | 컨테이너 내부에서 명령어가 실행될 작업 디렉토리 설정 | 예: `/app`                                    |
| **COPY**    | 호스트 컴퓨터의 파일을 이미지 내부로 복사       | `.dockerignore`로 불필요한 파일 제외 가능               |
| **RUN**     | 이미지 빌드 단계에서 실행할 명령어           | `["npm", "install"]` (Shell 호환성 위해 배열 형태 권장) |
| **EXPOSE**  | 컨테이너가 사용할 포트를 명시              | 실제 포트를 개방하는 것이 아닌 문서화 용도                     |
| **CMD**     | 컨테이너가 시작될 때 실행할 최종 명령어        | 하나의 Dockerfile에 한 번만 사용 가능                   |


{% raw %}
```yaml
# FROM 이미지 : OS가 설치된 이미지 - docker hub 에서 검색하면 됨
FROM node:22.22-alpine3.22

# RUN npm install express 하면 최신 버전을 설치해주기 때문에 버전이 안 맞을 수도 있고 설치할 라이브러리가 많으면 귀찮으니까 package.json 을 다른 컴퓨터로 복사하고 npm install 만 하도록 함
# 경로 이동
WORKDIR /app

# COPY {옮길 파일 경로} {이미지 파일 경로}, . 은 현재 경로라는 뜻
# 복사하기 싫은 파일은 .dockerignore 파일을 만들어서 거기에 파일명 적어주면 됨
COPY . .

# RUN npm install 이렇게 작성하면 내 OS 에 기본적으로 설치된 shell 을 이용해서 실행되는데 호환성 문제가 있을 수 있어서 아래처럼 작성하는 게 권장됨
RUN ["npm", "install"]

# 8080 포트를 사용하겠다
EXPOSE 8080

# 마지막 명령어는 CMD 혹은 ENTRYPOINT
CMD ["node", "server.js"]
```
{% endraw %}


### 이미지 빌드 및 컨테이너 실행


1. 이미지 생성(Build)


{% raw %}
```bash
docker build -t 이미지이름:태그 .
```
{% endraw %}

- `-t` : 이미지의 이름과 태그(버전)를 설정
- `docker init` 명령어를 사용하면 기본적인 Dockerfile 템플릿을 생성해줘서 그걸 수정해서 사용해도 됨

2. 컨테이너 실행(Run)


{% raw %}
```bash
docker run -p 8081:8080 -d 이미지명:태그명
```
{% endraw %}

- `-p` (Port Forwarding) : 8081:8080 은 외부(내 컴퓨터) 8081 포트로 들어온 요청을 컨테이너 내부 8080 포트로 전달하라는 의미
- `-d` (Detached) : 백그라운드에서 컨테이너를 실행

### 네트워크 및 접속 원리


포트 포워딩이 필요한 이유


도커 컨테이너는 내 컴퓨터 안에서 돌아가는 독립된 가상 컴퓨터와 같기 때문에 내 컴퓨터의 포트와 가상 컴퓨터의 포트를 연결해주는 통로를 만들어주지 않으면 외부 브라우저에서 컨테이너 내부의 웹 서버에 접근할 수 없음


![image.png](/aibOS/public/images/posts/3350a7f9-c418b430f654.png)


![image.png](/aibOS/public/images/posts/3350a7f9-83689266b76e.png)


서버 접속 방법

- 웹 브라우저에서 다른 컴퓨터에 접속하는 방법 ? >> 어떤컴퓨터IP주소:포트번호 입력
- 내가 내 컴퓨터에 접속하는 방법 ? >> 내컴퓨터IP주소:포트번호 입력
- 근데 내 컴퓨터는 IP 찾을 필요 없이 [localhost](http://localhost/) 라고 입력하면 됨
- 그래서 [localhost:8080](http://localhost:8080/) 을 입력하면 내가 남의 입장이 되어서 내 컴퓨터로 들어가는 것과 똑같음

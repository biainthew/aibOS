---
layout: post
title: "Mixed Content 에러 트러블슈팅"
date: 2026-03-28
categories: [general]
tags: [Java]
excerpt_separator: ""
---



CloudFront로 프론트엔드를 HTTPS 배포한 후 백엔드 API 호출이 차단된 문제를 해결한 과정


### 문제 상황


CloudFront에 프론트엔드를 배포하고 `https://communeio.site`로 접속했을 때 로그인 API 호출이 차단됨


{% raw %}
```shell
Mixed Content: The page at 'https://communeio.site/' was loaded over HTTPS,
but requested an insecure resource 'http://43.200.13.206:8080/api/auth/login'.
This request has been blocked; the content must be served over HTTPS.
```
{% endraw %}


### 원인

- 브라우저는 HTTPS 페이지에서 HTTP 리소스를 요청하는 것을 보안상 차단함
- 프론트엔드는 CloudFront를 통해 HTTPS로 서빙되고 있었지만 백엔드 EC2는 HTTP로만 운영되고 있었기 때문에 발생한 문제

### 해결 과정


1. 도메인 구매 및 Route 53 설정

- EC2에 HTTPS를 적용하려면 도메인이 필요해서 가비아에서 `communeio.site` 도메인을 구매
- Route 53에 호스팅 영역을 생성하고 가비아 네임서버를 Route 53 NS 레코드로 교체함

    > 💡 **네임서버(NS)**  
    > - 인터넷에서 도메인 이름을 IP 주소로 변환하는 서버  
    >   
    > - 누군가 특정 사이트에 접속 → 이 도메인의 IP 가 뭔지 네임 서버에게 물어봄 → 네임서버가 답해줌  
    >   
    > - 가비아에서 도메인을 사면 기본적으로 가비아 네임서버가 설정되어 있는데 그걸 Route 53으로 교체  
    > → 이제 내 사이트에 대한 DNS 질문은 가비아가 아니라 Route 53이 답해주는 것  
    >   
    > **NS 레코드**  
    >   
    > - 이 도메인의 네임서버는 여기야 라고 알려주는 DNS 레코드  
    >   
    > - Route 53 호스팅 영역을 만들면 자동으로 NS 레코드 네 개가 생성됨  
    >   
    > - 가비아에 그 네 개를 입력 → 앞으로 이 사이트 관련 DNS 질문은 Route 53 에게 하라고 설정한 것  
    >   
    > **호스팅 영역**  
    >   
    > - Route 53 에서 특정 도메인의 DNS 레코드를 관리하는 공간  
    >   
    > - 호스팅 영역 안에 A 레코드, CNAME 레코드 등을 추가해서 도메인과 서버를 연

- 백엔드용 서브도메인 `api.communeio.site`의 A 레코드를 EC2 퍼블릭 IP로 설정함

    > 💡 A 레코드  
    > - 도메인을 IP 주소로 연결하는 레코드  
    >   
    > - 사용자가 사이트에 접속하면 Route 53 이 A 레코드를 보고 IP 주소를 안내해줌  
    >   
    > CNAME 레코드  
    >   
    > - 도메인을 다른 도메인으로 연결하는 레코드  
    >   
    > - IP 주소가 아니라 도메인 주소로 연결  
    >   
    > - CloudFront 는 IP 가 자주 바뀌기 때문에 IP 대신 CloudFront 도메인으로 연결  
    >   
    > | 레코드   | 도메인                | 연결 대상      | 용도         |  
    > | ----- | ------------------ | ---------- | ---------- |  
    > | A     | communeio.site     | CloudFront | 프론트엔드      |  
    > | A     | api.communeio.site | EC2 IP     | 백엔드 API    |  
    > | CNAME | ACM 검증용            | ACM 검증 값   | SSL 인증서 검증 |


2. ACM SSL 인증서 발급

- HTTPS 적용을 위해 발급받음
- CloudFront는 `us-east-1` 리전의 인증서만 지원하기 때문에 버지니아 북부 리전에서 인증서를 발급받아야 함
- ACM에서 `communeio.site`와 `*.communeio.site` 와일드카드 도메인을 포함한 인증서를 발급받고 DNS 검증 방식으로 Route 53에 CNAME 레코드를 자동 추가해서 검증 완료함

3. EC2에 Nginx + Let's Encrypt 설정

- EC2에 Nginx를 설치하고 Certbot으로 Let's Encrypt SSL 인증서를 발급받음

{% raw %}
```bash
sudo apt install -y nginx
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d api.communeio.site
```
{% endraw %}

- Nginx 설정에서 HTTPS 요청을 Spring Boot(8080)로 프록시(중간에서 요청을 대신 전달)하도록 구성함

{% raw %}
```shell
server {
    listen 80;
    server_name api.communeio.site;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name api.communeio.site;

    ssl_certificate /etc/letsencrypt/live/api.communeio.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.communeio.site/privkey.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
{% endraw %}


> 💡 **Nginx 가 필요한 이유**  
> - 스프링부트를 8080 포트에서 직접 HTTPS 로 운영하려면 설정이 복잡함  
>   
> - 대신 Nginx 가 HTTPS 를 담당하고 내부적으로 스프링부트로 전달하는 구조로 설계  
>   
> - 사용자 입장에서는 Nginx 에만 요청  
>   
> 클라이언트 → HTTPS → Nginx (인증서 보유) → HTTP → Spring Boot


4. CloudFront 도메인 연결 및 CorsConfig 업데이트

- CloudFront 배포에 `communeio.site` 대체 도메인을 추가하고 ACM 인증서를 연결
- 백엔드 `CorsConfig`에 운영 도메인을 추가

{% raw %}
```java
.allowedOrigins(
        "http://localhost:5173",
        "https://communeio.site"
)
```
{% endraw %}

- 프론트엔드 환경변수도 업데이트함

{% raw %}
```yaml
VITE_API_URL=https://api.communeio.site
```
{% endraw %}


### 최종 구조


{% raw %}
```html
사용자
  ↓ HTTPS
CloudFront → S3 (프론트엔드)
  ↓ HTTPS
api.communeio.site
  ↓ Nginx 프록시
EC2 localhost:8080 (Spring Boot)
  ↓
RDS MySQL
```
{% endraw %}


### 참고


ACM 인증서는 반드시 `us-east-1` 리전에서 발급받아야 CloudFront에서 사용할 수 있음


서울 리전에서 발급받으면 CloudFront 인증서 목록에 나타나지 않음


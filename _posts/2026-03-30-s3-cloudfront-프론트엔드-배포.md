---
layout: post
title: "S3 + CloudFront 프론트엔드 배포"
date: 2026-03-27
categories: [general]
tags: [Infra, React]
excerpt_separator: ""
---



React + Vite로 만든 프론트엔드를 AWS S3와 CloudFront를 사용해 배포한 과정


### 구성 방식


{% raw %}
```html
사용자 → CloudFront (HTTPS) → S3 (빌드 결과물 / HTTP)
```
{% endraw %}

- S3에 React 빌드 결과물을 올리고 CloudFront를 CDN으로 앞에 두는 구조
- CloudFront가 HTTPS와 캐싱을 담당하고 S3는 비공개로 유지함

> 💡 **HTTPS 담당**  
> - S3는 자체적으로 HTTPS 를 지원하지 않기 때문에 CloudFront 가 앞에서 SSL 인증서를 붙여서 사용자에게 HTTPS 로 서빙해주는 것  
>   
> - 사용자 입장에서는 HTTPS 로 접근하지만 실제로 CloudFront 가 S3에서 파일을 가져올 때는 내부적으로 HTTP 로 통신함  
>   
> **캐싱 담당**  
>   
> - S3에서 파일을 매번 가져오면 느리기 때문에 CloudFront 는 전 세계 엣지 서버에 파일을 캐싱해두고 사용자가 요청하면 가장 가까운 서버에서 바로 응답  
>   
> - 그래서 새 빌드 결과물을 올릴 때 CloudFront 캐시 무효화를 해야함


### Vercel 대신 S3 + CloudFront를 선택한 이유


Vercel은 설정 없이 배포가 가능하지만 이미 사용해본 경험이 있고 S3 정적 호스팅과 CloudFront CDN 구성은 실무에서 프론트엔드 배포에 많이 쓰이는 방식이라고 해서 경험을 쌓기 위해 선택함


### S3 버킷 설정


| 항목         | 설정값                 |
| ---------- | ------------------- |
| 버킷 이름      | noticeboard-front   |
| 리전         | ap-northeast-2 (서울) |
| 퍼블릭 액세스 차단 | 모두 차단 유지            |

- 퍼블릭 액세스를 차단하는 이유는 CloudFront를 통해서만 접근하도록 제한하기 위해서
- S3를 직접 열지 않고 OAC 방식으로 CloudFront만 접근할 수 있도록 설정함

### OAC (Origin Access Control)


CloudFront가 S3에 접근할 때 사용하는 인증 방식으로 S3 버킷을 퍼블릭으로 열지 않고 CloudFront만 접근할 수 있도록 제한함


{% raw %}
```html
사용자 → CloudFront → S3 (비공개)
사용자 → S3 직접 접근 불가
```
{% endraw %}


CloudFront 배포 생성 시 `Allow private S3 bucket access to CloudFront` 옵션을 선택하면 자동으로 S3 버킷 정책이 업데이트됨


### SPA 새로고침 404 처리


React SPA는 클라이언트 사이드 라우팅을 사용하기 때문에 새로고침 시 S3에서 해당 경로의 파일을 찾지 못해 에러가 발생함


> 💡 **서버 사이드 라우팅**  
> `https://communeio.site/board` 로 접속하면 서버가 `/board` 경로에 해당하는 파일을 찾아서 반환  
>   
> **클라이언트 사이드 라우팅**  
>   
> React 는 index.html 파일 하나만 서버에서 받고 /board, /post 같은 경로 전환은 자바스크립트가 브라우저 안에서 처리함  
>   
> **문제가 생기는 상황**  
>   
> 1. 처음 [https://communeio.site](https://communeio.site/) 로 접속하면 S3에서 index.html 을 반환하고 React 가 실행됨  
>   
> 2. 게시글 목록 페이지로 이동 후 새로고침 하면 브라우저가 [https://communeio.site](https://communeio.site/)/board 를 서버에 직접 요청  
>   
> 3. S3 에는 /board 파일이 없으니 403 반환  
>   
> **해결**  
>   
> CloudFront 에서 403을 받으면 index.html 을 반환하도록 설정  
>   
> -> React 가 다시 실행되면서 현재 URL 을 읽고 올바른 화면을 렌더링


OAC 방식에서는 존재하지 않는 경로 접근 시 404가 아니라 403이 반환되기 때문에 CloudFront 오류 페이지 설정에서 403을 `index.html`로 리다이렉트하도록 처리함


| HTTP 오류 코드 | 응답 페이지 경로   | HTTP 응답 코드 |
| ---------- | ----------- | ---------- |
| 403        | /index.html | 200        |


### GitHub Actions 자동 배포


main 브랜치에 push 시 자동으로 빌드하고 S3에 업로드한 뒤 CloudFront 캐시를 무효화하는 워크플로우 구성


{% raw %}
```yaml
- name: S3 동기화
  run: aws s3 sync dist/ s3://noticeboard-front --delete

- name: CloudFront 캐시 무효화
  run: |
    aws cloudfront create-invalidation \
      --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
      --paths "/*"
```
{% endraw %}

- `-delete` 옵션을 사용하는 이유는 S3에 남아있는 이전 빌드 파일을 삭제하기 위함
- CloudFront 캐시 무효화를 하는 이유는 새 빌드 결과물을 올려도 CloudFront가 기존 캐시를 그대로 서빙할 수 있기 때문. `/*`로 전체 캐시를 무효화함

### 환경변수 관리


빌드 시 `VITE_API_URL`을 GitHub Secrets에서 주입해서 백엔드 API 주소가 코드에 하드코딩되지 않도록 함


{% raw %}
```yaml
- name: 프로덕션 빌드
  run: npm run build
  env:
    VITE_API_URL: ${{ secrets.VITE_API_URL }}
```
{% endraw %}


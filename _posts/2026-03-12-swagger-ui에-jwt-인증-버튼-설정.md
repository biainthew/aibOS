---
layout: post
title: "Swagger UI에 JWT 인증 버튼 설정"
date: 2026-03-12
categories: [general]
tags: [Java]
excerpt_separator: ""
---



Spring boot 프로젝트에서 API 문서 자동화를 위해 Swagger 를 사용할 때 JWT 인증 버튼을 UI 에 포함시키는 설정


이 설정을 적용하면 Swagger UI 상단에 Authorize 버튼이 생기며 토큰을 한 번만 입력하면 모든 API 테스트 시 헤더에 `Authorization: Bearer {Token}` 이 자동으로 포함됨


{% raw %}
```java
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        String securitySchemeName = "BearerAuth";

        return new OpenAPI()
                .info(new Info()
                        .title("Noticeboard API")
                        .description("게시판 서비스 API")
                        .version("v1.0"))
                .addSecurityItem(new SecurityRequirement()
                        .addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName, new SecurityScheme()
                                .name(securitySchemeName)
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")));
    }
}
```
{% endraw %}


### API 기본 정보 설정 (`.info()`)

- `title`, `description`, `version` 등을 통해 이 API 문서가 어떤 서비스를 위한 것인지 현재 버전은 무엇인지 명시
- 브라우저에서 Swagger 접속 시 가장 상단에 노출되는 정보

### 인증 요구사항 적용 (`.addSecurityItem()`)

- 실제 API 호출 시 인증이 필요하다는 것을 선언하는 부분
- SecurityRequirement 를 추가함으로써 Swagger UI 의 각 API 옆에 자물쇠 아이콘이 생기고 설정한 인증 방식이 모든 요청에 포함되도록 함

### 보안 스키마 정의 (`.components()`)

- Type : Http 방식의 인증임을 명시
- Scheme : bearer 로 설정하여 헤더에 `Authorization: Bearer {Token}` 형식이 붙도록 함
- BearerFormat : 해당 토큰이 JWT 형식임을 안내하여 가독성을 높임
